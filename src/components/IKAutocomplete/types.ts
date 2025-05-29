export type TAutocompleteProps = {
  modelValue?: string;
  options: any[];
  label?: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  message?: string;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  itemValue?: string;
  itemLabel?: string;
  returnObject?: boolean;
  clearable?: boolean;
  filterable?: boolean;
};