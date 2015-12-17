package com.hc.scm.sd.service.scheduler;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Service;

import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.enums.JobBizStatusEnum;
import com.hc.scm.common.interfaces.RemoteJobService;
import com.hc.scm.common.model.JobBizLog;
import com.hc.scm.common.utils.DateUtil;
import com.hc.scm.sd.service.DayBillScheduleService;

/**
 * @author tan.bin
 * @date 2015-4-22
 * @version 0.1.0 
 * @copyright
 */
@Service
@ManagedResource(objectName = SysConstans.SD_SYS+"ProductpriceScheduler", description = StringUtils.EMPTY)
public class ProductpriceScheduler implements RemoteJobService  {

	@Resource
	private DayBillScheduleService dayBillScheduleService;
	 	
	private static Logger log = org.slf4j.LoggerFactory.getLogger(ProductpriceScheduler.class);
	
	/**
	 * 调度错误日志
	 */
	private static final List<JobBizLog> JOB_BIZ_LOG = new ArrayList<JobBizLog>();
	
	/**
	 * 调度执行状态
	 */
	private static JobBizStatusEnum jobBizStatusEnum;

	
	private static String Schedule_flag = "Y";
	
	
	@Override
	public void initializeJob(String triggerName, String groupName) {
		// TODO Auto-generated method stub
		System.out.println("远程任务初始化1");
	}

	/**
	 * 执行job
	 */
	@SuppressWarnings("static-access")
	@Override
	public void executeJob(String triggerName, String groupName) {
		// TODO Auto-generated method stub
		log.info("AccSkuStockSchedule start! ");
		long startTime=System.currentTimeMillis();
		if("N".equals(Schedule_flag)){
			log.error("上一调度还未执行完，当前任务不执行! ");
			return;
		}
		
		Schedule_flag = "N";
		jobBizStatusEnum = JobBizStatusEnum.INITIALIZING;
		try {
			jobBizStatusEnum = JobBizStatusEnum.INITIALIZED;
			
			jobBizStatusEnum = JobBizStatusEnum.RUNNING;
			//accTaskService.executeAcctask();//处理自己的逻辑
			//取mdm服务 返回服务器时间
			
			dayBillScheduleService.executeDayBillSchedule(DateUtil.getCurrentDateTime());
			
			log.info("AccSkuStockSchedule end! usedtime:"+(System.currentTimeMillis()-startTime)+"ms");
		} catch (Exception e1) {
			//记录日志
			saveJobBizLog("单据处理异常:"+e1.getMessage()+";时间：" + System.currentTimeMillis(),triggerName,groupName);
			log.error("单据处理异常："+e1.getMessage(),e1);
		} 
		
		jobBizStatusEnum = jobBizStatusEnum.FINISHED;
		Schedule_flag = "Y";
		
	}

	@Override
	public void pauseJob(String triggerName, String groupName) {
		// TODO Auto-generated method stub
		System.out.println("远程任务暂停1");
	}

	@Override
	public void resumeJob(String triggerName, String groupName) {
		// TODO Auto-generated method stub
		System.out.println("远程任务恢复1");
	}

	@Override
	public void stopJob(String triggerName, String groupName) {
		// TODO Auto-generated method stub
		System.out.println("远程任务停止1");
	}

	@Override
	public void restartJob(String triggerName, String groupName) {
		// TODO Auto-generated method stub
		System.out.println("远程任务重启1");
	}

	@Override
	public JobBizStatusEnum getJobStatus(String triggerName, String groupName) {
		// TODO Auto-generated method stub
		return jobBizStatusEnum;
	}

	@Override
	public String getLogs(String triggerName, String groupName, long lastDate) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	private void saveJobBizLog(String errorMsg, String triggerName, String groupName) {
		JobBizLog jobBizLog = new JobBizLog();
		jobBizLog.setTriggerName(triggerName);
		jobBizLog.setGroupName(groupName);
		jobBizLog.setType(jobBizStatusEnum.name());
		jobBizLog.setGmtDate(System.currentTimeMillis());
		jobBizLog.setRemark(errorMsg);
		JOB_BIZ_LOG.add(jobBizLog);
	}

}
