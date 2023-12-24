import { exec, spawn } from "node:child_process"
import { watch } from "node:fs/promises";

const [node, _, file] = process.argv

function spawnNode() {
    const pr = spawn(node, [file])
    pr.stdout.pipe(process.stdout)
    pr.stderr.pipe(process.stderr)

    // pr.stdout.on('data', (data) => {
    //     console.log(data.toString('utf8'))
    // })

    // pr.stderr.on('data', (data) => {
    //     console.error(data.toString('utf8'));
    // })

    pr.on('close', (code) => {
        if (code !== null) {
            process.exit(code)
            // throw new Error('Process exited : ' + code);
        }
    })

    return pr
}

let childNodeProcess = spawnNode()
const watcher = watch('./', {recursive: true})
for await (const event of watcher) {
    if (event.filename.endsWith('.js')) {
        childNodeProcess.kill('SIGKILL')
        childNodeProcess = spawnNode()
    }
    console.log(event);
}


// exec('ls', (error, out, err) => {
//     console.log({
//         error,
//         out,
//         err
//     });
// })