import express from 'express';
const cors = require('cors');
import updatePlayersInfo from "./controllers/updatePlayersInfo";
import playersRouter from "./api/routers/playersRouter";
import trendingRouter from "./api/routers/trendingRouter";


const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/setData', updatePlayersInfo)

app.use('/players', playersRouter)

app.use('/trending', trendingRouter)

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})


