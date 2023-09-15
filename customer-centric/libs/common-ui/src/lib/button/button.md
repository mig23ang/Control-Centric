## Componente AtomButton

### Instalación

```javascript
import { ComponentsMobileLibModule } from '@path';
@NgModule({
  ...
  imports: [
    ....
    ComponentsMobileLibModule
  ],
})
```

```html
<atom-button></atom-button>
```

##### Posibles entradas

Importación de interface para este componente

```typescript
import { IButton } from '@path';
```

```typescript
interface IButton {
  type?: string; // Establece el tipo de button
  color: 'primary' | 'secondary' | 'tertiary'; // Establece el color del button
  label: string; // Establece el label del button
  icon?: string; // (Opcional) Establece el icono (parametro name de ion-icons)
  posicon?: 'left' | 'right'; //(Opcional) Establece la posicion del icono ('Deafult: right')
  disabled?: boolean; // (Opcional) Establece el componente como Deshabilitado
}
```

##### Eventos
Los eventos del componente se establecen en el parametro (libClick) del html

```
libClick = Ejecuta una función cuando se hace clic en el componente

```

##### Uso

```javascript

const custom = {
  type?: 'submit',
  color: 'primary',
  label: 'AtomButton',
  icon?: 'add-circle-outline',
  posicon?: 'right',
  disabled?: false
}

eventFunction() {
  console.log('Click-AtomButton');
}
```

```html
 <atom-button dataQaId="bc-mundo-btn_open"
              [custom]="custom"
              (libClick)="eventFunction()">
 </atom-button>
```
