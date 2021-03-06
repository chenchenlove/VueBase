/*
 * @Author: tfs\chenchen chenchen@cabrtech.com
 * @Date: 2022-05-11 09:38:51
 * @LastEditors: tfs\chenchen chenchen@cabrtech.com
 * @LastEditTime: 2022-05-11 17:02:08
 * @FilePath: \zjwjzhsg\src\views\enterprise\map\itemStyle.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


/**
 * @description: 
 * @param {*} names 省市区name
 * @param {*} itemStyle item样式
 * @return {*} 返回样式数组
 */
export function setCommonItemStyle(names,itemStyle) {
    let newNames = []
    names.forEach(element => {
        itemStyle.name = element;
        newNames.push({...itemStyle});
    });
    return newNames;
}

let provinceNames = ["河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省",
"山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省",
"甘肃省","青海省","台湾省","北京市","天津市","上海市","重庆市","内蒙古自治区","广西壮族自治区","宁夏回族自治区",
"新疆维吾尔自治区","西藏自治区","香港特别行政区","澳门特别行政区"];

let city = {
    "湖南省":["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"],
    "北京市":["东城区","西城区","丰台区","朝阳区","石景山区","海淀区","通州区","顺义区","大兴区","门头沟区","房山区","昌平区","密云区","平谷区","怀柔区","延庆区"],
    "黑龙江省":["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市","佳木斯市","七台河市","牡丹江市","黑河市","绥化市","大兴安岭地区"],
    '内蒙古自治区':["阿拉善盟","巴彦淖尔市","鄂尔多斯市","包头市","呼和浩特市","乌兰察布市","锡林郭勒盟","赤峰市","通辽市","兴安盟","呼伦贝尔市"],
    '吉林省':["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"],
    '辽宁省':["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"],
    '河北省':["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"],
    '天津市':["滨海新区","和平区","河东区","河西区","南开区","河北区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","静海区","宁河区","蓟州区"],
    '山东省':["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","滨州市","德州市","聊城市","临沂市","菏泽市","莱芜市"],
    '山西省':["太原市","临汾市","朔州市","大同市","长治市","吕梁市","晋中市","忻州市","运城市","阳泉市","晋城市"],
    '陕西省':["西安市","宝鸡市","咸阳市", "铜川市","渭南市", "延安市","榆林市","汉中市","安康市","商洛市"],

    '宁夏回族自治区':["银川市","石嘴山市","吴忠市","固原市","中卫市"],
    '甘肃省':["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","张掖市","酒泉市","平凉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"],
    '青海省':["西宁市","海东市","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"],
    '新疆维吾尔自治区':["乌鲁木齐市","克拉玛依市","吐鲁番市","哈密市","阿克苏地区","喀什地区","和田地区","昌吉回族自治州","博尔塔拉蒙古自治州","巴音郭楞蒙古自治州","克孜勒苏柯尔克孜自治州","伊犁哈萨克自治州","塔城地区","阿勒泰地区"],
    '西藏自治区':["那曲市","阿里地区","日喀则市","林芝市","昌都市","山南市","拉萨市"],
    '四川省':["成都市","绵阳市","自贡市","攀枝花市","泸州市","德阳市","广元市","遂宁市","内江市","乐山市","资阳市","宜宾市","南充市","达州市","雅安市","广安市","巴中市","眉山市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"],
    '云南省':["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"],
    '湖北省':["武汉市","黄石市","十堰市","宜昌市","襄阳市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州"],
    '重庆市':["万州区","黔江区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","渝北区","巴南区","长寿区","江津区","合川区","永川区","南川区","綦江区","大足区","璧山区","铜梁区","潼南区","荣昌区","开州区","梁平区","武隆区"],
    '贵州省':["贵阳市","遵义市","六盘水市","清镇市","赤水市","仁怀市","黔东南苗族侗族自治州","黔南布依族苗族自治州","黔西南布依族苗族自治州"],

    '广西壮族自治区':["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"],
    '广东省':["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"],
    '江西省':["南昌市","九江市","上饶市","抚州市","宜春市","吉安市","赣州市","景德镇市","萍乡市","新余市","鹰潭市"],
    '福建省':["福州市","泉州市","漳州市","南平市","三明市","龙岩市","莆田市","宁德市","厦门市"],
    '浙江省':["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"],
    '江苏省':["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"],
    '安徽省':["合肥市" ,"黄山市" ,"芜湖市","马鞍山","安庆市","淮南市","阜阳市","淮北市","铜陵市","亳州市","宣城市","蚌埠市","六安市" ,"滁州市" ,"池州市","宿州市"],
    '海南省':["海口市","三亚市","三沙市","儋州市","琼中黎族苗族自治县","保亭黎族苗族自治县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","定安县","屯昌县","澄迈县","临高县","儋州市","五指山市", "文昌市","琼海市","万宁市","东方市","琼山区","龙华区","秀英区","美兰区"],
    '台湾省':["台湾省"],

    '河南省':["郑州市","开封市","洛阳市","平顶山市","焦作市","鹤壁市","新乡市","安阳市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市","济源市"],
    '上海市':["黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","浦东新区","闵行区","宝山区","嘉定区","金山区","松江区","青浦区","奉贤区","崇明区"],
    '香港特别行政区':["中西区","东区","南区","湾仔区","九龙城区","观塘区","深水埗区","黄大仙区","油尖旺区","离岛区","葵青区","北区","西贡区","沙田区" ,"大埔区","荃湾区","屯门区","元朗区"],
    '澳门特别行政区':["花地玛堂区","圣安多尼堂区","大堂区","望德堂区","风顺堂区","嘉模堂区","圣方济各堂区","路氹城"],
}
export {provinceNames,city}