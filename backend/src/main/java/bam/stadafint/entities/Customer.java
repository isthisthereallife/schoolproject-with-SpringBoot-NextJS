package bam.stadafint.entities;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;


@Entity
public class Customer implements UserDetails {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customer_id;
    private String first_name;
    private String last_name;
    private String address;
    private String e_mail;
    private String password;
    @Column(name = "account_access_lvl")
    private String accountAccessLvl;
    @Column(name = "account_non_locked")
    private boolean accountNonLocked;
    private String username;

    public Customer() {
    }

    public Customer(String username, String password, boolean accountNonLocked  ){
        this.username=username;
        this.password = password;
        this.accountNonLocked = accountNonLocked;

    }
    @Override
    public Collection< GrantedAuthority> getAuthorities() {
        return List.of(() -> "read");
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getAccountAccessLvl() {
        return accountAccessLvl;
    }

    public void setAccountAccessLvl(String accountAccessLvl) {
        this.accountAccessLvl = accountAccessLvl;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    @Override
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }
    @Override public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override public boolean isEnabled() {
        return true;
    }

    public void setAccountNonLocked(Boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }
    public boolean getAccountNonLocked() {
        return accountNonLocked;
    }
    public int getId() {
        return customer_id;
    }

    public void setId(int id) {
        this.customer_id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getE_mail() {
        return e_mail;
    }

    public void setE_mail(String e_mail) {
        this.e_mail = e_mail;
    }
}
