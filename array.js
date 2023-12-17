export {default as hello} from './hello.js'

export const sum = (items) => items.reduce((acc, item) => acc + item, 0)
// export const hello = () => console.log('hello');
export default () => console.log('HELLO !!');