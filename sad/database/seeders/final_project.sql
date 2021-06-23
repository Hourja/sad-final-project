-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 23, 2021 at 05:30 PM
-- Server version: 8.0.25-0ubuntu0.20.04.1
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` mediumint UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Augue Foundation', '2004-04-06', '1989-05-15'),
(2, 'Feugiat PC', '1989-11-29', '1983-08-15'),
(3, 'In Limited', '1986-02-10', '1998-01-01'),
(4, 'Euismod PC', '2015-08-26', '2004-10-09'),
(5, 'Lacinia Industries', '2019-09-26', '1986-11-29'),
(6, 'Scelerisque Institute', '2021-02-07', '1983-12-24'),
(7, 'Dignissim Maecenas Ornare Corporation', '1997-08-13', '1983-08-30'),
(8, 'Consectetuer Adipiscing Elit Ltd', '2009-12-16', '1996-11-19'),
(9, 'Tincidunt Vehicula Foundation', '2003-04-25', '2011-09-07'),
(10, 'Nam Ltd', '1999-08-10', '2002-07-15'),
(11, 'Sem Associates', '2009-02-04', '2013-11-25'),
(12, 'Interdum Sed Incorporated', '2011-03-09', '2009-09-18'),
(13, 'At Egestas LLP', '1987-03-16', '2020-10-02'),
(14, 'Purus Company', '2004-03-03', '1984-07-15'),
(15, 'Enim Institute', '2006-10-28', '2011-12-28'),
(16, 'Mauris PC', '2006-09-17', '1998-05-08'),
(17, 'Primis In Inc.', '1991-05-19', '1989-07-02'),
(18, 'Fermentum Corporation', '2001-06-17', '1995-11-12'),
(19, 'Erat Semper Rutrum Industries', '1995-02-01', '2014-09-20'),
(20, 'Molestie Arcu Sed Consulting', '2016-09-09', '1999-10-20'),
(21, 'Malesuada Associates', '1996-11-22', '1996-01-02'),
(22, 'Faucibus Lectus A Inc.', '1997-05-18', '1995-05-13'),
(23, 'Ac Turpis Company', '2002-05-26', '2011-01-15'),
(24, 'Erat Vel Pede PC', '2002-07-11', '2008-08-15'),
(25, 'Nullam Suscipit Foundation', '1990-06-30', '2006-01-12'),
(26, 'Dolor Tempus LLC', '2007-06-21', '2019-03-22'),
(27, 'Sodales Elit Erat Limited', '2015-09-24', '2007-10-02'),
(28, 'Lorem Donec Foundation', '1993-04-19', '1982-03-26'),
(29, 'Gravida Aliquam Tincidunt Company', '1993-07-08', '2000-12-25'),
(30, 'Et Malesuada Associates', '1988-04-11', '1986-12-22'),
(31, 'Orci Donec Foundation', '1999-09-30', '2016-02-06'),
(32, 'Feugiat Placerat Velit Corporation', '1985-03-06', '1995-12-10'),
(33, 'Sem Magna Foundation', '2021-01-01', '1998-06-07'),
(34, 'Sit Amet Foundation', '1999-10-13', '1984-11-24'),
(35, 'Mauris A Nunc Institute', '1997-11-30', '2015-05-18'),
(36, 'Phasellus Ornare Fusce Institute', '2016-05-22', '2011-03-03'),
(37, 'Eget Ipsum Suspendisse Corp.', '1994-05-12', '2004-01-16'),
(38, 'Duis Foundation', '2007-05-22', '1994-03-06'),
(39, 'Felis Orci LLP', '2007-03-03', '1984-06-07'),
(40, 'Ullamcorper Duis Foundation', '2016-11-19', '2016-07-12'),
(41, 'Mattis Integer Eu Industries', '1997-06-11', '1995-09-24'),
(42, 'Ante Corporation', '2011-06-03', '2020-07-11'),
(43, 'Rutrum LLP', '1985-03-25', '1985-09-27'),
(44, 'Fusce Feugiat Lorem Limited', '2011-04-10', '2005-06-27'),
(45, 'Nec Mauris Consulting', '1989-06-20', '1982-01-16'),
(46, 'Mus Proin Vel Corporation', '2002-11-11', '1993-05-17'),
(47, 'Duis Ac Incorporated', '1984-01-15', '1994-09-17'),
(48, 'Elit Dictum Eu Company', '2011-08-21', '1992-01-17'),
(49, 'Tempus Consulting', '2002-08-07', '2005-04-15'),
(50, 'Arcu Et Pede Industries', '2021-08-11', '2007-10-23'),
(51, 'Ultricies Limited', '2021-04-21', '2002-05-23'),
(52, 'Sem Molestie Company', '1989-07-20', '2014-07-18'),
(53, 'Auctor PC', '2020-04-13', '1990-09-14'),
(54, 'Vitae PC', '1998-08-28', '1997-04-06'),
(55, 'Sapien Cras Dolor LLC', '2003-06-25', '1998-10-09'),
(56, 'Lectus Rutrum Urna Foundation', '1996-12-06', '2021-03-15'),
(57, 'Curabitur Vel Ltd', '2007-03-28', '1999-06-09'),
(58, 'Ultricies Corporation', '2013-01-28', '2005-03-09'),
(59, 'Imperdiet Dictum Magna Limited', '1995-11-18', '1998-08-04'),
(60, 'Dolor PC', '2002-03-02', '2020-09-02'),
(61, 'Phasellus Corporation', '1990-07-08', '1997-08-30'),
(62, 'Enim Consequat Limited', '2018-08-13', '2018-01-01'),
(63, 'Dui Consulting', '1995-04-21', '2008-06-03'),
(64, 'A Tortor Nunc Associates', '1985-09-17', '2002-09-13'),
(65, 'A Ultricies PC', '1986-07-18', '1989-05-18'),
(66, 'Velit Eget Laoreet Industries', '2004-07-28', '2015-11-22'),
(67, 'Pulvinar Incorporated', '2016-05-12', '1990-03-01'),
(68, 'Enim Limited', '1998-05-07', '1984-03-11'),
(69, 'Mauris A LLC', '1983-07-16', '1990-08-28'),
(70, 'Ac LLC', '2002-03-28', '2021-09-10'),
(71, 'Dui Cum Sociis Corporation', '2005-09-21', '2021-06-03'),
(72, 'Volutpat Nulla LLC', '2020-04-22', '1992-01-07'),
(73, 'Per Conubia Nostra Incorporated', '1986-12-28', '1993-11-02'),
(74, 'Diam Eu Dolor Company', '2000-11-07', '2005-12-22'),
(75, 'A Corporation', '2006-05-17', '1991-05-26'),
(76, 'Ipsum Foundation', '2016-02-19', '1986-05-05'),
(77, 'Cras Eu Tellus PC', '1986-06-23', '2021-02-12'),
(78, 'Lobortis Tellus Company', '1993-02-16', '1986-04-02'),
(79, 'Non Associates', '1998-06-27', '1993-02-16'),
(80, 'Mauris Corp.', '1987-01-07', '1989-10-04'),
(81, 'Tincidunt Orci Quis Ltd', '2006-01-05', '2000-11-30'),
(82, 'Cras Convallis Convallis Corp.', '2016-01-14', '1997-10-30'),
(83, 'Dui Cras Foundation', '2016-09-23', '2011-01-27'),
(84, 'Euismod Urna Nullam Limited', '1997-06-19', '2013-07-15'),
(85, 'Lorem Foundation', '2011-03-07', '2001-09-13'),
(86, 'Ultrices Sit Associates', '2000-01-16', '2020-02-23'),
(87, 'Et Magnis Consulting', '2008-10-21', '2007-08-20'),
(88, 'Eget Dictum Placerat Consulting', '2019-04-11', '2003-08-13'),
(89, 'Sed PC', '2009-06-24', '1999-10-18'),
(90, 'Vulputate Industries', '2001-11-27', '2014-11-20'),
(91, 'Nascetur Ridiculus Foundation', '2010-01-11', '2007-04-08'),
(92, 'Luctus Et Ultrices Company', '2000-09-28', '1987-08-11'),
(93, 'Elit A Feugiat Corporation', '2011-05-12', '2016-09-22'),
(94, 'Et Euismod Foundation', '1984-11-29', '2008-05-05'),
(95, 'Pretium Foundation', '2018-02-14', '2013-12-22'),
(96, 'Blandit PC', '2004-12-05', '2004-03-11'),
(97, 'Nonummy PC', '2006-05-29', '1996-03-22'),
(98, 'Auctor Associates', '1994-01-26', '2000-12-31'),
(99, 'Faucibus Id Foundation', '2012-08-24', '1988-08-17'),
(100, 'Rhoncus Associates', '1989-09-27', '2011-10-12');

-- --------------------------------------------------------

--
-- Table structure for table `category_city`
--

CREATE TABLE `category_city` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `city_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_city`
--

INSERT INTO `category_city` (`id`, `category_id`, `city_id`, `created_at`, `updated_at`) VALUES
(1, 12, 62, NULL, NULL),
(2, 59, 24, NULL, NULL),
(3, 85, 21, NULL, NULL),
(4, 34, 66, NULL, NULL),
(5, 38, 29, NULL, NULL),
(6, 64, 1, NULL, NULL),
(7, 80, 27, NULL, NULL),
(8, 72, 78, NULL, NULL),
(9, 23, 36, NULL, NULL),
(10, 80, 64, NULL, NULL),
(11, 91, 79, NULL, NULL),
(12, 63, 4, NULL, NULL),
(13, 97, 4, NULL, NULL),
(14, 68, 64, NULL, NULL),
(15, 71, 15, NULL, NULL),
(16, 89, 25, NULL, NULL),
(17, 95, 1, NULL, NULL),
(18, 81, 74, NULL, NULL),
(19, 2, 18, NULL, NULL),
(20, 8, 28, NULL, NULL),
(21, 25, 50, NULL, NULL),
(22, 93, 66, NULL, NULL),
(23, 17, 61, NULL, NULL),
(24, 76, 29, NULL, NULL),
(25, 44, 90, NULL, NULL),
(26, 3, 3, NULL, NULL),
(27, 100, 27, NULL, NULL),
(28, 28, 27, NULL, NULL),
(29, 67, 52, NULL, NULL),
(30, 75, 71, NULL, NULL),
(31, 58, 44, NULL, NULL),
(32, 78, 71, NULL, NULL),
(33, 53, 11, NULL, NULL),
(34, 19, 51, NULL, NULL),
(35, 56, 16, NULL, NULL),
(36, 52, 36, NULL, NULL),
(37, 59, 72, NULL, NULL),
(38, 95, 28, NULL, NULL),
(39, 35, 65, NULL, NULL),
(40, 95, 55, NULL, NULL),
(41, 60, 100, NULL, NULL),
(42, 89, 68, NULL, NULL),
(43, 66, 63, NULL, NULL),
(44, 70, 65, NULL, NULL),
(45, 65, 72, NULL, NULL),
(46, 49, 77, NULL, NULL),
(47, 76, 69, NULL, NULL),
(48, 55, 72, NULL, NULL),
(49, 34, 68, NULL, NULL),
(50, 19, 68, NULL, NULL),
(51, 48, 51, NULL, NULL),
(52, 14, 73, NULL, NULL),
(53, 61, 52, NULL, NULL),
(54, 15, 63, NULL, NULL),
(55, 48, 85, NULL, NULL),
(56, 20, 24, NULL, NULL),
(57, 25, 29, NULL, NULL),
(58, 30, 19, NULL, NULL),
(59, 39, 77, NULL, NULL),
(60, 20, 67, NULL, NULL),
(61, 13, 84, NULL, NULL),
(62, 39, 6, NULL, NULL),
(63, 72, 10, NULL, NULL),
(64, 33, 21, NULL, NULL),
(65, 34, 26, NULL, NULL),
(66, 4, 5, NULL, NULL),
(67, 95, 12, NULL, NULL),
(68, 17, 14, NULL, NULL),
(69, 85, 2, NULL, NULL),
(70, 80, 93, NULL, NULL),
(71, 39, 25, NULL, NULL),
(72, 82, 97, NULL, NULL),
(73, 44, 77, NULL, NULL),
(74, 69, 20, NULL, NULL),
(75, 52, 78, NULL, NULL),
(76, 38, 92, NULL, NULL),
(77, 45, 47, NULL, NULL),
(78, 50, 6, NULL, NULL),
(79, 29, 27, NULL, NULL),
(80, 76, 51, NULL, NULL),
(81, 61, 46, NULL, NULL),
(82, 47, 40, NULL, NULL),
(83, 8, 36, NULL, NULL),
(84, 63, 15, NULL, NULL),
(85, 48, 1, NULL, NULL),
(86, 1, 6, NULL, NULL),
(87, 53, 38, NULL, NULL),
(88, 47, 86, NULL, NULL),
(89, 57, 9, NULL, NULL),
(90, 60, 33, NULL, NULL),
(91, 61, 57, NULL, NULL),
(92, 71, 76, NULL, NULL),
(93, 48, 36, NULL, NULL),
(94, 74, 42, NULL, NULL),
(95, 99, 66, NULL, NULL),
(96, 25, 92, NULL, NULL),
(97, 13, 72, NULL, NULL),
(98, 100, 50, NULL, NULL),
(99, 90, 26, NULL, NULL),
(100, 69, 68, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_topic`
--

