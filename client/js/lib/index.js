var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function(event){

    // Não submeter o formulário
    event.preventDefault();

    // Capturando e adicionando o item na tabela
    var tr = document.createElement('tr');
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // Incluindo a coluna volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    // limpando os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    // Dando focus ao campo data
    campos[3].focus();
});