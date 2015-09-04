package com.ambegodas.maxpos.dao;

import com.ambegodas.maxpos.model.Account;

import java.util.List;

/**
 * Created by pathmasri on 9/4/15.
 */
public interface AccountDao {

    public Account getAccount(String userName);
    public Account editAccount(Account Account);
    public void deleteAccount(Account Account);
    public Account addAccount(Account Account);
    public List<Account> getAccounts();
}
