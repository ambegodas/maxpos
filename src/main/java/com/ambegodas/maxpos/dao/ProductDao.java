package com.ambegodas.maxpos.dao;

import com.ambegodas.maxpos.model.Product;

/**
 * @author Pathmasri Ambegoda
 */
public interface ProductDao {

	public Product getProduct(int productId);
	public Product editProduct(Product product);
	public void deleteProduct(Product product);
	public Product addProduct(Product product);
	
}
