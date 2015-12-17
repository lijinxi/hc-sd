package com.hc.scm.sd.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
public class SdOrderMettingInfo {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 品牌
     */
    private String brandNo;

    /**
     * 年季
     */
    private String seasonNo;

    /**
     * 款号
     */
    private String styleNo;

    /**
     * 鞋类
     */
    private String categoryNo;

    /**
     * 订货会起始日期
     */
    @JSONField(format="yyyy-MM-dd")
    private Date startDate;

    /**
     * 订货会结束日期
     */
    @JSONField(format="yyyy-MM-dd")
    private Date endDate;

    /**
     * 补单开始日期
     */
    @JSONField(format="yyyy-MM-dd")
    private Date reorderStartDate;

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
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bas_order_metting_info.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bas_order_metting_info.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bas_order_metting_info.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bas_order_metting_info.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #seasonNo}
     *
     * @return the value of bas_order_metting_info.season_no
     */
    public String getSeasonNo() {
        return seasonNo;
    }

    /**
     * 
     * {@linkplain #seasonNo}
     * @param seasonNo the value for bas_order_metting_info.season_no
     */
    public void setSeasonNo(String seasonNo) {
        this.seasonNo = seasonNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     *
     * @return the value of bas_order_metting_info.style_no
     */
    public String getStyleNo() {
        return styleNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     * @param styleNo the value for bas_order_metting_info.style_no
     */
    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     *
     * @return the value of bas_order_metting_info.category_no
     */
    public String getCategoryNo() {
        return categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     * @param categoryNo the value for bas_order_metting_info.category_no
     */
    public void setCategoryNo(String categoryNo) {
        this.categoryNo = categoryNo;
    }

    /**
     * 
     * {@linkplain #startDate}
     *
     * @return the value of bas_order_metting_info.start_date
     */
    public Date getStartDate() {
        return startDate;
    }

    /**
     * 
     * {@linkplain #startDate}
     * @param startDate the value for bas_order_metting_info.start_date
     */
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    /**
     * 
     * {@linkplain #endDate}
     *
     * @return the value of bas_order_metting_info.end_date
     */
    public Date getEndDate() {
        return endDate;
    }

    /**
     * 
     * {@linkplain #endDate}
     * @param endDate the value for bas_order_metting_info.end_date
     */
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    /**
     * 
     * {@linkplain #reorderStartDate}
     *
     * @return the value of bas_order_metting_info.reorder_start_date
     */
    public Date getReorderStartDate() {
        return reorderStartDate;
    }

    /**
     * 
     * {@linkplain #reorderStartDate}
     * @param reorderStartDate the value for bas_order_metting_info.reorder_start_date
     */
    public void setReorderStartDate(Date reorderStartDate) {
        this.reorderStartDate = reorderStartDate;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_order_metting_info.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_order_metting_info.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_order_metting_info.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_order_metting_info.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_order_metting_info.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_order_metting_info.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_order_metting_info.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_order_metting_info.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_order_metting_info.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_order_metting_info.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_order_metting_info.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_order_metting_info.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_order_metting_info.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_order_metting_info.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}