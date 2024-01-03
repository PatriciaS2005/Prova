async function obterDados() {
    const TFrutas = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                const frutas = { fruta1: "pera", fruta2: "goiaba", fruta3: "maça" };
                resolve(frutas);
            }, 2000); 
        });
    };
  
    try {
        const dados = await TFrutas();
        console.log("Dados da Fruta:", dados);
    } catch (erro) {
        console.error("Erro ao obter dados da fruta:", erro);
    }
  }
