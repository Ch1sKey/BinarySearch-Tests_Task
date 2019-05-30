function binarySearch(arr, find){
    if(arr.length === 0 ) return -1
    let start = 0
    let stop = arr.length - 1

    let middlePoint = Math.floor((start+stop)/2)

    while (arr[middlePoint] !== find && start <= stop){
        if(arr[middlePoint] > find){
            stop = middlePoint - 1
        }else{
            start = middlePoint + 1  
        }
        middlePoint = Math.floor((start+stop)/2)
    }
    return arr[middlePoint] === find ? middlePoint : -1
}


function binaryTest({array, find, expect, name}){
    const result = binarySearch(array, find)
    if(result === expect)
        console.log(`binaryTest[${name}] Passed!`)
    else
        throw new Error(`binaryTest[${name}] Fail with. ${array} to find ${find} ${result} returned but ${expect} expected`)
}

binaryTest({
    array: [1,2,3,4,5],
    find : 2,
    expect: 1,
    name : 'Basic test',
})


binaryTest({
    array: [],
    find : 2,
    expect: -1,
    name : 'Empty Array test',
})


binaryTest({
    array: [1,2,3,4], 
    find : 8,
    expect: -1,
    name : 'Incorrect number to find test',
})
 // Отсавим эти тесты тут как самыек важные и немного поиграем. 
 // Очень неудобно самому придумывать значения массивов для тестов. Давайте оставим это тестам 

 function createTest(size){
    let indexToFind = Math.floor(Math.random()*(size-1)) // Пусть числа будут в диапазоне от 0 до 1000. Больше не надо.
    let arr = Array(size).fill().map(x=>{
        let number = (Math.random()*1000)
        number *= Math.random() > 0.5 ? 1 : -1 // Они же еще могут быть отрицательными! Тогда в диапазоне |x| < 1000  
        return +number.toFixed(2)  // Пусть чила будут маскимум с 2 знаками после запятой. Ну просто так красивее.
    })
    arr.sort((a,b)=>a-b) // Не забудем отсортировать массив. 
    return {
        array: arr,
        find: arr[indexToFind], 
        expect: indexToFind,
        name : 'Automated Test'
    }
 }

let tests = Array(10).fill().map(x=>createTest(5))
tests.forEach(binaryTest)

// Можно было бы доработать еще немного эти тесты. Но мне кажется это уже перебор. 


