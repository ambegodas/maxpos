package com.ambegodas.maxpos.dao;

import com.ambegodas.maxpos.model.Product;

/**
 * Created by pathmasri on 9/4/15.
 */
public interface ProductDao {

    public Product getProduct(int  productId);
    public Product editProduct(Product product);
    public void deleteProduct(Product product);
    public Product addProduct(Product product);
}
