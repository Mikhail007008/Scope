'use strict';

const getRand = function(mn, mx) {
	const min = Math.floor(Math.min(mn,mx)), 
		max = Math.ceil(Math.max(mn,mx));
	return Math.ceil(Math.random() * 100);
};

const func = function() {
	const rand = getRand(1, 100);

	return (function guessNum() {
		const num = prompt('Угадай число от 1 до 100');

		if (num === null) {
			return alert('Игра окончена');}

		const numb = Number(num);
		
		if (numb < rand) {
			alert('Загаданное число больше');
			 return guessNum();
		}
	
	 	else if (numb > rand) {
			alert('Загаданное число меньше');	
			 return guessNum();
		}
	
	 	else if (numb === rand) {
			alert('Поздравляю, Вы угадали!!!');
		}

	})();
};

func();