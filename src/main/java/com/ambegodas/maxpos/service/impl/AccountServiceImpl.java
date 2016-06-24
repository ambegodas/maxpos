package com.ambegodas.maxpos.service.impl;

import com.ambegodas.maxpos.dao.AccountDao;
import com.ambegodas.maxpos.model.Account;
import com.ambegodas.maxpos.service.AccountService;
import com.ambegodas.maxpos.service.util.AccountList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by pathmasri on 9/4/15.
 */

@Service
@Transactional
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountDao accountDao;


    public Account getAccount(String userName) {

        return accountDao.getAccount(userName);
    }

    public Account editAccount(Account account) {
        return accountDao.editAccount(account);
    }

    public void deleteAccount(Account account) {
        accountDao.deleteAccount(account);
    }


    public Account addAccount(Account account) {
        return accountDao.addAccount(account);
    }

    @Override
    public AccountList getAccounts() {

        List<Account> accounts = accountDao.getAccounts();
        AccountList accountList = new AccountList();
        accountList.setAccountList(accounts);
        return accountList ;
    }


}
