package com.ambegodas.maxpos.dao;

import com.ambegodas.maxpos.model.TransactionAudit;

import java.util.List;

/**
 * Created by pathmasri on 10/17/15.
 */
public interface TransactionAuditDao {

    public List<TransactionAudit> getTransactionAudits();
    public void addTransactionAudit(TransactionAudit transactionAudit);
}
