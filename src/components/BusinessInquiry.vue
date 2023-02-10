<template>
    <div class="business-Inquiry">
        <div class="business-Inquiry-img">
            <div class="padding-div-top-80">
                <div class="one-eyes-div">
                    <h1 class="business-Inquiry-h1">사업문의</h1>
                </div>
            </div>
            <div>
                <div class="business-Inquiry-text">
                    <p>시스템 구축, 솔루션 도입, 컨설팅 문의 등 IT서비스 이용과 관련해 궁금하신 점이 있으신가요?
                        <br>아래 항목에 문의 사항을 작성해주시면 담당자가 빠른 시일 내 연락 드리겠습니다.
                    </p>
                    <div class="padding-div-top-40">
                        <div>
                            <button class="business-Inquiry-button" @click="$emit('openModal')">문의하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "BusinessInquiry",
    components: {
    },
    methods: {
    }
    }

</script>

<style>
.business-Inquiry-img {
    background-image: url('https://cdn.imweb.me/thumbnail/20220616/b3f452117c3c7.png');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 350px;
}

.business-Inquiry-h1 {
    font-size: 40px;
    font-weight: bold;
    color: white;
    letter-spacing: -3px;
    margin-top: 5px;
}

.business-Inquiry-text {
    color:white;
    font-size: 15px;
}

.business-Inquiry-button {
    border-radius: 30px;
    height: 50px;
    width: 130px;
    background:none;
    color: white;
    font-size: 17px;
    border-color:white;
    font-weight: bold;
}

.business-Inquiry-button:hover {
    background-color: white;
    color: black;
    transition: all 0.5s ease-in-out;
}
</style>