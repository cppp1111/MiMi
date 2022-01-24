<!--
 * @Author: your name
 * @Date: 2022-01-23 16:24:14
 * @LastEditTime: 2022-01-25 00:23:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\components\Modal.vue
-->
<template>
    <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-header">
                <span>标题</span>
                <a href="javascript:;" class="icon-close"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <div class="btn-group">
                    <a href="javascript:;" class="btn">确定</a>
                    <a href="javascript:;" class="btn btn-default">取消</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Modal',
    props:{
        // 弹框类型：小samll、中middle、大large、表单form
        modalType:{
            type:String,
            default:'form'
        },
        // 弹框标题
        title:String,
        // 按钮类型：1.确定按钮   2：取消按钮  3.确定取消
        btnType:String,
        sureText:{
            type:String,
            default:'确定'
        },
        cancleText:{
            type:String,
            default:'取消'
        },
        showModal:Boolean
    }
}
</script>
<style  lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>