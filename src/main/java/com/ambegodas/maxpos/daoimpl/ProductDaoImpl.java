package com.ambegodas.maxpos.daoimpl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.ambegodas.maxpos.dao.ProductDao;
import com.ambegodas.maxpos.model.Account;
import org.springframework.stereotype.Repository;

import com.ambegodas.maxpos.model.Product;

import java.util.List;

/**
 * @author Pathmasri Ambegoda
 */

@Repository
public class ProductDaoImpl implements ProductDao {
	
	@PersistenceContext
	private EntityManager em;

	public Product getProduct(long productId) {
		// TODO Auto-generated method stub
		return em.find(Product.class, productId);
	}

	public Product updateProduct(Product product) {
		em.merge(product);
		return product;
	}

	public void deleteProduct(Product product) {
		em.remove(product);
		
	}

	public Product addProduct(Product product) {
		em.persist(product);
		return product;
	}

	@Override
	public List<Product> getProducts() {
		String query = "select a from Product a";
		List<Product> products = em.createQuery(query,Product.class).getResultList();
		return products;
	}

	@Override
	public boolean sellProduct(int soldCount, long productId) {

		Query query = em.createQuery("UPDATE Product p SET p.availableQty = p.availableQty- :soldCount WHERE p.productId= :id");

		query.setParameter("soldCount", soldCount);
		query.setParameter("id", productId);

		int updateCount = query.executeUpdate();

		if (updateCount > 0) {
			return true;
		}
		return false;
	}

}
