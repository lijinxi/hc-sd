package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.SdStyleBoxDao;
import com.hc.scm.sd.dao.mapper.SdStyleBoxMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 10:32:37
 * @version 1.0.0
 */
@Repository("sdStyleBoxDao")
class SdStyleBoxDaoImpl extends BaseCrudDaoImpl implements SdStyleBoxDao {
    @Resource
    private SdStyleBoxMapper sdStyleBoxMapper;

    @Override
    public BaseCrudMapper init() {
        return sdStyleBoxMapper;
    }
}