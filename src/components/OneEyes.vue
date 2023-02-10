<template>
    <div>
        <div class="one-eyes-dfocus-img">
            <div class="padding-div-top-80">
                <div class="one-eyes-div">
                    <h1 class="one-eyes-h1">한 눈에 보는 디포커스</h1>
                </div>
            </div>
            <div class="one-eyes-main">
                <div class="one-eyes-main-box">
                    <ui class="one-eyes-main-icon-box">
                        <li class="one-eyes-main-icon-list">
                            <p><img class="one-eyes-icon margin-bottom--45"
                                    src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/afc962bfb0252.png"></p>
                            <strong>22<span>년</span></strong>
                            <p class="one-eyes-text">사업이력</p>
                            <p class="one-eyes-sub-text">설립년도 2001.04.10</p>
                        </li>
                        <li class="one-eyes-main-icon-list">
                            <p><img class="one-eyes-icon margin-bottom--45"
                                    src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/830e49048c8ff.png"></p>
                            <strong>126<span>명</span></strong>
                            <p class="one-eyes-text">직원현황</p>
                            <p class="one-eyes-sub-text">최근3년평균</p>
                        </li>
                        <li class="one-eyes-main-icon-list">
                            <p><img class="one-eyes-icon margin-bottom--45"
                                    src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/ddf3e02ff7436.png"></p>
                            <strong>2000<span>건</span></strong>
                            <p class="one-eyes-text">수행프로젝트</p>
                            <p class="one-eyes-sub-text">기준일 2022.01.28</p>
                        </li>
                        <li class="one-eyes-main-icon-list">
                            <p><img class="one-eyes-icon margin-bottom--45"
                                    src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/a8f675eb0b9d6.png"></p>
                            <strong>145<span>억원</span></strong>
                            <p class="one-eyes-text">매출액</p>
                            <p class="one-eyes-sub-text">최근 3년 평균</p>
                        </li>
                        <li class="one-eyes-main-icon-list">
                            <p><img class="one-eyes-icon margin-bottom--45"
                                    src="https://cdn.imweb.me/upload/S2022012070aa949e12b9a/5439032d34756.png"></p>
                            <strong>10<span>억</span></strong>
                            <p class="one-eyes-text">영업이익</p>
                            <p class="one-eyes-sub-text">최근 3년 평균</p>
                        </li>
                    </ui>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OneEyes',
}
</script>

<style>
.one-eyes-dfocus-img {
    background-image: url('https://cdn.imweb.me/thumbnail/20220617/b17fabe8f2305.png');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
}

.one-eyes-text {
    font-size: 18px;
    font-weight: bold;
    color: gray;
    margin-bottom: -15px;
    margin-top: 10px;
}


.one-eyes-sub-text {
    font-size: 14px;
    color: gray;
}

.one-eyes-h1 {
    font-size: 50px;
    font-weight: bold;
    color: white;
    letter-spacing: -5px;
}

.one-eyes-main-icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}

.one-eyes-main-icon-list {
    padding: 50px;
    color: white;
    font-size: 42px;
}
</style>