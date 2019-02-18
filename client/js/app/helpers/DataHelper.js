class DataHelper{

    static formataDataTexto(data){        
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }

    static formataData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}