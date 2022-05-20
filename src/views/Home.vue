<template>
  <div>
    <h1>All Posts</h1>
  </div>
  <div v-for="post in posts" :key="post.id" class="posts">
    <div id="post_header">
      <h2>
        {{ post.title }}
      </h2>
    </div>
    <div class="post_body">
      {{ post.body }}
    </div>
    <div class="post_button">
      <router-link :to="`/post/${post.id}`" :id="post.id">View</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  }
};
</script>
