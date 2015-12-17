package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.BasMaterialSizeDao;
import com.hc.scm.sd.dao.mapper.BasMaterialSizeMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-14 17:07:26
 * @version 1.0.0
 */
@Repository("basMaterialSizeDao")
class BasMaterialSizeDaoImpl extends BaseCrudDaoImpl implements BasMaterialSizeDao {
    @Resource
    private BasMaterialSizeMapper basMaterialSizeMapper;

    @Override
    public BaseCrudMapper init() {
        return basMaterialSizeMapper;
    }
}