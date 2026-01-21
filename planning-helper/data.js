
const planningData = [
    {
        id: "1",
        title: "Overall arrangement of rooms",
        content: `
            <p><strong>1.1</strong> The arrangement of rooms in the current approved scheme is as follows:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Level 01 – Kitchen / Dining Room / Home Office</li>
                <li>Level 02 – Entrance</li>
                <li>Level 03 – WC</li>
                <li>Level 04 – Livingroom 1 / Utility</li>
                <li>Level 05 – Bedroom 1 / Ensuite</li>
                <li>Level 06 – Bedroom 2 / Ensuite</li>
                <li>Level 07 – Master Bedroom</li>
                <li>Level 08 – Master Bathroom</li>
                <li>Level 09 – Livingroom 2</li>
            </ul>
            <p class="mt-4"><strong>1.2</strong> The new proposed arrangement is:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Level 01 – Reception / Kitchenette / WC</li>
                <li>Level 02 – Entrance</li>
                <li>Level 03 – Plant</li>
                <li>Level 04 – Master Bedroom / Ensuite</li>
                <li>Level 05 – Bedroom 2 / Ensuite</li>
                <li>Level 06 – Sitting Room / WC</li>
                <li>Level 07 – Kitchen</li>
                <li>Level 08 – Dining Room</li>
                <li>Level 09 – Drawing Room</li>
            </ul>
            <p class="mt-4"><strong>1.3</strong> The principle driver behind the rearrangement of rooms was the need to have the living quarters – kitchen, dining room, sitting rooms – all adjacent each other, reachable by the lift, and inter-communicating with internal stairs. The upper part of the house seemed to be the most logical placement.</p>
        `,
        drawings: ["Revised GA Plans B01-10"],
        context: "1.4 The precise details of the changes can be reviewed on the revised GA Plans B01-10.",
        comparison: {
            before: "Kitchen/Dining on L01, Master on L07, Living on L09",
            after: "Reception/WC on L01, Kitchen on L07, Dining on L08, Drawing Room on L09"
        }
    },
    {
        id: "2",
        title: "Simplification of Interior Spaces",
        content: `
            <p><strong>2.1</strong> Hopefully it will be seen from the form of the revised GAs in general that we have attempted where possible to simplify the layouts of the interior spaces, allowing the existing form of the fabric itself to create the spaces.</p>
            <p class="mt-2">Changes include:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2">
                <li><strong>2.1.1</strong> The window cills are to be preserved untouched rather than lowered or cut down to floor level, as in the case of the East window opening on the planning approved drawings. See D2007:013.</li>
                <li><strong>2.1.2</strong> Removal of the decking to Level 5 and Level 6. The staggered staging here was designed to allow more light into the level 5 space. On examination on site, however, this was found to be unnecessary. See 2006:GA06 & 2006:GA07</li>
            </ul>
        `,
        drawings: ["D2007:013", "2006:GA06", "2006:GA07"],
        context: "Simplification of interior layout to respect existing fabric.",
        comparison: {
            before: "Lowered window cills, decking on L5/6",
            after: "Preserved cills, removal of decking"
        }
    },
    {
        id: "3",
        title: "Trapdoors",
        content: `
            <p><strong>3.1</strong> Trapdoors have been introduced to Levels 5, 6, 8 and 9, in order to allow furniture to be hoisted up though the centre of the tower. These trapdoors will mirror those that already exist in the building at Level 4 and Level 7 which would have been used for the hoisting up and down of bells to the belfry. There will be no destruction to original fabric in the creation of these trapdoors since they are all to be instated in new floor constructions, or in the case of Level 5, a floor that has existing consent to be removed, but which, it should be noted we are now in keeping in place.</p>
            <p class="mt-4"><strong>3.2</strong> By re-introducing this functional dimension to the original bell-tower we believe that we will greatly enhance the historic reading and appreciation of the building by its inhabitants, while also providing a much-needed practical means of furnishing and maintaining the premises. This should increase the likelihood of the premises being well used and maintained in the future.</p>
        `,
        drawings: [],
        context: "Re-introduction of trapdoors for hoisting furniture, mirroring original bell-tower function.",
        comparison: {
            before: "No trapdoors on these levels",
            after: "Trapdoors on L5, 6, 8, 9"
        }
    },
    {
        id: "4",
        title: "Variation of Design of “Slot” window",
        content: `
            <p><strong>4.1</strong> We propose to move from the original curtain wall type glazing system originally proposed for the narrow slot windows between the original tower and extension over to a more traditional steel framed ‘Crittal’ profile, which will match the steel windows used elsewhere in the project.</p>
        `,
        drawings: [],
        context: "Change in glazing style for the 'slot' windows.",
        comparison: {
            before: "Curtain wall glazing",
            after: "Traditional steel framed ‘Crittal’ profile"
        }
    },
    {
        id: "5",
        title: "Extension Stonework - Parapet detail",
        content: `
            <p><strong>5.1</strong> When the planning consented design of the extension was rendered, Drawing Sheet ###, Figure 1, it was noticed that the extension lacked a suitable parapet detail to visually "cap" the structure. It was also especially noticeable that it terminated at a level below the bottom of the string course detail of the original tower, rather than allowing this feature to be visually read through to the extension structure.</p>
            <p class="mt-4"><strong>5.2</strong> We have proposed a revised design (Drawing ###, Figure 2) in which the string course of the existing building is replicated and continued around as the capping of the extension. The height of the parapet has been raised by approx. 400mm so that it aligns with the level of string course, rather than sitting somewhat awkwardly below, and has been made more substantial in design to match that on the original and to be more in proportion to the overall scale of the extension. This new parapet, therefore, seems to complete the extension much more satisfactorily and visually ties it back to the original structure.</p>
        `,
        drawings: ["Drawing ###, Figure 1", "Drawing ###, Figure 2"],
        context: "Visual improvement of the extension parapet to align with the original tower string course.",
        comparison: {
            before: "No suitable parapet, terminated below string course",
            after: "Replicated string course, raised 400mm"
        }
    },
    {
        id: "6",
        title: "Extension Stonework - Masonry Support Detail",
        content: `
            <p><strong>6.1</strong> One of the consequences of having moved over to handset cladding for the extension wall from the original solid masonry construction (see previous 09/00644/MDC, dated 27 July 2009) is that a masonry support bracket will be required at mid-height of the extension to bear the weight of the higher stonework. Unfortunately, this detail demands an expansion joint of >= 15mm where the bracket sits to allow for differential movement of the stone and steel, whereas the typical beds and joints for the cladding are all 3mm. We are, therefore, concerned that this break in the continuity of the facade will be very noticeable and will flag up the fact that the wall is not of solid stone construction.</p>
            <p class="mt-4"><strong>6.2</strong> In order to conceal this joint we propose once again to continue onto the extension a string course found on the existing tower. Fortunately, the level of the expansion joint can be made to align with the string course, such that the joint is concealed at the bottom of this proposed new detail using an overlapping sliding joint as detailed in Drawing Sheet ###, Figure 4.</p>
            <p class="mt-4"><strong>6.3</strong> The profile of the new string course on the extension cannot be made to exactly match the original on the existing tower as this is of a protrusion that could not safely be supported on the relatively narrow 75mm external leaf of the new wall. Therefore, we propose a restrained, simple string course of the same height and with classical features which refers to the string course of the original building and which will be an honest addition.</p>
        `,
        drawings: ["Drawing Sheet ###, Figure 4"],
        context: "Concealing expansion joint required by masonry support bracket.",
        comparison: {
            before: "Visible expansion joint",
            after: "Concealed joint with new string course"
        }
    },
    {
        id: "7",
        title: "Level 2 Entrance height & Level 3 change of Usage",
        content: `
            <p><strong>7.1</strong> In the consented scheme Level 3 comprises a full-height space including laundry and utilities room. This space is located where the void below the dome is in the interior of the building and as such it is an ‘extra’ floor in the extension. For the several reasons given below this floor has been reduced in height and repurposed as a plant space, owing to lack of vertical space to make it a full-height floor:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2">
                <li><strong>7.1.1</strong> The original scheme relied on having structural glass landings. This is unworkable since it does not allow fire and sound separation between floors, nor for the installation of essential services such as lighting and domestic sprinkler system. The engineering design has also specified 150mm deep structural steels within the floor build-ups, which in reality means a minimal practical floor build-up of 210mm.</li>
                <li><strong>7.1.2</strong> The reduced ceiling height of the Level 2 entrance required by the planning approved scheme necessitates the removal of the top of the arch of the original North doorway which now marks the separation of the old and new structures. This was not considered worthwhile damage to the fabric. Also, for the Level 3 space to be usable under fire regulations a new doorway to the spiral staircase would need to be formed, further damaging the original fabric for a relatively small amount of usable space.</li>
                <li><strong>7.1.3</strong> The provision of a plant space is anyway convenient as the passenger lift requires a dedicated machine room for the hydraulic equipment. It was also realised that insufficient and inappropriate space had been allocated to plant for the premises as a whole in the planning stage design. The layout of the plant space can be seen in Drawing GA-B3. The Level 2 entrance ceiling height has been raised by 550 which overall gives a much more generous feel to this, the first space that one enters, and gives ample clearance above the stone arch so that this feature looks well-framed in the space.</li>
            </ul>
            <p class="mt-4"><strong>7.2</strong> A new concealed hatch and concertina attic ladder have been added into the ceiling void in between Level 02 and Level 03 to allow access to the new plant space.</p>
        `,
        drawings: ["Drawing GA-B3"],
        context: "Level 3 repurposed as plant space; Level 2 entrance height raised.",
        comparison: {
            before: "L3 Full height laundry/utility. L2 Entrance lower.",
            after: "L3 Reduced height plant room. L2 Entrance raised 550mm."
        }
    },
    {
        id: "8",
        title: "Main Entrance Door, Lambeth Hill",
        content: `
            <p><strong>8.1</strong> Details of the new entrance door can be seen on (Door Detail Sheet ###)</p>
            <p class="mt-4"><strong>8.2</strong> The change to the Level 2 floor height discussed above, has meant that the front door no longer needs to be split, with a false panel to the top, but can open as a single leaf.</p>
            <p class="mt-4"><strong>8.3</strong> It was also felt that the planning approved design of the door was not particularly inspiring or in keeping with the style of the building as a whole, being of a rather minimal aesthetic. The new design hopes to address these concerns with a more classical appearance.</p>
        `,
        drawings: ["Door Detail Sheet ###"],
        context: "Redesign of Main Entrance Door for better aesthetic and single-leaf operation.",
        comparison: {
            before: "Split door with false panel, minimal aesthetic",
            after: "Single leaf, classical appearance"
        }
    },
    {
        id: "9",
        title: "Improvement to Fire Route",
        content: `
            <p><strong>9.1</strong> The planning approved scheme (Drawing 02) shows a new opening to the base of the spiral staircase leading down some steps to a fire protected corridor, which then exits out of a small door to the east side of the new addition.</p>
            <p class="mt-4"><strong>9.2</strong> One of the positive consequences of the change from staircase to lift in the new addition, approved 23rd September 2009, is that a more efficient fire exit route can be realised, utilising the fact that the Level 2 entrance can now be made a fire protected escape route to Lambeth Hill, eliminating the need for this elaborate alternative escape route.</p>
            <p class="mt-4"><strong>9.3</strong> This redesign does not result in any material change to the historic fabric, only that descending steps are replaced with ascending steps.</p>
            <p class="mt-4"><strong>9.4</strong> The dimensions and height for the spiral opening were never explicitly given in either the approved drawings or those submitted as part of the various discharge of conditions. The scaled size of the opening as drawn in the original submission appears not to be workable as a safe fire escape route under current regulations.</p>
            <p class="mt-4"><strong>9.5</strong> The height of the opening has now been set at 1.8m. (Detail drawing ??)</p>
            <p class="mt-4"><strong>9.6</strong> The enclosed corridor and door to the East of the new addition are completely eliminated. This greatly improves the external appearance of the extension, which will no longer be broken by this previously approved opening. Circulation around the building will also be improved as access can be gained directly from the entrance to the spiral staircase.</p>
            <p class="mt-4"><strong>9.7</strong> In order to ensure that the new fire exit route remains free of smoke in the event of a fire in the kitchen below, the original oak doors will be used in situ as auto-closing smoke separating doors. For these doors to function as deigned, the line of the mezzanine has been brought back and the detailing of the balustrade changed. The doors which were also to be reused in the West alcove will now remain in place. These doors would anyway have been 600mm too short to fill the West alcove and so would have required substantial modification. See door detail sheet.</p>
        `,
        drawings: ["Drawing 02", "Detail drawing ??"],
        context: "Efficiency improvement of fire escape route.",
        comparison: {
            before: "Separate fire corridor and East door",
            after: "Reuse of Level 2 entrance, elimination of East door/corridor"
        }
    },
    {
        id: "10",
        title: "Level 1 changes",
        content: `
            <p><strong>10.1</strong> With the removal of the enclosed fire route corridor to the east of Level 1, discussed above, a small toilet has been included adjacent to the kitchen. This is now a very necessary addition as EN-81 requirements for minimum pit depth have meant that the lift will no longer serve Level 1. The nearest toilet for the formal reception / dining space on this level would therefore be 4 storeys up. The addition of the WC will have no effect on the historic fabric or change the appearance of the extension in any way.</p>
            <p class="mt-4"><strong>10.2</strong> For a full round up of the changes to Level 1, please see the revised drawings. These include:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Changes to kitchen layout;</li>
                <li>Elimination of lift access to this level, and addition of plant space;</li>
                <li>Elimination of fire route and inclusion of WC in its place;</li>
                <li>Addition of a small vent to the base of the East extension ‘slot’ window to match that on the West;</li>
                <li>New semi-concealed smoke curtain to be added into the ceiling soffit at the South edge of the entrance gallery;</li>
                <li>Studwork to be added beneath Level 1 floor to raise level back up to original height and a carousel storage system created in the void below (c.f. Section 11 below);</li>
                <li>East and West openings to remain bricked and rendered closed;</li>
                <li>Addition of gas fireplace internally to the West alcove;</li>
                <li>Entrance to spiral staircase reinstated (c.f. Section 12 below);</li>
                <li>Changes to proposed alterations to Level 1 doors to incorporate glazed elements (c.f. Section 21 below)</li>
            </ul>
        `,
        drawings: [],
        context: "Various changes to Level 1 including WC addition and layout adjustments.",
        comparison: {
            before: "Fire corridor, Lift access",
            after: "WC added, Lift access removed, Plant space added"
        }
    },
    {
        id: "11",
        title: "Raised Floor Height to Level 1 interior space",
        content: `
            <p><strong>11.1</strong> Permission was granted for the floor of the Level 1 vestibule to be excavated down approximately 1.0m in order that its floor level would be the same as that in the addition, helping movement between these two spaces. This excavation together with the formation of the new ground slab and making good was carried out in 2008.</p>
            <p class="mt-4"><strong>11.2</strong> There are unfortunately several architectural and conservation difficulties with this design that we would like if possible to rectify. Firstly, by reducing the floor level the original openings to the room – the three door alcoves to East, South and West, as well as the door to the spiral stairs – are all given the very curious impression of being floating objects and are thus divorced from their original function and give a very inharmonious feel to the space. Further from a conservation and heritage perspective it did not seem to make sense to change the original proportions and form of the room, particularly this room which is the only room space in the entire building that was designed to be experienced by the public.</p>
            <p class="mt-4"><strong>11.3</strong> Secondly, the lowered floor height leads to a greater number of stairs necessarily intruding into the under-dome space. Stairs are now needed to enter the spiral and exit to the garden where previously they were not.</p>
            <p class="mt-4"><strong>11.4</strong> What is proposed is that a faux floor be built up in timber studwork to bring the new floor level back to the original level. There would then be a set of 4 steps leading down into the kitchenette at the bottom of the extension, which will be contained within the width of the alcove and so will only very minimally encroach into the under-dome space. For these stairs to have appropriate headroom, the entrance gallery above has been pulled back so that it is in line with the original external façade. (This is anyway necessary for the operation of the smoke separating doors discussed above.) The volume under the faux floor will be used for storage, probably through the use of a single trap door and a ‘carousel’ type mechanism below with storage trays or boxes.</p>
            <p class="mt-4"><strong>11.5</strong> The entrance to the spiral stairs which is once again now within reach from the Level 1 room will be reinstated via a step similar to that which existed previously prior to the excavation works.</p>
            <p class="mt-4"><strong>11.6</strong> Please see Drawing B5</p>
        `,
        drawings: ["Drawing B5"],
        context: "Raising Level 1 floor back to original height using a faux floor.",
        comparison: {
            before: "Excavated floor (approx -1.0m)",
            after: "Faux floor at original level, storage underneath"
        }
    },
    {
        id: "12",
        title: "Entrance to spiral stairs reinstated on Level 1",
        content: `
            <p><strong>12.1</strong> The opening to the very bottom of the spiral staircase is to be kept in its current form rather than blocked to make room for plant. This will then serve as the principal route between Level 1 and the rest of the building since the lift will not service Level 1 owing to restrictions on minimum pit depth. In place of the spiral wine cellar beneath the Level 1 floor a wine rack will be inserted behind the door to the spiral stairs in the space where the hot water cylinder was to be.</p>
        `,
        drawings: [],
        context: "Reinstatement of spiral stair entrance on Level 1.",
        comparison: {
            before: "Blocked for plant",
            after: "Open, serving as principal route"
        }
    },
    {
        id: "13",
        title: "Oculus Window, Level 4",
        content: `
            <p><strong>13.1</strong> Following inspection on site and upon careful consideration we propose to retain the top half of the original oculus window surround in situ rather than moving the whole into the new extension structure, as originally proposed and consented. The reasoning behind this is fourfold:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2">
                <li><strong>13.1.1</strong> Firstly, it was considered that there would be some non-negligible risk of damage to the stones during the attempt to move and reinstate them.</li>
                <li><strong>13.1.2</strong> Secondly, the condition of the stones generally, but especially the keystone was already rather poor...</li>
                <li><strong>13.1.3</strong> Thirdly... it was felt that there would be a very noticeable incongruence in having this single original feature, in rather tattered stone, within the otherwise pristine extension...</li>
                <li><strong>13.1.4</strong> Fourthly, the requirements of Approved Document xx mean that it is necessary to split any window or door jambs...</li>
            </ul>
            <p class="mt-4"><strong>13.2</strong> With these considerations in mind, what we propose is to use split, and therefore compliant, voussoirs with like-for-like profiles made and installed in the extension structure. On the other hand, as much as possible – the top half - of the original window surround will remain in place. While the bottom half will be removed to form the planning approved opening, we propose to reuse a portion of this elsewhere, as outlined below.</p>
            <p class="mt-4"><strong>13.3</strong> The opening will be transformed into an arched doorway, the jambs of which will be formed from new Portland stone with matching profiles. The proportions of the opening will be identical to the planning approved detail (drawing ref ###), however it will benefit over that approval in having profiled stone surrounds rather than being plainly rendered.</p>
            <p class="mt-4"><strong>13.4</strong> The bottom voussoir, one of those three stones removed from the bottom of the surround, will be used as an arch in the new planning approved opening (drawing ref xxx) to the spiral staircase on Level 6.</p>
        `,
        drawings: ["drawing ref ###", "drawing ref xxx"],
        context: "Retention of top half of Oculus Window; use of new Portland stone for jambs.",
        comparison: {
            before: "Move whole oculus to extension",
            after: "Retain top half, new stone jambs, reuse bottom voussoir on Level 6"
        }
    },
    {
        id: "14",
        title: "New openings on Levels 5 and 6",
        content: `
            <p><strong>14.1</strong> The original planning approved drawings (Drawing 15) show a single extended ‘slot-like’ aperture between the new extension and the original tower. The ‘keystones’ from the head of the lower opening are reinstated to the top of the now heightened opening. Drawing 015.</p>
            <p class="mt-4"><strong>14.2</strong> Our view now on site is that it will not be particularly efficient or preservative of the fabric to enlarge the existing Level 5 opening upwards to form the proposed at Level 6. Instead, the approved new opening on Level 6 should be treated independently such that only the minimal amount of demolition necessary is undertaken.</p>
            <p class="mt-4"><strong>14.3</strong> The reasoning behind this is that the combined height of the two openings separately is only 80% of the proposed combined opening. The space in between the head of the bottom opening and cill of the top is, as such, needlessly removed in the planning approved scheme. The new proposal would also preserve the dimensions of the existing historic opening, as well as the keystones in situ.</p>
            <p class="mt-4"><strong>14.4</strong> ...As such there is no option but to retain approximately 300mm of masonry to the left of the line of the bottom opening to support this north-south lintel...</p>
            <p class="mt-4"><strong>14.5</strong> On Level 6 the entrance to the spiral staircase has been moved so that it is no longer opens onto the room but instead connects with the new passageway between the addition and the original room. The benefit of this is that the layout parallels that on the floor below, but more significantly it will only involve the removal of infill rather than the fine Portland stone ashlar facing the interior of the room...</p>
        `,
        drawings: ["Drawing 15", "Drawing 015"],
        context: "Treating Level 5 and 6 openings independently rather than as a single slot.",
        comparison: {
            before: "Single extended slot aperture",
            after: "Independent openings, preserving masonry between"
        }
    },
    {
        id: "15",
        title: "New internal staircase between Level 6 and Level 7",
        content: `
            <p><strong>15.1</strong> A new set of internal stairs will join Level 6 and Level 7. These have been placed in the NW corner where the noggins that will need to be removed to make way for the staircase are partially rotten following water damage from a leak to the rain water downpipe which had been cracked for an unknown number of years prior to work commencing on the project. The staircase is designed so that only these noggins need to be removed and not the larger joists. The improvement to usability of having easy movement between the rooms of the living quarters would seem to justify this selective removal of degraded fabric. It should also be seen in the context of the removal of the planning approved passenger lift from the interior space, which necessitated the cutting of one of the major beams as well as noggins. The damage to the principle joists from this would in our opinion have outweighed what we are currently proposing.</p>
        `,
        drawings: [],
        context: "Internal stairs added between L6 and L7 replacing need for internal lift.",
        comparison: {
            before: "Internal lift (removed)",
            after: "Internal stairs in NW corner"
        }
    },
    {
        id: "16",
        title: "Redesign of Level 8 Mezzanine",
        content: `
            <p><strong>16.1</strong> The mezzanine to level 08 was found to have a very asymmetrical and unsatisfying design in the original planning consented scheme (GA Drawing 08). We propose to redesign the mezzanine as a centred bridge running between the south and north walls.</p>
        `,
        drawings: ["GA Drawing 08"],
        context: "Redesign of L8 Mezzanine for symmetry.",
        comparison: {
            before: "Asymmetrical design",
            after: "Centred bridge"
        }
    },
    {
        id: "17",
        title: "Mosaics",
        content: `
            <p><strong>17.1</strong> We are suggesting a variation to the Schedule of Finishes to allow for the incorporation of four mosaics in each of the lift lobbies in the new extension. These mosaics are by Boris Anrep...</p>
            <p class="mt-4"><strong>17.2</strong> These particular mosaics were taken from the old Bank of England buildings on New Change...</p>
            <p class="mt-4"><strong>17.3</strong> The set consist of 4 octagonal mosaics with floral design emblematic of the four countries making up the Union: England Wales, Ireland and Scotland. We propose to install one mosaic on each landing (Level 2, Level 4, Level 5 and Level 6). The mosaics fit perfectly in terms of size and we feel will make a very valuable addition to the interior décor and finishes. It is suggested that these mosaics are surrounded with fine polished marble, possibly Breccia Oniciata, to suit the colour scheme of the mosaics.</p>
        `,
        drawings: [],
        context: "Incorporation of Boris Anrep mosaics in lift lobbies.",
        comparison: {
            before: "Standard finishes",
            after: "Boris Anrep Mosaics with marble surround"
        }
    },
    {
        id: "18",
        title: "Wooden Louvres, Levels 5 and 6",
        content: `
            <p><strong>18.1</strong> Permission was granted for the closely spaced 1950s wooden louvres to be removed and replaced with a new set of manually rotating louvres, designed to allow viewing out from and greater illumination of the interior spaces.</p>
            <p class="mt-4"><strong>18.2</strong> It was however noticed on site during initial investigations into removing and replacing the louvres that quite sufficient light and visibility could be achieved by removing alternate louvres. On consideration it now seems there are several advantages to this more limited intervention. Firstly, this approach will allow us to leave the majority of the 1950s window fabric in place: the intervention would be to remove the alternate slats only and fill in the rebates with wood and make good with filler before repainting. Secondly, this approach will lead to a more consistent overall external appearance and preservation of the original functional aesthetic of these elements, since it will not arise that louvres on different facades, and high to low within the same façade, will be opened to different angles of rotation.</p>
            <p class="mt-4"><strong>18.3</strong> Side-by-side photos of the current and proposed design in (sheet ###) show that the change to the spacing of the louvres is in no way detrimental to the appearance. Functionally, of course, nothing is lost by increasing the spacing of the louvres since new Crittal windows to the inside will anyway make the openings entirely wind and weathertight.</p>
        `,
        drawings: ["sheet ###"],
        context: "Modification of existing louvres instead of full replacement.",
        comparison: {
            before: "Full replacement with rotating louvres",
            after: "Removal of alternate slats, retaining majority of fabric"
        }
    },
    {
        id: "19",
        title: "Windows Level 5 and 6, Level 9",
        content: `
            <p><strong>19.1</strong> Arrangement of Crittal windows changed to reduce the size and weight of the openable casements and give a more appropriate aesthetic, better matching the geometry of the arch.</p>
            <p class="mt-4"><strong>19.2</strong> As above for Level 9.</p>
        `,
        drawings: [],
        context: "Refinement of Crittal window arrangement.",
        comparison: {
            before: "Original arrangement",
            after: "Reduced casement size, better compliance with arch geometry"
        }
    },
    {
        id: "20",
        title: "Extension Roof Structure",
        content: `
            <p><strong>20.1</strong> The extension roof is now of timber and lead construction. The planning approved glass roof was not in conformity with SAP requirements. We also benefit from using the void below the timber roof for plant.</p>
        `,
        drawings: [],
        context: "Change of roof material from glass to timber/lead.",
        comparison: {
            before: "Glass roof",
            after: "Timber and lead construction"
        }
    },
    {
        id: "21",
        title: "Glazed Elements in Level 1 Doors",
        content: `
            <p><strong>21.1</strong> The original design for the entrance door on level 1 which received planning approval was for a system which retained the original door but adapted it so that two of the coffer panels would be moveable on a pulley system to reveal a double-glazed unit behind. This is a very complex system and it is unclear how exactly it could be well implemented so that the panels when shut would look seamless.</p>
            <p class="mt-4"><strong>21.2</strong> There is also the problem that apart from these moveable panels there is no source of natural light in this double height room at all.</p>
            <p class="mt-4"><strong>21.3</strong> The doors themselves are in a rather poor condition. Considerable efforts were made to strip the old paint off the doors and make repairs however the result has been less than satisfactory. Please see photo of the current state of the door as against its original state.</p>
            <p class="mt-4"><strong>21.4</strong> The door was cut in a rather unfortunate way.</p>
            <p class="mt-4"><strong>21.5</strong> The new proposal is [MISSING CONTENT IN SOURCE]</p>
        `,
        drawings: [],
        context: "Revisiting the design of Level 1 doors to address complexity and condition.",
        comparison: {
            before: "Original door with pulley system",
            after: "New proposal (details pending)"
        }
    },
    {
        id: "22",
        title: "External Stone Cleaning",
        content: `
            <p><strong>22.1</strong> Method Statement needs to be developed and agreed with Historic England and The City of London following discussion with Thomann Hanry.</p>
        `,
        drawings: [],
        context: "Method statement for stone cleaning.",
        comparison: {
            before: "-",
            after: "Method statement to be agreed"
        }
    }
];
