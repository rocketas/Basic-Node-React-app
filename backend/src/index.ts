import express from 'express'
import cors from 'cors' 

// Create a new express application instance
const app: express.Application = express();
const PORT = 5000
//allows requests from frontend to not raise CORS error
app.use(cors({
  origin: 'http://localhost:3500'
}))

app.get('/', function (req, res) {
  res.send('Hello Wor!');
});

app.get("/test", (req,res) => {
  console.log("YA MADE IT")
  res.send('this came from backend')
})

// sets the port to listen to be the enviroments port
// Currently, the enviroment is a docker container build from Dockerfile image
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});