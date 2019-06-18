import htmlCtrlr from './controllers/html.mjs';
import express from 'express';
import settings from '../config/settings.mjs';

const app = express();

app.route('/')
    .get((req, res) => {
        let responseStr = htmlCtrlr({
            html: 'Hello World',
            title: 'JAB'
        });

        res.send(responseStr);
    });

app.listen(settings.port);
