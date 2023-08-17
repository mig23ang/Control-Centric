export interface Cliente {
    id: string;
    name: string;
    price: number;
  }
  
  export const exampleClientes: Cliente[] = [
    {
      id: '1',
      name: 'Cliente 1',
      price: 100,
    },
    {
      id: '2',
      name: 'Cliente 2',
      price: 200,
    },
  ];