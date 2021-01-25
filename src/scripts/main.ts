import { getSVGs, Loading } from "./utilities/util";
import Tab from './libraries/Tab';
declare var Swiper:any;
declare var $:any;

//swiper slides auv
const swiperindex = () => {
	const swiperslide = new Swiper('.auv-section .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		speed: 800,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: { 
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 5,
			spaceBetween: 40
		}
		}
	})
}

//swiper slide student 
const swiperstudent = () => {
	const galleryThumbs = new Swiper('.camp-life .gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 3,
		direction: 'vertical',
		mousewheel: true,
		loop: true,
		// loopedSlides: 5, //looped slides should be the same
		breakpoints: {
			300: {
				slidesPerView: 2,
				direction: 'horizontal',
			},
			430: {
				slidesPerView: 3,
				direction: 'horizontal',
			},
			768: {
				slidesPerView: 4,
				direction: 'vertical',
			}
		},

	});
	const galleryTop = new Swiper('.camp-life .gallery-top', {
		spaceBetween: 10,
		// loop:true,
		// loopedSlides: 5, //looped slides should be the same
		navigation: {
		nextEl: '.camp-life .swiper-button-next',
		prevEl: '.camp-life .swiper-button-prev',
		},
		thumbs: {
		swiper: galleryThumbs,
		},
	});
}
//popup image News&Events
const ImagePopupabout = () => {
	$(".lib__page__img .item-gallery").on("click" , function() {
		const slides = $(this).find(".d-none")[0].innerHTML
		$(".gallery-top .swiper-wrapper").html(`${slides}`)
		$(".gallery-thumbs .swiper-wrapper").html(`${slides}`)
		$.fancybox.open({
			src: "#popup-img",
			type: "inline",
			opts : {
				afterShow : function( ) {
					var galleryThumbs = new Swiper('.gallery-thumbs', {
						spaceBetween: 10,
						slidesPerView: 3,
					
					  });
					  var galleryTop = new Swiper('.gallery-top', {
						spaceBetween: 10,
						navigation: {
						  nextEl: '.swiper-button-next',
						  prevEl: '.swiper-button-prev',
						},
						thumbs: {
						  swiper: galleryThumbs
						}
					  });
				}
			}
		})
		
	})
}
//popup image Gallery
const ImagePopugalley = () => {
	$(".main-galley .is-img").on("click" , function() {
		const slides = $(this).find(".d-none")[0].innerHTML
		$(".gallery-top .swiper-wrapper").html(`${slides}`)
		$(".gallery-thumbs .swiper-wrapper").html(`${slides}`)
		$.fancybox.open({
			src: "#popup-imgs",
			type: "inline",
			opts : {
				afterShow : function( ) {
					var galleryThumbs = new Swiper('.gallery-thumbs', {
						spaceBetween: 10,
						slidesPerView: 3,
					
					  });
					  var galleryTop = new Swiper('.gallery-top', {
						spaceBetween: 10,
						navigation: {
						  nextEl: '.swiper-button-next',
						  prevEl: '.swiper-button-prev',
						},
						thumbs: {
						  swiper: galleryThumbs
						}
					  });
				}
			}
		})
		
	})
}
//drop line 
const dropLine = () => {
	document.querySelectorAll(".footer__contact .item__text a").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(".");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
	document.querySelectorAll(".list-items .text p").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(".");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
	document.querySelectorAll(".contact-us .desc p").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(".");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
	document.querySelectorAll(".content-items.local .desc a").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(".");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
	document.querySelectorAll(".about-academic .tab-item p").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(".");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
	document.querySelectorAll("[dropline]").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(".");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
}

