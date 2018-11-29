<template>
  <div id="app">
    <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="name" />
<input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password" />
<button type="submit" class="btn btn-default" @click="login">登录</button>
<input v-model="name" />
<input v-model="password" />
<button @click="submitMsg()">提交</button>
<button @click="search()">查找信息</button>
<div v-for="(ele, index) of userArr" :key="index">
  <span>用户姓名：{{ele.name}}</span>
  <span>用户密码：{{ele.password}}</span>
</div>
  </div>
</template>

<script>
import axios from "axios";
import qs from 'qs'
export default {
  data() {
    return {
      name: "",
      password: "",
      name: "",
      password: 0,
      userArr: [],
      initData: {}
    };
  },
  methods: {
    login() {
      let params = {
            name: this.name,
      };
      // 获取已有账号密码
      axios
        .post("/api/loginq", params)
        .then(response => {
          // 响应成功回调
          console.log(response);
          // 创建一个账号密码
          // return axios.post("/api/loginq", params);
        })
    },
    submitMsg() {
      debugger
      let params = {
        id: new Date().getTime(),
        name: this.name,
        password: this.password
      };
      axios.post("/api/addUser", params).then((data) =>{
      });
    },
    search() {
      axios
        .get("/api/getUser")
        .then(response => {
          this.userArr = response.data;
          // 响应成功回调
          console.log(response);
        })
        .then(response => {
          console.log(response);
        })
        .catch(reject => {
          console.log(reject);
        });
    }
  },
  mounted() {
    this.initData = {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
