/**
 * Description: 销售订单预处理(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 15:41:09
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlCoProcess', {
    extend: 'Ext.data.Model',
    alias: 'model.blcoprocess',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'seqNo', text: '序号', type: 'int'},
         {name: 'billLineStatus', text: '订单预处理状态（取字典process_status）', type: 'string'},
         {name: 'orderDate', text: '下单日期'},
         {name: 'deliverDate', text: '要求交期'},
         {name: 'contractNo', text: '客户订单号', type: 'string'},
         {name: 'orderType', text: '订单类型(取数据字典order_type)', type: 'string'},
         {name: 'orderNo', text: '销售订单号', type: 'string'},
         {name: 'materialNo', text: '产品编码', type: 'string'},
         {name: 'customerNo', text: '客户编号', type: 'string'},
         {name: 'sizeNo', text: '尺码编号', type: 'string'},
         {name: 'sizeQty', text: '尺码数量', type: 'int'},
         {name: 'sizeTypeNo', text: '尺码类别编号(尺码组)', type: 'string'},
         {name: 'unitPrice', text: '单价', type: 'float'},
         {name: 'packingQty', text: '装箱对数', type: 'int'},
         {name: 'boxQty', text: '箱数', type: 'int'},
         {name: 'packingType', text: '装箱方式(取数据字典packing_type)', type: 'string'},
         {name: 'pointNo', text: '收货仓(根据订单类型决定是关联还是直接取值)', type: 'string'},
         {name: 'billCompany', text: '开票公司', type: 'string'},
         {name: 'processResult', text: '预处理结果', type: 'string'},
         {name: 'creator', text: '创建人', type: 'string'},
         {name: 'createTime', text: '创建时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });