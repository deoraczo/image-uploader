import express from "express";
import path from 'path';
import morgan from 'morgan';
import routes from './routes';

const app = express();




//app.use(express.static('dist'));
app.use(morgan('dev'));

app.use('/disk', express.static(path.resolve('disk')));

app.use('/api', routes);

/*app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})*/

app.listen(9000, () => {
    console.log('Application running on PORT: 9000')
})