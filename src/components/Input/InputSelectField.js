import { Select, MenuItem, InputLabel } from '@mui/material';
import BaseFormControl from '../BaseFormControl';

const InputSelectField = ({ field, value, onChange, error, ...rest }) => {
  const labelID = `simple-select-${field.id}-label`;
  return (
    <BaseFormControl field={field} value={value} error={error} {...rest}>
      <InputLabel id={labelID}>{field.label}</InputLabel>
      <Select
        labelId={labelID}
        id={field.id}
        value={value}
        onChange={(e) => onChange(field.id, e.target.value)}
        label={field.label}
      >
        {field.options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </BaseFormControl>
  );
};

export default InputSelectField;
