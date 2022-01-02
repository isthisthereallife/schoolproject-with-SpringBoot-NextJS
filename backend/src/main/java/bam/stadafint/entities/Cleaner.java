package bam.stadafint.entities;

import javax.persistence.*;


@Entity
public class Cleaner {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int cleaner_id;
    private String fullName;
    private String address;

    public Cleaner() {
    }

    public int getCleaner_id() {
        return cleaner_id;
    }

    public void setCleaner_id(int cleaner_id) {
        this.cleaner_id = cleaner_id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
