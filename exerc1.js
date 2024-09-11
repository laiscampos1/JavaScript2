//Exercício realizado por Lais Campos e Pamella Sotomayor

function exerc1() {
            let obj = {numeros: [1,3,7,9,-1,0,4], qt: 7};
            obj.numeros.sort();
            
            let container = document.createElement('div');
            let somaTotal = 0;

            for(let i = 0; i < obj.qt; i++){
                let linha = document.createElement('div');
                linha.innerHTML = obj.numeros[i];
                somaTotal = somaTotal + obj.numeros[i];
                container.appendChild(linha);
            }
            let qntDiv = document.createElement('div');
            qntDiv.innerHTML = "Quantidade: " + obj.qt;
            let somaDiv = document.createElement('div');
            somaDiv.innerHTML = "Soma Total: " + somaTotal;
            container.appendChild(qntDiv);
            container.appendChild(somaDiv);
            document.body.appendChild(container);
    }

//Laís e Pamella
