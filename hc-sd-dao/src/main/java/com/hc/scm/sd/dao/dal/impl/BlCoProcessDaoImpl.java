package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.BlCoProcessDao;
import com.hc.scm.sd.dao.mapper.BlCoProcessMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-16 17:32:02
 * @version 1.0.0
 */
@Repository("blCoProcessDao")
class BlCoProcessDaoImpl extends BaseCrudDaoImpl implements BlCoProcessDao {
    @Resource
    private BlCoProcessMapper blCoProcessMapper;

    @Override
    public BaseCrudMapper init() {
        return blCoProcessMapper;
    }
}