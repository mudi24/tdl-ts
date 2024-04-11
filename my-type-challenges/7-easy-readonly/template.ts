type readonly<T> = {
  readonly [P in keyof T] : T[P]
}



// function readonly(obj) {
//   const result = {}
//   for(const key in obj){
//     result['readonly' + key] = obj[key]
//   }
//   return result
// }