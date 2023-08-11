// var sh= 18;

// function dropSh(val){
//     var txtShw = $('p').css('text-shadow');
//     $('p').css('text-shadow',txtShw + ',' + val +'px' +val +'px 0 #ff7373');
// }
//  let i=0;
//  function myLoop(){
//     setTimeout(function(){
//         dropSh(i);
//         i++;
//         if(i < sh){
//             myLoop();
//         }
//     } , 5*(i*5/3))
//  }

//  myLoop();


 var sh = 18;

function dropSh(val){
	var $txsh = $('p').css('text-shadow');
	$('p').css('text-shadow', $txsh + ', ' + val + 'px ' + val + 'px 0 #ff7373');
}

var i = 0;

function myLoop(){
	setTimeout(function(){
		dropSh(i);
		i++;
		if (i<sh){
			myLoop();
		}
	}, 5 * (i * 5 / 3))
}

myLoop();