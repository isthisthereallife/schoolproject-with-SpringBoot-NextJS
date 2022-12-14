package bam.stadafint.service;

import bam.stadafint.entities.MyBookingView;
import bam.stadafint.repositories.MyBookingViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;


@Service
@Transactional
public class MyBookingViewServiceImpl implements MyBookingViewService{
    @Autowired
    private MyBookingViewRepository myBookingViewRepository;

    @Override
    public Iterable<MyBookingView> getMyBookings(int userId){
        System.out.println("inne i implementationen");
        return myBookingViewRepository.findAllById(Collections.singleton(userId));
    }

}
