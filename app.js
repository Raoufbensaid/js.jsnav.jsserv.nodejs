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

import { watch } from "node:fs/promises";

const watcher = watch('./')
for await (const event of watcher) {
    console.log(event);
}