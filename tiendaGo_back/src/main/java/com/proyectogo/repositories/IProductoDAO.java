package com.proyectogo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.proyectogo.models.ProductoDTO;

@Repository

public interface IProductoDAO extends MongoRepository<ProductoDTO, String>{

}
