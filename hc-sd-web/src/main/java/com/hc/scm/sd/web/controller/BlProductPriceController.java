package com.hc.scm.sd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.BlProductPrice;
import com.hc.scm.sd.service.BlProductPriceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-13 10:20:27
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_product_price")
public class BlProductPriceController extends BaseCrudController<BlProductPrice> {
    @Resource
    private BlProductPriceService blProductPriceService;

    @Override
    public BaseCrudService init() {
        return blProductPriceService;
    }
}