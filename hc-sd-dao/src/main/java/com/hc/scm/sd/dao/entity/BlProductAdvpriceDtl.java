package com.hc.scm.sd.dao.entity;

import java.math.BigDecimal;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
public class BlProductAdvpriceDtl {
    /**
     * 行id(主键) 
     */
    private Long lineId;

    /**
     * 事业部编号(前端不显示) 
     */
    private String divisionNo;

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
     * 价格方式（取数据字典 price_mode,1单价；2.折扣率；3折扣额）
     */
    private String priceMode;

    /**
     * 折扣率 
     */
    private BigDecimal discountRate;

    /**
     * 折扣额
     */
    private BigDecimal discountAmount;

    /**
     * 价格
     */
    private BigDecimal unitPrice;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_product_advprice_dtl.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_product_advprice_dtl.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_product_advprice_dtl.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_product_advprice_dtl.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_product_advprice_dtl.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_product_advprice_dtl.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_product_advprice_dtl.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_product_advprice_dtl.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_product_advprice_dtl.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_product_advprice_dtl.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     *
     * @return the value of bl_product_advprice_dtl.unit_no
     */
    public String getUnitNo() {
        return unitNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     * @param unitNo the value for bl_product_advprice_dtl.unit_no
     */
    public void setUnitNo(String unitNo) {
        this.unitNo = unitNo;
    }

    /**
     * 
     * {@linkplain #priceMode}
     *
     * @return the value of bl_product_advprice_dtl.price_mode
     */
    public String getPriceMode() {
        return priceMode;
    }

    /**
     * 
     * {@linkplain #priceMode}
     * @param priceMode the value for bl_product_advprice_dtl.price_mode
     */
    public void setPriceMode(String priceMode) {
        this.priceMode = priceMode;
    }

    /**
     * 
     * {@linkplain #discountRate}
     *
     * @return the value of bl_product_advprice_dtl.discount_rate
     */
    public BigDecimal getDiscountRate() {
        return discountRate;
    }

    /**
     * 
     * {@linkplain #discountRate}
     * @param discountRate the value for bl_product_advprice_dtl.discount_rate
     */
    public void setDiscountRate(BigDecimal discountRate) {
        this.discountRate = discountRate;
    }

    /**
     * 
     * {@linkplain #discountAmount}
     *
     * @return the value of bl_product_advprice_dtl.discount_amount
     */
    public BigDecimal getDiscountAmount() {
        return discountAmount;
    }

    /**
     * 
     * {@linkplain #discountAmount}
     * @param discountAmount the value for bl_product_advprice_dtl.discount_amount
     */
    public void setDiscountAmount(BigDecimal discountAmount) {
        this.discountAmount = discountAmount;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     *
     * @return the value of bl_product_advprice_dtl.unit_price
     */
    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     * @param unitPrice the value for bl_product_advprice_dtl.unit_price
     */
    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }
}