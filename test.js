'use strict';

var QRCode = require('qrcode');
var from = 1;
var to = 100;

/**
 * Generates 'to' qr png images with the numbers
 */
for (var i = from; i <= to; i++) {
	QRCode.save('generatedqr_' + i + '.png', i + '', null, 
		function(err, written) {
			console.log(written + ' bytes written.');
		});
}
