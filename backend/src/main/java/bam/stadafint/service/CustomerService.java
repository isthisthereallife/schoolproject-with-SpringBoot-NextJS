package bam.stadafint.service;

import bam.stadafint.entities.Customer;

import java.util.List;

public interface CustomerService {

        public Customer saveCustomer(Customer customer);
        public List<Customer> getAllCustomers();
}
