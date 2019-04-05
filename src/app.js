import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon.vue"
import ButtonGroup from './button-group.vue'
import Input from './Input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component("g-icon", Icon)
Vue.component("g-button", Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)


new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message:'hi'
  }
});
