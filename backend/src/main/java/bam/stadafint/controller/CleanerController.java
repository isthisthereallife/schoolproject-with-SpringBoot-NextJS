package bam.stadafint.controller;

import bam.stadafint.entities.Cleaner;
import bam.stadafint.repositories.CleanerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/cleaner")
public class CleanerController {
    @Autowired
    private CleanerRespository cleanerRespository;

    @GetMapping("/all")
    public String viewAllProducts(Model model) {
        List<Cleaner> cleaners = cleanerRespository.findAll();
        model.addAttribute("cleaners", cleaners);
        System.out.println("CleanerController All -> Cleaners");
        return "cleaner";
    }
}
