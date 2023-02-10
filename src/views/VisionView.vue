<template>
    <div>
        <SubNav />
        <div class="Vision-main">
            <div class="padding-div-top-80">
                <div class="Vision-main-text">
                    <p class="padding-div-top-80">
                        <span class="Vision-title">{{ Vision }}</span>
                    </p>
                    <p>
                        <span class="Vision-sub-text">{{ subVIsion }}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="Vision-middle">
            <div class="Vision-middle-box">
                <div class="Vision-middle-header">
                    <p>VISION</p>
                </div>
                <div class="Vision-middle-title">
                    <p>클라우드 세상을 여는<br><strong style="font-size:52px;">Digital<br>Transformation 리더</strong></p>
                </div>
                <div class="Vision-middle-line">
                    <hr class="Vision-line">
                </div>
                <div class="Vision-middle-text-box">
                    <div class="Vision-text-margin">
                        <p class="Vision-text-title">사업,운영의 혁신</p>
                        <p class="Vision-text-sub">고객의 Digital Based Business 창출, <br>
                            Operation Excellency 지원</p>
                    </div>
                    <div class="Vision-text-margin">
                        <p class="Vision-text-title">Solution 중심 서비스</p>
                        <p class="Vision-text-sub">고객의 Needs가 반영된 Solution을 <br>
                            개발하고 Customized Service 제공</p>
                    </div>
                </div>
                <div class="Vision-middle-text-box">
                    <div class="Vision-text-margin">
                        <p class="Vision-text-title">Cloud 기반 운영 시스템</p>
                        <p class="Vision-text-sub">SaaS, PaaS 등 Cloud 기반 <br>
                            Application 구축, 운영 서비스</p>
                    </div>
                    <div class="Vision-text-margin">
                        <p class="Vision-text-title">Digital 기술 전문가</p>
                        <p class="Vision-text-sub">최신 Digital 기반 Application,Infra, <br>
                            Data 등 기술 리딩</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import SubNav from "../components/SubNav.vue"
export default {
    name: 'VisionView',
    components: {
        SubNav,
    },
    data() {
        return {
            Vision: "We Create a Better Tomorrow",
            subVIsion: "디포커스는 더 나은 내일을 만들기 위해 오늘도 노력합니다."

        }
    },
}
</script>

<style>
.Vision-main {
    width: 100%;
    height: 800px;
}

.Vision-main-text {
    margin-top: 120px
}

.Vision-title {
    font-size: 65px;
    font-weight: bold;
}

.Vision-sub-text {
    font-size: 30px;
    font-weight: bold;

}

.Vision-middle {
    background-image: url('https://cdn.imweb.me/thumbnail/20230203/03a72558ade42.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 800px;
}

.Vision-middle-box {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

.Vision-middle-header {
    color: white;
    font-size: 30px;
    text-align: left;
    padding-top: 80px;
}

.Vision-middle-title {
    font-size: 40px;
    color: white;
    text-align: left;
    width: 500px;
    margin-top: -20px;
}

.Vision-middle-text-box {
    display: flex;
}

.Vision-text-margin {
    margin-right: 20px;
    width: 250px;
}

.Vision-text-title {
    font-size: 20px;
    color: white;
    text-align: left;
    font-weight: bold;
}

.Vision-text-sub {
    font-size: 15px;
    color: white;
    text-align: left;


}

.Vision-line {
    margin-top: 10px;
    color: #eeeeee;
    width: 100%;
    
    
}
</style>