
var shopClass_item = document.getElementsByClassName('shopClass_item','dl');
var shopClass_list = document.getElementsByClassName('shopClass_list','div');
// var shopClass_item = document.getElementsByClassName('shopClass_item');
// var shopClass_list = document.getElementsByClassName('shopClass_list');
//解决IE浏览器不支持获取ClassName
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}
for (var i = 0; i < shopClass_item.length; i++) {
	shopClass_item[i].index = i;
	shopClass_list[i].index = i;
	shopClass_item[i].onmouseenter = function(){
		var a = shopClass_item[this.index].getElementsByTagName('a');
		shopClass_list[this.index].style.display = 'block';
		var j = 0;
		while(j < a.length){
			a[j].style.color = 'black';
			j++;
		}
	};
	shopClass_list[i].onmouseenter = function(){
		var a = shopClass_item[this.index].getElementsByTagName('a');
		shopClass_list[this.index].style.display = 'block';
		var j = 0;
		while(j < a.length){
			a[j].style.color = 'black';
			j++;
		}
	};
	shopClass_item[i].onmouseleave = function(){
		var a = shopClass_item[this.index].getElementsByTagName('a');
		shopClass_list[this.index].style.display = 'none';
		var j = 0;
		while(j < a.length){
			a[j].style.color = 'white';
			j++;
		}
	};
	shopClass_list[i].onmouseleave = function(){
		var a = shopClass_item[this.index].getElementsByTagName('a');
		shopClass_list[this.index].style.display = 'none';
		var j = 0;
		while(j < a.length){
			a[j].style.color = 'white';
			j++;
		}
	};
}