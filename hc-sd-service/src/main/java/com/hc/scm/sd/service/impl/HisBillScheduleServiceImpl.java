package com.hc.scm.sd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.sd.dao.dal.HisBillScheduleDao;
import com.hc.scm.sd.service.HisBillScheduleService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-23 15:01:01
 * @version 1.0.0
 */
@Service("hisBillScheduleService")
class HisBillScheduleServiceImpl extends BaseCrudServiceImpl implements HisBillScheduleService {
    @Resource
    private HisBillScheduleDao hisBillScheduleDao;

    @Override
    public BaseCrudDao init() {
        return hisBillScheduleDao;
    }
}