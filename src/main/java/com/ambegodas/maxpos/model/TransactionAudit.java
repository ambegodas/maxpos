package com.ambegodas.maxpos.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by pathmasri on 10/17/15.
 */
@Entity
public class TransactionAudit {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long transactionId;
    private Date tnxTimestamp;
    private String userId;
    private String action;
    private double total;
    private String content;
    private long saleId;



    public long getSaleId() {
        return saleId;
    }

    public void setSaleId(long saleId) {
        this.saleId = saleId;
    }

    public long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(long transactionId) {
        this.transactionId = transactionId;
    }

    public Date getTnxTimestamp() {
        return tnxTimestamp;
    }

    public void setTnxTimestamp(Date tnxTimestamp) {
        this.tnxTimestamp = tnxTimestamp;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
