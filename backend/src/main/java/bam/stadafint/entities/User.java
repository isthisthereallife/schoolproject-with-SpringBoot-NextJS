package bam.stadafint.entities;

import java.util.Collection;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "user")
public class User implements UserDetails {

   /**
   *
   */
   private static final long serialVersionUID = 1L;

   @Id
   private String username;
   private String password; @Column(name = "account_non_locked")
   private boolean accountNonLocked;

   public User() {
   }
   public User(String username, String password, boolean accountNonLocked) {
      this.username = username;
      this.password = password;
      this.accountNonLocked = accountNonLocked;
   }
   @Override
   public Collection<? extends GrantedAuthority> getAuthorities() {
      return List.of(() -> "read");
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
}