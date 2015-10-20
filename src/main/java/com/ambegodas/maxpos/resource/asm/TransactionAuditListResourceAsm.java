package com.ambegodas.maxpos.resource.asm;

import com.ambegodas.maxpos.controller.TransactionAuditController;
import com.ambegodas.maxpos.resource.ProductListResource;
import com.ambegodas.maxpos.resource.TransactionAuditListResource;
import com.ambegodas.maxpos.service.util.ProductList;
import com.ambegodas.maxpos.service.util.TransactionAuditList;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

/**
 * Created by pathmasri on 10/20/15.
 */
public class TransactionAuditListResourceAsm extends ResourceAssemblerSupport<TransactionAuditList,TransactionAuditListResource> {


    public TransactionAuditListResourceAsm() {
        super(TransactionAuditController.class, TransactionAuditListResource.class);
    }


    @Override
    public TransactionAuditListResource toResource(TransactionAuditList transactionAuditList) {

        TransactionAuditListResource transactionAuditListResource = new TransactionAuditListResource();
        transactionAuditListResource.setTransactionAuditList(transactionAuditList.getTransactionAuditList());

        return transactionAuditListResource;
    }
}
