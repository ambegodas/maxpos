package com.ambegodas.maxpos.daoimpl;

import com.ambegodas.maxpos.dao.TransactionAuditDao;
import com.ambegodas.maxpos.model.TransactionAudit;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by pathmasri on 10/17/15.
 */
@Repository
public class TransactionAuditDaoImpl implements TransactionAuditDao {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<TransactionAudit> getTransactionAudits() {
        String query = "Select a from TransactionAudit a";
        List<TransactionAudit> transactionAudits = em.createQuery(query,TransactionAudit.class).getResultList();
        return transactionAudits;
    }

    @Override
    public void addTransactionAudit(TransactionAudit transactionAudit) {
        em.persist(transactionAudit);
    }
}
