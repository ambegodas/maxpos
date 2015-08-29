package com.ambegodas.maxpos.daoimpl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.ambegodas.maxpos.dao.ProductDao;
import com.ambegodas.maxpos.model.Product;

/**
 * @author Pathmasri Ambegoda
 */

@Repository
public class ProductDaoImpl implements ProductDao {
	
	@PersistenceContext
	private EntityManager em;

	public Product getProduct(int productId) {
		// TODO Auto-generated method stub
		return em.find(Product.class, productId);
	}

	public Product editProduct(Product product) {
		em.persist(product);
		return product;
	}

	public void deleteProduct(Product product) {
		em.remove(product);
		
	}

	public Product addProduct(Product product) {
		em.persist(product);
		return product;
	}

}
