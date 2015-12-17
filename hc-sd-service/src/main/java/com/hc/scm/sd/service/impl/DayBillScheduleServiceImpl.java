package com.hc.scm.sd.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.BillUtils;
import com.hc.scm.common.utils.DateUtil;
import com.hc.scm.sd.dao.dal.BlProductPriceDao;
import com.hc.scm.sd.dao.dal.DayBillScheduleDao;
import com.hc.scm.sd.dao.dal.HisBillScheduleDao;
import com.hc.scm.sd.dao.entity.BlProductPrice;
import com.hc.scm.sd.dao.entity.DayBillSchedule;
import com.hc.scm.sd.dao.entity.HisBillSchedule;
import com.hc.scm.sd.service.DayBillScheduleService;
import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     tan.bin
 * @date:  2015-04-23 10:37:25
 * @version 1.0.0
 */
@Service("dayBillScheduleService")
class DayBillScheduleServiceImpl extends BaseCrudServiceImpl implements DayBillScheduleService {
	
	private static Logger logger = LoggerFactory.getLogger(DayBillScheduleServiceImpl.class);
	
	@Resource
    private DayBillScheduleDao dayBillScheduleDao;
    
    @Resource
    private HisBillScheduleDao hisBillScheduleDao;
    
    @Resource
    private BlProductPriceDao  blProductPriceDao;
    
    @Override
    public BaseCrudDao init() {
        return dayBillScheduleDao;
    }

	@Override
	public List<DayBillSchedule> getDayBillSchedule(Date ServeDate) throws ServiceException {
		// TODO Auto-generated method stub
		return dayBillScheduleDao.getDayBillSchedule(ServeDate);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,rollbackFor=ServiceException.class)
	public void executeDayBillSchedule(Date ServeDate) throws ServiceException {
		// TODO Auto-generated method stub
		//获取任务列表 开始时间小于等于服务器时间 执行标记位0的记录
		try{
			List<DayBillSchedule>  list = getDayBillSchedule(ServeDate);
			//循环子任务
			// 销售价格维护单 170501
			
			String billType="";			//单据类型
			String billNo="";			//单据编号
			for(DayBillSchedule dayBill:list){
				
				billType= dayBill.getBillTypeNo();
				billNo = dayBill.getBillNo();
				
				if(billType.equals("170501")){
					executeProductPrice(billNo,billType);//更新单据状态
					transferDayBillSchedule(dayBill);//更新任务表状态
				}
			}
		}catch(Exception e){
			throw new ServiceException("任务处理任务失败!!!");	
		}
		
	}
	
	/*
	 * 销售价格维护单
	 * 
	 */
	private void executeProductPrice(String billNo,String billTypeNo) {
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("billNo", billNo);
		params.put("billTypeNo",billTypeNo);
		try{
				//更新销售价格单的状态  单据状态in(10,20)
				List<BlProductPrice> list = blProductPriceDao.findByBiz(new BlProductPrice(), params);
				for(BlProductPrice  blProductPrice: list){
					
					BlProductPrice blModel= new BlProductPrice();
					blModel.setLineId(blProductPrice.getLineId());
					blModel.setBillStatus("100");
					blProductPriceDao.modifyById(blModel);
				}
			}catch(Exception e){
				 logger.error("更新销售价格状态失败:", e);
				 throw new ServiceException("更新销售价格状态失败");	
			}
		
	}
	
	
	
	/*
	 * 清理队列
	 * 
	 */
	private void transferDayBillSchedule(DayBillSchedule dayBill){
		//更新DayBillSchedule任务列表
		dayBill.setExecuteFlag((byte) 1);
		dayBill.setExecuteTime(DateUtil.getCurrentDateTime());
		try{
		dayBillScheduleDao.modifyById(dayBill);
		//添加至历史表HisBillSchedule
		HisBillSchedule hisBillSchedule = new HisBillSchedule();
		hisBillSchedule.setLineId(dayBill.getLineId());
		hisBillSchedule.setBillNo(dayBill.getBillNo());
		hisBillSchedule.setBillTypeNo(dayBill.getBillTypeNo());
		hisBillSchedule.setBrandNo(dayBill.getBrandNo());
		hisBillSchedule.setDivisionNo(dayBill.getDivisionNo());
		hisBillSchedule.setExecuteFlag(dayBill.getExecuteFlag());
		hisBillSchedule.setExecuteTime(dayBill.getExecuteTime());
		hisBillSchedule.setBeginTime(dayBill.getBeginTime());
		hisBillSchedule.setAuditTime(dayBill.getAuditTime());
		hisBillScheduleDao.add(hisBillSchedule);
		
		//清楚任务列表
		dayBillScheduleDao.deleteById(dayBill);
		}catch(Exception e){
			logger.error("更新历史表失败:", e);
			throw new ServiceException("更新历史表失败");	
		}
	}
}
	
	