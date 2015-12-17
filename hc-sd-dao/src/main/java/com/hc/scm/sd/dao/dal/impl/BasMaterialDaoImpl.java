package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.BasMaterialDao;
import com.hc.scm.sd.dao.mapper.BasMaterialMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-14 17:07:25
 * @version 1.0.0
 */
@Repository("basMaterialDao")
class BasMaterialDaoImpl extends BaseCrudDaoImpl implements BasMaterialDao {
    @Resource
    private BasMaterialMapper basMaterialMapper;

    @Override
    public BaseCrudMapper init() {
        return basMaterialMapper;
    }
}