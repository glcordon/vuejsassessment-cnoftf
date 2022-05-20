<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-if="isAdim">
      <textarea v-model="post.body">
        {{ post.body }}
      </textarea>
      <button @click.prevent="updateText()">Submit</button>
    </div>
    <div v-else>
      {{ post.body }}
    </div>
    <button @click.prevent="areYouAdmin()">Edit</button>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      post: [],
      pin: '1234',
      isAdim: false,
    };
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    areYouAdmin: function () {
      let data = prompt('Enter Your Admin Pin! (It is 1234)');

      data === this.pin ? (this.isAdim = true) : alert('Sorry');
    },
    updateText: function () {
      this.isAdim = false;
    },
  },
};
</script>
<style scoped>
textarea {
  height: 300px;
  width: 300px;
}
</style>
