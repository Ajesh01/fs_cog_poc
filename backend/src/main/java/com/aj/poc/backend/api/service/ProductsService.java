package com.aj.poc.backend.api.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aj.poc.backend.api.model.Products;
import com.aj.poc.backend.api.repository.ProductsRepository;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> getAllProducts() {

        List<Products> products = productsRepository.findAll();

        return products;
    }



    public String saveProducts(Products product) {

        productsRepository.save(product);

            return "Product added successfully";

    }

    public void deleteProducts(int id) {
        productsRepository.deleteById(id);
    }


    public void update(Products product, int id) {

        productsRepository.save(product);
    }

    public Products getProducts(int id) {
        Products products= productsRepository.findById(id).get();

        System.out.println(products.toString());
        return products;
    }

    public List<Products> findByName(String name) {
        return productsRepository.findByName(name);
    }
}


