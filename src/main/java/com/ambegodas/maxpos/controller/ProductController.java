package com.ambegodas.maxpos.controller;

import com.ambegodas.maxpos.resource.AccountResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.resource.ProductResource;
import com.ambegodas.maxpos.resource.asm.ProductResourceAsm;
import com.ambegodas.maxpos.service.ProductService;

import java.util.List;

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
	
		Product product = productService.getProduct(productId);
		
		if(product != null){
			ProductResource res = new ProductResourceAsm().toResource(product);
			return new ResponseEntity<ProductResource>(res,HttpStatus.OK);
		} else {
			return new ResponseEntity<ProductResource>(HttpStatus.NOT_FOUND);
		}
		
		
	}

	@RequestMapping(value = "/products", method = RequestMethod.POST)
	public ResponseEntity<ProductResource> addProduct(@RequestBody Product product){

		Product newProduct = productService.addProduct(product);

		if(newProduct != null){
			ProductResource res = new ProductResourceAsm().toResource(newProduct);
			return new ResponseEntity<ProductResource>(res,HttpStatus.OK);
		} else {
			return new ResponseEntity<ProductResource>(HttpStatus.NOT_FOUND);
		}

	}

	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public @ResponseBody List<Product> getProducts(){
	 return	productService.getProducts().getProducts();
	}

	@RequestMapping(value = "/product", method = RequestMethod.PUT)
	public ResponseEntity<ProductResource> updateProduct(@RequestBody Product product){

		Product updatedProduct = productService.updateProduct(product);
		if(updatedProduct != null){
			ProductResource res = new ProductResourceAsm().toResource(updatedProduct);
			return new ResponseEntity<ProductResource>(res, HttpStatus.OK);
		} else {
			return new ResponseEntity<ProductResource>(HttpStatus.NOT_FOUND);
		}
	}
	

}
