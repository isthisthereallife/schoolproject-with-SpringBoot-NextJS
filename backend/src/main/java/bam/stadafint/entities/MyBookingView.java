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
    private int customer_id;
    private String kundnamn_fornamn;
    private String kundnamn_efternamn;
    private String address;
    private String date_and_time;
    private String description;
    private String status;


    public int getBoknings_id() {
        return boknings_id;
    }

    public void setBoknings_id(int boknings_id) {
        this.boknings_id = boknings_id;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getKundnamn_fornamn() {
        return kundnamn_fornamn;
    }

    public void setKundnamn_fornamn(String kundnamn_fornamn) {
        this.kundnamn_fornamn = kundnamn_fornamn;
    }

    public String getKundnamn_efternamn() {
        return kundnamn_efternamn;
    }

    public void setKundnamn_efternamn(String kundnamn_efternamn) {
        this.kundnamn_efternamn = kundnamn_efternamn;
    }

    public String getDate_and_time() {
        return date_and_time;
    }

    public void setDate_and_time(String date_and_time) {
        this.date_and_time = date_and_time;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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
