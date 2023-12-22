/**
 * Vérifie si l'utilisateur peut conduire (conduite accompagnée incluse)
 * 
 * https://en.wikipedia.org/wiki/List_of_minimum_driving_ages
 * 
 * @param {number} age
 * @param {string} country Le pays sur 2 lettres (exemple: "FR", "EN", ...)
 * @returns {boolean}
 * @throws {InvalidCountryException} 
 */
function canDrive ({age, country}) {
    // A la réunion un permis de conduite accompagnée existe à partir de 15 ans
    if (age >= 15 && country === "RE") {
        return true
    }
}


export {default as hello} from './hello.js'

export const sum = (items) => items.reduce((acc, item) => acc + item, 0)
// export const hello = () => console.log('hello');
export default () => console.log('HELLO !!');


// const lis = document.querySelectorAll('li')
// lis.forEach(v => console.log(v ))
// console.log(Array.from(lis));

// const ul = document.querySelector('ul li:first-child')
// console.log(
//     ul.nodeName,
//     ul.innerHTML,
//     ul.innerText,
//     ul.textContent
// );
// ul.setAttribute('hidden', 'hidden')
// ul.removeAttribute('hidden')
// console.log(
//     ul.getAttribute('class')
// );
// console.log(
//     ul.classList.remove('red')
// );

// setInterval(() => {
//     ul.classList.toggle('red')
// }, 1000);
// setInterval(() => {
//     ul.classList.add('green')
// }, 1000);