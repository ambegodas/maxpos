package com.ambegodas.maxpos.service.impl;

import com.ambegodas.maxpos.dao.TransactionAuditDao;
import com.ambegodas.maxpos.model.TransactionAudit;
import com.ambegodas.maxpos.service.TransactionAuditService;
import com.ambegodas.maxpos.service.util.TransactionAuditList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by pathmasri on 10/20/15.
 */

@Service
@Transactional
public class TransactionAuditServiceImpl implements TransactionAuditService {


    @Autowired
    private TransactionAuditDao transactionAuditDao;

    @Override
    public TransactionAuditList getTransactionAudits() {

        TransactionAuditList list = new TransactionAuditList();
        list.setTransactionAuditList(transactionAuditDao.getTransactionAudits());
        return  list;
    }

}
