package com.ambegodas.maxpos.dao;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.ambegodas.maxpos.model.Product;

/**
 * @author Pathmasri Ambegoda
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/business-config.xml")
public class ProductDaoTest {

	@Autowired
	private ProductDao productDao;
	
	private Product product;
	
	@Before
	@Transactional
	@Rollback(false)
	public void setup(){
		product = new Product();
		product.setProductName("Rice");
		productDao.addProduct(product);
	}
	 

	@Transactional
	public void test(){
		assertNotNull(productDao.getProduct(product.getProductId()));
	}
}
