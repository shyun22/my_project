<template>
    <div>
        <nav class="sub-nav">
            <ul class="sub-ul">
                <router-link class="sub-a" to="/OverView">Overview</router-link>
                <router-link class="sub-a" to="/VisionView">VISION</router-link>
                <router-link class="sub-a" to="/Greetingsview">인사말</router-link>
                <router-link class="sub-a" to="/HistoryView">연혁</router-link>
                <router-link class="sub-a" to="/GlobalView">Global Network</router-link>
            </ul>
        </nav>
        <hr style="margin-top: 10px; color: #eeeeee">
    </div>
</template>

<script>
export default {
    name: 'SubNav',
}
</script>

<style>

</style>