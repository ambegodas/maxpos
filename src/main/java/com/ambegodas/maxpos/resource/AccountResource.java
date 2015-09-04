package com.ambegodas.maxpos.resource;

import org.springframework.hateoas.ResourceSupport;

/**
 * Created by pathmasri on 9/4/15.
 */
public class AccountResource extends ResourceSupport {

    private String userName;
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
