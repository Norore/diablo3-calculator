$('body').on('click', 'span.hero', function() {
	var hero = $(this).attr('id');
	var battlename = $('#battlename').val();
	var battleid = $('#battleid').val();
	var url = profile + battlename + "-" + battleid + '/hero/' + hero + '?callback=?';

	$.getJSON(url, function(data){
		//alert("Success!\n" + hero);
		var id = data.id; var name = data.name; var level = data.level;
		var classe = data.class; var parangon = data.paragonLevel;
		var profileLink = '/hero/' + id;
		var output = '<h2>' + name + ', ' + classe + ' (' + level + ' - ' + parangon + ')</h2>';
		
		// équipement //
		
		output += '<ul id="stuff">';
		
		// casque //
		if ( data.items.head ){
			var namehelmet = data.items.head.name; var colorhelmet = data.items.head.displayColor;
			var itemhelmet = data.items.head.tooltipParams; var tooltiphelmet = data_item + itemhelmet;
			output += '<li class="item_' + colorhelmet + '"><a href="' + tooltiphelmet + '">' + namehelmet + '</a></li>';
		}
		
		// amulette //
		if ( data.items.neck ){
			var nameamu = data.items.neck.name; var coloramu = data.items.neck.displayColor;
			var itemamu = data.items.neck.tooltipParams; var tooltipamu = data_item + itemamu;
			output += '<li class="item_' + coloramu + '"><a href="' + tooltipamu + '">' + nameamu + '</a></li>';
		}
		
		// épaules //
		if ( data.items.shoulders ){
			var nameshoulder = data.items.shoulders.name; var colorshoulder = data.items.shoulders.displayColor;
			var itemshoulder = data.items.shoulders.tooltipParams; var tooltipshoulder = data_item + itemshoulder;
			output += '<li class="item_' + colorshoulder + '"><a href="' + tooltipshoulder + '">' + nameshoulder + '</a></li>';
		}
		
		// torse //
		if ( data.items.torso ){
			var nametorse = data.items.torso.name;
			var colortorse = data.items.torso.displayColor;
			var itemtorse = data.items.torso.tooltipParams;
			var tooltiptorse = data_item + itemtorse;
			output += '<li class="item_' + colortorse + '"><a href="' + tooltiptorse + '">' + nametorse + '</a></li>';
		}
		
		// brassards //
		if ( data.items.bracers ){
			var namebracers = data.items.bracers.name; var colorbracers = data.items.bracers.displayColor;
			var itembracers = data.items.bracers.tooltipParams; var tooltipbracers = data_item + itembracers;
			output += '<li class="item_' + colorbracers + '"><a href="' + tooltipbracers + '">' + namebracers + '</a></li>';
		}
		
		// gants //
		if ( data.items.hands ){
			var namehands = data.items.hands.name; var colorhands = data.items.hands.displayColor;
			var itemhands = data.items.hands.tooltipParams; var tooltiphands = data_item + itemhands;
			output += '<li class="item_' + colorhands + '"><a href="' + tooltiphands + '">' + namehands + '</a></li>';
		}
		
		// bague droite //
		if ( data.items.rightFinger ){
			var namerf = data.items.rightFinger.name; var colorrf = data.items.rightFinger.displayColor;
			var itemrf = data.items.rightFinger.tooltipParams; var tooltiprf = data_item + itemrf;
			output += '<li class="item_' + colorrf + '"><a href="' + tooltiprf + '">' + namerf + '</a></li>';
		}
		
		// bague gauche //
		if ( data.items.leftFinger ){
			var namelf = data.items.leftFinger.name; var colorlf = data.items.leftFinger.displayColor;
			var itemlf = data.items.leftFinger.tooltipParams; var tooltiplf = data_item + itemlf;
			output += '<li class="item_' + colorlf + '"><a href="' + tooltiplf + '">' + namelf + '</a></li>';
		}
		
		// ceinture //
		if ( data.items.waist ){
			var namebelt = data.items.waist.name; var colorbelt = data.items.waist.displayColor;
			var itembelt = data.items.waist.tooltipParams; var tooltipbelt = data_item + itembelt;
			output += '<li class="item_' + colorbelt + '"><a href="' + tooltipbelt + '">' + namebelt + '</a></li>';
		}
		
		// jambes //
		if ( data.items.legs ){
			var namelegs = data.items.legs.name; var colorlegs = data.items.legs.displayColor;
			var itemlegs = data.items.legs.tooltipParams; var tooltiplegs = data_item + itemlegs;
			output += '<li class="item_' + colorlegs + '"><a href="' + tooltiplegs + '">' + namelegs + '</a></li>';
		}
		
		// chaussures //
		if ( data.items.feet ){
			var namepied = data.items.feet.name; var colorpied = data.items.feet.displayColor;
			var itempied = data.items.feet.tooltipParams; var tooltippied = data_item + itempied;
			output += '<li class="item_' + colorpied + '"><a href="' + tooltippied + '">' + namepied + '</a></li>';
		}
		
		// main droite //
		if ( data.items.mainHand ){
			var namemH = data.items.mainHand.name; var colormH = data.items.mainHand.displayColor;
			var itemmH = data.items.mainHand.tooltipParams; var tooltipmH = data_item + itemmH;
			output += '<li class="item_' + colormH + '"><a href="' + tooltipmH + '">' + namemH + '</a></li>';
		}
		
		// main gauche //
		if ( data.items.offHand ){
			var nameoH = data.items.offHand.name; var coloroH = data.items.offHand.displayColor;
			var itemoH = data.items.offHand.tooltipParams; var tooltipoH = data_item + itemoH;
			output += '<li class="item_' + coloroH + '"><a href="' + tooltipoH + '">' + nameoH + '</a></li>';
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
