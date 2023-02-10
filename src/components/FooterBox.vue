<template>
    <div class="Footer">
      <div class="Footer-header">
        <img class=Footer-img src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/13fc2bac1d132.png">
        <p class="Footer-header-text">개인정보처리방침</p>
        <p class="Footer-header-text">이용약관</p>
        <p class="Footer-header-text">회사소개</p>
        <p class="Footer-header-text grow"></p>
        <img class="blog" src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/34799f1cb2797.png" >
        <img class="blog" src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/84cb174b2bf83.png" >
        <img class="blog" src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/37c70d8c1eb56.png" >
        <img class="blog" src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/ed02b56ccdf62.png" >
        <img class="blog" src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/2c59c4ec98b0d.png" >
      </div>
      <div class="Footer-content">
        <div class="Footer-content-text">
          <p>{{ 주소 }}</p>
          <p>{{ 연락처 }}</p>
          <p>{{ COPYRIGHT }}</p>
        </div>
        <div class="grow"></div>
        <div>
          <button class="Family-Site">DFOCUS Family Site</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "FooterBox",
    props : {
        주소 : String,
        연락처 : String,
        COPYRIGHT : String,
    }

}
</script>

<style>
.Footer {
  width: 100%;
  height: 300px;
  padding: 20px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: #151e27;
  /* background-size: cover; */
}

.Footer-header {
  display: flex;
  padding: 30px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #626263;
}

.Footer-img {
  width: 100px;
  height: 30px;
  padding: 10px;

}

.Footer-header-text {
  font-size: 12px;
  color: rgb(143, 141, 141);
  padding: 20px;
  padding-top: 0px;
}

.grow {
  flex-grow: 1;
}


.blog {
  height: 30px;
  padding: 10px;
}

.blog:hover {
    cursor: pointer;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
}

.Footer-content {
  display:flex;
  padding-top: 20px;
}
.Footer-content-text {
  text-align:left;
  font-size: 12px;
  color: rgb(143, 141, 141);
}

.Family-Site {
  background:none;
  width: 200px;
  height: 45px;
  color : rgb(143, 141, 141);
  border: 1px solid rgb(143, 141, 141);
  text-align: left;
  padding-left: 15px;
}
</style>