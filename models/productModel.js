const path = require('path')
const fs = require('fs')
const jsonData = require('../data/product.json')

module.exports = class Product{
    constructor(t){
        this.title = t
    }

    save(){
        const p = path.join(path.dirname(process.mainModule.filename) ,'data','product.json')
        fs.readFile(p, (err, dataContent) => {
            let products= []
            if(!err){
            products = JSON.parse(dataContent)
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename) , 'data' , 'product.json')
        fs.readFile(p, (err, dataContent) =>{
            if(err){
                cb([])
            }else{
            cb(JSON.parse(dataContent)) 
            }
        })
    }
}