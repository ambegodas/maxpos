package com.ambegodas.maxpos.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.InMemoryUserDetailsManagerConfigurer;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.UserDetailsManagerConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * Created by pathmasri on 9/7/15.
 */

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthSuccess success;

    @Autowired
    private AuthFailure failure;

    @Autowired
    private EntryPointUnauthorizedHandler unauthorizedHandler;

    @Autowired
    private UserDetailsService userDetailsService;



    @Autowired
    public void configAuthBuilder(AuthenticationManagerBuilder builder) throws Exception {

        builder.userDetailsService(userDetailsService);
           //     .inMemoryAuthentication()
           ////     .withUser("username")
            //    .password("password")
            //    .roles("USER")
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .exceptionHandling()
                   .authenticationEntryPoint(unauthorizedHandler)
                .and()
                .formLogin()
                    .failureHandler(failure)
                     .successHandler(success)
                .and()
                .authorizeRequests()
                .antMatchers("/**")
                .permitAll();



    }
}
