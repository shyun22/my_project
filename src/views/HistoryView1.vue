<template>
    <div>
        <SubNav />
        <div class="History">
            <div class="History-title">
                <H1>연혁</H1>
                <p>어제보다 오늘, 오늘보다 내일 더 성장하는 디포커스입니다.</p>
            </div>
            <div class="History-link-box">
                <a class="History-link" href="#">2016년~현재</a>
                <a class="History-link" href="./HistoryView1.vue">2010년~2015년</a>
                <a class="History-link" href="#">2001년~2009년</a>
            </div>
            <div class="History-img-box">
                <h1 class="History-img-title">Change and lnnovation</h1>
                <p class="History-img-content">디포커스 성장과 변모</p>
            </div>
            <div class="History-main-box">
                <div class="History-main-year">
                    <H1>2020 ~ 2022</H1>
                </div>
                <div class="History-main-content">
                    <div style="padding-bottom: 40px;">
                        <p>2022.10 KDB산업은행 SeedCloud납품</p>
                        <p>2022.09 삼성물산(건설) 스마트 장비점검시스템 태블로 대시보드 구축</p>
                        <p>2022.07 헌법재판소 SeedADM 납품</p>
                        <p>2022.06 SKT Azure 기반 VDI시스템 시범사업 (SeedVDI)</p>
                        <p>2022.05 교원그룹 차세대시스템 구축 사업 포털 구축 (SeedCloud)</p>
                        <p>2022.09 대검찰청 범죄피해재산 환부시스템 구축</p>
                        <p>2022.03 신한은행 VDI구축 SeedVDI납품</p>
                        <p>2022.03 CJ제일제당 소매점 POS 태블로 분석 서비스 구축</p>
                        <p>2022.02 현대카드 Partner North 태블로 분석 서비스 구축</p>
                        <p>2022.01 국토안전관리원 빅데이터플랫폼 태블로 납품</p>
                        <p>2021.09 광주글로벌모터스 caniasERP 구축 완료</p>
                        <p>2021.07 이마트 차세대 시스템 구축</p>
                        <p>2020.09 현대엘리베이터 DWC 세계최초 구축</p>
                        <p>2020.04 LG 공상평/카카오 BI/Planning 구축</p>
                        <p>2020.03 인천국제공항공사 BW4HANA 구축</p>
                        <p>2020.01 SAP SAC, SCP, DWC 사업 추가</p>
                    </div>
                    <hr style="color:#eee" />
                </div>
            </div>
            <div class="History-main-box">
                <div class="History-main-year">
                    <H1>2018 ~ 2019</H1>
                </div>
                <div class="History-main-content">
                    <div style="padding-bottom: 40px;">
                        <p>2019.12 광주글로벌모터스 caniasERP 수주</p>
                        <p>2019.08 해비치 caniasERP 수주</p>
                        <p>2019.06 한국항공우주산업 경영계획 고도화</p>
                        <p>2019.02 롯데푸드 BW4HANA 구축</p>
                        <p>2018.08 SK하이닉스 G-BW 구축</p>
                        <p>2018.08 SKHC 경영정보 통합시스템 구축</p>
                        <p>2018.02 SMEC CaniasERP 사업 수주</p>
                        <p>2018.01 SAP SAC 사업 시작</p>
                    </div>
                    <hr style="color:#eee width: 140px;" />
                </div>
            </div>
            <div class="History-main-box">
                <div class="History-main-year">
                    <H1>2016 ~ 2017</H1>
                </div>
                <div class="History-main-content">
                    <div style="padding-bottom: 40px;">
                    <p>2017.11 교보생명 경영계획 구축</p>
                    <p>2017.07 LS니꼬 BI 구축</p>
                    <p>2017.01 canias ERP 솔루션 사업 추가</p>
                    <p>2016.12 VMS 프로그램 저작권 획득</p>
                    <p>2016.02 두산밥캣 BI 구축</p>
                    <p>2016.01 롯데월드 인사시스템 구축</p>
                    <p>2016.01 아시아나 항공 경영계획 고도화</p>
                    <p>2016.01 코레일 차세대 ERP 구축</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import SubNav from '../components/SubNav.vue'

export default {
    name: 'HistoryView',
    components: {
        SubNav,
    },
}

</script>

<style>
.History {
    width: 100%;
}

.History-title {
    padding: 40px;
    letter-spacing: -1px;
}

.History-link-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    padding: 40px;

}

.History-link {
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    border: 1px solid #ccc;
    width: 400px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
}

.History-link:focus {
    color: white;
    background-color: coral;
}

.History-img-box {
    width: 100%;
    height: 280px;
    background-image: url('https://cdn.imweb.me/thumbnail/20220929/4a4b384b3ee44.jpg');
}

.History-img-title {
    font-size: 40px;
    font-weight: 600;
    color: white;
    margin-bottom: -6px;
    text-align: left;
    padding-top: 100px;
    padding-left: 100px;
}

.History-img-content {
    font-size: 18px;
    font-weight: 600;
    color: white;
    text-align: left;
    ;
    padding-left: 100px;
}

.History-main-box {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 40px;

}

.History-main-year {
    color: coral;
    font-weight: bold;
    font-size: 30px;
    text-align: left;
    padding-right: 250px;
    padding-left: 50px;

}

.History-main-content {
    text-align: left;
    font-weight: bold;
    font-size: 17px;
}
</style>