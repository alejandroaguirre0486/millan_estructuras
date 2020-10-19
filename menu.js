$(document).ready(main);

var contador =1;


function main () {
	$('.menuBAR').click(function(){
		$('nav').toggle();

		if(contador == 1){
			$('nav').animate({
				left:'0'

			});
			
};