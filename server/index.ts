import express from "express";
import morgan from 'morgan';
import routes from './routes';
import { resolveClientPath, resolveDiskPath } from './utils';

const app = express();

const PORT = process.env.PORT || 9000;


app.use(express.static(resolveClientPath()));
app.use(morgan('dev'));

app.use('/disk', express.static(resolveDiskPath()));
app.use('/api', routes);
app.get('*', (req, res) => {
    res.sendFile(resolveClientPath() + '/index.html');
})

app.listen(PORT, () => {
    console.log('Application running on PORT: ' + PORT)
})
