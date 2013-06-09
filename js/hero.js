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
		var imgbg = "http://eu.battle.net/d3/static/images/profile/hero/paperdoll/";
		var profileLink = '/hero/' + id;
		var tooltipurl = "http://eu.battle.net/d3/fr/";
		var output = '<h2>' + name + ', ' + classe + ' (' + level + ' - ' + parangon + ')</h2>';
		
		// équipement //
		
		output += '<ul id="stuff">';
		
		// classe et genre
		if ( data.class ){
			imgbg += data.class;
		}
		if ( data.gender >= 0 ){
			if ( parseInt(data.gender) == 1 ){
				imgbg += "-female.jpg";
			} else {
				imgbg += "-male.jpg";
			}
		}

		// casque //
		if ( data.items.head ){
			var namehead = data.items.head.name; var colorhead = data.items.head.displayColor;
			var itemhead = data.items.head.tooltipParams; var tooltiphead = data_item + itemhead;
			var iconhead = data.items.head.icon; var jstooltiphead = tooltipurl + itemhead;
			
			$("div#head").html('<a href="' + tooltipurl + "item/" + iconhead + '" data-d3tooltip="' + jstooltiphead + '" title="'+ namehead +'"><img src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconhead + '.png" alt="' + namehead + '" /></a>');
			if ( $("span#span-head").attr("class") ){
				$("span#span-head").removeAttr("class");
				$("span#span-head").addClass("item_"+colorhead);
			} else {
				$("span#span-head").addClass("item_"+colorhead);
			}
		}
		
		// amulette //
		if ( data.items.neck ){
			var nameneck = data.items.neck.name; var colorneck = data.items.neck.displayColor;
			var itemneck = data.items.neck.tooltipParams; var tooltipamu = data_item + itemneck;
			var iconneck = data.items.neck.icon; var jstooltipneck = tooltipurl + itemneck;
			
			$("div#neck").html('<a href="' + tooltipurl + "item/" + iconneck + '" data-d3tooltip="' + jstooltipneck + '" title="'+ nameneck +'"><img class="item_' + colorneck + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconneck + '.png" alt="' + nameneck + '" /></a>');
		}
		
		// épaules //
		if ( data.items.shoulders ){
			var nameshoulders = data.items.shoulders.name; var colorshoulders = data.items.shoulders.displayColor;
			var itemshoulders = data.items.shoulders.tooltipParams; var tooltipshoulders = data_item + itemshoulders;
			var iconshoulders = data.items.shoulders.icon; var jstooltipshoulders = tooltipurl + itemshoulders;
			
			$("div#shoulders").html('<a href="' + tooltipurl + "item/" + iconshoulders + '" data-d3tooltip="' + jstooltipshoulders + '" title="'+ nameshoulders +'"><img class="item_' + colorshoulders + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconshoulders + '.png" alt="' + nameshoulders + '" /></a>');
		}
		
		// torso //
		if ( data.items.torso ){
			var nametorso = data.items.torso.name; var colortorso = data.items.torso.displayColor;
			var itemtorso = data.items.torso.tooltipParams; var tooltiptorso = data_item + itemtorso;
			var icontorso = data.items.torso.icon; var jstooltiptorso = tooltipurl + itemtorso;
			
			$("div#torso").html('<a href="' + tooltipurl + "item/" + icontorso + '" data-d3tooltip="' + jstooltiptorso + '" title="'+ nametorso +'"><img class="item_' + colortorso + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + icontorso + '.png" alt="' + nametorso + '" /></a>');
		}
		
		// brassards //
		if ( data.items.bracers ){
			var namebracers = data.items.bracers.name; var colorbracers = data.items.bracers.displayColor;
			var itembracers = data.items.bracers.tooltipParams; var tooltipbracers = data_item + itembracers;
			var iconbracers = data.items.bracers.icon; var jstooltipbracers = tooltipurl + itembracers;
			
			$("div#bracers").html('<a href="' + tooltipurl + "item/" + iconbracers + '" data-d3tooltip="' + jstooltipbracers + '" title="'+ namebracers +'"><img class="item_' + colorbracers + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconbracers + '.png" alt="' + namebracers + '" /></a>');
		}
		
		// gants //
		if ( data.items.hands ){
			var namehands = data.items.hands.name; var colorhands = data.items.hands.displayColor;
			var itemhands = data.items.hands.tooltipParams; var tooltiphands = data_item + itemhands;
			var iconhands = data.items.hands.icon; var jstooltiphands = tooltipurl + itemhands;
			
			$("div#hands").html('<a href="' + tooltipurl + "item/" + iconhands + '" data-d3tooltip="' + jstooltiphands + '" title="'+ namehands +'"><img class="item_' + colorhands + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconhands + '.png" alt="' + namehands + '" /></a>');
		}
		
		// bague droite //
		if ( data.items.rightFinger ){
			var namerf = data.items.rightFinger.name; var colorrf = data.items.rightFinger.displayColor;
			var itemrf = data.items.rightFinger.tooltipParams; var tooltiprf = data_item + itemrf;
			var iconrf = data.items.rightFinger.icon; var jstooltiprf = tooltipurl + itemrf;
			
			$("div#rightFinger").html('<a href="' + tooltipurl + "item/" + iconrf + '" data-d3tooltip="' + jstooltiprf + '" title="'+ namerf +'"><img class="item_' + colorrf + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconrf + '.png" alt="' + namerf + '" /></a>');
		}
		
		// bague gauche //
		if ( data.items.leftFinger ){
			var namelf = data.items.leftFinger.name; var colorlf = data.items.leftFinger.displayColor;
			var itemlf = data.items.leftFinger.tooltipParams; var tooltiplf = data_item + itemlf;
			var iconlf = data.items.leftFinger.icon; var jstooltiplf = tooltipurl + itemlf;
			
			$("div#leftFinger").html('<a href="' + tooltipurl + "item/" + iconlf + '" data-d3tooltip="' + jstooltiplf + '" title="'+ namelf +'"><img class="item_' + colorlf + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconlf + '.png" alt="' + namelf + '" /></a>');
		}
		
		// ceinture //
		if ( data.items.waist ){
			var namebelt = data.items.waist.name; var colorbelt = data.items.waist.displayColor;
			var itembelt = data.items.waist.tooltipParams; var tooltipbelt = data_item + itembelt;
			var iconbelt = data.items.waist.icon; var jstooltipbelt = tooltipurl + itembelt;
			
			$("div#belt").html('<a href="' + tooltipurl + "item/" + iconbelt + '" data-d3tooltip="' + jstooltipbelt + '" title="'+ namebelt +'"><img class="item_' + colorbelt + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconbelt + '.png" alt="' + namebelt + '" /></a>');
		}
		
		// jambes //
		if ( data.items.legs ){
			var namelegs = data.items.legs.name; var colorlegs = data.items.legs.displayColor;
			var itemlegs = data.items.legs.tooltipParams; var tooltiplegs = data_item + itemlegs;
			var iconlegs = data.items.legs.icon; var jstooltiplegs = tooltipurl + itemlegs;
			
			$("div#legs").html('<a href="' + tooltipurl + "item/" + iconlegs + '" data-d3tooltip="' + jstooltiplegs + '" title="'+ namelegs +'"><img class="item_' + colorlegs + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconlegs + '.png" alt="' + namelegs + '" /></a>');
		}
		
		// chaussures //
		if ( data.items.feet ){
			var namefeet = data.items.feet.name; var colorfeet = data.items.feet.displayColor;
			var itemfeet = data.items.feet.tooltipParams; var tooltipfeet = data_item + itemfeet;
			var iconfeet = data.items.feet.icon; var jstooltipfeet = tooltipurl + itemfeet;
			
			$("div#feet").html('<a href="' + tooltipurl + "item/" + iconfeet + '" data-d3tooltip="' + jstooltipfeet + '" title="'+ namefeet +'"><img class="item_' + colorfeet + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconfeet + '.png" alt="' + namefeet + '" /></a>');
		}
		
		// main droite //
		if ( data.items.mainHand ){
			var namemH = data.items.mainHand.name; var colormH = data.items.mainHand.displayColor;
			var itemmH = data.items.mainHand.tooltipParams; var tooltipmH = data_item + itemmH;
			var iconmH = data.items.mainHand.icon; var jstooltipmH = tooltipurl + itemmH;
			
			$("div#mainHand").html('<a href="' + tooltipurl + "item/" + iconmH + '" data-d3tooltip="' + jstooltipmH + '" title="'+ namemH +'"><img class="item_' + colormH + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconmH + '.png" alt="' + namemH + '" /></a>');
		}
		
		// main gauche //
		if ( data.items.offHand ){
			var nameoH = data.items.offHand.name; var coloroH = data.items.offHand.displayColor;
			var itemoH = data.items.offHand.tooltipParams; var tooltipoH = data_item + itemoH;
			var iconoH = data.items.offHand.icon; var jstooltipoH = tooltipurl + itemoH;
			
			$("div#offHand").html('<a href="' + tooltipurl + "item/" + iconoH + '" data-d3tooltip="' + jstooltipoH + '" title="'+ nameoH +'"><img class="item_' + coloroH + '" src="http://eu.media.blizzard.com/d3/icons/items/large/' + iconoH + '.png" alt="' + nameoH + '" /></a>');
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
		$("div#img-stuff").css("background-image", "url("+imgbg+")");
		$("div#img-stuff").show();
		
		$('div#charts').hide();
		$('div#calculateur').hide();
	});

});
