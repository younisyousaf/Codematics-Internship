<template>
  <div class="content">
    <!-- <h2>This is Contacts Page</h2> -->
    <form @submit.prevent="onSubmit" class="custom-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    onSubmit() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.formData);
    }
  }

};
</script>


<style scoped>
.content {
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.custom-form {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>