import express from 'express'
import cors from 'cors' 

// Create a new express application instance
const app: express.Application = express();



//allows requests from frontend to not raise CORS error
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', function (req, res) {
  res.send('Hello Wor!');

});


app.get("/test", (req,res) => {
  console.log("YA MADE IT")
  res.send('this came from backend!!!!')
})
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});