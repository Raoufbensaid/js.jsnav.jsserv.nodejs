import { createReadStream, writeFile } from "node:fs";
import { createServer } from "node:http";

const server = createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    res.write(`Bonjour ${url.searchParams.get('name')}`)
    res.end()
    // console.log(url);
    // console.log(req.url);
    // console.log(req.headers.accept)
    // const file = createReadStream('index.html')
    // res.writeHead(404, {
    //     'Content-Type': 'text/html'
    // })
    // file.pipe(res)
    // file.on('end', () => {
    //     res.end()
    // })
    
    // res.write('hello')
    // res.end()
})
server.listen('8888')





// import {  } from "node:fs/promises";
// import { createReadStream, createWriteStream } from "node:fs";

// const stream = createReadStream('Image.png')
// const writeStream = createWriteStream('Images.png')
// stream.pipe(writeStream)

// import { readFile, stat, writeFile } from "node:fs/promises";
// const content = await readFile('ColisComp-6.png')
// await writeFile('Image.png', content)

// import { createReadStream } from "node:fs";
// const stream = createReadStream('Image.png')
// const {size} = await stat('Image.png')
// let read = 0
// stream.on('data', (chunk) => {
//     read += chunk.length
//     console.log(Math.round(100 * read / size));
// })
// stream.on('close', () => {
//     console.log('close');
// })




/*
F - app.js - 30ko   == Pour un fichier faudra afficher le type, le nom et la taille.
D - demo            == Pour un dossier faudra afficher seulement le type et la nom.
F - 
*/

// import { readdir, stat } from "node:fs/promises";

// const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))
// console.time('code')

// const files = await readdir('./', {withFileTypes: true})
// await Promise.allSettled(
//     files.map(async (file) => {
//             const parts = [
//                 file.isDirectory() ? 'D' : 'F',
//                 file.name
//             ]
//             if (!file.isDirectory) {
//                 const size = await wait(1000)
//                 parts.push(`${size}o`)
//             }
//             console.log(parts.join(' - '));
//         })
// )
// console.timeEnd('code')


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