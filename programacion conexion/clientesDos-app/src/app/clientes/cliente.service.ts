import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from './cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string= 'http://localhost:8081/api/clientes';

  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    this.http.get<Cliente[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(map((response)=> response as Cliente[]));
  }
}
