<template>
  <nav class="nav-bar">
    <router-link class="nav-links" :to="{ name: 'Home' }">
      <font-awesome-icon icon="home" class="fa-xl" />
      <span>Course Review</span>
    </router-link>
    <router-link class="nav-links" :to="{ name: 'Create' }">
      <font-awesome-icon icon="add" class="fa-xl" />
      <span>New Review</span>
    </router-link>
  </nav>
</template>
