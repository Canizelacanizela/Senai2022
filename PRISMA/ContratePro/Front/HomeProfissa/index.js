function carregar() {
    fetch("http://localhost:3000/prof")
        .then(resp => { return resp.json(); })
        .then(data => {
            data.forEach(prof => {
                document.querySelector("#nome_p").innerHTML = prof.nome_p;
            });
        })
}