package com.proyectogo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.proyectogo.models.VentaDTO;

@Repository
public interface IVentaDAO extends MongoRepository<VentaDTO,String>{

}
