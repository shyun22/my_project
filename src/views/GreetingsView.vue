<template>
    <div>
        <SubNav />
        <div class="Greeting">
            <div class="Greeting-title">
                <H1>인사말</H1>
                <p>디포커스를 방문하신 여러분들 환영합니다.</p>
            </div>
            <div class="Greeting-img-box">
                <img class="Greeting-img" src="https://cdn.imweb.me/thumbnail/20220929/b94200457690b.jpg">
            </div>
            <div class="Greeting-content">
                <div class="Greeting-content-left-box">
                    <strong class="Greeting-content-left">고객의 가치를 창출하기 위해</strong>
                    <p class="Greeting-content-left-line"></p>
                    <p class="Greeting-content-left">디포커스는 노력합니다.</p>
                </div>
                <div style="flex-grow:0.2"></div>
                <div class="Greeting-content-right">
                    <p>디포커스는 2001년 설립이래 데이터 분석(Data Analytics), ERP, 클라우드, 디지털 전환(Digital<br> Transformation), AI 분야에서
                        컨설팅 및 구축 사업을 수행하고 있습니다.<br>
                        중소기업으로 20년 이상 사업을 유지할 수 있었던 것은 함께하는 고객과 파트너로부터 신뢰할 수 있는<br> 기업으로 인정받았기에 가능했던 것 같습니다. </p>
                    <p>특히 글로벌 솔루션 또는 컨설팅 회사, 대형 SI 회사와의 협력을 바탕으로 각 산업의 리딩 고객들에게<br> 컨설팅과 솔루션을 제공하면서 쌓은 실력과 경험은디포커스의 소중한
                        자산입니다.<br>
                        이런 소중한 자산을 바탕으로 디포커스는 국내에만 머물지 않고 꾸준히 해외 고객을 발굴하여 비즈니스를<br>수행하고 있으며, 특히 2010년에 설립한 미국지사도 매년 꾸준히
                        성장하면서 단 한번의 적자도 없이<br> 사업을 수행하고 있습니다.</p>
                    <p>디포커스는 오랜 기간동안 일자리 창출, 인재 양성 및 배출 등 사회적 책임을 묵묵히 수행하고 있으며,<br> 고객과 파트너 그리고 임직원과 함께 끊임없이 성장 발전하는 회사로
                        만들어가겠습니다.</p>
                    <p>감사합니다.</p>
                    <p class="Greeting-content-footer">디포커스 임직원<br>
                        대표이사 선은두, 박상현</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SubNav from "../components/SubNav.vue"
export default {
    name: 'GreetingsView',
    components: {
        SubNav,
    }
}
</script>


<style>
.Greeting {
    width: 100%;
}

.Greeting-title {
    padding: 40px;
    letter-spacing: -1px;
}

.Greeting-img-box {
    margin-bottom: 50px;
}

.Greeting-img {
    width: 90%
}

.Greeting-content {
    display: flex;
}

.Greeting-content-left {
    font-size: 30px;
    text-align: left;
    letter-spacing: -3px;

}

.Greeting-content-left-box {
    padding: 50px;
    padding-left: 70px;
}

.Greeting-content-left-line {
    width: auto;
    height: auto;
    border: 8px solid rgba(248, 203, 79, 0.5);
    margin-bottom: -38px;
    margin-top: -13px;
}

.Greeting-content-right {
    flex: 1;
    text-align: left;
    padding: 50px;

}

.Greeting-content-footer {
    font-size: 20px;
    text-align: left;
    letter-spacing: -3px;
    font-weight: bold;
    margin-top: 60px;


}
</style>