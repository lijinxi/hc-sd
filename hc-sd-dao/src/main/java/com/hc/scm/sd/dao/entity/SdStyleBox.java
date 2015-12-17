package com.hc.scm.sd.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 10:32:37
 * @version 1.0.0
 */
public class SdStyleBox {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 子品牌编号(对应M3商标)
     */
    private String brandDtlNo;

    /**
     * 款号代码
     */
    private String styleNo;

    /**
     * 物料编号(包装物料)
     */
    private String materialNo;

    /**
     * 每箱对数(SKU数)
     */
    private Integer skuQty;

    /**
     * 排列序号
     */
    private Integer orderNo;

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
     * @return the value of sd_style_box.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for sd_style_box.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #brandDtlNo}
     *
     * @return the value of sd_style_box.brand_dtl_no
     */
    public String getBrandDtlNo() {
        return brandDtlNo;
    }

    /**
     * 
     * {@linkplain #brandDtlNo}
     * @param brandDtlNo the value for sd_style_box.brand_dtl_no
     */
    public void setBrandDtlNo(String brandDtlNo) {
        this.brandDtlNo = brandDtlNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     *
     * @return the value of sd_style_box.style_no
     */
    public String getStyleNo() {
        return styleNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     * @param styleNo the value for sd_style_box.style_no
     */
    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of sd_style_box.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for sd_style_box.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #skuQty}
     *
     * @return the value of sd_style_box.sku_qty
     */
    public Integer getSkuQty() {
        return skuQty;
    }

    /**
     * 
     * {@linkplain #skuQty}
     * @param skuQty the value for sd_style_box.sku_qty
     */
    public void setSkuQty(Integer skuQty) {
        this.skuQty = skuQty;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of sd_style_box.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for sd_style_box.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of sd_style_box.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for sd_style_box.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of sd_style_box.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for sd_style_box.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of sd_style_box.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for sd_style_box.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of sd_style_box.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for sd_style_box.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of sd_style_box.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for sd_style_box.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of sd_style_box.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for sd_style_box.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}