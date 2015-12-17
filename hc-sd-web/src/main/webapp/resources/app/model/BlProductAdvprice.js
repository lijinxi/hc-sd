/**
 * Description: 价格策略单主表
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductAdvprice', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductadvprice',
     fields: [
         {name: 'lineId', text: '行id(主键) ', type: 'int'},
         {name: 'billNo', text: '单据编号 ', type: 'string'},
         {name: 'billTypeNo', text: '单据类型 ', type: 'string'},
         {name: 'currencyNo', text: '币别编号(取bas_currency表） ', type: 'string'},
         {name: 'brandNo', text: '品牌编号 ', type: 'string'},
         {name: 'divisionNo', text: '事业部编号(前端不显示) ', type: 'string'},
         {name: 'priceType', text: '价格类型(取数据字典 price_type,1客户+产品编码) ', type: 'string'},
         {name: 'customerNo', text: '客户（取bas_customer表） ', type: 'string'},
         {name: 'effectiveDate', text: '生效日期', type: 'date'},
         {name: 'billStatus', text: '单据状态(取数据字典 bill_status)', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
   
  });