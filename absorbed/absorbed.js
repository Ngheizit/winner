var emoticons = [
	"😀",
	"😁",
	"😂",
	"🤣",
	"😃",
	"😄",
	"😅",
	"😆",
	"😉",
	"😊",
	"😋",
	"😎",
	"😍",
	"😘",
	"😗",
	"😙",
	"😚",
	"🙂",
	"🤗",
	"🤩",
	"🤔",
	"🤨",
	"😐",
	"😑",
	"😶",
	"🙄",
	"😏",
	"😣",
	"😥",
	"😮",
	"🤐",
	"😯",
	"😪",
	"😫",
	"😴",
	"😌",
	"😛",
	"😜",
	"😝",
	"🤤",
	"😒",
	"😓",
	"😔",
	"😕",
	"🙃",
	"🤑",
	"😲",
	"☹",
	"🙁",
	"😖",
	"😞",
	"😟",
	"😤",
	"😢",
	"😭",
	"😦",
	"😧",
	"😨",
	"😩",
	"🤯",
	"😬",
	"😰",
	"😱",
	"😳",
	"🤪",
	"😵",
	"😠",
	"😡",
	"🤬",
	"🤥",
	"🤡",
	"🤠",
	"😇",
	"🤧",
	"🤮",
	"🤢",
	"🤕",
	"🤒",
	"😷",
	"🤫",
	"🤭",
	"🧐",
	"🤓",
	"😈",
	"👿",
	"👹",
	"👺",
	"💀",
	"☠",
	"😼",
	"😻",
	"😹",
	"😸",
	"😺",
	"💩",
	"🤖",
	"👾",
	"👽",
	"👻",
	"😽",
	"🙀",
	"😿",
	"😾",
	"🐱",
	"👤",
	"🐱",
	"🏍",
	"🐱‍",
	"💻",
	"🐱",
	"🐉",
	"🐱",
	"👓",
	"🐱‍",
	"🚀",
	"🦒",
	"🐯",
	"🐱",
	"🦁",
	"🐺",
	"🐶",
	"🐵",
	"🙊",
	"🙉",
	"🙈",
	"🦊",
	"🐮",
	"🐷",
	"🐗",
	"🐭",
	"🐹",
	"🐰",
	"🐻",
	"🐨",
	"🐼",
	"🦌",
	"🐩",
	"🐾",
	"🐽",
	"🐲",
	"🐔",
	"🦄",
	"🐴",
	"🦓",
	"🐸",
	"🦍",
	"🦏",
	"🐒",
	"🐕",
	"🐈",
	"🐅",
	"🐆",
	"🐎",
	"🐂",
	"🐃",
	"🐀",
	"🐁",
	"🐘",
	"🐫",
	"🐪",
	"🐐",
	"🐑",
	"🐏",
	"🐖",
	"🐄",
	"🦔",
	"🐇",
	"🐿",
	"🦎",
	"🐊",
	"🐢",
	"🐍",
	"🐉",
	"🦕",
	"🦖",
	"🐙",
	"🐡",
	"🦐",
	"🐠",
	"🐟",
	"🐋",
	"🐳",
	"🦑",
	"🐬",
	"🦈",
	"🐚",
	"🦀",
	"🦅",
	"🦆",
	"🦉",
	"🦃",
	"🐓",
	"🐣",
	"🐤",
	"🐥",
	"🐝",
	"🐜",
	"🦗",
	"🐛",
	"🐌",
	"🦋",
	"🦇",
	"🕊",
	"🐧",
	"🐦",
	"🐞",
	"🦂",
	"🕷",
	"🕸"
];

function createDayImg(year, month, day, time){
	var oDayImg = new Object;
	oDayImg.year = year;
	oDayImg.month = month;
	oDayImg.day = day;
	oDayImg.time = time;
	return oDayImg;
}

