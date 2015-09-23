package com.ambegodas.maxpos.resource.asm;

import com.ambegodas.maxpos.controller.AccountController;
import com.ambegodas.maxpos.controller.ProductController;
import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.resource.AccountListResource;
import com.ambegodas.maxpos.resource.ProductListResource;
import com.ambegodas.maxpos.service.util.AccountList;
import com.ambegodas.maxpos.service.util.ProductList;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * Created by pathmasri on 9/23/15.
 */
public class ProductListResourceAsm extends ResourceAssemblerSupport<ProductList,ProductListResource> {

    public ProductListResourceAsm() {
        super(ProductController.class, ProductListResource.class);
    }

    @Override
    public ProductListResource toResource(ProductList productList) {

        ProductListResource productListResource = new ProductListResource();
        productListResource.setProducts(productList.getProducts());

        Link link = linkTo(methodOn(ProductController.class).getProducts()).withSelfRel();
        productListResource.add(link);
        return productListResource;
    }
}
