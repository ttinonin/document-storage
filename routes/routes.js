const express = require('express')
const { aluno, disciplina, alunosCursou, curso, professor, departamento, alunoTcc, disciplinasMinistradas } = require('../schemas/schemas');
const { faker } = require('@faker-js/faker')

const router = express.Router()

const aluno_id = []
const cursos_inseridos_id = []
const disciplinas_inseridas_id = []

async function insere_dados() {

    const fake_data_aluno = [
        {
            nome: "Daniel Menezes",
            email: "daniel@menezes.com"
        },
        {
            nome: "Benicio Macedo",
            email: "daniel51@example.org",
        },
        {
            nome: "Bianca Sousa",
            email: "mathiascastro@example.net",
        },
        {
            nome: "Sophia Pinto",
            email: "npastor@example.com",
        },
        {
            nome: "João Gabriel Farias",
            email: "da-rosacalebe@example.com",
        },
        {
            nome: "Srta. Sarah Leão",
            email: "fariaskevin@example.net",
        },
        {
            nome: "Samuel Peixoto",
            email: "andrademariana@example.com",
        },
        {
            nome: "Ana Julia Cardoso",
            email: "joao-lucasgomes@example.com"
        },
        {
            nome: "Pedro Miguel Gomes",
            email: "gael-henrique67@example.net"
        },
        {
            nome: "Pedro Aleff Abdala",
            email: "abdala@net.com"
        }
    ];

    const alunos_promisses = fake_data_aluno.map((single) => {
        const insert = new aluno({
            nome: single.nome,
            email: single.email
        })
    
        return insert.save();
    })

    const alunosInseridos = await Promise.all(alunos_promisses)
    aluno_id.push(...alunosInseridos.map(aluno => aluno._id));

    const fake_cursos = [
        {
            nome: "Ciência da Computação",
            semestres: 8
        },
        {
            nome: "Engenharia Elétrica",
            semestres: 10
        },
        {
            nome: "Matemática",
            semestres: 8
        },
        {
            nome: "Engenharia Mecânica",
            semestres: 11
        },
    ]
    
    const cursosPromises = fake_cursos.map(single => {
        const insert = new curso({ nome: single.nome, semestres: single.semestres });
        return insert.save();
    });

    const cursosInseridos = await Promise.all(cursosPromises);
    cursos_inseridos_id.push(...cursosInseridos.map(course => course._id));

    const fake_disciplinas = [
        {
            nome: "Banco de Dados",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Física II",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Mecanica dos Fluidos",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Física I",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Computação Movel",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Geometria Analitica",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Sistemas Digitais",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Redes",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Calculo I",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Engenharia de Software",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Sistemas Digitais II",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Calculo II",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Calculo I",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
        {
            nome: "Desenho Tecnico",
            curso_id: cursos_inseridos_id[Math.floor(Math.random() * cursos_inseridos_id.length)],
        },
    ]


    const disciplinasPromises = fake_disciplinas.map(single => {
        const insert = new disciplina({ nome: single.nome, curso_id: single.curso_id });
        return insert.save();
    });

    const disciplinasInseridas = await Promise.all(disciplinasPromises);
    disciplinas_inseridas_id.push(...disciplinasInseridas.map(disc => disc._id));

    let semestre = [1, 2]
    let ano = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]

    const fake_alunos_cursou = []

    for(let i = 0; i < 30; i++) {
        fake_alunos_cursou.push({
            aluno_id: aluno_id[Math.floor(Math.random() * aluno_id.length)],
            disciplina_id: disciplinas_inseridas_id[Math.floor(Math.random() * disciplinas_inseridas_id.length)],
            semestre: semestre[Math.floor(Math.random() * semestre.length)],
            ano: ano[Math.floor(Math.random() * ano.length)],
            nota: Math.random() * 11
        })
    }

    const alunos_cursou_id = []

    const alunosCursouPromises = fake_alunos_cursou.map(single => {
        const insert = new alunosCursou(single);
        return insert.save();
    });
    const alunosCursouInseridos = await Promise.all(alunosCursouPromises)
    alunos_cursou_id.push(...alunosCursouInseridos.map(disc => disc._id));

    const departamentos = [
        "Departamento de Ciência da Computação",
        "Departamento de Engenharia Elétrica",
        "Departamento de Matemática",
        "Departamento de Engenharia Mecânica",
    ]

    const departamentos_id = []
    const departamentosPromisse = departamentos.map(single => {
        const insert = new departamento({
            nome: single,
            chefe_id: null
        });
        return insert.save();
    });
    const departamentosInseridos = await Promise.all(departamentosPromisse)
    departamentos_id.push(...departamentosInseridos.map(disc => disc._id));

    const professores = [];
    for(let i = 0; i < 15; i++) {
        professores.push({
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            salario: Math.floor(Math.random() * (10000 - 3000)) + 3000,
            departamento_id: departamentos_id[Math.floor(Math.random() * departamentos_id.length)]
        })
    }

    const professores_id = []
    const professoresPromisse = professores.map(single => {
        const insert = new professor(single);
        return insert.save();
    });
    const professoresInseridos = await Promise.all(professoresPromisse)
    professores_id.push(...professoresInseridos.map(disc => disc._id));

    const alunoTccPromisse = aluno_id.map(single => {
        const insert = new alunoTcc({
            aluno_id: single,
            orientador_id: professores_id[Math.floor(Math.random() * professores_id.length)],
            grupo: Math.floor(Math.random() * 4)
        });
        return insert.save();
    });
    await Promise.all(alunoTccPromisse)

    const ministradasPromisse = professores_id.map(single => {
        const insert = new disciplinasMinistradas({
            professor_id: single,
            disciplina_id: disciplinas_inseridas_id[Math.floor(Math.random() * disciplinas_inseridas_id.length)],
            semestre: Math.floor(Math.random() * 2) + 1,
            ano: ano[Math.floor(Math.random() * ano.length)],
        });
        return insert.save();
    });
    await Promise.all(ministradasPromisse)

    const updateDepartamentosPromisse = departamentos_id.map(single => {
        return departamento.findByIdAndUpdate(single, { chefe_id: professores_id[Math.floor(Math.random() * professores_id.length)] }, { new: true })
    })
    await Promise.all(updateDepartamentosPromisse)
}

