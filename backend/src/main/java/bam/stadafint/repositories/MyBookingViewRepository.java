package bam.stadafint.repositories;

import bam.stadafint.entities.MyBookingView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface MyBookingViewRepository extends CrudRepository<MyBookingView, Integer> {
}
