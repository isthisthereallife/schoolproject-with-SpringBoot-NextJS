package bam.stadafint.service;

import bam.stadafint.entities.Customer;
import bam.stadafint.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> findCustomerById(int id){return customerRepository.findById(id); }

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public void deleteCustomer(int customer_id) {
        customerRepository.deleteById(customer_id);
    }

    @Override
    public void saveOrUpdate(Customer customer) {
        customerRepository.save(customer);
    }
}
