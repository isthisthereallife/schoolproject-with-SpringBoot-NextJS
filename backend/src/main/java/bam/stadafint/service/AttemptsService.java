package bam.stadafint.service;

import bam.stadafint.entities.Attempts;

import java.util.Optional;

public interface AttemptsService {
    Optional<Attempts> findAttemptsByUsername(String username);
}
