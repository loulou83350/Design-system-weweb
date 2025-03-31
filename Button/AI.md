---
name: customizable-button
description: A highly configurable button component with multiple style variants, states, and icon support
keywords: button, UI, component, customizable, icon, primary, secondary, tertiary, quaterny
---

#### Customizable Button

Properties:
- `label`: `string` - The text to display on the button. Default: `'Get started'`
- `icon`: `string` - SVG markup for the icon to display in the button. Default: Arrow icon SVG
- `showIcon`: `boolean` - Whether to show the icon in the button. Default: `true`
- `buttonType`: `'Primary' | 'Secondary' | 'Tertiary' | 'Quaterny'` - The visual style of the button. Default: `'Primary'`
- `isSmall`: `boolean` - Whether to use the small button size variant. Default: `false`
- `isInverted`: `boolean` - Whether to use inverted colors for the button. Default: `false`
- `buttonState`: `'Default' | 'Hover' | 'Disable'` - The interactive state of the button. Default: `'Default'`
- `isIconButton`: `boolean` - Whether to show only the icon without text. Default: `false`

Events:
- `click`: {value: buttonLabel} - Triggered when the button is clicked

Actions:
- `clickButton`: Programmatically triggers a button click

Variables:
- `clickCount`: number - Tracks the number of times the button has been clicked

Special features:
- Supports 4 different button types (Primary, Secondary, Tertiary, Quaterny)
- Can be configured as text-only, icon-only, or text with icon
- Supports small and regular sizes
- Supports inverted color schemes for each button type
- Can be set to disabled state to prevent interactions
- Automatically handles hover states