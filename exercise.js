//Promise Exercise
/*
Promise to obiekt, ktory reprezentuje wartosc, ktora moze nie byc dostepna od razu, ale zostanie zwrocona w przyszlosci.
Promise moze byc zakonczony sukcesem (resolve) lub niepowodzeniem (reject), i pozwala na latwe zarzadzenie operacji asynchrnicznych


const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));

/*
async/await to skladnia, ktora umozliwia latwe zarzadzanie asynchronicznymi funkcjami, ktore zwracaja Promises,
async oznacza, ze funkcja zwraca Promise, a await blokuje dalsze wykonywanie funkcji, az Promise zostanie rozwiazany.
Przyklad uzycia async/await:


const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000);
    });
};

const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchDataAsync();

/*

RxJS to biblioteka, ktora umozliwia reaktywne programowanie w JavaScript, pozwalajac na latwe zarzadzenia strumieniami danych.
RxJS oferuje wiele operatorow, ktore pozwalaja na transformacje, filtorwanie i laczenie strumieni. Przyklad uzycia RxJS:


import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const numbers = ([1, 2, 3, 4, 5, 6, 7, 8, 9]);

numbers.pipe(
    filter(number => number % 2 === 0),
    map(number => number * 2)
).subscribe(result => console.log(result));

*/

// ustawienie timeout na 2 sekundy a potem wyswietlenie komunikatu
/*
function delayedFunc() {
    setTimeout(() => {
        console.log("Timeout elapsed!");
    }, 2000);
}

delayedFunc();

// Pobieranie danych z API i przetwarzanie ich

async function getDataAndProcess () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        const result = `Title: ${data.title}, Completed: ${data.completed}`;
        document.getElementById('result').textContent = result;
    } catch (error) {
        console.log(error);
    }
}

getDataAndProcess();


// Laczenie kilku requestow z uzyciem Promise.all


async function sumOfData() {
    try {
        const response1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
        const response3 = fetch('https://jsonplaceholder.typicode.com/todos/3');
        const data = await Promise.all([response1, response2, response3]);
        const result = data.reduce((sum, { id }) => sum + id, 0);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

sumOfData();

*/


// Wykorzystanie RxJS do przetwarzania strumienia danych


