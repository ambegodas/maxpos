package com.ambegodas.maxpos.service.util;

import com.ambegodas.maxpos.model.Account;
import com.ambegodas.maxpos.model.Product;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pathmasri on 9/23/15.
 */
public class ProductList {

    private List<Product> products = new ArrayList<Product>();

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
