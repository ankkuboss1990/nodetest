-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2021 at 05:49 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `seat_unique_id` bigint(15) NOT NULL,
  `row` varchar(50) NOT NULL,
  `seat_id` varchar(50) NOT NULL,
  `left_seat` varchar(50) DEFAULT NULL,
  `right_seat` varchar(50) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `rank_order` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`seat_unique_id`, `row`, `seat_id`, `left_seat`, `right_seat`, `status`, `rank_order`) VALUES
(1, 'a', 'a1', NULL, 'a2', 'A', 1),
(2, 'a', 'a3', 'a2', 'a4', 'A', 2),
(3, 'a', 'a2', 'a1', 'a3', 'A', 3),
(4, 'a', 'a4', 'a3', 'a5', 'A', 4),
(5, 'a', 'a5', 'a4', 'a6', 'A', 5),
(6, 'a', 'a6', 'a5', 'a7', 'A', 6),
(7, 'a', 'a7', 'a6', 'a8', 'A', 7),
(8, 'a', 'a8', 'a7', 'a9', 'A', 8),
(9, 'a', 'a9', 'a8', 'a10', 'A', 9),
(10, 'a', 'a10', NULL, NULL, 'A', 10),
(11, 'b', 'a1', NULL, 'a2', 'A', 2),
(12, 'b', 'a3', 'a2', 'a4', 'A', 3),
(13, 'b', 'a2', 'a1', 'a3', 'A', 4),
(14, 'b', 'a4', 'a3', 'a5', 'A', 5),
(15, 'b', 'a5', 'a4', 'a6', 'A', 6),
(16, 'b', 'a6', 'a5', 'a7', 'A', 7),
(17, 'b', 'a7', 'a6', 'a8', 'A', 8),
(18, 'b', 'a8', 'a7', 'a9', 'A', 9),
(19, 'b', 'a10', 'a9', NULL, 'A', 11),
(20, 'b', 'a9', 'a8', 'a10', 'A', 10),
(21, 'b', 'b1', NULL, 'b2', 'A', 3),
(22, 'b', 'b3', 'b2', 'b4', 'A', 4),
(23, 'b', 'b2', 'b1', 'b3', 'A', 5),
(24, 'b', 'b4', 'b3', 'b5', 'A', 6),
(25, 'b', 'b5', 'b4', 'b6', 'A', 7),
(26, 'b', 'b6', 'b5', 'b7', 'A', 8),
(27, 'b', 'b7', 'b6', 'b8', 'A', 9),
(28, 'b', 'b8', 'b7', 'b9', 'A', 10),
(29, 'b', 'b9', 'b8', 'b10', 'A', 11),
(30, 'b', 'b10', 'b9', '', 'A', 12),
(31, 'c', 'c1', '', 'c2', 'A', 4),
(32, 'c', 'c3', 'c2', 'c4', 'A', 5),
(33, 'c', 'c2', 'c1', 'c3', 'A', 6),
(34, 'c', 'c4', 'c3', 'c5', 'A', 7),
(35, 'c', 'c5', 'c4', 'c6', 'A', 8),
(36, 'c', 'c6', 'c5', 'c7', 'A', 9),
(37, 'c', 'c7', 'c6', 'c8', 'A', 10),
(38, 'c', 'c8', 'c7', 'c9', 'A', 11),
(39, 'c', 'c9', 'c8', 'c10', 'A', 12),
(40, 'c', 'c10', 'c9', '', 'A', 13),
(41, 'd', 'd1', '', 'd2', 'A', 5),
(42, 'd', 'd3', 'd2', 'd4', 'A', 6),
(43, 'd', 'd2', 'd1', 'd3', 'A', 7),
(44, 'd', 'd4', 'd3', 'd5', 'A', 8),
(45, 'd', 'd5', 'd4', 'd6', 'A', 9),
(46, 'd', 'd6', 'd5', 'd7', 'A', 10),
(47, 'd', 'd7', 'd6', 'd8', 'A', 11),
(48, 'd', 'd8', 'd7', 'd9', 'A', 12),
(49, 'd', 'd9', 'd8', 'd10', 'A', 13),
(50, 'd', 'd10', 'd9', '', 'A', 14);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`seat_unique_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `seat_unique_id` bigint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
