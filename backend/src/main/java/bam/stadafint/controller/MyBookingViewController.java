package bam.stadafint.controller;

import bam.stadafint.entities.MyBookingView;
import bam.stadafint.service.MyBookingViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/mybookings")
@CrossOrigin
public class MyBookingViewController {

    @Autowired
    private MyBookingViewService myBookingViewService;

    @GetMapping("/{user_id}")
    public Iterable<MyBookingView> namn (@PathVariable("user_id") int user_id){
        System.out.println("Inne i controllern");
        return myBookingViewService.getMyBookings(user_id);
    }
}
