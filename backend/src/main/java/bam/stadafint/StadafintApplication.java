package bam.stadafint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class StadafintApplication {

    public static void main(String[] args) throws Throwable{
        SpringApplication.run(StadafintApplication.class, args);
    }

}
