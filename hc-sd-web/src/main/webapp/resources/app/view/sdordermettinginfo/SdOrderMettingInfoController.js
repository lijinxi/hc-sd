/**
 * Description: 订单类型规则配置表(订单会款号信息表)Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.sdordermettinginfo.SdOrderMettingInfoController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.sdordermettinginfo',
    init: function() {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        me.workObject.on('beforeedit', 'onGridBeforeEdit', me);
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
        if (this.gridCannotEditKeyField(e) === false) return false;
        if (e.field == 'endDate') {
            var record = e.record;
            var startDate = record.get('startDate');
            if (Ext.isEmpty(startDate)) {
                Ext.Msg.alert('提示', '请先选择订货会起始日期');
                return false;

            }

        }
    },
    //编辑之后
    onGridAfterEdit: function(editor, e) {

        if (e.field == 'startDate') {
            var record = e.record;
            var startDate = record.get('startDate');
            var endDate = record.get('endDate');
            if (!Ext.isEmpty(endDate)) {
                if (startDate > endDate) {
                    record.set('startDate', '');
                    Ext.Msg.alert('提示', '起始日期不能大于结束日期');
                    return false;
                }
            }

        }

        if (e.field == 'endDate') {
            var record = e.record;
            var startDate = record.get('startDate');
            var endDate = record.get('endDate');
            if (endDate < startDate) {
                record.set('endDate', '');
                Ext.Msg.alert('提示', '结束日期不能小于起始日期');
                return false;
            }

        }

        this.checkKeyValue(e);
    }
});