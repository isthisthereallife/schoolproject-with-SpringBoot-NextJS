package bam.stadafint.controller;

import bam.stadafint.entities.Booking;
import bam.stadafint.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    public String add(@RequestBody Booking booking){
        bookingService.saveBooking(booking);
        return "New booking is added";
    }

    @GetMapping("/getAll")
    public List<Booking> list(){
        return bookingService.getAllBookings();
    }
}
