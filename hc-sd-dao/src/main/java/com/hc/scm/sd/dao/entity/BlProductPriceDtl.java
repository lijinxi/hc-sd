package com.hc.scm.sd.dao.entity;

import java.math.BigDecimal;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-13 10:20:27
 * @version 1.0.0
 */
public class BlProductPriceDtl {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 单据编号
     */
    private String billNo;

    /**
     * 单据明细序号(由系统控制产生)
     */
    private Integer orderNo;

    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 计量单位(取bas_unit表）
     */
    private String unitNo;

    /**
     * 价格
     */
    private BigDecimal unitPrice;

    /**
     * 事业部
     */
    private String divisionNo;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_product_price_dtl.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_product_price_dtl.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_product_price_dtl.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_product_price_dtl.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_product_price_dtl.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_product_price_dtl.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_product_price_dtl.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_product_price_dtl.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     *
     * @return the value of bl_product_price_dtl.unit_no
     */
    public String getUnitNo() {
        return unitNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     * @param unitNo the value for bl_product_price_dtl.unit_no
     */
    public void setUnitNo(String unitNo) {
        this.unitNo = unitNo;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     *
     * @return the value of bl_product_price_dtl.unit_price
     */
    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     * @param unitPrice the value for bl_product_price_dtl.unit_price
     */
    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_product_price_dtl.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_product_price_dtl.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }
}