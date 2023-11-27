package com.aj.poc.backend.api.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aj.poc.backend.api.model.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Integer>{

    //List<Products> findByName(String name);

    //Products getProducts(int id);

//	Object saveOrUpdate(Products product);


    //public List<Products> getAllProductsOfInventory(int id);
    public List<Products> findByName(String name);
}
