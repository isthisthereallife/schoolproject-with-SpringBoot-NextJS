package bam.stadafint.entities;

import org.hibernate.annotations.Subselect;
import org.hibernate.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Immutable
@Subselect("select uuid() as id, mb.* from get_my_bookings mb")
public class MyBookingView implements Serializable {

    @Id
    private int boknings_id;
    private String kundnamn;
    private String address;
    private String date_and_time;
    private String description;
    private String status;


    public int getBookingID() {
        return boknings_id;
    }

    public void setBookingID(int bookingID) {
        this.boknings_id = bookingID;
    }

    public String getKundnamn() {
        return kundnamn;
    }

    public void setKundnamn(String kundnamn) {
        this.kundnamn = kundnamn;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDateAndTime() {
        return date_and_time;
    }

    public void setDateAndTime(String date_and_time) {
        this.date_and_time = date_and_time;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
