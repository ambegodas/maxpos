package com.ambegodas.maxpos.service.impl;

import com.ambegodas.maxpos.dao.ProductDao;
import com.ambegodas.maxpos.dao.SaleDao;
import com.ambegodas.maxpos.model.Sale;
import com.ambegodas.maxpos.model.UnitSale;
import com.ambegodas.maxpos.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * Created by pathmasri on 10/11/15.
 */
@Service
@Transactional
public class SaleServiceImpl implements SaleService{

    @Autowired
    private SaleDao saleDao;

    @Autowired
    private ProductDao productDao;


    public Sale getSale(int saleId) {
        return saleDao.getSale(saleId);
    }

    public Sale updateSale(Sale sale) {
        return saleDao.updateSale(sale);
    }

    public void deleteSale(Sale sale) {
        saleDao.deleteSale(sale);
    }

    public Sale addSale(Sale sale) {

        sale.setSellingTimestamp(new Date());
        for(UnitSale us: sale.getUnitSales()){
            us.setSale(sale);
            productDao.sellProduct(us.getQty(),us.getProduct().getProductId());
        }
            return saleDao.addSale(sale);


    }
}
