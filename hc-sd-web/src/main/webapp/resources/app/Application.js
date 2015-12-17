/**
 * Description: 主框架应用程序
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_sd.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_sd',
    requires: [
        'Hc_sd.view.blco.BlCoList',
        'Hc_sd.view.blco.BlCoDtl',
        'Hc_sd.view.blproductprice.BlProductPrice',
        'Hc_sd.view.blproductpricedtl.BlProductPriceDtl',
        'Hc_sd.view.blproductadvprice.BlProductAdvprice',
        'Hc_sd.view.blproductadvpricedtl.BlProductAdvpriceDtl',
        'Hc_sd.view.sdordermettinginfo.SdOrderMettingInfo',
        'Hc_sd.view.blcoprocess.BlCoProcess',
        'Hc_sd.view.sdstylebox.SdStyleBox',
        'Hc_sd.view.sdproductprice.SdProductPrice'
    ],

    appFolder:'resources/app',

    init: function() {
        var me = this;
        me.setDefaultToken('sdordermettinginfo');
        Ext.setGlyphFontFamily('FontAwesome');
       // Ext.QuickTips.init();
    },

    launch: function () {

    }
});
