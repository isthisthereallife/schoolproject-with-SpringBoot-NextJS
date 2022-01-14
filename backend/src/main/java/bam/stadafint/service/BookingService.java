package bam.stadafint.service;

import bam.stadafint.entities.Booking;
import java.util.List;
import java.util.Optional;

public interface BookingService {

    Booking saveBooking(Booking booking);
    List<Booking> getAllBookings();
    void deleteBooking(int booking_id);
    void saveOrUpdate(Booking booking);
}
