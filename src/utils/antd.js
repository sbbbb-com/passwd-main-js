import {Button, Input, Tag, Modal, Form, FormItem, Textarea} from 'ant-design-vue'

const Antd = {
  install: function (Vue) {
    Vue.component('a-button', Button)
    Vue.component('a-tag', Tag)
    Vue.component('a-input',Input)
    Vue.component('a-modal',Modal)
    Vue.component('a-form',Form)
    Vue.component('a-form-item',FormItem)
    Vue.component('a-textarea',Textarea)

  }
}

export default Antd
