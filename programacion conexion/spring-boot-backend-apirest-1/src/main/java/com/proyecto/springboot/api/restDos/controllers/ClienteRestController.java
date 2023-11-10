package com.proyecto.springboot.api.restDos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.proyecto.springboot.api.restDos.models.entity.Cliente;
import com.proyecto.springboot.api.restDos.models.services.IClienteService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ClienteRestController {
	
	@Autowired
	private IClienteService clienteService;

	@GetMapping("/clientes")
	public List <Cliente> index(){
		return clienteService.findAll();
	}

	@GetMapping("/clientes/{id}")
	public Cliente show(@PathVariable Long id){
		return clienteService.findByID(id);
	}

	@PostMapping("/clientes")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente create(@RequestBody Cliente cliente){
		return clienteService.save(cliente);
	}

	@PutMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente update(@RequestBody Cliente cliente, @PathVariable Long id){
		Cliente clienteActual = clienteService.findByID(id);
		clienteActual.setApellido(cliente.getApellido());
		clienteActual.setEmail(cliente.getEmail());
		clienteActual.setNombre(cliente.getNombre());
		return clienteService.save(clienteActual);
	}

	@DeleteMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id){
		clienteService.delete(id);
	}


}
