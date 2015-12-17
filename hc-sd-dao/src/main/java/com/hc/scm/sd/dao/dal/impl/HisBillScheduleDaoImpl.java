package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.HisBillScheduleDao;
import com.hc.scm.sd.dao.mapper.HisBillScheduleMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-23 15:01:01
 * @version 1.0.0
 */
@Repository("hisBillScheduleDao")
class HisBillScheduleDaoImpl extends BaseCrudDaoImpl implements HisBillScheduleDao {
    @Resource
    private HisBillScheduleMapper hisBillScheduleMapper;

    @Override
    public BaseCrudMapper init() {
        return hisBillScheduleMapper;
    }
}