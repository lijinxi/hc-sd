package com.hc.scm.sd.service.impl;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.DateUtil;
import com.hc.scm.sd.dao.dal.BlProductPriceDao;
import com.hc.scm.sd.dao.dal.DayBillScheduleDao;
import com.hc.scm.sd.dao.entity.BlProductPrice;
import com.hc.scm.sd.dao.entity.DayBillSchedule;
import com.hc.scm.sd.service.BlProductPriceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-13 10:20:27
 * @version 1.0.0
 */

enum BlProductPriceStatusEnum{
	//0=编辑 1=审核 2=生效
	Edit("0"),
	Audit("1"),
	Activate("2");
	
	private String  blPPStatus;
	
	BlProductPriceStatusEnum(String blPPStatus){
		this.blPPStatus = blPPStatus;
	}
	
	public String getBlProductPriceStatus(){
		return blPPStatus;
	}
}
@Service("blProductPriceService")
class BlProductPriceServiceImpl extends BaseCrudServiceImpl implements BlProductPriceService {
    @Resource
    private BlProductPriceDao blProductPriceDao;
    
    @Resource
    private DayBillScheduleDao dayBillScheduleDao;
    
    @Override
    public BaseCrudDao init() {
        return blProductPriceDao;
    }
    
    
    /**
     * 审核销售价格维护单据
     */
	@Override
	public <ModelType> void audit(List<ModelType> auditModelList, SystemUser systemUser) {
		doAuditProductPrice(auditModelList,systemUser);
	}
	
    @Transactional(propagation = Propagation.REQUIRED,rollbackFor=ServiceException.class)
	@Override
	public <ModelType> void doAuditProductPrice(List<ModelType> auditModelList,
			SystemUser systemUser) throws ServiceException {
    	try{
    		if(auditModelList !=null && auditModelList.size()>0){
    			for(ModelType modelType : auditModelList){
    				BlProductPrice blProductPrice =(BlProductPrice)modelType;
    				//更改单据头表（单据状态、审核人、审核时间）的值
    				blProductPrice.setBillStatus("20");//状态
    				blProductPrice.setAuditor(systemUser ==null?"系统管理员":systemUser.getUserName());//审核人
    				blProductPrice.setAuditTime(DateUtil.getCurrentDateTime());
    				//更新表
    				blProductPriceDao.modifyById(blProductPrice);
    				//写入定时任务下发表
    				DayBillSchedule dayBillS = new DayBillSchedule();
    				dayBillS.setBillNo(blProductPrice.getBillNo());
    				dayBillS.setBillTypeNo(blProductPrice.getBillTypeNo());
    				dayBillS.setBrandNo(blProductPrice.getBrandNo());
    				dayBillS.setDivisionNo(blProductPrice.getDivisionNo());
    				dayBillS.setBeginTime(blProductPrice.getEffectiveDate());
    				dayBillS.setAuditTime(blProductPrice.getAuditTime());
    				dayBillScheduleDao.add(dayBillS);
 
    			}
    		}
    	}catch(Exception e){
    		throw new ServiceException("审核销售价格维护单出错！\r\n"+e.getMessage(),e);
    	}
	}
}