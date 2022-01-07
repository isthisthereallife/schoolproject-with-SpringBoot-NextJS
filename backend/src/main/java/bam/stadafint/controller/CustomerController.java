package bam.stadafint.controller;

import bam.stadafint.entities.Customer;
import bam.stadafint.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String add(@RequestBody Customer customer) {
        customerService.saveCustomer(customer);
        return "A new customer is added";
    }

    @GetMapping("/getAll")
    public List<Customer> list() {
        return customerService.getAllCustomers();
    }



}
