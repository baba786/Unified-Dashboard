# Wikimedia Design Codex Color Tokens

This document provides a comprehensive list of the color tokens available in the Wikimedia Design Codex design system.

## Color System Overview

The Wikimedia Design Codex color palette is organized with a systematic approach:
- Colors are given numbers corresponding to their contrast
- The scale ranges from 50 (brightest) to 1000 (darkest)
- Single color options (white, black) don't carry a number
- Colors support both light and dark modes

## Base Colors

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `color.white` | `#fff` | Pure white |
| `color.black` | `#000` | Pure black |

## Gray Scale

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `color.gray50` | `#f8f9fa` | Lightest gray |
| `color.gray100` | `#eaecf0` | Very light gray |
| `color.gray200` | `#dadde3` | Light gray |
| `color.gray300` | `#c8ccd1` | Gray |
| `color.gray400` | `#a2a9b1` | Medium gray |
| `color.gray500` | `#72777d` | Medium-dark gray |
| `color.gray600` | `#54595d` | Dark gray |
| `color.gray700` | `#404244` | Very dark gray |
| `color.gray800` | `#27292d` | Nearly black gray |
| `color.gray900` | `#202122` | Almost black gray |
| `color.gray1000` | `#101418` | Darkest gray |

## Blue Scale

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `color.blue50` | `#f1f4fd` | Lightest blue |
| `color.blue100` | `#dce3f9` | Very light blue |
| `color.blue200` | `#cbd6f6` | Light blue |
| `color.blue300` | `#b0c1f0` | Pale blue |
| `color.blue400` | `#88a3e8` | Medium-light blue |
| `color.blue500` | `#6485d1` | Medium blue |
| `color.blue600` | `#4b77d6` | Medium-dark blue |
| `color.blue700` | `#36c` | Accent blue / Progressive blue |
| `color.blue800` | `#3056a9` | Dark blue |
| `color.blue900` | `#233566` | Very dark blue |
| `color.blue999` | `#a3d3ff` | Special blue (diff highlighting) |
| `color.blue1000` | `#1b223d` | Darkest blue |

## Red Scale

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `color.red50` | `#ffe9e5` | Lightest red |
| `color.red100` | `#ffdad3` | Very light red |
| `color.red200` | `#ffc8bd` | Light red |
| `color.red300` | `#fea898` | Pale red |
| `color.red400` | `#fd7865` | Medium-light red |
| `color.red500` | `#f54739` | Medium red |
| `color.red600` | `#d74032` | Medium-dark red |
| `color.red700` | `#bf3c2c` | Destructive red |
| `color.red800` | `#9f3526` | Dark red |
| `color.red900` | `#612419` | Very dark red |
| `color.red999` | `#8b0000` | Special red (diff highlighting) |
| `color.red1000` | `#3c1a13` | Darkest red |

## Yellow Scale

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `color.yellow50` | `#fdf2d5` | Lightest yellow |
| `color.yellow100` | `#fbe2a2` | Very light yellow |
| `color.yellow200` | `#fecc44` | Light yellow |
| `color.yellow300` | `#eeb533` | Pale yellow |
| `color.yellow400` | `#ca982e` | Medium-light yellow |
| `color.yellow500` | `#ab7f2a` | Medium yellow |
| `color.yellow600` | `#987027` | Medium-dark yellow |
| `color.yellow700` | `#886425` | Dark yellow |
| `color.yellow800` | `#735421` | Very dark yellow |
| `color.yellow900` | `#453217` | Almost black yellow |
| `color.yellow999` | `#ffe49c` | Special yellow (diff highlighting) |
| `color.yellow1000` | `#2d2212` | Darkest yellow |

