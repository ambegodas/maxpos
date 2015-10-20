package com.ambegodas.maxpos.resource;

import com.ambegodas.maxpos.model.TransactionAudit;
import org.springframework.hateoas.ResourceSupport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pathmasri on 10/20/15.
 */
public class TransactionAuditListResource extends ResourceSupport {


    private List<TransactionAudit> transactionAuditList = new ArrayList<TransactionAudit>();

    public List<TransactionAudit> getTransactionAuditList() {
        return transactionAuditList;
    }

    public void setTransactionAuditList(List<TransactionAudit> transactionAuditList) {
        this.transactionAuditList = transactionAuditList;
    }
}
