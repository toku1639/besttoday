$(function () {
	const splide = new Splide(".splide", {
		type: "loop",
		focus: 'center',
		gap: "50px",
		i18n: {
			prev: '前のスライドに移動する',
			next: '次のスライドに移動する',
			slideX: '%sのスライドに移動する'
		},
		// autoplay: true,
		// pagination: false,
		// destroy: true,
		breakpoints: {
			519: {
				destroy: true,
			},
		},
	}).mount();

	// let index2 = splide.index;
	// console.log(index2);

	let categories = document.getElementsByClassName('slide-btn');
	for (let i = 0; i < categories.length; i++) {
		initSlideCategory(categories[i], i);
	}
	function initSlideCategory(category, index) {
		category.addEventListener('click', function () {
			for (let i = 0; i < categories.length; i++) {
				categories[i].classList.remove('is-active');
			}
			splide.go(index);
			category.classList.add('is-active');
		});
	}

	let splideTrack = document.getElementsByClassName('splide__track')[0];
	let splideArrow = document.getElementsByClassName('splide__arrows')[0];
	let splidePagination = document.getElementsByClassName('splide__pagination')[0];

	const slideButtonChange = () => {
		splideTrack.addEventListener('click', function () {
			let index = splide.index;
			for (let i = 0; i < categories.length; i++) {
				categories[i].classList.remove('is-active');
			}
			categories[index].classList.add('is-active');
		});
		splideTrack.addEventListener('mouseup', function () {
			let index = splide.index;
			for (let i = 0; i < categories.length; i++) {
				categories[i].classList.remove('is-active');
			}
			categories[index].classList.add('is-active');
		});
		splideArrow.addEventListener('click', function () {
			let index = splide.index;
			for (let i = 0; i < categories.length; i++) {
				categories[i].classList.remove('is-active');
			}
			categories[index].classList.add('is-active');
		});
		splidePagination.addEventListener('click', function () {
			let index = splide.index;
			for (let i = 0; i < categories.length; i++) {
				categories[i].classList.remove('is-active');
			}
			categories[index].classList.add('is-active');
		});
	}
	slideButtonChange();

	// ページ内リンクスムーススクロール
	const smoothScroll = () => {
		const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
		for (let i = 0; i < smoothScrollTrigger.length; i++) {
			smoothScrollTrigger[i].addEventListener('click', (e) => {
				e.preventDefault();
				let href = smoothScrollTrigger[i].getAttribute('href');
				let targetElement = document.getElementById(href.replace('#', ''));
				const rect = targetElement.getBoundingClientRect().top;
				let scrollParent = window;
				let offset = scrollParent.pageYOffset;
				let gap = 80;
				if (window.matchMedia('(max-width:959px)').matches) {
					gap = 40;
				}
				const target = rect + offset - gap;
				scrollParent.scrollTo({
					top: target,
					behavior: 'smooth',
				});
			});
		}
	}
	smoothScroll();

// FAQ機能 - 外部ファイル版（確実に動作）
console.log('FAQ script loaded (external)');

// FAQ初期化関数
function initFAQ() {
	console.log('Initializing FAQ...');
	
	var faqItems = document.querySelectorAll('.faq-list li');
	console.log('FAQ items found:', faqItems.length);
	
	if (faqItems.length === 0) {
		console.log('No FAQ items found');
		return false;
	}
	
	// 各FAQアイテムにクリックイベントを追加
	for (var i = 0; i < faqItems.length; i++) {
		var item = faqItems[i];
		var answer = item.querySelector('.faq-list__row.--answer');
		
		console.log('FAQ ' + i + ' answer found:', answer ? 'YES' : 'NO');
		
		if (answer) {
			// クリックイベント
			item.addEventListener('click', function(e) {
				e.preventDefault();
				console.log('FAQ clicked! (external script)');
				
				var clickedItem = this;
				var clickedAnswer = clickedItem.querySelector('.faq-list__row.--answer');
				
				if (!clickedAnswer) {
					console.log('No answer found for clicked item');
					return;
				}
				
				// 他のFAQを閉じる
				for (var j = 0; j < faqItems.length; j++) {
					var otherItem = faqItems[j];
					var otherAnswer = otherItem.querySelector('.faq-list__row.--answer');
					if (otherItem !== clickedItem && otherAnswer) {
						otherAnswer.style.display = 'none';
						otherItem.classList.remove('open');
					}
				}
				
				// 現在のFAQを開閉
				if (clickedAnswer.style.display === 'none') {
					clickedAnswer.style.display = 'block';
					clickedItem.classList.add('open');
					console.log('FAQ opened! (external script)');
				} else {
					clickedAnswer.style.display = 'none';
					clickedItem.classList.remove('open');
					console.log('FAQ closed! (external script)');
				}
			});
		}
	}
	
	console.log('FAQ initialization complete! (external script)');
	return true;
}

// DOM読み込み完了時に実行
document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM ready - trying FAQ init');
	if (!initFAQ()) {
		// 失敗した場合は少し待って再試行
		setTimeout(function() {
			console.log('Retrying FAQ init...');
			initFAQ();
		}, 1000);
	}
});

