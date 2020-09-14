import express from "express";
import path from 'path';
import morgan from 'morgan';
import routes from './routes';
import { ErrorHanlderMiddleware } from "./middlewares/erro-handler.middleware";

const app = express();

/*app.use(express.static('dist'));*/

//MIDDLEWARES
app.use(morgan('dev'));

//ROUTES
app.use('/disk', express.static(path.resolve('disk')));
app.use('/api', routes);

app.get('/hola', (req, res) => {
    res.send('Hello Wordl!');
})

app.use((err, req, res) => {
    console.log(err);
});


/*app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})*/




app.listen(3000, () => {
    console.log('Application running on PORT: 3000')
})