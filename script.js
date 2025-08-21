// criação de nome, idade e senha do usuário //
let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))

// verificação da idade//
if (idade >= 13) {
    let senha = prompt("Digite uma senha: ")
} else{
    alert("Você não pode se cadastrar. Idade mínima: 13 anos.")
}
alert("Cadastro realizado com sucesso!")
// login do usuário //
let confnome = prompt("Digite o nome do seu cadastro: ")
let confsenha = prompt("Digite a senha do seu cadastro: ")

if (confnome === nome && confsenha === senha) {
    alert(`Login realizado com sucesso! Bem-vindo, ${confnome}.
`)
}