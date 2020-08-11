import express from 'express';
import routes from './routes';
import cors from 'cors'
import {spawn} from 'child_process'


const app = express();

spawn('cd .. && cd web && yarn start',{shell:true})

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

