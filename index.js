let datHang = new Promise((resolve, reject) => {
    // resolve('dat hang thanh cong')
    reject(' nhan hang fail')

})
let nhanHang = new Promise((resolve, reject) => {
    resolve('nhận hàng thanh cong')
})
let boomHang = new Promise((resolve, reject) => {
    resolve('boom hang thanh cong')
})
// datHang.then((res) => {
//     console.log(res)
//     return nhanHang
// }).then((res) => {
//     console.log(res)
//     return boomHang
// }).then((res) => {
//     console.log(res)
// })

// let ham = async () => {
//     try {
//         let dathang = await datHang
//         let nhanhang = await nhanHang
//         console.log(dathang)
//         console.log(nhanhang)
//     } catch (err) {
//         console.log(err)
//     }


// }
// ham()

Promise.allSettled([datHang, nhanHang, boomHang]).then((resolve, reject) => {
    console.log(resolve)
}).catch((err) => {
    console.log(err)
})