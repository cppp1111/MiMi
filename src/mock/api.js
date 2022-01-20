/*
 * @Author: your name
 * @Date: 2022-01-20 18:47:21
 * @LastEditTime: 2022-01-20 22:06:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\mock\api.js
 */
import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|100001-110000": 0,
        "username": "@cname",
        "email": "@email",
        "phone|1-9{11}": 0,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})