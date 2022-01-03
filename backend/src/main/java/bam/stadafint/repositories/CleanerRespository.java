package bam.stadafint.repositories;

import bam.stadafint.entities.Cleaner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CleanerRespository extends JpaRepository <Cleaner, Long> {
}
