package com.ambegodas.maxpos.resource.asm;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import org.springframework.hateoas.Link;

import com.ambegodas.maxpos.controller.AccountController;
import com.ambegodas.maxpos.controller.AccountController;
import com.ambegodas.maxpos.model.Account;
import com.ambegodas.maxpos.resource.AccountResource;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

/**
 * Created by pathmasri on 9/3/15.
 */
public class AccountResourceAsm extends ResourceAssemblerSupport<Account,AccountResource> {


    public AccountResourceAsm() {
        super(AccountController.class, AccountResource.class);
    }


    @Override
    public AccountResource toResource(Account account) {
        AccountResource accountResource = new AccountResource();
        accountResource.setUserName(account.getUsername());
        accountResource.setPassword(account.getPassword());
        
        Link link = linkTo(methodOn(AccountController.class).getAccount(account.getUsername())).withSelfRel();
        accountResource.add(link);
        return accountResource;
    }
}
