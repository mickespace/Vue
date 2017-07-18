/*
Navicat MySQL Data Transfer

Source Server         : BSTAR_Website
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : bstar

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-07-18 16:21:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Contract` longtext,
  `Phone` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Postcode` varchar(255) DEFAULT NULL,
  `RegisterDate` datetime DEFAULT NULL,
  `Record` varchar(255) DEFAULT NULL,
  `VideoUrl` varchar(255) DEFAULT NULL,
  `ImgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company
-- ----------------------------

-- ----------------------------
-- Table structure for example
-- ----------------------------
DROP TABLE IF EXISTS `example`;
CREATE TABLE `example` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Abstract` varchar(255) DEFAULT NULL,
  `Content` longtext,
  `Keyword` varchar(255) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `Partner` varchar(255) DEFAULT NULL,
  `ImgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of example
-- ----------------------------

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `CreateTime` varchar(255) DEFAULT NULL,
  `EndTime` varchar(255) DEFAULT NULL,
  `Content` longtext,
  `Type` int(255) DEFAULT NULL,
  `Status` int(255) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES ('5', '工程部实施工程师', '广东省深圳市南山区同沙路凯达尔大厦A座', '2016-08-15', '2016-11-15', '<p style=\"line-height: 1.5em;\"><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">主要职责：</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">1、根据项目要求，负责BIM方案规划、用户调研、需求分析、产品设计、运营方案设计等；</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">2、配合技术研发团队，编写产品文档，管理项目进度，承担BIM平台运营维护工作；</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">3、负责给项目甲方进行BIM平台功能操作应用培训，沟通协调BIM平台应用中的问题；</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">4、负责用户挖掘，积极收集用户反馈，分析数据，持续改进平台产品。</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">岗位要求：</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">&nbsp;1、土木工程或计算机相关专业本科生或研究生，较好的沟通协调能力； </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">&nbsp;2、了解VS.NET开发环境；对C#、Java等语言编程有一定了解；熟悉数据库应用和开发技术； </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">&nbsp;3、熟悉流行的BIM软件，具有BIM或Web3D产品开发工作经验、CAD、Revit等软件二次开发经验者优先； </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">&nbsp;4、熟悉BIM项目产品实施过程，包括市场分析、需求分析、产品功能设计、业务流程设计、界面设计、用户研究和可用性测试等； </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">&nbsp;5、身体健康，工作认真负责、积极主动，服务意识强； </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei;\">&nbsp;6、具有较强的学习能力、沟通能力、组织协调能力和良好的团队协作精神。</span></p>', '0', '0', '1');
INSERT INTO `job` VALUES ('14', '.NET开发工程师（WPF，ASP.NET，Xamarin方向）  ', '广东省深圳市南山区同沙路凯达尔大厦A座', '2016-08-15', '2016-11-15', '<p style=\"text-indent: 0em;\">职位描述</p><p style=\"line-height: 1.5em;\">设计及开发数据库驱动的Win32应用，Web应用，及跨平台手机APP。</p><p>岗位要求：</p><p style=\"line-height: 2em;\">1、计算机、软件、土木工程等相关专业；<br/> 2、1-3年.NET开发经验或者优秀应届毕业生，熟练掌握一种或了解多种.NET开发框架；<br/> 3、熟练掌握主流数据库，如SQL&nbsp;Server，MySQL，熟悉XML，Json，Web&nbsp;service及相关技术，熟悉Html/Javascript/AJAX，能实现页面报表的展现；&nbsp;<br/> 4、熟悉WPF开发，熟练掌握XAML标记语言，能够自定义控件；<br/> 5、有土木工程专业背景以及有移动APP开发经验者优先考虑。</p>', '0', '0', '0');
INSERT INTO `job` VALUES ('15', '.NET开发工程师（WPF，ASP.NET，Xamarin方向）  ', '广东省深圳市清华大学研究生院', '2016-09-22', '2016-12-31', '<p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">1、计算机、软件、电子信息、土木工程、数学、物理等相关专业</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">2、熟练掌握一种或了解多种.NET开发框架</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">3、熟练掌握主流数据库，如SQL Server，MySQL，熟悉XML，Json，Web service及相关技术，</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">4、熟悉Html/Javascript/AJAX，能实现页面报表的展现</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">5、熟悉WPF开发，熟练掌握XAML标记语言，能够自定义控件</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">6、土木工程专业背景以及有移动APP开发经验者优先考虑</span></p>', '1', '0', '0');
INSERT INTO `job` VALUES ('16', 'IOS开发工程师', '广东省深圳市清华大学研究生院', '2016-09-22', '2016-12-31', '<p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">1、 计算机、信息技术或相关专业本科或以上学历；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">2、精通Objective-C编程，具备扎实的C/C 编程基础，能独立开发高性能的IOS应用，能熟练阅读中文、英文技术文档；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">3、良好的学习能力、团队沟通能力和工作主动性；</span></p>', '1', '0', '0');
INSERT INTO `job` VALUES ('17', '安卓开发工程师', '广东省深圳市清华大学研究生院', '2016-09-22', '2016-12-31', '<p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">1、 计算机、信息技术或相关专业本科或以上学历；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">2、 有扎实的JAVA的基础，良好的编程习惯，能够从事安卓移动端开发和网站的设计开发；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">3、 熟悉Android&nbsp;OS体系结构，熟悉Android&nbsp;SDK、对Android应用结构有深刻的认识，独立开发并发布过Android应用者优先；</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">4、 对高性能程序设计、结构有较多的经验；</span><span style=\"font-size:16px;font-family:\">&nbsp;</span></p>', '1', '0', '0');
INSERT INTO `job` VALUES ('18', 'Java高级工程师', '广东省深圳市清华大学研究生院', '2016-09-22', '2016-12-31', '<p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">1、 计算机、信息技术或相关专业本科或以上学历；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">2、 有扎实的JAVA的基础，良好的编程习惯，能够从事安卓开发和网站的设计开发；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">3、 对高性能程序设计、结构有较多的工程经验；&nbsp;</span></p>', '1', '0', '0');
INSERT INTO `job` VALUES ('19', 'C#高级工程师', '广东省深圳市清华大学研究生院', '2016-09-22', '2016-12-31', '<p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">1、&nbsp;精通C#语言和.Net框架；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">2、&nbsp;精通WPF开发；&nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">3、&nbsp;精通Oracle、Mysql、MS-SQLSERVER等常用数据库的架构设计和优化技术；&nbsp; &nbsp; </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">4、&nbsp;良好的沟通与表达能力，工作积极主动，有上进心和创新精神，愿意了解未知领域的问题，承压能力强。</span></p>', '1', '0', '0');
INSERT INTO `job` VALUES ('20', '销售工程师', '广东省深圳市南山区同沙路凯达尔大厦A座', '2016-09-22', '2016-12-31', '<p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">1、专业不限（市场营销或经济管理优先，应届毕业生有创业或兼职经验者亦可；工作经验丰富者，可考虑大专）。</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">2、能适应经常性的出差，或常驻业务区域工作，可以独立的开展区域销售工作。</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">3、思维能力强，工作作风严谨，责任心强。</span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">4、有良好的团队合作精神，能迅速融入企业。 </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">5、对个人要求严格、且积极主动、敢于挑战。 </span></p><p><span style=\"font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;\">6、具有良好的人际沟通能力，极具开拓进取精神。</span></p>', '0', '0', '0');

-- ----------------------------
-- Table structure for modules
-- ----------------------------
DROP TABLE IF EXISTS `modules`;
CREATE TABLE `modules` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Abstract` varchar(255) DEFAULT NULL,
  `Content` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `CreateUser` varchar(255) DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `Keyword` varchar(255) DEFAULT NULL,
  `ImgUrl` varchar(255) DEFAULT NULL,
  `Source` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of modules
-- ----------------------------

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `Id` int(255) NOT NULL AUTO_INCREMENT,
  `Type` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Abstract` longtext,
  `Content` longtext,
  `ImgUrl` longtext,
  `Source` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `ModifyUserId` int(11) DEFAULT NULL,
  `ModifyDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Abstract` varchar(255) DEFAULT NULL,
  `Content` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `CreateUser` varchar(255) DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `Keyword` varchar(255) DEFAULT NULL,
  `ImgUrl` varchar(255) DEFAULT NULL,
  `Source` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `Sex` int(11) DEFAULT NULL,
  `RegisterDate` datetime DEFAULT NULL,
  `LoginDate` datetime DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Talk` longtext,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
