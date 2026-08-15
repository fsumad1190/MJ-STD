# App Guidelines & Animation Rules

## Locked Animation & Layout Behavior (DO NOT MODIFY)
The GSAP scroll timeline, camera zooms, pans, rotations, and element positioning are strictly locked as requested by the user.

1. **Z-Index Sandwich Hierarchy**:
   - Back cover (`.sleeve-back`): `z-index: 1`
   - Vinyl record (`#vinyl-record`): `z-index: 5`
   - Front cover (`.sleeve-front`): `z-index: 10` with shallow top notch cutout (`clipPath: #sleeveNotchClip`)

2. **Phase 1: Zoom In & Sleeve Drop**:
   - `sleeve-front` & `sleeve-back` drop out of bottom of screen (`y: 140vh`, `opacity: 1`)
   - `vinylRecord` rotates counter-clockwise 180° -> 0° (hits horizontal upright orientation at zoom stop)
   - `sceneGroup` zooms to `targetScale` centered (`x: 0`, `y: 0vh`)
   - Linger duration on record label

3. **Phase 2: Pan to Left Side Anchor**:
   - `sceneGroup` pans left so the record label is anchored to the left side of the screen (`x: -(50vw + offset)`, `y: 0`)
   - `vinylRecord` rotates counter-clockwise 0° -> -180° (180° CCW turn during pan)

4. **Phase 3: Radial Spoke Menu Sweep**:
   - `vinylRecord` rotates counter-clockwise -180° -> -360° (180° CCW turn into final alignment)
   - Menu items sweep in from the bottom of the screen as radial spokes along the right side of the record face, reading top to bottom like a block of text

**Allowed Changes**: Only graphical, typographic, styling, content, or asset updates may be made going forward.
