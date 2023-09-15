export interface IButton {
  /**
   * Establece el tipo de button
   */
  type?: string;

  /**
   * Establece el color del button
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primary modal'
    | 'secondary modal'
    | 'tertiary modal'
    | 'primary secuencial'
    | 'secondary secuencial';

  /**
   * Establece el label del button
   */
  label: string;

  /**
   * (Opcional) Establece el icono (parametro name de ion-icons)
   */
  icon?: string;

  /**
   * (Opcional) Establece la posicion del icono ('Deafult: right')
   */
  posicon?: 'left' | 'right';

  /**
   * Establece el componente como Deshabilitado
   */
  disabled?: boolean;

  /**
   * Establece datos adicionales
   */
  auxAction?: string;

  /**
   * Ejecuta una función cuando se hace clic en el button
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libClick?: (e: Event) => void;
}
