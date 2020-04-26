const path = require('path')
const fs = require('fs')

const p = path.join(path.dirname(process.mainModule.filename) ,'data','product.json')
fs.readFile(p, (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log(p)