package bam.stadafint.service;

import bam.stadafint.entities.MyBookingView;
import org.springframework.stereotype.Controller;

import java.util.List;

//@Controller
public interface MyBookingViewService {
    Iterable<MyBookingView> getMyBookings(int id);
}
