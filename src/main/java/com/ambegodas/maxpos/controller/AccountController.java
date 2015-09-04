package com.ambegodas.maxpos.controller;

import com.ambegodas.maxpos.model.Account;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by pathmasri on 9/3/15.
 */

@Controller
public class AccountController {

     @RequestMapping("/accounts")
    public @ResponseBody Account  addAccount(@RequestBody Account account){
         System.out.println(account.getUserName());
         System.out.println(account.getPassword());
        return account;
    }

    public Account getAccount(@RequestBody String userName){

        Account acount

    }

}
