package com.ambegodas.maxpos.controller;

import com.ambegodas.maxpos.resource.TransactionAuditListResource;
import com.ambegodas.maxpos.resource.asm.TransactionAuditListResourceAsm;
import com.ambegodas.maxpos.service.TransactionAuditService;
import com.ambegodas.maxpos.service.util.TransactionAuditList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by pathmasri on 10/20/15.
 */

@Controller
public class TransactionAuditController {

    @Autowired
    TransactionAuditService transactionAuditService;


      @RequestMapping(value = "/transactionAudits", method = RequestMethod.GET)
    public ResponseEntity<TransactionAuditListResource> getTransactionAudits(){

        TransactionAuditList transactionAuditList = transactionAuditService.getTransactionAudits();

        if(transactionAuditList != null){
            TransactionAuditListResource transactionAuditListResource = new TransactionAuditListResourceAsm().toResource(transactionAuditList);
            return  new ResponseEntity<TransactionAuditListResource>(transactionAuditListResource, HttpStatus.ACCEPTED);
        } else{
            return new ResponseEntity<TransactionAuditListResource>(HttpStatus.NOT_FOUND);

        }
    }
}
