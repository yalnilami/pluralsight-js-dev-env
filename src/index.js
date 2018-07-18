import './index.css';

import numeral from 'numeral';

//since this was just a test file, I'll disable linting
/* eslint-disable */

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
