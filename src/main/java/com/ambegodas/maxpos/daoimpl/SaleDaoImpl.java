package com.ambegodas.maxpos.daoimpl;

import com.ambegodas.maxpos.dao.SaleDao;
import com.ambegodas.maxpos.model.Sale;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by pathmasri on 10/11/15.
 */
@Repository
public class SaleDaoImpl implements SaleDao {

    @PersistenceContext
    private EntityManager em;

    public Sale getSale(int saleId) {
        // TODO Auto-generated method stub
        return em.find(Sale.class, saleId);
    }

    public Sale updateSale(Sale sale) {
        em.merge(sale);
        return sale;
    }

    public void deleteSale(Sale sale) {
        em.remove(sale);

    }

    public Sale addSale(Sale sale) {
        em.persist(sale);
        return sale;
    }

    @Override
    public List<Sale> getSales() {
        String query = "select a from Sale a";
        List<Sale> sales = em.createQuery(query,Sale.class).getResultList();
        return sales;
    }
}
