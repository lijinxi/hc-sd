package com.hc.scm.sd.dao.dal.impl;

import java.util.Date;
import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.sd.dao.dal.DayBillScheduleDao;
import com.hc.scm.sd.dao.entity.DayBillSchedule;
import com.hc.scm.sd.dao.mapper.DayBillScheduleMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     tan.bin
 * @date:  2015-04-23 10:37:25
 * @version 1.0.0
 */
@Repository("dayBillScheduleDao")
class DayBillScheduleDaoImpl extends BaseCrudDaoImpl implements DayBillScheduleDao {
    @Resource
    private DayBillScheduleMapper dayBillScheduleMapper;

    @Override
    public BaseCrudMapper init() {
        return dayBillScheduleMapper;
    }

	@Override
	public List<DayBillSchedule> getDayBillSchedule(Date ServeDate) throws DaoException {
		// TODO Auto-generated method stub
		return dayBillScheduleMapper.getDayBillSchedule(ServeDate);
	}
}