<template>
  <div class="timer">
    <div class="progress-bar" :style="{ width: progressWidth }"></div>
    <p class="countdown">{{ timeLeft }}s</p>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 20, // Default timer set to 15 seconds
    },
  },
  data() {
    return {
      timeLeft: this.duration,
      timer: null,
    };
  },
  computed: {
    progressWidth() {
      return `${(this.timeLeft / this.duration) * 100}%`;
    },
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          this.$emit("timer-end");
        }
      }, 1000);
    },
    resetTimer(newDuration) {
      this.timeLeft = newDuration;
      clearInterval(this.timer);
      this.startTimer();
    },
  },
  watch: {
    duration(newDuration) {
      this.resetTimer(newDuration);
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer); // ✅ Clears timer when component is destroyed
  },
};
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
