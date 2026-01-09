import bpy
import bmesh
import math

# ------------------------------------------------------------------------
# 1. HELPER FUNCTIONS
# ------------------------------------------------------------------------

def clear_scene():
    if bpy.context.active_object and bpy.context.active_object.mode == 'EDIT':
        bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    
    # Purge data blocks
    for collection in [bpy.data.meshes, bpy.data.materials, bpy.data.textures, bpy.data.images]:
        for block in collection:
            if block.users == 0:
                collection.remove(block)

# Function to set keyframes for animation
def keyframe_location(obj, frame, location):
    obj.location = location
    obj.keyframe_insert(data_path="location", frame=frame)

def create_procedural_limestone(name="Limestone"):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()
    
    output = nodes.new(type='ShaderNodeOutputMaterial')
    output.location = (400, 0)
    
    bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')
    bsdf.location = (100, 0)
    bsdf.inputs['Roughness'].default_value = 0.8
    
    noise_color = nodes.new(type='ShaderNodeTexNoise')
    noise_color.location = (-600, 100)
    noise_color.inputs['Scale'].default_value = 5.0
    noise_color.inputs['Detail'].default_value = 15.0
    
    color_ramp = nodes.new(type='ShaderNodeValToRGB')
    color_ramp.location = (-300, 100)
    color_ramp.color_ramp.elements[0].color = (0.7, 0.65, 0.55, 1) 
    color_ramp.color_ramp.elements[1].color = (0.9, 0.85, 0.75, 1)
    
    links.new(noise_color.outputs['Fac'], color_ramp.inputs['Fac'])
    links.new(color_ramp.outputs['Color'], bsdf.inputs['Base Color'])
    
    noise_bump = nodes.new(type='ShaderNodeTexNoise')
    noise_bump.location = (-600, -200)
    noise_bump.inputs['Scale'].default_value = 50.0
    
    bump = nodes.new(type='ShaderNodeBump')
    bump.location = (-300, -200)
    bump.inputs['Strength'].default_value = 0.2
    
    links.new(noise_bump.outputs['Fac'], bump.inputs['Height'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    
    links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])
    
    return mat

def create_aluminium(name="Aluminium"):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.6, 0.6, 0.62, 1)
    bsdf.inputs['Metallic'].default_value = 1.0
    bsdf.inputs['Roughness'].default_value = 0.2
    return mat

def create_glass(name="Glass"):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.95, 0.98, 1.0, 1)
    bsdf.inputs['Transmission Weight'].default_value = 1.0
    bsdf.inputs['Roughness'].default_value = 0.0
    bsdf.inputs['IOR'].default_value = 1.45
    return mat

def create_floor_material(name="RoofFloor"):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.5, 0.5, 0.5, 1) # Concrete grey
    bsdf.inputs['Roughness'].default_value = 0.9
    return mat

# ------------------------------------------------------------------------
# 2. MAIN GENERATION
# ------------------------------------------------------------------------

