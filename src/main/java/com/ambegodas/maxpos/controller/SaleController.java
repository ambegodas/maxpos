package com.ambegodas.maxpos.controller;

import com.ambegodas.maxpos.model.Sale;
import com.ambegodas.maxpos.resource.SaleResource;
import com.ambegodas.maxpos.resource.SaleResource;
import com.ambegodas.maxpos.resource.SaleResource;
import com.ambegodas.maxpos.resource.asm.SaleResourceAsm;
import com.ambegodas.maxpos.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by pathmasri on 10/10/15.
 */
@Controller
public class SaleController {

    private SaleService saleService;

    @Autowired
    public SaleController(SaleService saleService){
        this.saleService = saleService;
    }

    public SaleController(){
    }

    @RequestMapping(value = "/sale", method = RequestMethod.POST)
    public ResponseEntity<SaleResource> addSale (@RequestBody Sale sale){

       Sale addedSale = saleService.addSale(sale);
        if(addedSale != null){
            SaleResource res = new SaleResourceAsm().toResource(addedSale);
            return new ResponseEntity<SaleResource>(HttpStatus.OK);
        } else {
            return new ResponseEntity<SaleResource>(HttpStatus.NOT_FOUND);
        }
    }

}
