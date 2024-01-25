const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    
    sexo: 'F',
    salario: 3350.25,
    },
    ];

    
// 1. Imprima no console a quantidade de pessoas Total.
console.log(data.length);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
let feminino = data.filter((imprimir)=> imprimir.sexo === 'F');
console.log(feminino.length);

// 3. Imprima no console a soma do salário de todas as pessoas.
let somaSalarios = 0
let soma = data.reduce((acc, cur)=> acc + cur.salario, somaSalarios,);
console.log(soma);

// 4. Imprima no console a média do salário de todas as pessoas.
let media = soma / (data.length);
console.log(media.toFixed(2));

// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
let masculino = dinheiro => dinheiro.sexo ==='M';
let obtemSalario = sal => sal.salario;
let totalSalario = (sal, salAtual) => {return sal + salAtual;}

let totalHomens = data.filter(masculino).map(obtemSalario).reduce(totalSalario);
console.log(totalHomens);

// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
let apenasMasculino = data.filter((imprimir)=> imprimir.sexo === 'M');
let quantidadeHomens = apenasMasculino.length
let mediaSalarioMasculino = totalHomens / quantidadeHomens;
console.log(mediaSalarioMasculino.toFixed(2));

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
let salarioSuperioraSete = (sete) => sete > 7000;
console.log(data.some(salarioSuperioraSete));

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
// 10. Imprima os nomes utilizando o MAP