// ページ読み込み完了時にも実行
window.addEventListener('load', function() {
	console.log('Window loaded - trying FAQ init');
	initFAQ();
});

// さらに確実にするため、少し遅れて実行
setTimeout(function() {
	console.log('Delayed FAQ init...');
	initFAQ();
}, 2000);

// ハンバーガーメニュー機能
$(document).ready(function() {
	console.log('Document ready - initializing hamburger menu');
	
	// より確実なセレクターを使用
	const hamburger = $('#hamburger-menu');
	const menu = $('.header-modern .header__menu');
	const body = $('body');
	
	console.log('Hamburger element found:', hamburger.length);
	console.log('Menu element found:', menu.length);
	console.log('Body element found:', body.length);
	
	// ハンバーガーボタンのクリックイベント
	hamburger.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('Hamburger button clicked');
		console.log('Hamburger element:', this);
		console.log('Menu element:', menu[0]);
		
		const isActive = $(this).hasClass('active');
		console.log('Current active state:', isActive);
		
		if (isActive) {
			// メニューを閉じる
			$(this).removeClass('active');
			menu.removeClass('active');
			body.removeClass('menu-open');
			console.log('Menu closed');
			console.log('Menu classes after close:', menu.attr('class'));
		} else {
			// メニューを開く
			$(this).addClass('active');
			menu.addClass('active');
			body.addClass('menu-open');
			console.log('Menu opened');
			console.log('Menu classes after open:', menu.attr('class'));
			console.log('Menu computed style:', window.getComputedStyle(menu[0]).display);
		}
	});
	
	// メニューリンクをクリックした時にメニューを閉じる
	menu.find('a').on('click', function() {
		console.log('Menu link clicked, closing menu');
		hamburger.removeClass('active');
		menu.removeClass('active');
		body.removeClass('menu-open');
	});
	
	// 画面外をクリックした時にメニューを閉じる
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.header-modern').length) {
			if (menu.hasClass('active')) {
				console.log('Outside click detected, closing menu');
				hamburger.removeClass('active');
				menu.removeClass('active');
				body.removeClass('menu-open');
			}
		}
	});
	
	// ウィンドウリサイズ時にメニューを閉じる
	$(window).on('resize', function() {
		if ($(window).width() > 768) {
			console.log('Window resized to desktop size, closing menu');
			hamburger.removeClass('active');
			menu.removeClass('active');
			body.removeClass('menu-open');
		}
	});
	
	console.log('Hamburger menu initialization complete');
});
	$('.sp-title').on('click', function () {
		$(this).next().slideToggle();
		$(this).toggleClass('open');

	});
	$(window).scroll(function () {
		$('.card-design01__head').each(function () {
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 500) {
				$(this).addClass('is-active');
			} else {
				$(this).removeClass('is-active');
			}
		});
	});
});

// ========================================
// Inline JavaScript from HTML
// ========================================

// ハンバーガーメニューのフォールバック
document.addEventListener('DOMContentLoaded', function() {
	console.log('Vanilla JS fallback initialized');
	
	const hamburger = document.getElementById('hamburger-menu');
	const menu = document.querySelector('.header-modern .header__menu');
	const body = document.body;
	
	console.log('Hamburger element:', hamburger);
	console.log('Menu element:', menu);
	
	if (hamburger && menu) {
		hamburger.addEventListener('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			console.log('Hamburger clicked (vanilla JS)');
			console.log('Hamburger element:', this);
			console.log('Menu element:', menu);
			
			const isActive = this.classList.contains('active');
			console.log('Current active state (vanilla JS):', isActive);
			
			if (isActive) {
				this.classList.remove('active');
				menu.classList.remove('active');
				body.classList.remove('menu-open');
				console.log('Menu closed (vanilla JS)');
				console.log('Menu classes after close:', menu.className);
			} else {
				this.classList.add('active');
				menu.classList.add('active');
				body.classList.add('menu-open');
				console.log('Menu opened (vanilla JS)');
				console.log('Menu classes after open:', menu.className);
				console.log('Menu computed style:', window.getComputedStyle(menu).display);
			}
		});
		
		// メニューリンククリック時の処理
		const menuLinks = menu.querySelectorAll('a');
		menuLinks.forEach(function(link) {
			link.addEventListener('click', function() {
				console.log('Menu link clicked (vanilla JS)');
				hamburger.classList.remove('active');
				menu.classList.remove('active');
				body.classList.remove('menu-open');
			});
		});
		
		console.log('Vanilla JS hamburger menu setup complete');
	} else {
		console.log('Required elements not found for vanilla JS fallback');
		console.log('Hamburger found:', !!hamburger);
		console.log('Menu found:', !!menu);
	}
});

