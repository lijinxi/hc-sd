package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.SdOrderMettingInfoDao;
import com.hc.scm.sd.dao.mapper.SdOrderMettingInfoMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
@Repository("sdOrderMettingInfoDao")
class SdOrderMettingInfoDaoImpl extends BaseCrudDaoImpl implements SdOrderMettingInfoDao {
    @Resource
    private SdOrderMettingInfoMapper sdOrderMettingInfoMapper;

    @Override
    public BaseCrudMapper init() {
        return sdOrderMettingInfoMapper;
    }
}