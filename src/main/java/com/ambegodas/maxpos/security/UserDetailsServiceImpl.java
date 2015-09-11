package com.ambegodas.maxpos.security;

import com.ambegodas.maxpos.model.Account;
import com.ambegodas.maxpos.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * Created by pathmasri on 9/10/15
 */
@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AccountService accountService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountService.getAccount(username);
        if(account== null){
           throw new UsernameNotFoundException("User Not Found with username: " + username);
        }
        return new AccountUserDetails(account);
    }
}
