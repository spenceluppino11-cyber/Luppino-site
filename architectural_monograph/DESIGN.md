---
name: Architectural Monograph
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#636465'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 96px
    fontWeight: '700'
    lineHeight: '0.9'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: -0.02em
  body-md:
    fontFamily: Newsreader
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  rule-width: 1px
  section-gap: 160px
  content-margin: 48px
  asymmetric-offset: 8.33%
---

## Brand & Style

This design system is anchored in the austere, intellectual world of premium architectural monographs. It prioritizes the "objecthood" of the digital interface, treating the screen as a physical printed page. The emotional response is one of quiet authority, permanence, and curated precision. 

The aesthetic leverages a mix of **Minimalism** and **High-Contrast Editorial** design. It eschews decorative flourishes in favor of structural integrity, using 1px rules to define space and "broken" layouts to create a rhythmic, asymmetrical pace. It is designed for high-end audiences who value clarity, white space, and the archival quality of print media.

## Colors

The palette is strictly monochromatic, relying on subtle shifts in value to create depth. 

- **Primary**: A true black (#000000) used for high-impact typography and primary call-to-action elements.
- **Secondary**: A muted, architectural gray (#E2E2E2) reserved exclusively for structural rules, hair-lines, and borders.
- **Neutral**: An off-white, gallery-style background (#F7F7F7) that provides a warm, paper-like quality, reducing the harshness of pure white while maintaining high contrast for text.

## Typography

The typographic strategy relies on the tension between a utilitarian sans-serif and a literary serif. 

- **Display & Headings**: Inter is utilized with aggressive tight tracking and high weights. Large-scale headlines should often break across lines to create visual texture, acting as graphic elements rather than just text.
- **Body Text**: Newsreader provides a sophisticated, scholarly feel for long-form reading. It should be set with generous line heights to ensure a luxurious, editorial flow.
- **Labels**: Small-caps or uppercase Inter with wide letter-spacing is used for metadata, navigation, and captions, mimicking the technical annotations found in architectural blueprints.

## Layout & Spacing

This design system employs an asymmetrical "broken" grid, typically based on a 12-column foundation but intentionally disregarding symmetry. 

- **Structural Rules**: 1px horizontal and vertical lines (#E2E2E2) are used to cordone off content and define the "skeleton" of the page.
- **Aggressive Whitespace**: Section-to-section transitions require a minimum of 120px to 160px of vertical space to allow the imagery and typography to "breathe."
- **Imagery Placement**: Photos should not always align with text columns. Varying aspect ratios (e.g., a very wide 21:9 next to a tall 4:5) should be used to create a dynamic, curated feel similar to an art book.

## Elevation & Depth

Depth in this design system is conceptual rather than literal. 

- **Flat Hierarchy**: There are no box shadows or ambient blurs. 
- **Layering via Rules**: Depth is achieved through the intersection of 1px rules and the layering of text over imagery. 
- **Z-Index Shifts**: Use subtle overlapping where a display heading may slightly encroach upon an image container, creating a sense of physical collage.
- **Surface Tiers**: Use the secondary color (#E2E2E2) as a solid background for specific "technical" panels to distinguish them from the primary off-white editorial sections.

## Shapes

The shape language is strictly orthogonal. 

All UI elements—buttons, image containers, input fields, and cards—must have **0px border radius**. This sharp, "raw" edge reinforces the architectural nature of the design system and maintains the precision of the structural grid. Any deviation into rounded corners would undermine the archival, monograph aesthetic.

## Components

### Buttons
Primary buttons are solid black (#000000) rectangles with white (#F7F7F7) Inter bold text. Secondary buttons are defined by a 1px black border with no fill. All hover states should involve a simple color inversion.

### Chips & Tags
Metadata tags should appear as small, uppercase text labels separated by 1px vertical pipes or enclosed in 1px rectangular boxes.

### Input Fields
Inputs are minimal: a single 1px bottom border (#000000). The label sits above the line in small-caps Inter. There are no background fills for active states, only a slight thickening of the bottom rule.

### Cards
Cards are not contained boxes but rather "regions" defined by the 1px structural rules. They rely on the layout of the photography and the alignment of the serif body text to signify grouping.

### Image Containers
Images should utilize `object-fit: cover` and be paired with technical captions (Labels) that include dimensions or project years, reinforcing the "monograph" theme.