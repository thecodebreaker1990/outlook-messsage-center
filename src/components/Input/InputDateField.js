import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BaseFormControl from '../BaseFormControl';

const InputDateField = ({ field, value, onChange, error, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BaseFormControl field={field} value={value} error={error} {...rest}>
        <div style={{ width: '50%' }}>
          {' '}
          {/* Add this div */}
          <DatePicker
            label={field.label}
            value={value}
            onChange={(newValue) => onChange(field.id, newValue)}
          />
        </div>
      </BaseFormControl>
    </LocalizationProvider>
  );
};

export default InputDateField;
