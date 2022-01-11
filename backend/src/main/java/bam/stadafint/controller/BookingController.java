package bam.stadafint.controller;

import bam.stadafint.entities.Booking;
import bam.stadafint.entities.Customer;
import bam.stadafint.service.BookingService;
import bam.stadafint.service.CustomerService;
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
    public String add(@RequestBody Booking booking) {
        bookingService.saveBooking(booking);
        return "A new booking is added";
    }

    @GetMapping("/getAll")
    public List<Booking> list() {
        return bookingService.getAllBookings();
    }

    @DeleteMapping("/delete/{booking_id}")
    private void delete(@PathVariable("booking_id") int booking_id) {
        bookingService.deleteBooking(booking_id);
        System.out.println("Your booking has been removed");
    }

}
