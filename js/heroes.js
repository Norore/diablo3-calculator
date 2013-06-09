var profile = 'http://eu.battle.net/api/d3/profile/' ;
var data_item = 'http://eu.battle.net/api/d3/data/';
$('form').submit(function(event) {
	$("div#img-stuff").hide();
	// ne pas recharger la page
	event.preventDefault();
	var battlename = $('#battlename').val();
	var battleid = $('#battleid').val();
	
	if ( battlename != "" && battleid != "" ) {
		$('#battlename').text( battlename );
		$('#battleid').text( battleid );
		var url = profile + battlename + '-' + battleid + '/?callback=?';

		$.getJSON(url, function(data){
			var names = [] ; var dataLvl = []; var dataPar = [];
			var output = '<ul id="heroes">';
			for (var d in data.heroes){
				id = data.heroes[d].id;
				name = data.heroes[d].name;
				names.push(name);
				dataLvl.push([d, data.heroes[d].level]);
				dataPar.push([d, data.heroes[d].paragonLevel]);
				profileLink = '/hero/' + id;
				//output += '<li><a href="#' + name + '-' + id + '" id="' + id + '" class="hero">' + name + '</a></li>';
				output += '<li><span id="' + id + '" class="hero">' + name + '</span></li>';
			}
			output += '</ul>';
			
			$('div#hero').hide();
			$('div#calculateur').hide();
			$('div#list_heroes').html(output).show();

			$('div#charts').show();
			$('div#levels').html("");
			var optionsLvl = {legend:{labelBoxBorderColor:null,backgroundColor:false,backgroundColorOpacity:0},xaxis:{show:false},yaxis:{max:60},grid:{hoverable:true,color:"#ddd"}};
			var plotting = [];
			for (var d in dataLvl){
				plotting.push({data:[dataLvl[d]],bars:{show:true},label:names[d]});
			}
			$.plot($("#levels"), plotting, optionsLvl);
			
			// hover fill
			function showTooltipLvl(x, y, contents) {
				$('<div id="tooltiplvl">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: x/10,
					left: y+5,
					border: '1px solid white',
					padding: '2px',
					'background-color': '#fee',
					'color': '#000',
					opacity: 0.80
				}).appendTo("#levels").fadeIn(200);
			}
			
			$("#levels").bind("plothover", function (event, pos, item) {
				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;
						
						$("#tooltiplvl").remove();
						var x = item.datapoint[0],
							y = item.datapoint[1];
						showTooltipLvl(item.pageX, item.pageY,
									names[x] + " de niveau " + y);
					}
				}
				else {
					$("#tooltiplvl").remove();
					previousPoint = null;            
				}
			});
			
			var optionsPar = {legend:{labelBoxBorderColor:null,backgroundColor:false,backgroundColorOpacity:0},xaxis:{show:false},yaxis:{max:100},grid:{hoverable:true,color:"#ddd"}};
			var plotting = [];
			for (var d in dataLvl){
				plotting.push({data:[dataPar[d]],bars:{show:true},label:names[d],xaxis:{tickFormatter:null}});
			}
			
			$.plot($("#paragons"), plotting, optionsPar);
			function showTooltipPar(x, y, contents) {
				$('<div id="tooltippar">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: x/100,
					left: y/2,
					border: '1px solid white',
					padding: '2px',
					'background-color': '#fee',
					'color': '#000',
					opacity: 0.80
				}).appendTo("#paragons").fadeIn(200);
			}
			
			$("#paragons").bind("plothover", function (event, pos, item) {
				if (item) {
					if (prevPoint != item.dataIndex) {
						prevPoint = item.dataIndex;
						
						$("#tooltippar").remove();
						var x = item.datapoint[0],
							y = item.datapoint[1];
						showTooltipPar(item.pageX, item.pageY,
									names[x] + " de parangon " + y);
					}
				}
				else {
					$("#tooltippar").remove();
					prevPoint = null;            
				}
			});

		});
		return true;
	}
	$('div#list_heroes').html( '<span class="error">Le battletag est vide !</span>').show().fadeIn(5000).fadeOut(2500);
	return false;
});

