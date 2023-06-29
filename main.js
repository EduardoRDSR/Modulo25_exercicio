function filtrarAlunos() {
    const alunos = [
        { nome: 'Eduardo', nota: 8.5 },
        { nome: 'Carlos', nota: 4.2 },
        { nome: 'Yang', nota: 9.0 },
        { nome: 'Erik', nota: 5.0 },
        { nome: 'Duda', nota: 9.5 }
    ];

    const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

    return alunosAprovados;
}

const alunosAprovados = filtrarAlunos();
console.log(alunosAprovados);