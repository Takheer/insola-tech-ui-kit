export type TButtonProps = {
  to?: string
  variant?: 'primary' | 'outline'
  fullWidth?: boolean
  size?: 'lg' | 'md' | 'sm'
  loading?: boolean
  dense?: boolean
};

export type TButtonEmits = {
  (e: 'click'): void
};