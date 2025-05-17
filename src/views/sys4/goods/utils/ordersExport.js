import {
  find as _find,
  findIndex as _findIndex,
  chunk as _chunk,
  flatten as _flatten,
  cloneDeep as _cloneDeep,
  isEmpty as _isEmpty,
} from "lodash";
import { indexOrderTable, orderTable, emptyLeftTable } from "./excelFormat";

export const _orderTabel = (dataObj, downBtns) => {
  const {
    _sameBuyerDataSource,
    _nocustomizedDataSource,
    _examineDataSource,
    _nocustomizedDataSourceHasRemark,
    _examineDataSourceHasNoRemark
  } = dataObj;
  let s_idx = 1
  const sObj = _find(downBtns,['valKey','_sameBuyerDataSource'])
  if(!_isEmpty(sObj)){
    s_idx = sObj['startIdx']
  }
  const n_idx0 = _find(downBtns,['valKey','_nocustomizedDataSource'])['startIdx'] || 1
  const n_idx1 = _find(downBtns,['valKey','_nocustomizedDataSourceHasRemark'])['startIdx'] || 1
  const e_idx0 = _find(downBtns,['valKey','_examineDataSourceHasNoRemark'])['startIdx'] || 1
  const e_idx1 = _find(downBtns,['valKey','_examineDataSource'])['startIdx'] || 1

  const resObj = {
    // 同个买家下多个订单
    _sameBuyerDataSource: setExcelTabel(
      getAll_goodsList(_sameBuyerDataSource),
      s_idx
    ),
    //不定制
    _nocustomizedDataSource: setExcelTabel(
      getAll_goodsList(_nocustomizedDataSource),
      n_idx0
    ),
    _nocustomizedDataSourceHasRemark: setExcelTabel(
      getAll_goodsList(_nocustomizedDataSourceHasRemark),
      n_idx1
    ),
    //定制，没备注定制信息
    _examineDataSourceHasNoRemark: setExcelTabel(
      getAll_goodsList(_examineDataSourceHasNoRemark),
      e_idx0
    ),
   //人工审核
    _examineDataSource: setExcelTabel(
      getAll_goodsList(_examineDataSource),
      e_idx1
    ),
  };
  // console.log(resObj, "--textColor");
  return resObj;
};

//拿出所有的商品
const getAll_goodsList = (datasAll) => {
  const arr = datasAll?.map((item) => item.goodsList);
  return _flatten(arr);
};

// 去掉no,No,With name and number
const _formatSpec = (str)=>{
  if(str === 'NO' || str === 'No' || str === 'no' || str === 'onlyHasPatch'){
    return ''
  }
  return str
}
const setExcelTabel = (arrs, defineIndex) => {
  //先分4块一组
  const chunkArrs = _chunk(arrs, 4);
  //变换成table
  const res = [];
  chunkArrs.map((arr, i) => {
    // 先设置索引table
    let obj = {
      left: indexOrderTable(defineIndex),
    };
    //每一组的小数据
    arr.map((item, j) => {
      obj[`data${j}`] = orderTable({
        textColor: item.textColor,
        img: item.imgUrl,
        DZbuyName: "", //定制的人工加
        DZnumber: "", //定制的自己人工加
        bdAndgg:item.bdAndgg || '', // 补丁
        _instruction:item._instruction || '',
        business: item.buyerAccount,
        spec: _formatSpec(item.spec),// 定制的姓名和号码
        size: item.size,
        order_sn: item.orderCode,
        sBuyColor: item.sBuyColor || "",
        buyerEmail: item.buyerEmail,
        orderRemark: item.orderRemark,
      }); //一定要j,excel的列唯一
      obj[`empty${j}-`] = emptyLeftTable;
    });
    res.push(obj);
    //每一组，defineIndex++
    defineIndex++;
  });

  return res;
};
