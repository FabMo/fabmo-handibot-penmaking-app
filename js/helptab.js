$("#get-safety").click(function(evt) {
    fabmo.navigate('http://docs.handibot.com/doc-output/Handibot_Safety.pdf', {target : '_blank'});
});
$("#get-manual").click(function(evt) {
    fabmo.navigate('http://docs.handibot.com', {target : '_blank'});
});
$("#go-forum").click(function(evt) {
    fabmo.navigate('https://handibot.com/forum/list.php?2', {target : '_blank'});
});


$("#config-tab-link").click(function(evt) {
	fabmo.getConfig(function(err, cfg) {
		$('#config-system-config').text(JSON.stringify(cfg));
	});
});
fabmo.getConfig(function(err, cfg) {
	$('#config-system-config').text(JSON.stringify(cfg));
});

