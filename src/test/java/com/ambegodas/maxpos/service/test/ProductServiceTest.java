package com.ambegodas.maxpos.service.test;

import com.ambegodas.maxpos.dao.ProductDao;
import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.service.impl.ProductServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.ArrayList;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

/**
 * Created by pathmasri on 12/16/15.
 */

@RunWith(MockitoJUnitRunner.class)     // This will help to initialize mocks
public class ProductServiceTest {

    @Mock  // To create mock object
    private ProductDao productDao;

    @InjectMocks  // To inject created mock objects
    private ProductServiceImpl productService = new ProductServiceImpl();


    @Test
    public void testGetAllProducts(){

        Product p = new Product();
        Product p1 = new Product();
        p.setCost(3);
        p.setCost(4);
        ArrayList<Product> products = new ArrayList<Product>();
        products.add(p);
        products.add(p1);


       stub(productDao.getProducts()).toReturn(products);

        assertNotNull(productDao.getProducts());

    }


}
