/**
 * Description: 款号与外箱关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-03-25 08:45:46
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.SdStyleBox', {
    extend: 'Ext.data.Model',
    alias: 'model.sdstylebox',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'brandDtlNo', text: '子品牌编号(对应M3商标)', type: 'string'},
         {name: 'styleNo', text: '款号代码', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         //{name: 'materialName',text:'物料名称',type:'string'},
         {name: 'skuQty', text: '每箱对数(SKU数)', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });