/* Generator zadań: bez zależności, działa również po otwarciu index.html. */
(function(root){
'use strict';
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[rnd(0,a.length-1)];
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=rnd(0,i);[a[i],a[j]]=[a[j],a[i]];}return a;};
function parseNumber(s){s=String(s).trim().replace(/\s/g,'').replace(',','.');return /^\d+(?:\.\d+)?$/.test(s)&&Number.isFinite(Number(s))?Number(s):null;}
function generate(topic,variant){
 let a,b,c,q;const t=Number(topic);const v=variant??rnd(0,5);
 const make=(prompt,answers,explanation,hint,extra={})=>({topic:t,prompt,answers:Array.isArray(answers)?answers:[answers],explanation,hint,...extra});
 if(t===0){
 a=rnd(24,260);b=rnd(11,90);
 if(v===0)q=make(`Oblicz: ${a} + ${b}`,a+b,`${a} + ${Math.floor(b/10)*10} + ${b%10} = ${a+b}. Rozłóż drugi składnik na dziesiątki i jedności.`,`Dodaj najpierw dziesiątki, potem jedności.`,{calc:`${a}+${b}`});
 if(v===1){a+=b;q=make(`Oblicz: ${a} − ${b}`,a-b,`${a} − ${Math.floor(b/10)*10} − ${b%10} = ${a-b}.`,`Odejmuj etapami.`,{calc:`${a}-${b}`});}
 if(v===2){b=rnd(1,9);q=make(`Połącz wygodnie składniki: ${a} + ${b} + ${10-b}`,a+10,`${b} + ${10-b} = 10, więc ${a} + 10 = ${a+10}.`,`Znajdź parę dającą pełną dziesiątkę.`,{calc:`${a}+10`});}
 if(v===3)q=make(`Znajdź x: x + ${b} = ${a+b}`,a,`x = ${a+b} − ${b} = ${a}. Sprawdzenie: ${a} + ${b} = ${a+b}.`,`Od sumy odejmij znany składnik.`,{calc:`${a+b}-${b}`});
 if(v===4){b=rnd(2,15);q=make(`Jaka liczba jest następna? ${a}, ${a+b}, ${a+2*b}, ${a+3*b}, …`,a+4*b,`Każdy krok to +${b}. Następny: ${a+3*b} + ${b} = ${a+4*b}.`,`Oblicz różnicę między sąsiednimi liczbami.`,{calc:`${a}+4*${b}`});}
 if(v===5){b=a+rnd(8,30);q=make(`Numery zawodniczek to wszystkie liczby od ${a} do ${b} włącznie. Ile jest zawodniczek?`,b-a+1,`${b} − ${a} + 1 = ${b-a+1}. Dodajemy 1, bo liczymy oba końce.`,`Spróbuj najpierw z numerami od 3 do 5: to 3 osoby!`,{calc:`${b}-${a}+1`});}
 }
 if(t===1){a=rnd(20,110);b=rnd(3,19);
 if(v===0)q=make(`Maja zebrała ${a} punktów, a Lena o ${b} więcej. Ile punktów ma Lena?`,a+b,`„O ${b} więcej” oznacza dodawanie: ${a} + ${b} = ${a+b}.`,`Więcej o pewną liczbę → dodaj.`,{calc:`${a}+${b}`});
 if(v===1)q=make(`Na sali jest ${a} wstążek i o ${b} mniej obręczy. Ile jest obręczy?`,a-b,`„O ${b} mniej” to ${a} − ${b} = ${a-b}.`,`Mniej o pewną liczbę → odejmij.`,{calc:`${a}-${b}`});
 if(v===2)q=make(`Drużyna Różowa ma ${a+b} punktów, a Miętowa ${a}. O ile więcej ma Różowa?`,b,`${a+b} − ${a} = ${b}. Szukamy różnicy.`,`Od większej liczby odejmij mniejszą.`,{calc:`${a+b}-${a}`});
 if(v===3)q=make(`Lena ma ${a+b} naklejek. To o ${b} więcej niż Maja. Ile naklejek ma Maja?`,a,`Maja ma mniej: ${a+b} − ${b} = ${a}.`,`Uwaga: pytamy o osobę, która ma mniej.`,{calc:`${a+b}-${b}`});
 if(v===4)q=make(`Maja zrobiła ${a} podskoków, czyli o ${b} mniej niż Lena. Ile podskoków zrobiła Lena?`,a+b,`Lena zrobiła więcej: ${a} + ${b} = ${a+b}.`,`Przeczytaj, o którą osobę pytamy.`,{calc:`${a}+${b}`});
 if(v===5)q=make(`Wstążka ma ${a+b} cm, a szarfa ${a} cm. O ile centymetrów szarfa jest krótsza?`,b,`${a+b} − ${a} = ${b} cm.`,`Porównanie „o ile” wymaga odejmowania.`,{calc:`${a+b}-${a}`,unit:'cm'});
 }
 if(t===2){a=rnd(2,10);b=rnd(2,10);
 if(v===0)q=make(`Oblicz iloczyn: ${a} · ${b}`,a*b,`${a} grup po ${b} to ${a*b}. Iloczyn jest wynikiem mnożenia.`,`Skorzystaj z tabliczki mnożenia.`,{calc:`${a}*${b}`});
 if(v===1)q=make(`Oblicz iloraz: ${a*b} : ${b}`,a,`${a*b} : ${b} = ${a}, bo ${a} · ${b} = ${a*b}.`,`Jaką liczbę trzeba pomnożyć przez dzielnik?`,{calc:`${a*b}/${b}`});
 if(v===2)q=make(`Znajdź x: ${a} · x = ${a*b}`,b,`x = ${a*b} : ${a} = ${b}.`,`Działaniem odwrotnym do mnożenia jest dzielenie.`,{calc:`${a*b}/${a}`});
 if(v===3){c=rnd(2,4);q=make(`Na ${a} półkach leżą po ${b} pudełka. W każdym pudełku są ${c} wstążki. Ile wstążek jest razem?`,a*b*c,`${a} · ${b} · ${c} = ${a*b} · ${c} = ${a*b*c}.`,`Pomnóż liczbę półek, pudełek na półce i wstążek w pudełku.`,{calc:`${a}*${b}*${c}`});}
 if(v===4){a=rnd(12,99);const zero=pick([true,false]);q=make(`Oblicz: ${a} · ${zero?0:1}`,zero?0:a,zero?'Każda liczba pomnożona przez 0 daje 0.':'Mnożenie przez 1 nie zmienia liczby.',`Pomyśl o ${zero?'zerowej':'jednej'} grupie.`,{calc:`${a}*${zero?0:1}`});}
 if(v===5)q=make(`Znajdź dzielnik x: ${a*b} : x = ${a}`,b,`x = ${a*b} : ${a} = ${b}. Sprawdzenie: ${a*b} : ${b} = ${a}.`,`Iloraz pomnożony przez dzielnik daje dzielną.`,{calc:`${a*b}/${a}`});
 }
 if(t===3){a=rnd(11,98);b=pick([10,100,1000]);
 if(v===0)q=make(`Oblicz: ${a} · ${b}`,a*b,`${a} · ${b} = ${a*b}. W tym działaniu na liczbach naturalnych dopisujemy ${b===10?"jedno zero":b===100?"dwa zera":"trzy zera"}.`,`Policz zera w drugim czynniku.`,{calc:`${a}*${b}`});
 if(v===1)q=make(`Oblicz: ${a*b} : ${b}`,a,`${a*b} : ${b} = ${a}. Usuwamy tyle końcowych zer, ile jest w ${b}.`,`Sprawdź wynik mnożeniem.`,{calc:`${a*b}/${b}`});
 if(v===2){a=rnd(2,9)*10;b=rnd(2,9)*10;q=make(`Oblicz: ${a} · ${b}`,a*b,`${a/10} · ${b/10} = ${a*b/100}. Dopisz dwa zera: ${a*b}.`,`Najpierw pomnóż liczby bez końcowych zer.`,{calc:`${a}*${b}`});}
 if(v===3){a=rnd(2,9);b=rnd(2,9)*100;q=make(`Oblicz: ${a*b} : ${b}`,a,`${a*b} : ${b} = ${a*b/100} : ${b/100} = ${a}.`,`Skróć po tyle samo końcowych zer w obu liczbach.`,{calc:`${a*b}/${b}`});}
 if(v===4){a=rnd(11,40);q=make(`Oblicz sprytnie: ${a} · 2 · 5`,a*10,`2 · 5 = 10, więc ${a} · 10 = ${a*10}.`,`Najpierw poszukaj pary czynników dającej 10.`,{calc:`${a}*2*5`});}
 if(v===5){a=rnd(2,9);b=rnd(2,9)*10;q=make(`Klub kupił ${a*10} wstążek po ${b} zł. Ile zapłacił?`,a*10*b,`${a*10} · ${b} = ${a*10*b} zł.`,`Cena jednej sztuki razy liczba sztuk.`,{calc:`${a*10}*${b}`,unit:'zł'});}
 }
 if(t===4){a=rnd(12,39);b=rnd(2,8);c=Math.floor(a/10)*10;
 if(v===0||v===1)q=make(`Oblicz: ${b} · ${a}`,a*b,`${b} · ${a} = ${b} · ${c} + ${b} · ${a%10} = ${b*c} + ${b*(a%10)} = ${a*b}.`,`Rozbij liczbę dwucyfrową na dziesiątki i jedności.`,{calc:`${b}*${a}`});
 if(v===2||v===3)q=make(`Oblicz: ${a*b} : ${b}`,a,`${a*b} = ${b*c} + ${b*(a%10)}. Zatem ${a*b} : ${b} = ${c} + ${a%10} = ${a}.`,`Podziel dzielną na wygodne części, podzielne przez dzielnik.`,{calc:`${a*b}/${b}`});
 if(v===4)q=make(`W ${b} rzędach leży po ${a} obręczy. Ile obręczy jest razem?`,a*b,`${b} · ${a} = ${a*b}. Możesz obliczyć ${b} · ${c} i ${b} · ${a%10}, a potem dodać.`,`Pomnóż liczbę rzędów przez liczbę obręczy w rzędzie.`,{calc:`${a}*${b}`});
 if(v===5){b=rnd(2,6);q=make(`Sprawdź mnożeniem: ${a*b} : ${a} = ?`,b,`${b} · ${a} = ${a*b}, więc ${a*b} : ${a} = ${b}.`,`Spróbuj kolejno małych wielokrotności dzielnika.`,{calc:`${a*b}/${a}`});}
 }
 if(t===5){a=rnd(5,30);b=rnd(2,6);
 if(v===0)q=make(`Lena ma ${a} naklejek, a Maja ${b} razy tyle. Ile naklejek ma Maja?`,a*b,`${a} · ${b} = ${a*b}. „${b} razy tyle” oznacza mnożenie.`,`Razy więcej → mnożenie.`,{calc:`${a}*${b}`});
 if(v===1)q=make(`Duża szarfa ma ${a*b} cm, a mała jest ${b} razy krótsza. Ile centymetrów ma mała?`,a,`${a*b} : ${b} = ${a} cm.`,`Razy mniej → dzielenie.`,{calc:`${a*b}/${b}`,unit:'cm'});
 if(v===2)q=make(`Ile razy liczba ${a*b} jest większa od ${a}?`,b,`${a*b} : ${a} = ${b}.`,`Pytanie „ile razy” wymaga dzielenia.`,{calc:`${a*b}/${a}`});
 if(v===3)q=make(`Maja ma ${a*b} punktów, czyli ${b} razy więcej niż Lena. Ile punktów ma Lena?`,a,`Lena ma mniej: ${a*b} : ${b} = ${a}.`,`Ustal, która osoba ma mniej.`,{calc:`${a*b}/${b}`});
 if(v===4)q=make(`Maja ma ${a} obręczy. To ${b} razy mniej niż klub. Ile obręczy ma klub?`,a*b,`Klub ma więcej: ${a} · ${b} = ${a*b}.`,`Pytamy o większą liczbę, więc pomnóż.`,{calc:`${a}*${b}`});
 if(v===5)q=make(`W klubie jest ${a} piłek i ${b} razy więcej wstążek. O ile więcej jest wstążek niż piłek?`,a*b-a,`Wstążek jest ${a} · ${b} = ${a*b}. Różnica: ${a*b} − ${a} = ${a*b-a}.`,`Najpierw policz wstążki, a potem różnicę.`,{calc:`${a}*${b}-${a}`});
 }
 if(t===6){b=rnd(3,12);c=rnd(0,12);a=b*c+rnd(0,b-1);
 if(v===0||v===1)q=make(`Podziel z resztą: ${a} : ${b}`,[Math.floor(a/b),a%b],`${a} : ${b} = ${Math.floor(a/b)} reszta ${a%b}. Sprawdzenie: ${Math.floor(a/b)} · ${b} + ${a%b} = ${a}. Reszta jest mniejsza niż ${b}.`,`Znajdź największą wielokrotność ${b}, która nie przekracza ${a}.`,{operands:[a,b],labels:['Iloraz','Reszta']});
 if(v===2)q=make(`Trenerka ma ${a} naklejek. Wkłada po ${b} do paczki. Ile pełnych paczek zrobi i ile naklejek zostanie?`,[c,a%b],`${a} = ${c} · ${b} + ${a%b}. Pełnych paczek: ${c}; zostaje: ${a%b}.`,`Liczą się tylko pełne paczki. Reszta nie wystarcza na kolejną.`,{labels:['Pełne paczki','Pozostałe naklejki'],operands:[a,b]});
 if(v===3)q=make(`Znajdź x: x : ${b} = ${c} reszta ${a%b}`,a,`x = ${c} · ${b} + ${a%b} = ${a}.`,`Dzielnik razy iloraz plus reszta.`,{calc:`${c}*${b}+${a%b}`});
 if(v===4){a=rnd(101,2999);b=pick([10,100]);q=make(`Podaj resztę z dzielenia ${a} przez ${b}.`,a%b,`${a} = ${Math.floor(a/b)} · ${b} + ${a%b}, więc reszta to ${a%b}.`,`Dla 10 spójrz na ostatnią cyfrę, dla 100 na dwie ostatnie.`,{calc:`${a}%${b}`});}
 if(v===5){b=rnd(3,7);a=rnd(15,65);q=make(`Kolory wstążek powtarzają się co ${b} sztuk. Które miejsce w powtarzającym się wzorze zajmuje wstążka numer ${a}?`,(a-1)%b+1,`${a} : ${b} daje resztę ${a%b}. ${a%b===0?`Reszta 0 oznacza ostatnie, czyli ${b}. miejsce.`:`To ${a%b}. miejsce we wzorze.`}`,`Reszta pokazuje miejsce. Jeśli wynosi 0, wybierz ostatnie miejsce wzoru.`,{calc:`(${a}-1)%${b}+1`});}
 }
 if(!q)throw new Error('Nieznany temat');q.key=t+'|'+q.prompt;return q;
}
function makeTest(topic,count,avoid=new Set()){
 const topics=topic==='all'?Array.from({length:count},(_,i)=>i%7):Array(count).fill(Number(topic));const used=new Set(avoid);const qs=[];
 for(const t of topics){let q,tries=0;do{q=generate(t);tries++;}while(used.has(q.key)&&tries<500);if(used.has(q.key))throw new Error('Brak nowych zadań');used.add(q.key);qs.push(q);}
 return shuffle(qs);
}
const api={generate,makeTest,parseNumber,shuffle};if(typeof module!=='undefined')module.exports=api;root.MathGym=api;
})(typeof window==='undefined'?globalThis:window);
