import { LocalizationProvider } from "@/src/locales";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormContext, Controller } from "react-hook-form";

export default function RHFDatePicker({ name, size, ...other }) {
  const { control } = useFormContext();

  return (
    <LocalizationProvider>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            {...other}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            slotProps={{
              textField: {
                size: size,
                fullWidth: true,
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
