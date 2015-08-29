package com.ambegodas.maxpos.service;

import com.ambegodas.maxpos.model.Product;

/**
 * @author Pathmasri Ambegoda
 */
public interface ProductService {
	
	public Product getProduct(int productId);
	public Product editProduct(Product product);
	public void deleteProduct(Product product);
	public Product addProduct(Product product);

}
