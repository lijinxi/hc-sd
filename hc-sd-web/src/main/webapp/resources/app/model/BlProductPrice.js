/**
 * Description: 成品价格维护单(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductPrice', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductprice',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'billTypeNo', text: '单据类型', type: 'string',defaultValue:'170501'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号(前端不显示)', type: 'string'},
         {name: 'currencyNo', text: '币别编号', type: 'string'},
         {name: 'effectiveDate', text: '生效日期'},
         {name: 'billStatus', text: '单据状态(取数据字典 bill_status)', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });