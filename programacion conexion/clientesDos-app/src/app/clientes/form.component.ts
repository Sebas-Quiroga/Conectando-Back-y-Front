import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router,ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  cliente:Cliente= new Cliente()
  titulo: String= "Crear Cliente"

  constructor(private clienteService:ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.cargarCliente()
  }

  //Cargar Cliente
  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCLiente(id).subscribe((cliente) => this.cliente=cliente)
      }
    })
  }




  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      cliente  =>{
        this.router.navigate(['/clientes'])
        swal('Nuevo Cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
    }
    )
  }

  update():void{
    this.clienteService.update(this.cliente).subscribe( cliente=>{
      this.router.navigate(['/clientes'])
      swal('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
    })
  }

}
