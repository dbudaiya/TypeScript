import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/h8'
/*1.执行GET请求*/
axios.get('/home/multidata')
  .then(function (res) {
    console.log(res);
  })

axios.get('/home/data', {
  params: {
    type: "pop",
    page: 1
  }
}).then(function (result) {
  console.log(result);
}).catch(function (error) {
  console.log(error);
})

/*2.执行POST请求*/
axios.post('http://httpbin.org/post', {
  firstName: 'Kobe',
  lastName: "budai"
}).then(res => {
  console.log(res);
})

/*3.执行多个并发请求*/
function getUserAccount() {
  return axios.get('/home/multidata')
}

function getUserPermissions() {
  return axios.get('/home/data', {
    params: {
      type: 'pop',
      page: 1
    }
  })
}

axios.all([getUserAccount(), getUserPermissions()]).then(axios.spread(function (acc, per) {
  console.log(acc)
  console.log(per);
}))


/*4.axios API*/
// axios(config)
// axios(url[,config])


/*5.请求方法的别名*/
axios.request({})
axios.get()
axios.post()
axios.delete.head.options.put.patch

/*6.并发*/
axios.all([])
axios.spread(callback)

/*7.创建实例*/ 
const instance = axios.create([{
  baseURL:"",
  timeout:5000,
  Headers:{}
},{}])

