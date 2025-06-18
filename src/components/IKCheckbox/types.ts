export type TCheckboxProps = {
  label?: string
  size?: 'lg' | 'md' | 'sm'
  indeterminate?: boolean
  disabled?: boolean
};

export type TCheckboxEmits = {
  (e: 'update:model-value'): void
};