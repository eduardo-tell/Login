class NegociacaoController {

    // Definindo que esta classe sempre terá estes dados para reutilização
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }
    
    adiciona(event){
        event.preventDefault();

        // Criando uma negociação com os dados respectivos
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

        // Adicionar a negociação em uma lista
    }
}