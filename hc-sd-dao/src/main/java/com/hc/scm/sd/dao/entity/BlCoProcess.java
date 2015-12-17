package com.hc.scm.sd.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-16 17:32:02
 * @version 1.0.0
 */
public class BlCoProcess {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 品牌编号
     */
    private String brandNo;

    /**
     * 事业部编号
     */
    private String divisionNo;

    /**
     * 序号
     */
    private Integer seqNo;

    /**
     * 订单预处理状态（取字典process_status）
     */
    private String billLineStatus;

    
    /**
     * 下单日期
     */
    @JSONField (format="yyyy-MM-dd")
    private Date orderDate;

    /**
     * 要求交期
     */
    @JSONField (format="yyyy-MM-dd")
    private Date deliverDate;

    /**
     * 客户订单号
     */
    private String contractNo;

    /**
     * 订单类型(取数据字典order_type)
     */
    private String orderType;

    /**
     * 销售订单号
     */
    private String orderNo;

    /**
     * 产品编码
     */
    private String materialNo;

    /**
     * 客户编号
     */
    private String customerNo;

    /**
     * 尺码编号
     */
    private String sizeNo;

    /**
     * 尺码数量
     */
    private Integer sizeQty;

    /**
     * 尺码类别编号(尺码组)
     */
    private String sizeTypeNo;

    /**
     * 单价
     */
    private BigDecimal unitPrice;

    /**
     * 装箱对数
     */
    private Integer packingQty;

    /**
     * 箱数
     */
    private Integer boxQty;

    /**
     * 装箱方式(取数据字典packing_type)
     */
    private String packingType;

    /**
     * 收货仓(根据订单类型决定是关联还是直接取值)
     */
    private String pointNo;

    /**
     * 开票公司
     */
    private String billCompany;

    /**
     * 预处理结果
     */
    private String processResult;

    /**
     * 创建人
     */
    private String creator;

    /**
     * 创建时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_co_process.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_co_process.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bl_co_process.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bl_co_process.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_co_process.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_co_process.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #seqNo}
     *
     * @return the value of bl_co_process.seq_no
     */
    public Integer getSeqNo() {
        return seqNo;
    }

    /**
     * 
     * {@linkplain #seqNo}
     * @param seqNo the value for bl_co_process.seq_no
     */
    public void setSeqNo(Integer seqNo) {
        this.seqNo = seqNo;
    }

    /**
     * 
     * {@linkplain #billLineStatus}
     *
     * @return the value of bl_co_process.bill_line_status
     */
    public String getBillLineStatus() {
        return billLineStatus;
    }

    /**
     * 
     * {@linkplain #billLineStatus}
     * @param billLineStatus the value for bl_co_process.bill_line_status
     */
    public void setBillLineStatus(String billLineStatus) {
        this.billLineStatus = billLineStatus;
    }

    /**
     * 
     * {@linkplain #orderDate}
     *
     * @return the value of bl_co_process.order_date
     */
    public Date getOrderDate() {
        return orderDate;
    }

    /**
     * 
     * {@linkplain #orderDate}
     * @param orderDate the value for bl_co_process.order_date
     */
    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    /**
     * 
     * {@linkplain #deliverDate}
     *
     * @return the value of bl_co_process.deliver_date
     */
    public Date getDeliverDate() {
        return deliverDate;
    }

    /**
     * 
     * {@linkplain #deliverDate}
     * @param deliverDate the value for bl_co_process.deliver_date
     */
    public void setDeliverDate(Date deliverDate) {
        this.deliverDate = deliverDate;
    }

    /**
     * 
     * {@linkplain #contractNo}
     *
     * @return the value of bl_co_process.contract_no
     */
    public String getContractNo() {
        return contractNo;
    }

    /**
     * 
     * {@linkplain #contractNo}
     * @param contractNo the value for bl_co_process.contract_no
     */
    public void setContractNo(String contractNo) {
        this.contractNo = contractNo;
    }

    /**
     * 
     * {@linkplain #orderType}
     *
     * @return the value of bl_co_process.order_type
     */
    public String getOrderType() {
        return orderType;
    }

    /**
     * 
     * {@linkplain #orderType}
     * @param orderType the value for bl_co_process.order_type
     */
    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_co_process.order_no
     */
    public String getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_co_process.order_no
     */
    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_co_process.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_co_process.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #customerNo}
     *
     * @return the value of bl_co_process.customer_no
     */
    public String getCustomerNo() {
        return customerNo;
    }

    /**
     * 
     * {@linkplain #customerNo}
     * @param customerNo the value for bl_co_process.customer_no
     */
    public void setCustomerNo(String customerNo) {
        this.customerNo = customerNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bl_co_process.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bl_co_process.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     *
     * @return the value of bl_co_process.size_qty
     */
    public Integer getSizeQty() {
        return sizeQty;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     * @param sizeQty the value for bl_co_process.size_qty
     */
    public void setSizeQty(Integer sizeQty) {
        this.sizeQty = sizeQty;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bl_co_process.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bl_co_process.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     *
     * @return the value of bl_co_process.unit_price
     */
    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     * @param unitPrice the value for bl_co_process.unit_price
     */
    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    /**
     * 
     * {@linkplain #packingQty}
     *
     * @return the value of bl_co_process.packing_qty
     */
    public Integer getPackingQty() {
        return packingQty;
    }

    /**
     * 
     * {@linkplain #packingQty}
     * @param packingQty the value for bl_co_process.packing_qty
     */
    public void setPackingQty(Integer packingQty) {
        this.packingQty = packingQty;
    }

    /**
     * 
     * {@linkplain #boxQty}
     *
     * @return the value of bl_co_process.box_qty
     */
    public Integer getBoxQty() {
        return boxQty;
    }

    /**
     * 
     * {@linkplain #boxQty}
     * @param boxQty the value for bl_co_process.box_qty
     */
    public void setBoxQty(Integer boxQty) {
        this.boxQty = boxQty;
    }

    /**
     * 
     * {@linkplain #packingType}
     *
     * @return the value of bl_co_process.packing_type
     */
    public String getPackingType() {
        return packingType;
    }

    /**
     * 
     * {@linkplain #packingType}
     * @param packingType the value for bl_co_process.packing_type
     */
    public void setPackingType(String packingType) {
        this.packingType = packingType;
    }

    /**
     * 
     * {@linkplain #pointNo}
     *
     * @return the value of bl_co_process.point_no
     */
    public String getPointNo() {
        return pointNo;
    }

    /**
     * 
     * {@linkplain #pointNo}
     * @param pointNo the value for bl_co_process.point_no
     */
    public void setPointNo(String pointNo) {
        this.pointNo = pointNo;
    }

    /**
     * 
     * {@linkplain #billCompany}
     *
     * @return the value of bl_co_process.bill_company
     */
    public String getBillCompany() {
        return billCompany;
    }

    /**
     * 
     * {@linkplain #billCompany}
     * @param billCompany the value for bl_co_process.bill_company
     */
    public void setBillCompany(String billCompany) {
        this.billCompany = billCompany;
    }

    /**
     * 
     * {@linkplain #processResult}
     *
     * @return the value of bl_co_process.process_result
     */
    public String getProcessResult() {
        return processResult;
    }

    /**
     * 
     * {@linkplain #processResult}
     * @param processResult the value for bl_co_process.process_result
     */
    public void setProcessResult(String processResult) {
        this.processResult = processResult;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bl_co_process.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bl_co_process.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bl_co_process.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bl_co_process.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bl_co_process.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bl_co_process.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bl_co_process.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bl_co_process.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_co_process.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_co_process.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}