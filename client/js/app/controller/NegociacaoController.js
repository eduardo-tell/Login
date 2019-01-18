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

        let helper = new DataHelper();

        let negociacao = new Negociacao(
            helper.formataDataTexto(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(helper.formataDataTexto(negociacao.data));

    }
}