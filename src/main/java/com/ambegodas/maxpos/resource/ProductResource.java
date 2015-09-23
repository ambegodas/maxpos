package com.ambegodas.maxpos.resource;

import org.springframework.hateoas.ResourceSupport;

import java.util.Date;

/**
 * @author Pathmasri Ambegoda
 */
public class ProductResource extends ResourceSupport{

	private int productId;
	private String productName;
	private String description;
	private double price;
	private double cost;
	private String measuredIn ;
	private long availableQty;
	private long soldQty;
	private Date addedDate;


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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public String getMeasuredIn() {
		return measuredIn;
	}

	public void setMeasuredIn(String measuredIn) {
		this.measuredIn = measuredIn;
	}

	public long getAvailableQty() {
		return availableQty;
	}

	public void setAvailableQty(long availableQty) {
		this.availableQty = availableQty;
	}

	public long getSoldQty() {
		return soldQty;
	}

	public void setSoldQty(long soldQty) {
		this.soldQty = soldQty;
	}

	public Date getAddedDate() {
		return addedDate;
	}

	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}
}
