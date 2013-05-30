var profile = 'http://eu.battle.net/api/d3/profile/' ;
var data_item = 'http://eu.battle.net/api/d3/data/';
$('form').submit(function(event) {
	// ne pas recharger la page
	event.preventDefault();
	var battlename = $('#battlename').val();
	var battleid = $('#battleid').val();
	
	if ( battlename != "" && battleid != "" ) {
		$('#battlename').text( battlename );
		$('#battleid').text( battleid );
		var url = profile + battlename + '-' + battleid + '/?callback=?';
		
		$.getJSON(url, function(data){
			var output = '<ul id="heroes">';
			for (var d in data.heroes){
				id = data.heroes[d].id;
				name = data.heroes[d].name;
				profileLink = '/hero/' + id;
				output += '<li><a href="#' + name + '-' + id + '" id="' + id + '" class="hero">' + name + '</a></li>';
			}
			output += '</ul>';
			$('div#list_heroes').html(output).show();
		});
		return true;
	}
	$('div#list_heroes').html( '<span class="error">Battletag is empty!</span>').show().fadeIn(500).fadeOut(1500);
	return false;
});