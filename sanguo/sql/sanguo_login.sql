/*
Navicat MySQL Data Transfer

Source Server         : locast_3306
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : sanguo

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-03-12 21:50:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `sanguo_login`
-- ----------------------------
DROP TABLE IF EXISTS `sanguo_login`;
CREATE TABLE `sanguo_login` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `user_pwd` varchar(100) DEFAULT NULL,
  `user_money` int(200) DEFAULT '0',
  `user_gmoney` int(200) unsigned DEFAULT '0',
  `user_v` varchar(20) DEFAULT '0',
  `user_title` varchar(100) DEFAULT NULL,
  `user_power` int(100) DEFAULT NULL,
  `user_combat` int(200) NOT NULL DEFAULT '0',
  `user_order` int(100) DEFAULT NULL,
  `user_chapter` int(200) DEFAULT NULL,
  `main_role` int(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`user_combat`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sanguo_login
-- ----------------------------
INSERT INTO `sanguo_login` VALUES ('142', 'tang', '123123', '1231231', '1231231', '2', null, '100', '123123123', '142', null, '1');
