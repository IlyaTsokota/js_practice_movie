/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

const adsBlocks = document.querySelectorAll('.promo__adv > img'),
	promoGenre = document.querySelector('.promo__genre'),
	promoBg = document.querySelector('.promo__bg'),
	movieList = document.querySelector('.promo__interactive-list');

function deleteAds(ads) {
	ads.forEach(item => item.remove());
}

function setGenre(genre) {
	promoGenre.textContent = genre;
}

function setBackgroundImage(elem, pathImg) {
	elem.style.backgroundImage = `url('${pathImg}')`;
}

function refreshMovies(arr) {
	let movies = "";
	arr.forEach((item, i) => movies +=
		`<li class="promo__interactive-item">
			${i + 1}. ${item}
			<div class="delete"></div>
	</li>`
	);

	movieList.insertAdjacentHTML('afterbegin', movies);
}

deleteAds(adsBlocks);
setGenre("драма");
setBackgroundImage(promoBg, '../img/bg.jpg');
refreshMovies(movieDB.movies);