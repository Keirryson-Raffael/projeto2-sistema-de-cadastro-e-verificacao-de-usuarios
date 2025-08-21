// criação de nome, idade e senha do usuário //
let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))

if (idade < 13) {
    alert("Não foi possível concluir o cadastro. Idade mínima: 13 anos")
}

else if (idade >= 13) {
    let senha = prompt("Digite uma senha: ")
}

alert(`--- Cadastro de Usuário ---

Nome: ${nome}
Idade: ${idade} anos
Senha: ${senha}

---------------------------

Faça login para acessar sua conta.`)
// login do usuário //
let confnome = prompt("Digite o nome do seu cadastro: ")
let confidade = parseInt(prompt("Digite a idade do seu cadastro: "))
let confsenha = prompt("Digite a senha do seu cadastro: ")
