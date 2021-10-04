import express from 'express';
import updatePlayersInfo from "./controllers/updatePlayersInfo";
import playerRouter from "./api/routers/playerRouter";

const app = express();
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Test2');
})

app.get('/setData', updatePlayersInfo)

app.use('/player', playerRouter)

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})