title: "XXX"
perex: "YYY"
published: "21. dubna 2018"
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='#'>ČTK</a>"
styles: []
libraries: [jquery]
options: [] #wide, noheader (, nopic)
---

Je to prosté, stačí do <span style="background-color: #2171b5;color: white;display: inline;border-radius: 5px;">modrého</span> okna začít psát název své obce. U pomalejšího připojení k internetu může načtení kandidátky chvíli trvat.

<wide>
<div id="container">
<div id="alternativni">

<h3>Alternativní hlasování</h3>
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
