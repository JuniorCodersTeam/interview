Pytania teoretyczne:

1. Co wyświetli poniższy kod? Dlaczego? Co chciał wyświetlić developer?

            <body>
              <div height="100%" background="blue"></div>
            </body>
  
  odp. developer chciał wyświetlić niebieskiego <div> na cały ekran, ale właściwość height="100%" nie ma skąd wziąć wartości,
        <div> pokaże się jako "niewidoczna" linia na całą szerokość strony
          

          
2. Co się zrobi pod każdym kodem?
          
          setTimeout(() => {
              console.log("jestem")
          }, 5000)

          setTimeout(() => {
              console.log("jestem")
          }, 0)

          setTimeout(() => {
              console.log("jestem")
          })

   odp. pierwszy wyświetli "jestem" po 5s", pozostałe od razu, a dokładnie tak: 
          If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.       
          
          
3. Metody REST API
          
          •	GET - pobieranie danych/sprawdzanie czy dane istnieją
          •	POST - tworzenie i przesłanie nowych zasobów - coś w stylu, że wystarczy podać w adresie /location/ a kolejny wpis np. /id stworzy sam
          •	PUT - modyfikowanie danego zasobu w całości, nie tylko tego co się zmienia - trzeba podać konkretne miejsce np /location/id
          •	PATCH - modyfikowanie danego zasobu, zmienia tylko część, która faktycznie uległa modyfikacji (różnica do PUT)
          •	DELETE - kasuje konkretny zasób
          
          
          •	CONNECT - tworzy połączenie użytkownika z serwerem np. do przesłania dużych plików
          •	OPTIONS - jeśli dobrze zrozumiałem - dostajesz informacje o możliwych endpointach, o ile serwer obsługuje
          •	TRACE - opcja diagnostyczna, która sprawdza czy działają zapytania, które może wykonać użytkownik, ale może być niebezpieczna, bo może ujawniać autentykacje
          •	HEAD - sprawdzanie czy dany zasób/dane istnieją - w odpowiedzi nie ma body

          
          
 
 ZADANIA PRAKTYCZNE:
          
          1. Ciąg Fibonacciego (0,1,1,2,3,5,8 itd.) – stwórz funkcję, która przyjmuje jeden argument w postacji liczby,
                                                      wyświetli wskazaną argumentem liczbę z ciągu 
                                                      np. argument = 4 , funkcja wyświetli 2
          
          rozwiązanie przykładowe
          
          function Fibo(number) {
                let prev = 0;
                let curr = 1;
                let score
                let toShow = [prev, curr]

                for (let i=0; i<number; i++) {
                    score = prev + curr

                    toShow.push(score)

                    prev = curr;
                    curr = score;
                }
                console.log(toShow[number-1])
            }

            Fibo(5)
                                        
                                        
                                        
2. Stwórz funkcję, która przyjmie liczbę jako argument, wyświetli sumę wszystkich cyfr tworzących liczbę/argument, 
                                        jeśli suma będzie większa niż jedna cyfra - sumuje dalej  
                                        
                                        
                                        
                                        
rozwiąznie:
                                        
                function One(number) {

                // if (number.toString().length === 1 ) {
                //     return number
                // } 

                let prev = number.toString().split("")

                let sum = 0;

                for (let i=0; i<prev.length; i++) {
                    sum += parseInt(prev[i])
                }

                // return One(sum)
                if ( sum.toString().length > 1) {
                    return One(sum)

                }

                return parseInt(sum)
            }

            console.log(One(155))
          
 
          
          
          
 3. Stwórz funkcję, która sprawdzi, czy podany argument jest potęgą liczby 2
          
          rozwiązanie Grzesiek:
          
          function Pot (number) {

                let prev = 2
                let curr = 2
                let sum

                for (let i=prev; i<number; i=curr) {
                    sum = prev * curr
                    curr = sum    
                }

                if(sum === number) {
                    console.log(number, "jest potęgą")
                }
                else {
                    console.log(number, "nie jest potęgą")
                }

            }

            Pot(4)
                                           
                                           
            rozwąizanie Kamil (rekurencja):
                                           
                                           
                      function powerOfTwo(num) {
                          if (num === 2) return true;
                          if (num % 2 === 0) {
                              return powerOfTwo(num / 2);
                          }
                          return false;
                      }

                      console.log(powerOfTwo(2))                     
                                           
