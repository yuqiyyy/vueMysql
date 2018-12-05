<template>
  <div id="app">
    <aty-input v-model="name" />
<aty-input v-model="password" />
<button type="submit" class="btn btn-default" @click="login">登录</button>
<aty-input v-model="name" />
<aty-input v-model="password" />
<button @click="submitMsg()">提交</button>
<button @click="search()">查找信息</button>
<div v-for="(ele, index) of userArr" :key="index">
  <span>用户姓名：{{ele.name}}</span>
  <span>用户密码：{{ele.password}}</span>
</div>
<aty-date-picker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></aty-date-picker>
<!-- <div id="allmap"></div>
		<div id="container"></div>
		<button @click="getJsonData()">获取地区json数据</button> -->
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
    },
    getJsonData(){},
    initMap(){
      let map = new BMap.Map("allmap"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(114.502674, 38.045246), 11); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }));
      map.setCurrentCity("河北"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      let cityList = new BMapLib.CityList({
          container: 'container',
          map: map
      });
    }
  },
  mounted() {
    this.initData = {};
    this.initMap();
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
#allmap {
  width: 100%;
  height: 60%;
}
#container{
  width: 100%;
  height: 30%;
}
button{
  height: 40px;
  padding: 10px;
  cursor: pointer;
  color: white;
  background: #3a8be9;
  border: none;
}
button:hover{
  opacity: 0.7;
}
</style>
