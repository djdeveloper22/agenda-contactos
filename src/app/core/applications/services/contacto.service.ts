import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { environment } from 'src/environments/environments.dev';
import { IContactoRepository } from 'src/app/domain/usesCases/contacto.repository';
import { Observable } from 'rxjs';
import { IContacto } from 'src/app/domain/entities/contacto.dto';


const URL = environment.baseUrl;

@Injectable()
export class ContactoService implements IContactoRepository {

  constructor( private http: HttpClient ) { }

  create(payload: Partial<IContacto>): Observable<HttpResponse<any>> {
    return this.http.post(`${URL}/contacto`, payload, {observe: 'response'})
  }

  read(): Observable<HttpResponse<Partial<IContacto>[]>> {
    return this.http.get<Partial<IContacto>[]>(`http://localhost:3500/contactos`, {observe: 'response'})
  }

  update(payload: Partial<IContacto>): Observable<HttpResponse<any>> {
    return this.http.put(`${URL}/contacto/${payload.id}`, payload, {observe: 'response'})
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${URL}/contacto/${id}`, { observe: 'response' })
  }
}
