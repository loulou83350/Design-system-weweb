export default {
    editor: {
      label: {
        en: 'Customizable Button'
      },
      icon: 'button'
    },
    properties: {
      label: {
        label: { en: 'Button Text' },
        type: 'Text',
        bindable: true,
        defaultValue: 'Get started',
        section: 'settings',
        /* wwEditor:start */
        bindingValidation: {
          type: 'string',
          tooltip: 'Bind to a string value that will be displayed as the button text'
        },
        propertyHelp: {
          tooltip: 'The text to display on the button'
        }
        /* wwEditor:end */
      },
      icon: {
        label: { en: 'Icon SVG' },
        type: 'Text',
        bindable: true,
        defaultValue: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
        section: 'settings',
        /* wwEditor:start */
        bindingValidation: {
          type: 'string',
          tooltip: 'Bind to a string containing SVG markup for the icon'
        },
        propertyHelp: {
          tooltip: 'SVG markup for the icon to display in the button'
        }
        /* wwEditor:end */
      },
      showIcon: {
        label: { en: 'Show Icon' },
        type: 'OnOff',
        bindable: true,
        defaultValue: true,
        section: 'settings',
        /* wwEditor:start */
        bindingValidation: {
          type: 'boolean',
          tooltip: 'Bind to a boolean value to control icon visibility'
        },
        propertyHelp: {
          tooltip: 'Whether to show the icon in the button'
        }
        /* wwEditor:end */
      },
      buttonType: {
        label: { en: 'Button Type' },
        type: 'TextSelect',
        bindable: true,
        defaultValue: 'Primary',
        section: 'settings',
        options: {
          options: [
            { value: 'Primary', label: 'Primary' },
            { value: 'Secondary', label: 'Secondary' },
            { value: 'Tertiary', label: 'Tertiary' },
            { value: 'Quaterny', label: 'Quaterny' }
          ]
        },
        /* wwEditor:start */
        bindingValidation: {
          type: 'string',
          tooltip: 'Bind to a string value: "Primary", "Secondary", "Tertiary", or "Quaterny"'
        },
        propertyHelp: {
          tooltip: 'The visual style of the button'
        }
        /* wwEditor:end */
      },
      isSmall: {
        label: { en: 'Small Size' },
        type: 'OnOff',
        bindable: true,
        defaultValue: false,
        section: 'settings',
        /* wwEditor:start */
        bindingValidation: {
          type: 'boolean',
          tooltip: 'Bind to a boolean value to control button size'
        },
        propertyHelp: {
          tooltip: 'Whether to use the small button size variant'
        }
        /* wwEditor:end */
      },
      isInverted: {
        label: { en: 'Inverted Colors' },
        type: 'OnOff',
        bindable: true,
        defaultValue: false,
        section: 'settings',
        /* wwEditor:start */
        bindingValidation: {
          type: 'boolean',
          tooltip: 'Bind to a boolean value to control color inversion'
        },
        propertyHelp: {
          tooltip: 'Whether to use inverted colors for the button'
        }
        /* wwEditor:end */
      },
      buttonState: {
        label: { en: 'Button State' },
        type: 'TextSelect',
        bindable: true,
        defaultValue: 'Default',
        section: 'settings',
        options: {
          options: [
            { value: 'Default', label: 'Default' },
            { value: 'Hover', label: 'Hover' },
            { value: 'Disable', label: 'Disabled' }
          ]
        },
        /* wwEditor:start */
        bindingValidation: {
          type: 'string',
          tooltip: 'Bind to a string value: "Default", "Hover", or "Disable"'
        },
        propertyHelp: {
          tooltip: 'The interactive state of the button'
        }
        /* wwEditor:end */
      },
      isIconButton: {
        label: { en: 'Icon Button' },
        type: 'OnOff',
        bindable: true,
        defaultValue: false,
        section: 'settings',
        /* wwEditor:start */
        bindingValidation: {
          type: 'boolean',
          tooltip: 'Bind to a boolean value to control if button shows only an icon'
        },
        propertyHelp: {
          tooltip: 'Whether to show only the icon without text'
        }
        /* wwEditor:end */
      }
    },
    triggerEvents: [
      {
        name: 'click',
        label: { en: 'On click' },
        event: { value: '' },
        default: true
      }
    ],
    actions: [
      {
        label: { en: 'Click button' },
        action: 'clickButton'
      }
    ]
  };