// ========================================
// お客様の声スライダー機能
// ========================================

document.addEventListener('DOMContentLoaded', function() {
	console.log('Initializing voice slider...');
	
	const voiceGrid = document.querySelector('.voice-grid');
	const prevBtn = document.getElementById('voicePrevBtn');
	const nextBtn = document.getElementById('voiceNextBtn');
	const dots = document.querySelectorAll('#voiceDots .dot');
	
	console.log('Elements check:', {
		voiceGrid: voiceGrid,
		prevBtn: prevBtn,
		nextBtn: nextBtn,
		dots: dots,
		dotsLength: dots.length
	});
	
	if (!voiceGrid || !prevBtn || !nextBtn || !dots.length) {
		console.log('Voice slider elements not found - aborting');
		return;
	}
	
	let currentSlide = 0;
	const totalSlides = dots.length;
	
	console.log('Voice slider elements found:', {
		voiceGrid: !!voiceGrid,
		prevBtn: !!prevBtn,
		nextBtn: !!nextBtn,
		dots: dots.length,
		totalSlides: totalSlides,
		windowWidth: window.innerWidth
	});
	
	// スライド移動関数
	function moveToSlide(slideIndex) {
		console.log('moveToSlide called with:', slideIndex);
		
		if (slideIndex < 0 || slideIndex >= totalSlides) {
			console.log('Invalid slide index:', slideIndex);
			return;
		}
		
		currentSlide = slideIndex;
		
		// 常にスライダー動作を実行（デバッグ用）
		const translateX = -slideIndex * 100;
		voiceGrid.style.transform = `translateX(${translateX}%)`;
		console.log('Slider moved to:', {
			slideIndex: slideIndex,
			currentSlide: currentSlide,
			translateX: translateX,
			windowWidth: window.innerWidth,
			transform: voiceGrid.style.transform
		});
		
		// ドットの更新
		dots.forEach((dot, index) => {
			dot.classList.toggle('active', index === currentSlide);
		});
		
		// ボタンの状態更新
		prevBtn.disabled = currentSlide === 0;
		nextBtn.disabled = currentSlide === totalSlides - 1;
		
		console.log('Button states:', {
			prevDisabled: prevBtn.disabled,
			nextDisabled: nextBtn.disabled
		});
	}
	
	// 前のスライド
	prevBtn.addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('Prev button clicked!', {
			currentSlide: currentSlide,
			totalSlides: totalSlides,
			windowWidth: window.innerWidth,
			canMove: currentSlide > 0
		});
		if (currentSlide > 0) {
			moveToSlide(currentSlide - 1);
		}
	});
	
	// 次のスライド
	nextBtn.addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('Next button clicked!', {
			currentSlide: currentSlide,
			totalSlides: totalSlides,
			windowWidth: window.innerWidth,
			canMove: currentSlide < totalSlides - 1
		});
		if (currentSlide < totalSlides - 1) {
			moveToSlide(currentSlide + 1);
		}
	});
	
	// ドットクリック
	dots.forEach((dot, index) => {
		dot.addEventListener('click', function() {
			moveToSlide(index);
		});
	});
	
	// ウィンドウリサイズ時の処理
	window.addEventListener('resize', function() {
		if (window.innerWidth > 768) {
			// PC表示時はスライダーをリセット
			voiceGrid.style.transform = 'translateX(0%)';
			currentSlide = 0;
			dots.forEach((dot, index) => {
				dot.classList.toggle('active', index === 0);
			});
			prevBtn.disabled = true;
			nextBtn.disabled = false;
		} else {
			// スマホ/タブレット表示時はスライダーを有効化
			moveToSlide(currentSlide);
		}
	});
	
	// ボタンのクリック可能性をテスト
	console.log('Testing button clickability...');
	nextBtn.style.pointerEvents = 'auto';
	nextBtn.style.cursor = 'pointer';
	nextBtn.style.opacity = '1';
	
	// 初期化
	moveToSlide(0);
	
	// テスト用の強制クリック
	setTimeout(function() {
		console.log('Testing automatic slide change...');
		moveToSlide(1);
		setTimeout(function() {
			moveToSlide(0);
		}, 2000);
	}, 3000);
	
	console.log('Voice slider initialization complete');
});
