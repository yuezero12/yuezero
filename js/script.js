"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	},
	"school_rule":{
		"Title": "校規",
		"Subtitle": "請務必遵守各項校規",
		"Message":`
			符合以下規則者立即給予退學處分:
			<p>1.考核分數低於或等於0分者</p>
			<p>2.校方確認到在沒有契約的情況下對他人施予暴力者</p>
			<p>3.嘗試破壞校內公共物品者</p>
			<p>4.在沒有校方認可的情況下嘗試離開校園者</p>
			<p>5.校方確認到在任何考試中使用作弊手段者</p>
			<p>-----------------------------------</p>
			<p>符合以下規則者給予減少考核分數之處分:</p>
			<p>1.在每日午夜12:00前未回到宿舍房間者，直到早上7:00為止每分鐘扣除1點考核分數</p>
			<p>2.違反基本規則者，每次違反扣除1點考核分數</p>
			<p>3.違反契約該率行之義務者，扣除50考核分數</p>`
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {
	"snow": {
		"particles":{
			"number":{
				"value":0,
				"density":{
					"enable":true,"value_area":800}},
			"color":{"value":"#ffffff"},
			"shape":{
				"type":"circle",
				"stroke":{
					"width":0,
					"color":"#000000"},
				"polygon":{"nb_sides":5},
				"image":{
					"src":"img/github.svg",
					"width":100,"height":100}},
			"opacity":{
				"value":0.5,
				"random":true,
				"anim":{
					"enable":false,
					"speed":1,
					"opacity_min":0.1,
					"sync":false}},
			"size":{
				"value":3,
				"random":true,
				"anim":{
					"enable":false,
					"speed":40,
					"size_min":0.1,
					"sync":false}},
			"line_linked":{
				"enable":false,
				"distance":150,
				"color":"#ffffff",
				"opacity":0.4,
				"width":1},
			"move":{
				"enable":true,
				"speed":6,
				"direction":"none",
				"random":false,
				"straight":false,
				"out_mode":"out",
				"bounce":false,
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200}}},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
					"mode":"repulse"},
				"onclick":{
					"enable":true,
					"mode":"push"},
				"resize":true},
			"modes":{
				"grab":{
					"distance":400,
					"line_linked":{"opacity":1}},
				"bubble":{
					"distance":400,
					"size":40,
					"duration":2,
					"opacity":8,
					"speed":3},
				"repulse":{
					"distance":200,
					"duration":0.4},
				"push":{"particles_nb":4},
				"remove":{"particles_nb":2}}},
		"retina_detect":true}

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"宿舍房間" : "宿舍房間.jpg",
	"走廊":"走廊.jpg",
	"電梯":"電梯.jpg",
	"大門":"大門.jpeg",
	"交誼廳":"交誼廳.jpg",
	"交誼廳-夜":"交誼廳-夜.jpg",
	"商店-晚":"商店-晚上.jpg",
	"商店":"商店-白天.jpg",
	"連結路":"連結路.jpg",
	"娛樂中心":"娛樂中心.jpg",
	"體育館":"體育館.jpg",
	"泳池":"泳池.jpg",
	"教室":"教室.jpg",
	"美食街":"美食街.jpg",
	"美食街-夜":"美食街-夜.jpg"
};

// Define the Characters
const characters = {
	"school":{
		"Name": "{{school.radio}}",
		"Color": "#00BBFF"
	},
	"mail":{
		"Name":"{{school.mail}}",
		"Color":"#00BBFF"
	},
	"plane":{
		"Name":"",
		"Images":{
			"Normal":"平板樣式.png"
		}
	},
	"player": {
		"Name": "{{player.name}}",
		"Color": "#5bcaff"
	},
	"f-19": {
		"Name":"{{f_19.name}}",
		"Color":"#FF3EFF",
		"Images":{
			"Normal":"林芷宣.png"
		}
	},
	"f班導":{
		"Name":"陳智強",
		"Color":"#00BBFF",
		"Images":{
			"Normal":"f班導.png"
		}
	}
};

