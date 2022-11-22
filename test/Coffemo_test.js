const mongoose = require("mongoose");
// const { deleteOne } = require("../app/student");
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });

  mongoose.connection
    .once("open", () => {
      console.log("Connected");
      done();
    })
    .on("error", (error) => {
      console.log(error);
    });
});

beforeEach(done=>
{

mongoose.connection.collections.students.drop(()=>{
  console.log("collection dropped :< ")
  done()
})
})