router.post('/dados', async(req, res) => {
    await insere_dados()

    res.status(200).json({status: "OK"})
});

router.get('/historico-aluno', async(req, res) => {
    let resposta = {
        disciplina_id: String,
        displina_nome: String,
        semestre: Number,
        ano: Number,
        nota: Number
    }

    try {
        const data = await alunosCursou.findOne()

        resposta.semestre = data.semestre
        resposta.ano = data.ano
        resposta.nota = data.nota
        resposta.disciplina_id = data.disciplina_id

        const disciplinaNome = await disciplina.findById(data.disciplina_id)

        resposta.displina_nome = disciplinaNome.nome

        res.status(200).json(resposta)
    } catch(err) {
        res.status(500).json({message: err.message})
    }

});

router.get('/historico-professor', async(req, res) => {
    let resposta = {
        professor: String,
        displina: String,
        semestre: Number,
        ano: Number
    }

    try {
        const data = await disciplinasMinistradas.findOne()

        resposta.ano = data.ano
        resposta.semestre = data.semestre

        const disciplinaNome = await disciplina.findById(data.disciplina_id)

        resposta.displina = disciplinaNome.nome

        const professorNome = await professor.findById(data.professor_id)

        resposta.professor = professorNome.nome

        res.status(200).json(resposta)
    } catch(err) {
        res.status(500).json({message: err.message})
    }

});

router.get('/chefes-departamento', async(req, res) => {
    

    let respostas = [];

    try {
        const data = await departamento.find();

        const promessas = data.map(async (pro) => {
            let resposta = {}

            resposta.departamento = pro.nome

            const professorNome = await professor.findById(pro.chefe_id);

            resposta.professor = professorNome.nome;
            respostas.push(resposta);
        });

        await Promise.all(promessas);

        res.status(200).json(respostas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});

router.get('/grupo-tcc', async(req, res) => {
    let respostas = [];
    try {
        const data = await alunoTcc.find()

        const promessas = data.map(async (pro) => {
            let resposta = {}

            resposta.grupo = pro.grupo

            const professorNome = await professor.findById(pro.orientador_id);

            resposta.professor = professorNome.nome;

            const alunoNome = await aluno.findById(pro.aluno_id);

            resposta.aluno = alunoNome.nome;

            respostas.push(resposta);
        });

        await Promise.all(promessas);

        res.status(200).json(respostas)
    } catch(err) {
        res.status(500).json({message: err.message})
    }

});

router.get('/alunos-formados', async(req, res) => {
    let respostas = [];
    
    if(!req.query.ano || !req.query.semestre) {
        res.status(500).json({message: "Invalid query params, provide: ano e semestre"})
        return
    }

    try {
        const data = await alunosCursou.distinct("aluno_id", { nota: { $gt: 5 }, ano: req.query.ano, semestre: req.query.semestre })
        
        const promessas = data.map(async (pro) => {
            let resposta = {}

            const alunoNome = await aluno.findById(pro);

            resposta.aluno = alunoNome.nome;

            respostas.push(resposta);
        });
        await Promise.all(promessas);

        res.status(200).json(respostas)
    } catch(err) {
        res.status(500).json({message: err.message})
    }

});

module.exports = router