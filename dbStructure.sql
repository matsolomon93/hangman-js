SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- Database: `hangman`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `userid` int(2) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `chooseword` varchar(50) NOT NULL,
  `timestamp` TIMESTAMP,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

CREATE TABLE IF NOT EXISTS `guess` (
  `userid` int(2) NOT NULL,
  `guessword` varchar(50) NOT NULL,
  `guessletter` varchar(50) NOT NULL,
  `status` varchar(10),
  `oppid` int(2) NOT NULL,
  `timestamp` TIMESTAMP,
  PRIMARY KEY (`userid`, `oppid`,`guessword`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;
