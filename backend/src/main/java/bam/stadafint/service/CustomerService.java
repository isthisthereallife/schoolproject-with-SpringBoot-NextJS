package bam.stadafint.service;

import bam.stadafint.entities.Customer;
import bam.stadafint.repositories.CustomerRepository;

import java.util.List;
import java.util.Optional;

public interface CustomerService {

        Customer saveCustomer(Customer customer);

        List<Customer> getAllCustomers();

        //Optional<Custom er> findUserByUsername(String username);
        Optional<Customer> findCustomerById(int id);

        void deleteCustomer(int customer_id);

        void saveOrUpdate(Customer customer);
}
