const Book = require("./Book")

module.exports.create = async function(payload){
    let book=Book(payload)
   return await book.save()
}
module.exports.update = async function(id,payload){
    return await Book.findByIdAndUpdate({_id:id},payload, {new:true})
}
module.exports.delete = async function(id){
    await Book.findByIdAndDelete({_id:id})
}
module.exports.list = async function(){
   return await  Book.find()
}
module.exports.get = async function(id){
    return await Book.findById({_id:id})
}