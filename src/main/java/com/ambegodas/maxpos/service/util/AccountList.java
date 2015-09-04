package com.ambegodas.maxpos.service.util;

import com.ambegodas.maxpos.model.Account;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pathmasri on 9/4/15.
 */
public class AccountList {

    private List<Account> accountList = new ArrayList<Account>();

    public List<Account> getAccountList() {
        return accountList;
    }

    public void setAccountList(List<Account> accountList) {
        this.accountList = accountList;
    }
}
