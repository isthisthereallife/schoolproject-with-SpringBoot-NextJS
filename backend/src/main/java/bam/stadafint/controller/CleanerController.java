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

    @GetMapping("/get/all")
    public List<Cleaner> list() {
        return cleanerService.getAllCleaners();
    }

    @DeleteMapping("/delete/{cleaner_id}")
    private void delete(@PathVariable("cleaner_id") int cleaner_id) {
        cleanerService.deleteCleaner(cleaner_id);
        System.out.println("This cleaner has been removed");
    }

    @PutMapping("/update")
    private Cleaner update(@RequestBody Cleaner cleaner) {
        cleanerService.saveOrUpdate(cleaner);
        System.out.println("Info has been updated");
        return cleaner;
    }
}
