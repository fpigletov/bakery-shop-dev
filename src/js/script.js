'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const burgerBtn = document.querySelector('.bottom-header__burger');	

	//Burger Menu
	function burgerMenu(btnSelector, bodySelector, itemsSelector) {

		const btn = document.querySelector(btnSelector);
		const body = document.querySelector(bodySelector);
		const items = document.querySelectorAll(itemsSelector); 

		btn.addEventListener('click', () => {
			btn.classList.toggle('active');
			body.classList.toggle('active');

			let ariaLabel = btn.getAttribute('aria-label');
			if (ariaLabel === 'Открыть меню') {
				btn.setAttribute('aria-label', 'Закрыть меню');
			} else {
				btn.setAttribute('aria-label', 'Открыть меню');
			}
		});

		

		items.forEach(item => {
			item.addEventListener('click', () => {
				body.classList.toggle('active');
				btn.classList.toggle('active');
			});
		});
	}

	if (document.querySelector('.bottom-header__menu')) {
		burgerMenu('.bottom-header__burger', '.bottom-header__menu','.menu-item');
	}

	//Serch
	const searchBtn = document.querySelector('.top-header__search-btn');
	const searchBlock = document.querySelector('.top-header__search');

	searchBtn.addEventListener('click', () => {          
        searchBlock.classList.toggle('active');
	});
	
	//Dinamic Adaptive
	const callbackBtn = document.querySelector('.bottom-header__callback');
	const cartBtn = document.querySelector('.bottom-header__cart');
	const headerMenu = document.querySelector('.bottom-header__menu');
	const headerPhones = document.querySelectorAll('.top-header__phone');
	const headerPhoneBody = document.querySelector('.top-header__phones');
	const headerIcons = document.querySelector('.bottom-header__icons');
	const headerActions = document.querySelector('.bottom-header__actions');
	const loginBtn = document.querySelector('.bottom-header__login');
	const registrationBtn = document.querySelector('.bottom-header__registration');
	
	
	function dinamicAdaptiv() {
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
		if (viewportWidth <= 767) {  
			if (callbackBtn) {
				headerMenu.prepend(callbackBtn);
			}
        } else {
			cartBtn.after(callbackBtn);
		}
		
		if (headerPhones) {
			if (viewportWidth <= 600) {
				headerIcons.after(headerPhones[0]);
				headerIcons.prepend(loginBtn, registrationBtn);
			} else {
				headerPhoneBody.prepend(headerPhones[0]);
				headerActions.prepend(loginBtn, registrationBtn);
			}
		}
		
    }
	
    window.addEventListener('resize', dinamicAdaptiv);
	window.addEventListener('load', dinamicAdaptiv);

    //Home Slider
	if (document.querySelector('.slider-home__body')) {
		new Swiper('.slider-home__body', {
			// observer: true,
			// observeParents: true,
			slidesPerView: 1,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,		
			grabCursor: true,
			autoplay: {
				delay: 4000,
			},
			pagination: {
				el: '.slider-home__dotts',
				clickable: true,
			},		
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			navigation: {
				nextEl: '.slider-home__arrow_next',
				prevEl: '.slider-home__arrow_prev',
			}
		});
	}
    
	

    //Popular Slider
	if (document.querySelector('.popular__slider')) {
		new Swiper('.popular__slider', {
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			breakpoints: {
				320: {
					slidesPerView: 1
				},
				400: {
					slidesPerView: 2
				},
				600: {
					slidesPerView: 3
				},
				767: {
					slidesPerView: 4
				},
				992: {
					slidesPerView: 5
				},
				1200: {
					slidesPerView: 6
				}
			},
			spaceBetween: 28,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,		
			grabCursor: true,	
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: '.popular__arrow_next',
				prevEl: '.popular__arrow_prev',
			}
		});
	}
    
	
    //New Slider
	if (document.querySelector('.new__slider')) {
		new Swiper('.new__slider', {
			slidesPerView: 1,
			breakpoints: {
				320: {
					slidesPerView: 1
				},
				400: {
					slidesPerView: 2
				},
				600: {
					slidesPerView: 3
				},
				767: {
					slidesPerView: 4
				},
				992: {
					slidesPerView: 5
				},
				1200: {
					slidesPerView: 6
				}
			},
			spaceBetween: 28,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,		
			grabCursor: true,	
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: '.new__arrow_next',
				prevEl: '.new__arrow_prev',
			}
		});
	}
    
	
	//Partners Slider
	if (document.querySelector('.partners__slider')) {
		new Swiper('.partners__slider', {
			slidesPerView: 1,
			breakpoints: {
				320: {
					slidesPerView: 1
				},
				580: {
					slidesPerView: 2
				},				
				850: {
					slidesPerView: 3
				},				
				1100: {
					slidesPerView: 4
				}
			},
			spaceBetween: 28,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,		
			grabCursor: true,	
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			autoplay: {
				delay: 3000,
			},		
		});
	}
    

	//Product images
	if (document.querySelector('.product-page')) {
		baguetteBox.run('.image-product__body');
	}

	//Study-item images
	if (document.querySelector('.page-study')) {
		baguetteBox.run('.page-study__images');
	}




	
	//SlideToggle
	let slideUp = (target, duration = 500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('slide');
        }, duration);
    };
	let slideDown = (target, duration = 500) => {
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') {
            display = 'block';
        }
            

        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('slide');
        }, duration);
    };

	let slideToggle = (target, duration = 500) => {
        if (!target.classList.contains('slide')) {
            target.classList.add('slide');
            if (window.getComputedStyle(target).display === 'none') {
                return slideDown(target, duration);
            } else {
                return slideUp(target, duration);
            }
        }
	};
	
	//Filter
	const filterBtns = document.querySelectorAll('.filter-catalog__btn'); 

    if (filterBtns) {
        filterBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.currentTarget;                             

                filterBtns.forEach(el => {
                    if (el !== target) {
                        slideUp(el.nextElementSibling); 
                        el.classList.remove('active');
                    }
                    slideToggle(target.nextElementSibling);
                });

                item.classList.toggle('active');   
            });
        });
	}    
	
	//Catalog
	const sortSelect = document.querySelector('.sort-actions__select');
	const quantitySelect = document.querySelector('.quantity-actions__select');

	if (sortSelect) {
        const sortChoices = new Choices(sortSelect, {
            shouldSort: false,
            position: 'bottom',
            searchEnabled: false,
        });
    }

    // if (quantitySelect) {
    //     const quantityChoices = new Choices(quantitySelect, {
    //         shouldSort: false,
    //         position: 'bottom',
    //         searchEnabled: false,
    //     });
	// }

	
	//Modal
	function modal(triggerSelector, contentSelector) {
		const modal = document.querySelector('.modal');    
		const modalCloseBtn = modal.querySelector('.modal__close');
		const modalContent = modal.querySelector(contentSelector);    
		const trigger = document.querySelector(triggerSelector);
		const wrapper = document.querySelector('.wrapper');
		const header = document.querySelector('.header');
		const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';
		let lastFocusedEl;
    

		const openModal = () => {
			modal.classList.add('active');        
			modalContent.classList.add('active');
			modalContent.scrollTop = 0;        
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = scrollWidth;
			// header.style.paddingRight = scrollWidth;  
			lastFocusedEl = document.activeElement;
			
			Array.from(document.body.children).forEach(item => {
				if (item !== modal) {
					item.inert = true;
				}
			});        
		};

		const closeModal = () => {        
			modal.classList.remove('active');
			modalContent.scrollTop = 0;
			modalContent.classList.remove('active'); 
			modalContent.innerHtml = '';
			document.body.style.overflow = '';      
			document.body.style.paddingRight = '';
			// header.style.paddingRight = ''; 
			
			Array.from(document.body.children).forEach(item => {
				if (item !== modal) {
					item.inert = false;
				}
			});      
		};

		if (triggerSelector === 'show-product-btn') {
			document.addEventListener('click', (e) => {
				if (e.target.classList.contains(triggerSelector)) {
					e.preventDefault();
					openModal();
				}
			});
		} else {
			trigger.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
			openModal();
			}); 
		}

    

		document.addEventListener('click', (e) => {
			const target = e.target;        

			if (target === modal && modal.classList.contains('active') &&
            modalContent.classList.contains('active')) {
				closeModal();
			}        
		});

		window.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && modal.classList.contains('active') &&
            modalContent.classList.contains('active')) {
				closeModal();
				lastFocusedEl.focus();
			}
		});
		
		modalCloseBtn.addEventListener('click', () => {
			if (modal.classList.contains('active') &&
            modalContent.classList.contains('active')) {
				closeModal();
				lastFocusedEl.focus();
			}
		});
	}

	// //Modal Login
	if (document.querySelector('.bottom-header__login')) {
		modal('.bottom-header__login', '.modal__form_login');
	}		

	// //Modal Callback
	if (document.querySelector('.bottom-header__callback')) {
		modal('.bottom-header__callback', '.modal__form_callback');
	}	

	if (document.querySelector('.callback-btn')) {
		modal('.callback-btn', '.modal__form_callback');
	}		

	//Modal Study
	if (document.querySelector('.study__btn')) {
		modal('.study__btn', '.modal__form_study');
	}	
	
	//Modal Registration
	if (document.querySelector('.registration')) {
		modal('.form-registration__btn_company', '.modal__registration_company');
		modal('.form-registration__btn_individual', '.modal__registration_individual');
	}		
	

	//Map
	if (document.querySelector('.our-contacts')) {
        
        const init = () => {
            // Создание карты.
            const myMap = new ymaps.Map("map", {
                center: [60.008536, 30.297754],
                
                zoom: 15
            });
            
            const myPlacemark = new ymaps.Placemark([60.008536, 30.297754], null, {
				preset: "default#lightbluePoint",
				iconContent: 'PASTRYCHEF',
				color: '#fc2db7'
            });
			myMap.geoObjects.add(myPlacemark);
			
			// const myGeoObject = new ymaps.GeoObject({
			// 	// Описание геометрии.
			// 	geometry: {
			// 		type: "Point",
			// 		coordinates: [60.008536, 30.29775]
			// 	},
			// 	// Свойства.
			// 	properties: {					
			// 		iconContent: 'PASTRYCHEF',
			// 		hintContent: 'Санкт-Петербург, Коломяжский пр. 19/2, ТК "Капитолий", 3-й этаж'
			// 	}
			// }, {
			// 	preset: 'default#lightbluePoint',				
			// 	draggable: true
			// });
			// myMap.geoObjects.add(myGeoObject);
        };

        ymaps.ready(init);
	}
	
	//Tabs
	function actionsOnTabs(parentSelector, tabsSelector, contentSelector, tabClass) {

        const tabsParent = document.querySelector(parentSelector);
        const tabs = document.querySelectorAll(tabsSelector);        
        const tabsContents = document.querySelectorAll(contentSelector);
    
        function showContent(index = 0) {
            tabsContents[index].classList.add('show', 'fade');
            tabsContents[index].classList.remove('hide');
			tabs[index].classList.add('active');			

            // if (parentSelector === '.checkout__tabs') {
            //     const tabsInputs = tabsContents[index].querySelectorAll('[data-name]');
            //     tabsInputs.forEach(item => {
            //         const value = item.getAttribute('data-name'); 
            //         item.setAttribute('name', `${value}`);
            //         if (item.hasAttribute('data-validate-field')) {
            //             item.setAttribute('data-validate-field', `${value.toLowerCase()}`);
            //         }
            //     });
            // }
        }

        function hideContent() {
            tabsContents.forEach(content => {
                content.classList.add('hide');
                content.classList.remove('show', 'fade');

                // if (parentSelector === '.checkout__tabs') {
                //     const tabsInputs = content.querySelectorAll('[data-name]');
                //     tabsInputs.forEach(item => { 
                //         item.removeAttribute('name');
                //         if (item.hasAttribute('data-validate-field')) {
                //             item.setAttribute('data-validate-field', '');
                //         }
                //     });
                // }
            });

            tabs.forEach(tab => tab.classList.remove('active'));            
        }

        hideContent();
        showContent();
        

        tabsParent.addEventListener('click', (event) => {
            if (event.target && event.target.classList.contains(tabClass)) {
                tabs.forEach((tab, index) => {
                    if (event.target === tab) {                    
                        hideContent();
                        showContent(index);
                    }
                });
            }
        });        
	} 
	
	//Delivery Tabs
	if (document.querySelector('.delivery')) {        
        actionsOnTabs('.tabs-delivery', '.tabs-delivery__btn', '.block-delivery__content', 'tabs-delivery__btn');
	} 

	// Weight Tabs
	if (document.querySelector('.product-page')) {        
        actionsOnTabs('.info-product__weight', '.info-product__weight-btn', '.info-product__price', 'info-product__weight-btn');
	} 

	// Registration Tabs
	if (document.querySelector('.registration')) {        
        actionsOnTabs('.tabs-registration', '.tabs-registration__btn', '.form-registration__form', 'tabs-registration__btn');
	} 

	// Private Tabs
	if (document.querySelector('.private')) {        
        actionsOnTabs('.private__tabs', '.private__tab-btn', '.info-private', 'private__tab-btn');
	} 

	//Product Tabs
	if (document.querySelector('.product-item__options')) {  
		actionsOnTabs('.product-item__options', '.product-item__weight-btn', '.product-item__price', 'product-item__weight-btn');
	} 


	// Private
	const privateBtns = document.querySelectorAll('.private-order__btn'); 

    if (privateBtns) {
        privateBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.currentTarget;                             

                privateBtns.forEach(el => {
                    if (el !== target) {
                        slideUp(el.lastElementChild); 
                        el.classList.remove('active');
                    }
                    slideToggle(target.lastElementChild);
                });

                item.classList.toggle('active');   
            });
        });
	}

	//Checkout

	const addressSelect = document.querySelector('.address-checkout__select');
	const paymentSelect = document.querySelector('.payment-checkout__select');

	if (addressSelect) {
        const addressChoices = new Choices(addressSelect, {
            shouldSort: false,
            position: 'bottom',
            searchEnabled: false,
        });
	}

	if (paymentSelect) {
        const paymentChoices = new Choices(paymentSelect, {
            shouldSort: false,
            position: 'bottom',
            searchEnabled: false,
        });
	}

	//Preloader
    window.addEventListener('load', () => {
        setTimeout(() => {
            const preloader = document.querySelector('.preloader');
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 500);
	});
	
	const products = document.querySelectorAll('.product-item');

	if (products) {
		products.forEach(el => {
			let currentProduct = el;
			const imageItems = el.querySelectorAll('.item-image__item');
			const imagePagination = el.querySelector('.item-image__pagination');

			if (imageItems.length > 1) {
				imageItems.forEach((el, index) => {
					el.setAttribute('data-index', index);
					imagePagination.innerHTML += `<li class="item-image__dot ${index == 0 ? 'active' : ''}" data-index="${index}"></li>`;

					el.addEventListener('mouseenter', (e) => {
						currentProduct.querySelectorAll('.item-image__dot').forEach(el => {
							el.classList.remove('active');
						});
						currentProduct.querySelector(`.item-image__dot[data-index='${e.currentTarget.dataset.index}']`).classList.add('active');
					});

					el.addEventListener('mouseleave', (e) => {
						currentProduct.querySelectorAll('.item-image__dot').forEach(el => {
							el.classList.remove('active');
						});
						currentProduct.querySelector(`.item-image__dot[data-index='0']`).classList.add('active');
					});
				});
			}
		});
	}

	function removeClasses() {
        if (headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');        
        }

        if (burgerBtn.classList.contains('active')) {
            burgerBtn.classList.remove('active');       
        }
    }

	document.addEventListener('click', (e) => {
		const target = e.target;

		if (!target.closest('.bottom-header__menu') && !target.classList.contains('bottom-header__burger') && !target.classList.contains('bottom-header__burger-span')) {
			removeClasses();
        }

		
	});

	
	
	



});