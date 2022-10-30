/*  Ex1 */
function checkNum(num) {
    if (num <= 0) {
        return true
    } else return false
}
console.log(checkNum(0));

/*  Ex2 */

function nextNum(num) {
    return num + 1;
}
console.log(nextNum(100));

/*  Ex3 */
const info = ['ahmad568', 'ahmad', 'zahran', '55555'];

function checkStringOfNumbers(arr) {
    arr.forEach(str => {
        if (/\d/.test(str)) {
            console.log([str]);
        } else {
            console.log([]);
        }
    });
}

checkStringOfNumbers(info);


/*  Ex4 */


function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

console.log(checkEvenOrOdd(2222222));
console.log(checkEvenOrOdd(5));

/*  Ex5 */


const testName = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';

function changeString(str, from, to) {
    const newArray = str.split('');
    newArray.forEach((letter, index) => {
        if (letter === from) {
            newArray[index] = to;
        }
    })
    return newArray.join('');
}

console.log(changeString(testName, 'h', 'o'));

/*  Ex6*/
const allNames = ['Rawan', 'Jafar', 'Muhammad', 'Muhammad', "Esraa", 'Dareen'];
function returnNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
returnNames(allNames);

/*  Ex7*/
function returnNames(arr) {
    arr.forEach(name => {
        console.log(name);
    })
}
returnNames(allNames);
/*  Ex8*/
let newSeries = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
]
function projectOne() {
    const newArray = [];
newSeries.forEach(obj=>{
 newArray.push({'id':obj.id, 'title':obj.title});
})
return newArray;
}
console.log(projectOne());



/*  Ex9*/
function projectTwo() {
const newArray = newSeries.map(obj=>({'id':obj.id, 'title':obj.title}))
return newArray;
}
console.log(projectTwo());
/*  Ex10*/
function projectThree() {
const newArray = newSeries.filter(obj=>(obj.rating<5))
return newArray;
}
console.log(projectThree());
