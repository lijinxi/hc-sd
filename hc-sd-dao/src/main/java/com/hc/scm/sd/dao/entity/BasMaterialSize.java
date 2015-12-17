package com.hc.scm.sd.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-14 17:07:26
 * @version 1.0.0
 */
public class BasMaterialSize extends BasMaterialSizeKey {
    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 条码(产品货号+尺码=条码)
     */
    private String barcode;

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_material_size.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_material_size.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #barcode}
     *
     * @return the value of bas_material_size.barcode
     */
    public String getBarcode() {
        return barcode;
    }

    /**
     * 
     * {@linkplain #barcode}
     * @param barcode the value for bas_material_size.barcode
     */
    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }
}