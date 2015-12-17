/**
 * Description: 成品价格维护单明细表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductPriceDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductpricedtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'orderNo', text: '单据明细序号(由系统控制产生)', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'unitNo', text: '计量单位(取bas_unit表）', type: 'string'},
         {name: 'unitPrice', text: '价格', type: 'float'},
         {name: 'divisionNo', text: '事业部', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });