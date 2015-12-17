package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.BlCoDao;
import com.hc.scm.sd.dao.mapper.BlCoMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-27 14:58:13
 * @version 1.0.0
 */
@Service("blCoDao")
class BlCoDaoImpl extends BaseCrudDaoImpl implements BlCoDao {
    @Resource
    private BlCoMapper blCoMapper;

    @Override
    public BaseCrudMapper init() {
        return blCoMapper;
    }
}