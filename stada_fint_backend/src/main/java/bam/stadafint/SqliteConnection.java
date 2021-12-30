package bam.stadafint;

import java.sql.*;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SqliteConnection {

    public static void main(String[] args) throws SQLException {

        try {
            Connection connection = DriverManager.getConnection("jdbc:sqlite:C:\\Users\\Admin\\Documents\\WORKSPACE\\EC_Utbildning\\Mjukvaruportfolio\\stada_fint\\stada_fint_backend\\src\\main\\java\\bam\\stadafint\\SQLite\\SqliteConnection.java");
            String sql = "SELECT * FROM client";

            Statement statement = connection.createStatement();
            ResultSet result =  statement.executeQuery(sql);

            while(result.next()) {

                String id = result.getString("id");
                String name = result.getString("name");
                String client_type = result.getString("client_type");
                String address = result.getString("address");

                System.out.println(
                       "Id number: " + id + " | " +
                       "Full name : " + name + " | " +
                       "Client type: "  + client_type + " | " +
                       "Address: "  + address
                );
            }


        } catch (SQLException e) {
            System.out.println("Can't connect to SQLite database");
            e.printStackTrace();
        }
    }

}
