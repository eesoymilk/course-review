<template>
  <div class="review">
    <div class="course-info">
      <div>{{ review.semesterYear + review.department }}</div>
      <div>{{ review.courseName }} - {{ review.instructor }}</div>
      <div>學分數：{{ review.credits }}</div>
    </div>
    <div class="title" v-text="review.title"></div>
    <div class="review-info">
      {{ review.author }} 於
      {{ datefnsService.toTaipeiTimeFormat(review.createdAt, patt) }} 上傳
    </div>
    <div class="review-scores">
      <div>
        <span>甜度：</span>
        <font-awesome-icon
          v-for="i in 5"
          :icon="[i > review.sweetness ? 'far' : 'fas', 'star']"
          class="fa-xl"
        />
      </div>
      <div>
        <span>涼度：</span>
        <font-awesome-icon
          v-for="i in 5"
          :icon="[i > review.coolness ? 'far' : 'fas', 'star']"
          class="fa-xl"
        />
      </div>
    </div>
    <div class="review-body" v-text="review.body"></div>
    <div class="action-bar">
      <div class="action-btn edit-btn">
        <font-awesome-icon :icon="['fas', 'pen']" class="fa-xl" />
        <span>Edit</span>
      </div>
      <div class="action-btn delete-btn" @click="deleteReview()">
        <font-awesome-icon :icon="['fas', 'trash-can']" class="fa-xl" />
        <span>Delete</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ReviewService from "../services/review";
import datefnsService from "../services/datefnsService.js";

const patt = "yyyy/M/d HH:mm";
const route = useRoute();
const router = useRouter();
const reviewId = route.params.id;
const review = ref(await ReviewService.getReview(reviewId));
const deleteReview = async () => {
  if (await ReviewService.deleteReview(reviewId)) router.push({ name: "Home" });
};
</script>

<style>
.review > div {
  margin: 0.25rem;
  padding: 0.25rem;
}

.title {
  font-size: 1.5rem;
}

.review-info {
  font-size: 0.75rem;
  color: gray;
}

.review-body {
  margin-top: 1rem;
}

.action-bar {
  display: flex;
  justify-content: flex-end;
}

.action-btn {
  background-color: gray;
  padding: 0.4rem;
  margin: 0.25rem;
  border-radius: 50px;
  cursor: pointer;
}

.action-btn * {
  color: whitesmoke;
}

.edit-btn {
  background: linear-gradient(90deg, #afb5b9, #4c5677);
  box-shadow: 0px 5px 1rem rgba(2, 14, 104, 0.5);
}

.delete-btn {
  background: linear-gradient(90deg, #ff9966, rgb(228, 37, 12));
  box-shadow: 0px 5px 1rem rgba(255, 94, 98, 0.5);
}
</style>
