-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: stada_fint
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attempts`
--

DROP TABLE IF EXISTS `attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attempts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `attempts` varchar(45) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attempts`
--

LOCK TABLES `attempts` WRITE;
/*!40000 ALTER TABLE `attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `type_of_service` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `customer_id` int NOT NULL,
  `cleaner_id` int NOT NULL,
  `status` varchar(50) NOT NULL,
  `datetime` varchar(255) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `fk_customer` (`customer_id`),
  KEY `fk_cleaner` (`cleaner_id`),
  CONSTRAINT `fk_cleaner` FOREIGN KEY (`cleaner_id`) REFERENCES `cleaner` (`cleaner_id`),
  CONSTRAINT `fk_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (68,'Fönstertvätt','here 123',1,1,'Bekräftad','2022-04-15T12:30:00.000Z',NULL),(69,'Fönstertvätt','here 123',1,1,'Obekräftad','2022-01-29T13:30:00.000Z',NULL),(70,'Diamantstäd','hemma 223',2,1,'Obekräftad','2024-03-21T16:14:00.000Z',NULL),(71,'Topp Städning','here 123',1,1,'Obekräftad','2022-01-30T14:02:15.000Z',NULL),(72,'Basic Städning','here 123',1,1,'Obekräftad','2022-01-21T14:02:32.300Z',NULL),(73,'Diamantstäd','hemma 223',2,1,'Obekräftad','2024-03-21T16:14:00.000Z',NULL),(81,'Fönstertvätt','Gågatan 5',1,1,'Obekräftad','2022-01-21T23:30:00.100Z',NULL),(82,'Topp Städning','Gågatan 5',1,1,'Obekräftad','2022-01-30T23:45:00.000Z',NULL);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cleaner`
--

DROP TABLE IF EXISTS `cleaner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cleaner` (
  `cleaner_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `address` varchar(255) NOT NULL,
  `e_mail` varchar(45) NOT NULL,
  PRIMARY KEY (`cleaner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cleaner`
--

LOCK TABLES `cleaner` WRITE;
/*!40000 ALTER TABLE `cleaner` DISABLE KEYS */;
INSERT INTO `cleaner` VALUES (1,'Carl','Bernadotth','Slottsgatan 5','kung@kung.se'),(2,'Philip','Bernadotth','Slottsgatan 9','prins@prins.se'),(3,'Madeleine','Stefensson','Slottsgatan 10','sessa@sessa.com');
/*!40000 ALTER TABLE `cleaner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `e_mail` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `account_non_locked` tinyint(1) NOT NULL DEFAULT '1',
  `account_access_lvl` varchar(45) NOT NULL DEFAULT 'user',
  `username` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_id_UNIQUE` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Anders','Andersson','Gågatan 5','anders@anders.com','xxx',1,'user','kundanders63','+46 73 63 74 837'),(2,'Fia','Johansson','Stockholmsvägen 3','fia@fia.com','xxx',1,'user','fia1337','031-38 29 437'),(3,'Carl-Oskar','Svensson','Stenvägen 3','calle@calle.com','xxx',1,'user','ca11e','074 4828 382'),(4,'Steffe','Stol','Baba 2','st@ff.e','xxx',1,'user','573FF3','+42 892 8 76367'),(5,'Benny','Bil','Tnnno 32','bbob@ff.e','xxx',1,'user','bennnny5555','+53 347828'),(6,'Andy','Admino','Adder 32','aahb@ff.e','admin',1,'admin','admin',NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `get_my_bookings`
--

DROP TABLE IF EXISTS `get_my_bookings`;
/*!50001 DROP VIEW IF EXISTS `get_my_bookings`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_my_bookings` AS SELECT 
 1 AS `boknings_id`,
 1 AS `customer_id`,
 1 AS `kundnamn_fornamn`,
 1 AS `kundnamn_efternamn`,
 1 AS `address`,
 1 AS `date_and_time`,
 1 AS `description`,
 1 AS `status`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `account_non_locked` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('lalalaal','12345',1),('låsis','12345',0),('steffe','12345',1),('testy','12345',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `get_my_bookings`
--

/*!50001 DROP VIEW IF EXISTS `get_my_bookings`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_my_bookings` AS select `b`.`booking_id` AS `boknings_id`,`cus`.`customer_id` AS `customer_id`,`cus`.`first_name` AS `kundnamn_fornamn`,`cus`.`last_name` AS `kundnamn_efternamn`,`cus`.`address` AS `address`,`b`.`datetime` AS `date_and_time`,`b`.`description` AS `description`,`b`.`status` AS `status` from (`booking` `b` join `customer` `cus` on((`cus`.`customer_id` = `b`.`customer_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-21  0:14:37
