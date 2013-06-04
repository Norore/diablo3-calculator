$('body').on('click', 'span.hero', function() {
	var hero = $(this).attr('id');
	var battlename = $('#battlename').val();
	var battleid = $('#battleid').val();
	var url = profile + battlename + "-" + battleid + '/hero/' + hero + '?callback=?';
	console.log(url);

	$.getJSON(url, function(data){
		//alert("Success!\n" + hero);
		var id = data.id; var name = data.name; var level = data.level;
		var classe = data.class; var parangon = data.paragonLevel;
		var profileLink = '/hero/' + id;
		var tooltipurl = "http://eu.battle.net/d3/fr/tooltip/";
		var output = '<h2>' + name + ', ' + classe + ' (' + level + ' - ' + parangon + ')</h2>';
		
		// équipement //
		
		output += '<ul id="stuff">';
		
		// casque //
		if ( data.items.head ){
			var namehelmet = data.items.head.name; var colorhelmet = data.items.head.displayColor;
			var itemhelmet = data.items.head.tooltipParams; var tooltiphelmet = data_item + itemhelmet;
			var iconhelmet = data.items.head.icon; var jstooltiphelmet = tooltipurl + itemhelmet;
			output += '<li><a href="' + jstooltiphelmet + '" title="'+ namehelmet +'"><img class="item_' + colorhelmet + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconhelmet + '.png" alt="' + namehelmet + '" /></a></li>';
		}
		
		// amulette //
		if ( data.items.neck ){
			var nameamu = data.items.neck.name; var coloramu = data.items.neck.displayColor;
			var itemamu = data.items.neck.tooltipParams; var tooltipamu = data_item + itemamu;
			var iconamu = data.items.neck.icon; var jstooltipamu = tooltipurl + itemamu;
			output += '<li><a href="' + tooltipamu + '" title="' + nameamu + '"><img class="item_' + coloramu + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconamu + '.png" alt="' + nameamu + '" /></a></li>';
		}
		
		// épaules //
		if ( data.items.shoulders ){
			var nameshoulder = data.items.shoulders.name; var colorshoulder = data.items.shoulders.displayColor;
			var itemshoulder = data.items.shoulders.tooltipParams; var tooltipshoulder = data_item + itemshoulder;
			var iconshoulder = data.items.shoulders.icon; var jstooltipshoulder = tooltipurl + itemshoulder;
			output += '<li><a href="' + tooltipshoulder + '" title="' + nameshoulder + '"><img class="item_' + colorshoulder + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconshoulder + '.png" alt="' + nameshoulder + '" /></a></li>';
		}
		
		// torse //
		if ( data.items.torso ){
			var nametorse = data.items.torso.name; var colortorse = data.items.torso.displayColor;
			var itemtorse = data.items.torso.tooltipParams; var tooltiptorse = data_item + itemtorse;
			var icontorse = data.items.torso.icon; var jstooltiptorse = tooltipurl + itemtorse;
			output += '<li><a href="' + tooltiptorse + '" title="' + nametorse + '"><img class="item_' + colortorse + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + icontorse + '.png" alt="' + nametorse + '" /></a></li>';
		}
		
		// brassards //
		if ( data.items.bracers ){
			var namebracers = data.items.bracers.name; var colorbracers = data.items.bracers.displayColor;
			var itembracers = data.items.bracers.tooltipParams; var tooltipbracers = data_item + itembracers;
			var iconbracers = data.items.bracers.icon; var jstooltipsbracers = tooltipurl + itembracers;
			output += '<li><a href="' + tooltipbracers + '" title="' + namebracers + '"><img class="item_' + colorbracers + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconbracers + '.png" alt="' + namebracers + '" /></a></li>';
		}
		
		// gants //
		if ( data.items.hands ){
			var namehands = data.items.hands.name; var colorhands = data.items.hands.displayColor;
			var itemhands = data.items.hands.tooltipParams; var tooltiphands = data_item + itemhands;
			var iconhands = data.items.hands.icon; var jstooltiphands = tooltipurl + itemhands;
			output += '<li><a href="' + tooltiphands + '" title="' + namehands + '"><img class="item_' + colorhands + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconhands + '.png" alt="' + namehands + '" /></a></li>';
		}
		
		// bague droite //
		if ( data.items.rightFinger ){
			var namerf = data.items.rightFinger.name; var colorrf = data.items.rightFinger.displayColor;
			var itemrf = data.items.rightFinger.tooltipParams; var tooltiprf = data_item + itemrf;
			var iconrf = data.items.rightFinger.icon; var jstooltiprf = tooltipurl + itemrf;
			output += '<li><a href="' + tooltiprf + '" title="' + namerf + '"><img class="item_' + colorrf + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconrf + '.png" alt="' + namerf + '" /></a></li>';
		}
		
		// bague gauche //
		if ( data.items.leftFinger ){
			var namelf = data.items.leftFinger.name; var colorlf = data.items.leftFinger.displayColor;
			var itemlf = data.items.leftFinger.tooltipParams; var tooltiplf = data_item + itemlf;
			var iconlf = data.items.leftFinger.icon; var jstooltiplf = tooltipurl + itemlf;
			output += '<li><a href="' + tooltiplf + '" title="' + namelf + '"><img class="item_' + colorlf + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconlf + '.png" alt="' + namelf + '" /></a></li>';
		}
		
		// ceinture //
		if ( data.items.waist ){
			var namebelt = data.items.waist.name; var colorbelt = data.items.waist.displayColor;
			var itembelt = data.items.waist.tooltipParams; var tooltipbelt = data_item + itembelt;
			var iconbelt = data.items.waist.icon; var jstooltipbelt = tooltipurl + itembelt;
			output += '<li><a href="' + tooltipbelt + '" title="' + namebelt + '"><img class="item_' + colorbelt + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconbelt + '.png" alt="' + namebelt + '" /></a></li>';
		}
		
		// jambes //
		if ( data.items.legs ){
			var namelegs = data.items.legs.name; var colorlegs = data.items.legs.displayColor;
			var itemlegs = data.items.legs.tooltipParams; var tooltiplegs = data_item + itemlegs;
			var iconlegs = data.items.legs.icon; var jstooltiplegs = tooltipurl + itemlegs;
			output += '<li><a href="' + tooltiplegs + '" title="' + namelegs + '"><img class="item_' + colorlegs + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconlegs + '.png" alt="' + namelegs + '" /></a></li>';
		}
		
		// chaussures //
		if ( data.items.feet ){
			var namepied = data.items.feet.name; var colorpied = data.items.feet.displayColor;
			var itempied = data.items.feet.tooltipParams; var tooltippied = data_item + itempied;
			var iconpied = data.items.feet.icon; var jstooltippied = tooltipurl + itempied;
			output += '<li><a href="' + tooltippied + '" title="' + namepied + '"><img class="item_' + colorpied + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconpied + '.png" alt="' + namepied + '" /></a></li>';
		}
		
		// main droite //
		if ( data.items.mainHand ){
			var namemH = data.items.mainHand.name; var colormH = data.items.mainHand.displayColor;
			var itemmH = data.items.mainHand.tooltipParams; var tooltipmH = data_item + itemmH;
			var iconmH = data.items.mainHand.icon; var jstooltipmH = tooltipurl + itemmH;
			output += '<li><a href="' + tooltipmH + '" title="' + namemH + '"><img class="item_' + colormH + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconmH + '.png" alt="' + namemH + '" /></a></li>';
		}
		
		// main gauche //
		if ( data.items.offHand ){
			var nameoH = data.items.offHand.name; var coloroH = data.items.offHand.displayColor;
			var itemoH = data.items.offHand.tooltipParams; var tooltipoH = data_item + itemoH;
			var iconoH = data.items.offHand.icon; var jstooltipoH = tooltipurl + itemoH;
			output += '<li><a href="' + tooltipoH + '" title="' + nameoH + '"><img class="item_' + coloroH + '"src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconoH + '.png" alt="' + nameoH + '" /></a></li>';
		}
		
		output += '</ul>';
		
		// statistiques //
		
		if ( data.stats ){
			output += '<div id="stats">';

			output += '<ul>';
			
			var life = data.stats.life;
			output += '<li class="life">Vie : ' + life + '</li>';
			var dmg = data.stats.damage;
			output += '<li class="dmg" title="' + dmg + '">Dégâts : ' + dmg + '</li>';
			var armor = data.stats.armor;
			output += '<li class="armor">Armure : ' + armor + '</li>';
			var force = data.stats.strength;
			output += '<li class="force">Force : ' + force + '</li>';
			var dext = data.stats.dexterity;
			output += '<li class="dext" title="' + dext + '">Dextérité : ' + dext + '</li>';
			var vita = data.stats.vitality;
			output += '<li class="vita">Vitalité : ' + vita + '</li>';
			var intell = data.stats.intelligence;
			output += '<li class="intell">Intelligence : ' + intell + '</li>';
// "damageIncrease" : 17.450000762939453,
			var dmgInc = data.stats.damageIncrease;
			output += '<li class="dmgInc" title="' + (Math.round(dmgInc*1000)/10) + '">% des dégâts : ' + (Math.round(dmgInc*1000)/10) + '</li>';
// "critDamage" : 2.38,
			var critDmg = data.stats.critDamage;
			output += '<li class="critDmg" title="' + critDmg + '"><abbr title="Dégâts des coups critiques">DCC</abbr> : ' + (Math.round(critDmg*1000))/10  + '%</li>';
// "critChance" : 0.17499999701976776,
			var critChn = data.stats.critChance;
			output += '<li class="critChn"><abbr title="Chances de coups critiques">CCC</abbr> : ' + (Math.round(critChn*1000))/10  + '%</li>';
			output += '</ul>';
			
			output += '<a id="calcul_cc_max">Calculer le dégât max</a><br>';
			output += '<a id="calcul_esquive">Calculer l\'esquive</a>';
			
			output += '</div>';
			output += '<div id="resists">',
			
			output += '<ul>';
// "physicalResist" : 142,
			var physicRes = data.stats.physicalResist;
			output += '<li class="physicRes">Résistance physique : ' + physicRes + '</li>';
// "fireResist" : 166,
			var feuRes = data.stats.fireResist;
			// feuRes = (feuRes+(intell*0.1));
			output += '<li class="feuRes">Résistance feu : ' + feuRes + '</li>';
// "coldResist" : 105,
			var coldRes = data.stats.coldResist;
			// coldRes = (coldRes+(intell*0.1));
			output += '<li class="coldRes">Résistance froid : ' + coldRes + '</li>';
// "lightningResist" : 105,
			var foudRes = data.stats.lightningResist;
			// foudRes = (foudRes+(intell*0.1));
			output += '<li class="foudRes">Résistance foudre : ' + foudRes + '</li>';
// "poisonResist" : 135,
			var poisRes = data.stats.poisonResist;
			// poisRes = (poisRes+(intell*0.1));
			output += '<li class="poisRes">Résistance poison : ' + poisRes + '</li>';
// "arcaneResist" : 144,
			var arcaRes = data.stats.arcaneResist;
			// arcaRes = (arcaRes+(intell*0.1));
			output += '<li class="arcaRes">Résistance arcane : ' + arcaRes + '</li>';
// "damageReduction" : 0.5386030077934265,
			var dmgRed = data.stats.damageReduction;
			output += '<li class="dmgRed">Réduction des dégâts : ' + (Math.round(dmgRed*1000))/10 + '</li>';
// "blockChance" : 0.0,
// "thorns" : 516.0,
// "lifeSteal" : 0.0,
// "lifePerKill" : 0.0,
// "goldFind" : 0.18,
// "magicFind" : 0.32000000000000006,
// "blockAmountMin" : 0,
// "blockAmountMax" : 0,
// "lifeOnHit" : 0.0,
//"primaryResource" : 125,
//"secondaryResource" : 39
			output += '</ul>';
			
			output += '</div>';
		}
		$('div#hero').html(output).show();
		
		$('div#charts').hide();
		$('div#calculateur').hide();
	});

});
