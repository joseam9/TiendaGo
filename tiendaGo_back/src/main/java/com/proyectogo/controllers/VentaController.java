package com.proyectogo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.proyectogo.models.VentaDTO;
import com.proyectogo.repositories.IVentaDAO;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST,RequestMethod.GET,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/api/ventas")
public class VentaController {
	
	@Autowired
	private IVentaDAO repository;
	
	@PostMapping("/venta")
	public VentaDTO create (@Validated @RequestBody VentaDTO v) {
		return repository.insert(v);
	}
	
	@GetMapping("/")
	public List<VentaDTO> readAll(){
		return repository.findAll();
	}
	
	@GetMapping("/venta/{id}")
	public Optional<VentaDTO> readId (@PathVariable String id){
		return repository.findById(id);
	}
	
	@PutMapping("/venta/{id}")
	public VentaDTO update (@PathVariable String id, @Validated @RequestBody VentaDTO v) {
		return repository.save(v);
	}
	
	@DeleteMapping("/venta/{id}")
	public void delete (@PathVariable String id) {
		repository.deleteById(id);
	}

}
