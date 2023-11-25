package com.aj.poc.backend.api.service;

import java.util.List;
import java.io.UnsupportedEncodingException;
import java.util.*;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aj.poc.backend.api.model.Products;
import com.aj.poc.backend.api.repository.ProductsRepository;
//import com.cts.preorda.seller.repository.ProductsRepository;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> getAllProducts() {
        List<Products> products = productsRepository.findAll();
//        for(Products product : products) {
//
//
//        }
        return products;
    }

    /*
     * public Products getProducts(int id) { return productsRepository.findById(id);
     * }
     */
//    public Products saveProducts(Products product) {
//
//
//
//        return productsRepository.save(product);
//    }

    public String saveProducts(Products product) {
        // inv.addElements(productRepo.findById());
        /*
         * if(!(isProductPresent(name))) { productRepo.save(product); int id =
         * productRepo.findIdByName(name); inventoryRepo.save(inv); } else { }
         */
//        String name = product.getName();
//        Inventory inv = new Inventory();


        productsRepository.save(product);

//            int id = this.findProductId(name);
//            int quantity=product.getQuantity();

            // List<Products> p = new ArrayList<>();
            // p.add(product);
            // inv.addElements(p);
            // inventoryRepo.save(inv);
            //int user_id=103;
//            inv.setProduct_id(id);
//            inv.setSeller_id(user_id);
//            inv.setQuantity(quantity);
//
//            inventoryRepo.save(inv);
            // productRepo.fin

            return "Product added successfully";

    }

    public void deleteProducts(int id) {
        productsRepository.deleteById(id);
    }


    public void update(Products product, int id) {
        // TODO Auto-generated method stub
        //Products products = this.getProducts(id);

        productsRepository.save(product);
    }

    public Products getProducts(int id) {
        // TODO Auto-generated method g
        Products products= productsRepository.findById(id).get();

        System.out.println(products.toString());
        return products;
    }

    public List<Products> findByName(String name) {
        return productsRepository.findByName(name);
    }
}


