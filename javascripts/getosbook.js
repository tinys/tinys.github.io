
/**
 * 获得文章的总页面数
 */
function getTotalPage(){
	var allP = $(".pager a"),
		length = allP.length;
	return parseInt(allP[length-2].innerHTML);
}

function findAllPage(page,cb){
	$.ajax()
	$.ajax("http://www.oschina.net/translate/learning-javascript-design-patterns?cmp&p="+page)
	.done(function(data){
		var allTr = $(data).find(".cmptable tr");
		cb(allTr);
	})
}
function initAllBook(cb){
	var pages = getTotalPage(),
		curTable = $(".cmptable tbody");
	if(!pages || isNaN(pages)){
		cb();
	}

	function enumPage(page,cb){
		if(page > pages){
			cb();
			return;
		}
		console.log("get book :"+page);
		findAllPage(page++,function(data){
			curTable.append(data);
			enumPage(page,cb)
		})
	}
	enumPage(2,function(){
		cb();
	})
}
function toDisplayBook(){
	initAllBook(function(){
		$(".infoicon").hide();
		var trs = $(".cmptable tr");
		trs.each(function(i,a){
			var cl = a.cloneNode(false);
			cl.id = cl.id+"_clone";
			var chinese = a.children[1];
			if(!chinese){
				//debugger;
				return;
			}
			cl.appendChild(chinese);
			var parend = a.parentNode,
				next = a.nextElementSibling;
			if(next){
				parend.insertBefore(cl,next)
			}else{
				parend.appendChild(cl)
			}
		})
	})
}
toDisplayBook()