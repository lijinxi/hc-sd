package com.hc.scm.sd.dao.model;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;
import com.hc.scm.common.model.RowColWrapModel;

/**
 * 订单明细，物料尺码横排
 * Description: 
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-4-14下午1:54:15
 */
public class BlCoDtlModel extends RowColWrapModel {
	
	private static final long serialVersionUID = 1L;

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
     * 尺码编号
     */
    private String sizeNo;

    /**
     * 尺码数量
     */
    private Integer sizeQty;

    /**
     * 序号(订单行号)
     */
    private Integer seqNo;

    /**
     * 尺码类别编号
     */
    private String sizeTypeNo;

    /**
     * 行状态(取数据字典order_line_status)
     */
    private String status;

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
     * 交货日期
     */
    @JSONField(format="yyyy-MM-dd")
    private Date deliverDate;

    /**
     * 收货地点(根据订单类型决定是关联还是直接取值)
     */
    private String pointNo;

    /**
     * 仓库编号
     */
    private String storeNo;

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
     * 物料编码
     */
    private String materialCode;

    /**
     * 物料名称
     */
    private String materialName;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_order_dtl.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_order_dtl.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_order_dtl.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_order_dtl.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_order_dtl.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_order_dtl.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_order_dtl.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_order_dtl.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bl_order_dtl.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bl_order_dtl.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     *
     * @return the value of bl_order_dtl.size_qty
     */
    public Integer getSizeQty() {
        return sizeQty;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     * @param sizeQty the value for bl_order_dtl.size_qty
     */
    public void setSizeQty(Integer sizeQty) {
        this.sizeQty = sizeQty;
    }

    /**
     * 
     * {@linkplain #seqNo}
     *
     * @return the value of bl_order_dtl.seq_no
     */
    public Integer getSeqNo() {
        return seqNo;
    }

    /**
     * 
     * {@linkplain #seqNo}
     * @param seqNo the value for bl_order_dtl.seq_no
     */
    public void setSeqNo(Integer seqNo) {
        this.seqNo = seqNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bl_order_dtl.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bl_order_dtl.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #status}
     *
     * @return the value of bl_order_dtl.status
     */
    public String getStatus() {
        return status;
    }

    /**
     * 
     * {@linkplain #status}
     * @param status the value for bl_order_dtl.status
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     *
     * @return the value of bl_order_dtl.unit_price
     */
    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    /**
     * 
     * {@linkplain #unitPrice}
     * @param unitPrice the value for bl_order_dtl.unit_price
     */
    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    /**
     * 
     * {@linkplain #packingQty}
     *
     * @return the value of bl_order_dtl.packing_qty
     */
    public Integer getPackingQty() {
        return packingQty;
    }

    /**
     * 
     * {@linkplain #packingQty}
     * @param packingQty the value for bl_order_dtl.packing_qty
     */
    public void setPackingQty(Integer packingQty) {
        this.packingQty = packingQty;
    }

    /**
     * 
     * {@linkplain #boxQty}
     *
     * @return the value of bl_order_dtl.box_qty
     */
    public Integer getBoxQty() {
        return boxQty;
    }

    /**
     * 
     * {@linkplain #boxQty}
     * @param boxQty the value for bl_order_dtl.box_qty
     */
    public void setBoxQty(Integer boxQty) {
        this.boxQty = boxQty;
    }

    /**
     * 
     * {@linkplain #packingType}
     *
     * @return the value of bl_order_dtl.packing_type
     */
    public String getPackingType() {
        return packingType;
    }

    /**
     * 
     * {@linkplain #packingType}
     * @param packingType the value for bl_order_dtl.packing_type
     */
    public void setPackingType(String packingType) {
        this.packingType = packingType;
    }

    /**
     * 
     * {@linkplain #deliverDate}
     *
     * @return the value of bl_order_dtl.deliver_date
     */
    public Date getDeliverDate() {
        return deliverDate;
    }

    /**
     * 
     * {@linkplain #deliverDate}
     * @param deliverDate the value for bl_order_dtl.deliver_date
     */
    public void setDeliverDate(Date deliverDate) {
        this.deliverDate = deliverDate;
    }

    /**
     * 
     * {@linkplain #pointNo}
     *
     * @return the value of bl_order_dtl.point_no
     */
    public String getPointNo() {
        return pointNo;
    }

    /**
     * 
     * {@linkplain #pointNo}
     * @param pointNo the value for bl_order_dtl.point_no
     */
    public void setPointNo(String pointNo) {
        this.pointNo = pointNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bl_order_dtl.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bl_order_dtl.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of bl_order_dtl.auditor
     */
    public String getAuditor() {
        return auditor;
    }

    /**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for bl_order_dtl.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of bl_order_dtl.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for bl_order_dtl.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

	public String getMaterialCode() {
		return materialCode;
	}

	public void setMaterialCode(String materialCode) {
		this.materialCode = materialCode;
	}

	public String getMaterialName() {
		return materialName;
	}

	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
    
}