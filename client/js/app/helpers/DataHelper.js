class DataHelper{

    formataDataTexto(data){        
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }

    formataData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}