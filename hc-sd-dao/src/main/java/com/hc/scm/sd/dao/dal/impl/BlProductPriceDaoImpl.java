package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.BlProductPriceDao;
import com.hc.scm.sd.dao.mapper.BlProductPriceMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-13 10:20:27
 * @version 1.0.0
 */
@Repository("blProductPriceDao")
class BlProductPriceDaoImpl extends BaseCrudDaoImpl implements BlProductPriceDao {
    @Resource
    private BlProductPriceMapper blProductPriceMapper;

    @Override
    public BaseCrudMapper init() {
        return blProductPriceMapper;
    }
}