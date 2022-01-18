package bam.stadafint.service;

import bam.stadafint.entities.User;
import bam.stadafint.repositories.UserRepository;

import java.util.Optional;

public interface UserService extends UserRepository {
    Optional<User> findUserByUsername(String username);
}
