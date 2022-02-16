<!--
 * @Author: your name
 * @Date: 2022-01-23 16:24:14
 * @LastEditTime: 2022-02-16 13:25:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\src\components\Modal.vue
-->
<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" 
                    class="btn" 
                    v-if="btnType==1" 
                    @click="$emit('submit')">
                    <!-- 这里的emit是子组件向父组件传递 -->
                    {{sureText}}
                    </a>
                    <a href="javascript:;" 
                    class="btn" 
                    v-if="btnType==2" 
                    @click="$emit('cancel')">
                    <!-- 这里的emit是子组件向父组件传递 -->
                    {{cancleText}}
                    </a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancleText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
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