<template>
  <button :class="['btn', size, customClass]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BtnComponent",
  props: {
    size: {
      type: String,
      default: "medium", // small, medium, large
    },
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}

.btn.small {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
}

.btn.medium {
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
}

.btn.large {
  font-size: 1.2rem;
  padding: 1rem 2rem;
}
</style>
