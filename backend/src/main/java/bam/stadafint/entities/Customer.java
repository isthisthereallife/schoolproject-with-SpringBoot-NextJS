package bam.stadafint.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "client")
public class Customer {
    @Id
        @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
        int id;
        String name;
        String clientType;
        String address;

}
