package com.aj.poc.backend.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

//import lombok.ToString;

@Entity
//@Data

@Getter
@Setter

public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable=false,length=10)
    private double price;
    @Column(nullable=false,length=10)
    private int quantity;
    @Column(nullable=false,length=25)
    private String name;

    @Column(nullable=false,length=100)
    private String description;


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }


    public double getPrice() {
        return price;
    }


    public void setPrice(double price) {
        this.price = price;
    }


    public int getQuantity() {
        return quantity;
    }


    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }




    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }





    @Override
    public String toString() {
        return "Products [id=" + id + ", price=" + price + ", quantity=" + quantity + ", product_name=" + name
                +  ", description=" + description + "]";
    }



}
