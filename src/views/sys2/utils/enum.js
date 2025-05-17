//把中文key转英文
export const _setKeyCnToEn = {
  订单号: "orderCode",
  订单金额: "amount",
  产品规格: "spec", //独立多次
  商品尺寸: "size", //独立多次，没有，自己后面组装的
  产品数量: "number", //独立多次
  图片网址: "imgUrl", //独立多次
  //   订单标识: "mark",
  买家账号: "buyerAccount",
  店铺账号: "storeName",
  //   买家留言: "buyerLiuyan",
  //   买家支付运费: "buyerPayFreight",
};

export const _SPEC = [
  {
    value: "sem nome e número",
    label: "没有姓名和号码",
  },
  {
    value: "sem nome e número+Brasileirão",
    label: "没有姓名和号码+Brasileirão",
  },
  {
    value: "sem nome e número+Libertadores",
    label: "没有名字和号码+解放者",
  },
  {
    value: "sem nome e número(UCL Patch)",
    label: "没有姓名和号码（UCL 补丁）",
  },
  {
    value: "sem nome e número(SERIE A)",
    label: "无姓名和编号（A 系列）",
  },
  {
    value: "sem nome e número(LIGUE Patch)",
    label: "没有姓名和号码（CALL 补丁）",
  },
  {
    value: "sem nome e número(EPL Patch)",
    label: "没有姓名和号码（EPL 补丁）",
  },
  {
    value: "sem nome e número(Laliga Patch)",
    label: "没有姓名和号码（Laliga 补丁）",
  },
  {
    value: "Com nome e número",
    label: "有名字和号码",
  },
  {
    value: "Com nome e número+Brasileirão",
    label: "带有姓名和号码+Brasileirão",
  },
  {
    value: "Com nome e número+Libertadores",
    label: "yy有姓名和号码+解放者队yy",
  },
  {
    value: "Com nome e número(UCL Patch)",
    label: "有姓名和号码（UCL 补丁）",
  },
  {
    value: "Com nome e número(SERIE A)",
    label: "带有姓名和号码（A 系列）",
  },
  {
    value: "Com nome e número(LIGUE Patch)",
    label: "带姓名和号码（CALL 补丁）",
  },
  {
    value: "Com nome e número(EPL Patch)",
    label: "带姓名和号码（EPL 补丁）",
  },
  {
    value: "Com nome e número(Laliga Patch)",
    label: "带有姓名和号码（Laliga 补丁）",
  },
];
export const _SIZE = [
  {
    value: "S",
  },
  {
    value: "M",
  },
  {
    value: "L",
  },
  {
    value: "XL",
  },
  {
    value: "XXL",
  },
  {
    value: "XXXL",
  },
  {
    value: "XXXXL",
  },
  {
    value: "3XL",
  },
  {
    value: "4XL",
  },
  // {
  //   value: "S=P",
  // },
  // {
  //   value: "M=M",
  // },
  // {
  //   value: "L=G",
  // },
  // {
  //   value: "XL=GG",
  // },
  // {
  //   value: "XXL=2GG",
  // },
  {
    value: "16#(3-4 anos)",
  },
  {
    value: "18#(4-5 anos)",
  },
  {
    value: "20#(5-6 anos)",
  },
  {
    value: "22#(7-8  anos)",
  },
  {
    value: "24#(8-9 anos)",
  },
  {
    value: "26#(10-11 anos)",
  },
  {
    value: "28#(12-13 anos)",
  },
];
export const _MONEY = "230";

//按钮，只取key
const getKeys = (arr) => {
  return arr.map((item) => item.value);
};

export const _BTNS = [
  {
    value: "sys2-sameBuyer",
    label: "同个买家下多个单", //大于230的也在里面
    valKey: "_sameBuyerDataSource",
  },
  {
    value: "sys2-money",
    label: `大于R$230的单`, //大于230的
    valKey: "_more230DataSource",
  },
  {
    value: "sys2-examine",
    label: "人工审核", //匹配不上规格的单
    valKey: "_examineDataSource",
  },
  {
    value: "sys2-noCustomized",
    specs: getKeys(_SPEC.slice(0, 8)),
    label: "不定制", //不定制
    valKey: "_nocustomizedDataSource",
  },
  {
    value: "sys2-customized",
    specs: getKeys(_SPEC.slice(8)),
    label: "定制", //球星号+补丁
    valKey: "_customizedDataSource",
  },
];
