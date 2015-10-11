package com.ambegodas.maxpos.resource;

import com.ambegodas.maxpos.model.UnitSale;
import org.springframework.hateoas.ResourceSupport;

import java.util.Date;
import java.util.List;

/**
 * Created by pathmasri on 10/11/15.
 */
public class SaleResource extends ResourceSupport {

    private long saleId;
    private List<UnitSale> unitSales;
    private double finalTotal;
    private double discount;
    private double tax;
    private double paidAmount;
    private double balance;
    private Date sellingTimestamp;

    public long getSaleId() {
        return saleId;
    }

    public void setSaleId(long saleId) {
        this.saleId = saleId;
    }

    public List<UnitSale> getUnitSales() {
        return unitSales;
    }

    public void setUnitSales(List<UnitSale> unitSales) {
        this.unitSales = unitSales;
    }

    public double getFinalTotal() {
        return finalTotal;
    }

    public void setFinalTotal(double finalTotal) {
        this.finalTotal = finalTotal;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getPaidAmount() {
        return paidAmount;
    }

    public void setPaidAmount(double paidAmount) {
        this.paidAmount = paidAmount;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public Date getSellingTimestamp() {
        return sellingTimestamp;
    }

    public void setSellingTimestamp(Date sellingTimestamp) {
        this.sellingTimestamp = sellingTimestamp;
    }
}
