const alunos = [
    { nome: "Maria", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 4 },
    { nome: "Carla", nota: 9 },
];

function alunosComNotaMinima(listaAlunos, notaMinima) {
    return listaAlunos.filter(aluno => aluno.nota >= notaMinima);
}

const alunosAprovados = alunosComNotaMinima(alunos, 6);
console.log(alunosAprovados);
