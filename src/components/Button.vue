<template>
<<<<<<< HEAD
  <button :class="['btn', size, customClass]" @click="$emit('click')">
=======
  <button :class="['btn', size, customClass]" @click="onClick">
>>>>>>> feature/Button
    <slot></slot>
  </button>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "BtnComponent",
  props: {
    size: {
      type: String,
      default: "medium", // small, medium, large
=======
  name: "Btn",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
>>>>>>> feature/Button
    },
    customClass: {
      type: String,
      default: "",
    },
  },
<<<<<<< HEAD
=======
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
>>>>>>> feature/Button
};
</script>

<style scoped>
.btn {
<<<<<<< HEAD
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
=======
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
  background-color: var(--secondary-color);
  color: var(--white);
}

.btn:hover {
  opacity: 0.9;
>>>>>>> feature/Button
}
</style>
