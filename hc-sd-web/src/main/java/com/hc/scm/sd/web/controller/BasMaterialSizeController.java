package com.hc.scm.sd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.BasMaterialSize;
import com.hc.scm.sd.service.BasMaterialSizeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-14 17:07:26
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_material_size")
public class BasMaterialSizeController extends BaseCrudController<BasMaterialSize> {
    @Resource
    private BasMaterialSizeService basMaterialSizeService;

    @Override
    public BaseCrudService init() {
        return basMaterialSizeService;
    }
}