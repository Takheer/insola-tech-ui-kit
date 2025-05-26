export type TTextInputProps = {
  label?: string,
  labelClass?: string
  error?: boolean,
  message?: string
  errorMessage?: string
  placeholder?: string
  dense?: boolean
  disabled?: boolean
  asNumber?: boolean
};

export type TTextInputEmits = {
  (e: 'focus'): void
  (e: 'blur'): void
};