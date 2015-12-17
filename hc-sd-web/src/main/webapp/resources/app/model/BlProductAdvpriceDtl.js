/**
 * Description: 价格策略单明细表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductAdvpriceDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductadvpricedtl',
     fields: [
         {name: 'lineId', text: '行id(主键) ', type: 'int'},
         {name: 'divisionNo', text: '事业部编号(前端不显示) ', type: 'string'},
         {name: 'billNo', text: '单据编号 ', type: 'string'},
         {name: 'orderNo', text: '单据明细序号(由系统控制产生) ', type: 'int'},
         {name: 'materialNo', text: '物料编号 ', type: 'string'},
         {name: 'unitNo', text: '计量单位(取bas_unit表）', type: 'string'},
         {name: 'priceMode', text: '价格方式（取数据字典 price_mode,1单价；2.折扣率；3折扣额）', type: 'string'},
         {name: 'discountRate', text: '折扣率 ', type: 'float',allowNull:true},
         {name: 'discountAmount', text: '折扣额', type: 'float',allowNull:true},
         {name: 'unitPrice', text: '价格', type: 'float',allowNull:true},
         ]
   
  });