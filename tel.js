var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var L1 = new Gpio(2, 'out'); 
var L2 = new Gpio(3, 'out'); 
var L3 = new Gpio(4, 'out'); 
var L4 = new Gpio(17, 'out'); 
var F1 = new Gpio(27, 'out'); 
var F2 = new Gpio(22, 'out'); 
var F3 = new Gpio(10, 'out'); 
var F4 = new Gpio(9, 'out'); 


var TelegramBot= require('node-telegram-bot-api');
var token = '1214378525:AAF97FN3YPVQ5AfOiUGt-P5TLH876ARPyO8';
var bot = new TelegramBot(token,{polling:true});
bot.onText(/\/start/, ( msg) => {
bot.sendMessage(msg.chat.id, "what d u wanna turn on??",{
"reply_markup": {
	"keyboard" : [["L1_ON","L1_OFF"],["L2_ON","L2_OFF"],["L3_ON","L3_OFF"],["L4_ON","L4_OFF"],["F1_ON","F1_OFF"],["F2_ON","F2_OFF"],["F3_ON","F3_OFF"],["F4_ON","F4_OFF"]]



}
});

});

bot.onText(/\L1_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "L1 turned ON")
L1.writeSync(1);
});


bot.onText(/\L1_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "L1 turned OFF")
L1.writeSync(0);
});


bot.onText(/\L2_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "L2 turned ON")
L2.writeSync(1);
});


bot.onText(/\L2_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "L2 turned OFF")
L2.writeSync(0);
});

bot.onText(/\L3_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "L3 turned ON")
L3.writeSync(1);
});


bot.onText(/\L3_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "L3 turned OFF")
L3.writeSync(0);
});

bot.onText(/\L4_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "L4 turned ON")
L4.writeSync(1);
});


bot.onText(/\L4_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "L4 turned OFF")
L4.writeSync(0);
});

bot.onText(/\F1_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "F1 turned ON")
F1.writeSync(1);
});


bot.onText(/\F1_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "F1 turned OFF")
F1.writeSync(0);
});

bot.onText(/\F2_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "F2 turned ON")
F2.writeSync(1);
});


bot.onText(/\F2_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "F2 turned OFF")
F2.writeSync(0);
});

bot.onText(/\F3_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "F3 turned ON")
F3.writeSync(1);
});


bot.onText(/\F3_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "F3 turned OFF")
F3.writeSync(0);
});

bot.onText(/\F4_ON/, ( msg) => {
bot.sendMessage(msg.chat.id, "F4 turned ON")
F4.writeSync(1);
});


bot.onText(/\F4_OFF/, ( msg) => {
bot.sendMessage(msg.chat.id, "F4 turned OFF")
F4.writeSync(0);
});



