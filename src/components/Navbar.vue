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
  /* Default background color */
  color: var(--white);
  font-family: var(--font-family);
  position: fixed;
  /* Keeps navbar at the top */
  top: 0;
  /* Aligns navbar at the top of the page */
  width: 100%;
  /* Full width of the screen */
  z-index: 1000;
  /* Ensures navbar is on top of other elements */
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
  /* Ensures color stays the same on hover */
}

.navbar-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar-links a {
  color: var(--light-green);
  /* Default link color */
  text-decoration: none;
  font-weight: 500;
}

.navbar-links a:hover {
  color: var(--dark-green);
  /* Hover color */
}

/* Active route styles */
.navbar-links .router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

/* Home page specific styles */
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
