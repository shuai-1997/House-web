import header from "./header"
import filtrate from "./filtrate"
import footBlack from "./foot-black"
import countDown from "./countDown"
import checkboxButton from "./checkboxButton"
import radioButton from "./radioButton"
import headerTitle from "./headerTitle"
import upload from "./upload"
var intall=function  (Vue) {
Vue.component("my-header",header)
Vue.component("my-filtrate",filtrate)
Vue.component("my-foot-black",footBlack)
Vue.component("count-down",countDown)
Vue.component("my-checkbox-button",checkboxButton)
Vue.component("my-radio-button",radioButton)
Vue.component("my-header-title",headerTitle)
Vue.component("my-upload",upload)

}
export default intall