/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-4-17 09:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.SdProductPrice', {
    extend: 'Ext.data.Model',
    alias: 'model.sdproductprice',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'materialNo', text: '产品编码', type: 'string'},
         {name: 'materialName', text: '产品名称', type: 'string'},
         {naem: 'genderType',text:'男/女',type:'string'},
         {name: 'brandName', text: '品牌', type: 'string'},
         {name: 'categoryNo', text: '鞋类', type: 'string'},
         {name: 'unitNo', text: '计量单位',type:'string'},
         {name: 'currencyName', text: '币别',type:'string'},
         {name: 'unitPrice', text: '单价',type:'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '首次生效时间',type:'string'},
         {name: 'modifyTime', text: '最新生效时间'},
         ]
  });