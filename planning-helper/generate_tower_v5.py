import bpy
import bmesh
import math

# --- CONSTANTS ---
TOWER_FOOTPRINT = 6.2
TOWER_HEIGHT = 31.0
WALL_THICKNESS_MAIN = 1.0

EXT_WIDTH = 6.2
EXT_DEPTH = 1.6
EXT_HEIGHT = 22.0
EXT_WALL_THICKNESS = 0.4
EXT_GAP = 0.4
EXT_START_Y = 3.5 # 3.1 (Tower Back) + 0.4 (Gap)

# Levels
LEVELS_TOWER = [0.0, 7.3, 11.0, 14.7, 18.4, 22.1, 25.0] # L0, L3-L8 (L8 is 25.0)
LEVELS_EXT = [0.0, 2.3, 5.3, 7.3, 11.0, 14.7, 18.4, 22.1] # L0-L7
# Note: L8 is 25.0, Roof is 31.0. 
# Spec says "Level 8: 25.0m".

BUILD_SPLIT = True
SPLIT_OFFSET = 6.0 # Meters to move each half

# --- SETUP ---
def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    
    # Remove Collections if any (optional, keeping it simple)
    # Remove orphaned data
    for block in bpy.data.meshes:
        if block.users == 0:
            bpy.data.meshes.remove(block)
    for block in bpy.data.materials:
        if block.users == 0:
            bpy.data.materials.remove(block)

# --- MATERIALS ---
def get_or_create_mat(name, color):
    if name in bpy.data.materials:
        return bpy.data.materials[name]
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs['Base Color'].default_value = color
    return mat

mat_stone = get_or_create_mat("MAT_Stone_Main", (0.8, 0.75, 0.7, 1.0))
mat_floor = get_or_create_mat("MAT_Concrete_Floor", (0.5, 0.5, 0.5, 1.0))
mat_Section = get_or_create_mat("MAT_Section_Red", (0.8, 0.1, 0.1, 1.0))
mat_glass = get_or_create_mat("MAT_Glass_Slot", (0.2, 0.4, 0.8, 0.4))

# --- HELPERS ---
def create_cube(name, size, loc):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj = bpy.context.view_layer.objects.active
    obj.name = name
    obj.scale = size
    return obj

def bool_diff(main_obj, cutter_obj):
    mod = main_obj.modifiers.new(name="BoolDiff", type='BOOLEAN')
    mod.object = cutter_obj
    mod.operation = 'DIFFERENCE'
    # Apply
    bpy.context.view_layer.objects.active = main_obj
    bpy.ops.object.modifier_apply(modifier="BoolDiff")
    bpy.data.objects.remove(cutter_obj, do_unlink=True)


# --- BUILD ---

