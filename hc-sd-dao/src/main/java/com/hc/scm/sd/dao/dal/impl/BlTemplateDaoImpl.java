package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.BlTemplateDao;
import com.hc.scm.sd.dao.mapper.BlTemplateMapper;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-10 10:19:03
 * @version 1.0.0
 */
@Service("blTemplateDao")
class BlTemplateDaoImpl extends BaseCrudDaoImpl implements BlTemplateDao {
    @Resource
    private BlTemplateMapper blTemplateMapper;

    @Override
    public BaseCrudMapper init() {
        return blTemplateMapper;
    }
}