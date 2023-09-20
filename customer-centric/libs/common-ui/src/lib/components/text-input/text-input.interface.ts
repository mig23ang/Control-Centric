export interface IMibTextInput {
  /**
   * Establece el tipo de input
   */
  type?: any;

  /**
   * Establece el atributo name que tendrá el elemento input del componente
   */
  name?: string;

  /**
   * Establece el texto del label
   */
  labelText?: string;

  /**
   * Establece si el input debe mostrar el incono de ayuda
   */
  showHelp?: boolean;

  /**
   * Establece el placeholder que tendrá el componente
   */
  placeholder?: string;

  /**
   * Establece los iconos que se mostraran
   */
  icon?: string;
  iconEmail?: string; //'far fa-envelope'
  iconClear?: string; //'fal fa-times'

  /**
   * Establece la posición que tendrá el icono para el input de texto
   */
  iconPosition?: 'left' | 'right';

  /**
   * Establece las clases que se desean agregar al componente, deben estar separadas por un espacio
   */
  class?: string;

  /**
   * Establece si el input debe tener la propiedad de mostrar un mensaje en el caption
   */
  caption?: any;

  /**
   * Establece el texto que se debe mostrar según sea el caso
   * Mensaje de Ayuda, mensaje de Error y mensaje de Éxito
   */
  captionText?: {
    help?: string;
    error?: string;
    success?: string;
  };

  /**
   * Establece si el input-text es solo para visualización
   */
  view?: boolean;

  /**
   * Establece y retorna el valor de la opción que se encuentra seleccionada
   */
  ngModel?: any;

  /**
   * Establece los estilos que se desean aplicar formato: { priopiedad: valor } ({ color: 'red' })
   */
  style?: Record<string, string>;

  /**
   * Establece el componente como Deshabilitado
   */
  disabled?: boolean;

  /**
   * Deshabilita el autocompletado en el input
   */
  autocomplete?: boolean;

  /**
   * Establece el input como un campo obligatorio y requerido
   */
  required?: boolean;

  /**
   * Establece el si el componente no es válido, y debe presentarse un error
   */
  error?: any;

  /**
   * Establece el si el componente es válido, y debe presentarse a manera de éxito
   */
  success?: boolean;
  /**
   * Establece el numero maximo  de caracteres recibidos por el input
   */
  maxLength?: number;
  /**
   * Establece el numero minimo de caracteres recibidos por el input
   */
  minLength?: number;

  /**
   * Nombre de la expresión regular
   */
  regularExpression?: string;

  /**
   * Establece el objeto Formgroup
   */
  formGr?: any;

  formControlName?: string;

  /**
   * Establece el label fijo en el input
   */
  labelFix?: string;

  /**
   * Ejecuta una función cuando se hace clic en el icono
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libClickIcon?: (e?: Event) => void;

  /**
   * Ejecuta una función cuando se hace clic en el input de texto
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libClick?: (e?: Event) => void;

  /**
   * Ejecuta una función cuando el valor cambia
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libChange?: (e?: Event) => void;

  /**
   * Ejecuta una función cuando se presiona una tecla - independientemente de si esta es una caracter o no
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libKeydown?: (e?: Event) => void;

  /**
   * Ejecuta una función cuando se presiona una tecla
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libKeypress?: (e?: Event) => void;

  /**
   * Ejecuta una función cuando se deja de presionar una tecla
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libKeyup?: (e?: Event) => void;

  /**
   * Ejecuta una función cuando el componente recibe el foco
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libFocus?: (e: Event) => void;

  /**
   * Ejecuta una función cuando el componente pierde el foco
   * @param function Función que se ejecutará cuando se dispare este evento
   */
  libBlur?: (e: Event) => void;

  focusout?: (e: Event) => void;
}
