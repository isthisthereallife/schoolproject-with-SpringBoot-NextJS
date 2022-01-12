package bam.stadafint.service;

import bam.stadafint.entities.Cleaner;

import java.util.List;

public interface CleanerService {

    Cleaner saveCleaner(Cleaner cleaner);
    List<Cleaner> getAllCleaners();
    void deleteCleaner(int cleaner_id);
    void saveOrUpdate(Cleaner cleaner);
}
