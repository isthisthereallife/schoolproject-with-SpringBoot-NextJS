package bam.stadafint.controller;

import bam.stadafint.entities.Cleaner;
import bam.stadafint.service.CleanerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cleaner")
@CrossOrigin
public class CleanerController {

    @Autowired
    private CleanerService cleanerService;

    @PostMapping("/add")
    public String add(@RequestBody Cleaner cleaner) {
        cleanerService.saveCleaner(cleaner);
        return "A new cleaner is added";
    }

    @GetMapping("/getAll")
    public List<Cleaner> list() {
        return cleanerService.getAllCleaners();
    }

}
