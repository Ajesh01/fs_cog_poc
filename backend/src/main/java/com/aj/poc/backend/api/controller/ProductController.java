package com.aj.poc.backend.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




import com.aj.poc.backend.api.model.Products;
import com.aj.poc.backend.api.service.ProductsService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    public ProductsService productsService;
    @GetMapping("/products/get-all")
    public List<Products>  getAllProducts(){


//        productsService.getAllProducts();
        return productsService.getAllProducts();
    }



    @GetMapping("/products/{id}")
    public Products getProducts(@PathVariable("id") int id) {

        Products product = productsService.getProducts(id);
        System.out.println(product);
        return product;
    }


    @PostMapping("/products/save")
    public String saveProducts(@RequestBody Products productobj){
        //String name = product.findName(product);
        productsService.saveProducts(productobj);
        return "Product saved successfully";

    }



    @DeleteMapping("/del-products/{id}")
    public void deleteProducts(@PathVariable("id") int id) {
        productsService.deleteProducts(id);
    }

    @PostMapping("/products/edit")
    public String updateProducts(@RequestBody Products product) {

        int id2 = product.getId();
        productsService.update(product, id2);
        return "successfully updated id:"+id2;
    }

}
