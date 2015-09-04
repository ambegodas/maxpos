package com.ambegodas.maxpos.service.impl;

import com.ambegodas.maxpos.dao.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.service.ProductService;

/**
 * @author Pathmasri Ambegoda
 */
@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDao productDao;
	

	public Product getProduct(int productId) {
		return productDao.getProduct(productId);
	}

	public Product editProduct(Product product) {
		return productDao.editProduct(product);
	}

	public void deleteProduct(Product product) {
		productDao.deleteProduct(product);		
	}

	public Product addProduct(Product product) {
		return productDao.addProduct(product);
	}

}
