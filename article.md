title: "XXX"
perex: "XXX"
published: "21. dubna 2018"
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='#'>ČTK</a>"
styles: ["//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"]
libraries: [jquery, "https://code.jquery.com/ui/1.12.1/jquery-ui.js"]
options: [] #wide, noheader (, nopic)
---

Je to prosté, stačí do <span style="background-color: #2171b5;color: white;display: inline;border-radius: 5px;">modrého</span> okna začít psát název své obce. U pomalejšího připojení k internetu může načtení kandidátky chvíli trvat.

<wide>
<div id="container">
	<div id="obec">
		<h3>Senátní obvod</h3>
		<form onsubmit="return false">
			<div class="autocomplete" style="width:300px;">
				<input id="vyberObce" name="vyberObce" type="text" placeholder="Napište jméno obvodu">
			</div>
		</form>
	</div>
	<div id="kandidati"><table id="tabulkaKandidatu" class="display" style="width:100%"></table></div>
	<div id="zpet"></div>
</div>
</wide>

_Zdroj dat: [volby.cz](https://volby.cz/pls/kv2018/kv?xjazyk=CZ&xid=1)_
