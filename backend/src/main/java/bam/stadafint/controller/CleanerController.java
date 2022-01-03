package bam.stadafint.controller;

import bam.stadafint.entities.Cleaner;
import bam.stadafint.repositories.CleanerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Controller
@RequestMapping("/cleaners") // Cleaner eller cleaners?
public class CleanerController {
    @Autowired
    private final CleanerRespository cleanerRespository;

    public CleanerController(CleanerRespository cleanerRespository) {
        this.cleanerRespository = cleanerRespository;
    }

    @GetMapping
    public List<Cleaner> getCleaners() {
        return cleanerRespository.findAll();
    }

    @GetMapping("/{cleaner_id}")
    public Cleaner getCleaner(@PathVariable Long cleaner_id) {
        return cleanerRespository.findById(cleaner_id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createCleaner(@RequestBody Cleaner cleaner) throws URISyntaxException {
        Cleaner savedCleaner = cleanerRespository.save(cleaner);
        return ResponseEntity.created(new URI("/cleaners" + savedCleaner.getCleaner_id())).body(savedCleaner);
    }

    @PutMapping("/{cleaner_id}")
    public ResponseEntity updateCleaner(@PathVariable Long cleaner_id, @RequestBody Cleaner cleaner) {
        Cleaner currentCleaner = cleanerRespository.findById(cleaner_id).orElseThrow(RuntimeException::new);
        currentCleaner.setFullName(cleaner.getFullName());
        currentCleaner.setAddress(cleaner.getAddress());

        return ResponseEntity.ok(currentCleaner);
    }

    @DeleteMapping("/{cleaner_id}")
    public ResponseEntity deleteCleaner(@PathVariable Long cleaner_id) {
        cleanerRespository.deleteById(cleaner_id);
        return ResponseEntity.ok().build();
    }
}