## Green Scale

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `color.green50` | `#dff2eb` | Lightest green |
| `color.green100` | `#c9eadd` | Very light green |
| `color.green200` | `#aedfcd` | Light green |
| `color.green300` | `#80cdb3` | Pale green |
| `color.green400` | `#2cb491` | Medium-light green |
| `color.green500` | `#099979` | Medium green |
| `color.green600` | `#14876b` | Medium-dark green |
| `color.green700` | `#177860` | Success green |
| `color.green800` | `#196551` | Dark green |
| `color.green900` | `#153d31` | Very dark green |
| `color.green999` | `#006400` | Special green (diff highlighting) |
| `color.green1000` | `#132821` | Darkest green |

## Purple Scale

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `color.purple50` | `#f0ecf6` | Lightest purple |
| `color.purple100` | `#e6e0f0` | Very light purple |
| `color.purple200` | `#d9d0e9` | Light purple |
| `color.purple300` | `#c5b9dd` | Pale purple |
| `color.purple400` | `#a799cd` | Medium-light purple |
| `color.purple500` | `#8d7ebd` | Medium purple |
| `color.purple600` | `#7a6db7` | Medium-dark purple |
| `color.purple700` | `#6a60b0` | Visited link purple |
| `color.purple800` | `#534fa3` | Dark purple |
| `color.purple900` | `#353262` | Very dark purple |
| `color.purple1000` | `#23203b` | Darkest purple |

## Other Color Scales

The system also includes:
- Orange scale (orange50-orange1000)
- Pink scale (pink50-pink1000)
- Lime scale (lime50-lime1000)
- Maroon scale (maroon50-maroon1000)

## Special Purpose Colors

| Token | Value | Description |
|-------|-------|-------------|
| `color.accent` | Blue700 | Used for certain HTML5 elements like checkbox and progress bar |
| `color.transparent` | `transparent` | Fully transparent color |
| `color.transparent-light` | `rgba(255,255,255,0)` | Transparent white |
| `color.transparent-dark` | `rgba(0,0,0,0)` | Transparent black |

## Opacity Colors

| Token | Value | Description |
|-------|-------|-------------|
| `color.opacity-medium-light` | `rgba(255,255,255,0.65)` | Semi-transparent white |
| `color.opacity-low-light` | `rgba(255,255,255,0.3)` | Low opacity white |
| `color.opacity-high-dark` | `rgba(0,0,0,0.87)` | High opacity black |
| `color.opacity-medium-dark` | `rgba(0,0,0,0.65)` | Medium opacity black |
| `color.opacity-lowest-dark` | `rgba(0,0,0,0.06)` | Very low opacity black |

## Semantic Color Tokens

The color system also provides semantic tokens that reference the base colors:

### Text Colors
- `color.base` (Gray900)
- `color.emphasized` (Gray1000)
- `color.subtle` (Gray600)
- `color.placeholder` (Gray500)
- `color.disabled` (Gray400)
- `color.inverted` (White)
- `color.progressive` (Blue700)
- `color.destructive` (Red700)
- `color.visited` (Purple700)
- `color.error` (Red700)
- `color.warning` (Yellow700)
- `color.success` (Green700)
- `color.notice` (Gray700)

### Background Colors
- `background-color.base` (White)
- `background-color.neutral` (Gray100)
- `background-color.neutral-subtle` (Gray50)
- `background-color.progressive` (Blue700)
- `background-color.destructive` (Red700)
- `background-color.error` (Red500)
- `background-color.warning-subtle` (Yellow50)
- `background-color.success-subtle` (Green50)
- `background-color.transparent` (Transparent)

### Border Colors
- `border-color.base` (Gray400)
- `border-color.subtle` (Gray300)
- `border-color.muted` (Gray200)
- `border-color.progressive` (Blue500)
- `border-color.destructive` (Red500)
- `border-color.error` (Red500)

## Usage Guidelines

- Use semantic tokens whenever possible rather than direct color values
- Use progressive blue for primary actions and interactive elements
- Use destructive red for destructive actions
- Use warning yellow for caution states
- Use success green for confirmation and success states
- Use notice gray for neutral informational states

## Dark Mode Considerations

Some colors adapt for dark mode. When using design tokens rather than raw hex codes, you ensure automatic color adjustment for the chosen mode.
