package com.hc.scm.sd.dao.entity;

import com.alibaba.fastjson.annotation.JSONField;

import java.util.Date;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-27 14:58:13
 * @version 1.0.0
 */
public class BlCo {
    /**
     * ��id(����)
     */
    private Long lineId;

    /**
     * ���ݱ��(������)
     */
    private String billNo;

    /**
     * ��������
     */
    private String billTypeNo;

    /**
     * ��ص��ݱ���
     */
    private String refBillNo;

    /**
     * ��ص�������
     */
    private String refBillTypeNo;

    /**
     * ��ͬ��
     */
    private String contractNo;

    /**
     * Ʒ�Ʊ��
     */
    private String brandNo;

    /**
     * ��ҵ�����
     */
    private String divisionNo;

    /**
     * ��������(ȡ����ֵ�order_type)
     */
    private String orderType;

    /**
     * ���״̬(ȡ����ֵ�order_line_status)
     */
    private String billStatus;

    /**
     * ���״̬(ȡ����ֵ�order_line_status)
     */
    private String billStatusMax;

    /**
     * �ͻ����
     */
    private String customerNo;

    /**
     * �µ�����
     */
    @JSONField (format="yyyy-MM-dd")
    private Date orderDate;

    /**
     * ��������(�ұ���)
     */
    private String currencyNo;

    /**
     * �տ��������
     */
    private String paymentClauseNo;

    /**
     * ������Դ(0=�ֹ������Ķ�����Դ 1=Ԥ�����Ķ���)
     */
    private Byte orderSource;

    /**
     * ҵ������
     */
    @JSONField (format="yyyy-MM-dd")
    private Date deliverDate;


	/**
     * ������
     */
    private String creator;

    /**
     * ����ʱ��
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * �޸���
     */
    private String modifier;

    /**
     * �޸�ʱ��
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * �����
     */
    private String auditor;

    /**
     * ���ʱ��
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date auditTime;

    /**
     * ��ע
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_order.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_order.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_order.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_order.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     *
     * @return the value of bl_order.bill_type_no
     */
    public String getBillTypeNo() {
        return billTypeNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     * @param billTypeNo the value for bl_order.bill_type_no
     */
    public void setBillTypeNo(String billTypeNo) {
        this.billTypeNo = billTypeNo;
    }

    /**
     * 
     * {@linkplain #refBillNo}
     *
     * @return the value of bl_order.ref_bill_no
     */
    public String getRefBillNo() {
        return refBillNo;
    }

    /**
     * 
     * {@linkplain #refBillNo}
     * @param refBillNo the value for bl_order.ref_bill_no
     */
    public void setRefBillNo(String refBillNo) {
        this.refBillNo = refBillNo;
    }

    /**
     * 
     * {@linkplain #refBillTypeNo}
     *
     * @return the value of bl_order.ref_bill_type_no
     */
    public String getRefBillTypeNo() {
        return refBillTypeNo;
    }

    /**
     * 
     * {@linkplain #refBillTypeNo}
     * @param refBillTypeNo the value for bl_order.ref_bill_type_no
     */
    public void setRefBillTypeNo(String refBillTypeNo) {
        this.refBillTypeNo = refBillTypeNo;
    }

    /**
     * 
     * {@linkplain #contractNo}
     *
     * @return the value of bl_order.contract_no
     */
    public String getContractNo() {
        return contractNo;
    }

    /**
     * 
     * {@linkplain #contractNo}
     * @param contractNo the value for bl_order.contract_no
     */
    public void setContractNo(String contractNo) {
        this.contractNo = contractNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bl_order.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bl_order.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_order.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_order.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #orderType}
     *
     * @return the value of bl_order.order_type
     */
    public String getOrderType() {
        return orderType;
    }

    /**
     * 
     * {@linkplain #orderType}
     * @param orderType the value for bl_order.order_type
     */
    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }

    /**
     * 
     * {@linkplain #billStatus}
     *
     * @return the value of bl_order.bill_status_min
     */
    public String getBillStatus() {
        return billStatus;
    }

    /**
     * 
     * {@linkplain #billStatus}
     * @param billStatus the value for bl_order.bill_status
     */
    public void setBillStatus(String billStatus) {
        this.billStatus = billStatus;
    }

    /**
     * 
     * {@linkplain #billStatusMax}
     *
     * @return the value of bl_order.bill_status_max
     */
    public String getBillStatusMax() {
        return billStatusMax;
    }

    /**
     * 
     * {@linkplain #billStatusMax}
     * @param billStatusMax the value for bl_order.bill_status_max
     */
    public void setBillStatusMax(String billStatusMax) {
        this.billStatusMax = billStatusMax;
    }

    /**
     * 
     * {@linkplain #customerNo}
     *
     * @return the value of bl_order.customer_no
     */
    public String getCustomerNo() {
        return customerNo;
    }

    /**
     * 
     * {@linkplain #customerNo}
     * @param customerNo the value for bl_order.customer_no
     */
    public void setCustomerNo(String customerNo) {
        this.customerNo = customerNo;
    }

    /**
     * 
     * {@linkplain #orderDate}
     *
     * @return the value of bl_order.order_date
     */
    public Date getOrderDate() {
        return orderDate;
    }

    /**
     * 
     * {@linkplain #orderDate}
     * @param orderDate the value for bl_order.order_date
     */
    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     *
     * @return the value of bl_order.currency_no
     */
    public String getCurrencyNo() {
        return currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     * @param currencyNo the value for bl_order.currency_no
     */
    public void setCurrencyNo(String currencyNo) {
        this.currencyNo = currencyNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseNo}
     *
     * @return the value of bl_order.payment_clause_no
     */
    public String getPaymentClauseNo() {
        return paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseNo}
     * @param paymentClauseNo the value for bl_order.payment_clause_no
     */
    public void setPaymentClauseNo(String paymentClauseNo) {
        this.paymentClauseNo = paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #orderSource}
     *
     * @return the value of bl_order.order_source
     */
    public Byte getOrderSource() {
        return orderSource;
    }

    /**
     * 
     * {@linkplain #orderSource}
     * @param orderSource the value for bl_order.order_source
     */
    public void setOrderSource(Byte orderSource) {
        this.orderSource = orderSource;
    }


    public Date getDeliverDate() {
		return deliverDate;
	}

	public void setDeliverDate(Date deliverDate) {
		this.deliverDate = deliverDate;
	}

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bl_order.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bl_order.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bl_order.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bl_order.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bl_order.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bl_order.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bl_order.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bl_order.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of bl_order.auditor
     */
    public String getAuditor() {
        return auditor;
    }

    /**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for bl_order.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of bl_order.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for bl_order.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_order.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_order.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}