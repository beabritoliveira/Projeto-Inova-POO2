import express from 'express';
import MainRouter from './routes/MainRoute';
import AlunoRouter from './routes/AlunoRoute';
import AvaliacaoRouter from './routes/AvaliacaoRoute';
import EstandeRouter from './routes/EstandeRoute';
import GrupoRouter from './routes/GrupoRoute';
import ProfessorRouter from './routes/ProfessorRoute';

const app = express();
const port = 3000

app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(MainRouter);
app.use(AlunoRouter);
app.use(AvaliacaoRouter);
app.use(EstandeRouter);
app.use(GrupoRouter);
app.use(ProfessorRouter);


app.listen(port, function(){
    console.log('Servidor rodando na porta ${port}');
})