const app = Vue.createApp({
    data() {
        return {
            header: 'Shopping List App',
            items: [
                { id: 1, label: '10 party hats' },
                { id: 2, label: '2 board games' },
                { id: 3, label: '20 cups' },
                {id: 4, label: 'The Compound Effect'}
            ],
            newitem: '',
            newitempriority: false,
            icecreamFlavors: [],
        }
    },
})
app.mount('#app');

for(var i = 1; i<=2; i++){
    if(i==2){
        console.log("---------Week 2 Started!---------")
    }
    for(var j = 1; j<=5; j++){
        console.log("Week : "+i+" "+"Day: "+j);

    }
}

//Summer Months
console.log("")
console.log("Summer Months");
var year, month;
for(year=2023; year <2025; year++){
    console.log("Year: "+year)
    for(month=5;month<=9;month++){
        console.log("..........",month);
    }
}
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 60px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
