package com.ambegodas.maxpos.service;

import com.ambegodas.maxpos.model.Sale;
import com.ambegodas.maxpos.model.Sale;


/**
 * Created by pathmasri on 10/11/15.
 */
public interface SaleService {

    public Sale getSale(int saleId);
    public Sale updateSale(Sale sale);
    public void deleteSale(Sale sale);
    public Sale addSale(Sale sale);
}
