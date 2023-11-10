package com.proyecto.springboot.api.restDos.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.proyecto.springboot.api.restDos.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long> {

}
