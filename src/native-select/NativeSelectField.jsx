import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import NativeSelect from './NativeSelect';

const optionPropType = PropTypes.shape({
  display: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
});

const optGroupPropType = PropTypes.shape({
  display: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  childOptions: PropTypes.arrayOf(optionPropType).isRequired,
});

const propTypes = {
  /**
   * Whether a clear option is available to clear the selection.
   */
  allowClear: PropTypes.bool,
  /**
   * The field label.
   */
  label: PropTypes.node.isRequired,
  /**
   * The default value of the select. Can be a string, or number.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether the input is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message displayed when the select is invalid.
   */
  error: PropTypes.node,
  /**
   * Help message to display with the select.
   */
  help: PropTypes.node,
  /**
   * Whether to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether the field is displayed inline. Displays block by default.
   */
  isInline: PropTypes.bool,
  /**
   * Whether the field displays as Invalid. Use when value does not meet validation pattern.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * Additional attributes to spread onto the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * Callback function triggered when the select value changes. function(value)
   */
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOf([optGroupPropType, optGroupPropType])),
  /**
   * Placeholder data.
   */
  placeholder: PropTypes.shape({
    allowClear: PropTypes.bool,
    display: PropTypes.string, // Optional with default
    value: PropTypes.string, // Optional with default
  }),
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * Additional attributes to spread onto the select.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectAttrs: PropTypes.object,
  /**
   * The Select identifier. Links the htmlFor of the field to the select identifier.
   */
  selectId: PropTypes.string.isRequired,
  /**
   * Whether to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * The value of the select. Can be a string or number.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  allowClear: false,
  disabled: false,
  hideRequired: false,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  required: false,
  showOptional: false,
};

const NativeSelectField = ({
  defaultValue,
  disabled,
  error,
  help,
  hideRequired,
  isIncomplete,
  isInline,
  isInvalid,
  isLabelHidden,
  label,
  labelAttrs,
  maxWidth,
  onChange,
  options,
  placeholder,
  required,
  selectAttrs,
  selectId,
  showOptional,
  value,
  ...customProps
}) => {
  const helpText = (
    <span>
      {help}
    </span>
  );

  let ariaDescriptionIds;
  if (help && error && isInvalid) {
    ariaDescriptionIds = `${selectId}-error ${selectId}-help`;
  } else {
    if (help) {
      ariaDescriptionIds = `${selectId}-help`;
    }

    if (error && isInvalid) {
      ariaDescriptionIds = `${selectId}-error`;
    }
  }

  return (
    <Field
      {...customProps}
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      help={helpText}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={selectId}
      maxWidth={maxWidth}
    >
      <NativeSelect
        {...selectAttrs}
        id={selectId}
        aria-describedby={ariaDescriptionIds}
        ariaLabel={label}
        disabled={disabled}
        isIncomplete={isIncomplete}
        isInvalid={isInvalid}
        defaultValue={defaultValue}
        required={required}
        onChange={onChange}
        options={options}
        value={value}
        placeholder={placeholder}
      />
    </Field>
  );
};

NativeSelectField.propTypes = propTypes;
NativeSelectField.defaultProps = defaultProps;

export default NativeSelectField;