package bam.stadafint.service;

import bam.stadafint.entities.Attempts;
import bam.stadafint.entities.Customer;
import bam.stadafint.repositories.AttemptsRepository;
import bam.stadafint.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class AttemptsServiceImpl implements AttemptsService{

    @Autowired
    private AttemptsRepository attemptsRepository;

    @Override
    public Optional<Attempts> findAttemptsByUsername(String username){
        return attemptsRepository.findAttemptsByUsername(username);
    }
}
