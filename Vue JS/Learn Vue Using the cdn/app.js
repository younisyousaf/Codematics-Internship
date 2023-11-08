const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            date: new Date(),
            seen: true,
            url: 'https://www.w3schools.com/',
            attributename: 'href', 
            multipleattributes: {
                id: 'container',
                class: 'wrapper'
            },
            google: 'https://www.google.com/',
        }
    },
    methods: {
        message: function () {
            return 'Welcome to the World of Vue.JS'
        },
        toTitleDate(date) {
            // Format the date for the 'title' attribute
            return date.toLocaleString();
        },
        formatDate(date) {
            // Format the date for display within the <time> tag
            return date.toDateString();
        },
        toggleVisibility() {
            this.seen = !this.seen
        },
        doSomething() {
            alert("You clicked the Link!");
        },
    }
}).mount("#app");



// setTimeout(()=>{
//     //Proxying
//     // A figure that can be used to represent the value of the something in a calculation
//     vm.firstName = 'Jane';
//     //Without a Proxy
//     // vm.$data.firstName = 'John'
// },2000)















// const app2 = Vue.createApp({
//     data() {
//         return {
//             firstName: 'Mitchell ',
//             lastName: 'Johnson',
//             count: 0,
//         }
//     },
//     }).mount("#app2")