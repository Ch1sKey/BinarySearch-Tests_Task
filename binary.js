function binarySearch(arr, find){
    if(arr.length === 0 ) return -1
    let start = 0
    let stop = arr.length - 1

    let middlePoint = Math.floor((start+stop)/2)

    while (arr[middlePoint] !== find && start < stop){
        if(arr[middlePoint] > find){
            stop = middlePoint - 1
        }else{
            start = middlePoint + 1  
        }
        middlePoint = Math.floor((start+stop)/2)
    }
    return arr[middlePoint] === find ? middlePoint : -1
}

let tests = []

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

// Обработаем варианты, при которых функция вернет -1
//(т.к мы ищем индекс элемента и в случве успеха функция вернет число, было бы неправильно возвращать что-то вроде false или undefined в случае неудачи)

binaryTest({
    array: [], //Ага. Найден первый баг. (Я этого не планировал). Добавим в функцию исключение для пустых массивов
    find : 2,
    expect: -1
})


binaryTest({
    array: [1,2,3,4], //Ага. Еще один баг. (Уже запланированный. Чтобы показать, что я понимаю, чем полезны тесты :з) В функции не хватает одно важного условия. 
    find : 8,
    expect: -1
})

// Все тесты успешно пройдены! Можно было бы остановиться на этом. В письмы не просиле не скатываться в оверинжиниринг, но позволю себе немного автоматизировать тесты в следующем коммите.

