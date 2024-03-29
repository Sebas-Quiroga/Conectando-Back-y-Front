import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import swal from 'sweetalert2';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',

})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private ClienteService:ClienteService){}

  ngOnInit(): void {
    this.ClienteService.getClientes().subscribe((clientes)=>this.clientes=clientes)
  }
  delete(cliente: Cliente): void{
    swal({
      title:'Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons:true
    }).then((result)=>{
      if(result.value){
        this.ClienteService.delete(cliente.id).subscribe(
          response=>{
            this.clientes = this.clientes.filter(cli => cli!= cliente)
            swal(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} ${cliente.apellido} Eliminado con Exito`,
              'success'
            )
          }
        )
      }
    })
  }

}
