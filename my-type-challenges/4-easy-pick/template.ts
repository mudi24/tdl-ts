// ts 联合类型 union
type MyPick<T, K extends keyof T> = {
  [P in K]: T[K]
}

// function MyPick(todo, keys) {
//     const obj = {}
//     keys.forEach(key => {
//       if(key in todo){
//         obj[key] = todo[key]
//       }
//     });
//     return obj
// }