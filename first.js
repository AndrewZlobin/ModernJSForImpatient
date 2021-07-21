/*
Пусть angle – некоторый угол, выраженный в градусах, который после
прибавления или вычитания других углов может принимать произволь-
ные значения. Вы хотите нормализовать его, так чтобы он попадал в диа-
пазон от 0 (включая) до 360 (не включая). Как это сделать с помощью
оператора %?
*/
let firstAngle = 100;
let secondAngle = 1000;
let referenceAngle = 359;
// Logs should be true
console.log(referenceAngle % firstAngle < referenceAngle)
console.log(referenceAngle % secondAngle === referenceAngle)

/*
Придумайте как можно больше способов породить строку с двумя знака-
ми обратной косой строки \\ в JavaScript, пользуясь описанными в этой
главе механизмами.
*/
let slash = '\\';
console.log(
    '\\\\',
    '\\' + '\\',
    slash + slash,
    `${slash}${slash}`
);

/*
Приведите реалистичный пример шаблонной строки с вложенным вы-
ражением, которое содержит еще одну шаблонную строку с вложенным
выражением.
 */
let someUserData = {
    name: 'Sam',
    age: 25
}

console.log(`Hello, my name is ${someUserData.name}, I'm ${someUserData.age} years old.\n
 I am from ${someUserData.hasOwnProperty('country') ? someUserData.country : 'this world'}`)

/*
Предложите три способа создать массив с «дыркой» в последовательно-
сти индексов.
 */
let testArray1 = [1, 2, , 4];
let testArray2 = [1, 2, undefined, 4];
let testArray3 = [1, 2, 3, 4];
testArray3.length = 7;

console.log(testArray1)
console.log(testArray2)
console.log(testArray3)

/*
Объявите массив с элементами в позициях 0, 0.5, 1, 1.5 и 2.
 */

let floatArray = [0, 1, 2];
floatArray['0.5'] = 0.5;
floatArray['1.5'] = 1.5;

console.log(floatArray, floatArray[0], floatArray['0.5'])

/*
Что происходит, когда массив массивов преобразуется в строку?
 */
let melancholyMagicSquare = [
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1]
]
console.log(melancholyMagicSquare.toString()); // 16,3,2,13,5,10,11,8,9,6,7,12,4,15,14,1

/*
Создайте два объекта, представляющих людей, и сохраните их в пере-
менных harry и sally. В каждый объект включите свойство friends, ко-
торое содержит массив друзей. Предположим, что harry – друг sally,
а sally – друг harry. Что произойдет при вызове метода log для каждого
объекта? А если вызвать метод JSON.stringify?
 */

let john = {};
let jane = {};

let harry = {
    friends: [
        'sally', 'john', john
    ]
}

let sally = {
    friends: [
        'harry', 'jane', harry
    ]
}

console.log(harry, JSON.stringify(harry));
console.log(sally, JSON.stringify(sally));
