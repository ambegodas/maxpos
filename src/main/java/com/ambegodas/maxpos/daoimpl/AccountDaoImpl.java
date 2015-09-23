package com.ambegodas.maxpos.daoimpl;

import com.ambegodas.maxpos.dao.AccountDao;
import com.ambegodas.maxpos.model.Account;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by pathmasri on 9/4/15.
 */

@Service
@Transactional
public class AccountDaoImpl implements AccountDao {

    @PersistenceContext
    private EntityManager em;

    public Account getAccount(String username) {

        String query = "select a from Account a where a.username=" + " :username";
        Account account = (Account)em.createQuery(query).setParameter("username",username).getSingleResult();
     //   Account account = new Account();
     //   account.setUserName("pathmasri");
     //   account.setPassword("pass");
        return account;
    }

    public Account editAccount(Account account) {
        em.merge(account);
        return account;
    }

    public void deleteAccount(Account account) {
        em.remove(account);

    }

    public Account addAccount(Account account) {
        try{
            em.persist(account);
        } catch (Exception e){
            System.out.print(e.toString());
        }

        return account;
    }

    @Override
    public List<Account> getAccounts() {
        String query = "select a from Account a";
        List<Account> accounts = em.createQuery(query,Account.class).getResultList();
        return accounts;
    }

}
