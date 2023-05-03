import { Box, TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { Control, useController } from 'react-hook-form';
type IInputField = {
  name: string;
  label?: string;
  control: Control<any>;
} & TextFieldProps;

const InputField: React.FC<IInputField> = ({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  ...rest
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      name={name}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        externalOnChange?.(event);
      }}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...rest}
    />
  );
};

export { InputField };
