<template>
  <nav class="navbar">
    <div class="navbar-logo">Music Quiz</div>
    <ul class="navbar-links">
      <li><a href="/">Accueil</a></li>
      <li><a href="/categories">Catégories</a></li>
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

.navbar-logo img {
  height: 40px;
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
</style>
