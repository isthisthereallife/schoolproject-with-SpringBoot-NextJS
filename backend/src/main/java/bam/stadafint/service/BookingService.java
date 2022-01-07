package bam.stadafint.service;

import bam.stadafint.entities.Booking;
import java.util.List;

public interface BookingService {

    Booking saveBooking(Booking booking);
    List<Booking> getAllBookings();
}
