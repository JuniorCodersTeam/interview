1.
W .container {display: flex} są 3 elementy .element {width: 50px}. 
Jak zachowa się element będący ostatnim dzieckiem .container kiedy ustawimy mu flex-grow: 1, a jego rodzeństwu nie ustawimy tej właściwości?
Odp:
Element zajmie całą dostępną pozostałą szerokość. 

2.
Roztargniony pisarz kodu zapomniał o atrybucie wskazującym na adres (www.dodupy.pl), do jakiego ma kierować link. Link posiada na szczęście id="link-do-dupy". Mógłbyś mu jakoś pomóc?
Odp:
```javascript
const link = document.querySelector("#dupalink").setAttribute("href", "www.dupa.pl")
```

3.
Jaka jest różnica między pętlami `while` i `do while`
Odp:

Pętla `while` przechodzi przez blok kodu tak długo, jak określony warunek jest prawdziwy.

```javascript
while (condition) {
  // code block to be executed
}
```
Pętla `do while` jest odmianą pętli `while`. Ta pętla wykona blok kodu raz, przed sprawdzeniem, czy warunek jest prawdziwy, a następnie będzie powtarzać pętlę, dopóki warunek jest prawdziwy. Pętla zawsze zostanie wykonana co najmniej raz, **nawet jeśli warunek jest fałszywy**, ponieważ blok kodu jest wykonywany przed sprawdzeniem warunku.

```javascript
do {
  // code block to be executed
}
while (condition);
```
[docs] - https://www.w3schools.com/js/js_loop_while.asp

4.
O czym powinniśmy pamiętać, aby operacje JavaScript wykonywane na DOM mogły działać prawidłowo?
Odp:
DOMContentLoaded - jest specjalnym zdarzeniem, uruchamiającym się w momencie załadowania drzewa DOM.
Nasz cały kod JavaScript operujący na DOM powinien znajdować się wewnątrz obsługi tego zdarzenia. 
Inaczej nie mamy gwarancji, że element którego szukamy, został już stworzony!
Jeżeli wykonujesz operacje na DOM, upewnij się, że całe drzewo DOM zostało stworzone!

```javascript
document.addEventListener("DOMContentLoaded", function () {
   console.log("DOM fully loaded and parsed!");
});
```

5.
Co to jest Closure / Domknięcie?
Odp:
Używamy tego konceptu, gdy tworzymy funkcję wewnętrzną. Ma ona dostęp do zmiennych i parametrów funkcji zewnętrznej, nawet gdy funkcja zewnętrzna już zakończyła działanie.

Domknięcie pozwala na dostęp do danych wewnątrz funkcji bez potrzeby bezpośredniego modyfikowania ich. W taki sposób możesz chronić swój kod, dając innym możliwość rozbudowywania go - zwłaszcza gdy udostępniasz innym swoją bibliotekę.

[docs] - https://www.w3schools.com/js/js_function_closures.asp

```javascript
const sayHelloTo = name => {
  let message = ‘Hello ‘ + name;
  return () => console.log(message);
}
const sayHelloToAmy = sayHelloTo(‘Amy’);
sayHelloToAmy(); // Hello Amy
```

6.
funkcja bind() - co to takiego
Odp:
Za pomocą metody `bind()` obiekt może "pożyczyć" metodę od innego obiektu.
Gdy funkcja jest używana jako wywołanie zwrotne, np w `setTimeout`, (przykład poniżej)
`this` zostaje utracone. Metoda `bind()` rozwiązuje ten problem. [docs] - https://www.w3schools.com/js/js_function_bind.asp

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
```

Przykład:
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        let x = document.getElementById("demo");

        x.innerHTML = this.firstName + " " + this.lastName;
    }
}

person.display();
setTimeout(person.display, 3000); // undefined undefined

let display = person.display.bind(person);
setTimeout(display, 3000); // John Doe
```




Zadanie 1:

Napisz funkcję, która pobiera liczbę całkowitą i zwraca sumę bitów, które są równe jeden w binarnej reprezentacji tej liczby. Dane wejściowe nie są ujemne.

Przykład: binarna reprezentacja liczby 1234 to 10011010010, więc w tym przypadku funkcja powinna zwrócić 5

Rozwiązanie 1:
```javascript
countBits = n => n.toString(2).split('0').join('').length;
```

Rozwiązanie 2:
```javascript
var countBits = function(n) {
  
  return [...n.toString(2)].map(el => +el).reduce((acc, val) => acc + val)
  
};
```

```javascript
countBits(0) // 0 - 0
countBits(4) // 1 - 100
countBits(7) // 3 - 111
countBits(9) // 2 - 1001
countBits(10) // 2 - 1010
countBits(350) // 6 - 101011110
countBits(1983) // 10 - 11110111111
```

Zadanie 2:

Napisz funkcję `getMissingElement`, która ma przyjmować tylko jeden argument: tablicę zawierającą rosnące liczby całkowite. 

Funkcja ta ma zwracać pierwszą brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). 

Jeżeli w tablicy nie ma brakujących liczb lub jst pusta, to funkcja ma zwracać `null`.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]) => -1
```

```javascript
function getMissingElement(arr) {
    if (!arr.length) return null;
    for (let i = 0 ; i < arr.length ; i++) {
        if (Math.abs(arr[i + 1] - arr[i]) > 1) {
            return arr[i] + 1
        }
    }
    return null;
};
```

