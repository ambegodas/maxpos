package com.ambegodas.maxpos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.resource.ProductResource;
import com.ambegodas.maxpos.resource.asm.ProductResourceAsm;
import com.ambegodas.maxpos.service.ProductService;

/**
 * @author Pathmasri Ambegoda
 */
@Controller
public class ProductController {
	
	private ProductService productService;
	
	@Autowired
	public ProductController(ProductService productService){
		this.productService = productService;
	}
	
	public ProductController(){
	}
	
	@RequestMapping(value="/products/{productId}", method=RequestMethod.GET)
	public ResponseEntity<ProductResource> getProduct(@PathVariable int productId){
	
		Product product = new Product(1,"firstProduct",2D);
		
		if(product != null){
			ProductResource res = new ProductResourceAsm().toResource(product);
			return new ResponseEntity<ProductResource>(res,HttpStatus.OK);
		} else {
			return new ResponseEntity<ProductResource>(HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	

}
