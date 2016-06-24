package com.ambegodas.maxpos.service.impl;

import com.ambegodas.maxpos.dao.ProductDao;
import com.ambegodas.maxpos.service.util.ProductList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.service.ProductService;

import java.util.List;

/**
 * @author Pathmasri Ambegoda
 */
@Service
@Transactional(propagation = Propagation.REQUIRES_NEW,readOnly = false)
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDao productDao;
	

	public Product getProduct(long productId) {
		return productDao.getProduct(productId);
	}

	public Product updateProduct(Product product) {
		return productDao.updateProduct(product);
	}

	public void deleteProduct(Product product) {
		productDao.deleteProduct(product);		
	}

	public Product addProduct(Product product) {
		return productDao.addProduct(product);
	}

	@Override
	public ProductList getProducts() {
		List<Product> accounts = productDao.getProducts();
		ProductList productList = new ProductList();
		productList.setProducts(accounts);
		return productList ;
	}

	@Override
	public boolean sellProduct(int soldCount) {
		return false;
	}

}
