package com.ambegodas.maxpos.resource.asm;

import com.ambegodas.maxpos.controller.SaleController;
import com.ambegodas.maxpos.model.Sale;
import com.ambegodas.maxpos.resource.SaleResource;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * Created by pathmasri on 10/11/15.
 */
public class SaleResourceAsm extends ResourceAssemblerSupport<Sale, SaleResource> {


    public SaleResourceAsm() {
        super(SaleController.class, SaleResource.class);
    }

    @Override
    public SaleResource toResource(Sale sale) {
        SaleResource resource = new SaleResource();
        resource.setBalance(sale.getBalance());
        resource.setDiscount(sale.getDiscount());
        resource.setFinalTotal(sale.getFinalTotal());
        resource.setPaidAmount(sale.getPaidAmount());
        resource.setSellingTimestamp(sale.getSellingTimestamp());
        resource.setSaleId(sale.getSaleId());
        resource.setUnitSales(sale.getUnitSales());
        resource.setTax(sale.getTax());
        return resource;
    }
}
