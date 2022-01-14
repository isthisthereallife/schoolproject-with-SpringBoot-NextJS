package bam.stadafint.controller;

import bam.stadafint.entities.Booking;
import bam.stadafint.entities.Customer;
import bam.stadafint.service.BookingService;
import bam.stadafint.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    //maybe fix better
    @GetMapping("/get/{customer_id}")
    private List<Booking> getBookingsByCustomerId(@PathVariable("customer_id") int customer_id) {
        List bookings = bookingService.getAllBookings();
        List output = new ArrayList<Booking>();
        for (Object b : bookings){
            System.out.println(b.getClass());
            Booking c = (Booking) b;
            if (c.getCustomer_id()==customer_id){
                output.add(b);
            }
        }

        return output;
    }

    @DeleteMapping("/delete/{booking_id}")
    private void delete(@PathVariable("booking_id") int booking_id) {
        bookingService.deleteBooking(booking_id);
        System.out.println("Your booking has been removed");
    }

    @PutMapping("/update")
    private Booking update(@RequestBody Booking booking) {
        bookingService.saveOrUpdate(booking);
        System.out.println("The booking has been updated");
        return booking;
    }

}
