$(".nav__burger").click(function() {
	$(".nav__menu").addClass("nav__menu_active");
});

$(".nav_close, .nav__link").click(function() {
	$(".nav__menu").removeClass("nav__menu_active");
});

$(".works__button-show").click(function() {
	$(".works__card_no-active").removeClass("works__card_no-active");
	$(".works__mobile-none").removeClass("works__mobile-none");
	$(this).remove();
});

$('.message__close').click(function(){
	$('.message').addClass('message_no-active');
})


$('.button_message').click(function(){
	$('.message').removeClass('message_no-active');
})

//прокрутка вверх----

getScroll('top');

function getScroll(idButton) {
	let button = document.getElementById(idButton); 

	button.addEventListener('click', getTop); 
	let thisPageY; 

	window.onscroll = function() { 
		if(pageYOffset > 0) { 
			button.style.display = "block"; 
		}else { 
			button.style.display = "none"; 
		} 
	} 

	function getTop() { 
		startScroll = pageYOffset; 
		timerIdTop = window.setInterval(timerTop, 20); 
	} 

	function timerTop() { 
		window.scrollTo(0, pageYOffset - startScroll/30); 
		if(pageYOffset == 0) { 
			window.clearInterval(window.timerIdTop); 
		} 
	}
}
//-------------------

//универсальная прокрутка до нужной страницы----

universalScroll("get_works", 'comments', 200);
universalScroll("getTeam", 'about', 0);

function universalScroll(idButton, idPage, dressing) {
	let button = document.getElementById(idButton);
	let block = document.getElementById(idPage);

	button.addEventListener('click', getPage);
	let thisPageY; 
	function getPage() {
		if(pageYOffset < 500) {
			thisPageY = 500;
		}else {
			thisPageY = pageYOffset;
		}
		timerId = window.setInterval(timer, 20); 
	}

	function timer() { 
		window.scrollTo(0, pageYOffset + thisPageY/7); 
		if(pageYOffset > block.offsetTop - dressing) { 
			window.clearInterval(window.timerId); 
		} 
	}
}

//---------------------------------------------

//form validation-----------

getValidationForms();

function getValidationForms() {
	let but = document.querySelectorAll('button');
	for(elem of but) {
		if(elem.parentElement.tagName == "FORM") {
			elem.addEventListener('click', validInputs);
		}
	}

	let windowUp = document.getElementById('windowUp');
	let inputError;

	function validInputs(e) {
		e.preventDefault();
		let inputs = this.parentElement.children;
		for(let elem of inputs) {
			if(elem.name == "email") {
				getWindowValid((/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(elem.value)), inputs);
			}
		}
	}

	function getWindowValid(result, childrens) {
		windowUp.classList.remove("window-up_no-active");
		if(result) {
			for(let elem of childrens) {
				if(elem.tagName == "INPUT" || elem.tagName == "TEXTAREA") {
					elem.value = "";
					elem.innerHTML = "";
				}
			}
			windowUp.style.backgroundColor = "#14d100";
			windowUp.innerHTML = "Thanks! The form was sent successfully!";
		} else {
			windowUp.style.backgroundColor = "#ff2300";
			windowUp.innerHTML = "Error! Please check the data entry!";
		}

		timeForClearWindow();
	}

	function timeForClearWindow() {
		window.timerId = window.setInterval(deleteWindow, 5000);
	}

	function deleteWindow() {
		windowUp.classList.add("window-up_no-active");
		window.clearInterval(window.timerId);
	}
}

//-------------------------


//slider----------------------------
$(document).ready(function(){
  $('.comments__slider').slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.comments__arrow-left'),
  		nextArrow: $('.comments__arrow-right'),
  		responsive: [{
            breakpoint: 290,
            settings: {
                arrows : false
            }
        }, ]
  });
});


$(document).ready(function(){
 	$('.team__slider').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows : false,

		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 530,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
  });
});
//----------------------------------