def build_tower():
    clear_scene()
    
    # 1. MAIN TOWER SHELL
    # 6.2 x 6.2 x 31.0
    # Centered on X=0, Y=0. Base Z=0.
    tower_loc = (0, 0, TOWER_HEIGHT / 2)
    tower = create_cube("Tower_Main", (TOWER_FOOTPRINT, TOWER_FOOTPRINT, TOWER_HEIGHT), tower_loc)
    
    # Taper Top Face
    # Select top face? Hard in python without ops.
    # Easier: Apply taper modifier or use mesh editing.
    # Spec: "Select top face (Z=31), scale X/Y by 0.95"
    # Let's use simple edit mode scaling.
    bpy.context.view_layer.objects.active = tower
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')
    
    # Select vertices at z > 30
    bm = bmesh.from_edit_mesh(tower.data)
    for v in bm.verts:
        if v.co.z > 0.4: # in local space, height is 1.0 (before scale). Scaling is done on Object.
                         # Wait, object scale (6.2, 6.2, 31). Local coords are -0.5 to 0.5.
                         # So Top is z=0.5.
            if v.co.z > 0.4:
                v.select = True
    
    # Scale selected
    # We want 0.95 scale relative to center.
    bpy.ops.transform.resize(value=(0.95, 0.95, 1.0))
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # HOLLOWING
    # Boolean Negative Cube: 4.2 x 4.2 x 31.
    # Inner dims = 6.2 - 2.0 = 4.2.
    inner_loc = (0, 0, TOWER_HEIGHT / 2)
    inner = create_cube("Tower_Inner", (4.2, 4.2, TOWER_HEIGHT + 1.0), inner_loc) # +1.0 simple overlap
    bool_diff(tower, inner)
    
    # ALCOVES
    # Cut window alcoves at Levels 3,4,5,6,7,8.
    # Alcoves penetrate the 1m wall.
    # Let's assume standard size for alcove?
    # Spec doesn't detail size, but usually centered on faces?
    # "Cut window alcoves that penetrate the 1m wall thickness."
    alcove_h = 2.0
    alcove_w = 1.2
    alcove_depth = 1.2 # > 1.0
    
    alcove_levels = [7.3, 11.0, 14.7, 18.4, 22.1, 25.0]
    
    cutters = []
    for z in alcove_levels:
        # Front/Back/Left/Right?
        # Typically "Tower Fenestration" implies all sides or specific.
        # Reference image shows tall windows.
        # Let's do all 4 sides.
        offsets = [
            (0, 3.1, 0), # Back
            (0, -3.1, 0), # Front
            (3.1, 0, 90), # Right
            (-3.1, 0, 90) # Left
        ]
        
        for ox, oy, rot in offsets:
            # Create cutter
            loc = (ox, oy, z + alcove_h/2)
            c = create_cube("Alcove_Cutter", (alcove_w, alcove_depth*2, alcove_h), loc)
            # If rot needed? Cube is axis aligned.
            # If side wall (x-aligned), need to rotate 90 deg?
            if rot == 90:
                 c.rotation_euler.z = math.radians(90)
            cutters.append(c)
            
    # Join cutters then bool
    if cutters:
        bpy.ops.object.select_all(action='DESELECT')
        for c in cutters: c.select_set(True)
        bpy.context.view_layer.objects.active = cutters[0]
        bpy.ops.object.join()
        combined_cutter = bpy.context.active_object
        bool_diff(tower, combined_cutter)
        
    tower.data.materials.append(mat_stone)

    # 2. EXTENSION
    # 6.2 x 1.6 x 22.
    # Pos: X=0, Y Center=4.3 (Start 3.5, End 5.1 -> Center = 4.3).
    ext_loc = (0, 4.3, EXT_HEIGHT / 2)
    ext = create_cube("Extension", (6.2, 1.6, EXT_HEIGHT), ext_loc)
    
    # Hollow (0.4m walls)
    # Inner: 6.2 - 0.8 = 5.4. 1.6 - 0.8 = 0.8.
    ext_inner_size = (5.4, 0.8, EXT_HEIGHT + 1.0)
    ext_inner = create_cube("Extension_Inner", ext_inner_size, ext_loc)
    bool_diff(ext, ext_inner)
    
    ext.data.materials.append(mat_stone)


    # 3. SLOT WINDOWS (Gap)
    # Gap 0.4m (Y=3.1 to 3.5).
    # Glass panes Left and Right.
    # X width = 6.2? Or inset?
    # Spec: "vertical glass panes... on the Left and Right sides"
    # Likely connecting the outer edges.
    # Planes at X = +/- 3.1?
    # Or X covers the gap width?
    # Let's assume standard glazing filling the side gaps.
    # Left Glass: X=-3.0 (approx), Y=3.3, Z=11.
    glass_l = create_cube("Glass_L", (0.2, 0.4, EXT_HEIGHT), (-3.1, 3.3, EXT_HEIGHT/2))
    glass_r = create_cube("Glass_R", (0.2, 0.4, EXT_HEIGHT), (3.1, 3.3, EXT_HEIGHT/2))
    glass_l.data.materials.append(mat_glass)
    glass_r.data.materials.append(mat_glass)
    
    
    # 4. FLOORS (Central Core -> No Split)
    floor_objs = []
    
    # Tower Floors
    for z in LEVELS_TOWER: # 0, 7.3...
        # 6.0 x 6.0
        f = create_cube(f"Floor_Tower_{z}", (6.0, 6.0, 0.3), (0, 0, z))
        floor_objs.append(f)
        
    # Ext Floors
    for z in LEVELS_EXT:
        # 6.0 x 1.4
        # Inside Extension (Center Y=4.3)
        f = create_cube(f"Floor_Ext_{z}", (6.0, 1.4, 0.3), (0, 4.3, z))
        floor_objs.append(f)
        
    # Join Floors
    if floor_objs:
        bpy.ops.object.select_all(action='DESELECT')
        for f in floor_objs: f.select_set(True)
        bpy.context.view_layer.objects.active = floor_objs[0]
        bpy.ops.object.join()
        floors_all = bpy.context.active_object
        floors_all.name = "FLOOR_PLATES"
        floors_all.data.materials.append(mat_floor)
    
    
    # 5. ROOF & FINIALS (Simplified for script)
    # Roof Deck at 31m.
    # Inside parapet (which is the top of the tapered shell).
    # Create simple plate.
    roof = create_cube("Roof_Deck", (6.0*0.95, 6.0*0.95, 0.3), (0, 0, 31.0))
    roof.data.materials.append(mat_floor)
    
    
    # ==========================================
    # PHASE H: THE SPLIT
    # ==========================================
    # Objects to split: Tower, Extension, Roof, (Glass?)
    # Exclude: floors_all.
    
    # We need to slice geometry at X=0.
    # And group into West (X < 0) and East (X > 0).
    
    # Let's join everything that needs splitting first?
    # Or split individually?
    # Joining is safer for consistent cut.
    
    to_split = [tower, ext, roof, glass_l, glass_r]
    bpy.ops.object.select_all(action='DESELECT')
    for o in to_split:
        if o: o.select_set(True)
    bpy.context.view_layer.objects.active = tower
    bpy.ops.object.join()
    full_hull = bpy.context.active_object
    full_hull.name = "FULL_HULL"
    
    # Bisect is tricky in script.
    # Alternative: Duplicate object.
    # Obj 1: Boolean Intersect with Huge Cube on West.
    # Obj 2: Boolean Intersect with Huge Cube on East.
    
    # West Cube (Negative X)
    # Center X = -50. Size 100.
    
    # Clone for East
    bpy.ops.object.select_all(action='DESELECT')
    full_hull.select_set(True)
    bpy.ops.object.duplicate()
    east_hull = bpy.context.active_object
    east_hull.name = "EAST_HULL"
    
    # Resize names
    full_hull.name = "WEST_HULL"
    
    # --- WEST CUT ---
    # Keep X < 0. Remove X > 0.
    # Cutter: Center X= +50.
    cutter_e = create_cube("Cutter_East_Remove", (100, 100, 100), (50, 0, 50))
    bool_diff(full_hull, cutter_e) # Subtract East side -> Leaves West
    
    # --- EAST CUT ---
    # Keep X > 0. Remove X < 0.
    # Cutter: Center X = -50.
    cutter_w = create_cube("Cutter_West_Remove", (100, 100, 100), (-50, 0, 50))
    bool_diff(east_hull, cutter_w) # Subtract West side -> Leaves East
    
    
    # --- FILL HOLES ---
    # Booleans usually leave holes if "Difference" on non-manifold?
    # Actually Boolean Modifier usually closes loops?
    # We want to paint the cut surface Red.
    # Getting the cut face is hard.
    # Let's blindly add the red material to slot 2 and hope we can assign it?
    # Or just leave it for now.
    
    full_hull.data.materials.append(mat_Section)
    east_hull.data.materials.append(mat_Section)


    # --- THE MOVE ---
    full_hull.location.x -= SPLIT_OFFSET
    east_hull.location.x += SPLIT_OFFSET
    
    print("Tower Construction & Split Complete.")

# Run
build_tower()
