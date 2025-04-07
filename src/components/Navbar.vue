<template>
  <nav :class="['navbar', { 'navbar-home': isHomePage }]">
    <a href="/" :class="['navbar-logo', { 'navbar-logo-home': isHomePage }]">Music Quiz</a>
    <ul class="navbar-links">
      <li>
        <router-link to="/" :class="{ 'navbar-link-home': isHomePage }">Accueil</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--dark-green);
  color: var(--white);
  font-family: var(--font-family);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* Default styles */
.navbar-logo {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar-logo:hover {
  color: var(--light-green);
}

.navbar-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar-links a {
  color: var(--light-green);
  text-decoration: none;
  font-weight: 500;
}

.navbar-links a:hover {
  color: var(--dark-green);
}

.navbar-links .router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

.navbar-home {
  background-color: var(--light-green);
}

.navbar-logo-home {
  color: var(--primary-color) !important;
}

.navbar-link-home {
  color: var(--primary-color) !important;
  text-decoration: none !important;
}

.navbar-link-home:hover {
  color: var(--dark-green) !important;
}
</style>
