import express from 'express';
const cors = require('cors');
import updatePlayersInfo from "./actions/updatePlayersInfo";
import playersRouter from "./api/routers/playersRouter";
import trendingRouter from "./api/routers/trendingRouter";
import userRouter from "./api/routers/userRouter";


const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/setData', updatePlayersInfo)

app.use('/players', playersRouter)

app.use('/trending', trendingRouter)

app.use('/user', userRouter)

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})


