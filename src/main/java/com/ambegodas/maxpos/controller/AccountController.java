package com.ambegodas.maxpos.controller;

import com.ambegodas.maxpos.model.Account;
import com.ambegodas.maxpos.resource.AccountListResource;
import com.ambegodas.maxpos.resource.AccountResource;
import com.ambegodas.maxpos.resource.ProductResource;
import com.ambegodas.maxpos.resource.asm.AccountListResourceAsm;
import com.ambegodas.maxpos.resource.asm.AccountResourceAsm;
import com.ambegodas.maxpos.resource.asm.ProductResourceAsm;
import com.ambegodas.maxpos.service.AccountService;
import com.ambegodas.maxpos.service.util.AccountList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by pathmasri on 9/3/15.
 */

@Controller
public class AccountController {

    @Autowired
    private AccountService accountService;

     @RequestMapping(value="/accounts", method = RequestMethod.POST)
    public ResponseEntity<AccountResource>  addAccount(@RequestBody Account account){
         System.out.println(account.getUsername());
         System.out.println(account.getPassword());
         accountService.addAccount(account);

         if(account != null){
             AccountResource res = new AccountResourceAsm().toResource(account);
             return new ResponseEntity<AccountResource>(res, HttpStatus.OK);
         } else {
             return new ResponseEntity<AccountResource>(HttpStatus.NOT_FOUND);
         }

    }

    @RequestMapping(value="/accounts", method = RequestMethod.PUT)
    public ResponseEntity<AccountResource>  updateAccount(@RequestBody Account account){
       // System.out.println("Path variable captured: "+ username);

        accountService.editAccount(account);

        if(account != null){
            AccountResource res = new AccountResourceAsm().toResource(account);
            return new ResponseEntity<AccountResource>(res, HttpStatus.OK);
        } else {
            return new ResponseEntity<AccountResource>(HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value="/accounts/{userName}", method = RequestMethod.GET)
    public  ResponseEntity<AccountResource> getAccount(@PathVariable String userName){


        Account account = accountService.getAccount(userName);

        if(account != null){
            AccountResource res = new AccountResourceAsm().toResource(account);
            return new ResponseEntity<AccountResource>(res, HttpStatus.OK);
        } else {
            return new ResponseEntity<AccountResource>(HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value="/accounts", method = RequestMethod.GET)
    public @ResponseBody  List<Account> getAccounts(){

         return accountService.getAccounts().getAccountList();

    /*  AccountList accountList = accountService.getAccounts();

        if(accountList != null){
            AccountListResource res = new AccountListResourceAsm().toResource(accountList);
            return new ResponseEntity<AccountListResource>(res, HttpStatus.OK);
        } else {
            return new ResponseEntity<AccountListResource>(HttpStatus.NOT_FOUND);
        }
        */

    }

}
