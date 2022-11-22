const Student=require("../app/student")
const assert=require("assert")
const { read } = require("fs")
describe("Create records",()=>{
    it("create a User in DB",()=>
    {
  
        // assert(true)
        const krishna= new Student({name:"testingperson4",rollNo:19})
        krishna.save()
                .then(() => {
                    assert(!krishna.isNew)
                }).catch((err) => {
                    console.log(error)

                });
    })
})

describe("Read Test",()=>{
    let reader;
    beforeEach(done=>{
    reader=Student({name:'Reader'})
    reader.save().then(()=>{
        done()  
        console.log("read successfully ")
          })
})
it("Read a user: Reader ",done=>{
Student.find({name:"Reader"}).then(students=>{
    assert(reader._id.toString()===students[0]._id.toString())  
        done()
        console.log("it block completed  : ) ")

})
})
})