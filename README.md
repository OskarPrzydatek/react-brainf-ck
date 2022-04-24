# BIU Brain*uck 

## 1. Założenia
- [ ] Program na wejściu pobiera od użytkownika kod źródłowy w języku Brainf*ck.
- [ ] Program powinien wykonać instrukcje zawarte w kodzie źródłowym. 
- [ ] Instrukcja pobierająca znak powinna spowodować przerwanie wykonania i poproszenie o wpisanie znaku przez użytkownika w formularzu z polem tekstowym.
- [ ] Użytkownik może podać w polu więcej znaków "z wyprzedzeniem". Instrukcja wyświetlająca znak powinna spowodować jego pokazanie w przeglądarce. Kolejne znaki powinny być pokazywane obok siebie.
- [ ] Po zakończeniu wykonywania programu lub w momencie, gdy pokazany jest formularz z prośbą o podanie znaku przez użytkownika.
- [ ] Do dyspozycji uruchamianego programu znajduje się pamięć o rozmiarze 3000 komórek.
- [ ] Interpreter, oprócz 8 podstawowych instrukcji języka Brainf*ck, wykrywa instrukcję *. Po natrafieniu na tę instrukcję wykonywanie kodu jest wstrzymane, a w przeglądarce zostają wyświetlone:  
    - [ ] Stan bieżącej komórki pamięci, wskazywanej przez “głowicę”, podświetlonej kolorem czerwonym, a także 15 wcześniejszych i 15 kolejnych komórek pamięci.
    - [ ] Podgląd fragmentu kodu źródłowego, na którym przerwano wykonanie – instrukcja * powodująca obecne przerwanie powinna być podświetlona na czerwono, a podgląd powinien obejmować również 15 znaków przed i 15 znaków za tym znakiem.
    - [ ] Link do kliknięcia, który powoduje wznowienie wykonywania kodu.

## Routing Aplikacji
- "/" - Strona główna z kompilatorem
- "/about" - Strona o języku Brainf*ck

## 3. O Języku Brainf*uck
https://pl.wikipedia.org/wiki/Brainfuck