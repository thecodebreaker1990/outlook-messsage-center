import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BaseFormControl from '../BaseFormControl';

const InputDateField = ({ field, value, onChange, error, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BaseFormControl field={field} value={value} error={error} {...rest}>
        <DatePicker value={value} onChange={(newValue) => onChange(field.id, newValue)} />
      </BaseFormControl>
    </LocalizationProvider>
  );
};

export default InputDateField;
