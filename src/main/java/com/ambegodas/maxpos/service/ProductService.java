package com.ambegodas.maxpos.service;

import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.service.util.ProductList;

/**
 * @author Pathmasri Ambegoda
 */
public interface ProductService {
	
	public Product getProduct(long productId);
	public Product updateProduct(Product product);
	public void deleteProduct(Product product);
	public Product addProduct(Product product);
	public ProductList getProducts();
	public boolean sellProduct(int soldCount);

}
