package com.ambegodas.maxpos.model;

import javax.persistence.*;


/**
 * Created by pathmasri on 10/10/15.
 */
@Entity
public class UnitSale {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long unitSaleId;
    @OneToOne
    @JoinColumn(name = "productId")
    private Product product;
    private int qty;
    private double unitTotal;
    private double unitPrice;

    @ManyToOne
    @JoinColumn(name = "saleId")
    private Sale sale;

    public long getUnitSaleId() {
        return unitSaleId;
    }

    public void setUnitSaleId(long unitSaleId) {
        this.unitSaleId = unitSaleId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public double getUnitTotal() {
        return unitTotal;
    }

    public void setUnitTotal(double unitTotal) {
        this.unitTotal = unitTotal;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public Sale getSale() {
        return sale;
    }

    public void setSale(Sale sale) {
        this.sale = sale;
    }
}
