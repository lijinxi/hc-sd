package com.hc.scm.sd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.SdProductPrice;
import com.hc.scm.sd.service.SdProductPriceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 19:30:54
 * @version 1.0.0
 */
@Controller
@RequestMapping("/sd_product_price")
public class SdProductPriceController extends BaseCrudController<SdProductPrice> {
    @Resource
    private SdProductPriceService sdProductPriceService;

    @Override
    public BaseCrudService init() {
        return sdProductPriceService;
    }
}