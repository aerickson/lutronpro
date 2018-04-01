var lutronpro = require('lutronpro');


//Enter your Bridge IP Addresses
var SMARTBRIDGE_IP = [process.env.SMARTBRIDGE_IP];
var SMARTTHINGS_IP = process.env.SMARTTHINGS_IP;

//Please entery your Lutron Login Info...this simply allows the app to login and fetch the appropriate access codes and certificates automatically. It is not saved or shared anywhere than in this file.
var USER = process.env.LUTRON_USER;
var PW = process.env.LUTRON_PASS;


var shortPressTime = 300;  //Time (in ms) to hold button to trigger a held event vs a single press
var intervalTime = 750;  //Frequency (in ms) to send a held button event if using the ramp hold method

/* Use this map to define how you want each button to react when held. 
	**The device is the device number of the Pico. You can press a button and look at the logs while this is running to get it.
	**The numbers represent each button. 
	**You do not have to enter anything for this if you do not want to and it will default to a single hold event
	**Use the example below for multiple devices
	**
	
	**A True value means that the button will use the ramp style. A held event will be sent at the interval above until the button is released
	**A False value means the button will send a single held button event when held for longer than shortPressTime above
	
	
var buttonMethods = [
	{device: 1,
	4: true,
	5: true
	},
	{device: 2,
	1: true,
	3: false,
	4: false,
	5: true
	}
];
*/

var buttonMethods = [
	{device: '3',
	4: true,
	5: true
	}
];

lutronpro.startup(SMARTBRIDGE_IP, SMARTTHINGS_IP, USER, PW, buttonMethods, shortPressTime, intervalTime);


