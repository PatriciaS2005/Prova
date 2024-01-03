const formatarContatos = (contato) =>{
    let {nome, email, telefone} = contato
    return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
}

console.log(formatarContatos({nome: "Patricia Santana", email: "p.santana@gmail.com", telefone: "84999146237"}))


