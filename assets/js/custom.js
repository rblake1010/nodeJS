$(document).ready(function(){

	var piechart = $('.block__piechart');
	var point = $('.point');
	var connect = $('.border--point');
	var border = $('.border');
	var detection = $('.region--detection .border');
	var cross_cutting = $('.region--cross-cutting .border');
	var leftSideTitle = $('section.left .block__title h3');
	var rightSideTitle = $('section.right .block__title h3');
	var leftSideList = $('section.left .block__list ul');
	var rightSideList = $('section.right .block__list ul');
	var test_detection = $('.region--detection .border--point');
	var test_cross = $('.region--cross-cutting .border--point');
	var test_prevention = $('.region--prevention .border--point');
	var test_rehab = $('.region--rehabilitation .border--point');

	var tl = new TimelineMax();


	$('.btnRestart').on('click',function(){
    tl.restart();
  });


	//TweenLite.set(piechart, {rotation:60});
	TweenLite.set([piechart, point, connect, test_detection, test_cross, test_prevention, test_rehab  ],{visibility: 'visible'});
	tl.add('start')
	tl.from(piechart,1, {rotation:-60, opacity:0, ease:Power1.easeOut})
	tl.add('point')
	tl.from(point, 1, {scale:2, opacity:0, ease:Back.easeOut} );
	tl.add('border-grow')
	tl.from([cross_cutting, detection],0.5, {clip:"rect(0px 229.5px 100 229.5px"}, '-=.75');
	tl.to(border,0.5,{width:'229.5px', ease:Power1.easeOut}, 'border-grow-=.75');	
	//tl.from(connect, 0.5, {opacity:0, ease:Power1.easeIn});
	tl.from(test_detection,0.5, {clip:"rect(0px 212px 100 212px"}, 'border-grow-=0.3');
	tl.from(test_cross,0.5, {clip:"rect(0px 145px 100 145px"}, 'border-grow-=0.3');
	tl.from(test_prevention,0.5, {clip:"rect(0px 133px 100 133px"}, 'border-grow-=0.3');
	tl.from(test_rehab,0.5, {clip:"rect(0px 230px 100 230px"}, 'border-grow-=0.3');


	tl.add('entrance')
	tl.from(leftSideTitle, 1.5, {opacity:0, ease:Power1.easeOut});
	tl.from(rightSideTitle, 1.5, {opacity:0, ease:Power1.easeOut}, 'entrance');
	tl.from(leftSideList, 1.5, {opacity:0, ease:Power1.easeOut}, 'entrance');
	tl.from(rightSideList, 1.5, {opacity:0, ease:Power1.easeOut}, 'entrance');
});