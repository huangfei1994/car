import http from '../utils/http'

// 创建群组
const createGroup = (params) => http.uploadAjax('/groups_excel', params)
// 查询群组
const getGroups = (params) => http.get('/groups', params)
// 查询明细
const getGroupsDetail = (params) => http.get('/groups_detail', params)
// 获取excle模板
const getExcelTemplate = (params) => http.get('/template_excel', params)
// 删除群组
const deleteGroup = (params) => http.delete('/groups/' + params.group_id)
// 创建群组
const createGroupByText = (params) => http.post('/groups_text', params)
// 修改群组名称
const modifyGroupName = (params) => http.patch('/groups', params)

export default { createGroup, getGroups, getGroupsDetail, getExcelTemplate, deleteGroup, createGroupByText, modifyGroupName }