// MAIN BANNER WEBSITE
const initMainBanner = () => {
	const namePage = document.querySelector('#js-page-verify');
	const mainBanner = document.querySelector('.MainSlider__Banners');
	if (namePage.className == 'index-page') {
		mainBanner.classList.add('isIndex');
	}
	const swiper =  new Swiper('.MainSlider__Banners .swiper-container', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.MainSlider__Banners .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
};

//menu mobile
const showMenuMobile = () => {
	const btnMenuMobile = document.querySelector('.navBarHamburger__wrapper');
	const navBarMenuMobile = document.querySelector('.navBar');
	const overlay = document.querySelector('#overlay');
	// CHECK BUTTON
	if (btnMenuMobile) {
		btnMenuMobile.addEventListener('click', () => {
			btnMenuMobile.classList.toggle('active');
			navBarMenuMobile.classList.toggle('active');
			overlay.classList.toggle('show');
		})
	}
	if (overlay) {
		overlay.addEventListener('click', (e) => {
			navBarMenuMobile.classList.remove('active');
			overlay.classList.remove('show');
			btnMenuMobile.classList.remove('active');
		});
	}
}
//button go top
const showBackToTop = () => {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
			$('#go-top').addClass('show');
		} else {
			$('#go-top').removeClass('show');
		}
	});

	$('#go-top').on('click', function(e:any) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0,
		});
	});
} ;
//ajax news
const ajaxlistnews = () => {
	$(document).on("click" , ".note-section .pagination li" ,function(e:any) {
		e.preventDefault();
		const url = $(this).attr("data-url")
		$.ajax({	
			url: url,
			type: 'get',
			success: function(res:any) {
				$(this).parent().parent().html(res);
			},
		})
	})
}
//ajax gallery
const ajaxlisgallery = () => {
	$(document).on("click" , ".lib__page .pagination li" ,function(e:any) {
		e.preventDefault();
		const url = $(this).attr("data-url")
		$.ajax({	
			url: url,
			type: 'get',
			success: function(res:any) {
				$(this).parent().parent().html(res);
			},
		})
	})
}

// SETBACKGROUND IMAGE
const setBackgroundImageSection = () => {
	// PARAMS HERE !!!
	const datas = document.querySelectorAll("[fp-bg]");
	// ACTION !!!
	datas.forEach((item) => {
		const link = item.getAttribute("fp-bg");
		item.setAttribute("style", `background-image:url(${link})`);
	});
};


// submit contact
const ajaxContactForm = () => {
	$(".contact-form form .btn-submit").on("click", function(e:any) {
		e.preventDefault();
		const url = $(this).attr("data-url");
		const formData = new FormData();
		$(this).parent().find(".form input").each(function(el :any) {
			const name = $(this).attr("name");
			const val = $(this).val();
			formData.append(name , val);
		})
		$(this).parent().find(".form textarea").each(function(el:any) {
			const name = $(this).attr("name")
			const val = $(this).val();
			formData.append(name , val);
		})
		const recaptcha = $(".g-recaptcha")

		formData.append(recaptcha.attr("name") , recaptcha.val());
		if($(".contact-form form").valid() === true) {
			$.ajax({
				url: url,
				type: "POST",
				data: formData,
				processData: false,
				contentType: false,
				beforeSend: function() {
					$(this).attr('disabled', 'disabled');
				},
				success: function(res :any) {
					alert(`${res.Message}`);
					window.location.reload();
				},
			})
		}
	});
}

// popup images member
const popupImgmem = () => {
	if(document.querySelector(".work-shop"))
	$(document).on("click", ".work-shop .item", function(element:any) {
		element.preventDefault()
		const data = $(this).children()[0].innerHTML
		$("#work-shop .list-ws").html(`${data}`);
		$.fancybox.open({
			src: "#work-shop",
			type: "inline"
		})
	})
}

//swiper about advusory
const SwiperAdvisory = () => {
	const swiper = new Swiper('.about-advisory .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 10,
		loop: true,
		speed: 800,
		centeredSlides: true,
		navigation: {
			nextEl: '.about-advisory .swiper-button-next',
			prevEl: '.about-advisory .swiper-button-prev',
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false
		  },
		breakpoints: {
			300: {
				slidesPerView: 1.8,
			},
			768: {
				slidesPerView: 3,
			}
		}
	})
}

//swiper about Faculty
const swiperFaculty = () => {
	const swiper = new Swiper('.about-faculty-slide .swiper-container', {
		slidesPerView: 1,
		// spaceBetween: 10,
		loop: true,
		speed: 800,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.about-faculty-slide .swiper-button-next',
			prevEl: '.about-faculty-slide .swiper-button-prev',
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false
		  },
		// breakpoints: {
		// 	320: { 
		// 	slidesPerView: 2,
		// 	spaceBetween: 20
		// 	},
		// 	// when window width is >= 480px
		// 	480: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 30
		// 	},
		// 	// when window width is >= 640px
		// 	640: {
		// 		slidesPerView: 5,
		// 		spaceBetween: 40
		// 	}
		// }
	})
}
//swiper about Campus
const swipeCampus = () => {
	const swiper = new Swiper('.about-campus-slide .swiper-container', {
		slidesPerView: 2.2,
		spaceBetween: 100,
		centeredSlides: true,
		loop: true,
		speed: 800,
		navigation: {
			nextEl: '.about-campus-slide .swiper-button-next',
			prevEl: '.about-campus-slide .swiper-button-prev',
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false
		  },
		breakpoints: {
			300: {
			spaceBetween: 20,
			},
			768: {
			spaceBetween: 100,

			}
		}
	})
}
// popup faculty about
const fancyboxFacultyAbout = () => {
	$(document).on("click", ".about-faculty-slide .btn-remore" , function() {
		const content = $(this).parent()[0].outerHTML
		$.fancybox.open({
			src : "#popup-faculty",
			type : "inline",
			opts: {
				beforeShow: function() {
					document.querySelector("#popup-faculty").innerHTML = content;
				}
			}
		})
		
	})
}

