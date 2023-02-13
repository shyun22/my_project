<template>
  <div class="bottom-tagbox">
    <div class="bottom-tagbox-1">
      <div class="bottom-tagbox-main" v-for="(a, i) in datasample" :key="i">

        <p class="tagbox-header">{{ a.title }}</p>

        <p class="tagbox-text">{{ a.content1 }}</p>
        <p class="tagbox-text">{{ a.content2 }}</p>
        <p class="tagbox-text">{{ a.content3 }}</p>
        <p class="tagbox-text">{{ a.content4 }}</p>
        <p class="tagbox-text">{{ a.content5 }}</p>
        <p class="tagbox-text">{{ a.content6 }}</p>
        <p class="tagbox-text">{{ a.content7 }}</p>
        <p class="tagbox-text">{{ a.content8 }}</p>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "TagBox",
  data() {
    return {
      datasample: [{
        id: 0,
        title: "사업분야",
        content1: "DATA",
        content2: "ERP",
        content3: "CLOUD",
        content4: "DT",
        content5: "안전환경",

      },
      {
        id: 1,
        title: "솔루션",
        content1: "자사 솔루션",
        content2: "파트너 솔루션",

      },
      {
        id: 2,
        title: "산업",
        content1: "산업",

      },
      {
        id: 3,
        title: "구축사례",
        content1: "수행 프로젝트",
        content2: "구축 사례 소개",

      },
      {
        id: 4,
        title: "회사소개",
        content1: "Overview",
        content2: "VISION",
        content3: "인사말",
        content4: "연혁",
        content5: "Global Network",
        content6: "언론보도",
        content7: "공지사항",
        content8: "Contact Us",
      },
      {
        id: 5,
        title: "인재채용",
        content1: "인재상",
        content2: "인사제도",
        content3: "복리후생",
        content4: "채용공고",

      },
      ]
    }
  }
}
</script>

<style>
.bottom-tagbox-1 {
  display: flex;
  margin-left: auto;
  margin-right: auuto;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.bottom-tagbox-main {
  /* display: flex; */
  /* flex-direction: column; */
  border-right: 0.5px solid rgb(207, 206, 206);
  width: 250px;
}

.tagbox-header {
  font-weight: bold;
  font-size: 23px;
  margin-top: 0px;
  margin-bottom: 30px;
  text-align: left;
  margin-left: 20px;
}

.tagbox-text {
  font-size: 14px;
  color: #161414;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  text-align: left;
}
</style>