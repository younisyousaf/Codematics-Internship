<template>
  <div class="content">
    <h1>Search Bar</h1>
    <input
      type="text"
      placeholder="Search Students Here..."
      v-model="searchstudent"
    />
    <div v-if="studentsList.length > 0">
      <div class="students" v-for="student in studentsList" :key="student.id">
        {{ student.id + ":" }}{{ "\t" + student.name }}
      </div>
    </div>
    <div v-else class="error">
      {{ err }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchstudent: "",
      studentsdata: [
        { id: 1, name: "Talha Muhammad Khan", age: 23 },
        { id: 2, name: "Zaid Mushtaq", age: 23 },
        { id: 3, name: "Hamza Jaleel", age: 22 },
        { id: 4, name: "Ishtiaq Yousaf", age: 23 },
        { id: 5, name: "Syed Zeeshan Shah", age: 23 },
        { id: 6, name: "Syed Jawad Hassan Shah", age: 23 },
      ],
      err: 'No Student Found!'
    };
  },
  computed: {
    studentsList() {
      if (this.searchstudent.length > 0) {
        return this.studentsdata.filter(student => 
        student.name.toLowerCase()
        .includes(this.searchstudent.toLowerCase())
        );
      }
      else{
        return [];
      }
      // return this.studentsdata;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  color: whitesmoke;
  text-align: center;
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 15px 45px;
  background: white url("../assets/search-svgrepo-com.svg") no-repeat 15px
    center;
  background-size: 28px 28px;
  outline: none;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}
input::placeholder {
  font-size: 18px;
}
.students {
  background: rgb(180, 135, 221);
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  border-radius: 5px;
  color: #212121;
  font-size: 1.2em;
}
.error {
  background: rgb(215, 11, 11);
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  border-radius: 5px;
  color: #f1f1f1;
  font-size: 1.2em;
}
</style>
