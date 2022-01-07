package bam.stadafint.service;

import bam.stadafint.entities.Cleaner;

import java.util.List;

public interface CleanerService {

    public Cleaner saveCleaner(Cleaner cleaner);
    public List<Cleaner> getAllCleaners();
}
