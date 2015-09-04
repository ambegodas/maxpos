package com.ambegodas.maxpos.resource.asm;


import com.ambegodas.maxpos.controller.AccountController;
import com.ambegodas.maxpos.resource.AccountListResource;
import com.ambegodas.maxpos.resource.AccountResource;
import com.ambegodas.maxpos.service.util.AccountList;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * Created by pathmasri on 9/4/15.
 */
public class AccountListResourceAsm extends ResourceAssemblerSupport<AccountList,AccountListResource> {


    public AccountListResourceAsm() {
        super(AccountController.class, AccountListResource.class);
    }

    @Override
    public AccountListResource toResource(AccountList accountList) {

        AccountListResource accountListResource = new AccountListResource();
        accountListResource.setAccountsList(accountList.getAccountList());

        Link link = linkTo(methodOn(AccountController.class).getAccounts()).withSelfRel();
        accountListResource.add(link);
        return accountListResource;
    }
}
