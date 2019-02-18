class NegociacoesView {

    constructor(el){
        this._el = el;
    }

    template(modelo){
        return `
        
        <table class="card-branco m-t-10">
            <thead>
                <tr class="flex justify-content-between">
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Volume</th>
                </tr>
            </thead>
            
            <tbody>
                ${modelo.negociacoes.map(n => {
                    return `
                    
                        <tr>
                            <td> ${n.data} </td>
                            <td> ${n.quantidade} </td>
                            <td> ${n.valor} </td>
                            <td> ${n.volume} </td>
                        </tr>

                    `;
                }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>

        `
    }   
    
    atualiza(modelo){
        this._el.innerHTML = this.template(modelo);
    }
}