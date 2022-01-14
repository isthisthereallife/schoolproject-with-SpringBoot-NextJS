package bam.stadafint.service;

import bam.stadafint.entities.Booking;
import java.util.List;
import java.util.Optional;

public interface BookingService {

    void saveBooking(Booking booking);
    List<Booking> getAllBookings();
    Booking getBooking(int booking_id);
    void deleteBooking(int booking_id);
    void saveOrUpdate(Booking booking);
}
