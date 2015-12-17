package com.hc.scm.sd.web.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.BlCo;
import com.hc.scm.sd.service.BlCoService;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-27 14:58:13
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_co")
public class BlCoController extends BaseCrudController<BlCo> {
    @Resource
    private BlCoService blCoService;

    @Override
    public BaseCrudService init() {
        return blCoService;
    }
    
}