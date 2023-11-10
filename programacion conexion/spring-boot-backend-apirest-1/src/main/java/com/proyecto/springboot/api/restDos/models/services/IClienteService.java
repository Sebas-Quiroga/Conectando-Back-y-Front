package com.proyecto.springboot.api.restDos.models.services;

import java.util.List;

import com.proyecto.springboot.api.restDos.models.entity.Cliente;

public interface IClienteService {
	
	public List<Cliente> findAll();
	public Cliente findByID(Long id);
	public Cliente save(Cliente cliente);
	public void delete(Long id);
}
