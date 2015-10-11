package com.ambegodas.maxpos.resource.asm;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.ambegodas.maxpos.controller.ProductController;
import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.resource.ProductResource;

/**
 * @author Pathmasri Ambegoda
 */
public class ProductResourceAsm extends ResourceAssemblerSupport<Product, ProductResource>{

	public ProductResourceAsm (){
		super(ProductController.class,ProductResource.class);
	}
	
	public ProductResource toResource(Product product){
		
		ProductResource productResource = new ProductResource();
		productResource.setProductName(product.getProductName());
		productResource.setDescription(product.getDescription());
		productResource.setPrice(product.getPrice());
		productResource.setProductId(product.getProductId());
		productResource.setMeasuredIn(product.getMeasuredIn());
		Link link = linkTo(methodOn(ProductController.class).getProduct(product.getProductId())).withSelfRel(); productResource.add(link);
		return productResource;
	}
	
}
