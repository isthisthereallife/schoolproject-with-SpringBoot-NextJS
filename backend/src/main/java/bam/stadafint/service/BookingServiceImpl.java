package bam.stadafint.service;

import bam.stadafint.entities.Booking;
import bam.stadafint.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public void deleteBooking(int booking_id){
        bookingRepository.deleteById(booking_id);
    }

    @Override
    public void saveOrUpdate(Booking booking){
        bookingRepository.save(booking);
    }
}
