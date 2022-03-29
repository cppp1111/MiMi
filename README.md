<!--
 * @Author: your name
 * @Date: 2022-01-19 15:41:34
 * @LastEditTime: 2022-03-29 15:03:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\README.md
-->
# mi
>手机商城（PC端项目）
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 项目目录

```
├─.env.prev
├─.gitignore
├─LICENSE
├─README.md
├─src
|  ├─App.vue
|  ├─declaration.d.ts
|  ├─util
|  ├─store
|  |   ├─dist
|  ├─storage
|  ├─pages
|  |   ├─alipay.vue
|  |   ├─cart.vue
|  |   ├─detail.vue
|  |   ├─home.vue
|  |   ├─index.vue
|  |   ├─login.vue
|  |   ├─order.vue
|  |   ├─orderConfirm.vue
|  |   ├─orderList.vue
|  |   ├─orderPay.vue
|  |   └product.vue
|  ├─mock
|  ├─dist
|  ├─components
|  |     ├─Loading.vue
|  |     ├─Modal.vue
|  |     ├─NavFooter.vue
|  |     ├─NavHeader.vue
|  |     ├─NoData.vue
|  |     ├─OrderHeader.vue
|  |     ├─ProductParam.vue
|  |     ├─ScanPayCode.vue
|  |     └ServiceBar.vue
|  ├─assets
|  |   ├─logo.png
|  |   ├─scss
|  |   |  ├─base.scss
|  |   |  ├─button.scss
|  |   |  ├─config.scss
|  |   |  ├─mixin.scss
|  |   |  ├─modal.scss
|  |   |  ├─reset.scss
|  |   |  ├─dist
|  |   |  |  ├─base.css
|  |   |  |  └mixin.css
|  ├─api
├─resource
|    ├─chrome.zip
|    ├─doc.md
|    ├─Git速查.jpg
|    ├─mi.futurefe.conf
|    ├─后台_产品接口.md
|    ├─后台_品类接口.md
|    ├─后台_用户接口.md
|    ├─后台_统计接口.md
|    ├─后台_订单接口.md
|    ├─门户_产品接口.md
|    ├─门户_支付接口.md
|    ├─门户_收货地址接口.md
|    ├─门户_用户接口.md
|    ├─门户_订单接口.md
|    ├─门户_购物车接口.md
|    ├─scss
|    |  ├─config.css
|    |  ├─config.css.map
|    |  ├─config.scss
|    |  ├─reset.css
|    |  ├─reset.css.map
|    |  └reset.scss
├─public
|   ├─favicon.ico
|   ├─index.html
|   ├─mock
|   |  ├─user
|   ├─imgs
|   |  ├─banner-1.png
|   |  ├─···
|   |  ├─slider
|   |  ├─product
|   |  ├─pay
|   |  ├─nav-img
|   |  ├─loading-svg
|   |  ├─detail
|   |  ├─ads
```

## 为什么要设置Mock（虚拟数据）设置

1. 开发阶段，为了高效率，需要提前Mock
2. 减少代码冗余，灵活插拔
3. 减少沟通、减少接口联调时间


## 错误拦截种类

1. 统一报错
2. 未登录同意拦截（在未登陆前，不允许加订单，购物车）
3. 请求值，返回值统一处理

## 项目运行

```
> yarn serve
```

## 项目部分截图
![Snipaste_2022-03-29_14-40-55](https://user-images.githubusercontent.com/91047039/160553816-76417014-1c82-485d-9aeb-4f05f5d65570.png)
![Snipaste_2022-03-29_14-41-09](https://user-images.githubusercontent.com/91047039/160554071-c115fbe7-cf66-4967-a29b-79a03d7d7326.png)
![Snipaste_2022-03-29_14-41-19](https://user-images.githubusercontent.com/91047039/160554090-31944086-2d16-4aef-8030-0599ac288269.png)
![Snipaste_2022-03-29_14-42-06](https://user-images.githubusercontent.com/91047039/160554269-7d481484-c13e-4946-a1bf-45980a0069a5.png)
![Snipaste_2022-03-29_14-43-01](https://user-images.githubusercontent.com/91047039/160554342-fc0aa1fa-5ce4-4376-915a-bef9d1283a6a.png)
![Snipaste_2022-03-29_14-43-26](https://user-images.githubusercontent.com/91047039/160554352-cf7a2449-8544-4396-bca1-bbdd00f47409.png)
![Snipaste_2022-03-29_14-44-02](https://user-images.githubusercontent.com/91047039/160554356-3e24628d-b5c2-4a31-8886-6dcac0485912.png)