CREATE TABLE `category_topic` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `topic_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_topic`
--

INSERT INTO `category_topic` (`id`, `category_id`, `topic_id`, `created_at`, `updated_at`) VALUES
(1, 51, 90, NULL, NULL),
(2, 19, 25, NULL, NULL),
(3, 68, 59, NULL, NULL),
(4, 87, 65, NULL, NULL),
(5, 99, 32, NULL, NULL),
(6, 77, 58, NULL, NULL),
(7, 26, 89, NULL, NULL),
(8, 79, 64, NULL, NULL),
(9, 77, 28, NULL, NULL),
(10, 49, 49, NULL, NULL),
(11, 74, 69, NULL, NULL),
(12, 73, 48, NULL, NULL),
(13, 66, 65, NULL, NULL),
(14, 6, 89, NULL, NULL),
(15, 81, 32, NULL, NULL),
(16, 21, 32, NULL, NULL),
(17, 36, 89, NULL, NULL),
(18, 85, 50, NULL, NULL),
(19, 78, 68, NULL, NULL),
(20, 9, 96, NULL, NULL),
(21, 72, 46, NULL, NULL),
(22, 67, 28, NULL, NULL),
(23, 9, 74, NULL, NULL),
(24, 97, 100, NULL, NULL),
(25, 40, 40, NULL, NULL),
(26, 81, 68, NULL, NULL),
(27, 31, 55, NULL, NULL),
(28, 7, 33, NULL, NULL),
(29, 53, 6, NULL, NULL),
(30, 87, 12, NULL, NULL),
(31, 81, 53, NULL, NULL),
(32, 6, 75, NULL, NULL),
(33, 49, 47, NULL, NULL),
(34, 42, 4, NULL, NULL),
(35, 16, 25, NULL, NULL),
(36, 86, 52, NULL, NULL),
(37, 61, 57, NULL, NULL),
(38, 34, 90, NULL, NULL),
(39, 83, 81, NULL, NULL),
(40, 46, 81, NULL, NULL),
(41, 50, 64, NULL, NULL),
(42, 60, 42, NULL, NULL),
(43, 36, 81, NULL, NULL),
(44, 71, 16, NULL, NULL),
(45, 35, 76, NULL, NULL),
(46, 70, 81, NULL, NULL),
(47, 60, 73, NULL, NULL),
(48, 50, 96, NULL, NULL),
(49, 55, 99, NULL, NULL),
(50, 82, 14, NULL, NULL),
(51, 95, 55, NULL, NULL),
(52, 30, 91, NULL, NULL),
(53, 40, 38, NULL, NULL),
(54, 55, 66, NULL, NULL),
(55, 100, 22, NULL, NULL),
(56, 33, 77, NULL, NULL),
(57, 38, 58, NULL, NULL),
(58, 62, 8, NULL, NULL),
(59, 32, 9, NULL, NULL),
(60, 20, 74, NULL, NULL),
(61, 82, 66, NULL, NULL),
(62, 61, 25, NULL, NULL),
(63, 25, 4, NULL, NULL),
(64, 47, 91, NULL, NULL),
(65, 48, 42, NULL, NULL),
(66, 72, 81, NULL, NULL),
(67, 22, 100, NULL, NULL),
(68, 84, 59, NULL, NULL),
(69, 16, 85, NULL, NULL),
(70, 15, 34, NULL, NULL),
(71, 40, 46, NULL, NULL),
(72, 45, 26, NULL, NULL),
(73, 59, 78, NULL, NULL),
(74, 41, 33, NULL, NULL),
(75, 9, 89, NULL, NULL),
(76, 66, 42, NULL, NULL),
(77, 53, 37, NULL, NULL),
(78, 59, 1, NULL, NULL),
(79, 89, 66, NULL, NULL),
(80, 37, 94, NULL, NULL),
(81, 97, 30, NULL, NULL),
(82, 34, 16, NULL, NULL),
(83, 72, 49, NULL, NULL),
(84, 88, 52, NULL, NULL),
(85, 93, 85, NULL, NULL),
(86, 24, 4, NULL, NULL),
(87, 97, 64, NULL, NULL),
(88, 41, 7, NULL, NULL),
(89, 76, 72, NULL, NULL),
(90, 91, 56, NULL, NULL),
(91, 75, 100, NULL, NULL),
(92, 95, 10, NULL, NULL),
(93, 27, 47, NULL, NULL),
(94, 58, 15, NULL, NULL),
(95, 54, 33, NULL, NULL),
(96, 78, 24, NULL, NULL),
(97, 55, 69, NULL, NULL),
(98, 80, 11, NULL, NULL),
(99, 65, 66, NULL, NULL),
(100, 64, 82, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `slug`, `photo_url`, `created_at`, `updated_at`) VALUES
(1, 'Padang Panjang', 'blue', 'Nullam.lobortis@id.com', '1993-03-01 22:00:00', '2012-02-05 22:00:00'),
(2, 'Rutigliano', 'green', 'enim.Suspendisse@risusquisdiam.edu', '2016-08-07 21:00:00', '1993-10-22 22:00:00'),
(3, 'Albany', 'red', 'sed.sapien.Nunc@Donecnibh.com', '2002-03-16 22:00:00', '2001-07-20 21:00:00'),
(4, 'Sant\'Egidio alla Vibrata', 'green', 'semper.et.lacinia@etcommodoat.co.uk', '1984-02-15 22:00:00', '1995-05-01 21:00:00'),
(5, 'Kotli', 'blue', 'felis.orci.adipiscing@Nuncmauriselit.com', '2018-02-04 22:00:00', '1980-01-02 22:00:00'),
(6, 'North Vancouver', 'indigo', 'auctor.ullamcorper@vulputateposuerevulputate.co.uk', '2021-01-12 22:00:00', '1985-05-11 21:00:00'),
(7, 'Duluth', 'orange', 'luctus.felis@placeratCrasdictum.com', '1997-12-03 22:00:00', '2009-04-05 21:00:00'),
(8, 'Merdorp', 'indigo', 'gravida.Praesent.eu@necquamCurabitur.co.uk', '1990-12-25 22:00:00', '2004-06-27 21:00:00'),
(9, 'Metz', 'red', 'molestie.dapibus@nonummyultriciesornare.org', '1992-06-25 21:00:00', '1991-03-31 21:00:00'),
(10, 'Leke', 'violet', 'justo.Praesent@ametmetusAliquam.org', '1985-09-05 21:00:00', '2011-05-15 21:00:00'),
(11, 'Fishguard', 'orange', 'euismod.urna.Nullam@posuere.ca', '1985-12-26 22:00:00', '2012-02-03 22:00:00'),
(12, 'Lagundo/Algund', 'blue', 'amet.lorem@luctuset.co.uk', '2017-10-20 21:00:00', '2008-10-01 21:00:00'),
(13, 'New Haven', 'violet', 'odio.tristique.pharetra@quisaccumsan.co.uk', '2019-10-31 22:00:00', '1996-09-13 21:00:00'),
(14, 'Reading', 'violet', 'et@Praesentluctus.co.uk', '2018-11-09 22:00:00', '2021-07-02 21:00:00'),
(15, 'Titagarh', 'red', 'magna@euismod.edu', '1985-12-15 22:00:00', '2016-07-16 21:00:00'),
(16, 'Gasteiz', 'green', 'Etiam.ligula@risusQuisque.ca', '2005-03-19 22:00:00', '2003-07-15 21:00:00'),
(17, 'San Martino in Pensilis', 'red', 'non@Vivamusmolestie.com', '2003-10-16 21:00:00', '2006-10-18 21:00:00'),
(18, 'Chimay', 'red', 'felis@urnaconvalliserat.net', '2018-03-26 21:00:00', '1981-02-07 22:00:00'),
(19, 'Cannalonga', 'orange', 'vitae.diam.Proin@Fusce.co.uk', '2005-07-14 21:00:00', '1983-09-19 21:00:00'),
(20, 'Kempten', 'green', 'Proin@Pellentesque.org', '1986-01-13 22:00:00', '2008-12-19 22:00:00'),
(21, 'Houtain-le-Val', 'red', 'tincidunt.congue@amet.net', '2002-05-13 21:00:00', '1989-05-15 21:00:00'),
(22, 'Trieste', 'violet', 'Sed@euduiCum.ca', '1983-12-21 22:00:00', '1981-12-05 22:00:00'),
(23, 'Hofstade', 'green', 'nec.imperdiet.nec@nullaInteger.ca', '2001-10-12 21:00:00', '2005-03-29 21:00:00'),
(24, 'Livo', 'blue', 'sit.amet@Crasegetnisi.com', '2013-03-22 22:00:00', '2000-01-14 22:00:00'),
(25, 'Nanaimo', 'violet', 'ligula.elit.pretium@magnis.com', '2005-06-10 21:00:00', '2000-03-18 22:00:00'),
(26, 'Paal', 'indigo', 'aptent.taciti@etmagnisdis.net', '2013-07-06 21:00:00', '2018-02-06 22:00:00'),
(27, 'Telde', 'violet', 'adipiscing@urnaUttincidunt.ca', '2000-02-10 22:00:00', '2020-04-23 21:00:00'),
(28, 'Grand-Halleux', 'yellow', 'erat.volutpat@magnisdis.co.uk', '1996-01-22 22:00:00', '2002-02-19 22:00:00'),
(29, 'Roosdaal', 'orange', 'elit.dictum.eu@molestietellusAenean.co.uk', '1998-07-18 21:00:00', '1984-09-13 21:00:00'),
(30, 'Wilmington', 'blue', 'sagittis@Praesenteunulla.com', '1998-11-11 22:00:00', '2019-10-03 21:00:00'),
(31, 'Elbląg', 'blue', 'nunc.In.at@cursusinhendrerit.ca', '1995-05-20 21:00:00', '2013-05-15 21:00:00'),
(32, 'El Tabo', 'orange', 'eget.ipsum.Suspendisse@sedduiFusce.org', '2010-04-30 21:00:00', '1982-09-16 21:00:00'),
(33, 'Haßloch', 'indigo', 'pede.ac@adipiscinglobortisrisus.com', '1985-03-05 22:00:00', '2001-12-11 22:00:00'),
(34, 'NeuprŽ', 'red', 'orci@aliquamarcu.com', '1997-09-09 21:00:00', '2000-02-24 22:00:00'),
(35, 'Zerkegem', 'indigo', 'ipsum.leo@consequat.com', '1990-05-23 21:00:00', '1986-07-15 21:00:00'),
(36, 'Sooke', 'blue', 'laoreet.libero.et@congue.co.uk', '2021-12-30 22:00:00', '1991-07-17 21:00:00'),
(37, 'Częstochowa', 'violet', 'aliquam.eros.turpis@Curabiturconsequat.com', '1996-08-26 21:00:00', '2012-09-21 21:00:00'),
(38, 'Maltignano', 'blue', 'Sed.auctor.odio@ligulaelitpretium.net', '2001-02-09 22:00:00', '2015-01-30 22:00:00'),
(39, 'Courcelles', 'green', 'dictum@nisiMauris.com', '1995-02-08 22:00:00', '1981-07-16 21:00:00'),
(40, 'Tilly', 'violet', 'feugiat.metus@egestasAliquamfringilla.co.uk', '2015-12-19 22:00:00', '2004-09-16 21:00:00'),
(41, 'Deschambault', 'indigo', 'ultrices.Duis@Suspendissecommodotincidunt.org', '2017-10-04 21:00:00', '1991-09-11 21:00:00'),
(42, 'Tire', 'green', 'Aliquam.gravida.mauris@tellus.net', '1989-03-19 22:00:00', '2011-06-22 21:00:00'),
(43, 'Metro', 'yellow', 'sem.elit@euismodac.net', '1992-08-18 21:00:00', '2020-08-31 21:00:00'),
(44, 'Pocatello', 'blue', 'ipsum.dolor@neque.net', '2012-06-05 21:00:00', '2022-02-15 22:00:00'),
(45, 'Silvan', 'blue', 'Aliquam.nec.enim@metusvitaevelit.edu', '2001-07-29 21:00:00', '2010-10-22 21:00:00'),
(46, 'Montebello', 'violet', 'egestas.lacinia.Sed@MaurismagnaDuis.edu', '2006-07-27 21:00:00', '1989-04-24 21:00:00'),
(47, 'Zandvoorde', 'blue', 'dapibus.id.blandit@velitin.co.uk', '1983-08-20 21:00:00', '2007-12-07 22:00:00'),
(48, 'Pemuco', 'orange', 'Vestibulum.ante.ipsum@Aliquamornarelibero.edu', '2012-07-07 21:00:00', '2013-08-20 21:00:00'),
(49, 'Sijsele', 'orange', 'Suspendisse@hendrerit.ca', '1987-04-05 21:00:00', '2005-07-25 21:00:00'),
(50, 'Saint-Mard', 'green', 'varius.et.euismod@vitaenibhDonec.edu', '1984-07-20 21:00:00', '1993-06-15 21:00:00'),
(51, 'Bahawalpur', 'orange', 'sapien.molestie@Donecvitaeerat.org', '2008-10-17 21:00:00', '2012-01-24 22:00:00'),
(52, 'LamontzŽe', 'orange', 'sed@maurissitamet.net', '2016-09-14 21:00:00', '1983-03-30 21:00:00'),
(53, 'Markkleeberg', 'green', 'sollicitudin.orci@semvitaealiquam.edu', '2019-09-29 21:00:00', '2010-01-28 22:00:00'),
(54, 'Provost', 'orange', 'ut.cursus.luctus@scelerisqueloremipsum.org', '2019-08-22 21:00:00', '2016-12-27 22:00:00'),
(55, 'Chicago', 'yellow', 'cursus.Integer.mollis@id.ca', '1987-01-01 22:00:00', '1983-07-13 21:00:00'),
(56, 'Burhanpur', 'violet', 'aliquet@nuncid.net', '2011-11-12 22:00:00', '1991-01-19 22:00:00'),
(57, 'My', 'yellow', 'felis.adipiscing.fringilla@aarcu.edu', '1984-04-23 21:00:00', '2020-03-13 22:00:00'),
(58, 'Sloten', 'indigo', 'auctor.velit.Aliquam@in.com', '2001-03-03 22:00:00', '1986-02-16 22:00:00'),
(59, 'Ospedaletto Lodigiano', 'green', 'adipiscing.ligula.Aenean@velturpis.edu', '2007-03-01 22:00:00', '1982-03-17 22:00:00'),
(60, 'Langenhagen', 'orange', 'sollicitudin.commodo@nonlobortisquis.com', '2013-03-31 21:00:00', '1990-01-29 22:00:00'),
(61, 'St. Thomas', 'blue', 'ut.nisi.a@justo.ca', '2019-12-18 22:00:00', '2012-05-06 21:00:00'),
(62, 'Regina', 'green', 'Fusce@nequeIn.org', '2018-01-10 22:00:00', '2019-03-26 22:00:00'),
(63, 'Monstreux', 'green', 'ut@egetvariusultrices.com', '2006-08-20 21:00:00', '1982-01-11 22:00:00'),
(64, 'Bandar Lampung', 'green', 'laoreet.libero.et@Sedegetlacus.net', '2008-07-05 21:00:00', '2010-01-16 22:00:00'),
(65, 'Glendon', 'violet', 'risus.Nunc@conubianostraper.ca', '2017-08-21 21:00:00', '2018-03-28 21:00:00'),
(66, 'San Nicolás', 'yellow', 'libero.Morbi@dictumeu.net', '1997-07-07 21:00:00', '1981-12-26 22:00:00'),
(67, 'Sevilla', 'red', 'nec.eleifend.non@odioEtiamligula.com', '2002-10-29 22:00:00', '2018-05-10 21:00:00'),
(68, 'Tongrinne', 'green', 'tincidunt.nunc.ac@Aliquamornarelibero.org', '2012-11-12 22:00:00', '2002-10-04 21:00:00'),
(69, 'Purulia', 'yellow', 'Phasellus@ascelerisquesed.com', '2020-04-04 21:00:00', '2000-09-06 21:00:00'),
(70, 'Villafranca in Lunigiana', 'red', 'Donec@justoPraesentluctus.net', '2008-05-08 21:00:00', '1984-07-12 21:00:00'),
(71, 'Shawinigan', 'orange', 'dolor.sit.amet@Morbiquis.co.uk', '2007-08-24 21:00:00', '1997-07-25 21:00:00'),
(72, 'Crecchio', 'indigo', 'risus@lobortisquis.com', '2016-10-01 21:00:00', '1982-12-03 22:00:00'),
(73, 'Dubuisson', 'blue', 'neque@inhendreritconsectetuer.net', '2005-08-09 21:00:00', '2020-09-26 21:00:00'),
(74, 'Stonewall', 'indigo', 'per.conubia@montesnascetur.org', '2013-11-26 22:00:00', '2013-01-09 22:00:00'),
(75, 'Hoogeveen', 'yellow', 'nunc@malesuadafringillaest.org', '1983-09-12 21:00:00', '1981-12-17 22:00:00'),
(76, 'Buggenhout', 'indigo', 'eget@velitegestaslacinia.ca', '2011-01-27 22:00:00', '2022-02-18 22:00:00'),
(77, 'Corbais', 'indigo', 'mi@eros.edu', '2012-08-03 21:00:00', '1995-12-06 22:00:00'),
(78, 'Ciudad Madero', 'indigo', 'mollis.non@auctor.org', '2011-02-13 22:00:00', '1999-01-19 22:00:00'),
(79, 'Southaven', 'yellow', 'Proin@atfringilla.ca', '1990-01-20 22:00:00', '1985-04-01 21:00:00'),
(80, 'Drumheller', 'indigo', 'ac.mattis@Pellentesque.edu', '2014-09-08 21:00:00', '2012-06-15 21:00:00'),
(81, 'Noragugume', 'orange', 'nascetur.ridiculus.mus@sociisnatoquepenatibus.org', '1987-11-22 22:00:00', '1983-05-22 21:00:00'),
(82, 'Valbrevenna', 'orange', 'ullamcorper.eu.euismod@semper.com', '2009-05-28 21:00:00', '2015-08-22 21:00:00'),
(83, 'Lukhovitsy', 'red', 'eros@montesnasceturridiculus.net', '1993-06-13 21:00:00', '2002-07-05 21:00:00'),
(84, 'Corozal', 'green', 'eu@variuseteuismod.com', '2005-02-10 22:00:00', '2010-08-06 21:00:00'),
(85, 'Damme', 'indigo', 'ornare.sagittis.felis@euenim.com', '1989-06-26 21:00:00', '1989-05-15 21:00:00'),
(86, 'Ife', 'indigo', 'enim@necmauris.org', '2012-07-17 21:00:00', '2007-05-01 21:00:00'),
(87, 'Torino', 'red', 'vehicula.risus@Maecenas.net', '2007-07-28 21:00:00', '1999-12-13 22:00:00'),
(88, 'Orsara di Puglia', 'blue', 'ipsum@et.co.uk', '1995-12-29 22:00:00', '1991-05-19 21:00:00'),
(89, 'Kelkheim', 'violet', 'dapibus@facilisislorem.net', '2000-02-13 22:00:00', '1997-09-22 21:00:00'),
(90, 'Inverness', 'red', 'non@urna.ca', '2008-05-19 21:00:00', '1993-12-10 22:00:00'),
(91, 'Lexington', 'green', 'dictum@montes.co.uk', '1993-01-22 22:00:00', '1990-04-14 21:00:00'),
(92, 'Rotterdam', 'violet', 'hendrerit.id@libero.com', '1998-11-10 22:00:00', '2019-03-23 22:00:00'),
(93, 'Mannheim', 'blue', 'erat.Etiam@aclibero.org', '2017-03-28 21:00:00', '1996-05-28 21:00:00'),
(94, 'Bostaniçi', 'yellow', 'libero.et.tristique@Donec.com', '1986-03-04 22:00:00', '2022-06-11 21:00:00'),
(95, 'Ponta Grossa', 'yellow', 'in@convallisdolor.net', '1992-06-06 21:00:00', '2000-09-27 21:00:00'),
(96, 'Aklavik', 'blue', 'Integer.in@conubianostraper.com', '2021-01-22 22:00:00', '2015-01-26 22:00:00'),
(97, 'Pozo Almonte', 'orange', 'Nullam.nisl@non.ca', '2012-01-09 22:00:00', '1997-05-28 21:00:00'),
(98, 'St. Andrews', 'yellow', 'ac@egestas.org', '2021-08-11 21:00:00', '1986-12-03 22:00:00'),
(99, 'San Vicente', 'indigo', 'tortor@imperdietornareIn.co.uk', '2003-04-09 21:00:00', '2006-06-01 21:00:00'),
(100, 'Lanark', 'orange', 'lacus.Aliquam.rutrum@Sed.org', '2004-07-20 21:00:00', '2013-07-05 21:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phrases`
--

CREATE TABLE `phrases` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topics_id` bigint UNSIGNED NOT NULL,
  `audio_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `phrases`
--

INSERT INTO `phrases` (`id`, `name`, `topics_id`, `audio_url`, `created_at`, `updated_at`) VALUES
(1, 'Curabitur', 6, 'felis@ipsum.com', '2004-12-06 22:00:00', '2022-05-11 21:00:00'),
(2, 'amet', 1, 'Praesent@enim.org', '2012-03-30 21:00:00', '2018-09-30 21:00:00'),
(3, 'sodales', 3, 'et.malesuada@NullamnislMaecenas.com', '1996-11-12 22:00:00', '2007-05-18 21:00:00'),
(4, 'molestie', 1, 'lectus.pede.ultrices@Quisqueliberolacus.ca', '2014-05-18 21:00:00', '2011-11-30 22:00:00'),
(5, 'nunc', 10, 'leo@Vivamus.org', '1988-06-18 21:00:00', '1984-07-23 21:00:00'),
(6, 'ultrices.', 5, 'convallis@luctus.ca', '2015-12-05 22:00:00', '2012-06-02 21:00:00'),
(7, 'arcu', 10, 'Integer.vulputate.risus@necmetusfacilisis.edu', '2015-02-02 22:00:00', '2002-01-28 22:00:00'),
(8, 'Mauris', 2, 'In.nec@nuncinterdumfeugiat.edu', '2020-09-26 21:00:00', '1992-06-05 21:00:00'),
(9, 'lectus', 1, 'senectus@duiaugue.ca', '1996-06-26 21:00:00', '1994-12-23 22:00:00'),
(10, 'mi', 1, 'vitae.orci@atarcuVestibulum.ca', '1989-09-12 21:00:00', '1980-08-29 21:00:00'),
(11, 'ut', 7, 'lorem@Proinvelnisl.net', '2017-09-02 21:00:00', '1996-08-03 21:00:00'),
(12, 'Duis', 5, 'nisi@vitaeodiosagittis.ca', '1986-04-13 21:00:00', '2021-05-03 21:00:00'),
(13, 'lacus.', 1, 'Nam@Nuncmauris.ca', '1990-11-27 22:00:00', '1983-11-18 22:00:00'),
(14, 'vestibulum,', 1, 'Integer.vitae.nibh@musProinvel.ca', '2012-09-22 21:00:00', '1990-08-27 21:00:00'),
(15, 'netus', 2, 'vulputate@lorem.ca', '1987-03-03 22:00:00', '1981-04-28 21:00:00'),
(16, 'scelerisque', 2, 'ut.nisi.a@Proinsed.net', '2006-07-05 21:00:00', '2011-05-01 21:00:00'),
(17, 'non,', 3, 'placerat.orci@atortor.ca', '1991-09-19 21:00:00', '1987-12-20 22:00:00'),
(18, 'turpis', 3, 'pretium.neque.Morbi@idrisus.org', '1996-07-22 21:00:00', '2020-04-17 21:00:00'),
(19, 'arcu.', 7, 'Aliquam.nec@ac.co.uk', '2012-03-22 22:00:00', '2017-04-02 21:00:00'),
(20, 'lorem', 5, 'natoque.penatibus.et@Quisque.com', '1992-03-24 22:00:00', '2017-11-11 22:00:00'),
(21, 'parturient', 1, 'malesuada@cursuspurusNullam.edu', '2000-06-05 21:00:00', '1982-07-12 21:00:00'),
(22, 'vehicula.', 10, 'erat.neque.non@sempereratin.edu', '1984-05-18 21:00:00', '1997-12-25 22:00:00'),
(23, 'Mauris', 2, 'justo.nec.ante@orciUt.com', '1988-01-02 22:00:00', '2017-06-01 21:00:00'),
(24, 'sapien.', 1, 'Suspendisse@tempusscelerisquelorem.edu', '2000-10-18 21:00:00', '2020-03-14 22:00:00'),
(25, 'amet', 10, 'Duis.cursus.diam@atliberoMorbi.net', '2016-08-31 21:00:00', '2017-03-06 22:00:00'),
(26, 'ipsum.', 1, 'Duis@natoquepenatibus.ca', '1997-03-05 22:00:00', '2016-05-22 21:00:00'),
(27, 'quam.', 7, 'vitae.sodales.at@vitaesodales.org', '1983-12-30 22:00:00', '1986-11-29 22:00:00'),
(28, 'ante', 1, 'ultricies.adipiscing@justo.co.uk', '2002-02-24 22:00:00', '2004-07-28 21:00:00'),
(29, 'placerat', 7, 'dui.lectus@ridiculusmusProin.co.uk', '1991-10-14 22:00:00', '1988-02-22 22:00:00'),
(30, 'sapien.', 7, 'Etiam.laoreet.libero@mitemporlorem.org', '2011-01-29 22:00:00', '2020-09-13 21:00:00'),
(31, 'feugiat', 9, 'Vivamus.euismod.urna@tortor.org', '1993-08-30 21:00:00', '2014-04-09 21:00:00'),
(32, 'dui.', 10, 'at.lacus.Quisque@magnaa.edu', '2014-07-04 21:00:00', '1987-01-01 22:00:00'),
(33, 'ante', 10, 'malesuada.fringilla@Ut.edu', '1992-05-21 21:00:00', '2001-06-15 21:00:00'),
(34, 'Curabitur', 3, 'nec@risusDuis.co.uk', '2015-12-08 22:00:00', '2004-12-20 22:00:00'),
(35, 'Mauris', 6, 'libero.Donec@magna.edu', '1992-05-18 21:00:00', '2018-08-03 21:00:00'),
(36, 'tincidunt.', 4, 'nonummy@Quisquelibero.co.uk', '2001-07-15 21:00:00', '2019-12-16 22:00:00'),
(37, 'Donec', 9, 'Duis.a@sedlibero.net', '2020-07-07 21:00:00', '2006-06-26 21:00:00'),
(38, 'dolor.', 8, 'facilisis@idnuncinterdum.com', '2001-01-24 22:00:00', '2009-04-10 21:00:00'),
(39, 'Proin', 8, 'tincidunt.neque@turpisNullaaliquet.co.uk', '1988-08-09 21:00:00', '1989-12-18 22:00:00'),
(40, 'quis', 3, 'Nulla.dignissim@nec.edu', '2000-01-30 22:00:00', '2006-09-18 21:00:00'),
(41, 'non,', 7, 'tempus@necorciDonec.co.uk', '1991-08-25 21:00:00', '1985-02-07 22:00:00'),
(42, 'semper,', 7, 'Quisque.ornare@DonectinciduntDonec.com', '2022-04-09 21:00:00', '2014-10-16 21:00:00'),
(43, 'nec', 3, 'Integer.vulputate@lobortis.net', '2005-04-28 21:00:00', '2016-07-17 21:00:00'),
(44, 'dictum', 10, 'odio.Nam@ligula.edu', '2000-03-18 22:00:00', '1996-05-16 21:00:00'),
(45, 'diam', 7, 'id.mollis@Donec.com', '2013-10-23 21:00:00', '2004-07-14 21:00:00'),
(46, 'sagittis.', 10, 'eu@dictumcursusNunc.edu', '1992-10-22 22:00:00', '1993-05-28 21:00:00'),
(47, 'penatibus', 9, 'tincidunt@ornare.edu', '1999-10-30 21:00:00', '2019-12-01 22:00:00'),
(48, 'Aliquam', 1, 'nunc.id@lorem.com', '2006-08-10 21:00:00', '2008-09-17 21:00:00'),
(49, 'mi', 4, 'dolor.Nulla@nislarcu.edu', '2010-08-09 21:00:00', '1992-06-19 21:00:00'),
(50, 'leo.', 5, 'ornare.placerat.orci@milaciniamattis.ca', '2003-05-22 21:00:00', '2018-08-03 21:00:00'),
(51, 'a', 6, 'mauris.aliquam.eu@diamDuismi.ca', '2005-07-05 21:00:00', '1997-08-11 21:00:00'),
(52, 'eu', 10, 'Etiam.ligula@magnaCrasconvallis.co.uk', '1990-01-08 22:00:00', '1991-10-23 22:00:00'),
(53, 'turpis.', 4, 'Sed.nec@amifringilla.co.uk', '1997-08-02 21:00:00', '1994-08-29 21:00:00'),
(54, 'sodales.', 9, 'metus.eu.erat@Curabitur.com', '2017-05-02 21:00:00', '1992-08-04 21:00:00'),
(55, 'id,', 5, 'aliquet.vel@Aenean.net', '1988-12-04 22:00:00', '1987-08-19 21:00:00'),
(56, 'erat,', 6, 'molestie@temporest.org', '2012-10-12 21:00:00', '1992-05-28 21:00:00'),
(57, 'nulla.', 10, 'morbi.tristique@vehicula.org', '2013-04-13 21:00:00', '2013-03-06 22:00:00'),
(58, 'enim,', 10, 'lorem.Donec@eleifend.edu', '2019-03-06 22:00:00', '2000-09-13 21:00:00'),
(59, 'arcu.', 7, 'eros@necanteblandit.net', '2021-07-10 21:00:00', '1987-03-21 22:00:00'),
(60, 'eu,', 1, 'consequat.dolor@vehicula.org', '2005-12-15 22:00:00', '2005-06-13 21:00:00'),
(61, 'orci', 3, 'placerat.orci@Praesentluctus.ca', '2012-05-01 21:00:00', '1980-06-17 21:00:00'),
(62, 'Vivamus', 6, 'dictum.Phasellus.in@lectus.co.uk', '2011-04-15 21:00:00', '1986-04-20 21:00:00'),
(63, 'purus.', 5, 'ut.pharetra@ipsum.co.uk', '1998-10-24 21:00:00', '2008-09-18 21:00:00'),
(64, 'ipsum', 8, 'ligula@dapibusgravida.co.uk', '1990-09-13 21:00:00', '1979-12-13 22:00:00'),
(65, 'Duis', 1, 'vitae.odio@nonummyacfeugiat.net', '1993-08-04 21:00:00', '1986-12-01 22:00:00'),
(66, 'libero', 9, 'vulputate.posuere@idblanditat.net', '2007-01-04 22:00:00', '2017-10-20 21:00:00'),
(67, 'mauris', 4, 'Sed.nunc.est@feugiatplacerat.edu', '2009-05-21 21:00:00', '2004-08-28 21:00:00'),
(68, 'lacus.', 10, 'Phasellus.elit.pede@sit.com', '2019-04-22 21:00:00', '2021-01-23 22:00:00'),
(69, 'neque', 4, 'elit.a@estNunc.ca', '1994-09-13 21:00:00', '1981-05-26 21:00:00'),
(70, 'sit', 1, 'vehicula.aliquet@nectellusNunc.net', '2009-02-26 22:00:00', '1988-05-17 21:00:00'),
(71, 'Nam', 8, 'est.ac@Aliquameratvolutpat.org', '1997-03-06 22:00:00', '1989-12-01 22:00:00'),
(72, 'penatibus', 8, 'vitae.velit@diameudolor.org', '2006-10-16 21:00:00', '1980-11-30 22:00:00'),
(73, 'arcu.', 5, 'Suspendisse@netuset.net', '2022-03-26 22:00:00', '1996-09-09 21:00:00'),
(74, 'egestas.', 9, 'est@consectetuer.co.uk', '2007-02-22 22:00:00', '2019-09-19 21:00:00'),
(75, 'ridiculus', 3, 'luctus.Curabitur.egestas@risusquisdiam.net', '1996-10-21 21:00:00', '1996-03-08 22:00:00'),
(76, 'Nunc', 8, 'adipiscing@massaSuspendisse.ca', '1984-08-27 21:00:00', '2008-07-06 21:00:00'),
(77, 'Pellentesque', 7, 'aliquam@vel.co.uk', '1998-08-18 21:00:00', '1980-11-30 22:00:00'),
(78, 'sed', 9, 'dis.parturient@liberoIntegerin.ca', '1994-01-05 22:00:00', '1981-10-05 22:00:00'),
(79, 'placerat,', 7, 'consectetuer.adipiscing@nullaIntegervulputate.co.uk', '2020-07-29 21:00:00', '1990-04-02 21:00:00'),
(80, 'erat', 5, 'iaculis.nec@Aeneanegestas.net', '2005-09-16 21:00:00', '1982-03-31 21:00:00'),
(81, 'eget', 5, 'vulputate.velit@eterosProin.ca', '1999-12-15 22:00:00', '1982-10-10 22:00:00'),
(82, 'non', 8, 'mollis.vitae@eu.co.uk', '2000-02-01 22:00:00', '1984-11-19 22:00:00'),
(83, 'Nulla', 6, 'elit.Curabitur.sed@Etiamgravidamolestie.co.uk', '2002-09-08 21:00:00', '2005-11-13 22:00:00'),
(84, 'lacinia', 2, 'ligula.Aenean@vulputateullamcorper.net', '1995-08-10 21:00:00', '2006-06-01 21:00:00'),
(85, 'id,', 3, 'arcu.Vivamus@massaIntegervitae.com', '2012-07-16 21:00:00', '2011-08-29 21:00:00'),
(86, 'orci.', 8, 'augue.porttitor.interdum@nuncest.net', '1992-11-23 22:00:00', '2013-05-29 21:00:00'),
(87, 'penatibus', 7, 'aliquet@pedenonummyut.net', '2018-07-09 21:00:00', '2000-06-19 21:00:00'),
(88, 'Aliquam', 4, 'eu.tellus.Phasellus@consequatpurus.org', '2012-01-16 22:00:00', '2002-10-08 21:00:00'),
(89, 'ultrices', 1, 'Aliquam@Cumsociis.ca', '1999-10-04 21:00:00', '1993-03-20 22:00:00'),
(90, 'rutrum', 8, 'sagittis@Nullatincidunt.ca', '2000-07-31 21:00:00', '2018-06-22 21:00:00'),
(91, 'quis', 5, 'metus.facilisis.lorem@sit.com', '1991-03-24 22:00:00', '1998-02-23 22:00:00'),
(92, 'tellus.', 10, 'in@maurisipsumporta.co.uk', '1999-09-03 21:00:00', '2017-07-11 21:00:00'),
(93, 'scelerisque', 6, 'natoque.penatibus@NuncmaurisMorbi.co.uk', '2006-02-01 22:00:00', '1997-02-03 22:00:00'),
(94, 'Fusce', 1, 'sed.hendrerit@eratvolutpatNulla.net', '2002-10-16 21:00:00', '1997-08-18 21:00:00'),
(95, 'dapibus', 3, 'interdum.Curabitur@Donectempor.edu', '2019-04-19 21:00:00', '1999-12-11 22:00:00'),
(96, 'Nam', 8, 'interdum.Nunc.sollicitudin@vitae.net', '1997-03-16 22:00:00', '1983-03-13 22:00:00'),
(97, 'vestibulum,', 10, 'Pellentesque.tincidunt.tempus@Curae.net', '1992-02-17 22:00:00', '2010-02-05 22:00:00'),
(98, 'est.', 8, 'a@risusNullaeget.com', '2003-03-17 22:00:00', '2006-10-04 21:00:00'),
(99, 'felis', 1, 'lectus.pede@luctus.com', '1985-03-28 22:00:00', '1987-08-20 21:00:00'),
(100, 'mollis', 3, 'tempor.arcu@aliquetsemut.ca', '2007-08-24 21:00:00', '1990-03-13 22:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `phrase_user`
--

CREATE TABLE `phrase_user` (
  `id` bigint UNSIGNED NOT NULL,
  `phrase_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `phrase_user`
--

INSERT INTO `phrase_user` (`id`, `phrase_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 87, 61, NULL, NULL),
(2, 80, 21, NULL, NULL),
(3, 72, 58, NULL, NULL),
(4, 78, 88, NULL, NULL),
(5, 69, 44, NULL, NULL),
(6, 97, 19, NULL, NULL),
(7, 32, 90, NULL, NULL),
(8, 88, 14, NULL, NULL),
(9, 28, 71, NULL, NULL),
(10, 53, 70, NULL, NULL),
(11, 84, 68, NULL, NULL),
(12, 82, 80, NULL, NULL),
(13, 3, 42, NULL, NULL),
(14, 41, 73, NULL, NULL),
(15, 55, 87, NULL, NULL),
(16, 12, 42, NULL, NULL),
(17, 53, 82, NULL, NULL),
(18, 8, 34, NULL, NULL),
(19, 27, 71, NULL, NULL),
(20, 60, 92, NULL, NULL),
(21, 16, 83, NULL, NULL),
(22, 11, 67, NULL, NULL),
(23, 38, 64, NULL, NULL),
(24, 72, 58, NULL, NULL),
(25, 9, 52, NULL, NULL),
(26, 27, 70, NULL, NULL),
(27, 22, 27, NULL, NULL),
(28, 98, 66, NULL, NULL),
(29, 83, 17, NULL, NULL),
(30, 82, 54, NULL, NULL),
(31, 4, 52, NULL, NULL),
(32, 56, 72, NULL, NULL),
(33, 29, 66, NULL, NULL),
(34, 52, 20, NULL, NULL),
(35, 1, 70, NULL, NULL),
(36, 14, 89, NULL, NULL),
(37, 48, 79, NULL, NULL),
(38, 78, 45, NULL, NULL),
(39, 14, 40, NULL, NULL),
(40, 77, 100, NULL, NULL),
(41, 40, 78, NULL, NULL),
(42, 52, 37, NULL, NULL),
(43, 10, 58, NULL, NULL),
(44, 3, 56, NULL, NULL),
(45, 55, 16, NULL, NULL),
(46, 46, 86, NULL, NULL),
(47, 12, 65, NULL, NULL),
(48, 52, 62, NULL, NULL),
(49, 26, 7, NULL, NULL),
(50, 68, 62, NULL, NULL),
(51, 17, 32, NULL, NULL),
(52, 94, 37, NULL, NULL),
(53, 5, 40, NULL, NULL),
(54, 77, 66, NULL, NULL),
(55, 32, 20, NULL, NULL),
(56, 74, 68, NULL, NULL),
(57, 7, 76, NULL, NULL),
(58, 84, 54, NULL, NULL),
(59, 71, 4, NULL, NULL),
(60, 22, 94, NULL, NULL),
(61, 48, 19, NULL, NULL),
(62, 3, 7, NULL, NULL),
(63, 83, 6, NULL, NULL),
(64, 100, 89, NULL, NULL),
(65, 73, 3, NULL, NULL),
(66, 76, 41, NULL, NULL),
(67, 49, 71, NULL, NULL),
(68, 55, 85, NULL, NULL),
(69, 43, 100, NULL, NULL),
(70, 66, 30, NULL, NULL),
(71, 71, 3, NULL, NULL),
(72, 66, 60, NULL, NULL),
(73, 79, 21, NULL, NULL),
(74, 56, 69, NULL, NULL),
(75, 35, 14, NULL, NULL),
(76, 27, 88, NULL, NULL),
(77, 48, 46, NULL, NULL),
(78, 70, 63, NULL, NULL),
(79, 4, 97, NULL, NULL),
(80, 33, 6, NULL, NULL),
(81, 33, 91, NULL, NULL),
(82, 61, 4, NULL, NULL),
(83, 11, 28, NULL, NULL),
(84, 32, 77, NULL, NULL),
(85, 53, 32, NULL, NULL),
(86, 52, 44, NULL, NULL),
(87, 72, 62, NULL, NULL),
(88, 48, 13, NULL, NULL),
(89, 72, 57, NULL, NULL),
(90, 85, 9, NULL, NULL),
(91, 70, 81, NULL, NULL),
(92, 95, 18, NULL, NULL),
(93, 49, 23, NULL, NULL),
(94, 76, 53, NULL, NULL),
(95, 56, 51, NULL, NULL),
(96, 49, 98, NULL, NULL),
(97, 15, 93, NULL, NULL),
(98, 30, 27, NULL, NULL),
(99, 42, 68, NULL, NULL),
(100, 50, 37, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'sed', '1996-02-16 22:00:00', '2018-01-07 22:00:00'),
(2, 'pede.', '1996-04-22 21:00:00', '1979-07-21 21:00:00'),
(3, 'ac', '2000-12-13 22:00:00', '1999-05-24 21:00:00'),
(4, 'erat,', '2006-06-06 21:00:00', '2008-03-03 22:00:00'),
(5, 'convallis', '1984-02-26 22:00:00', '1993-09-28 22:00:00'),
(6, 'Sed', '2002-02-26 22:00:00', '2013-01-10 22:00:00'),
(7, 'pede', '1992-01-13 22:00:00', '1984-03-05 22:00:00'),
(8, 'ullamcorper', '1986-08-22 21:00:00', '2013-06-11 21:00:00'),
(9, 'ullamcorper.', '2000-12-11 22:00:00', '2019-02-23 22:00:00'),
(10, 'erat.', '2020-08-19 21:00:00', '2021-06-14 21:00:00'),
(11, 'dolor', '2017-02-09 22:00:00', '1997-09-06 21:00:00'),
(12, 'porttitor', '1996-05-27 21:00:00', '2015-10-25 22:00:00'),
(13, 'sagittis', '1991-10-13 22:00:00', '2000-08-25 21:00:00'),
(14, 'tincidunt,', '2020-06-14 21:00:00', '2007-07-23 21:00:00'),
(15, 'Sed', '2003-06-14 21:00:00', '1999-10-15 21:00:00'),
(16, 'eros', '1992-11-26 22:00:00', '2011-02-04 22:00:00'),
(17, 'vel', '2008-06-28 21:00:00', '2006-10-22 21:00:00'),
(18, 'Praesent', '2019-03-30 22:00:00', '2000-09-23 21:00:00'),
(19, 'orci', '2019-11-08 22:00:00', '2004-04-13 21:00:00'),
(20, 'ante', '2013-08-19 21:00:00', '1988-12-28 22:00:00'),
(21, 'senectus', '2011-08-22 21:00:00', '2021-12-09 22:00:00'),
(22, 'elit,', '2018-10-14 21:00:00', '1982-03-26 22:00:00'),
(23, 'pellentesque.', '2017-11-20 22:00:00', '2012-01-10 22:00:00'),
(24, 'sollicitudin', '2004-04-12 21:00:00', '1994-12-20 22:00:00'),
(25, 'consequat', '1990-11-21 22:00:00', '2006-08-15 21:00:00'),
(26, 'est,', '2018-07-29 21:00:00', '2006-11-03 22:00:00'),
(27, 'imperdiet', '1988-07-26 21:00:00', '2001-03-12 22:00:00'),
(28, 'nisi', '2021-10-03 21:00:00', '2006-01-28 22:00:00'),
(29, 'convallis', '1997-01-29 22:00:00', '1990-04-25 21:00:00'),
(30, 'arcu.', '2000-11-07 22:00:00', '1989-01-13 22:00:00'),
(31, 'massa', '2003-09-05 21:00:00', '2021-01-01 22:00:00'),
(32, 'vitae', '1988-06-08 21:00:00', '1991-11-23 22:00:00'),
(33, 'diam', '2014-01-18 22:00:00', '2010-09-22 21:00:00'),
(34, 'Aliquam', '2009-03-22 22:00:00', '2016-07-12 21:00:00'),
(35, 'Curabitur', '1994-04-23 21:00:00', '1985-11-05 22:00:00'),
(36, 'vulputate', '1998-12-11 22:00:00', '1980-11-20 22:00:00'),
(37, 'malesuada', '2019-06-02 21:00:00', '1991-10-16 22:00:00'),
(38, 'pede', '1996-05-14 21:00:00', '1994-10-19 22:00:00'),
(39, 'mollis', '2011-07-27 21:00:00', '1980-07-20 21:00:00'),
(40, 'Integer', '2014-07-24 21:00:00', '2011-12-22 22:00:00'),
(41, 'consectetuer', '2013-01-15 22:00:00', '2000-08-21 21:00:00'),
(42, 'Nulla', '1990-04-17 21:00:00', '1983-08-08 21:00:00'),
(43, 'senectus', '2006-03-04 22:00:00', '1999-12-22 22:00:00'),
(44, 'urna.', '1999-10-05 21:00:00', '2019-06-13 21:00:00'),
(45, 'sem', '2021-12-22 22:00:00', '2017-12-27 22:00:00'),
(46, 'ultricies', '2012-08-14 21:00:00', '1991-03-03 22:00:00'),
(47, 'dui,', '2013-09-12 21:00:00', '1994-08-16 21:00:00'),
(48, 'Mauris', '2007-08-14 21:00:00', '2015-02-01 22:00:00'),
(49, 'dui.', '1986-02-15 22:00:00', '2011-06-14 21:00:00'),
(50, 'commodo', '1991-03-12 22:00:00', '2003-09-09 21:00:00'),
(51, 'placerat', '2003-12-29 22:00:00', '1999-12-07 22:00:00'),
(52, 'tincidunt', '2006-04-22 21:00:00', '1991-10-26 22:00:00'),
(53, 'et', '2004-11-06 22:00:00', '2011-05-09 21:00:00'),
(54, 'Nunc', '1990-05-16 21:00:00', '1997-05-27 21:00:00'),
(55, 'mollis', '1992-11-14 22:00:00', '2011-06-23 21:00:00'),
(56, 'magna.', '1996-06-10 21:00:00', '2011-07-21 21:00:00'),
(57, 'enim', '2002-12-11 22:00:00', '2018-11-23 22:00:00'),
(58, 'scelerisque', '2004-04-03 21:00:00', '2005-12-06 22:00:00'),
(59, 'eget', '1996-04-14 21:00:00', '1985-10-07 22:00:00'),
(60, 'Cras', '1990-07-04 21:00:00', '2006-07-27 21:00:00'),
(61, 'urna', '2003-08-23 21:00:00', '2009-10-31 22:00:00'),
(62, 'nunc', '1995-09-21 21:00:00', '1979-12-05 22:00:00'),
(63, 'eros', '2010-01-05 22:00:00', '2009-05-08 21:00:00'),
(64, 'facilisis', '2005-04-20 21:00:00', '1989-03-25 22:00:00'),
(65, 'fermentum', '1986-12-21 22:00:00', '1988-03-19 22:00:00'),
(66, 'nulla.', '2004-12-17 22:00:00', '1999-11-02 22:00:00'),
(67, 'Curabitur', '1986-01-06 22:00:00', '2000-08-02 21:00:00'),
(68, 'et', '2000-10-05 21:00:00', '2018-10-28 22:00:00'),
(69, 'ipsum.', '1991-12-29 22:00:00', '2004-08-03 21:00:00'),
(70, 'ante.', '2018-02-22 22:00:00', '1993-09-06 21:00:00'),
(71, 'amet,', '1997-08-15 21:00:00', '1989-01-26 22:00:00'),
(72, 'imperdiet', '2002-08-23 21:00:00', '1982-10-01 22:00:00'),
(73, 'arcu.', '1984-10-07 22:00:00', '1995-06-14 21:00:00'),
(74, 'interdum.', '2001-05-01 21:00:00', '2002-01-15 22:00:00'),
(75, 'Curae;', '1995-09-20 21:00:00', '1991-02-11 22:00:00'),
(76, 'sollicitudin', '2003-03-22 22:00:00', '1983-07-03 21:00:00'),
(77, 'amet', '1983-08-28 21:00:00', '2020-08-17 21:00:00'),
(78, 'egestas.', '2007-01-31 22:00:00', '2014-07-22 21:00:00'),
(79, 'eu', '2022-06-08 21:00:00', '2019-03-30 22:00:00'),
(80, 'Proin', '1991-01-04 22:00:00', '2015-09-22 21:00:00'),
(81, 'lectus', '1994-07-27 21:00:00', '1990-10-05 22:00:00'),
(82, 'aliquet,', '2017-06-03 21:00:00', '1994-07-16 21:00:00'),
(83, 'lectus', '1993-01-27 22:00:00', '1995-10-31 22:00:00'),
(84, 'Sed', '2017-07-22 21:00:00', '1996-03-15 22:00:00'),
(85, 'nulla.', '2002-07-11 21:00:00', '2008-01-04 22:00:00'),
(86, 'ipsum.', '1989-04-30 21:00:00', '2005-08-10 21:00:00'),
(87, 'egestas', '1998-09-19 21:00:00', '2002-05-02 21:00:00'),
(88, 'aliquet', '1998-08-06 21:00:00', '1995-08-22 21:00:00'),
(89, 'augue,', '2022-06-15 21:00:00', '2000-09-17 21:00:00'),
(90, 'nascetur', '2006-01-27 22:00:00', '2017-10-16 21:00:00'),
(91, 'justo.', '1994-09-08 21:00:00', '2013-11-19 22:00:00'),
(92, 'et', '2014-09-22 21:00:00', '2009-03-30 21:00:00'),
(93, 'porttitor', '1999-08-12 21:00:00', '1984-06-05 21:00:00'),
(94, 'quis', '2012-03-04 22:00:00', '1988-07-27 21:00:00'),
(95, 'tincidunt', '1990-07-10 21:00:00', '2004-07-30 21:00:00'),
(96, 'egestas.', '2019-05-09 21:00:00', '2002-08-22 21:00:00'),
(97, 'pede,', '2016-11-07 22:00:00', '1990-03-19 22:00:00'),
(98, 'non,', '1985-10-28 22:00:00', '1982-11-03 22:00:00'),
(99, 'nisl.', '2017-07-10 21:00:00', '2001-10-31 22:00:00'),
(100, 'consectetuer', '2004-07-27 21:00:00', '2021-12-25 22:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Ross', 'sed.tortor.Integer@Nullam.co.uk', '1988-06-14 21:00:00', 'VWH08QOH6VI', 'IYB01RQP5ZT', '2021-10-15 21:00:00', '2021-08-06 21:00:00'),
(2, 'Burks', 'Quisque.libero@ipsumdolorsit.org', '2005-03-24 22:00:00', 'EHG40HDB1SE', 'VGQ65ZNS3HU', '2020-10-17 21:00:00', '2021-05-04 21:00:00'),
(3, 'Berry', 'Suspendisse@necdiamDuis.org', '1993-04-26 21:00:00', 'MON52DQJ3BE', 'CJW24RWT7XU', '2022-02-26 22:00:00', '2022-01-12 22:00:00'),
(4, 'Keiko', 'vulputate.lacus.Cras@mattisInteger.co.uk', '1984-04-05 21:00:00', 'WYX41JVI1KD', 'PYM72ZHD4SS', '2021-10-02 21:00:00', '2021-06-03 21:00:00'),
(5, 'Wall', 'est.mollis@sitamet.co.uk', '1994-08-05 21:00:00', 'RRO14HSI8TQ', 'FSV80TVI1RI', '2021-08-17 21:00:00', '2021-11-16 22:00:00'),
(6, 'Blossom', 'dolor.Quisque@Integeridmagna.net', '2015-06-28 21:00:00', 'MMB55YFD1EC', 'ILW45DYQ0TD', '2021-09-27 21:00:00', '2020-09-06 21:00:00'),
(7, 'Carney', 'nibh.Phasellus.nulla@Duis.edu', '1992-05-26 21:00:00', 'INR61VCL2JA', 'AUG62FLB1WP', '2022-05-09 21:00:00', '2020-07-19 21:00:00'),
(8, 'Kramer', 'Sed.nulla@ametorciUt.net', '2017-05-01 21:00:00', 'QRS86PJE8DI', 'SFI12NKB6LS', '2020-10-09 21:00:00', '2022-05-19 21:00:00'),
(9, 'Veda', 'turpis.In@malesuadaaugueut.com', '2019-01-02 22:00:00', 'IKC85HMR2JP', 'BPH00CXG3UM', '2020-11-05 22:00:00', '2022-01-11 22:00:00'),
(10, 'Boyle', 'sem.magna.nec@magnaaneque.co.uk', '2000-01-02 22:00:00', 'JQZ98KES0WU', 'NAV45DJK7GQ', '2021-06-19 21:00:00', '2022-02-21 22:00:00'),
(11, 'Rogan', 'justo.sit@orciUt.co.uk', '1985-09-25 21:00:00', 'IOS66OTV7BV', 'BVJ80QVA7XE', '2021-05-04 21:00:00', '2021-03-18 22:00:00'),
(12, 'Blair', 'eu.odio.tristique@maurisidsapien.edu', '2009-03-10 22:00:00', 'UWR35ASK8GJ', 'TSB85UNS3FY', '2020-11-24 22:00:00', '2021-08-08 21:00:00'),
(13, 'Xanthus', 'Proin@inlobortistellus.com', '2018-07-18 21:00:00', 'TEQ03WKT1DN', 'URS07ZVI5NQ', '2020-10-16 21:00:00', '2020-08-01 21:00:00'),
(14, 'Ewing', 'rutrum.lorem@iaculisnec.edu', '1990-07-02 21:00:00', 'VXV92QGF5RH', 'WWS32AYR8XL', '2021-04-28 21:00:00', '2021-02-27 22:00:00'),
(15, 'Ulric', 'venenatis.a@mieleifend.net', '1998-05-21 21:00:00', 'ZNG56BTW4ZD', 'FVF87KBE7YL', '2022-03-22 22:00:00', '2022-04-11 21:00:00'),
(16, 'Banks', 'id.blandit@facilisis.com', '1999-05-09 21:00:00', 'TOH98JRC0EN', 'ZOZ97GXX2HU', '2021-08-30 21:00:00', '2021-05-06 21:00:00'),
(17, 'Cunningham', 'Nulla@necimperdiet.co.uk', '1985-02-09 22:00:00', 'WMC15OLH0YK', 'JFU57UEP1AP', '2021-10-20 21:00:00', '2021-12-25 22:00:00'),
(18, 'Livingston', 'tincidunt@convallisantelectus.ca', '1998-01-16 22:00:00', 'DCG48MWX0GO', 'WRP29QOP5LH', '2022-01-16 22:00:00', '2021-12-16 22:00:00'),
(19, 'Mullins', 'a.odio.semper@Praesentinterdumligula.net', '2018-07-15 21:00:00', 'ZJQ50OJQ9GN', 'CME66IPI3VR', '2021-04-15 21:00:00', '2021-09-25 21:00:00'),
(20, 'Hopkins', 'lectus@tacitisociosqu.org', '2015-05-21 21:00:00', 'YVB73FTC8FK', 'KIW26ZSU7DV', '2021-05-14 21:00:00', '2021-03-12 22:00:00'),
(21, 'Leblanc', 'dignissim.tempor@eteuismodet.co.uk', '1988-03-04 22:00:00', 'GRW39HEU4UP', 'ESI92OBB9LS', '2020-07-16 21:00:00', '2022-05-02 21:00:00'),
(22, 'Vera', 'Praesent@libero.ca', '1997-08-08 21:00:00', 'JWZ16LVQ5CG', 'DNF13OCQ9AN', '2020-12-22 22:00:00', '2020-07-04 21:00:00'),
(23, 'Flynn', 'Curabitur.vel.lectus@feugiat.org', '1996-12-25 22:00:00', 'FOG14YTF9XK', 'GBS52DCG9ZX', '2021-08-13 21:00:00', '2022-02-09 22:00:00'),
(24, 'Cheryl', 'diam.at.pretium@nonjustoProin.com', '1984-01-04 22:00:00', 'YFS59NNR8QH', 'CJY50UIY1EA', '2020-07-01 21:00:00', '2020-10-09 21:00:00'),
(25, 'Saunders', 'Donec@velpede.ca', '2005-12-05 22:00:00', 'JKQ17JUN7CI', 'CTM06DAU5PU', '2021-08-09 21:00:00', '2021-11-13 22:00:00'),
(26, 'Lisandra', 'venenatis.a.magna@nec.edu', '1994-04-02 21:00:00', 'MLT91ZON1SU', 'OBW38EMP8PY', '2022-06-13 21:00:00', '2022-06-08 21:00:00'),
(27, 'Oneill', 'euismod.ac@Donecatarcu.edu', '2008-04-09 21:00:00', 'EUI38LFG1QE', 'YFV21BCV4ZZ', '2020-12-25 22:00:00', '2022-03-08 22:00:00'),
(28, 'Garrett', 'aptent.taciti.sociosqu@egestasascelerisque.ca', '1986-05-23 21:00:00', 'OAD91ZUC1RX', 'BSS90FRD1IK', '2020-11-22 22:00:00', '2021-12-09 22:00:00'),
(29, 'Naida', 'orci.Phasellus@euodioPhasellus.org', '2014-07-31 21:00:00', 'TAD18OLY6VF', 'FXM24TQH0IY', '2021-03-13 22:00:00', '2021-03-06 22:00:00'),
(30, 'Carr', 'turpis.Nulla@vitaepurusgravida.net', '1990-05-16 21:00:00', 'YLK84OLZ0FT', 'KUN22RYE2PN', '2021-06-21 21:00:00', '2020-09-02 21:00:00'),
(31, 'Cash', 'purus.ac.tellus@in.edu', '1992-09-20 21:00:00', 'CCH07CQX2OE', 'YBR14AWH1BH', '2021-01-06 22:00:00', '2021-02-20 22:00:00'),
(32, 'Aaron', 'egestas.nunc.sed@tinciduntcongueturpis.co.uk', '2011-12-23 22:00:00', 'CKU11XBO9FB', 'EDS45ZHF1VE', '2021-05-01 21:00:00', '2021-07-08 21:00:00'),
(33, 'Morgan', 'nulla.Integer@odiotristique.com', '2010-10-08 21:00:00', 'MTA11TET3WR', 'DSO45GTQ7BT', '2022-06-01 21:00:00', '2020-09-03 21:00:00'),
(34, 'Dustin', 'volutpat.nunc@magnis.net', '1993-01-12 22:00:00', 'OTY55ITR3NG', 'NSL04QJI4TY', '2020-08-16 21:00:00', '2021-11-27 22:00:00'),
(35, 'Workman', 'ultrices.Duis.volutpat@faucibusutnulla.org', '2012-01-18 22:00:00', 'GJE18ALP8FP', 'ASV68ZRQ3ES', '2021-02-19 22:00:00', '2021-11-17 22:00:00'),
(36, 'Zeph', 'amet.luctus.vulputate@vulputatemauris.net', '2003-10-24 21:00:00', 'CGY99OJS8ZX', 'XGK66GQF2BG', '2020-08-07 21:00:00', '2021-04-26 21:00:00'),
(37, 'Clinton', 'Class.aptent.taciti@imperdiet.com', '1986-06-22 21:00:00', 'FQN54YYN1RJ', 'PMK12ZFB5CM', '2020-12-21 22:00:00', '2021-09-07 21:00:00'),
(38, 'Isabelle', 'risus.quis@faucibusMorbi.org', '2002-07-27 21:00:00', 'LQH69FOL8KX', 'AFE38DJR8SB', '2021-05-11 21:00:00', '2020-09-05 21:00:00'),
(39, 'Hu', 'lobortis.quam@lectuspedeultrices.net', '1983-07-29 21:00:00', 'TZX71IKF5WJ', 'QIS19VVO0HF', '2022-03-28 21:00:00', '2022-02-06 22:00:00'),
(40, 'Clark', 'convallis.ante@viverra.ca', '2019-10-06 21:00:00', 'ROI49OWI4MD', 'LJP12WUA6GY', '2021-03-30 21:00:00', '2022-05-11 21:00:00'),
(41, 'Branch', 'diam.Pellentesque.habitant@nisl.net', '2019-04-04 21:00:00', 'BGT29WNJ8GG', 'TNX13NYU5RH', '2022-03-04 22:00:00', '2022-05-27 21:00:00'),
(42, 'Carter', 'lorem.ac.risus@seddolorFusce.ca', '2000-09-02 21:00:00', 'MYX92FSX0QN', 'WHL09ULL4TN', '2020-10-01 21:00:00', '2021-03-31 21:00:00'),
(43, 'Shad', 'sem.mollis@faucibus.edu', '1993-04-09 21:00:00', 'JDB64DAU3SB', 'NJH74HCF0GJ', '2022-02-05 22:00:00', '2021-09-04 21:00:00'),
(44, 'Casey', 'eu.ligula@in.com', '1992-11-16 22:00:00', 'RZA11XFR9TY', 'WBW78FJY9VS', '2021-10-05 21:00:00', '2022-03-20 22:00:00'),
(45, 'Avery', 'faucibus.id@egestasnuncsed.co.uk', '2011-01-02 22:00:00', 'XXO83DPB1EH', 'HFP14JGF2LJ', '2020-07-21 21:00:00', '2020-07-23 21:00:00'),
(46, 'Robinson', 'scelerisque@luctuslobortis.co.uk', '2008-06-01 21:00:00', 'EXK55WPJ7WZ', 'LNH41TDN4CV', '2020-12-10 22:00:00', '2022-05-02 21:00:00'),
(47, 'Mari', 'lectus.pede.ultrices@feugiatmetussit.edu', '2016-07-23 21:00:00', 'LYC55ZEM7DN', 'HRH13TSU4BR', '2022-04-21 21:00:00', '2022-03-29 21:00:00'),
(48, 'Sloane', 'Praesent@Aeneanegetmagna.org', '2016-07-30 21:00:00', 'KPA17ZRI7PF', 'ISL46UXI0KS', '2021-05-19 21:00:00', '2020-11-29 22:00:00'),
(49, 'Hendrix', 'et.magnis@risusvariusorci.ca', '2021-02-05 22:00:00', 'BOA19VZK4SN', 'YTL12VSR8TL', '2020-07-13 21:00:00', '2021-07-18 21:00:00'),
(50, 'Melvin', 'Nullam@iaculisquis.edu', '2000-12-29 22:00:00', 'MBO40VAH0UK', 'MHC64WYR2OW', '2021-03-14 22:00:00', '2020-08-11 21:00:00'),
(51, 'Shana', 'Morbi.sit@quispedeSuspendisse.org', '2008-02-20 22:00:00', 'IGG33DBN2HF', 'SES30QST1UQ', '2022-05-10 21:00:00', '2021-01-08 22:00:00'),
(52, 'Walls', 'gravida@egetvolutpatornare.edu', '2004-12-21 22:00:00', 'DTQ88BOD1GV', 'ZFI83WGM6FP', '2022-05-27 21:00:00', '2020-09-07 21:00:00'),
(53, 'Paki', 'feugiat.Lorem@Donecluctusaliquet.net', '1999-03-02 22:00:00', 'QWC66WXA3SM', 'AJW57VDH9TQ', '2020-10-13 21:00:00', '2021-07-06 21:00:00'),
(54, 'Stephanie', 'tincidunt.vehicula.risus@ultricesiaculisodio.org', '2017-03-04 22:00:00', 'ZDF14GRO0OD', 'JIJ88EPR6WR', '2021-09-29 21:00:00', '2022-05-11 21:00:00'),
(55, 'Mona', 'ridiculus@ac.edu', '2008-02-01 22:00:00', 'QQB33XOU7RO', 'LKH18IYC6GD', '2022-02-27 22:00:00', '2020-07-05 21:00:00'),
(56, 'Rina', 'blandit@pedemalesuada.ca', '1984-07-27 21:00:00', 'FNQ68JUP9NI', 'QVH91JHF2KL', '2022-04-24 21:00:00', '2022-01-24 22:00:00'),
(57, 'Chase', 'Phasellus.dapibus@tempus.com', '1987-06-25 21:00:00', 'CML64NGL1KF', 'DVQ20HIE0IA', '2021-02-22 22:00:00', '2021-11-24 22:00:00'),
(58, 'Trevino', 'nec.urna.et@convallisligula.com', '1984-05-25 21:00:00', 'LUF06RBP6EI', 'ENC45IWU5QM', '2021-01-11 22:00:00', '2022-02-02 22:00:00'),
(59, 'Gay', 'sed.dolor@Pellentesquehabitantmorbi.ca', '2017-02-16 22:00:00', 'PBT62GBW9UW', 'LCJ43YBL3FU', '2021-01-21 22:00:00', '2021-04-11 21:00:00'),
(60, 'Moody', 'Cras.interdum.Nunc@eu.ca', '2013-04-04 21:00:00', 'UYC25CFK3YI', 'GXO88APD7EC', '2021-07-22 21:00:00', '2020-07-04 21:00:00'),
(61, 'Reid', 'risus@maurisidsapien.org', '2009-10-11 21:00:00', 'AKZ52FZL9ON', 'LBA28NTR2IV', '2021-08-17 21:00:00', '2021-11-13 22:00:00'),
(62, 'Miriam', 'Sed.pharetra.felis@sagittis.org', '1996-11-10 22:00:00', 'XLW68IVG9YT', 'PAQ32TPV0AF', '2020-08-16 21:00:00', '2020-09-28 21:00:00'),
(63, 'Jemima', 'leo.Cras@fringillaestMauris.org', '1984-01-01 22:00:00', 'JPE75LQN2EK', 'WSW16HOD9EO', '2020-11-05 22:00:00', '2021-11-22 22:00:00'),
(64, 'Oliver', 'lectus.Nullam@nec.edu', '1984-06-05 21:00:00', 'JLT63ZHH6MR', 'ZGC27IZX5OC', '2022-03-28 21:00:00', '2020-10-28 22:00:00'),
(65, 'Abbot', 'lobortis@dignissimlacusAliquam.co.uk', '2005-04-13 21:00:00', 'HKJ06BZB6GT', 'HMJ14YQD1XE', '2020-11-28 22:00:00', '2021-07-13 21:00:00'),
(66, 'Alec', 'purus.sapien@magna.net', '2005-05-12 21:00:00', 'RHB38SSM6FZ', 'APB86AAT8ZE', '2021-05-08 21:00:00', '2022-05-03 21:00:00'),
(67, 'Denton', 'Phasellus.vitae.mauris@magnaLorem.com', '1985-11-16 22:00:00', 'MGZ99KWL4BY', 'TFP02UOC0ZF', '2020-10-19 21:00:00', '2021-05-21 21:00:00'),
(68, 'Dai', 'Mauris.vel.turpis@eunulla.ca', '2003-03-13 22:00:00', 'ZCN69RFU8FM', 'UDT57JVG2MB', '2022-04-06 21:00:00', '2022-03-22 22:00:00'),
(69, 'Mcdaniel', 'neque.Nullam@ametconsectetuer.ca', '1999-04-04 21:00:00', 'QWM01JDB2HA', 'ZPM33PNG4UO', '2021-06-04 21:00:00', '2021-02-10 22:00:00'),
(70, 'Church', 'dictum@Nullamscelerisque.ca', '2006-06-12 21:00:00', 'QLQ95JEZ2KR', 'QPM95XGI8BH', '2020-11-10 22:00:00', '2021-10-05 21:00:00'),
(71, 'Jason', 'Proin.eget.odio@ullamcorperviverraMaecenas.org', '1993-01-18 22:00:00', 'DTR61TPH8SC', 'YBM72HTV0GM', '2022-06-22 21:00:00', '2022-04-25 21:00:00'),
(72, 'Mann', 'varius.Nam@lorem.net', '2009-08-09 21:00:00', 'GRR02HZV0BX', 'TLY68XBW3ZS', '2020-10-17 21:00:00', '2021-03-26 22:00:00'),
(73, 'Levy', 'ultricies@mauris.ca', '1985-06-24 21:00:00', 'LZX36XBB3HL', 'XUS47JYU3SH', '2022-05-08 21:00:00', '2021-10-11 21:00:00'),
(74, 'Blake', 'a@temporaugue.org', '2001-02-02 22:00:00', 'FFB13AAA9MR', 'LDS02ZZY0SP', '2021-07-30 21:00:00', '2020-10-10 21:00:00'),
(75, 'Shields', 'lacus@atlacusQuisque.com', '2019-10-30 22:00:00', 'FNH65WVL8RH', 'QYX35CFO7EN', '2021-10-15 21:00:00', '2021-07-24 21:00:00'),
(76, 'Cote', 'nec@anteMaecenasmi.org', '2001-06-14 21:00:00', 'QAR05XCH3JK', 'UCW83BPP6BV', '2020-08-26 21:00:00', '2022-04-02 21:00:00'),
(77, 'Sebastian', 'ipsum@luctus.ca', '1989-10-27 22:00:00', 'SRL34TKI9OK', 'BMA24ZHY6QL', '2022-03-29 21:00:00', '2022-05-12 21:00:00'),
(78, 'Lott', 'nec.mauris.blandit@tellus.net', '2021-10-27 21:00:00', 'MCY25AQV2XE', 'OIF51WJY3KQ', '2022-04-30 21:00:00', '2021-09-06 21:00:00'),
(79, 'Erin', 'ac@orcilacusvestibulum.org', '1986-11-01 22:00:00', 'QFI40EFY1KC', 'TAV50GDJ1IV', '2021-08-27 21:00:00', '2022-05-18 21:00:00'),
(80, 'Ashton', 'Cras.vehicula@etnetuset.ca', '1990-12-12 22:00:00', 'CKI86EPF8IJ', 'MMH43TKJ2AC', '2020-09-04 21:00:00', '2021-06-26 21:00:00'),
(81, 'Lindsay', 'eleifend.Cras@id.co.uk', '2018-07-11 21:00:00', 'GGO02SHT4QE', 'XAU15AZF1ME', '2021-06-18 21:00:00', '2020-07-11 21:00:00'),
(82, 'Newton', 'tellus@nibh.ca', '2022-01-15 22:00:00', 'FKP82EAX7UW', 'OBE38BTF0XV', '2021-03-16 22:00:00', '2021-01-05 22:00:00'),
(83, 'Leonard', 'tempor@vulputateeu.net', '1997-02-12 22:00:00', 'FKX07UBO8AS', 'VSZ05SUW2NT', '2020-10-16 21:00:00', '2020-11-08 22:00:00'),
(84, 'Williams', 'molestie.tortor@nec.org', '1986-12-19 22:00:00', 'FSZ42UAM6WP', 'RGA32OSS8OO', '2020-11-25 22:00:00', '2022-03-17 22:00:00'),
(85, 'Ora', 'Lorem.ipsum.dolor@leoelementumsem.org', '2005-01-08 22:00:00', 'VQQ94ISW3ZP', 'XNV77RVP1LL', '2021-01-06 22:00:00', '2020-07-12 21:00:00'),
(86, 'Basia', 'elit@erosProinultrices.edu', '1985-04-23 21:00:00', 'CDV11MWJ7KA', 'NNS86SYX1UB', '2021-12-04 22:00:00', '2021-10-29 21:00:00'),
(87, 'Tatiana', 'risus@sapiengravida.edu', '2007-10-03 21:00:00', 'VOJ62CBZ0SJ', 'JXV17PHV4HB', '2021-12-26 22:00:00', '2020-12-12 22:00:00'),
(88, 'Booth', 'ullamcorper.magna.Sed@Ut.org', '2011-09-17 21:00:00', 'JKD27ARK4EJ', 'HUI34LWP0AI', '2020-06-24 21:00:00', '2021-01-03 22:00:00'),
(89, 'Caryn', 'sem.vitae@Quisqueliberolacus.edu', '2018-08-16 21:00:00', 'TFQ85ZPP0TU', 'AFS82NGS1AK', '2022-04-30 21:00:00', '2022-06-13 21:00:00'),
(90, 'Yuri', 'vel.lectus.Cum@convallisin.edu', '2011-03-03 22:00:00', 'NFJ74VRM4ML', 'JYS08ADR7QJ', '2022-03-13 22:00:00', '2021-07-17 21:00:00'),
(91, 'Brendan', 'Cras@etnetuset.ca', '2004-12-12 22:00:00', 'PSI07JVR3JC', 'IWX55ZIV7VS', '2020-09-13 21:00:00', '2020-09-27 21:00:00'),
(92, 'Kenyon', 'ipsum.Suspendisse.non@facilisislorem.edu', '1998-09-19 21:00:00', 'FBS85WGB0KD', 'DGW53QTG3YD', '2021-02-19 22:00:00', '2021-11-15 22:00:00'),
(93, 'Helen', 'mauris@Curae.net', '2000-11-05 22:00:00', 'NHQ33IFG6ZL', 'MTL24DXB0MS', '2021-10-20 21:00:00', '2020-10-17 21:00:00'),
(94, 'Sade', 'Donec.egestas.Duis@Cumsociisnatoque.ca', '2011-08-13 21:00:00', 'KAA72OHN9NL', 'FDM35JJU6UG', '2022-01-05 22:00:00', '2021-08-01 21:00:00'),
(95, 'Tanner', 'Nulla.eu@vehicularisus.edu', '1994-06-16 21:00:00', 'LRY00PLF8AA', 'WWF93YEI5IO', '2021-09-01 21:00:00', '2022-06-15 21:00:00'),
(96, 'Ross', 'purus.ac.tellus@Proinegetodio.ca', '2017-03-08 22:00:00', 'JST14HDT3OA', 'YXI38STO7AC', '2020-11-26 22:00:00', '2021-05-31 21:00:00'),
(97, 'Wright', 'turpis.egestas.Aliquam@metus.co.uk', '1988-05-21 21:00:00', 'FQA83BUW8CI', 'QPJ75ZSH8SO', '2021-12-21 22:00:00', '2021-05-04 21:00:00'),
(98, 'Blanchard', 'parturient.montes@rutrum.edu', '1994-08-12 21:00:00', 'MZN02XED7FZ', 'BUI35KTY4QG', '2020-09-17 21:00:00', '2022-05-13 21:00:00'),
(99, 'Iris', 'arcu.Sed.eu@volutpatnuncsit.net', '2009-06-17 21:00:00', 'LLG03WWL2DE', 'NFY03VZN8WT', '2021-03-31 21:00:00', '2021-10-06 21:00:00'),
(100, 'Landry', 'Suspendisse.commodo@lectusNullamsuscipit.net', '2019-03-07 22:00:00', 'ORM15LDF9BX', 'DTP03CRM0ZH', '2021-04-07 21:00:00', '2021-03-21 22:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_city`
--
ALTER TABLE `category_city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_topic`
--
ALTER TABLE `category_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `phrases`
--
ALTER TABLE `phrases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phrase_user`
--
ALTER TABLE `phrase_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` mediumint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `category_city`
--
ALTER TABLE `category_city`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `category_topic`
--
ALTER TABLE `category_topic`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `phrases`
--
ALTER TABLE `phrases`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `phrase_user`
--
ALTER TABLE `phrase_user`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
