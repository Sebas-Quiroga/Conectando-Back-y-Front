import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from './cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string= 'http://localhost:8081/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    this.http.get<Cliente[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(map((response)=> response as Cliente[]));
  }
   //Método para crear cliente
   create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers:this.httpHeaders})
  }
  //Método para obtener los datos del cliente por Id
  getCLiente(id: any):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`)
  }

  //Método para Actualizar
  update(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpoint}/${cliente.id}`,cliente,{headers:this.httpHeaders} )
  }

  //Método para Eliminar
  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`,{headers:this.httpHeaders})
  }
}
