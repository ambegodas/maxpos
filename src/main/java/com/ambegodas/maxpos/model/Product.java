package com.ambegodas.maxpos.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;


/**
 * @author Pathmasri Ambegoda
 */
@Entity
public class Product {
	
	@Id @GeneratedValue
	private long productId;
	private String productName;
	private String description;
	private double price;
	private double cost;
	private String measuredIn ;
	private int availableQty;
	private int soldQty;
	private Date addedDate;



	public Product(){
	}

	public Product(int productId, String productName, double price) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.price = price;
	}

	public long getProductId() {
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

	public int getAvailableQty() {
		return availableQty;
	}

	public void setAvailableQty(int availableQty) {
		this.availableQty = availableQty;
	}

	public int getSoldQty() {
		return soldQty;
	}

	public void setSoldQty(int soldQty) {
		this.soldQty = soldQty;
	}

	public Date getAddedDate() {
		return addedDate;
	}

	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}
}
