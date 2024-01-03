const CapitalizarTitulos = livros => 
livros.map(livros => livros.toUpperCase(livros[0,1]));

console.log(CapitalizarTitulos(["não","conseguir"]));