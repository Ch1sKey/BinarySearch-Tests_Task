function binarySearch(arr, find){
    let start = 0
    let stop = arr.length - 1

    let middlePoint = Math.floor((start+stop)/2)

    while (arr[middlePoint] !== find){
        if(arr[middlePoint] > find){
            stop = middlePoint - 1
        }else{
            start = middlePoint + 1  
        }
        middlePoint = Math.floor((start+stop)/2)
    }
    return arr[middlePoint] === find ? middlePoint : -1
}

function binaryTest({array, find, expect}){
    const result = binarySearch(array, find)
    if(result === expect)
        console.log('binaryTest Passed!')
    else
        throw new Error(`binaryTest Fail. ${result} returned but ${expect} expected`)
}

binaryTest({
    array: [1,2,3,4,5],
    find : 2,
    expect: 1
})

// Теперь приступим к самой функции. И так. Раз уж мы выполняем банарный поиск. Будем считать, что массив, передаваемыв в функцию изначально отсортирован
// Будем исползовать массив с числами, потому что так нагляднее. Хотя, если данные отсортированы, они могут быть любыми.

//Думаю, нет смысла разбивать написание функции на коммиты.
//О чудо! Тест работает. Напишем еще... 