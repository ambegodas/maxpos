package com.ambegodas.maxpos.service;

import com.ambegodas.maxpos.model.TransactionAudit;
import com.ambegodas.maxpos.service.util.TransactionAuditList;

import java.util.List;

/**
 * Created by pathmasri on 10/20/15.
 */
public interface TransactionAuditService {


    public TransactionAuditList getTransactionAudits();

}