def main():
    clear_scene()
    
    # Params
    opening_width = 4.0
    rf_depth = 0.7  # Rooflight depth
    rf_height_back = 0.8
    # Slope: let's drop 10cm to the front
    slope_drop = 0.1
    rf_height_front = rf_height_back - slope_drop
    
    wall_thick = 0.3
    wall_height = 2.0
    side_wall_extension = 2.0 # Extend 2m beyond the 0.7m opening
    
    # Materials
    mat_stone = create_procedural_limestone()
    mat_alum = create_aluminium()
    mat_glass = create_glass()
    mat_floor = create_floor_material()
    
    # -- 1. Floor --
    bpy.ops.mesh.primitive_plane_add(size=15)
    floor = bpy.context.active_object
    floor.name = "Roof_Floor"
    floor.location = (0, -2, 0) 
    floor.data.materials.append(mat_floor)
    
    # -- 2. Walls --
    
    # Back Wall (centered at Y=wall_thick/2)
    bpy.ops.mesh.primitive_cube_add(size=1)
    back_wall = bpy.context.active_object
    back_wall.name = "Wall_Back"
    # Width covers the opening + side walls
    bw_width = opening_width + (wall_thick * 2) + 2.0 # Add some extra side wings
    back_wall.scale = (bw_width, wall_thick, wall_height)
    back_wall.location = (0, wall_thick/2, wall_height/2)
    back_wall.data.materials.append(mat_stone)
    
    # Side Walls
    # Start at Back Wall face (Y=0) and go negative Y
    # Length: rf_depth + side_wall_extension
    sw_len = rf_depth + side_wall_extension
    
    for side, x_mult in [("Left", -1), ("Right", 1)]:
        bpy.ops.mesh.primitive_cube_add(size=1)
        sw = bpy.context.active_object
        sw.name = f"Wall_{side}"
        sw.scale = (wall_thick, sw_len, wall_height)
        # Center Y position: -sw_len/2
        # Center Z position: wall_height/2
        # Center X position: +/- (opening_width/2 + wall_thick/2)
        sw.location = ((opening_width/2 + wall_thick/2) * x_mult, -sw_len/2, wall_height/2)
        sw.data.materials.append(mat_stone)
        
        # Add Vertical Profile on Side Walls at the corner where glass will be (at Y = -rf_depth)
        # "profile affixed the limestone walls"
        bpy.ops.mesh.primitive_cube_add(size=1)
        wp = bpy.context.active_object
        wp.name = f"Wall_Profile_{side}"
        wp.scale = (0.05, 0.05, rf_height_front + 0.1) # Go up to rooflight height
        # Location: Just inside the wall, at Y = -rf_depth
        wp_x = (opening_width/2) * x_mult
        wp.location = (wp_x, -rf_depth, (rf_height_front)/2)
        wp.data.materials.append(mat_alum)

    # -- 3. Front Vertical Glass --
    # Located at Y = -rf_depth.
    # Height = rf_height_front (minus a bit for frame?)
    # Width = opening_width
    
    bpy.ops.mesh.primitive_cube_add(size=1)
    front_glass = bpy.context.active_object
    front_glass.name = "Glass_Vertical_Front"
    # Thin glass pane
    front_glass.scale = (opening_width - 0.1, 0.02, rf_height_front - 0.05)
    # Z pos: sitting on floor (or curb). Center Z = height/2
    front_glass.location = (0, -rf_depth, rf_height_front/2)
    front_glass.data.materials.append(mat_glass)
    
    # Frame for Front Glass (Top/Bottom rails)
    # Top Rail (which is also the track support)
    bpy.ops.mesh.primitive_cube_add(size=1)
    fv_top = bpy.context.active_object
    fv_top.name = "Front_Glass_Top_Profile"
    fv_top.scale = (opening_width, 0.08, 0.05)
    fv_top.location = (0, -rf_depth, rf_height_front)
    fv_top.data.materials.append(mat_alum)
    
    # Bottom Rail
    bpy.ops.mesh.primitive_cube_add(size=1)
    fv_bot = bpy.context.active_object
    fv_bot.name = "Front_Glass_Bottom_Profile"
    fv_bot.scale = (opening_width, 0.08, 0.05)
    fv_bot.location = (0, -rf_depth, 0.025)
    fv_bot.data.materials.append(mat_alum)
    
    # -- 4. Tracks --
    # "rails across 2/3 the long length"
    # Left and Middle sections. Opening width = 4.0. 2/3 = 2.66m.
    # Track Length = ~2.8m.
    track_len = (opening_width * 0.66) + 0.4 # slightly more
    track_center_x = -opening_width/2 + track_len/2 # Start from left edge
    
    # Back Track (On Back Wall)
    # Height: rf_height_back
    bpy.ops.mesh.primitive_cube_add(size=1)
    tr_back = bpy.context.active_object
    tr_back.name = "Track_Back"
    tr_back.scale = (track_len, 0.1, 0.1) # Chunky track
    tr_back.location = (track_center_x, 0, rf_height_back)
    tr_back.data.materials.append(mat_alum)
    
    # Front Track (On Top of Front Glass Profile)
    # Height: rf_height_front + a bit
    bpy.ops.mesh.primitive_cube_add(size=1)
    tr_front = bpy.context.active_object
    tr_front.name = "Track_Front"
    tr_front.scale = (track_len, 0.1, 0.1)
    tr_front.location = (track_center_x, -rf_depth, rf_height_front + 0.05)
    tr_front.data.materials.append(mat_alum)
    
    # -- 5. Roof Panels --
    panel_w = opening_width / 3
    
    # Calculate Angle for slope
    slope_angle = math.atan2(slope_drop, rf_depth)
    slope_len = math.sqrt(rf_depth**2 + slope_drop**2)
    
    # Panel objects
    panels = [
        {"name": "Panel_Left", "pos": 0, "is_slider": True},
        {"name": "Panel_Mid", "pos": 1, "is_slider": False},
        {"name": "Panel_Right", "pos": 2, "is_slider": False}
    ]
    
    left_panel_obj = None
    
    for p in panels:
        # Base X position (Closed state)
        # Left edge is -2.0.
        x_start = -opening_width/2 + (p["pos"] * panel_w)
        x_center = x_start + panel_w/2
        
        is_slider = p["is_slider"]
        
        # Slider is physically higher to clear the others
        z_offset = 0.15 if is_slider else 0.0
        
        # Center Z (average of slope heights) + offset
        avg_z = (rf_height_back + rf_height_front) / 2
        z_pos = avg_z + z_offset
        
        # Create Container for the panel (to handle rotation/pos easier)
        # Actually, let's just create the glass and parent frame
        
        # Glass Mesh
        bpy.ops.mesh.primitive_cube_add(size=1)
        glass = bpy.context.active_object
        glass.name = p["name"] + "_Glass"
        glass.scale = (panel_w - 0.02, slope_len + 0.05, 0.02) # Extra length for overlap
        glass.location = (x_center, -rf_depth/2, z_pos)
        glass.rotation_euler = (slope_angle, 0, 0)
        glass.data.materials.append(mat_glass)
        
        # Frame/Profiles (Side Rails of the panel)
        rail_thick = 0.04
        
        # Rail L
        bpy.ops.mesh.primitive_cube_add(size=1)
        rl = bpy.context.active_object
        rl.name = p["name"] + "_Rail_L"
        rl.scale = (rail_thick, slope_len + 0.1, 0.05)
        rl.location = (x_center - panel_w/2 + rail_thick/2, -rf_depth/2, z_pos)
        rl.rotation_euler = (slope_angle, 0, 0)
        rl.data.materials.append(mat_alum)
        
        # Rail R
        bpy.ops.mesh.primitive_cube_add(size=1)
        rr = bpy.context.active_object
        rr.name = p["name"] + "_Rail_R"
        rr.scale = (rail_thick, slope_len + 0.1, 0.05)
        rr.location = (x_center + panel_w/2 - rail_thick/2, -rf_depth/2, z_pos)
        rr.rotation_euler = (slope_angle, 0, 0)
        rr.data.materials.append(mat_alum)
        
        # Parent to an Empty for Animation if it's the slider
        if is_slider:
            # Create a master empty for the sliding panel group
            bpy.ops.object.empty_add(type='PLAIN_AXES', location=(0,0,0))
            master = bpy.context.active_object
            master.name = "Slider_Controller"
            left_panel_obj = master
            
            # Parent children
            for child in [glass, rl, rr]:
                child.parent = master
                # Apply inverse to keep position? No, current loc is world loc.
                # Just set parent, matrix_parent_inverse handles it usually, 
                # but better to set loc relative to parent.
                # Easiest way in script: Keep children where they are.
                child.matrix_parent_inverse = master.matrix_world.inverted()
                
    # -- 6. Animation --
    # Animate 'Slider_Controller' moving +X direction
    # Move by 1 panel width (approx 1.33m) over the middle panel
    
    if left_panel_obj:
        # Frame 1: Closed (Loc 0,0,0)
        bpy.context.scene.frame_set(1)
        keyframe_location(left_panel_obj, 1, (0, 0, 0))
        
        # Frame 50: Open (Loc +1.33, 0, 0)
        bpy.context.scene.frame_set(50)
        keyframe_location(left_panel_obj, 50, (panel_w, 0, 0))
        
        # Frame 100: Closed again
        bpy.context.scene.frame_set(100)
        keyframe_location(left_panel_obj, 100, (0, 0, 0))
        
        # Reset to Frame 1
        bpy.context.scene.frame_set(1)

    # -- 7. Lighting & Camera --
    bpy.ops.object.light_add(type='SUN', location=(5, -5, 10))
    sun = bpy.context.active_object
    sun.data.energy = 5.0
    sun.rotation_euler = (math.radians(45), 0, math.radians(45))
    
    bpy.ops.object.camera_add(location=(0, -6, 4))
    cam = bpy.context.active_object
    # Point at scene
    cam.rotation_euler = (math.radians(60), 0, 0)
    bpy.context.scene.camera = cam

main()
