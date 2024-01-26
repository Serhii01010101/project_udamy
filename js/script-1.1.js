if (1) {
  console.log('Ok');
} else {
  console.log('Error');
}

if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Many');
} else {
  console.log('Rigth');
}

num === 50 ? console.log('Ok') : console.log('Error');

const num = 50;

switch (num) {
  case 49:
    console.log('Wrong');
    break;
  case 100:
    console.log('Wrong');
    break;
  case 50:
    console.log('Ok');
    break;
  default:
    console.log('dont this time');
    break;
}
