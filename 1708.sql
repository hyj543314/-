/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 1708

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:40:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品分类',
  `color` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `size` double(255,0) DEFAULT NULL,
  `add_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '爱心暖手宝', '98.00', '1', '爱是捧在手心精心呵护，爱也是想你的时候会心一笑。不要让遇见只留下回忆，爱从来不需要等待。爱心暖手宝随时随地，温暖随行，这个冬日给你不一样的温暖。', 'img/goods01.png', null, null, null, '2018-02-07 19:16:27');
INSERT INTO `goods` VALUES ('2', '暖暖杯', '138.00', '1', '暖心暖胃，养生好帮手，开启你的暖心之旅；恒温安全智能，自动保温，开启你的恒温之旅。美好的一天从早晨醒来的第一杯温水开始。55°这温度刚刚好，暖暖杯，一款有温度的养生杯！', 'img/goods02.png', null, null, null, '2018-02-07 19:23:45');
INSERT INTO `goods` VALUES ('3', '海贝暖手宝', '148.00', '1', '灵感源自贝壳，外形优美，晶莹透亮丝滑手感，让人爱不释手。内嵌双面镜，纯净镜面，每次开启都能看到珍珠般闪亮的自己~双面发热，温暖加倍，捧在手心里的暖炉。这个冬日有海贝随行，时刻保持优雅，随时随地想美更美。', 'img/goods03.png', null, null, null, '2018-02-07 19:25:31');
INSERT INTO `goods` VALUES ('4', '吉小旺', '216.00', '1', '明明能靠一脸萌来吃饭，偏偏要靠肚里的音响~用音乐帮你减压，用呆萌为你舒畅心情', 'img/goods04.png', null, null, null, '2018-02-07 19:27:07');
INSERT INTO `goods` VALUES ('5', '爱心感温杯', '108.10', '1', 'Heart Tea。当你拿起茶杯，杯身上的略微凸出的心形就会闪烁迷人的颜色！蓝色，表示水温为0～35度；橘色，表示水温为35～75度；红色则表示温度在75~90度以上，提醒你慢慢喝，不然会烫口！', 'img/goods05.png', null, null, null, '2018-02-07 19:29:06');
INSERT INTO `goods` VALUES ('6', '为你闪亮', '48.90', '1', '为你闪亮小鸟随手灯时尚美观，创意实用。可充电调光，电池使用持久且环保节能。触碰设计方便使用。光线柔和不刺眼，常伴您进入梦乡。 更有个性定制内容，打造专属你的时尚哦！', 'img/goods06.png', null, null, null, '2018-02-07 19:34:03');
INSERT INTO `goods` VALUES ('7', '我只在乎你', '138.80', '1', '即使用一万句不同语言的“我爱你”也不足以表达我对你的爱意，不如将表白寄语代表浓情蜜意的巧克力，让你感受到不一样的惊喜和贴心。巧克力的味道就像是爱情的味道', 'img/goods07.png', null, null, null, '2018-02-07 19:43:19');
INSERT INTO `goods` VALUES ('8', '今生相依', '108.80', '1', '自从有了你，我的思念之花就那么盛开了。牵挂的感觉袭遍我的全身，你不会知道我一个人是多么疯狂的想你，今生只与你相恋相依偎！', 'img/goods08.png', null, null, null, '2018-02-07 19:36:21');
INSERT INTO `goods` VALUES ('9', '忠犬小白', '128.80', '1', '简直要萌化了~顽皮的宠物有了大大的实力，会会用肚子来唱歌，会用长相来搞siao，会用夜灯来伴你入睡，会让你不时牵挂送你这份礼物的TA', 'img/goods09.png', null, null, null, '2018-02-07 19:37:44');
INSERT INTO `goods` VALUES ('10', '猴爱你', '148.80', '1', '萨诺猴音乐枕，是一款吉祥音乐枕。它戴着耳机，神情放松地聆听音乐，造型非常时尚。萨诺猴音乐枕配有高品质扬声器，面料摸起来柔软舒服。抱着它，感受它的柔软、聆听音乐的畅快吧！', 'img/goods10.png', null, null, null, '2018-02-07 19:38:23');
INSERT INTO `goods` VALUES ('11', '美好的你', '189.80', '1', '告别光线陷阱，呈现您美好妆容，美好的你，适合这盏时尚低奢简约的化妆镜收纳台灯。 模拟自然光，你本来就很美；贴心小收纳，告别零乱；简约生活，尽在细节。', 'img/goods11.png', null, null, null, '2018-02-07 19:39:01');
INSERT INTO `goods` VALUES ('12', '马上有梦想', '178.90', '1', '“马上有钱”是对好友亲人一个美好祝愿，我们兢兢业业努力工作，就是希望给身边的家人一个更好的未来更优质的生活，身后可以放八枚银币，祝福发大财哟！', 'img/goods12.png', null, null, null, '2018-02-07 19:40:38');
INSERT INTO `goods` VALUES ('13', '生日烛光', '168.90', '1', '简洁方形系列柔抱枕，选材柔软舒适，做工精致、品质优良，内衬太空记忆棉。作为抱枕，靠枕或使用，带给您一份动感及柔和的韵律，极具时尚气息。车用居家两相宜。为TA量身定制一个独一无二的抱枕吧，舒适实用的一份礼物~', 'img/goods13.png', null, null, null, '2018-02-07 19:41:02');
INSERT INTO `goods` VALUES ('14', '神烦狗', '98.80', '1', '高品质神烦狗doge狗头抱枕，个性3D仿真设计，让你觉得这就是活生生的一头狗啊！在光棍节愚人节拿出来估计会让很多小伙伴都惊呆了哦~它不仅仅是外形创意独特，也是超级实用的靠枕呢', 'img/goods14.png', null, null, null, '2018-02-07 19:41:57');
INSERT INTO `goods` VALUES ('15', '男神风范', '199.80', '1', '每一次不经意抬起的手腕，都是你在乎的时光流动，而我们在乎的，就是精准地向你展示每一秒钟，不论场合，不论哪一刻，一份好的礼物，一种男士的风范', 'img/goods15.png', null, null, null, '2018-02-07 19:43:13');
INSERT INTO `goods` VALUES ('16', '四叶草之恋', '138.80', '1', '四叶草，第一片叶子代表希望；第二篇叶子代表信心；第三片叶子代表爱情；第四片叶子代表幸运。我想把这四片叶子都送给你，希望你带着希望、怀着信心、收获爱情、然后一辈子永远都那么幸运，跟你喜欢的那个人，永不相离哦！', 'img/goods16.png', null, null, null, '2018-02-07 19:44:01');
INSERT INTO `goods` VALUES ('17', '酷玩音乐台灯', '128.90', '1', '可充电USB节能灯，触摸台灯音箱。新颖的外形及吊灯的设计，使得整个产品不管是家居还是办公，都会增添不少亮色气氛。全封闭灯罩及灯体设计，防尘，易清洁； 迷你音响', 'img/goods17.png', null, null, null, '2018-02-07 19:44:44');
INSERT INTO `goods` VALUES ('18', '爱的旋律', '158.90', '1', '设计巧妙，每个零部件都经过精细车工制作。白色钢琴音乐盒清新淡雅，诗情画意。暗藏首饰格，在绒布台里面放上戒指，给TA一份意想不到的惊喜', 'img/goods18.png', null, null, null, '2018-02-07 19:45:20');
INSERT INTO `goods` VALUES ('19', '花儿朵朵开', '138.80', '1', '转呀转，就真的遇见Mr.right ~花朵的旋转木马音乐盒，打开还有闪闪渐变的LED灯光~让黑夜瞬间从喧哗转成了宁静，在静谧的夜晚，与心爱的人一起漫步田间小道该是多么美好呢！', 'img/goods19.png', null, null, null, '2018-02-07 19:45:52');
INSERT INTO `goods` VALUES ('20', '温暖你星窝', '98.80', '1', '总是在你需要的时刻，给你温暖，总是在你需要能量的时候，为你充电，冬天，寒冷不再可怕', 'img/goods20.png', null, null, null, '2018-02-07 19:46:28');
INSERT INTO `goods` VALUES ('21', '海贝暖手宝', '148.00', '1', '爱是捧在手心精心呵护，爱也是想你的时候会心一笑。不要让遇见只留下回忆，爱从来不需要等待。爱心暖手宝随时随地，温暖随行，这个冬日给你不一样的温暖。', 'img/goods21.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('22', '吉小旺', '216.00', '1', '暖心暖胃，养生好帮手，开启你的暖心之旅；恒温安全智能，自动保温，开启你的恒温之旅。美好的一天从早晨醒来的第一杯温水开始。55°这温度刚刚好，暖暖杯，一款有温度的养生杯！', 'img/goods22.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('23', '爱心感温杯', '108.10', '1', '灵感源自贝壳，外形优美，晶莹透亮丝滑手感，让人爱不释手。内嵌双面镜，纯净镜面，每次开启都能看到珍珠般闪亮的自己~双面发热，温暖加倍，捧在手心里的暖炉。这个冬日有海贝随行，时刻保持优雅，随时随地想美更美。', 'img/goods23.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('24', '为你闪亮', '48.90', '1', '明明能靠一脸萌来吃饭，偏偏要靠肚里的音响~用音乐帮你减压，用呆萌为你舒畅心情', 'img/goods24.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('25', '我只在乎你', '138.80', '1', 'Heart Tea。当你拿起茶杯，杯身上的略微凸出的心形就会闪烁迷人的颜色！蓝色，表示水温为0～35度；橘色，表示水温为35～75度；红色则表示温度在75~90度以上，提醒你慢慢喝，不然会烫口！', 'img/goods25.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('26', '今生相依', '108.80', '1', '为你闪亮小鸟随手灯时尚美观，创意实用。可充电调光，电池使用持久且环保节能。触碰设计方便使用。光线柔和不刺眼，常伴您进入梦乡。 更有个性定制内容，打造专属你的时尚哦！', 'img/goods26.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('27', '忠犬小白', '128.80', '1', '即使用一万句不同语言的“我爱你”也不足以表达我对你的爱意，不如将表白寄语代表浓情蜜意的巧克力，让你感受到不一样的惊喜和贴心。巧克力的味道就像是爱情的味道', 'img/goods27.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('28', '猴爱你', '148.80', '1', '自从有了你，我的思念之花就那么盛开了。牵挂的感觉袭遍我的全身，你不会知道我一个人是多么疯狂的想你，今生只与你相恋相依偎！', 'img/goods28.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('29', '美好的你', '189.80', '1', '简直要萌化了~顽皮的宠物有了大大的实力，会会用肚子来唱歌，会用长相来搞siao，会用夜灯来伴你入睡，会让你不时牵挂送你这份礼物的TA', 'img/goods29.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('30', '马上有梦想', '178.90', '1', '萨诺猴音乐枕，是一款吉祥音乐枕。它戴着耳机，神情放松地聆听音乐，造型非常时尚。萨诺猴音乐枕配有高品质扬声器，面料摸起来柔软舒服。抱着它，感受它的柔软、聆听音乐的畅快吧！', 'img/goods30.png', null, null, null, '2018-02-07 19:49:08');
INSERT INTO `goods` VALUES ('31', '今生相依', '108.80', '1', '告别光线陷阱，呈现您美好妆容，美好的你，适合这盏时尚低奢简约的化妆镜收纳台灯。 模拟自然光，你本来就很美；贴心小收纳，告别零乱；简约生活，尽在细节。', 'img/goods31.png', null, null, null, '2018-02-07 20:47:41');
INSERT INTO `goods` VALUES ('32', '忠犬小白', '128.80', '1', '“马上有钱”是对好友亲人一个美好祝愿，我们兢兢业业努力工作，就是希望给身边的家人一个更好的未来更优质的生活，身后可以放八枚银币，祝福发大财哟！', 'img/goods32.png', null, null, null, '2018-02-07 20:47:51');
INSERT INTO `goods` VALUES ('33', '猴爱你', '148.80', '1', '简洁方形系列柔抱枕，选材柔软舒适，做工精致、品质优良，内衬太空记忆棉。作为抱枕，靠枕或使用，带给您一份动感及柔和的韵律，极具时尚气息。车用居家两相宜。为TA量身定制一个独一无二的抱枕吧，舒适实用的一份礼物~', 'img/goods33.png', null, null, null, '2018-02-07 20:47:59');
INSERT INTO `goods` VALUES ('34', '美好的你', '189.80', '1', '高品质神烦狗doge狗头抱枕，个性3D仿真设计，让你觉得这就是活生生的一头狗啊！在光棍节愚人节拿出来估计会让很多小伙伴都惊呆了哦~它不仅仅是外形创意独特，也是超级实用的靠枕呢', 'img/goods34.png', null, null, null, '2018-02-07 20:48:04');
INSERT INTO `goods` VALUES ('35', '马上有梦想', '178.90', '1', '每一次不经意抬起的手腕，都是你在乎的时光流动，而我们在乎的，就是精准地向你展示每一秒钟，不论场合，不论哪一刻，一份好的礼物，一种男士的风范', 'img/goods35.png', null, null, null, '2018-02-07 20:48:09');
INSERT INTO `goods` VALUES ('36', '生日烛光', '168.90', '1', '四叶草，第一片叶子代表希望；第二篇叶子代表信心；第三片叶子代表爱情；第四片叶子代表幸运。我想把这四片叶子都送给你，希望你带着希望、怀着信心、收获爱情、然后一辈子永远都那么幸运，跟你喜欢的那个人，永不相离哦！', 'img/goods36.png', null, null, null, '2018-02-07 20:48:16');
INSERT INTO `goods` VALUES ('37', '神烦狗', '98.80', '1', '可充电USB节能灯，触摸台灯音箱。新颖的外形及吊灯的设计，使得整个产品不管是家居还是办公，都会增添不少亮色气氛。全封闭灯罩及灯体设计，防尘，易清洁； 迷你音响', 'img/goods37.png', null, null, null, '2018-02-07 20:48:22');
INSERT INTO `goods` VALUES ('38', '男神风范', '199.80', '1', '设计巧妙，每个零部件都经过精细车工制作。白色钢琴音乐盒清新淡雅，诗情画意。暗藏首饰格，在绒布台里面放上戒指，给TA一份意想不到的惊喜', 'img/goods38.png', null, null, null, '2018-02-07 20:48:27');
INSERT INTO `goods` VALUES ('39', '四叶草之恋', '138.80', '1', '转呀转，就真的遇见Mr.right ~花朵的旋转木马音乐盒，打开还有闪闪渐变的LED灯光~让黑夜瞬间从喧哗转成了宁静，在静谧的夜晚，与心爱的人一起漫步田间小道该是多么美好呢！', 'img/goods39.png', null, null, null, '2018-02-07 20:48:32');
INSERT INTO `goods` VALUES ('40', '酷玩音乐台灯', '128.90', '1', '总是在你需要的时刻，给你温暖，总是在你需要能量的时候，为你充电，冬天，寒冷不再可怕', 'img/goods40.png', null, null, null, '2018-02-07 20:48:40');
INSERT INTO `goods` VALUES ('41', '爱的旋律', '158.90', '1', '爱是捧在手心精心呵护，爱也是想你的时候会心一笑。不要让遇见只留下回忆，爱从来不需要等待。爱心暖手宝随时随地，温暖随行，这个冬日给你不一样的温暖。', 'img/goods41.png', null, null, null, '2018-02-07 20:48:46');
INSERT INTO `goods` VALUES ('42', '花儿朵朵开', '138.80', '1', '暖心暖胃，养生好帮手，开启你的暖心之旅；恒温安全智能，自动保温，开启你的恒温之旅。美好的一天从早晨醒来的第一杯温水开始。55°这温度刚刚好，暖暖杯，一款有温度的养生杯！', 'img/goods42.png', null, null, null, '2018-02-07 20:48:53');
INSERT INTO `goods` VALUES ('43', '温暖你星窝', '98.80', '1', '灵感源自贝壳，外形优美，晶莹透亮丝滑手感，让人爱不释手。内嵌双面镜，纯净镜面，每次开启都能看到珍珠般闪亮的自己~双面发热，温暖加倍，捧在手心里的暖炉。这个冬日有海贝随行，时刻保持优雅，随时随地想美更美。', 'img/goods43.png', null, null, null, '2018-02-07 20:48:59');
INSERT INTO `goods` VALUES ('44', '海贝暖手宝', '148.00', '1', '明明能靠一脸萌来吃饭，偏偏要靠肚里的音响~用音乐帮你减压，用呆萌为你舒畅心情', 'img/goods44.png', null, null, null, '2018-02-07 20:49:05');
INSERT INTO `goods` VALUES ('45', '吉小旺', '216.00', '1', 'Heart Tea。当你拿起茶杯，杯身上的略微凸出的心形就会闪烁迷人的颜色！蓝色，表示水温为0～35度；橘色，表示水温为35～75度；红色则表示温度在75~90度以上，提醒你慢慢喝，不然会烫口！', 'img/goods45.png', null, null, null, '2018-02-07 20:49:11');
INSERT INTO `goods` VALUES ('46', '爱心感温杯', '108.10', '1', '为你闪亮小鸟随手灯时尚美观，创意实用。可充电调光，电池使用持久且环保节能。触碰设计方便使用。光线柔和不刺眼，常伴您进入梦乡。 更有个性定制内容，打造专属你的时尚哦！', 'img/goods46.png', null, null, null, '2018-02-07 20:49:16');
INSERT INTO `goods` VALUES ('47', '为你闪亮', '48.90', '1', '即使用一万句不同语言的“我爱你”也不足以表达我对你的爱意，不如将表白寄语代表浓情蜜意的巧克力，让你感受到不一样的惊喜和贴心。巧克力的味道就像是爱情的味道', 'img/goods47.png', null, null, null, '2018-02-07 20:49:21');
INSERT INTO `goods` VALUES ('48', '我只在乎你', '138.80', '1', '自从有了你，我的思念之花就那么盛开了。牵挂的感觉袭遍我的全身，你不会知道我一个人是多么疯狂的想你，今生只与你相恋相依偎！', 'img/goods48.png', null, null, null, '2018-02-07 20:49:27');
INSERT INTO `goods` VALUES ('49', '今生相依', '108.80', '1', '简直要萌化了~顽皮的宠物有了大大的实力，会会用肚子来唱歌，会用长相来搞siao，会用夜灯来伴你入睡，会让你不时牵挂送你这份礼物的TA', 'img/goods49.png', null, null, null, '2018-02-07 20:49:35');
INSERT INTO `goods` VALUES ('50', '温暖你星窝', '135.80', '1', '萨诺猴音乐枕，是一款吉祥音乐枕。它戴着耳机，神情放松地聆听音乐，造型非常时尚。萨诺猴音乐枕配有高品质扬声器，面料摸起来柔软舒服。抱着它，感受它的柔软、聆听音乐的畅快吧！', 'img/goods50.png', null, null, null, '2018-02-07 20:49:41');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `emai` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`password`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13071238123', '123', 'xiaoming', 'abcd@qq.com');
INSERT INTO `user` VALUES ('1', '13012123030', '1234', 'xiaozhang', 'abcde@qq.com');
INSERT INTO `user` VALUES ('1', '13012123232', '123456', null, null);
INSERT INTO `user` VALUES ('1', '13012123031', '111111', null, null);
INSERT INTO `user` VALUES ('1', '13012123032', '', null, null);
INSERT INTO `user` VALUES ('2', '13012123035', '123456', null, null);
SET FOREIGN_KEY_CHECKS=1;
