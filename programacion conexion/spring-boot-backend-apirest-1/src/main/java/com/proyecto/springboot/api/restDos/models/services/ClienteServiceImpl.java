package com.proyecto.springboot.api.restDos.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.proyecto.springboot.api.restDos.models.dao.IClienteDao;
import com.proyecto.springboot.api.restDos.models.entity.Cliente;

@Service
public class ClienteServiceImpl implements IClienteService {

	@Autowired
	private IClienteDao clienteDao;
	@Override
	@Transactional(readOnly = true)
	public List<Cliente> findAll() {
		return (List<Cliente>) clienteDao.findAll();
	}
	@Override
	@Transactional(readOnly = true)
	public Cliente findByID(Long id) {
		return clienteDao.findById(id).orElse(null);
	}
	@Override
	@Transactional
	public Cliente save(Cliente cliente) {
		return clienteDao.save(cliente);
	}
	@Override
	@Transactional
	public void delete(Long id) {
		clienteDao.deleteById(id);
	}


}
