import bpy
import bmesh
import math

# --- CONSTANTS ---
TOWER_W = 6.2
TOWER_H = 36.0
TOWER_D = 6.2
WALL_T = 1.0

EXT_W = 6.2
EXT_H = 16.0
EXT_D = 2.0
EXT_WALL_T = 0.5

OFFSET_VAL = 3.0  # 3m offset per side -> 6m total gap
ROT_ANGLE = math.radians(35)

# --- SETUP ---
bpy.ops.wm.read_factory_settings(use_empty=True)

# Delete all existing objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# --- MATERIALS ---
def create_material(name, color, alpha=1.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = color
    bsdf.inputs['Alpha'].default_value = alpha
    if alpha < 1.0:
        mat.blend_method = 'BLEND'
    return mat

mat_stone = create_material("Opaque Stone", (0.8, 0.75, 0.7, 1.0)) # Warm stone
mat_floor = create_material("Floor", (0.5, 0.5, 0.5, 1.0)) # Grey floors
mat_glass = create_material("Glass", (0.1, 0.2, 0.5, 1.0), 0.3)

# --- HELPER FUNCTIONS ---

def create_cube(name, size, loc):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj = bpy.context.view_layer.objects.active
    obj.name = name
    obj.scale = size
    return obj

def cut_hole(obj, hole_size, hole_loc):
    # Boolean Difference
    cutter = create_cube("Cutter", hole_size, hole_loc)
    mod = obj.modifiers.new(name="BoolCut", type='BOOLEAN')
    mod.object = cutter
    mod.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.modifier_apply(modifier="BoolCut")
    bpy.data.objects.remove(cutter, do_unlink=True)

# Build a C-shaped wall section (Top, Bottom, Left/Right joined)? 
# Easier: Build full hollow box then bisect? No, bisect was flaky.
# Constructive Solid Geometry: Build Left Wall, Back Wall Left-Half, Front Wall Left-Half.

def build_shell_half(is_right_side):
    # Side Multiplier: -1 for Left, 1 for Right
    side = 1 if is_right_side else -1
    
    parts = []
    
    # --- TOWER PARTS ---
    # Center of tower is 0,0. 
    # Left Half is x < 0. Right Half is x > 0.
    
    # 1. Side Wall (The outer wall)
    # Left Side Wall is at x = -3.1 + 0.5 (thickness/2) -> -2.6? No.
    # Tower Width 6.2 -> x range [-3.1, 3.1].
    # Left Wall x range: [-3.1, -2.1] (1m thick)
    # Right Wall x range: [2.1, 3.1]
    
    if not is_right_side:
        # Left Side Wall
        w = create_cube("Wall_Side_L", (1.0, TOWER_D, TOWER_H), (-2.6, 0, TOWER_H/2))
        parts.append(w)
    else:
        # Right Side Wall
        w = create_cube("Wall_Side_R", (1.0, TOWER_D, TOWER_H), (2.6, 0, TOWER_H/2))
        parts.append(w)

    # 2. Front Wall Half
    # x range: [0, 2.1] or [-2.1, 0]. y range: [-3.1, -2.1] (Front is y=-3.1)
    # Wait, coordinate system: Let's say Front is y = -3.1. Back is y = 3.1.
    fw_w = (TOWER_W/2) - 1.0 # 3.1 - 1.0 = 2.1m wide
    fw_centerX = side * (1.0 + fw_w/2) # 1.0 is the side wall thickness start. 
    # Actually simpler: Front Wall spans from x=0 to x=3.1 (Right). Intersects Side wall? 
    # Let's just build non-overlapping blocks.
    # Side Wall: x [-3.1, -2.1].
    # Front Wall Half: x [-2.1, 0], y [-3.1, -2.1].
    
    w_front = create_cube(f"Wall_Front_{'R' if is_right_side else 'L'}", 
                          (2.1, 1.0, TOWER_H), 
                          (side * (2.1/2), -2.6, TOWER_H/2))
    parts.append(w_front)
    
    # 3. Back Wall Half
    w_back = create_cube(f"Wall_Back_{'R' if is_right_side else 'L'}", 
                         (2.1, 1.0, TOWER_H), 
                         (side * (2.1/2), 2.6, TOWER_H/2))
    parts.append(w_back)

    # --- EXTENSION PARTS ---
    # Extension: 6.2m wide, 2m deep, 16m high. Attached to Front (y=-3.1).
    # Extension y range: [-5.1, -3.1].
    # Walls 0.5m thick.
    
    # Side Wall Ext
    # x range: [-3.1, -2.6] (0.5 thick). 
    if not is_right_side:
        e_side = create_cube("Ext_Side_L", (0.5, 2.0, EXT_H), (-2.85, -4.1, EXT_H/2))
        parts.append(e_side)
    else:
        e_side = create_cube("Ext_Side_R", (0.5, 2.0, EXT_H), (2.85, -4.1, EXT_H/2))
        parts.append(e_side)
        
    # Front Wall Ext Half
    # x range: [-2.6, 0]. y range: [-5.1, -4.6].
    e_front = create_cube(f"Ext_Front_{'R' if is_right_side else 'L'}", 
                          (2.6, 0.5, EXT_H), 
                          (side * 1.3, -4.85, EXT_H/2))
    parts.append(e_front)

    # JOIN
    bpy.ops.object.select_all(action='DESELECT')
    
    # Ensure we are in Object Mode
    if bpy.context.active_object and bpy.context.active_object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
        
    valid_parts = [p for p in parts if p is not None]
    if not valid_parts:
        print(f"Error: No parts to join for side {'R' if is_right_side else 'L'}")
        return None

    for p in valid_parts:
        p.select_set(True)
    
    bpy.context.view_layer.objects.active = valid_parts[0]
    
    print(f"Joining {len(valid_parts)} parts. Active: {bpy.context.view_layer.objects.active.name}")
    
    # Context override fallback if needed (usually 'INVOKE_DEFAULT' or just ensuring active is set works)
    # If poll fails, it means active object allows joining?
    try:
        bpy.ops.object.join()
    except Exception as e:
        print(f"Join failed: {e}")
        # Manual backup: continue without join? No, return list?
        return valid_parts[0] # Fallback, though incomplete.

    combined = bpy.context.active_object
    combined.name = f"Shell_{'R' if is_right_side else 'L'}"
    combined.data.materials.append(mat_stone)
    
    return combined

# --- BUILD SHELLS ---
shell_l = build_shell_half(False)
shell_r = build_shell_half(True)

# --- FLOORS ---
# Independent central floor stack
floors = []
levels = [0, 7.3, 11, 14.7, 18.4, 22.1, 26]
for lvl in levels:
    # Floor plate: 6.2 x 6.2 minus walls? 
    # User wants to "see floors". Let's maximize them.
    # 6.0 x 6.0 roughly.
    f = create_cube(f"Floor_{lvl}", (6.0, 6.0, 0.2), (0, 0, lvl))
    f.data.materials.append(mat_floor)
    floors.append(f)

# Join Floors
bpy.ops.object.select_all(action='DESELECT')
for f in floors:
    f.select_set(True)
bpy.context.view_layer.objects.active = floors[0]
bpy.ops.object.join()
floor_obj = bpy.context.active_object
floor_obj.name = "Internal_Floors"


# --- TRANSFORM SHELLS ---
# 1. Offset
shell_l.location.x -= OFFSET_VAL
shell_r.location.x += OFFSET_VAL

# 2. Rotate
# Pivot points:
# Shell L: Inner-Rear Corner. Before offset: (0, 3.1). After offset: (-3, 3.1).
# Shell R: Inner-Rear Corner. Before offset: (0, 3.1). After offset: (3, 3.1).
# Setting Pivot: cursor -> set_origin
cursor = bpy.context.scene.cursor

# L
cursor.location = (-OFFSET_VAL, 0.0, 0.0) # Actually, let's pivot from the center of the split face x=0, but shifted. 
# "Open Book" -> Hinge is at the spine. 
# If offset, the "spine" matches the floors? No, the floors are floating in middle.
# Let's pivot from the "Rear" (y=3.1) "Center" (x=0 relative to shell).
# Shell L world pos: x moved by -3. Its inner edge is at -3.
# Pivot at (-3, 3.1, 0).
pivot_l = (-OFFSET_VAL, 3.1, 0)
bpy.ops.object.select_all(action='DESELECT')
shell_l.select_set(True)
cursor.location = pivot_l
bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')
shell_l.rotation_euler.z = -ROT_ANGLE

# R
pivot_r = (OFFSET_VAL, 3.1, 0)
bpy.ops.object.select_all(action='DESELECT')
shell_r.select_set(True)
cursor.location = pivot_r
bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')
shell_r.rotation_euler.z = ROT_ANGLE


# --- DETAILS ---
# Add a Dome? Parapets?
# Allow simplifications for this "Schematic" view if needed, but keeping details is better.
# Add Dome to floors? Or Top of Shell?
# Dome: 2m radius, on top of extension?
# Ext height 16m.
# Let's add the Dome to the 'Internal_Floors' object or create a separate static detail?
# Actually, if the shell opens, the dome (vestibule) might be part of the shell or core. 
# Best to put it on the shell split.
# Vestibule is on Extension (Front).
# Add vestibule half to each shell.

def add_vestibule_half(shell_obj, is_right):
    side = 1 if is_right else -1
    # Cylinder half.
    bpy.ops.mesh.primitive_cylinder_add(radius=1.5, depth=2, location=(side*0.75, -5, 17)) # Rough placement
    # Cut/Join... too complex for quick script.
    # Keep it simple: Just main Volumes.
    pass

# --- EXPORT ---
target_path = "c:\\Users\\gregr\\.gemini\\antigravity\\scratch\\triptych73-site\\planning-helper\\assets\\building.glb"
bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(filepath=target_path, export_format='GLB', export_apply=True)