let script = {
	// The game starts here.
	"Start": [
		"clear",
		"scene black with fadeIn",
		"wait 500",
		{"Function": {
			"Apply": function () {
				particles.snow.particles.number.value = 100;
				return true;
			},
			"Reverse": function () {
				particles.snow.particles.number.value = 50;
				return true;
			},
		}},
		"centered 你知道的...",
		"particles snow",
												"jump 9/2開始",
		"centered 在現今社會裡總有一些人喜歡盲從",
		"centered 他們盲目的跟隨流行",
		"centered 盲目的相信各種謠言",
		"centered 盲目的譴責各種事情",
		"centered 還自以為是的認為自己永遠都是對的",
		"centered 然而遺憾的是...",
		"centered 大部份的人都是這樣",
		"centered 因此",
		"centered 世界需要改革...",
		"stop particles",
		"wait 800",
		"頭好痛",
		"感受到疼痛的我，立刻清醒了過來",
		"也許是睡得太久了，看來應該起來了",
		"我這麼思考著張開了眼睛",
		"然而，張開眼後看到的也不過是一片漆黑",
		"就在我起身尋找電源開關時，電燈就像感應到我的動作自己打開了",
		"此時映入眼簾的是一個陌生的純白房間",
		"scene 宿舍房間",
		"房間內有著各式基本的生活用具，看起來並不像是綁架的好地方",
		"school 各位同學請注意",
		"正當我思考著這是哪裡的時候，不知道從哪裡傳來了廣播的聲音",
		"school 由於一切都已經準備就緒了，因此我們在這裡鄭重地宣布開學",
		"開學?",
		"他到底在說甚麼?",
		"不過不管怎麼樣我也只能先集中注意力聽完他說的內容",
		"school 相信各位同學都已經接受過基本說明了，因此校方不再多做贅述其他內容，只進行最後一項通知",
		"school 各位看到一開始放置於床頭的平板了嗎? 那將會是你們在學期間的重要物品，請妥善保管",
		"school 現在請各位打開平板並進行登入，輸入自己的名字後就能夠登入了",
		"school 一旦登入後就會自動綁定使用者，不允許擅自更換，若遺失了將會透過扣除考核分數補發",
		"school 現在，給你們時間完成操作後再進行下一步",
		"雖然不知道的事情還是很多，但現在也只能照著做了吧",
		"我照著廣播說的看向床頭，上面放著一個平板還有一張卡片",
		"是這個嗎?",
		"show plane Normal middle",
		"我拿起了平板,並開始輸入自己的名字",
		{
			"Input": {
				"Text": "請輸入使用者名字進行登入",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.name = input;
					return true;
				},
				"Warning": "偵測到不符合使用者身分的登入者"
			}
		},
		"這樣就完成了吧，我試著打開了平板看看裡面有些甚麼資訊",
		"打開平板後看到了時間是23:55和幾個已經安裝好的app",
		"然而我還沒看清楚內容時廣播又來了",
		"hide plane",
		"school 看來大家都已經完成了，那麼開始講解平板的功能，請仔細記好以下三點",
		"school 第一點:這上面會記載著你們各自的基本資料，包含各科成績和考核分數，你們可以隨時進行確認",
		"school 第二點:任何重要事項校方都會在午夜12:00時傳到你們的平板中，不要漏看了重要訊息",
		"school 第三點:這上面會記載著所有的校規，你們必須確認好，以免不小心觸犯校規",
		"school 這些就是這台平板大致上的功能，也是你們在學期間會用到的重要功能",
		"school 除此之外的功能隨便你們使用",
		"school 最後，提醒各位同學，明天早上8:00請準時到達各自班上",
		"school 並依照座位上的姓名入座，各班班導將會對你們進行各項說明",
		"school 以上，各位可以休息了",
		"老實說我完全沒搞懂發生了甚麼事",
		"目前可以確定的只有我似乎在不知不覺中就讀了這所學校",
		"四處張望了下，只不過是個普通房間，除了發現監視器外沒有任何線索",
		"只能判斷這個房間大概是宿舍吧，然而我卻沒有來到這裡的印象",
		"看來只能先整理一下現有資訊了",
		"jump 第一次選擇"
	],
	"第一次選擇":[
		"hide plane",
		"scene 宿舍房間",
		{
			"Choice": {
				"Dialog": "要調查甚麼呢?",
				"查看平板": {
					"Text": "查看平板",
					"Do": "jump 查看平板"
				},
				"四處調查": {
					"Text": "四處調查",
					"Do": "jump 四處調查",
					"Condition": function () {
						return storage.check_bathroom == false || storage.check_door == false;
					}
				},
				"上床休息":{
					"Text":"上床休息",
					"Do":"jump 上床休息"
				}
			}
		}
	],
	"查看平板":[
		"show plane Normal middle",
		{
			"Choice": {
				"Dialog": "要點開哪個app呢?",
				"查看個人資訊": {
					"Text": "查看個人資訊",
					"Do": "jump 查看個人資訊"
				},
				"查看校規": {
					"Text": "查看校規",
					"Do": "jump 查看校規"
				},
				"打開信箱":{
					"Text":"打開信箱",
					"Do":"jump 第一次打開信箱"
				},
				"查看通訊軟體":{
					"Text":"查看通訊軟體",
					"Do":"jump 查看通訊軟體"
				},
				"關閉平板":{
					"Text":"關閉平板",
					"Do":"jump 第一次選擇"
				}
			}
		}
	],
	"查看個人資訊":[
		"學生姓名:{{player.name}} ，班級:一年F班 ，持有考核分數:{{player.score}} ，國文平均成績:{{player.chinese_score}} ，英文平均成績:{{player.english_score}} ，數學平均成績:{{player.math_score}} ，社會平均成績:{{player.society_score}} ，自然平均成績:{{player.natural_score}}",
		{"Conditional": {
			"Condition": function(){
				return storage.firstcheckdata == false;
			},
			"True": "看起來似乎都是些基本資料而已，沒有甚麼特別的地方",
			"False": "jump 查看平板"
		}},
		function () {
			storage.firstcheckdata = true;
			return true;
		},
		"jump 查看平板"
	],
	"查看校規":[
		"display message school_rule",
		{"Conditional": {
			"Condition": function(){
				return storage.check_rule == false;
			},
			"True": "這校規有許多意義不明確的句子，是故意的嗎?",
			"False": "jump 查看平板"
		}},
		function () {
			storage.check_rule = true;
			return true;
		},
		"之後再來想好了，先調查其他的內容",
		"jump 查看平板"
	],
	"第一次打開信箱":[
		{"Conditional": {
			"Condition": function(){
				return storage.firstmailbox == false;
			},
			"True": "jump 是否打開郵件",
			"False": "沒有任何信件"
		}},
		"jump 查看平板"
	],
	"是否打開郵件":[
		{
			"Choice": {
				"Dialog": "確認到未讀郵件，是否打開?",
				"打開郵件": {
					"Text": "打開郵件",
					"Do": "jump 第一封郵件"
				},
				"不打開": {
					"Text": "不打開",
					"Do": "jump 查看平板"
				}
			}
		}
	],
	"第一封郵件":[
		function () {
			storage.firstmailbox = true;
			storage.school.mail = "校方郵件";
			return true;
		},
		"mail TO:{{player.name}}",
		"mail 由於你是額外補進來的學生，因此沒有聽到校方之前的公告",
		"mail 所以用這封信來告知你錯過的事情",
		"mail 這所學校是政府為了培養出最優秀的學生而設立的",
		"mail 因此，政府將很多在各方面認定為優秀的學生強迫性的加入這所學校",
		"mail 由於是最優秀的人才，因此一旦成功從這所學校畢業，大學將由政府安排進最頂尖的學校",
		"mail 並且在未來只要進行創業，也會受到政府的全力支援",
		"mail 如果不創業，也可以進入各大企業，只要從這所學校畢業就能獲得所有大企業的青睞",
		"mail 然而，一旦被學校退學，就會被判定為不夠優秀",
		"mail 在這所學校期間學的東西將一蓋被無視，並且高中學歷必須從頭開始",
		"mail 而你們這屆就是政府開始實施這個計畫的第一屆",
		"mail 除此之外你們的家人是在完全知情的情況下讓你們進來的，因此不必擔心",
		"mail 那麼，祝你好運，期待你能待到畢業",
		"這封信件真是給了我不少重要資訊啊",
		"那麼接下來呢?",
		"jump 查看平板"
	],
	"查看通訊軟體":[
		"目前沒有任何通訊對象",
		"jump 查看平板"
	],
	"四處調查":[
		{
			"Choice": {
				"Dialog": "要調查哪裡呢?",
				"調查浴室": {
					"Text": "調查浴室",
					"Do": "jump 調查浴室",
					"Condition": function () {
						return storage.check_bathroom == false;
					}
				},
				"調查房門": {
					"Text": "調查房門",
					"Do": "jump 調查房門",
					"Condition": function () {
						return storage.check_door == false;
					}
				},
				"調查廚房": {
					"Text": "調查廚房",
					"Do": "jump 調查廚房",
					"Condition": function () {
						return storage.check_kitchen == false;
					}
				},
				"停止調查": {
					"Text": "停止調查",
					"Do": "jump 第一次選擇",
					"Condition": function () {
						return storage.check_kitchen == false || storage.check_door == false || storage.check_bathroom == false;
					}
				},
			}
		}
	],
	"調查浴室":[
		function () {
			storage.check_bathroom = true;
			return true;
		},
		"進入浴室後，並沒有看到甚麼特別的地方",
		"只看到一些基本的盥洗用具",
		"也沒有看到像房間中那樣的監視器",
		"去別的地方看看吧",
		{"Conditional": {
			"Condition": function(){
				return storage.check_door == true && storage.check_kitchen == true;
			},
			"True": "jump 第一次選擇",
			"False": "jump 四處調查"
		}}
	],
	"調查廚房":[
		function () {
			storage.check_kitchen = true;
			return true;
		},
		"進入廚房後，我開始到處看看",
		"但是除了一台冰箱和瓦斯爐等設備之外沒有看到其他特別的地方",
		"去別的地方看看吧",
		{"Conditional": {
			"Condition": function(){
				return storage.check_door == true && storage.check_bathroom == true;
			},
			"True": "jump 第一次選擇",
			"False": "jump 四處調查"
		}}
	],
	"調查房門":[
		function () {
			storage.check_door = true;
			return true;
		},
		"房門是一個很普通的門，上面的鎖似乎是電子鎖",
		"也就是說卡片的功能是鑰匙吧",
		{
			"Choice": {
				"Dialog": "那麼，要試著出去看看嗎?",
				"嘗試出去": {
					"Text": "嘗試出去",
					"Do": "jump 嘗試出去",
				},
				"不嘗試出去": {
					"Text": "不嘗試出去",
					"Do": "還是不要貿然出去好了",
				}
			}
		},
		{"Conditional": {
			"Condition": function(){
				return storage.check_rule == true;
			},
			"True": "也許校規已經生效了，這時候出去很有可能被扣分",
			"False": "不知道亂跑出去會不會受到甚麼懲罰"
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.check_bathroom == true && storage.check_kitchen == true;
			},
			"True": "jump 第一次選擇",
			"False": "jump 四處調查"
		}}
	],
	"嘗試出去":[
		"將卡片對上門鎖之後，房門發出聲響並打開了",
		"scene 走廊",
		"出現在眼前的是一條普通的長廊，只不過燈光相當昏暗",
		"也沒有看到任何窗戶的樣子",
		"說起來房間也沒看到任何窗戶，也許有甚麼特別的用意吧",
		"jump 嘗試出去後選擇"
	],
	"嘗試出去後選擇":[
		{
			"Choice": {
				"Dialog": "要去哪裡探索?",
				"往死路的方向移動": {
					"Text": "往死路的方向移動",
					"Do": "jump 往死路的方向移動",
					"Condition": function () {
						return storage.death_road == false;
					}
				},
				"往電梯的方向移動": {
					"Text": "往電梯的方向移動",
					"Do": "jump 往電梯的方向移動",
					"Condition": function () {
						return storage.elevator == false;
					}
				},
				"返回房間":{
					"Text":"返回房間",
					"Do":"jump 返回房間",
					"Condition": function () {
						return storage.elevator == true || storage.death_road == true;
					}
				}
			}
		},
	],
	"往死路的方向移動":[
		function () {
			storage.player.score -= 1;
			storage.death_road = true;
			return true;
		},
		"我沿著走廊一直走到了死路",
		"這裡果然甚麼都沒有",
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "除了剛看過的那些門之外，並沒有哪裡值得調查",
			"False": "不過沿路上看到很多和我一開始在的房間相同的門，上面還有著類似於房號的數字，也就是說這裡果然是宿舍吧"
		}},
		"沒有其他收穫了，接下來呢?",
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "jump 第一次選擇",
			"False": "jump 嘗試出去後選擇"
		}}
	],
	"往電梯的方向移動":[
		function () {
			storage.player.score -= 1;
			storage.elevator = true;
			return true;
		},
		"我沿著走廊一直走到了電梯口",
		"在電梯旁還有一個緊急逃生出口",
		"除此之外並沒有甚麼特別的地方",
		{"Conditional": {
			"Condition": function(){
				return storage.death_road == true;
			},
			"True": "除了剛看過的那些門之外，並沒有哪裡值得調查",
			"False": "沿路上看到很多和我一開始在的房間相同的門，上面還有著類似於房號的數字，也就是說這裡果然是宿舍吧"
		}},
		"那麼果然只剩下是否要下樓看看了吧",
		{
			"Choice": {
				"Dialog": "要下樓看看嗎?",
				"要": {
					"Text": "要",
					"Do": "jump 搭電梯下樓",
				},
				"不要": {
					"Text": "不要",
					"Do": "jump 不搭電梯下樓",
				}
			}
		},
	],
	"搭電梯下樓":[
		function () {
			storage.player.score -= 6;
			storage.floor_door_check = true;
			return true;
		},
		"都到這裡了果然還是下去看看吧",
		"scene 電梯",
		"進入電梯後，透過樓層介紹了解到1樓有個交誼廳，地下1樓由超市和美食街組成，2樓以上則全是宿舍",
		"看來是沒有甚麼特別的地方",
		"那就去1樓看看能不能去外面吧",
		"scene 大門",
		"到達一樓後發現大門是自動門，但我靠近卻沒有反應",
		"看來應該是強制斷電了，沒辦法出門",
		"唯一讓我好奇的是剛才到大門時大門外一片漆黑，簡直像是出去也還在建築內一樣",
		"也有可能大門是單面玻璃就是了",
		"scene 交誼廳-夜",
		"因此我選擇前往交誼廳看看，但是並沒有甚麼特別的發現",
		"看起來只是普通的交誼廳",
		"scene 商店-晚",
		"之後我也到了地下一樓查看，不過商店拉上了鐵門，美食街也沒有任何值得調查的地方",
		"因此甚麼線索也沒有",
		"scene 宿舍房間",
		"於是我回到了房間內思考接下來的事情",
		"jump 第一次選擇"
	],
	"不搭電梯下樓":[
		function () {
			storage.player.score -= 1;
			return true;
		},
		{"Conditional": {
			"Condition": function(){
				return storage.check_rule == true;
			},
			"True": "就算下去看也不一定有結果，還有可能被扣分，果然還是先回房間好了",
			"False": "總覺得下去看也沒什麼用，還是先回房間休息好了"
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.death_road == true;
			},
			"True": "jump 第一次選擇",
			"False": "jump 嘗試出去後選擇"
		}}
	],
	"返回房間":[
		{"Conditional": {
			"Condition": function(){
				return storage.check_rule == true;
			},
			"True": "繼續調查下去也不一定有結果，還有可能被扣分，果然還是先回房間好了",
			"False": "總覺得調查下去也沒什麼用，還是先回房間休息好了"
		}},
		"jump 第一次選擇"
	],
	"上床休息":[
		{"Conditional": {
			"Condition": function(){
				return storage.death_road == true || storage.elevator == true;
			},
			"True": "於是我坐到了床前準備休息",
			"False": "由於覺得調查也沒什麼用，因此我坐到了床前準備休息"
		}},
		"此時我開始回想著是如何來到這裡的",
		"突然間，我想起了在記憶中斷之前的事情",
		"當時的我由於突然與我的青梅竹馬-林芷瑄失去聯繫",
		"明明一起升上了同所高中，她卻在開學第一天突然轉學了",
		"於是我在當天放學後立刻前往她家想找她問清楚，然而當我到達時沒有任何人回應我",
		"所以我翻過圍牆進到院子裡並透過窗戶往內看他們是不是剛好出門了",
		"結果這一看看到了出乎我意料之外的事情",
		"整棟房子空蕩蕩的，家具全部都被搬走，就像是很久沒人住過一樣",
		"之後，就在我開始懷疑他們是全家被捲入甚麼不得了的事件還是真的不跟我說一聲就搬走而開始調查時，背後突然遭到了偷襲",
		"我被人用毛巾之類的東西掩住鼻子後昏倒了，等我醒來後就在這裡了",
		"雖然現在我還無法隨便下定論，但如果必要，我可能要想辦法讓自己被退學去調查才行",
		"當然，我更希望是來到這裡後想到的可能",
		"不管怎麼說，也該是時候休息了",
		"剩下的事等明天聽過老師講解再來思考好了",
		"我用平板設定好鬧鐘後緩緩閉上雙眼，漸漸地陷入沉睡",
		"scene black with fadeIn",
		"wait 2000",
		function(){
			alert("建議在此處存個檔，存檔按鈕在右下角");
			return true;
		},
		"wait 1000",
		"particles snow",
		"jump 9/2開始"
	],
	"9/2開始":[
		"centered 人類是唯一會說謊的動物",
		"centered 但說謊這門藝術卻不是常人能做到的",
		"centered 無法保持不被拆穿的謊言只能由新的謊言堆疊上去",
		"centered 越疊越多的謊言終有一天會漏出破綻",
		"centered 之後就如同雪崩一樣，堆疊的一切將毀於一旦",
		"stop particles",
		"wait 1000",
		"centered 9/2星期二",
		"鬧鐘的聲音讓我從夢中醒了過來",
		"我關掉了鬧鐘並從床邊起來，但是電燈似乎沒有打開",
		"我還以為這是全自動的，看來昨天是特殊情況吧",
		"於是我拿起了平板當照明並尋找電燈開關",
		"scene 宿舍房間",
		"雖然對於目前的狀況還是很沒有頭緒，但也只能先去教室看看了",
		"我花了點時間做好基本的準備後我拿起卡片和平板後並走出了房間",
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "jump 直接出發",
			"False": "jump 第二天才第一次出門"
		}},
	],
	"直接出發":[
		"scene 美食街",
		"由於昨天已經事先勘查過了，我直接前往了地下一樓的美食街，當我到達時已經有不少學生來到這裡了",
		"根據老闆所說，似乎店家僅限今天早上是免費的，看來之後要想辦法存錢了",
		"在等待的過程中也陸陸續續有人來到了美食街，有些人看起來是互相認識的在對話",
		"吃完後我看了下平板確認到時間是7:20後決定出發尋找教室",
		"scene 大門",
		"於是我來到了昨天沒辦法打開的大門，清楚的看到外面是一條走廊",
		"看起來一點都沒有通往戶外的樣子",
		"果然是這樣啊",
		"scene 連結路",
		"我一邊想著還是一邊走了出去",
		"走了沒多久後我就看到了通往各處的岔路以及對應的路標",
		"路標上寫著通往各棟不同建築的路線",
		{
			"Choice": {
				"Dialog": "那麼我要直接去教室還是先到處看看呢?",
				"直接前往教室": {
					"Text": "直接前往教室",
					"Do": "jump 直接前往教室"
				},
				"去體育館看看": {
					"Text": "去體育館看看",
					"Do": "jump 去體育館"
				},
				"去娛樂中心看看": {
					"Text": "去娛樂中心看看",
					"Do": "jump 去娛樂中心"
				},
			}
		}
	],
	"第二天才第一次出門":[
		function () {
			storage.time.min += 20;
			return true;
		},
		"scene 電梯",
		"進入電梯後，透過樓層我介紹了解到1樓有個交誼廳，地下1樓由超市和美食街組成，2樓以上則全是宿舍",
		"那就去地下1樓看看能不能找點甚麼吃吧",
		"scene 商店",
		"於是我直接前往了地下一樓的美食街，當我到達時已經有不少學生來到這裡了",
		"根據老闆所說，似乎店家僅限今天早上是免費的，看來之後要想辦法存錢了",
		"在等待的過程中也後陸陸續續有人來到了美食街，有些人看起來是互相認識的在對話",
		"吃完後我看了下平板確認到時間是7:40後決定出發尋找教室",
		"scene 大門",
		"於是我來到了1樓的的大門，大門的外面是一條走廊，看起來就算走出去也還是在室內",
		"真是個奇怪的設計",
		"scene 連結路",
		"我一邊想著還是一邊走了出去",
		"走了沒多久後我就看到了通往各處的岔路以及對應的路標",
		"路標上寫著通往各棟不同建築的路線",
		{
			"Choice": {
				"Dialog": "那麼我要直接去教室還是先到處看看呢?",
				"直接前往教室": {
					"Text": "直接前往教室",
					"Do": "jump 直接前往教室"
				},
				"去體育館看看": {
					"Text": "去體育館看看",
					"Do": "jump 去體育館"
				},
				"去娛樂中心看看": {
					"Text": "去娛樂中心看看",
					"Do": "jump 去娛樂中心"
				},
			}
		}
	],
	"直接前往教室":[
		"其他地方沒那麼重要，果然還是先去教室看能獲得什麼情報吧",
		"於是我往教學大樓的方向走了過去",
		"jump 開學典禮"
	],
	"去娛樂中心":[
		function () {
			storage.time.min += 20;
			if (storage.time.min>=60){
				storage.time.min-=60;
				storage.time.hour+=1;
				storage.player.score-=1;
			}
			return true;
		},
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "反正離8:00還有一點時間，先去看看娛樂中心是甚麼好了",
			"False": "雖然時間不早了，但只是去看一下應該還好吧"
		}},
		"跟著路牌走了一段時間後來到了一條街上",
		"scene 娛樂中心",
		"周遭有各式各樣的店家，但似乎還沒開始營業",
		"天空相當明亮，但不知道為甚麼沒有看到太陽",
		"這還真是個相當誇張的地方啊，不惜用綁架的方式還有這麼多錢來弄這些",
		"或許我被捲進某個相當不得了的事情中了啊",
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "jump 岔路時間1",
			"False": "jump 岔路時間2",
		}},
	],
	"去體育館":[
		function () {
			storage.time.min += 20;
			if (storage.time.min>=60){
				storage.time.min-=60;
				storage.time.hour+=1;
				storage.player.score-=1;
			}
			return true;
		},
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "反正離8:00還有一點時間，先去看看體育館有甚麼好了",
			"False": "雖然時間不早了，但只是去看一下應該還好吧"
		}},
		"跟著路牌走了一段時間後來到了一條街上",
		"scene 體育館",
		"進到體育館後首先看到的就是籃球場，不過除了相當寬敞外並沒有什麼特別的地方",
		"於是我繼續在體育館探索，並發現了一間室內泳池",
		"scene 泳池",
		"這個泳池是國際標準泳池大小，看起來校方在這方面相當用心",
		"相當注重這方面啊，有甚麼特別的用意嗎?",
		"四處調查後沒有多的情報，因此只能返回岔路口",
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "jump 岔路時間1",
			"False": "jump 岔路時間2",
		}},
	],
	"岔路時間1":[
		"scene 連結路",
		"之後我花了點時間找到原本的岔路口,並拿出平板確認了時間是7:40",
		"時間也不早了，還是趕快到班上去看看吧",
		"於是我往教學大樓的方向走了過去",
		"jump 開學典禮2"
	],
	"岔路時間2":[
		"scene 連結路",
		"之後我花了點時間找到原本的岔路口,並拿出平板確認了時間是8:00",
		"糟了，沒注意到時間，第一天就遲到是不是不太妙啊",
		"於是我往教學大樓的方向全力衝刺過去",
		"jump 開學典禮3"
	],
	"開學典禮":[
		"scene 教室",
		"到達教學大樓後我透過樓層簡介找到了自己的教室在7樓",
		"搭電梯到達7樓後我發現已經有不少同學在教室裡了",
		"有些人各自做著自己的事，有些人則分成各自的小團體聚在一起聊天",
		"不知道該說幸運還是不幸運，這些人當中並沒有發現我認識的人",
		"這時我注意到了每張桌子上都有一張看起來像是學生證的卡片",
		"我找到桌上著有我名字卡片的位置後坐了下來並環視了一下教室",
		"基本上是個普通的教室，但非常高科技",
		"黑板是由電子螢幕做的，書桌的桌面也是",
		"看起來隨隨便便就要幾十萬到幾百萬",
		"給學生這樣的設備實在有點太過了吧",
		"我一邊想著一邊看向了窗戶",
		"窗戶的景色似乎是靜止的圖片，而窗框的厚度看起來像畫框一樣",
		"也就是說這不是真正的窗戶吧，為甚麼要把窗戶用螢幕的方式代替，這有甚麼特別的意義嗎?",
		{"Conditional": {
			"Condition": function(){
				return storage.elevator == true;
			},
			"True": "我看了一眼時鐘注意到時間是7:30",
			"False": "我看了一眼時鐘注意到時間是7:50",
		}},
		"看來現在也不能幹嘛，稍微睡一下好了",
		"我趴在桌上閉上了眼睛，慢慢的陷入睡眠",
		"scene black with fadeIn",
		"wait 2000",
		"f-19 {{player.name}} {{player.name}}是你嗎?",
		"一陣熟悉的聲音傳了過來，讓我從睡眠中醒了過來",
		"scene 教室",
		"show f-19 Normal left",
		"show f-19 Normal with fadeIn",
		"player ...",
		"我抬起頭看著站在自己眼前的女孩子，心中交織著各種情緒",
		"讓我擔心得要死的青梅竹馬現在卻若無其事地出現在這裡",
		"我一時之間竟然什麼也說不出口",
		"不過至少確定了她的安全，倒也讓我安心了不少",
		function () {
			storage.f_19.name = "林芷瑄";
			return true;
		},
		"f-19 太好了，果然是你，沒想到你也來到這裡了，這樣我就稍微安心點了",
		"此時伴隨者上課鐘聲，一個穿著西裝的男人走進來，我想應該是老師吧",
		"show f-19 Normal left",
		"show f班導 Normal center with fadeIn",
		"看到老師的林芷瑄走到了我隔壁的位置上坐了下來",
		"hide f-19",
		"原本在吵鬧的其他同學也陸陸續續回到自己的位置上",
		"jump 班導開學說話"
		
	],
	"開學典禮2":[
		"scene 教室",
		"到達教學大樓後我透過樓層簡介找到了自己的教室在7樓",
		"搭電梯到達7樓後我發現已經有不少同學在教室裡了",
		"有些人各自坐著自己的事，有些人則分成各自的小團體聚在一起聊天",
		"不知道該說幸運還是不幸運，這些人當中並沒有發現我認識的人",
		"這時我注意到了每張桌子上都有一張看起來像是學生證的卡片",
		"我找到桌上著有我名字卡片的位置後坐了下來並環視了一下教室",
		"基本上是個普通的教室，但非常高科技",
		"黑板是由電子螢幕做的，書桌的桌面也是",
		"看起來隨隨便便就要幾十萬到幾百萬",
		"給學生這樣的設備實在有點太過了吧",
		"我一邊想著一邊看向了窗戶",
		"窗戶的景色似乎是靜止的圖片，而窗框的厚度看起來像畫框一樣",
		"也就是說這不是真正的窗戶吧，為甚麼要把窗戶用螢幕的方式代替，這有甚麼特別的意義嗎?",
		"也就是說這不是真正的窗戶吧",
		"我看了一眼時鐘注意到時間是7:50",
		"再不久就到了上課時間了啊，希望能讓我明白我現在的處境",
		"我在位置上看著同學們各自聊天，而沒有人聊天的我相當格格不入",
		"這讓我意識到我與其他人在資訊上果然有某種程度上的差別",
		"不知道過了多久，一名出現在教室門口的女孩深深吸引了我的目光",
		"show f-19 Normal with fadeIn",
		function () {
			storage.f_19.name = "林芷瑄";
			return true;
		},
		"而她似乎也發現了我並快步走到我面前",
		"f-19 {{player.name}}真的是你嗎?",
		"她看起來相當不敢相信我在這裡，但我心裡其實也有相同的想法",
		"player ...",
		"我看著站在眼前的女孩子，心中交織著各種情緒",
		"讓我擔心得要死的青梅竹馬現在卻若無其事地出現在這裡",
		"我一時之間竟然什麼也說不出口",
		"不過至少確定了她的安全，倒也讓我安心了不少",
		"f-19 沒想到你也來到這裡了，這樣我就稍微安心點了",
		"此時伴隨者上課鐘聲，一個穿著西裝的男人走進來，我想應該是老師吧",
		"show f-19 Normal left",
		"show f班導 Normal center with fadeIn",
		"看到老師的林芷瑄走到了我隔壁的位置上坐了下來",
		"hide f-19",
		"原本在吵鬧的其他同學也陸陸續續回到自己的位置上",
		"jump 班導開學說話"
	],
	"開學典禮3":[
		function () {
			storage.late = true;
			storage.f_19.name = "林芷瑄";
			return true;
		},
		"scene 教室",
		"到達教學大樓後我透過樓層簡介找到了自己的教室在7樓",
		"搭電梯到達7樓後我迅速進到教室",
		"果然已經開始上課了，講台上站著一個穿著西裝的男老師",
		"show f班導 Normal center with fadeIn",
		"他背後的黑板上還寫著陳智強三個字",
		"f班導 才第一天就遲到啊，我還真擔心你之後要怎麼辦",
		"看樣子我的遲到讓老師感到不太開心了",
		"f班導 等下說明完後你再來找我，先到位置上，我之後補充前面你沒聽到的東西",
		"f班導 那麼繼續剛才的說明",
		"於是我快步走到唯一空著的位置，看來我是唯一遲到的蠢蛋",
		"坐下後我環顧了一下教室，就在這時我被坐在我隔壁的女孩吸引住了目光",
		"我看著坐在旁邊的女孩子，心中交織著各種情緒",
		"讓我擔心得要死的青梅竹馬現在卻若無其事地出現在這裡",
		"至少確定了她的安全，倒也讓我安心了不少",
		"這時我注意到了桌上有一張看起來像是學生證的卡片",
		"我看著這張印有我的資料的卡片，並在看完後收進了我的口袋裡",
		"jump 學生證相關"
	],
	"班導開學說話":[
		"此時男人在黑板上寫下了陳智強三個字",
		"f班導 我是你們的班導，這三年間還請多指教",
		"f班導 開始前先恭喜你們被政府選上成為本校的一批學生，我非常期待你們之後的表現",
		"f班導 希望你們都是能撐到畢業的人才",
		"f班導 那麼，現在開始說明開學相關事項，接下來等我講完才開放提問",
		"f班導 先提醒一下，你們應該都確認過校規了吧，還沒確認的等下自己找時間確認",
		{"Conditional": {
			"Condition": function(){
				return storage.check_rule == true;
			},
			"True": "看來有事先確認是正確的",
			"False": "我好像還沒看過校規吧，之後再找時間補看吧"
		}},
		"f班導 如果看過校規了應該會知道，這所學校是不允許外出的",
		"f班導 你們的家人也不能來探往你們，基本上你們比在監獄還不自由",
		"很明顯已經有人開始動搖了，不過也有人斯毫不在意的樣子",
		"實際上，雖然說確實某方面來說比監獄還自由，但實際上如果只是限定在學校內我們能做的就已經事相當多了",
		"f班導 不過不用擔心，學校內有著眾多的設施讓你們使用，因此不用擔心生活的問題",
		"f班導 接下來先從考核分數的部分開始說明，說白了這東西代表的就是你們各自的價值",
		"f班導 有價值的人會獲得更高的薪水，沒價值的人薪水自然不會高，這就是社會的鐵則",
		"f班導 而這個考核分數就是我們用來衡量你們是否具有足夠價值的東西",
		"f班導 每個月底都會依照個人持有的考核分數x100來給予對應的薪水",
		"是這麼一回事啊，這個機制可能會相當麻煩啊",
		"f班導 薪水會存在你們的學生證裡，要購買東西時就用學生證就可以了",
		"f班導 現在第一個月的薪水已經存進去了，你們晚點可以透過桌上的機器確認，裡面應該已經有10000元了",
		"f班導 學生證就是在你們桌上的那張卡片，不過這是等等才會提到的",
		"f班導 另外考核分數會依照各種情況有所加減，但沒有特殊情況下不能將分數轉給其他人",
		"f班導 到目前為止有任何問題嗎?",
		"我稍微看了下四周，沒有任何人舉手發問，不知道是都了解了還是處於很困惑的狀態",
		"我認為後者的可能性更大吧，畢竟一開學就先接受到的是完全不同於一般學校的內容",
		"沒辦法理解的人應該不少吧，至少我不能成為那一類人",
		"f班導 沒有問題嗎?給你們一個忠告吧，一知半解的人比什麼都不知道的更危險",
		"為甚麼要這時候突然給這個忠告?",
		"就在我還在思考時，老師就像不給機會思考一樣繼續往下說",
		"jump 學生證相關"
	],
	"學生證相關":[
		"f班導 接下來是學生證",
		"f班導 就如同剛才所說的學生證是你們用來購買東西的",
		"f班導 但除此之外這張卡同時也是你們的房卡，所以等下會回收現有的房卡",
		"f班導 這就是學生證的所有功能，硬要說的話還有最後的功用就是當身分證使用了",
		"f班導 最後，每天早上8:00~9:00是班會時間，但是從8:00開始就算是遲到，請務必牢記",
		"f班導 那麼接下來是自由時間，看你們是要相互認識還是對我提問都可以",
		{"Conditional": {
			"Condition": function(){
				return storage.late == true;
			},
			"True": "jump 遲到補說明",
			"False": "老師說完後就到了講台旁的椅子上坐了下來",
		}},
		"hide f班導",
		"而學生們就像以此為信號各自開始了動作",
		"一時間同學們又回到了老師進來前的樣子",
		"show f-19 Normal center with fadeIn",
		"f-19 {{player.name}}"

	],
	"遲到補說明":[
		"f班導 {{player.name}}你過來我這邊，我把剛才你沒聽到的事情再跟你講一次",
		"f班導 那麼先從考核分數的部分開始說明，說白了這東西代表的就是每個學生各自的價值",
		"f班導 有價值的人會獲得更高的薪水，沒價值的人薪水自然不會高，這就是社會的鐵則",
		"f班導 而這個考核分數就是我們用來衡量你們是否具有足夠價值的東西",
		"f班導 每個月底都會依照個人持有的考核分數x100來給予對應的薪水",
		"是這麼一回事啊，這個機制可能會相當麻煩啊",
		"f班導 薪水會存在你們的學生證裡，要購買東西時就用學生證就可以了",
		"f班導 現在第一個月的薪水已經存進去了，你晚點可以透過桌上的機器確認，裡面應該已經有10000元了",
		"f班導 學生證就是在你們桌上的那張卡片，不過這是等等才會提到的",
		"f班導 另外考核分數會依照各種情況有所加減，但沒有特殊情況下不能將分數轉給其他人",
		"f班導 這些就是你沒聽到的部份了，有什麼問題嗎?",
		"基本上是沒什麼問題，但相當在意考核分數的部分，不過這大概是不會回答的吧",
		"player 沒有",
		"f班導 是嗎?給你一個忠告吧，一知半解的人比什麼都不知道的更危險",
		"為甚麼要這時候突然給這個忠告?",
		"player 知道了",
		"我留下這句話後回到了位置上",
		"hide f班導",
	],
};