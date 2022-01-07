package bam.stadafint.service;

import bam.stadafint.entities.Cleaner;
import bam.stadafint.repositories.CleanerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CleanerServiceImpl implements CleanerService {

    @Autowired
    private CleanerRepository cleanerRepository;

    @Override
    public Cleaner saveCleaner(Cleaner cleaner) {
        return cleanerRepository.save(cleaner);
    }

    @Override
    public List<Cleaner> getAllCleaners() {
        return cleanerRepository.findAll();
    }

}
