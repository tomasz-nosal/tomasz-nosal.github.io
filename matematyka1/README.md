# Gimnastyka umysłu — wrześniowa powtórka

Gotowa, statyczna strona po polsku. Strona startowa: **index.html**.

## Uruchomienie

Rozpakuj archiwum i otwórz `index.html` w przeglądarce. Do wspólnego zapisu postępu na wszystkich podstronach zalecane jest otwieranie witryny przez HTTP/HTTPS (np. GitHub Pages). Zachowanie localStorage dla plików otwieranych przez `file://` zależy od przeglądarki.

Opcjonalnie na komputerze, z katalogu strony: `python3 -m http.server 8000`, a następnie otwórz `http://localhost:8000`.

## GitHub Pages

1. Przenieś **zawartość** rozpakowanego katalogu do repozytorium: `index.html`, pozostałe pliki HTML, katalog `assets` oraz `.nojekyll`.
2. Skonfiguruj GitHub Pages, aby publikował katalog zawierający `index.html`.
3. Otwórz adres opublikowanej witryny.

Nie jest potrzebne npm, kompilowanie, baza danych, klucz API ani serwer aplikacyjny. Wszystkie odnośniki są względne, więc strona działa także pod adresem z nazwą repozytorium, np. `/nazwa-projektu/`. Grafika, style i skrypty są lokalne; witryna nie korzysta z zewnętrznych fontów, statystyk ani usług.

## Zawartość

- Strona główna i 7 osobnych podstron tematycznych.
- Powtórki, przykłady krok po kroku, pułapki i dodatkowe zagadki.
- Losowane ćwiczenia z podpowiedziami i rozwiązaniami.
- Test całego działu: 14 lub 21 zadań (po 2 lub 3 na temat).
- Test jednego tematu: 7 lub 14 zadań.
- Ocena każdej odpowiedzi, wyjaśnienia, końcowy medal i przegląd zadań.
- Punkty, 4 odznaki i ranking osobny dla każdej konkurencji.
- Responsywny wygląd oraz obsługa klawiatury.

## Materiał ze zdjęć

Autorska powtórka na podstawie zakresu z 13 załączonych zdjęć działu „Liczby i działania”, strony 10–32 oraz strona wprowadzająca:

| Podstrona | Zakres |
| --- | --- |
| `dodawanie.html` | Dodawanie i odejmowanie, nazwy, wygodne grupowanie, niewiadoma, ciągi i liczenie elementów przedziału |
| `o-ile.html` | Porównywanie różnicowe, zadania tekstowe i odczytywanie tabel |
| `mnozenie.html` | Tabliczka, nazwy, czynniki, niewiadome, własności zera i jedynki |
| `zera.html` | Mnożenie i dzielenie przez 10, 100, 1000 oraz działania z końcowymi zerami |
| `wieksze-liczby.html` | Rozkład na części, większe iloczyny i ilorazy, sprawdzanie mnożeniem |
| `ile-razy.html` | Porównywanie ilorazowe i odróżnianie „o ile” od „ile razy” |
| `reszta.html` | Dzielenie z resztą, sprawdzanie, podzielność i powtarzające się wzory |

Nie zamieszczono skanów podręcznika. Treść i zadania są napisane na nowo, w motywie gimnastycznym. Grafika została wygenerowana na potrzeby tej strony.

## Punkty i zapis

- Ćwiczenia: 5 pkt za prawidłową pierwszą odpowiedź bez podpowiedzi. Poprawna odpowiedź po podpowiedzi lub kolejnej próbie również zalicza trening stacji, ale bez punktów.
- Stacja przećwiczona: co najmniej 3 poprawnie rozwiązane ćwiczenia.
- Test: 10 pkt za każdą poprawną odpowiedź; brak kar za błąd i limitu czasu.
- Wynik testu zapisuje się po kliknięciu „Zobacz wynik i medal” przy ostatnim zadaniu. Przerwany test nie jest zapisywany.
- Podsumowanie: 100% — diamentowy układ; 80–99% — złoty; 60–79% — srebrny; poniżej 60% — odznaka wytrwałości.
- Kolekcja odznak: pierwszy finał, minimum 80%, wynik 100%, przećwiczenie wszystkich 7 stacji.
- Ranking przechowuje 100 ostatnich testów. Przy remisie uczestnicy dzielą miejsce. Punkty łączne i odznaki pozostają także po wypadnięciu starego wyniku z rankingu.
- Generator unika 300 ostatnio wylosowanych zadań, także między podejściami. W długiej historii przykłady mogą powrócić.
- Dane są zapisywane w `localStorage` pod kluczem `gimnastyka-umyslu-v1`. Postęp jest wspólny dla tej przeglądarki; pseudonimy podpisują wyniki, nie tworzą osobnych kont. Ranking nie jest globalny i nie synchronizuje urządzeń.
- Tryb prywatny, blokada pamięci, usunięcie danych witryny lub zmiana domeny mogą oznaczać utratę/brak wcześniejszego postępu. W razie błędu zapisu strona wyświetla komunikat.

## Edycja

- `assets/lessons.js` — teksty powtórek.
- `assets/engine.js` — generator i walidacja odpowiedzi.
- `assets/app.js` — widoki, ćwiczenia, testy i zapis danych.
- `assets/style.css` — motyw i wersja mobilna.
- `assets/gimnastyczka.webp` — ilustracja startowa.

Nie należy zapisywać w tej witrynie danych wrażliwych. Wyniki mają charakter zabawy i powtórki; zapis lokalny nie jest zabezpieczeniem przed ręczną zmianą punktów.

## Weryfikacja tej wersji

Przeszło 11 automatycznych testów: generowanie i poprawność działań, warunki dzielenia z resztą, brak powtórek między testami, odnośniki wszystkich 10 podstron, walidacja odpowiedzi, naliczanie punktów, pełny test 21 zadań, zapis i odczyt rankingu, remisy oraz niedostępna pamięć. Obsługę interfejsu sprawdzono w symulowanym DOM. Podgląd wizualny w przeglądarce nie był dostępny w środowisku przygotowania.
