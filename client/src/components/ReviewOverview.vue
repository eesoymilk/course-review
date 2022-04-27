<template>
  <div class="reviews-container">
    <div v-for="r in reviews" :key="r._id" class="review">
      <div class="course-info">
        <div>{{ r.semesterYear + r.department }}</div>
        <div>{{ r.courseName }} - {{ r.instructor }}</div>
        <div>學分數：{{ r.credits }}</div>
      </div>
      <div class="title" v-text="r.title"></div>
      <div class="review-info">
        {{ r.author }} 於
        {{ datefnsService.toTaipeiTimeFormat(r.createdAt, patt) }} 上傳
      </div>
      <div class="review-scores">
        <div>
          <span>甜度：</span>
          <font-awesome-icon
            v-for="i in 5"
            :icon="[i > r.sweetness ? 'far' : 'fas', 'star']"
            class="fa-xl"
          />
        </div>
        <div>
          <span>涼度：</span>
          <font-awesome-icon
            v-for="i in 5"
            :icon="[i > r.coolness ? 'far' : 'fas', 'star']"
            class="fa-xl"
          />
        </div>
      </div>
      <div class="snippet" v-text="makeSnippet(r.body)"></div>
      <router-link
        :to="{ name: 'ReviewDetails', params: { id: String(r._id) } }"
        class="read-more"
      >
        Read More
      </router-link>
    </div>
  </div>
</template>

<script setup>
import datefnsService from "../services/datefnsService.js";

defineProps(["reviews"]);

const patt = "yyyy/M/d HH:mm";
const makeSnippet = (body) => body.substr(0, 30) + "...";
</script>

<style>
.reviews-container {
  display: flex;
  flex-wrap: wrap;
}

.review {
  flex: 1 0 30%;
  margin: 2rem;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
}

.course-info-1,
.course-info-2,
.review-info,
.review-scores {
  display: flex;
  justify-content: space-between;
}

.read-more {
  display: inline-block;
  text-decoration: none;
  background: linear-gradient(90deg, #ff9966, #ff5e62);
  margin: auto;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
}

.read-more:hover {
  box-shadow: 0px 5px 1rem rgba(255, 94, 98, 0.5);
}
</style>
