function verificartime() {
    let produto = Number(document.getElementById("time").value);
    let mensagem = "";

    switch (produto) {
        case 1:
            mensagem = "Você escolhheu Vítoria";
            break;
            case 2:
                mensagem = "Você escolheu Bahia";
                break;
                case 3:
                    mensagem = "Você escolheu Santoos";
                    break;
                    default:
                        mensagem = "Código invalido";
    }
    document.getElementById("resultado").innerHTML = mensagem;
}
function vpedido() {
    let produto = Number(document.getElementById("produto").value);
    let mensagem = "";
    switch (produto) {
        case 1:
            mensagem = "Você escolheu Hambúrguer";
            break;
            case 2:
            mensagem = "Você escolheu Pizza";
            break;
            case 3:
                mensagem = "Você escolheu Refrigerante";
                break;
                default:
                    mensagem = "Código invalido";
    }
    document.getElementById("pedido").innerHTML = mensagem
}

function calcular(){
    let produto = Number(document.getElementById("pdt").value);
    let quantidade = Number(document.getElementById("qtd").value);

    let nome = "";
    let preco = 0;
    let total = 0;
    let mensagem = "";

    switch (produto) {
        case 1:
            nome = "Hambúrguer";
            preco = 10;
            total = preco * quantidade;

            if (quantidade >= 3) {
                mensagem = "Você ganhou desconto";
                total = total * 0.9;
            } else {
                mensagem = "Compre 3 ou mais para ganhar desconto";
            }
            break;
            case 2:
                nome = "Pizza";
                preco = 20;
                total = preco * quantidade;
                if (quantidade >=2) {
                    mensagem = "Frete grstís";
                } else {
                    mensagem = "Frete será cobrado";
                }
                break;
                case 3:
                    nome = "Refrigerante";
                    preco = 5;
                    total = preco * quantidade;
                    if (quantidade >= 5) {
                        mensagem = "Leve 5 e page 4";
                    } else {
                        mensagem = "Promoção a patir de 5 unidades";
                    }
                    break;
                    default:
                        mensagem = "Promoção invalida";
    }
    document.getElementById("resultado2").innerHTML = "pdt" + nome + "<br>" + "qtd" + quantidade + "<br>" + "total R$" + total.toFixed(2) + "<br>" + mensagem;
}