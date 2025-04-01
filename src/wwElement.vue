<template>
    <button
      class="custom-button"
      :class="buttonClasses"
      @click="onClick"
      :disabled="isDisabled"
    >
      <span v-if="showIcon && content.icon" class="button-icon">
        <span v-html="content.icon"></span>
      </span>
      <span v-if="!isIconButton" class="button-text">{{ content.label }}</span>
    </button>
  </template>
  
  <script>
  import { computed, ref, watch } from 'vue';
  
  export default {
    props: {
      uid: {
        type: String,
        required: true
      },
      content: {
        type: Object,
        required: true
      },
      /* wwEditor:start */
      wwEditorState: { type: Object, required: true },
      /* wwEditor:end */
    },
    emits: ['trigger-event'],
    setup(props, { emit }) {
      // Editor state
      const isEditing = computed(() => {
        /* wwEditor:start */
        return props.wwEditorState?.isEditing;
        /* wwEditor:end */
        // eslint-disable-next-line no-unreachable
        return false;
      });
  
      // Internal value for click tracking
      const { value: clickCount, setValue: setClickCount } = wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: 'clickCount',
        type: 'number',
        defaultValue: 0
      });
  
      // Computed properties for button styling and behavior
      const buttonType = computed(() => props.content?.buttonType || 'Primary');
      const isSmall = computed(() => props.content?.isSmall || false);
      const isInverted = computed(() => props.content?.isInverted || false);
      const buttonState = computed(() => props.content?.buttonState || 'Default');
      const isIconButton = computed(() => props.content?.isIconButton || false);
      const showIcon = computed(() => props.content?.showIcon !== false);
      const isDisabled = computed(() => buttonState.value === 'Disable');
  
      // Combined classes based on all properties
      const buttonClasses = computed(() => {
        return {
          [`button-type-${buttonType.value.toLowerCase()}`]: true,
          'button-small': isSmall.value,
          'button-inverted': isInverted.value,
          [`button-state-${buttonState.value.toLowerCase()}`]: true,
          'button-icon-only': isIconButton.value,
          'has-icon': showIcon.value && props.content?.icon
        };
      });
  
      // Click handler
      const onClick = () => {
        if (isEditing.value || isDisabled.value) return;
        
        // Increment click count
        setClickCount(clickCount.value + 1);
        
        // Emit click event
        emit('trigger-event', {
          name: 'click',
          event: { value: props.content?.label || '' }
        });
      };
  
      return {
        buttonClasses,
        isDisabled,
        isIconButton,
        showIcon,
        onClick,
        clickCount,
        setClickCount
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .custom-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    outline: none;
    padding: 12px 24px;
    font-size: 16px;
    line-height: 1.5;
    
    &.button-small {
      padding: 8px 16px;
      font-size: 14px;
    }
    
    &.button-icon-only {
      padding: 12px;
      
      &.button-small {
        padding: 8px;
      }
    }
    
    .button-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg {
        width: 20px;
        height: 20px;
        
        .button-small & {
          width: 16px;
          height: 16px;
        }
      }
    }
    
    /* Button Types */
    &.button-type-primary {
      background-color: #007bff;
      color: white;
      
      &:hover:not(:disabled) {
        background-color: #0069d9;
      }
      
      &.button-inverted {
        background-color: white;
        color: #007bff;
        border: 1px solid #007bff;
        
        &:hover:not(:disabled) {
          background-color: rgba(0, 123, 255, 0.1);
        }
      }
    }
    
    &.button-type-secondary {
      background-color: #6c757d;
      color: white;
      
      &:hover:not(:disabled) {
        background-color: #5a6268;
      }
      
      &.button-inverted {
        background-color: white;
        color: #6c757d;
        border: 1px solid #6c757d;
        
        &:hover:not(:disabled) {
          background-color: rgba(108, 117, 125, 0.1);
        }
      }
    }
    
    &.button-type-tertiary {
      background-color: transparent;
      color: #007bff;
      
      &:hover:not(:disabled) {
        background-color: rgba(0, 123, 255, 0.1);
      }
      
      &.button-inverted {
        color: white;
        
        &:hover:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
    
    &.button-type-quaterny {
      background-color: transparent;
      color: #6c757d;
      
      &:hover:not(:disabled) {
        background-color: rgba(108, 117, 125, 0.1);
      }
      
      &.button-inverted {
        color: rgba(255, 255, 255, 0.7);
        
        &:hover:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
    
    /* Button States */
    &.button-state-hover {
      /* Hover styles are applied via the :hover pseudo-class */
    }
    
    &.button-state-disable,
    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
  }
  </style>