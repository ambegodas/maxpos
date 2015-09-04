package com.ambegodas.maxpos.resource;

import com.ambegodas.maxpos.model.Account;
import org.springframework.hateoas.ResourceSupport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pathmasri on 9/4/15.
 */
public class AccountListResource extends ResourceSupport {

    private List<Account> accountsList = new ArrayList<Account>();

    public List<Account> getAccountsList() {
        return accountsList;
    }

    public void setAccountsList(List<Account> accountsList) {
        this.accountsList = accountsList;
    }
}