const fancyboxRules = () => {
	$(document).on("click", ".list-tab-content-rules .btn-remore" , function() {
		const content = $(this).parent()[0].outerHTML
		$.fancybox.open({
			src : "#rules-popup",
			type : "inline",
			opts: {
				beforeShow: function() {
					document.querySelector("#rules-popup").innerHTML = content;
				}
			}
		})
		
	})
}

function DatePickerInit() {
  $(".date-picker").each(function () {
    if ($(this).val().length > 0) {
      $(this).flatpickr({
		dateFormat: "Y-m-d",
		minDate: "today",
      });
    } else {
		$(this).flatpickr({
		dateFormat: "Y-m-d",
		minDate: "today",
		});
	  }
  });
  $(".time-picker").each(function () {
    if ($(this).val().length > 0) {
      $(this).flatpickr({
		enableTime: true,
		noCalendar: true,
		dateFormat: "H:i",
      });
    } else {
		$(this).flatpickr({
			enableTime: true,
			noCalendar: true,
			time_24hr: true,
			dateFormat: "H:i",
		});
	} 
  });
}

const LogicFormApply = () => {
	document.querySelectorAll(".apply-tab .tab").forEach((element: Element , index: number) => {
		element.addEventListener("click" , () => {
			setTimeout(() => {
				if(element.classList.contains("active") && element.getAttribute("toggle-for") == "tab-3") {
					document.querySelector(".text-for-step-3").classList.add("active")
				} else {
					document.querySelector(".text-for-step-3").classList.remove("active")
				}
			}, 100);
		})
	})
}

const sectionFixed = () => {
	if(document.querySelector("[data-section")) {
		let html = "";
	document.querySelectorAll("[data-section]").forEach((Element: Element) => {
		html = 
			`<div class="item">
				<p> ${Element.getAttribute("data-section")}</p>
		</div>`
		$(".sectionController").append(html)
	})
	}
}

const activeWhenScroll = () => {
	if(document.querySelector("[data-section")) {
		document.querySelectorAll("[data-section]").forEach((Element: HTMLElement) => {
			
			if(window.pageYOffset + 122 >= Element.offsetTop ) {
				const text = Element.getAttribute("data-section")
				
				document.querySelectorAll(".sectionController .item").forEach((ElementChild: HTMLElement) => {
					const temp = ElementChild.querySelector("p").innerText;
					if(text == temp) {
						document.querySelectorAll(".sectionController .item").forEach((ElementChildChild: HTMLElement) => {
							ElementChildChild.classList.remove("active");
						})
						ElementChild.classList.add("active");
					}
					
				})
				
			}
		})
	}
}

document.addEventListener("scroll" , async () => {
	activeWhenScroll();
	
})
document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	dropLine();
	// MAIN SWiper
	initMainBanner();
	//
	ImagePopupabout();
	//
	ImagePopugalley();
	//
	showMenuMobile();
	//
	showBackToTop();
	//
	ajaxlistnews();
	//
	ajaxlisgallery();
	//
	swiperindex();
	//
	ajaxContactForm();
	// SETBACKGROUND IMAGE
	setBackgroundImageSection();
	//
	SwiperAdvisory();
	//
	swiperFaculty();
	//
	swipeCampus();
	//
	fancyboxFacultyAbout();
	// Tab
	popupImgmem();
	// slide student campus
	swiperstudent();
	//fancybox Rules of Product
	fancyboxRules();
	//
	DatePickerInit();
	//
	LogicFormApply();
	//
	sectionFixed();
	//
	activeWhenScroll();
	const rulesofConduct = new Tab(".rules-of-conduct .tab-container");
	const aboutvalue = new Tab(".about-values__wrapper .tab-container");
	const constructionPlan = new Tab(".construction-Plans .tab-container");
	const aboutAcademic = new Tab(".about-academic .tab-container");
	const calendarAcademic = new Tab(".calendar-auv .tab-container");
	const admissionapllynow = new Tab(".admission-apply .tab-container");
	const AddmissionHowToApply = new Tab(".admission-how-to-apply .tab-container");
});

