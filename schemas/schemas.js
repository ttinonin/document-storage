const mongoose = require('mongoose')

const cursosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    semestres: Number,
})

const alunoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const disciplinaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'cursos' }
});

const alunosCursouSchema = new mongoose.Schema({
    aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: 'alunos' },
    disciplina_id: { type: mongoose.Schema.Types.ObjectId, ref: 'disciplinas' },
    semestre: Number,
    ano: Number,
    nota: Number,
});

const departamentosSchema = new mongoose.Schema({
    nome: String,
    chefe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'professores' }
})

const professoresSchema = new mongoose.Schema({
    nome: String,
    email: String,
    salario: Number,
    departamento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'departamentos' }
})

const alunosTccSchema = new mongoose.Schema({
    aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: 'alunos' },
    orientador_id: { type: mongoose.Schema.Types.ObjectId, ref: 'professores' },
    grupo: Number
})

const disciplinasMinistradasSchema = new mongoose.Schema({
    professor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'professores' },
    disciplina_id: { type: mongoose.Schema.Types.ObjectId, ref: 'disciplinas' },
    semestre: Number,
    ano: Number
})

const aluno = mongoose.model('alunos', alunoSchema);
const disciplina = mongoose.model('disciplinas', disciplinaSchema);
const alunosCursou = mongoose.model('alunos_cursou', alunosCursouSchema);
const curso = mongoose.model('cursos', cursosSchema);
const professor = mongoose.model('professores', professoresSchema);
const departamento = mongoose.model('departamentos', departamentosSchema);
const alunoTcc = mongoose.model('alunos_tcc', alunosTccSchema);
const disciplinasMinistradas = mongoose.model('disciplinas_ministradas', disciplinasMinistradasSchema);

module.exports = { aluno, disciplina, alunosCursou, curso, professor, departamento, alunoTcc, disciplinasMinistradas }