import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './modules/user'
import order from './modules/order'
import category from './modules/category'
import product from './modules/product'
import address from './modules/address'
import shop_car from './modules/shop_car'
import addcustomer from './modules/addcustomer'




export default new Vuex.Store({
  modules: {
    user,
    order,
    category,
    product,
    address,
    shop_car,
    addcustomer
  }
})
