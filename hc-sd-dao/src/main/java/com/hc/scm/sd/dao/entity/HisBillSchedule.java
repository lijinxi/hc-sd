package com.hc.scm.sd.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-23 15:01:01
 * @version 1.0.0
 */
public class HisBillSchedule {
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
     * 品牌编号
     */
    private String brandNo;

    /**
     * 事业部编号
     */
    private String divisionNo;

    /**
     * 开始时间
     */
    private Date beginTime;

    /**
     * 审核时间
     */
    private Date auditTime;

    /**
     * 实际执行时间
     */
    private Date executeTime;

    /**
     * 执行标志(0=未执行 1=已执行)
     */
    private Byte executeFlag;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of his_bill_schedule.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for his_bill_schedule.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of his_bill_schedule.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for his_bill_schedule.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     *
     * @return the value of his_bill_schedule.bill_type_no
     */
    public String getBillTypeNo() {
        return billTypeNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     * @param billTypeNo the value for his_bill_schedule.bill_type_no
     */
    public void setBillTypeNo(String billTypeNo) {
        this.billTypeNo = billTypeNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of his_bill_schedule.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for his_bill_schedule.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of his_bill_schedule.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for his_bill_schedule.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #beginTime}
     *
     * @return the value of his_bill_schedule.begin_time
     */
    public Date getBeginTime() {
        return beginTime;
    }

    /**
     * 
     * {@linkplain #beginTime}
     * @param beginTime the value for his_bill_schedule.begin_time
     */
    public void setBeginTime(Date beginTime) {
        this.beginTime = beginTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of his_bill_schedule.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for his_bill_schedule.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #executeTime}
     *
     * @return the value of his_bill_schedule.execute_time
     */
    public Date getExecuteTime() {
        return executeTime;
    }

    /**
     * 
     * {@linkplain #executeTime}
     * @param executeTime the value for his_bill_schedule.execute_time
     */
    public void setExecuteTime(Date executeTime) {
        this.executeTime = executeTime;
    }

    /**
     * 
     * {@linkplain #executeFlag}
     *
     * @return the value of his_bill_schedule.execute_flag
     */
    public Byte getExecuteFlag() {
        return executeFlag;
    }

    /**
     * 
     * {@linkplain #executeFlag}
     * @param executeFlag the value for his_bill_schedule.execute_flag
     */
    public void setExecuteFlag(Byte executeFlag) {
        this.executeFlag = executeFlag;
    }
}