var time = ["2019年6月1日7_51_54.png",
			"2019年6月1日8_05_57.png",
			"2019年6月1日8_19_55.png",
			"2019年6月1日8_30_31.png",
			"2019年6月1日8_42_00.png",
			"2019年6月1日8_53_05.png",
			"2019年6月1日9_04_02.png",
			"2019年6月1日9_18_14.png",
			"2019年6月1日9_30_51.png",
			"2019年6月1日9_45_42.png",
			"2019年6月1日9_56_41.png",
			"2019年6月1日10_06_49.png",
			"2019年6月1日10_19_01.png",
			"2019年6月1日10_29_50.png",
			"2019年6月1日10_40_06.png",
			"2019年6月1日10_53_33.png",
			"2019年6月1日11_07_52.png",
			"2019年6月1日11_22_07.png",
			"2019年6月1日11_34_19.png",
			"2019年6月1日11_46_12.png",
			"2019年6月1日12_04_53.png",
			"2019年6月1日12_19_40.png",
			"2019年6月1日12_34_02.png",
			"2019年6月1日12_55_06.png",
			"2019年6月1日13_07_29.png",
			"2019年6月1日13_18_01.png",
			"2019年6月1日13_31_08.png",
			"2019年6月1日13_43_19.png",
			"2019年6月1日13_57_57.png",
			"2019年6月1日14_12_51.png",
			"2019年6月1日14_24_04.png",
			"2019年6月1日14_35_46.png",
			"2019年6月1日14_47_59.png",
			"2019年6月1日15_00_52.png",
			"2019年6月1日15_15_00.png",
			"2019年6月1日15_25_29.png",
			"2019年6月1日15_37_21.png",
			"2019年6月1日15_51_49.png",
			"2019年6月1日16_03_24.png",
			"2019年6月1日16_14_39.png",
			"2019年6月1日16_25_05.png",
			"2019年6月1日16_39_30.png",
			"2019年6月1日16_51_10.png",
			"2019年6月1日17_02_47.png",
			"2019年6月1日17_16_31.png",
			"2019年6月1日17_31_07.png",
			"2019年6月1日17_41_22.png",
			"2019年6月1日17_51_58.png",
			"2019年6月1日18_02_29.png",
			"2019年6月1日18_25_44.png",
			"2019年6月1日18_39_24.png",
			"2019年6月1日18_52_40.png",
			"2019年6月1日19_03_15.png",
			"2019年6月1日19_13_18.png",
			"2019年6月1日19_23_42.png",
			"2019年6月1日19_33_57.png",
			"2019年6月1日19_44_59.png",
			"2019年6月1日19_57_23.png",
			"2019年6月1日20_12_18.png",
			"2019年6月1日20_25_56.png",
			"2019年6月1日20_38_29.png",
			"2019年6月1日20_52_04.png",
			"2019年6月1日21_05_53.png",
			"2019年6月1日21_18_30.png"
			];

var dayimg = createDayImg("2019", "6", "1", time);

var content = document.getElementById("content");

var datetime = document.createElement("div");
datetime.style.height = "30px";
datetime.style.fontSize = "28px";
datetime.style.textAlign = "center";
datetime.style.marginBottom = "20px";
datetime.innerHTML = emoticons[randomNum(0, emoticons.length-1)] + dayimg.time[0].replace("_",":").replace("_",":").slice(0, -4) + emoticons[randomNum(0, emoticons.length-1)];
content.appendChild(datetime);

var dayimgList = document.createElement("div");
dayimgList.setAttribute("class", "dayimgList");

var leftButton = document.createElement("div");
leftButton.setAttribute("class", "leftbutton");
leftButton.style.float = "left";
leftButton.style.backgroundColor = "#00BCF2";
leftButton.style.height = "500px";
leftButton.style.width = "5%";
leftButton.style.fontSize = "64px";
leftButton.innerHTML = "上一时间段";
dayimgList.appendChild(leftButton);
var rightButton = document.createElement("div");
rightButton.setAttribute("class", "rightbutton");
rightButton.style.float = "right";
rightButton.style.backgroundColor = "#00BCF2";
rightButton.style.height = "500px";
rightButton.style.width = "5%";
rightButton.style.fontSize = "64px";
rightButton.innerHTML = "下一时间段";
dayimgList.appendChild(rightButton);
var height = "0";
var imgList = [];
for (var i = 0; i < time.length; i++) {
	var img = document.createElement("img");
	img.setAttribute("src", "data/" + dayimg.year + "/" + dayimg.month + "/" + dayimg.day + "/" + dayimg.time[i]);
	img.setAttribute("class", "img");
	img.setAttribute("width", "90%");
	if(i == 0){
		img.style.display = "block";
	}else{
		img.style.display = "none";
	}
	dayimgList.appendChild(img);
	imgList.push(img);
}
content.appendChild(dayimgList);

var index = 0;
leftButton.onclick = function(){
	if(index != 0){
		index = index - 1;
		for(var i = 0; i < imgList.length; i++){
			if(i==index){
				imgList[i].style.display = "block";
			}else{
				imgList[i].style.display = "none";
			}
		}
		datetime.innerHTML = emoticons[randomNum(0, emoticons.length-1)] + dayimg.time[index].replace("_",":").replace("_",":").slice(0, -4) + emoticons[randomNum(0, emoticons.length-1)];
	}
};
rightButton.onclick = function(){
	if(index != imgList.length - 1){
		index = index + 1;
		for(var i = 0; i < imgList.length; i++){
			if(i==index){
				imgList[i].style.display = "block";
			}else{
				imgList[i].style.display = "none";
			}
		}
		datetime.innerHTML = emoticons[randomNum(0, emoticons.length-1)] + dayimg.time[index].replace("_",":").replace("_",":").slice(0, -4) + emoticons[randomNum(0, emoticons.length-1)];
	}else{
		alert("美好的一天结束啦~~希浙加油~~")
	}
};
leftButton.onmousemove = function(){
	leftButton.style.opacity = 0.5;
}
rightButton.onmousemove = function(){
	rightButton.style.opacity = 0.5;
}
leftButton.onmouseleave = function(){
	leftButton.style.opacity = 1;
}
rightButton.onmouseleave = function(){
	rightButton.style.opacity = 1;
}





function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
