/*
F - app.js - 30ko   == Pour un fichier faudra afficher le type, le nom et la taille.
D - demo            == Pour un dossier faudra afficher seulement le type et la nom.
F - 
*/

import { readdir, stat } from "node:fs/promises";

const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))
console.time('code')

const files = await readdir('./', {withFileTypes: true})
await Promise.allSettled(
    files.map(async (file) => {
            const parts = [
                file.isDirectory() ? 'D' : 'F',
                file.name
            ]
            if (!file.isDirectory) {
                const size = await wait(1000)
                parts.push(`${size}o`)
            }
            console.log(parts.join(' - '));
        })
)
console.timeEnd('code')


// import { readdir, stat } from "node:fs/promises";

// const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))
// console.time('code')

// const files = await readdir('./', {withFileTypes: true})
// files.forEach(async (file) => {
//     const parts = [
//         file.isDirectory() ? 'D' : 'F',
//         file.name
//     ]
//     if (!file.isDirectory) {
//         const size = await wait(1000)
//         parts.push(`${size}o`)
//     }
//     console.log(parts.join(' - '));
// })
// console.timeEnd('code')



// import fs from 'node:fs'

// const content = fs.readFile('demo.txt', {encoding: 'utf8'}, function (err, content) {
//     console.log(content);
// })

// import {readFile} from 'node:fs/promises';

// // const content = await readFile('demo.txt', {encoding: 'utf8'})
// // console.log(content);

// const content = await Promise.all([
//     readFile('demo.txt', {encoding: 'utf8'}),
//     readFile('array.js', {encoding: 'utf8'})
// ])
// console.log(content);

// import {stat, writeFile} from "node:fs/promises";

// await writeFile('demo.txt', 'Bonjour les gens', {
//     flag: 'a'
// })

// const i = await stat('demo.txt')
// console.log(i);

// import { open } from "node:fs/promises";

// const file = await open('demo.txt', 'a')
// file.write('HELLO')
// file.close()

// import { watch } from "node:fs/promises";

// const watcher = watch('./')
// for await (const event of watcher) {
//     console.log(event);
// }