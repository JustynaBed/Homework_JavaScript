# Ex 13
### Contacts Book

Funkcje, które chciałbym zobaczyć w gotowej aplikacji:

1. Dodawanie nowych kontaktów
2. Usuwanie istniejących kontaktów
3. _Edycja wybranego kontaktu_ (to dla chętnych - traktujcie to jak challenge :smiling_imp:)

Kontaktem nazywamy obiekt symbolizujący osobę i informacje pozwalające się z nią skontaktować.

Chciałbym, żeby formularz służący do dodawania kontaktu zawierał takie pola jak:
- imię i nazwisko (jedno pole, bez walidacji, bo: https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)
- numer telefonu (bez walidacji, bo https://github.com/googlei18n/libphonenumber/blob/master/FALSEHOODS.md)
- adres e-mail (bez walidacji, bo https://haacked.com/archive/2007/08/21/i-knew-how-to-validate-an-email-address-until-i.aspx/)
- pole na wpisanie kategorii, do których zaliczamy daną osobę (np. rodzina, praca) - jedno pole na wpisanie wartości oddzielonych przecinkami

Chciałbym, żeby pod formularzem wyświetlała się lista kontaktów:
- zrobiona za pomocą listy nienumerowanej (`<ul>`)
- imię i nazwisko niech będzie pogrubione (`<strong>`)
- pod imieniem i nazwiskiem niech w jednej linii wyświetlają się: numer telefonu i adres e-mail (oddzielone przecinkiem i spacją - tak jak normalnie w zdaniu)
- ostatnim elementem listy będą nazwy kategorii - tutaj daję małe utrudnienie: kategorie przy zapisywaniu formularza podajemy jako tekst z przecinkami, ale przy wyświetlaniu chciałbym, żeby nazwa każdej kategorii znalazła się w nawiasach kwadratowych (np. `[rodzina], [praca]`)

W zadaniu pozostawiam Wam dużą swobodę - docenię, jeżeli ktoś skupi się na esencji, nie dotknie w ogóle CSS i wykona projekt najprostszy, najbardziej zbliżony do powyższej specyfikacji :wink:
