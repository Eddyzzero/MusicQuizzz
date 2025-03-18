<template>
  <nav class="navbar">
    <a href="/" class="navbar-logo">Music Quiz</a>
    <ul class="navbar-links">
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/categories">Catégories</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: var(--white);
  font-family: var(--font-family);
}

.navbar-logo {
  color: var(--white);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar-links a {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
}

.navbar-links a:hover {
  text-decoration: underline;
}

/* Add styles for router-link */
.navbar-links .router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
