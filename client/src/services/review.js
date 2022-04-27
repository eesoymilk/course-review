const headers = { "Content-Type": "application/json" };
const url = import.meta.env.VITE_VUE_APP_API_SERVER_URL + "/api/review";

export default class ReviewService {
  // R: GET BLOG
  static async getReviews() {
    try {
      const reviews = await (await fetch(url)).json();
      return reviews;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async getReview(id) {
    try {
      const review = await (await fetch(`${url}/${id}`)).json();
      return review;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // C: CREATE BLOG
  static async createReview(newReview) {
    try {
      console.log(newReview);
      // reviewValidation = ReviewService.validateReview(newReview);
      // if (!reviewValidation.isValid) throw new Error("Invalid Review.");
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(newReview),
      });
      console.log(res);
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }

  // U: UPDTAE BLOG
  static async updateReview(id, updatedReview) {
    try {
      console.log(id, updatedReview);
      const reviewValidation = ReviewService.validateReview(updatedReview);
      if (!reviewValidation.isValid) throw new Error("Invalid Review.");
      const res = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(updatedReview),
      });
      const json = await res.json();
      console.log(json);
      return reviewValidation;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // D: DELETE BLOG
  static async deleteReview(id) {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify({ id }),
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  // // VALIDATION
  // static validateReview = (review: Review): ReviewValidation => {
  //   let isValid = true;

  //   // All 3 functions must run.
  //   const titleErrors = this.validateTitle(review.title);
  //   const bodyErrors = this.validateBody(review.body);
  //   const tagsErrors = this.validateTags(review.tags);

  //   if (titleErrors || bodyErrors || tagsErrors) isValid = false;
  //   return { isValid, titleErrors, bodyErrors, tagsErrors } as ReviewValidation;
  // };

  // static validateTitle(title: string): string[] | null {
  //   const errors: string[] = [];

  //   if (!title) errors.push("A title is required.");
  //   if (title.length > 30) errors.push("The title is too long.");

  //   if (errors.length) return errors;
  //   return null;
  // }

  // static validateBody(body: string): string[] | null {
  //   const errors: string[] = [];

  //   if (!body) errors.push("A review content is required.");

  //   if (errors.length) return errors;
  //   return null;
  // }

  // static validateTags(tags: string[]): string[] | null {
  //   const errors: string[] = [];

  //   if (!tags.length) errors.push("Add at least ONE tag.");

  //   if (errors.length) return errors;
  //   return null;
  // }
}
