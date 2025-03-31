<template>
  <div class="timer">
    <div class="progress-bar" :style="{ width: progressWidth }"></div>
    <p class="countdown">{{ timeLeft }}s</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";

const props = defineProps({
  duration: { type: Number, default: 15 }, // Default timer set to 15 seconds
});

const timeLeft = ref(props.duration);
const emit = defineEmits(["time-up"]);

const progressWidth = computed(
  () => `${(timeLeft.value / props.duration) * 100}%`
);

let timer;

const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer);
      emit("time-up");
    }
  }, 1000);
};

onMounted(startTimer);

watch(
  () => props.duration,
  (newDuration) => {
    timeLeft.value = newDuration;
    clearInterval(timer);
    startTimer();
  }
);
</script>

<style lang="scss" scoped>
.timer {
  position: relative;
  width: 100%;
  height: 30px;
  background: #ddd;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.progress-bar {
  height: 100%;
  background: #ff4d4d;
  transition: width 1s linear;
}

.countdown {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
