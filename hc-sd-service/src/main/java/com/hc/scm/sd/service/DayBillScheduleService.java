package com.hc.scm.sd.service;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.sd.dao.entity.DayBillSchedule;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-23 10:37:25
 * @version 1.0.0
 */
public interface DayBillScheduleService extends BaseCrudService {
	public List<DayBillSchedule> getDayBillSchedule(Date ServeDate) throws ServiceException;
	public void executeDayBillSchedule(Date ServeDate) throws ServiceException;
}