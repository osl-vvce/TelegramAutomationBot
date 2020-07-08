var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var L1 = new Gpio(2, 'out');
L1.writeSync(1); 
var F3 = new Gpio(3, 'out');
F3.writeSync(1); 
var L2 = new Gpio(4, 'out');
L2.writeSync(1); 
var L3 = new Gpio(17, 'out');
L3.writeSync(1); 
var F1 = new Gpio(27, 'out'); 
F1.writeSync(1);
var F4 = new Gpio(22, 'out');
F4.writeSync(1); 
var F2 = new Gpio(10, 'out');
F2.writeSync(1);
 
var statL1=0;
var statL2=0;
var statL3=0;
var statF1=0;
var statF2=0;
var statF3=0;
var statF4=0;

var arr = [];
const fs = require('fs');
const readline = require('readline');
const TelegramBot = require('node-telegram-bot-api'); 
const token = '1349997165:AAGeWD5Ka01QgMpw35pmsJRVl0NdYUx6okw';
const bot = new TelegramBot(token, {polling: true});
const {
    membersList,
    usernames,
    chatId,
    memberNameChatIdMap,
} = require("./data.json")





	bot.onText(/\/start/, (msg) => 
	{	
		    if (msg.chat.id in chatId)  

		{
				bot.sendMessage(msg.chat.id, "what d u wanna turn on??",
					{
					"reply_markup": {
						"keyboard" : [["L1_ON","L1_OFF"],["L2_ON","L2_OFF"],["L3_ON","L3_OFF"],["F1_ON","F1_OFF"],["F2_ON","F2_OFF"],["F3_ON","F3_OFF"],["F4_ON","F4_OFF"]]
							}
					});
		 }	
			else {
			 bot.sendMessage(msg.chat.id, "you are not a reporting member!!"); 
			 bot.sendMessage(msg.chat.id, "CONTACT MODREATORS."); 
			 arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
			 fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
			 console.log(arr);
			
			}
	});




				bot.onText(/\L1_ON/, ( msg) => {

					if (msg.chat.id in chatId)  
					{
						if(statL1!=1)
						{	
							bot.sendMessage(msg.chat.id, "L1 turned ON")
							L1.writeSync(0) ;
							statL1= 1;
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr + '\n',(err)=>{if(err) throw err});
							console.log(arr);
							console.log(statL1);
						}
						else{
							console.log("its turned on already!! ");
							bot.sendMessage(msg.chat.id, " L1 is turned on already!! ");
							}
					}
					else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				
				});


				bot.onText(/\L1_OFF/, ( msg) => {

				if (msg.chat.id in chatId)  
					{
						if(statL1!=0)
						{								
							bot.sendMessage(msg.chat.id, "L1 turning OFF dont press ANYTHING!!")
							setTimeout(() => { L1.writeSync(1);bot.sendMessage(msg.chat.id, "Done!"); }, 5000);			
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);
							statL1 = 0;
							console.log(statL1);
						}
						else {
							console.log("its turned OFF  already!! ");
							bot.sendMessage(msg.chat.id, " L1 is turned OFF  already!! ");
							}
					
					}

					else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});
		
				
				bot.onText(/\L2_ON/, ( msg) => {

				if (msg.chat.id in chatId)  
					{
						if(statL2!=1)
						{								
			
					
							bot.sendMessage(msg.chat.id, "L2 turned ON")
							L2.writeSync(0);
							statL2= 1;
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);console.log(statL2);
						}
						else {
							console.log("its turned on already!! ");
							bot.sendMessage(msg.chat.id, " L2 is turned on already!! ");
							}
					
			

					}

				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});
		


				bot.onText(/\L2_OFF/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statL2!=0)
						{								
			
							bot.sendMessage(msg.chat.id, "L2 turning OFF dont press ANYTHING!!")
							setTimeout(() => { L2.writeSync(1);bot.sendMessage(msg.chat.id, "Done!"); }, 5000);
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);
							statL2 = 0;console.log(statL2);
						}
						else {
							console.log("its turned  OFF  already!! ");
							bot.sendMessage(msg.chat.id, " L2 is turned OFF  already!! ");
							}
					}
					
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});



				bot.onText(/\L3_ON/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statL3!=1)
						{								
			
							bot.sendMessage(msg.chat.id, "L3 turned ON")
							L3.writeSync(0);statL3= 1;
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);console.log(statL3);
						}
						else {
							console.log("its turned on already!! ");
							bot.sendMessage(msg.chat.id, " L3 is turned on already!! ");
							}
					}
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				bot.onText(/\L3_OFF/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
						if(statL3!=0)
						{								
			
					
							bot.sendMessage(msg.chat.id, "L3 turning OFF dont press ANYTHING!!")
							setTimeout(() => { L3.writeSync(1);bot.sendMessage(msg.chat.id, "Done!"); }, 5000);
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);
							statL3 = 0;console.log(statL3);
						}
						else {
							console.log("its turned  OFF  already!! ");
							bot.sendMessage(msg.chat.id, " L3 is turned OFF  already!! ");
							}
					}
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				
				bot.onText(/\F1_ON/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statF1!=1)
						{								
			
							bot.sendMessage(msg.chat.id, "F1 turned ON")
							F1.writeSync(0);statF1= 1;
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);console.log(statF1);

						}
						else {
							console.log("its turned on already!! ");
							bot.sendMessage(msg.chat.id, " F1 is turned on already!! ");
	 						}
					}
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				bot.onText(/\F1_OFF/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statF1!=0)
						{								
			
							bot.sendMessage(msg.chat.id, "F1 turning OFF dont press ANYTHING!!")
							setTimeout(() => { F1.writeSync(1);bot.sendMessage(msg.chat.id, "Done!"); }, 5000);
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);
							statF1 = 0;console.log(statF1);
						}
						else {
							console.log("its turned  OFF  already!! ");
							bot.sendMessage(msg.chat.id, " F1 is turned OFF  already!! ");
							}
					
					}
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				bot.onText(/\F2_ON/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statF2!=1)
						{								
				
							bot.sendMessage(msg.chat.id, "F2 turned ON")
							F2.writeSync(0);statF2= 1;
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);console.log(statF2);
						}
						else {
							console.log("its turned on already!! ");
							bot.sendMessage(msg.chat.id, " F2 is turned on already!! ");
							}
					}
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}	
				});


				bot.onText(/\F2_OFF/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statF2!=0)
						{								
			
							bot.sendMessage(msg.chat.id, "F2 turning OFF dont press ANYTHING!!")
							setTimeout(() => { F2.writeSync(1);bot.sendMessage(msg.chat.id, "Done!"); }, 5000);
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);
							statF2 = 0;console.log(statF2);
						}
						else {
							console.log("its turned  OFF  already!! ");
							bot.sendMessage(msg.chat.id, " F2 is turned OFF already!! ");
							}
					}
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				bot.onText(/\F3_ON/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
						if(statF3!=1)
						{								
			
						
							bot.sendMessage(msg.chat.id, "F3 turned ON")
							F3.writeSync(0);statF3= 1;
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);console.log(statF3);
						}
						else {
							console.log("its turned on already!! ");
							bot.sendMessage(msg.chat.id, " F3 is turned on already!! ");
							}
					}
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				bot.onText(/\F3_OFF/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
						if(statL3!=0)
						{								
			
					
							bot.sendMessage(msg.chat.id, "F3 turning OFF dont press ANYTHING!!")
							setTimeout(() => { F3.writeSync(1);bot.sendMessage(msg.chat.id, "Done!"); }, 5000);
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);
							statF3 = 0;console.log(statF3);
						}
						else {
							console.log("its turned  OFF already!! ");
							bot.sendMessage(msg.chat.id, " F3 is turned OFF already!! ");
							}
					}
				
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				bot.onText(/\F4_ON/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statF4!=1)
						{								
				
							bot.sendMessage(msg.chat.id, "F4 turned ON")
							F4.writeSync(1);statF4= 1;
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);console.log(statF4);
						}
						else {
							console.log("its turned on already!! ");
							bot.sendMessage(msg.chat.id, " F4 is turned on already!! ");
							}
					}
			
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});


				bot.onText(/\F4_OFF/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
					
						if(statF4!=0)
						{								
			
							bot.sendMessage(msg.chat.id, "F4 urning OFF dont press ANYTHING!!")
							setTimeout(() => { F4.writeSync(1);bot.sendMessage(msg.chat.id, "Done!"); }, 5000);
							arr.push(msg.chat.id,msg.chat.first_name,msg.text,);
							fs.appendFile('./New.xls',arr,(err)=>{if(err) throw err});
							console.log(arr);
							statF4 = 0;console.log(statF4);
						}
						else {
							console.log("its turned  OFF already!! ");
							bot.sendMessage(msg.chat.id, " F4 is turned OFF already!! ");
							}
					
			

					}
				else{
						
							bot.sendMessage(msg.chat.id, " u r not allowed!!!");
							
						
					}
				});

	bot.onText(/\/status/, ( msg) => {
				if (msg.chat.id in chatId)  
					{
						if(statL1==1)
						
							bot.sendMessage(msg.chat.id, " L1 is ON");
						if(statL1==0)
						
							bot.sendMessage(msg.chat.id, " L1 is OFF");
						if(statL2==1)
						
							bot.sendMessage(msg.chat.id, " L2 is ON");
						if(statL2==0)
						
							bot.sendMessage(msg.chat.id, " L2 is OFF");
						if(statL3==1)
						
							bot.sendMessage(msg.chat.id, " L3 is ON");
						if(statL3==0)
						
							bot.sendMessage(msg.chat.id, " L3 is OFF");
						if(statF1==1)
						
							bot.sendMessage(msg.chat.id, " F1 is ON");
						if(statF1==0)
						
							bot.sendMessage(msg.chat.id, " F1 is OFF");
						if(statF2==1)
						
							bot.sendMessage(msg.chat.id, " F2 is ON");
						if(statF2==0)
						
							bot.sendMessage(msg.chat.id, " F2 is OFF");
						if(statF3==1)
						
							bot.sendMessage(msg.chat.id, " F3 is ON");
						if(statF3==0)
						
							bot.sendMessage(msg.chat.id, " F3 is OFF");
						if(statF4==1)
						
							bot.sendMessage(msg.chat.id, " F4 is ON");
						if(statF4==0)
						
							bot.sendMessage(msg.chat.id, " F4 is OFF");


					}




				});
