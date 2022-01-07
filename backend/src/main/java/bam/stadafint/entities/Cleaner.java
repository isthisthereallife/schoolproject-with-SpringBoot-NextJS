package bam.stadafint.entities;

import javax.persistence.*;


@Entity
public class Cleaner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cleaner_id;
    private String first_name;
    private String last_name;
    private String address;
    private String e_mail;

    public Cleaner() {
    }

    public int getCleaner_id() {
        return cleaner_id;
    }

    public void setCleaner_id(int cleaner_id) {
        this.cleaner_id = cleaner_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getE_mail() {
        return e_mail;
    }

    public void setE_mail(String e_mail) {
        this.e_mail = e_mail;
    }
}
