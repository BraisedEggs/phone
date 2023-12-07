<template>
    <div>
        支付成功
    </div>
</template>
  
<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Function to redirect to the "/home/video" route
const redirectToVideoRoute = () => {
    router.replace("/home/video");
};

// Set up the timer on component mount
onMounted(() => {
    const intervalId = setInterval(redirectToVideoRoute, 10000);

    // Clear the interval when the component is unmounted
    onBeforeUnmount(() => {
        clearInterval(intervalId);
    });
});
</script>
  
<style lang="scss" scoped></style>
  