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
/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */
const adsBlocks = document.querySelectorAll('.promo__adv > img'),
	promoGenre = document.querySelector('.promo__genre'),
	promoBg = document.querySelector('.promo__bg'),
	movieList = document.querySelector('.promo__interactive-list'),
	formAdd = document.querySelector('.add');

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
	movieList.innerHTML = "";
	let movies = "";
	arr.forEach(item => item.toLowerCase());
	arr.sort();
	arr.forEach((item, i) => movies +=
		`<li class="promo__interactive-item">
			${i + 1}. ${item}
			<div class="delete"></div>
	</li>`
	);
	movieList.insertAdjacentHTML('afterbegin', movies);

	document.querySelectorAll('.delete').forEach((btn, i) => {
		btn.addEventListener('click', () => {
			btn.parentElement.remove();
			movieDB.movies.splice(i, 1);
		});
	});

}

formAdd.addEventListener('submit', (e) => {
	e.preventDefault();
	const obj = Object.fromEntries(new FormData(e.target).entries());
	if (obj.isLike !== undefined) {
		console.log('Добавляем любимый фильм');
	}
	if (obj.movie != '') {
		const name = obj.movie.length > 21 ? `${obj.movie.substring(0, 22)}...` : obj.movie;
		movieDB.movies.push(name);
	}

	refreshMovies(movieDB.movies);
	formAdd.reset();
});

deleteAds(adsBlocks);
setGenre("драма");
setBackgroundImage(promoBg, '../img/bg.jpg');
refreshMovies(movieDB.movies);


