'use strict';

const a = '<h2>Hello World!</h2>';
const b = document.getElementsByClassName('hello');
b[0].insertAdjacentHTML('beforebegin', a);

b[0].insertAdjacentText('afterbegin', 'Kurwa :)');

b[0].insertAdjacentElement('beforebegin', a);
