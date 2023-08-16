class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let valor = 0
        let result = ""
        if(itens == ""){
            return "Não há itens no carrinho de compra!"
        }else{
            
            const product = itens.split(',')
            const quant =  product.length;
            console.log(quant)
            let produto = ""
            let extra = ""
        
            for(let num = 0; (quant-2)>= num; num += 2){
                produto = product[num].split(',')

                console.log(produto[num])
                console.log(produto[num+1])
                console.log(num)
                produto = product[num]

            if(produto == "cafe"){
                valor += (product[1+num]*3.00)

           }else if(produto == "suco"){
                valor += (product[1+num]*6.20)

           }else if(produto == "sanduiche"){
                valor += (product[1+num]*6.50)

           }else if(produto == "salgado"){
                valor += (product[1+num]*7.25)

           }else if(produto == "combo1"){
                valor += (product[1+num]*9.50)

           }else if(produto == "combo2"){
                valor += (product[1+num]*7.50)

           }else if(produto == "chantily"){
                extra = product[num-2].split(',')
                if(extra[0]=="cafe"){
                valor += (product[1+num]*1.50)
                }else{
                    return "Item extra não pode ser pedido sem o principal"
                }
           }else if(produto == "queijo"){
                extra = product[num-2].split(',')
                if(extra[0] == "sanduiche"){
                valor += (product[1+num]*2.00)
           }else{
            return "Item extra não pode ser pedido sem o principal"
           }
        }
           else{
                return "Item inválido!";
           }
    }  
}

    if(metodoDePagamento == "credito"|| metodoDePagamento == "debito" || metodoDePagamento == "dinheiro"){

        if(metodoDePagamento == "credito"){
            valor = (valor*1.03)
        }else if(metodoDePagamento == "dinheiro"){
            valor = (valor*0.9)
        }

        result = "R$ " + valor
                console.log("Resultado: "+result)
                let virgula = result.split(".")
                let gamb = virgula[0]+","+virgula[1]
        return gamb;
    }else{
        return "Forma de pagamento inválida!"
    }
}
              

}

export { CaixaDaLanchonete };
