/**
 * Description: 订单类型规则配置表(订单会款号信息表)(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.SdOrderMettingInfo', {
    extend: 'Ext.data.Model',
    alias: 'model.sdordermettinginfo',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'seasonNo', text: '年季', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'categoryNo', text: '鞋类', type: 'string'},
         {name: 'startDate', text: '订货会起始日期',type:'date'},
         {name: 'endDate', text: '订货会结束日期',type:'date'},
         {name: 'reorderStartDate', text: '补单开始日期',type:'date'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });