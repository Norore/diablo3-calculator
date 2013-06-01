$('body').on('click', 'a#calcul_cc_max', function(){
	var dcc = $('.critDmg').attr('title');
	var dmg = $('.dmg').attr('title');
	var cc_max = dmg*dcc;
	
	console.log( 'cc_max: '+dmg+'*'+dcc+'=' + cc_max );
	
	var output = '<span>Dégâts max par coup critique : ' + (Math.round(cc_max*10))/10 + '</span>';
	
	$('div#calculateur').html(output).show();
	
});

$('body').on('click', 'a#calcul_esquive', function(){
	var esquive;
	var dex = $('.dext').attr('title');
	if ( dex >= 1000 ){
		esquive = 30+(0.01*(dex-1000));
	} if ( dex < 1000 ){
		if ( dex >= 500 ){
			esquive = (20+(0.02*(dex-500)));
		} if ( dex < 500 ){
			if ( dex >= 100 ){
				esquive = (10+(0.025*(dex-100)));
			} if ( dex < 100 ){
				esquive = (0.1*dex);
			}
		}
	}
	var output = '<span>Pourcentage d\'esquive : ' + (Math.round(esquive*10))/10 + '%</span>';
	
	$('div#calculateur').html(output).show();
	
});
