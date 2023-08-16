import React from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import FormGroup from "../components/FormGroup";
import { CaixaDaLanchonete } from "../caixa-da-lanchonete";

export default class Caixa extends React.Component{

    state = {
        pagamento: '',
        produto: ''
    }

    handleCompra = () => {
        const caixa = new CaixaDaLanchonete();
        const valorCompra = caixa.calcularValorDaCompra(this.state.pagamento, this.state.produto);
        console.log(valorCompra)
        alert(`Valor da compra: ${valorCompra}`);
    }

    render(){
        return(
            <div className='container'>
              <div className='row'>
                <div className='col-md-6' style={this.styles.colMd6} >
                  <div className='bs-docs-section'>
                      <Card title="Lanchonete">
                        <h3>CARDÁPIO</h3>
                      <table className="table table-hover">
                <thead>
            <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
                    </tr>
                    </thead>
                    <Card2 codigo="cafe" descricao="Café" preco="R$ 3,00"> </Card2>
                    <Card2 codigo="chantily" descricao="Chantily (extra do Café)" preco="R$ 1,50"> </Card2>
                    <Card2 codigo="suco" descricao="Suco Natural" preco="R$ 6,20"> </Card2>
                    <Card2 codigo="salgado" descricao="Salgado" preco="R$ 7,25"> </Card2>
                    <Card2 codigo="combo1" descricao="1 Suco e 1 Sanduíche" preco="R$ 9,50"> </Card2>
                    <Card2 codigo="combo2" descricao="1 Café e 1 Sanduíche" preco="R$ 7,50"> </Card2>
                    </table>
                        </Card>
                      </div>
                  </div>
                </div>
           

<div className="row">
    <div className="col-md-6">
        <div className="bs-component">
            <br></br>

            <FormGroup label="Qual a forma de pagamento? " htmlFor="inputPagamento">
                                <input type="Text" 
                                id="inputPagamento"
                                className="form-control"
                                value={this.state.pagamento}
                                onChange={e => this.setState({pagamento: e.target.value})}
                                placeholder="Digite a forma de pagamento:" />
            </FormGroup>

            <FormGroup label="Qual o código do produto? " htmlFor="inputProduto">
                                <input type="Text" 
                                id="inputProduto"
                                className="form-control"
                                value={this.state.produto}
                                onChange={e => this.setState({produto: e.target.value})}
                                placeholder="Digite o código do produto:" />
            </FormGroup>


            <button
                onClick={this.handleCompra}
                type="button"
                className="btn btn-success">
                <i className="pi pi-search"></i> Comprar
            </button>
        </div>
    </div>
</div>
</div>
          )
    }

    styles = {
        colMd6:{
            position: 'relative',
            left: '300x'
        }
    };


}