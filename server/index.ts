import express from "express";
import morgan from 'morgan';
import routes from './routes';
import { resolveClientPath, resolveDiskPath } from './utils';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.static(resolveClientPath()));
app.use(morgan('dev'));

app.use('/disk', express.static(resolveDiskPath()));
app.use('/api', routes);
app.get('*', (req, res) => {
    res.sendFile(resolveClientPath() + '/index.html');
})

app.listen(app.get('port'), () => {
    console.log('Application running on PORT: ' + app.get('port'))
})
