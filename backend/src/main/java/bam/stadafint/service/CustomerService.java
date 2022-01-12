package bam.stadafint.service;

import bam.stadafint.entities.Customer;

import java.util.List;

public interface CustomerService {

        Customer saveCustomer(Customer customer);

        List<Customer> getAllCustomers();

        void deleteCustomer(int customer_id);

        void saveOrUpdate(Customer customer);
}
