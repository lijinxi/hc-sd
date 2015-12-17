package com.hc.scm.sd.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 19:30:54
 * @version 1.0.0
 */
public class SdProductPrice {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 计量单位(取bas_unit表）
     */
    private String unitNo;

    /**
     * 币别编号(取bas_currency表）
     */
    private String currencyNo;

    /**
     * 价格
     */
    private String currencyName;
    
    
    private BigDecimal unitPrice;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of sd_product_price.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for sd_product_price.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of sd_product_price.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for sd_product_price.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     *
     * @return the value of sd_product_price.unit_no
     */
    public String getUnitNo() {
        return unitNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     * @param unitNo the value for sd_product_price.unit_no
     */
    public void setUnitNo(String unitNo) {
        this.unitNo = unitNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     *
     * @return the value of sd_product_price.currency_no
     */
    public String getCurrencyNo() {
        return currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     * @param currencyNo the value for sd_product_price.currency_no
     */
    public void setCurrencyNo(String currencyNo) {
        this.currencyNo = currencyNo;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     *
     * @return the value of sd_product_price.unit_price
     */
    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     * @param unitPrice the value for sd_product_price.unit_price
     */
    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of sd_product_price.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for sd_product_price.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of sd_product_price.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for sd_product_price.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of sd_product_price.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for sd_product_price.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of sd_product_price.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for sd_product_price.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of sd_product_price.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for sd_product_price.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of sd_product_price.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    public String getCurrencyName() {
		return currencyName;
	}

	public void setCurrencyName(String currencyName) {
		this.currencyName = currencyName;
	}

	/**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for sd_product_price.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}