package bam.stadafint.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import bam.stadafint.entities.Attempts;

import java.util.Optional;

@Repository
public interface AttemptsRepository extends JpaRepository<Attempts,Integer>{
    Optional<Attempts> findAttemptsByUsername(String username);
}
