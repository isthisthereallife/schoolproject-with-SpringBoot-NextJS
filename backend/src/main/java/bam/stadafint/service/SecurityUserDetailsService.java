package bam.stadafint.service;

import bam.stadafint.entities.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface SecurityUserDetailsService extends UserDetailsService {

    void createUser(UserDetails userDetails);
    User findUser(String username);

}
