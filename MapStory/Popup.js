var Map = ol.Map;
var Overlay = ol.Overlay;
//function toStringHDMS(p){
//	ol.coordinate.toStringHDMS(p);
//};
//function toLonLat(p){
//	ol.proj.toLonLat(p);
//};
//var toLonLat = function(p1, p2){
//	ol.proj.toLonLat(p1, p2);
//}
var View = ol.View;
var TileLayer = ol.layer.Tile;
var TileJSON = ol.source.TileJSON;


/*
 * 构成弹出窗体的要素       Elements that make up the popup.
 */
//1. 容器
var container = document.getElementById('popup');
//2. 内容
var content = document.getElementById('popup-content');
//3. 关闭
var closer = document.getElementById('popup-closer');


/*
 * 创建叠加层以将弹出窗口锚定到地图        Create an overlay to anchor the popup to the map.
 */
// 相当于一个地图元素（Element）变量
var overlay = new Overlay({
	element: container,  //变量的载体（容器）   当把其加载到地图叠加层后，该标签就会被隐藏起来
	autoPan: true,   //开启自动平移？？？
	autoPanAnimation: {  //自动平移动画？？？
		duration: 250	  //动画属性：持续事件？？？
	}
});

/*
 * 添加单击处理程序以隐藏弹出窗口。 (相当于关闭)
 * return {boolean}  返回布尔值  不要关注href。
 */
closer.onclick = function(){
	overlay.setPosition(undefined);
	closer.blur();   //从元素中移除焦点？？？
	return false;
};

/*
 * 创建地图  Create the map
 */
var map = new Map({
	layers: [
		new TileLayer({
			source: new TileJSON({
				url: 'https://api.tiles.mapbox.com/v3/mapbox.natural-earth-hypso-bathy.json?secure',
				crossOrigin: 'anonymous'
			})
		})
	],
	overlays: [overlay],
	target: 'map',
	view: new View({
		center: [0, 0],
		zoom: 2
	})
});


/*
 * 向地图添加单击处理程序以呈现弹出窗口      Add a click handler to the map to render the popup
 */
map.on('singleclick', function(evt){
	var coordinate = evt.coordinate;
	var hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));
	alert(ol.proj.toLonLat(coordinate));
	content.innerHTML = '<p>You click here:</p><code>' + hdms +'</code>';
	overlay.setPosition(coordinate);
});
