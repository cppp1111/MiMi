/*
 * @Author: your name
 * @Date: 2022-01-19 22:25:28
 * @LastEditTime: 2022-01-20 14:59:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\storage\index.js
 */


// Storage封装
const STORAGE_KEY = 'mall';
export default {
    // 存储值

    // setItem()方法在给定的存储对象中设置指定键名的值，如果该键值已经存在，则更新该键值。
    // setItem()方法属于存储对象，可以是localStorage对象或sessionStorrage对象。
    // 语法：
    // localStorage.setItem(key, value)
    // sessionStorage.setItem(key, value)

    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value; //这里跟user就是同级了
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // 获取值
    // 获取某一个模块下面的属性user下面的userName
    getItem(key, module_name) { //模块是module_name,username是key
        // 获取user下面的username怎么办呢？，如下
        if (module_name) {
            let val = this.getItem(module_name); //采用递归获取,因为这里返回的是一个object对象
            if (val) return val[key];
        }
        return this.getStorage()[key]; //getStorage是获取user里整个一大段信息,[key]就可以获取user里的信息
    },
    // 获取整个数据
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        // 把值干掉后需要把值重新写进去
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}