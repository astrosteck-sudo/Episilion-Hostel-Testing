-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.45

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
-- Table structure for table `amenities`
--

DROP TABLE IF EXISTS `amenities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amenities` (
  `amenities_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) DEFAULT NULL,
  `amenity` varchar(100) NOT NULL,
  PRIMARY KEY (`amenities_id`),
  UNIQUE KEY `hostel_id` (`hostel_id`,`amenity`),
  CONSTRAINT `amenities_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenities`
--

LOCK TABLES `amenities` WRITE;
/*!40000 ALTER TABLE `amenities` DISABLE KEYS */;
INSERT INTO `amenities` VALUES (101,'141c9727-155b-472c-b75e-27715725f27c','Cctv'),(100,'141c9727-155b-472c-b75e-27715725f27c','Common Area'),(95,'141c9727-155b-472c-b75e-27715725f27c','Electricity'),(97,'141c9727-155b-472c-b75e-27715725f27c','Kitchen'),(99,'141c9727-155b-472c-b75e-27715725f27c','Laundry Area'),(102,'141c9727-155b-472c-b75e-27715725f27c','Study Area'),(96,'141c9727-155b-472c-b75e-27715725f27c','Water Supply'),(98,'141c9727-155b-472c-b75e-27715725f27c','Wifi'),(45,'170ab6f9-9a50-4598-8858-188f59577bf3','Electricity'),(47,'170ab6f9-9a50-4598-8858-188f59577bf3','Fan'),(48,'170ab6f9-9a50-4598-8858-188f59577bf3','Kitcehn'),(49,'170ab6f9-9a50-4598-8858-188f59577bf3','Laundry Area'),(46,'170ab6f9-9a50-4598-8858-188f59577bf3','Water Supply'),(50,'170ab6f9-9a50-4598-8858-188f59577bf3','Wifi'),(6,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','AirConditioning'),(10,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Cctv'),(9,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Common Area'),(1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Electricity'),(5,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Fan'),(11,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','FireSecurity'),(3,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Generator'),(7,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','kitchen'),(8,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Laundry Area'),(12,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Secure Gate'),(13,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Security Guard'),(14,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Study Area '),(2,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Water Supply'),(4,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Wifi'),(35,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Cctv'),(31,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Electricity'),(36,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Kitchen'),(34,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Laundry Area'),(37,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Secure Gate'),(32,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Water Supply'),(33,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Wifi'),(120,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Air Conditioning'),(125,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Cctv'),(124,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Commom Area'),(117,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Electricity'),(121,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Kitchen'),(123,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Laundry Area'),(126,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Secure Gate'),(122,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Study Area'),(118,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Water Supply'),(119,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Wifi'),(78,'7af2a906-6c09-4941-8227-6325aa6ab8c6','AirConditioning'),(83,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Cctv'),(82,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Common Area'),(75,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Electricity'),(79,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Kitchen'),(81,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Laundry Area'),(84,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Secure Gate'),(80,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Study Area'),(76,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Water Supply'),(77,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Wifi'),(43,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Common Area'),(38,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Electricity'),(41,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Kitchen'),(42,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Laundry Area'),(44,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Study Area'),(39,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Water Supply'),(40,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Wifi'),(94,'db900f38-3480-481d-b20b-66962ea03b7a','Common Area'),(89,'db900f38-3480-481d-b20b-66962ea03b7a','Electricity'),(92,'db900f38-3480-481d-b20b-66962ea03b7a','Kitchen'),(93,'db900f38-3480-481d-b20b-66962ea03b7a','Laundry Area'),(90,'db900f38-3480-481d-b20b-66962ea03b7a','Water Supply'),(91,'db900f38-3480-481d-b20b-66962ea03b7a','Wifi'),(26,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','AirConditioning'),(30,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Common Area'),(23,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Electricity'),(27,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Kitchen'),(29,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Laundry Area'),(28,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Study Area'),(24,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Water Supply'),(25,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Wifi'),(19,'ea89beba-18c9-434c-8175-e3fb34581e63','Cctv'),(15,'ea89beba-18c9-434c-8175-e3fb34581e63','Electricity'),(20,'ea89beba-18c9-434c-8175-e3fb34581e63','Fan'),(17,'ea89beba-18c9-434c-8175-e3fb34581e63','Kitchen'),(18,'ea89beba-18c9-434c-8175-e3fb34581e63','Laundry Area'),(22,'ea89beba-18c9-434c-8175-e3fb34581e63','Secure Gate'),(16,'ea89beba-18c9-434c-8175-e3fb34581e63','Water Supply'),(21,'ea89beba-18c9-434c-8175-e3fb34581e63','Wifi');
/*!40000 ALTER TABLE `amenities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) DEFAULT NULL,
  `manager_name` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `whatsapp` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `office_hours` varchar(50) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`contact_id`),
  UNIQUE KEY `hostel_id` (`hostel_id`),
  CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Mr. John Dom','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(2,'ea89beba-18c9-434c-8175-e3fb34581e63','Ms. Grace Mensah','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(3,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Mrs. Akua Boateng','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(4,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Mr. Kwame Owusu','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(5,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Ms. Efua Adjei','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(6,'170ab6f9-9a50-4598-8858-188f59577bf3','Mr. Daniel Tetteh','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(7,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Mrs. Nana Ama Kusi','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(8,'db900f38-3480-481d-b20b-66962ea03b7a','Mr. Joseph Mensah','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(9,'141c9727-155b-472c-b75e-27715725f27c','Mr. Samuel Owusu','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM',''),(10,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Ms. Abena Ofori','+233 555 987 654','+233 555 987 654','unityhostel@email.com','8 AM - 5 PM','');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `customer_email`
--

DROP TABLE IF EXISTS `customer_email`;
/*!50001 DROP VIEW IF EXISTS `customer_email`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `customer_email` AS SELECT 
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `referral_id` int DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  KEY `lat_name_first_name_idx` (`last_name`,`first_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Fred','Fish',NULL,'FFish@gmail.com'),(2,'Larry','Lobster',1,'FLobster@gmail.com'),(3,'Bubble','Bass',2,'BBass@gmail.com'),(8,'Poppy','Puff',2,'PPuff@gmail.com'),(9,'Pearl','Krabs',NULL,'PKrabs@gmail.com'),(10,'Fox','Catcher',4,'fox23@gmail.com'),(11,'May','Wheather',5,'may78@gmail.com');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `email`
--

DROP TABLE IF EXISTS `email`;
/*!50001 DROP VIEW IF EXISTS `email`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `email` AS SELECT 
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `employee_id` int DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `hourly_pay` decimal(5,2) DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `job` varchar(25) DEFAULT NULL,
  `hire_data` date DEFAULT NULL,
  `supervisor_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Eugene','Krabs',51.00,106080.00,'manager','2023-01-02',NULL),(2,'Squidward','Sea',111.00,230880.00,'cashier','2021-09-25',5),(3,'Deon','Foli',901.00,1874080.00,'cook','1290-11-25',5),(4,'Patrick','Asteck',91.88,191110.40,'cook','1999-09-22',5),(5,'Sandy','Cheeks',91.88,191110.40,'asst. manager','2011-03-13',1);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `furnishing`
--

DROP TABLE IF EXISTS `furnishing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `furnishing` (
  `furnishing_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) DEFAULT NULL,
  `furnishing` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`furnishing_id`),
  UNIQUE KEY `hostel_id` (`hostel_id`,`furnishing`),
  CONSTRAINT `furnishing_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `furnishing`
--

LOCK TABLES `furnishing` WRITE;
/*!40000 ALTER TABLE `furnishing` DISABLE KEYS */;
INSERT INTO `furnishing` VALUES (33,'141c9727-155b-472c-b75e-27715725f27c','Bed'),(34,'141c9727-155b-472c-b75e-27715725f27c','Mattress'),(36,'141c9727-155b-472c-b75e-27715725f27c','Study Desk'),(35,'141c9727-155b-472c-b75e-27715725f27c','Wardrobe'),(22,'170ab6f9-9a50-4598-8858-188f59577bf3','Bed'),(23,'170ab6f9-9a50-4598-8858-188f59577bf3','Mattress'),(24,'170ab6f9-9a50-4598-8858-188f59577bf3','Wardrobe'),(1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Bed'),(5,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Chair'),(2,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Mattress'),(4,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Study Desk'),(3,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Wardrobe'),(15,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Bed'),(16,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Mattress'),(17,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Warbrobe'),(37,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Bed'),(41,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Chair'),(38,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Mattress'),(40,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Study Desk'),(39,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Wardrobe'),(25,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Bed'),(29,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Chair'),(26,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Matttress'),(28,'7af2a906-6c09-4941-8227-6325aa6ab8c6','study Desk'),(27,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Wardrobe'),(18,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Bed'),(19,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Mattress'),(21,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Study Desk'),(20,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Wardrobe'),(30,'db900f38-3480-481d-b20b-66962ea03b7a','Bed'),(31,'db900f38-3480-481d-b20b-66962ea03b7a','Mattress'),(32,'db900f38-3480-481d-b20b-66962ea03b7a','Wardrobe'),(10,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Bed'),(14,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Chair'),(11,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Mattress'),(13,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Study Desk'),(12,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Wardrobe'),(6,'ea89beba-18c9-434c-8175-e3fb34581e63','Bed'),(9,'ea89beba-18c9-434c-8175-e3fb34581e63','Chair'),(7,'ea89beba-18c9-434c-8175-e3fb34581e63','Mattress'),(8,'ea89beba-18c9-434c-8175-e3fb34581e63','Wardrobe');
/*!40000 ALTER TABLE `furnishing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hostels`
--

DROP TABLE IF EXISTS `hostels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hostels` (
  `hostel_id` varchar(50) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `university` varchar(100) DEFAULT NULL,
  `year_established` int DEFAULT NULL,
  `distance` int DEFAULT NULL,
  `hostel_perks` text,
  `main_image` text,
  `total_reviews` int DEFAULT '0',
  `average_rating` decimal(2,1) DEFAULT '0.0',
  PRIMARY KEY (`hostel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hostels`
--

LOCK TABLES `hostels` WRITE;
/*!40000 ALTER TABLE `hostels` DISABLE KEYS */;
INSERT INTO `hostels` VALUES ('141c9727-155b-472c-b75e-27715725f27c','Urban Nest','Girls','Example University',2014,3,'Wifi • Power Backup • TV Lounge','/images/hostel-images/hostel_image_9.jpg',3,4.0),('170ab6f9-9a50-4598-8858-188f59577bf3','Victory Hostel','Boys','Example University',2013,6,'Wifi • Laundry • Shuttle • Service','/images/hostel-images/hostel_image_6.jpg',2,4.0),('47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Campus Annex','Boys','Example University',2015,2,'Wifi • Laundry • Study • Area','/images/hostel-images/hostel_image_1.jpg',1,5.0),('4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Greenfield Hostel','Mixed','Example University',2010,4,'Laundry • RecreationalArea • Parking','/images/hostel-images/hostel_image_4.jpg',0,0.0),('5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Scholars Haven','Girls','Example University',2020,2,'Wifi • Quiet • Study Area • Laundry','/images/hostel-images/hostel_image_10.jpg',1,5.0),('7af2a906-6c09-4941-8227-6325aa6ab8c6','Harmony Hostel','Girls','Example University',2019,1,'Wifi • Gym • Cafeteria','/images/hostel-images/hostel_image_7.jpg',0,0.0),('d3582f55-470e-49d9-bd94-39dab2ba0cab','Sunrise Hostel','Mixed','Example University',2016,3,'Wifi • StudyRoom • Backup Power','/images/hostel-images/hostel_image_5.jpg',0,0.0),('db900f38-3480-481d-b20b-66962ea03b7a','City View Hostel','Mixed','Example University',2011,5,'Laundry • Security • Balcony','/images/hostel-images/hostel_image_8.jpg',1,4.0),('ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Queens Residence','Girls','Example University',2018,4,'Wifi • Laundry • Gym','/images/hostel-images/hostel_image_3.jpg',1,4.0),('ea89beba-18c9-434c-8175-e3fb34581e63','Unity Lodge','Boys','Example University',2012,2,'Wifi • Cafeteria • Security','/images/hostel-images/hostel_image_2.jpg',3,3.7);
/*!40000 ALTER TABLE `hostels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) DEFAULT NULL,
  `distance_to_campus_in_meters` decimal(10,2) DEFAULT NULL,
  `distance_to_campus_in_minutes` int DEFAULT NULL,
  `directions` text,
  `latitude` decimal(10,6) DEFAULT NULL,
  `longitude` decimal(10,6) DEFAULT NULL,
  PRIMARY KEY (`location_id`),
  KEY `hostel_id` (`hostel_id`),
  CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73',5.00,3,'Located in the city of Accra North Campus A major landmark is Behind Main Gate. For directions, Walk Past the main gate, turn left at the bookshop',5.650800,-0.186900),(2,'ea89beba-18c9-434c-8175-e3fb34581e63',1.80,8,'Near the East Campus library, turn right at the junction',6.673200,-1.565400),(3,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a',3.50,12,'Opposite the South Campus cafeteria',5.115800,-1.290800),(4,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5',4.00,15,'Next to the sports complex',5.659900,-0.166600),(5,'d3582f55-470e-49d9-bd94-39dab2ba0cab',2.50,6,'Behind the science block, near the bookshop',5.759700,-0.219700),(6,'170ab6f9-9a50-4598-8858-188f59577bf3',6.00,20,'Located near the stadium, opposite the sports shop',5.768200,-0.082900),(8,'7af2a906-6c09-4941-8227-6325aa6ab8c6',1.20,4,'Opposite the North Campus gate',5.799300,-0.126100),(9,'db900f38-3480-481d-b20b-66962ea03b7a',5.00,18,'Located near the city center, opposite the bus station',9.373800,-0.884300),(10,'141c9727-155b-472c-b75e-27715725f27c',3.00,7,'Behind the engineering block, near the main road',5.350000,-0.633000),(11,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd',2.20,3,'Located beside the North Campus park',5.650000,-0.183300);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `media_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`media_id`),
  KEY `hostel_id` (`hostel_id`),
  CONSTRAINT `media_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','/images/hostel_rooms/hostel_room_1.jpeg','compound'),(2,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','/images/hostel_rooms/hostel_room_2.webp','room'),(3,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','/images/hostel_rooms/hostel_room_3.jpg','kitchen'),(4,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','/images/hostel_rooms/hostel_room_4.webp','bathroom'),(5,'ea89beba-18c9-434c-8175-e3fb34581e63','/images/hostel_rooms/hostel_room_5.jpg','compund'),(6,'ea89beba-18c9-434c-8175-e3fb34581e63','/images/hostel_rooms/hostel_room_5.jpg','room'),(7,'ea89beba-18c9-434c-8175-e3fb34581e63','/images/hostel_kitchen_Images/hostel_kitchen_2.jpg','kitchen'),(8,'ea89beba-18c9-434c-8175-e3fb34581e63','/images/hostel_bathrooms_images/hostel_bathroom_2.jpg','bathroom'),(9,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','/images/hostel_rooms/hostel_room_6.jpg','compund'),(10,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','/images/hostel_rooms/hostel_room_6.jpg','room'),(11,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','/images/hostel_kitchen_Images/hostel_kitchen_3.jpg','kitchen'),(12,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','/images/hostel_bathrooms_images/hostel_bathroom_3.jpg','bathroom'),(13,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','/images/hostel_rooms/hostel_room_7.jpg','compund'),(14,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','/images/hostel_rooms/hostel_room_7.jpg','room'),(15,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','/images/hostel_kitchen_Images/hostel_kitchen_4.jpg','kitchen'),(16,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','/images/hostel_bathrooms_images/hostel_bathroom_4.jpg','bathroom'),(17,'d3582f55-470e-49d9-bd94-39dab2ba0cab','/images/hostel_rooms/hostel_room_8.jpg','compund'),(18,'d3582f55-470e-49d9-bd94-39dab2ba0cab','/images/hostel_rooms/hostel_room_8.jpg','room'),(19,'d3582f55-470e-49d9-bd94-39dab2ba0cab','/images/hostel_kitchen_Images/hostel_kitchen_5.jpg','kitchen'),(20,'d3582f55-470e-49d9-bd94-39dab2ba0cab','/images/hostel_bathrooms_images/hostel_bathroom_5.jpg','bathroom'),(21,'170ab6f9-9a50-4598-8858-188f59577bf3','/images/hostel_rooms/hostel_room_9.jpg','compund'),(22,'170ab6f9-9a50-4598-8858-188f59577bf3','/images/hostel_rooms/hostel_room_9.jpg','room'),(23,'170ab6f9-9a50-4598-8858-188f59577bf3','/images/hostel_kitchen_Images/hostel_kitchen_6.jpg','kitchen'),(24,'170ab6f9-9a50-4598-8858-188f59577bf3','/images/hostel_bathrooms_images/hostel_bathroom_6.jpg','bathroom'),(25,'7af2a906-6c09-4941-8227-6325aa6ab8c6','/images/hostel_rooms/hostel_room_10.jpg','compund'),(26,'7af2a906-6c09-4941-8227-6325aa6ab8c6','/images/hostel_rooms/hostel_room_10.jpg','room'),(27,'7af2a906-6c09-4941-8227-6325aa6ab8c6','/images/hostel_kitchen_Images/hostel_kitchen_7.jpg','kitchen'),(28,'7af2a906-6c09-4941-8227-6325aa6ab8c6','/images/hostel_bathrooms_images/hostel_bathroom_7.jpg','bathroom'),(33,'db900f38-3480-481d-b20b-66962ea03b7a','/images/hostel_rooms/hostel_room_11.jpg','compund'),(34,'db900f38-3480-481d-b20b-66962ea03b7a','/images/hostel_rooms/hostel_room_11.jpg','room'),(35,'db900f38-3480-481d-b20b-66962ea03b7a','/images/hostel_kitchen_Images/hostel_kitchen_8.jpg','kitchen'),(36,'db900f38-3480-481d-b20b-66962ea03b7a','/images/hostel_bathrooms_images/hostel_bathroom_8.jpg','bathroom'),(37,'141c9727-155b-472c-b75e-27715725f27c','/images/hostel_rooms/hostel_room_12.jpg','compund'),(38,'141c9727-155b-472c-b75e-27715725f27c','/images/hostel_rooms/hostel_room_12.jpg','room'),(39,'141c9727-155b-472c-b75e-27715725f27c','/images/hostel_kitchen_Images/hostel_kitchen_9.jpg','kitchen'),(40,'141c9727-155b-472c-b75e-27715725f27c','/images/hostel_bathrooms_images/hostel_bathroom_9.jpg','bathroom'),(41,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','/images/hostel_rooms/hostel_room_13.jpg','compund'),(42,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','/images/hostel_rooms/hostel_room_13.jpg','room'),(43,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','/images/hostel_kitchen_Images/hostel_kitchen_10.jpg','kitchen'),(44,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','/images/hostel_bathrooms_images/hostel_bathroom_10.jpg','bathroom');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricing`
--

DROP TABLE IF EXISTS `pricing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pricing` (
  `pricing_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) NOT NULL,
  `price_min` int DEFAULT NULL,
  `price_max` int DEFAULT NULL,
  `billing_period` varchar(50) DEFAULT NULL,
  `installment_allowed` tinyint(1) DEFAULT NULL,
  `utilities_fee` int DEFAULT NULL,
  `maintenance_fee` int DEFAULT NULL,
  `caution_deposit` int DEFAULT NULL,
  `refund_policy` text,
  PRIMARY KEY (`pricing_id`),
  UNIQUE KEY `hostel_id` (`hostel_id`),
  CONSTRAINT `pricing_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricing`
--

LOCK TABLES `pricing` WRITE;
/*!40000 ALTER TABLE `pricing` DISABLE KEYS */;
INSERT INTO `pricing` VALUES (1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73',1200,1800,'Academic Year',1,2000,1000,3000,'No refund after first semester'),(2,'ea89beba-18c9-434c-8175-e3fb34581e63',1000,1600,'Semester',1,1500,800,2500,'Partial refund within first month'),(3,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a',1300,2000,'Academic Year',1,1800,900,2000,'No refund after registration'),(4,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5',900,1400,'Semester',1,1200,600,1500,'Refund within first two weeks'),(5,'d3582f55-470e-49d9-bd94-39dab2ba0cab',1100,1700,'Semester',0,1600,700,2000,'No refund after first semester'),(6,'170ab6f9-9a50-4598-8858-188f59577bf3',800,1300,'Semester',0,1000,500,1200,'No refund after check-in'),(7,'7af2a906-6c09-4941-8227-6325aa6ab8c6',1400,2000,'Semester',0,1800,900,2500,'No refund after first semester'),(8,'db900f38-3480-481d-b20b-66962ea03b7a',1000,1500,'Semester',1,1300,700,1800,'Refund within first month'),(9,'141c9727-155b-472c-b75e-27715725f27c',1200,1700,'Academic Year',1,1500,800,2000,'No refund after first semester'),(10,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd',1500,2200,'Academic Year',0,2000,1000,3000,'No refund after registration');
/*!40000 ALTER TABLE `pricing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int DEFAULT NULL,
  `product_name` varchar(25) DEFAULT NULL,
  `price` decimal(4,2) NOT NULL DEFAULT '0.00',
  UNIQUE KEY `product_name` (`product_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (100,'hamburger',3.99),(101,'fries',1.89),(102,'soda',1.00),(103,'Ice Cream',1.49),(105,'Straw',0.00),(106,'napkin',0.00),(107,'fork',0.00),(108,'spoon',0.00);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) DEFAULT NULL,
  `rating` int NOT NULL,
  `review_text` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `hostel_id` (`hostel_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reviews_chk_1` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73',5,'I have to admit, very nice hostel.','2026-04-18 00:12:41',1),(2,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a',4,'Hello guys, john kumah here, Very nice hostel.','2026-04-18 00:21:01',1),(3,'ea89beba-18c9-434c-8175-e3fb34581e63',4,'Hello guys, john kumah here, just pass through.','2026-04-18 00:22:42',2),(4,'ea89beba-18c9-434c-8175-e3fb34581e63',4,'Am just a fresher , but this platform will really help me. Thanks guys.','2026-04-18 01:14:27',3),(5,'ea89beba-18c9-434c-8175-e3fb34581e63',3,'Cool hostels here. Very helpful.','2026-04-18 01:18:12',4),(6,'170ab6f9-9a50-4598-8858-188f59577bf3',4,'Am so gratefull for life','2026-04-18 20:23:02',4),(7,'170ab6f9-9a50-4598-8858-188f59577bf3',4,'Am so greatfull i found this hostel','2026-04-18 20:33:16',4);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) NOT NULL,
  `room_type` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `available_rooms` int DEFAULT NULL,
  PRIMARY KEY (`room_id`),
  KEY `hostel_id` (`hostel_id`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','1-in-1',1800,5),(2,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','2-in-1',1500,10),(3,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','3-in-1',1200,20),(4,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','4-in-1',1000,40),(5,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','5-in-1',900,50),(6,'ea89beba-18c9-434c-8175-e3fb34581e63','2-in-1',1400,20),(7,'ea89beba-18c9-434c-8175-e3fb34581e63','3-in-1',1200,12),(8,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','1-in-1',2000,3),(9,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','2-in-1',1600,6),(10,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','3-in-1',1400,15),(11,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','4-in-1',900,25),(12,'d3582f55-470e-49d9-bd94-39dab2ba0cab','2-in-1',1500,12),(13,'d3582f55-470e-49d9-bd94-39dab2ba0cab','3-in-1',1200,18),(14,'170ab6f9-9a50-4598-8858-188f59577bf3','3-in-1',1100,20),(15,'170ab6f9-9a50-4598-8858-188f59577bf3','4-in-1',900,30),(16,'7af2a906-6c09-4941-8227-6325aa6ab8c6','1-in-1',2000,4),(17,'7af2a906-6c09-4941-8227-6325aa6ab8c6','2-in-1',1600,6),(18,'db900f38-3480-481d-b20b-66962ea03b7a','3-in-1',1200,20),(19,'db900f38-3480-481d-b20b-66962ea03b7a','4-in-1',1000,25),(20,'141c9727-155b-472c-b75e-27715725f27c','2-in-1',1500,10),(21,'141c9727-155b-472c-b75e-27715725f27c','3-in-1',1200,15),(22,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','1-in-1',2200,6),(23,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','2-in-1',1800,12);
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rules`
--

DROP TABLE IF EXISTS `rules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rules` (
  `rules_id` int NOT NULL AUTO_INCREMENT,
  `hostel_id` varchar(50) DEFAULT NULL,
  `rule` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rules_id`),
  UNIQUE KEY `hostel_id` (`hostel_id`,`rule`),
  CONSTRAINT `rules_ibfk_1` FOREIGN KEY (`hostel_id`) REFERENCES `hostels` (`hostel_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rules`
--

LOCK TABLES `rules` WRITE;
/*!40000 ALTER TABLE `rules` DISABLE KEYS */;
INSERT INTO `rules` VALUES (42,'141c9727-155b-472c-b75e-27715725f27c','Cooking Allowed'),(40,'141c9727-155b-472c-b75e-27715725f27c','Curfew Time (10:00 PM)'),(43,'141c9727-155b-472c-b75e-27715725f27c','No Smoking'),(41,'141c9727-155b-472c-b75e-27715725f27c','Visitors Allowed'),(29,'170ab6f9-9a50-4598-8858-188f59577bf3','Cooking Allowed'),(27,'170ab6f9-9a50-4598-8858-188f59577bf3','Curfew Time (10:00 PM)'),(30,'170ab6f9-9a50-4598-8858-188f59577bf3','No Smoking'),(28,'170ab6f9-9a50-4598-8858-188f59577bf3','Visitors Not Allowed'),(3,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Cooking Only In The Kitchen'),(1,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Curfew Time (10:00 PM)'),(6,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','No Fighting'),(4,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','No Noise After 9PM'),(7,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','No Smoking'),(5,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Pets Are Allowed'),(2,'47b10dd3-6ef6-44a3-a00b-5051c14d8c73','Visitors Are Not Allowed'),(20,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Cooking Allowed'),(18,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Curfew Time (10:30 PM)'),(22,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','No Pets'),(21,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','No Smoking'),(19,'4ff107e9-6493-4d32-ad4f-a50dc864d0a5','Visitors Allowed'),(46,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Cooking Allowed'),(44,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Curfew Time (10:00 PM)'),(47,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','No Pets'),(48,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','No Smoking'),(45,'5bf2d87a-dd16-42d9-b7a7-4aecdde9cedd','Visitors Allowed'),(33,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Cooking Allowed'),(31,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Curfew Time (9:30 PM)'),(35,'7af2a906-6c09-4941-8227-6325aa6ab8c6','No Pets'),(34,'7af2a906-6c09-4941-8227-6325aa6ab8c6','No Smoking'),(32,'7af2a906-6c09-4941-8227-6325aa6ab8c6','Visitors Allowed'),(25,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Cooking Allowed'),(23,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Curfew Time (10:00 PM)'),(26,'d3582f55-470e-49d9-bd94-39dab2ba0cab','No Smoking'),(24,'d3582f55-470e-49d9-bd94-39dab2ba0cab','Visitors Allowed'),(38,'db900f38-3480-481d-b20b-66962ea03b7a','Cooking Allowed'),(36,'db900f38-3480-481d-b20b-66962ea03b7a','Curfew Time (11:00 PM)'),(39,'db900f38-3480-481d-b20b-66962ea03b7a','No Smoking'),(37,'db900f38-3480-481d-b20b-66962ea03b7a','Visitors Allowed'),(15,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Cooking Allowed'),(13,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','Curfew Time (9:00 PM)'),(17,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','No Pets'),(16,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','No Smoking'),(14,'ea7ae95e-7dd1-4bb7-acff-4ada2022ed2a','No Visitors Allowed'),(10,'ea89beba-18c9-434c-8175-e3fb34581e63','Cooking Allowed'),(8,'ea89beba-18c9-434c-8175-e3fb34581e63','Curfew Time (11:00 PM)'),(11,'ea89beba-18c9-434c-8175-e3fb34581e63','No Pets'),(12,'ea89beba-18c9-434c-8175-e3fb34581e63','No Smoking'),(9,'ea89beba-18c9-434c-8175-e3fb34581e63','Visitors Allowed');
/*!40000 ALTER TABLE `rules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transaction_id` int NOT NULL AUTO_INCREMENT,
  `amount` decimal(5,2) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `fk_customer_id` (`customer_id`),
  CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1008 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1000,4.99,3,'2023-01-01'),(1001,2.89,2,'2023-01-01'),(1002,3.38,3,'2023-01-02'),(1003,4.99,1,'2023-01-02'),(1004,1.00,NULL,'2023-01-03'),(1006,6.00,8,'2023-01-03'),(1007,6.00,NULL,'2023-01-03');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Felix Brown Nice','felix60@gmailcom','$2b$10$S4QwiEtgb/FGaFBz8oAAgOCIaBq/e65io0LsdUdsAP7V3xvwlZ9xi','2026-04-19 03:52:13');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `customer_email`
--

/*!50001 DROP VIEW IF EXISTS `customer_email`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `customer_email` AS select `customers`.`email` AS `email` from `customers` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `email`
--

/*!50001 DROP VIEW IF EXISTS `email`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `email` AS select `customers`.`email` AS `email` from `customers` */;
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

-- Dump completed on 2026-04-19  6:14:28
