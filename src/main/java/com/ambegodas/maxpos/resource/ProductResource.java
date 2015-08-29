package com.ambegodas.maxpos.resource;

import org.springframework.hateoas.ResourceSupport;

/**
 * @author Pathmasri Ambegoda
 */
public class ProductResource extends ResourceSupport{
	
	private int productId;
	private String productName;
	private double price;
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	

}
