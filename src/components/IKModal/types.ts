export type TModalProps = {
  /**
   * v-model, управляет состоянием модального окна
   */
  modelValue?: boolean;
  /**
   * Запрещает закрытие модального океа по клику на оверлей
   */
  persistent?: boolean;
  /**
   * Позволяет открыть модальное окно на весь экран
   */
  fullscreen?: boolean;
};