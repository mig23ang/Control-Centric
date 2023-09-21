### Instalación

##### Posibles entradas

Importación de interface para este componente

```typescript
import { IMibTextInput } from '@ruta';

export interface IMibTextInput {
  type?: string; // Establece el tipo de input
  name?: string; // Establece el atributo name que tendrá el elemento input del componente
  labelText?: string; // Establece el texto del label
  showHelp?: boolean; // Establece si el input debe mostrar el incono de ayuda
  tooltipHelp?: ILibTooltip; // Establece las propiedades del tooltip
  placeholder?: string; // Establece el placeholder que tendrá el componente
  icon?: string; // Establece el icono que se mostrará en el input de texto
  iconEmail?: 'far fa-envelope'; // Establece el icono que se mostrará si el input es tipo email
  iconClear?: 'fal fa-times'; // Establece el icono que se mostrará en si el input es tipo email
  iconPass?: 'fal fa-eye-slash'; // Establece el icono que se mostrará si el input es tipo pass
  iconVisiblePass?: 'fal fa-eye'; // Establece el icono que se mostrará si el input es tipo pass
  iconPosition?: 'left' | 'right'; // Establece la posición que tendrá el icono para el input de texto
  class?: string; // Establece las clases que se desean agregar al componente, deben estar separadas por un espacio
  caption?: boolean; // Establece si el input debe tener la propiedad de mostrar un mensaje en el caption
  captionText?: {
    // Establece el texto que se debe mostrar según sea el caso
    help?: string; // Mensaje de Ayuda
    error?: string; // Mensaje de Error
    success?: string; // Mensaje de Éxito
  };
  view?: boolean; // Establece si el input-text es solo para visualización
  ngModel?: string; // Establece y retorna el valor de la opción que se encuentra seleccionada
  style?: Record<string, string>; // Establece los estilos que se desean aplicar formato: { priopiedad: valor } ({ color: 'red' })
  disabled?: boolean; // Establece el componente como Deshabilitado
  autocomplete?: boolean; // Deshabilita el autocompletado en el input
  required?: boolean; // Establece el input como un campo obligatorio y requerido
  error?: boolean; // Establece el si el componente no es válido, y debe presentarse un error
  success?: boolean; // Establece el si el componente es válido, y debe presentarse a manera de éxito
  regularExpresion?: string; // Nombre de la expresión regular

  // Eventos
  libClickIcon?: (e?: Event) => void;
  libClick?: (e?: Event) => void;
  libChange?: (e?: Event) => void;
  libKeydown?: (e?: Event) => void;
  libKeypress?: (e?: Event) => void;
  libKeyup?: (e?: Event) => void;
  libFocus?: (e?: Event) => void;
  libBlur?: (e?: Event) => void;
}
```

##### Eventos

Los eventos del componente se establecen en el parametro (libClick) del html

```
libClick = Ejecuta una función cuando se hace clic en el componente

```

##### Uso

```javascript
// Ejemplo

this.customInputText = {
      placeholder: 'ingrese sus datos',
      iconPass: 'fal fa-eye-slash',
      iconVisiblePass: 'fal fa-eye',
      type: 'password',
      labelText: 'contraseña',
      caption: true,
      error:true,
      captionText: {
        help: 'Escriba aquí su nombre',
        error: 'Falta este campo',
        success: 'Muy bien',
      },

eventFunction(event) {
  console.log('Event: ', event);
}
```


