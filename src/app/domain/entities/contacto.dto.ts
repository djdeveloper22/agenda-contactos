export interface IContacto {
  nombre: string,
  apellido: string,
  direccion: string,
  barrio: string,
  telefono: string,
  token: string,
  id: number
}

export type ContactoDto = Partial<IContacto>;
