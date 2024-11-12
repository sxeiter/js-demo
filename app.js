let ru = 'ru'
let en = 'en'
let de;
let sp;
const sayHi = prompt(`Выберите ваш язык из списка: ${ru}, ${en}, ${de}, ${sp}`)

switch(sayHi) {
    case ru:
        console.log('Добрый день!');
        break;
    case en:
        console.log('Hello!');
        break;
    case de:
        console.log('Guten tag!');
        break;
    case sp:
        console.log('Hola!');
        break;
    default:
        console.log('что-то на японском');
}