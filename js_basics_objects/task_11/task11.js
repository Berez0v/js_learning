//считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
function mediumMark(arr) {
    arr.forEach(element => {
        // console.log(element["name"]); 
        let initialValue = 0;
        element["medium"] = (element["marks"].reduce((previousValue, currentValue) => previousValue + currentValue,
            initialValue)) / element["marks"].length;
        console.log(`Name: ${element["name"]}   Medium Mark : ${element["medium"]}`)
    });

}



// выводит учеников  у которых средняя оценка < 5(со средней оценкой <5)
function displayBadStudents(arr) {

    arr.forEach(student => {
        if (student["medium"] < 5) {
            console.log(student["name"])
        }
    }
    )
}



// находит учеников с максимальной и минимальной средней оценкой
function maxAndMinMark(arr) {
    let min = [Number.MAX_VALUE, " "]
    let max = [Number.MIN_VALUE, " "]
    arr.forEach(student => {
        if (student["medium"] > max[0]) {
            max[0] = student["medium"]
            max[1] = student["name"];
        }
        if (student["medium"] < min[0]) {
            min[0] = student["medium"];
            min[1] = student["name"];
        }
    })
    console.log(`Student with min medium mark: ${min[1]}, student with max medium mark: ${max[1]}`)
}



// сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
function sortingClass(arr) {
    arr.sort((a, b) => b["medium"] - a["medium"]);
}
//выводит тех учеников чья средняя оценка больше средней оценки всего класса
function greaterThanMedium (arr) {
   let med = arr.reduce((sum,current)=> {
    return sum+current["medium"];
   },0)/arr.length;
arr.forEach(element=>{
    if(element["medium"]>med){
        console.log(element);
    }
})   
}
let myClass = [
    { name: "First", marks: [8, 10, 6, 5, 8] },
    { name: "Second", marks: [5, 4, 2, 5, 4] },
    { name: "Third", marks: [3, 10, 5, 7, 10] },
    { name: "Fourth", marks: [3, 8, 7, 5, 9] },
    { name: "Fifth", marks: [5, 3, 8, 2, 6] }];


mediumMark(myClass);
displayBadStudents(myClass);
maxAndMinMark(myClass);
sortingClass(myClass);
greaterThanMedium(myClass);