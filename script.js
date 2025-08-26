// criação de nome, idade e senha do usuário //
let nome = prompt("Digite seu nome: ").toLowerCase()
let idade = parseInt(prompt("Digite sua idade: "))

// verificação da idade//
if (idade >= 13 && idade < 100) {
let senha = prompt("Digite uma senha: ").toLowerCase()
       alert("Cadastro realizado com sucesso!")
let confnome = prompt("Digite o nome do seu cadastro: ").toLowerCase()
let confsenha = prompt("Digite a senha do seu cadastro: ").toLowerCase()
if (confnome === nome && confsenha === senha) {
    alert(`Login realizado com sucesso! Bem-vindo, ${confnome}.
`) }else{

}
} else{
    alert("Você não pode se cadastrar. Idade mínima: 13 anos.")
}

