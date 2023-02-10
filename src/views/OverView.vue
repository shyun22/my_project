<template>
  <div class="about">
    <SubNav />
    <div class="padding-div"></div>
    <div class="VISION-text">
      <h1>{{ text1 }}</h1>
      <p>클라우드 세상을 여는 Digital Transformation 리더 디포커스’는 2001년 설립 이래 글로벌 솔루션과 자사 솔루션을 활용하여<br>
        다양한 IT 컨설팅 및 시스템 구축과 ITO(IT Outsourcing) 사업을 수행하고 있습니다. 특히 Cloud, Digital Transformation과<br>
        인공지능(AI), BI, ERP 등 다양한 분야에서 컨설팅과 솔루션 제공,구축을 통해 지속적인 성장을 거듭하며<br>
        IT 기업 상위 5% 이내의 높은 신용등급을 유지하고 있습니다.</p>
    </div>
    <div class="padding-div"></div>
    <div class="VISION-two">
      <p>디포커스는 선진 프로세스를 통해 생성된 <sapn class="font-strong">통합 데이터(Data)</sapn>를 기반으로<br>
        고객 기업에 정확한 <sapn class="font-strong">의사결정(Decision)</sapn>과 <sapn class="font-strong">방향(Direction)</sapn>을<br>
        제공하기 위한 사업에 전력하고자 합니다. </p>
    </div>
    <!-- 01 -->
    <div>
      <div class="padding-div"></div>
      <div>
        <div calss="text-table" style="display:inline-block; text-align:left;">
          <h1 class="overview-h">
            01</h1>
          <p class="overview-p">DATA</p>
          <p class="margin-p">
            <span class="overview-span">프로세스 및 데이터의 통합
              지원</span>
          </p>
          <p>
            <sapn class="overview-span-2">Consolidation of enterprise
              data (ERP, Data Warehouse)</sapn>
          </p>
          <p>
            <br>
          </p>
        </div>
        <div class="img-table" style="margin-left: 100px;">
          <img class="overView-img" src="https://cdn.imweb.me/thumbnail/20220617/be8a8888a37cb.png">
        </div>
      </div>
    </div>
    <!-- 02 -->
    <div>
      <div class="padding-div"></div>
      <div>
        <div class="img-table" style="margin-right: 100px;">
          <img class="overView-img" src="https://cdn.imweb.me/thumbnail/20220617/d85a3630c57b4.png">
        </div>
        <div calss="text-table" style="display:inline-block; text-align:left;">
          <h1 class="overview-h">
            02</h1>
          <p class="overview-p">DECISION</p>
          <p class="margin-p">
            <span class="overview-span">
              사용자 계층의 업무 수행을 위한 주요 의사 결정
              <br>지원</span>
          </p>
          <p>
            <sapn class="overview-span-2">Consolidation of enterprise
              data (ERP, Data Warehouse)</sapn>
          </p>
          <p>
            <br>
          </p>
        </div>

      </div>
    </div>
    <!-- 03 -->
    <div>
      <div class="padding-div"></div>
      <div>
        <div calss="text-table" style="display:inline-block; text-align:left;">
          <h1 class="overview-h">
            03</h1>
          <p class="overview-p">DIRECTION</p>
          <p class="margin-p">
            <span class="overview-span">전사적 경영 전략 수집 및 실행
              지원</span>
          </p>
          <p>
            <sapn class="overview-span-2">Present a direction for
              strategic enterprise management
              <br>through Business Intelligence
            </sapn>
          </p>
          <p>
            <br>
          </p>
        </div>
        <div class="img-table" style="margin-left: 100px;">
          <img class="overView-img" src="https://cdn.imweb.me/thumbnail/20220617/806638e86f55b.png">
        </div>
      </div>
    </div>
    <div style="padding:30px;"></div>
    <OneEyes />
  </div>
</template>

<script>
import SubNav from "../components/SubNav.vue"
import OneEyes from "../components/OneEyes.vue"

export default {
  name: "OverView",
  components: {
    SubNav,
    OneEyes,
  },
  data() {
    return {
      text1: "클라우드 세상을 여는 Digital Transformation 리더"
    }
  },
}
</script> 


<style>
body {
  margin: 0;
  padding: 0;
}

.VISION-text {
  width: 100%;
  color: black;
}

.VISION-text p {
  font-size: 20px;
  letter-spacing: -1px;
  line-height: 26px;
}

.VISION-two {
  width: 100%;
  height: 200px;
  background-image: url('https://cdn.imweb.me/thumbnail/20220617/af8b03c207a1e.png');
  text-align: center;
  color: white;
  font-size: 25px;
  padding-top: 15px;
  letter-spacing: 1px;
}



.padding-div {
  width: 100%;
  min-height: 1px;
  height: 60px;
}

.font-strong {
  font-weight: bold;
}

.sub-ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sub-a {
  color: black;
  font-size: 20px;
  font-weight: 100;
}

.sub-a:hover {
  color: coral;
  transition: all 0.3s ease-in-out;
}


.img-table {
  display: inline-block;
}

.overview-p {
  font-size: 48px;
  font-family: Play, sans-serif !important;
  color: #000;
  font-weight: 900;
}

.overview-h {
  font-size: 150px;
  font-family: Noto-sans black;
  color: #F0F0F0;
  font-weight: bold;
  margin-bottom: -108px;
  margin-left: -3px;
}

.overview-span {
  color: rgb(0, 0, 0);
  font-size: 24px;
  letter-spacing: -1px;
  font-weight: 500;
}

.overview-span-2 {
  color: rgb(66, 66, 66);
  font-size: 16px;
  letter-spacing: -0.5px;
}

.overView-img {
  visibility: inherit;
  image-rendering: -webkit-optimize-contrast;
  display: inline-block;
  width: 496px;
  height: 326px;
  margin-left: auto;
  margin-right: auto;
}

.margin-p {
  margin: 10px 0 5px 0;
}
</style>

