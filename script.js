const database = [
    {'name': "John", country:"Israel", age: 19, isMarried: true},
    {'name': "Mary", country:"Israel", age: 29, isMarried: false},
    {'name': "Bill", country:"Belgium", age: 10, isMarried: false},
    {'name': "Jane", country:"France", age: 30, isMarried: true},
    {'name': "Hanna", country:"France", age: 9, isMarried: false},
    {'name': "George", country:"Israel", age: 80, isMarried: true},
];


//1. Select and print all married person (filter)

console.log(database.filter(
    function (value){
        if (value.isMarried) {
            return true;
        }
    }
));

//2. Print database sorted by age ASC (min to max) (sort)

console.log(database.sort(
    function (value1, value2){
        if(value1.age>value2.age) return 1;
        if(value1.age===value2.age) return 0;
        if(value1.age<value2.age) return -1;
    }
));

//3. Calculate average age (reduce)

console.log(database.reduce(
    function (accumulator, value){
        return  accumulator + value.age / database.length;
    }, 0
))

//4. Print statistic by country
//{'Israel': 2, 'Belgium': 1 ...}

console.log(JSON.stringify(
database.reduce(
        function (acc, value){
            if(acc[value.country]){
                //defined previously
                acc[value.country] = acc[value.country] + 1;
            } else {
                //undefined, new value
                acc[value.country] = 1;
            }
            return acc;
        }, {}
    )
));

//5*.Print married person sorted ASC by name, not married DESC by age and average age of married person

const married = database.filter(
    function (value) {
        if (value.isMarried) {
            return true;
        }
    }
);

const not_married = database.filter(
    function (value) {
        if (!value.isMarried) {
            return true;
        }
    }
);

console.log(
    married.sort(
        function (value1, value2){
            if(value1.age>value2.age) return 1;
            if(value1.age===value2.age) return 0;
            if(value1.age<value2.age) return -1;
        }
    )
)

console.log(
    not_married.sort(
        function (value1, value2){
            if(value1.age<value2.age) return 1;
            if(value1.age===value2.age) return 0;
            if(value1.age>value2.age) return -1;
        }
    )
)

console.log(married.reduce(
    function (acc, value){
        return acc + value.age / married.length;
}, 0
));

//6. Remove user by position

database.slice()
