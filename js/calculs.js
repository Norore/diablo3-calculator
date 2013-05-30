$('#calcul_cc_max').live('click', function(){
	var dcc = $('.critDmg').attr('title');
	var dmg = $('.dmg').attr('title');
	var cc_max = dmg*dcc;
	
	console.log( 'cc_max: '+dmg+'*'+dcc+'=' + cc_max );
	
	var output = '<span>Dégâts max par coup critique : ' + (Math.round(cc_max*10))/10 + '</span>';
	
	$('div#calculateur').html(output).show();
	
});