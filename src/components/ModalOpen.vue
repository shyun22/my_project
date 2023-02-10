<template>
    <div class="black-bg" v-if="ModalOpen == true">
        <div class="white-bg">
            <div class="modal-header">
                <h1 class="modal-header-h1">문의하기</h1>
            </div>
            <div class="modeal-body">
                <textarea type="text" class="modal-input" placeholder="내용" rwos="20"></textarea>
                <button @click="$emit('closeModal')">닫기</button>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name : "ModalOpen",

}
</script>

<style>
.black-bg {
    width: 100%;
    height: 100%;
    background-color: rgb(92, 90, 90);
    padding: 20px;
    position: fixed;
}

.white-bg {
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 5px;
}

.modal-header-h1 {
    font-size: 20px;
    font-weight: bold;
    color: rgb(0, 0, 0);
}

</style>