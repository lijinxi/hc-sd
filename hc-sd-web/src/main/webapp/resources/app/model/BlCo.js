/**
 * Description: 销售订单主表
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-24 11:47:39
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlCo', {
    extend: 'Ext.data.Model',
    alias: 'model.blco',
     fields: [
         {name: 'lineId',  type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'billTypeNo', text: '单据类型', type: 'string'},
         {name: 'refBillNo', text: '相关单据编码', type: 'string'},
         {name: 'refBillTypeNo', text: '相关单据类型', type: 'string'},
         {name: 'contractNo', text: '合同号', type: 'string'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'orderType', text: '订单类型', type: 'string'},
         {name: 'billStatus', text: '最低状态', type: 'string'},
         {name: 'billStatusMax', text: '最高状态', type: 'string'},
         {name: 'customerNo', text: '客户编号', type: 'string'},
         {name: 'orderDate', text: '下单日期', type: 'date'},
         {name: 'currencyNo', text: '订单币种', type: 'string'},
         {name: 'paymentClauseNo', text: '收款条件编号', type: 'string'},
         {name: 'orderSource', text: '订单来源', type: 'int'},
         {name: 'deliverDate', text: '要求交期', type: 'date'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });