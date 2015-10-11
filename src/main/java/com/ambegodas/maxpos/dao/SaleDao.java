package com.ambegodas.maxpos.dao;

import com.ambegodas.maxpos.model.Sale;

import java.util.List;

/**
 * Created by pathmasri on 10/11/15.
 */
public interface SaleDao {

    public Sale getSale(int  saleId);
    public Sale updateSale(Sale sale);
    public void deleteSale(Sale sale);
    public Sale addSale(Sale sale);
    public List<Sale> getSales();
}
