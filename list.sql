/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 1801

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-16 20:49:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) unsigned DEFAULT NULL,
  `del_price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', 'img/list01.jpg', '花王（Merries）纸尿裤 NB90片 新生儿尿不湿（0-5kg）包邮包税', '105.00', '158.00');
INSERT INTO `list` VALUES ('2', 'img/list02.jpg', '日本花王(Merries)妙而舒纸尿裤 小号S82片(4-8kg)包邮包税 原装进口', '112.00', '158.00');
INSERT INTO `list` VALUES ('3', 'img/list03.jpg', '日本花王(Merries)妙而舒纸尿裤 中号M64片(6-11kg) 包邮包税原装进口', '105.00', '158.00');
INSERT INTO `list` VALUES ('4', 'img/list04.jpg', '日本尤妮佳(MOONY)婴儿纸尿裤 小号 S84片(4-8kg) 包邮包税原装进口', '95.00', '149.00');
INSERT INTO `list` VALUES ('5', 'img/list05.jpg', '日本尤妮佳(MOONY)婴儿纸尿裤 中号 M64片(6-11kg) 包邮包税v原装进口', '95.00', '149.00');
INSERT INTO `list` VALUES ('6', 'img/list06.jpg', '日本尤妮佳(MOONY)婴儿纸尿裤 大号 L54片(9-14kg) 包邮包税原装进口', '105.00', '149.00');
INSERT INTO `list` VALUES ('7', 'img/list07.jpg', '日本尤妮佳(MOONY)婴儿拉拉裤 学步裤 男 大号 L44片(9-14kg) 包邮包税', '96.00', '149.00');
INSERT INTO `list` VALUES ('8', 'img/list08.jpg', '日本尤妮佳(MOONY)婴儿拉拉裤 学步裤 女 大号 L44片(9-14kg) 包邮包税', '96.00', '149.00');
INSERT INTO `list` VALUES ('9', 'img/list09.jpg', '日本尤妮佳(MOONY)婴儿拉拉裤 学步裤 男 加大号XL38片(12-17kg) 包邮包税', '96.00', '149.00');
INSERT INTO `list` VALUES ('10', 'img/list10.jpg', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 新生儿NB90片(0-5kg) 包邮包税', '96.00', '149.00');
INSERT INTO `list` VALUES ('11', 'img/list11.jpg', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 新生儿NB90片(0-5kg) 包邮包税', '99.00', '128.00');
INSERT INTO `list` VALUES ('12', 'img/list12.jpg', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 小号S84片(4-8kg) 包邮包税', '99.00', '129.00');
INSERT INTO `list` VALUES ('13', 'img/list13.jpg', '日本尤妮佳(MOONY)婴儿拉拉裤 学步裤 男 加大号XL38片(12-17kg) 包邮包税', '96.00', '149.00');
INSERT INTO `list` VALUES ('14', 'img/list14.jpg', '日本尤妮佳(MOONY)婴儿拉拉裤 学步裤 女 加大号XL38片(12-17kg)包邮包税', '96.00', '149.00');
INSERT INTO `list` VALUES ('15', 'img/list15.jpg', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 新生儿NB90片(0-5kg) 包邮包税', '99.00', '128.00');
INSERT INTO `list` VALUES ('16', 'img/list16.jpg', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 小号S84片(4-8kg) 包邮包税', '99.00', '129.00');
INSERT INTO `list` VALUES ('17', 'img/list16.jpg', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 中号M64(6-11kg) 包邮包税', '99.00', '119.00');
INSERT INTO `list` VALUES ('18', 'img/list18.jpg', '日本大王(GOO.N) 维E系列 婴儿纸尿裤 大号L54片(9-14kg) 原装进口', '99.00', '119.00');
INSERT INTO `list` VALUES ('19', 'img/list19.jpg', '日本大王(GOO.N) 维E系列 拉拉裤 学步裤训练裤 男 L44片(9-14kg) 包邮包税', '99.00', '109.00');
INSERT INTO `list` VALUES ('20', 'img/list20.jpg', '日本大王(GOO.N) 维E系列 拉拉裤 学步裤训练裤 女 L44片(9-14kg) 包邮包税', '99.00', '109.00');
INSERT INTO `list` VALUES ('21', 'img/list21.jpg', '日本大王(GOO.N) 维E系列 拉拉裤 学步裤训练裤 男 XL38片(12-20kg) 包邮包税', '99.00', '119.00');
INSERT INTO `list` VALUES ('22', 'img/list22.jpg', '日本大王(GOO.N) 维E系列 拉拉裤 学步裤训练裤 女 XL38片(12-20kg) 包邮包税', '99.00', '119.00');
SET FOREIGN_KEY_CHECKS=1;
