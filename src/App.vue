<template>
  <div>
    <nav class="main-nav">
      <img src="https://cdn.imweb.me/thumbnail/20230209/f5f84aa6f52b5.png">
      <router-link class="nav-tag" to="/">사업분야</router-link>
      <router-link class="nav-tag" to="/">솔루션</router-link>
      <router-link class="nav-tag" to="/">산업</router-link>
      <router-link class="nav-tag" to="/">프로젝트</router-link>
      <router-link class="nav-tag" to="/OverView">회사소개</router-link>
      <router-link class="nav-tag" to="/">홍보센터</router-link>
      <router-link class="nav-tag" to="/training">인재채용</router-link>
      <hr style="margin-top: 10px; color: #eeeeee">
      <div class="main-text">
        <h1> 회사 소개 </h1>
        <p> HOME > 회사소개 > Overview</p>
      </div>
    </nav>
    <router-view />
    <!-- <ModalOpen @closeModal="modal_Open = false" /> -->
    <BusinessInquiry @openModal="modal_Open = true" />
    <TagBox />
    <FooterBox :주소="주소" :연락처="연락처" :COPYRIGHT="COPYRIGHT" />
  </div>
</template>

<script>

import BusinessInquiry from "./components/BusinessInquiry.vue"
import TagBox from "./components/TagBox.vue";
import FooterBox from "./components/FooterBox.vue";
// import ModalOpen from "./components/ModalOpen.vue";



export default {
  name: "App",
  components: {
    BusinessInquiry,
    TagBox,
    FooterBox,
    // ModalOpen,


  },
  data() {
    return {
      주소: "서울시 성동구 성수이로51 한라시그마벨리 304호",
      연락처: "Tel : 02-3452-3900 | Fax : 02-556-1269",
      COPYRIGHT: "COPYRIGHT 2021DFOCUS.ALL RIGHTS RESERVED.",
      modal_Open: false,
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
}

div {
  box-sizing: border-box;
  padding: 0px;
}

body {
  margin: 0px;
}

p,
h4,
h3,
h2,
h1,
span {
  transform: rotate(0.03deg)
}

.padding-div-top-80 {
  padding-top: 80px;
}

.padding-div-top-40 {
  padding-top: 40px;
}

.margin-bottom--45 {
  margin-bottom: -45px;
}


.main-nav {
  width: 100%;
  padding-top: 30px;
  background-image: url(./assets/logo2.png);
  background-size: cover;

}

nav img {
  width: 200px;
  height: 50px;
  margin-right: 80px;
  margin-left: 0px;
}

.nav-tag,
.sub-a,
.main-text {
  font-weight: bold;
  color: white;
  padding: 20px;
  font-size: 25px;
  text-decoration: none;

}

.nav-tag:hover {
  color: coral;
  transition: all 0.5s ease-in-out;
}

nav a.router-link-exact-active {
  font-weight: bold;
  font-size: 160%;
}
</style>
