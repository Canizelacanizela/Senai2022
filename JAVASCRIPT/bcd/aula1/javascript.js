function datas(qtd){
    let retorno = [];
    for(i = 0; i<qtd;i++){
        let inicio = new Date(1990, 0, 1);
        let fim = new Date(2006, 11, 1);
        retorno[i] = new Date(inicio.getTime()+Math.random()*(fim.getTime()-incio.getTime()));
    }
    return retorno;
}