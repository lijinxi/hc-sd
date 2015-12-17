/**
 * Description: 销售订单明细表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlCoDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blcodtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'orderNo', text: '单据明细序号(由系统控制产生)', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'sizeNo', text: '尺码编号', type: 'string'},
         {name: 'sizeQty', text: '尺码数量', type: 'int'},
         {name: 'seqNo', text: '序号(订单行号)', type: 'int'},
         {name: 'sizeTypeNo', text: '尺码类别编号', type: 'string'},
         {name: 'status', text: '行状态(取数据字典order_line_status)', type: 'string'},
         {name: 'unitPrice', text: '单价', type: 'number'},
         {name: 'packingQty', text: '装箱对数', type: 'int'},
         {name: 'boxQty', text: '箱数', type: 'int'},
         {name: 'packingType', text: '装箱方式(取数据字典packing_type)', type: 'string'},
         {name: 'deliverDate', text: '交货日期', type: 'date'},
         {name: 'pointNo', text: '收货地点(根据订单类型决定是关联还是直接取值)', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         ]
  });