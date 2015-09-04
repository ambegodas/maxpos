package com.ambegodas.maxpos.service;

import com.ambegodas.maxpos.model.Account;
import com.ambegodas.maxpos.service.util.AccountList;

/**
 * Created by pathmasri on 9/4/15.
 */
public interface AccountService {

    public Account getAccount(String userName);
    public Account editAccount(Account account);
    public void deleteAccount(Account account);
    public Account addAccount(Account account);
    public AccountList getAccounts();
}
