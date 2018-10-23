title: "Experiment: Vyzkoušejte si alternativní volební systémy do senátu. Který vám sedne?"
perex: "Agentura Median v letošních senátních volbách poprvé otestovala, jak by voliči hlasovali v ‚chytrých‘ jednokolových systémech. Data ukazují, že se výsledky neliší od současného systému. Ušetří přitom jednu cestu k volbám."
published: "24. října 2018"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/images/03705206.png?itok=gXCKQOaz
coverimg_note: "Obecní komunální volby 1954, průvod mládeže v Brně. Foto: archiv ČTK"
styles: []
libraries: [jquery, highcharts, 'https://code.highcharts.com/modules/sankey.js']
options: [] #wide, noheader (, nopic)
---

Účast v druhém kole senátních voleb byla letos [druhá nejnižší v historii](https://www.irozhlas.cz/volby/senatni-volby-druhe-kolo-ucast-volby-2018_1810131748_zlo). Prezident Miloš Zeman [v rozhovoru pro Radiožurnál](https://www.irozhlas.cz/zpravy-domov/prepis-milos-zeman-pokorny-radiozurnal-ekonomicti-zmdi-bakala_1810152033_cen) spojil nízkou účast s návrhem na zrušení horní komory, podobně se po druhém kole volby vyjadřoval i [premiér Andrej Babiš](https://www.irozhlas.cz/volby/andrej-babis-ano-senatni-volby-josef-mlejnek_1810141915_ogo).

Alternativní volební systémy přitom umožňují vyjádřit svou vůli během jediné návštěvy volební komise. Volební systém do senátu postavený na jednom z nich – takzvaném _alternativním hlasování_ – v minulém týdnu horní sněmovně předložil sociálně demokratický senátor Jiří Dienstbier. Neuspěl, [senátoři jeho návrh těsně odmítli](https://www.irozhlas.cz/zpravy-domov/senat-dvoukolovy-volebni-system-jednokolovy-system-nebude_1810181534_haf).

Pro představu si můžete alternativní hlasování a dva další jednokolové volební systémy sami vyzkoušet. Jako figuranti poslouží kandidáti obvodu Praha 2. Po vyplnění každého virtuálního volebního lístku klikněte na tlačítko _Hlasovat_.

<wide>
<div id="container">
<div id="alternativni">

<h3>Alternativní hlasování</h3>
<i>U kandidátů uveďte pořadí od prvního po devátého</i>
<table>
<thead><tr>
<th>Kandidát</th>
<th align="right">Věk</th>
<th>Strana</th>
<th>Povolání</th>
<th>Bydliště</th>
<th>Preference</th>
</tr>
</thead>
<tbody><tr>
<td>Gabal Ivan PhDr.</td>
<td align="right">67</td>
<td>Zelení</td>
<td>sociolog</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="1"></td>
</tr>
<tr>
<td>Hilšer Marek MUDr. Bc. Ph.D.</td>
<td align="right">42</td>
<td>MHS</td>
<td>lékař, vysokoškolský pedagog</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="2"></td>
</tr>
<tr>
<td>Hujová Vladislava Ing.</td>
<td align="right">55</td>
<td>HPP</td>
<td>ekonomka, starostka MČ P-3 v období 2010-2018</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="3"></td>
</tr>
<tr>
<td>Jakl Ladislav</td>
<td align="right">58</td>
<td>SPD</td>
<td>publicista</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="4"></td>
</tr>
<tr>
<td>Kerekeš Roman MUDr.</td>
<td align="right">49</td>
<td>ANO</td>
<td>lékař - kardiolog</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="5"></td>
</tr>
<tr>
<td>Kratina Vladimír</td>
<td align="right">66</td>
<td>ODS</td>
<td>herec</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="6"></td>
</tr>
<tr>
<td>Michálek Libor Mgr. MPA</td>
<td align="right">49</td>
<td>Piráti</td>
<td>senátor a ekonom</td>
<td>Chýně</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="7"></td>
</tr>
<tr>
<td>Roškot Vladimír Ing.</td>
<td align="right">68</td>
<td>KSČM</td>
<td>podnikatel v oblasti obchodu</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="8"></td>
</tr>
<tr>
<td>Srb Václav</td>
<td align="right">60</td>
<td>KČ</td>
<td>průvodce, vinárník, tlumočník</td>
<td>Praha</td>
<td><input type="number" min="1" max="9" step="1" placeholder="1-9" class="alternativni" id="9"></td>
</tr>
</tbody></table>

</div>

<div id="hlasovat">
<button type="button" id="hlasovaniAlternativni" onClick="hlasovani('alternativni')">Hlasovat</button>
</div>

</div>
</wide>

<wide>
<div id="container">
<div id="approval">

<h3>Schvalující hlasování</h3>
<i>Vyberte svoje kandidáty na senátora</i>
<table>
<thead><tr>
<th>Kandidát</th>
<th align="right">Věk</th>
<th>Strana</th>
<th>Povolání</th>
<th>Bydliště</th>
<th>Schválení</th>
</tr>
</thead>
<tbody><tr>
<td>Gabal Ivan PhDr.</td>
<td align="right">67</td>
<td>Zelení</td>
<td>sociolog</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="1"></td>
</tr>
<tr>
<td>Hilšer Marek MUDr. Bc. Ph.D.</td>
<td align="right">42</td>
<td>MHS</td>
<td>lékař, vysokoškolský pedagog</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="2"></td>
</tr>
<tr>
<td>Hujová Vladislava Ing.</td>
<td align="right">55</td>
<td>HPP</td>
<td>ekonomka, starostka MČ P-3 v období 2010-2018</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="3"></td>
</tr>
<tr>
<td>Jakl Ladislav</td>
<td align="right">58</td>
<td>SPD</td>
<td>publicista</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="4"></td>
</tr>
<tr>
<td>Kerekeš Roman MUDr.</td>
<td align="right">49</td>
<td>ANO</td>
<td>lékař - kardiolog</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="5"></td>
</tr>
<tr>
<td>Kratina Vladimír</td>
<td align="right">66</td>
<td>ODS</td>
<td>herec</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="6"></td>
</tr>
<tr>
<td>Michálek Libor Mgr. MPA</td>
<td align="right">49</td>
<td>Piráti</td>
<td>senátor a ekonom</td>
<td>Chýně</td>
<td><input type="checkbox" class="approval" id="7"></td>
</tr>
<tr>
<td>Roškot Vladimír Ing.</td>
<td align="right">68</td>
<td>KSČM</td>
<td>podnikatel v oblasti obchodu</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="8"></td>
</tr>
<tr>
<td>Srb Václav</td>
<td align="right">60</td>
<td>KČ</td>
<td>průvodce, vinárník, tlumočník</td>
<td>Praha</td>
<td><input type="checkbox" class="approval" id="9"></td>
</tr>
</tbody></table>

</div>

<div id="hlasovat">
<button type="button" id="hlasovaniApproval" onClick="hlasovani('approval')">Hlasovat</button>
</div>

</div>
</wide>

<wide>
<div id="container">
<div id="janecek">

<h3>Janečkův systém</h3>
<i>Rozdejte kandidátům pozitivní a negativní hodnocení. Máte k dispozici tři +, pokud rozdáte aspoň dvě, můžete udělit také jedno -</i>
<table>
<thead><tr>
<th>Kandidát</th>
<th align="right">Věk</th>
<th>Strana</th>
<th>Povolání</th>
<th>Bydliště</th>
<th>+</th>
<th>-</th>
</tr>
</thead>
<tbody><tr>
<td>Gabal Ivan PhDr.</td>
<td align="right">67</td>
<td>Zelení</td>
<td>sociolog</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="1" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="1" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Hilšer Marek MUDr. Bc. Ph.D.</td>
<td align="right">42</td>
<td>MHS</td>
<td>lékař, vysokoškolský pedagog</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="2" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="2" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Hujová Vladislava Ing.</td>
<td align="right">55</td>
<td>HPP</td>
<td>ekonomka, starostka MČ P-3 v období 2010-2018</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="3" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="3" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Jakl Ladislav</td>
<td align="right">58</td>
<td>SPD</td>
<td>publicista</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="4" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="4" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Kerekeš Roman MUDr.</td>
<td align="right">49</td>
<td>ANO</td>
<td>lékař - kardiolog</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="5" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="5" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Kratina Vladimír</td>
<td align="right">66</td>
<td>ODS</td>
<td>herec</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="6" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="6" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Michálek Libor Mgr. MPA</td>
<td align="right">49</td>
<td>Piráti</td>
<td>senátor a ekonom</td>
<td>Chýně</td>
<td><input type="checkbox" class="janecekplus" id="7" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="7" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Roškot Vladimír Ing.</td>
<td align="right">68</td>
<td>KSČM</td>
<td>podnikatel v oblasti obchodu</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="8" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="8" onClick="janecekCall()" disabled="true"></td>
</tr>
<tr>
<td>Srb Václav</td>
<td align="right">60</td>
<td>KČ</td>
<td>průvodce, vinárník, tlumočník</td>
<td>Praha</td>
<td><input type="checkbox" class="janecekplus" id="9" onClick="janecekCall()"></td>
<td><input type="checkbox" class="janecekminus" id="9" onClick="janecekCall()" disabled="true"></td>
</tr>
</tbody></table>

</div>

<div id="hlasovat">
<button type="button" id="hlasovaniJanecek" onClick="hlasovani('janecek')">Hlasovat</button>
</div>

</div>
</wide>

## Nacionalista Kotleba by v alternativním systému neprošel

Nikdo dosud nicméně neotestoval, jak by Češi v takových systémech skutečně volili: jak by se v systému zorientovali, kolik preferencí, plusů nebo mínusů by skutečně přidělili, a hlavně jakým kandidátům by nový volební systém vyhovoval.

Alternativní systémy totiž kromě toho, že ušetří cestu, umějí ještě něco: podporují široce přijatelné kandidáty na úkor těch vyhraněných.

„Současný dvoukolový systém by měl teoreticky bránit vyhraněným kandidátům, v druhém kole by se proti nim měli spojit umírnění voliči a dát hlas jejich protivníkovi,“ vysvětluje roli volebního systému sociolog Daniel Prokop. „V praxi se to ale neděje. Jen osm kandidátů z padesáti letos získalo v druhém kole víc hlasů než v prvním. Znamená to, že v druhém kole bylo volit jenom voličské jádro těch dvou kandidátů, proto je taky účast tak nízká.“

„Na Slovensku uspěl ve stejném volebním systému nacionalista Marian Kotleba,“ pokračuje Prokop. „Oproti tomu třeba v australském systému (jiný název pro alternativní hlasování, pozn. red.) by se mu to nejspíš nepovedlo, ten fandí spíš přijatelným kandidátům.“

Institute for Democracy 21 podnikatele Karla Janečka proto společně s agenturou Median letos poprvé otestovaly, jak se v alternativních systémech voliči skutečně chovají. Během prvního kola si voliči v pěti senátních obvodech – Praha 2, Brno-město, Ostrava-město, Chomutov a Třebíč – vyzkoušeli vedle tří zmíněných metod ještě _evaluační hlasování_, napodobující známkování ve škole.

„“ citace IfD

Vítěz se v žádném systému a žádném obvodě neliší od skutečného vítěze voleb. Průzkum Medianu tak ukazuje, že každý ze čtyř alternativních jednokolových systémů vede k podobným výsledkům jako ten současný. Voličům přitom ušetří jednu cestu.

## Australský systém: napínavý do posledního okamžiku

Pořadí na dalších místech je už ovšem v každém systému jiné. Každý z nich má svoje specifika a favorizuje jiný typ kandidátů. Nejnapínavější souboje – a největší rozdíly mezi systémy – ukazuje třebíčský obvod.

GRAF: TŘEBÍČ

Logiku všech systémů hezky ilustruje umístnění Miroslava Michálka z ANO. Ten ve skutečných volbách skončil v prvním kole druhý, v druhém kole pak v přímém souboji o mandát propadl. Alternativní systémy by ho vyřadily dřív: v Janečkově systému by skončil až čtvrtý, známkování by ho posunulo na páté a schvalování dokonce na šesté místo z devíti. Dobré umístění v současném systému mu zajišťuje poměrně silná voličská základna, v alternativních systémech se ale ukazuje, že je pro velkou část voličů nepřijatelný.

Napínový souboj by kandidáti svedli v alternativním hlasování – tedy metodě, kdy voliči seřadí kandidáty od prvního do posledního. U ní se v každém kole sčítání nejprve zjistí, u kolika voličů kandidáti skončili na prvním místě. Ten nejméně úspěšný se vzápětí vyřadí a hlasy se přerozdělí těm, kteří na jeho lístku byli druzí v pořadí.

<wide><div id="trebic12" style="max-width: 100%; height: 600px"></div></wide>

<wide><div id="trebic34" style="max-width: 100%; height: 500px"></div></wide>

Kandidáti se vyřazují a jejich hlasy přerozdělují až do okamžiku, kdy jeden kandidát překoná polovinu všech hlasů, nebo zbývají pouze dva kandidáti.

<wide><div id="trebic57" style="max-width: 100%; height: 400px"></div></wide>

Alternativní hlasování ilustruje mechanismus, kterým posilují všeobecně přijatelní kandidáti. V posledních třech kolech sčítání získává Hana Žáková za STAN podstatně víc hlasů od vyřazených protikandidátů, než pirát Michal Šalamoun nebo Miroslav Michálek z ANO. Pro většinu voličů je přijatelnější, takže přeskočí oba kandidáty a přesvědčivě zvítězí.