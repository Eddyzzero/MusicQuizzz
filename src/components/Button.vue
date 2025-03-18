<template>
  <button :class="['btn', size, customClass]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-family: var(--font-family);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.btn.medium {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.btn.large {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}

.btn.primary {
  background-color: var(--primary-color);
  color: var(--white);
}

.btn.secondary {
  background-color: var(--dark-green);
  color: var(--white);
}

.btn:hover {
  opacity: 0.9;
}
</style>
