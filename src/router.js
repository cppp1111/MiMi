/*
 * @Author: your name
 * @Date: 2022-01-19 22:27:17
 * @LastEditTime: 2022-01-26 20:34:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\router.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index',
        children: [{
            path: '/index',
            name: 'index',
            component: Index,
        }, {
            path: '/product/:id',
            name: 'product',
            component: Product,
        }, {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
        }]
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/cart',
        name: 'cart',
        component: Cart
    }, {
        path: '/order',
        name: 'order',
        component: Order,
        children: [{
            path: 'list',
            name: 'order-list',
            component: OrderList
        }, {
            path: 'confirm',
            name: 'order-confirm',
            component: OrderConfirm
        }, {
            path: 'pay',
            name: 'order-pay',
            component: OrderPay
        }, {
            path: 'alipay',
            name: 'alipay',
            component: AliPay
        }]
    }]
});