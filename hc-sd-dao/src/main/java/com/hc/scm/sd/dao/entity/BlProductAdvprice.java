package com.hc.scm.sd.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
public class BlProductAdvprice {
    /**
     * 行id(主键) 
     */
    private Long lineId;

    /**
     * 单据编号 
     */
    private String billNo;

    /**
     * 单据类型 
     */
    private String billTypeNo;

    /**
     * 币别编号(取bas_currency表） 
     */
    private String currencyNo;

    /**
     * 品牌编号 
     */
    private String brandNo;

    /**
     * 事业部编号(前端不显示) 
     */
    private String divisionNo;

    /**
     * 价格类型(取数据字典 price_type,1客户+产品编码) 
     */
    private String priceType;

    /**
     * 客户（取bas_customer表） 
     */
    private String customerNo;

    /**
     * 生效日期
     */
    @JSONField(format="yyyy-MM-dd")
    private Date effectiveDate;

    /**
     * 单据状态(取数据字典 bill_status)
     */
    private String billStatus;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 审核人
     */
    private String auditor;

    /**
     * 审核时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date auditTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_product_advprice.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_product_advprice.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_product_advprice.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_product_advprice.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     *
     * @return the value of bl_product_advprice.bill_type_no
     */
    public String getBillTypeNo() {
        return billTypeNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     * @param billTypeNo the value for bl_product_advprice.bill_type_no
     */
    public void setBillTypeNo(String billTypeNo) {
        this.billTypeNo = billTypeNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     *
     * @return the value of bl_product_advprice.currency_no
     */
    public String getCurrencyNo() {
        return currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     * @param currencyNo the value for bl_product_advprice.currency_no
     */
    public void setCurrencyNo(String currencyNo) {
        this.currencyNo = currencyNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bl_product_advprice.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bl_product_advprice.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_product_advprice.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_product_advprice.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #priceType}
     *
     * @return the value of bl_product_advprice.price_type
     */
    public String getPriceType() {
        return priceType;
    }

    /**
     * 
     * {@linkplain #priceType}
     * @param priceType the value for bl_product_advprice.price_type
     */
    public void setPriceType(String priceType) {
        this.priceType = priceType;
    }

    /**
     * 
     * {@linkplain #customerNo}
     *
     * @return the value of bl_product_advprice.customer_no
     */
    public String getCustomerNo() {
        return customerNo;
    }

    /**
     * 
     * {@linkplain #customerNo}
     * @param customerNo the value for bl_product_advprice.customer_no
     */
    public void setCustomerNo(String customerNo) {
        this.customerNo = customerNo;
    }

    /**
     * 
     * {@linkplain #effectiveDate}
     *
     * @return the value of bl_product_advprice.effective_date
     */
    public Date getEffectiveDate() {
        return effectiveDate;
    }

    /**
     * 
     * {@linkplain #effectiveDate}
     * @param effectiveDate the value for bl_product_advprice.effective_date
     */
    public void setEffectiveDate(Date effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    /**
     * 
     * {@linkplain #billStatus}
     *
     * @return the value of bl_product_advprice.bill_status
     */
    public String getBillStatus() {
        return billStatus;
    }

    /**
     * 
     * {@linkplain #billStatus}
     * @param billStatus the value for bl_product_advprice.bill_status
     */
    public void setBillStatus(String billStatus) {
        this.billStatus = billStatus;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bl_product_advprice.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bl_product_advprice.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bl_product_advprice.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bl_product_advprice.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bl_product_advprice.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bl_product_advprice.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bl_product_advprice.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bl_product_advprice.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of bl_product_advprice.auditor
     */
    public String getAuditor() {
        return auditor;
    }

    /**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for bl_product_advprice.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of bl_product_advprice.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for bl_product_advprice.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_product_advprice.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_product_advprice.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}