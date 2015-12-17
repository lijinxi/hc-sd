package com.hc.scm.sd.dao.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.utils.SimplePage;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
public interface BlCoDtlMapper extends BaseCrudMapper {
	public Map<String,String> selectByMaterial_no(@Param("materialNo") String materialNo);

	public List<Map<String, Object>> selectBlCoList(@Param("page") SimplePage page,@Param("orderByField") String orderByField,@Param("orderBy") String orderBy,@Param("params")Map<String,Object> params);

	public List<Object> SelectListByVoBlCoDtl(@Param("page") SimplePage page,@Param("orderByField") String orderByField,@Param("orderBy") String orderBy,@Param("params")Map<String,Object> params);
}