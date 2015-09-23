package com.ambegodas.maxpos.resource;

import com.ambegodas.maxpos.model.Product;
import org.springframework.hateoas.ResourceSupport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pathmasri on 9/23/15.
 */
public class ProductListResource extends ResourceSupport {

    private List<Product> products = new ArrayList<Product>();

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
