(function() {
	var rootId = 'BambooHR-ATS';
	var el = document.getElementById('BambooHR');

	if(!el) {
		console.error('BambooHR-ATS: Hmm, Looks like we are missing something, Double check the code snippet.');
		return;
	}

	var departmentId = el.getAttribute('data-departmentId');
	var domain = el.getAttribute('data-domain');
	var version = el.getAttribute('data-version') || '1.0.0';
	var noPudgy = el.hasAttribute('data-noPudgy');

	if(!domain) {
		console.error('BambooHR-ATS: We are unable to retrieve the domain, Double check the code snippet.');
		return;
	}

	var root = document.createElement('div');
	root.id = rootId;
	// el.appendChild('https://' + root);

	var footer =  document.createElement('div');
	footer.style = 'font-family: "Lato", sans-serif; font-size: 12px; color: #999; text-align: right; margin: 9px 9px 0px 0px;'
	var poweredBy = document.createTextNode('Powered by');
	var logo = document.createElement('img');
		logo.src = 'https://resources.bamboohr.com/images/footer-logo.png';
		logo.alt = 'BambooHR - HR software';
		logo.style = 'display:inline;'
	var link = document.createElement('a')
		link.href = 'http://www.bamboohr.com';
		link.target = '_blank';
		link.rel = 'external'

	link.appendChild(logo);
	footer.appendChild(poweredBy);
	footer.appendChild(link);

	el.appendChild(footer);

	var embedUrl = 'https://' + domain + '/jobs/embed2.php?version=' + encodeURIComponent(version) + '';

	if (departmentId) {
		embedUrl += '&departmentId=' + encodeURIComponent(departmentId);
	}

	var xmlhttp = new XMLHttpRequest();
	document.addEventListener('readystatechange', function(event) {
		if (event.target.readyState === 'complete') {
			xmlhttp.onreadystatechange=function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

					var content = xmlhttp.responseText;
					if(root) root.innerHTML = content;
					if(!noPudgy) {
						showPudgy();
					}
				}
			}
			xmlhttp.open('GET', embedUrl, true);
			xmlhttp.send();
		}
	});

	function showPudgy() {
		var ASCI_MAP = [null,["â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€ â–ˆâ–ˆâ–ˆâ€   â–ˆâ–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€ â–ˆâ–ˆâ€  â–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ "],null,["â–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ€ â–ˆâ–ˆâ–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€  â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â–ˆâ–ˆ "],null,["â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ€â–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â€â–ˆâ–ˆâ€   â–ˆâ–ˆâ€â–ˆâ–ˆâ€   â–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ "],null,["â–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â–ˆâ–ˆâ€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€   â–ˆâ–ˆâ€â–ˆâ–ˆâ€   â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ€â–ˆâ–ˆâ€â€â€â–ˆâ–ˆ "],null,["â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â€â–ˆâ–ˆâ€  â–ˆâ–ˆâ€â–ˆâ–ˆâ€ â€â€â€ â–ˆâ–ˆâ€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â€â€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ€â€â–ˆâ–ˆâ€  â–ˆâ–ˆâ€â–ˆâ–ˆâ€  â–ˆâ–ˆ "],null,[" "],null, ['Pudgy the Panda says Hello!'], null, null, [10], ["â–„â–„â–„â–„"], [17], [".â–„â–„â–„â–„"],  null, [8], ["â–“â–ˆâ–ˆâ–€â•™'"], [19], ["â””â–€â–ˆâ–ˆâ–„"],  null, [7], ["jâ–ˆâ–€"], [26], ["â””â–€"],  null, [7], ["."],  null, [6], [";"], [7], ["â–„mâ•–"], [10], ["â–„m,"],  null, [1],  ["â–ˆâ–ˆâ–ˆâ–ŒÃ†â–„"], [6], ["â•šâ–ˆâ–„â–“"], [3],  ["]â–“â–Œ"], [3], ["â•Ÿâ–ˆâ–„â–ˆ"],  null, ["â–ˆâ–ˆâ–ˆâ–“â–“â–ˆâ–ˆâ–„"], [7], ["'"], [13], ["'"],  null, ["â–â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ,"], [14], [".â–„â•Â²"],  null, [1], ["â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–“â–„â–„â–„â–„â–„â•“,,,,,,,,,,,,,â•“â–„â–„â–„â–„â–„â–“â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–Œ"],  null, [1], ["â•™â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ"],  null, [3], ["â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–€â–€â•™â•™â•™â””â””â”€'''"], [4], ["'''â”€â””â””â•™â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ"],  null, [3], ["â•™â•™â”˜"], [27], ["â•«â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ'"],  null, [3], ["â–â–‘"], [28], ["^â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ"],  null, [3], ["'."], [28], ["â–‘â–â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâŒ"],  null, [4], ["â–‘â”‚"], [27], ["^â–‘â””â–ˆâ–ˆâ–ˆâ–Œâ•™"],  null, [4], ["]â–‘â”‚â”‚"],  null, [5], ["â–‘â–‘â–‘â”‚â”‚"],  null, [6], ["â–‘â–‘â–‘â–‘â–‘â”‚â”‚"],  null, [7], ["â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â”‚â”‚"], [21], ["â”‚"],  null, [8], ["â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â”‚â”‚"], [9], ["â”‚â”‚â”‚â–‘â–‘â–‘"],  null, [10], ["â–„â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â”‚Î“"],  null, [10], ["â•Ÿâ–ˆâ–„â–„â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–„â–“â–ˆ"] ];
		var hello_from_BambooHR = ASCI_MAP.reduce((agg, val) => {
			if (val === null) return agg + '\n';
			agg = agg += '%c';

			if(typeof val[0] === 'number') {
				for (var i = 0; i < val[0]; i++) {
					agg = agg += ' ';
				}
			} else {
				agg += val[0];
			}
			return agg;
		}, '');

		var color = ASCI_MAP
			.filter(x => x !== null)
			.map(
				val => `color:#527a00; font-family: monospace, font-weight: bold`
		);
		// To remove Pudgy, add data-noPudgy to the snippet
		console.log(hello_from_BambooHR, ...color);
	}

}) ();