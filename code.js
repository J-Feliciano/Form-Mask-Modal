var celular = document.getElementById('celular');

        celular.addEventListener("input", ()=>{
            limparValor = celular.value.replace(/\D/g, "").substring(0,11);

            var numerosArray = limparValor.split("");//split transforma a string em indices respectivos a um array

            var numeroFormatado = "";

            if(numerosArray.length > 0){
                numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
            }
            if(numerosArray.length > 2){
                numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
            }
            if(numerosArray.length > 7){
                numeroFormatado += `-${numerosArray.slice(
                    7,11).join("")}`;
            }

            celular.value = numeroFormatado;
            
        })

var cep = document.getElementById('cep')
        
        cep.addEventListener('input', ()=>{
            limparValor = cep.value.replace(/\D/g, "").substring(0,8)

            var stringArrayCep = limparValor.split("") 

            var stringFormatadaCep = ""

            if(stringArrayCep.length > 0){
                stringFormatadaCep += `${stringArrayCep.slice(0,2).join("")}.`
            }
            if(stringArrayCep.length > 2){
                stringFormatadaCep += `${stringArrayCep.slice(2,5).join("")}-`
            }
            if(stringArrayCep.length > 3){
                stringFormatadaCep += `${stringArrayCep.slice(5,8).join("")}`
            }
            
            cep.value = stringFormatadaCep
        })

var cpf = document.getElementById('cpf')

        cpf.addEventListener('input', ()=>{
            limparValor =  cpf.value.replace(/\D/g, "").substring(0,11)
            
            var stringArrayCpf = limparValor.split("")
            
            var stringFormatadaCpf = "" 
            
            if(stringArrayCpf.length > 0){
                stringFormatadaCpf += `${stringArrayCpf.slice(0,3).join("")}`
            }
            
            if(stringArrayCpf.length > 3){
                stringFormatadaCpf += `.${stringArrayCpf.slice(3,6).join("")}`
            }

            if(stringArrayCpf.length > 6){
                stringFormatadaCpf += `.${stringArrayCpf.slice(6,9).join("")}`
            }

            if(stringArrayCpf.length > 9){
                stringFormatadaCpf += `-${stringArrayCpf.slice(9,11).join("")}`
            }
            
            cpf.value = stringFormatadaCpf
        })

var cnpj = document.getElementById('cnpj')
        cnpj.addEventListener('input', ()=>{
            limparValor = cnpj.value.replace(/\D/g, "").substring(0,11)

            var stringArrayCnpj = limparValor.split("")

            var stringFormatadaCnpj = ""

            if(stringArrayCnpj.length > 0){
                stringFormatadaCnpj += `${stringArrayCnpj.slice(0,2).join("")}`
            }
            if(stringArrayCnpj.length > 2){
                stringFormatadaCnpj += `.${stringArrayCnpj.slice(2,5).join("")}`
            }
            if(stringArrayCnpj.length > 5){
                stringFormatadaCnpj += `.${stringArrayCnpj.slice(5,8).join("")}`
            }
            if(stringArrayCnpj.length > 8){
                stringFormatadaCnpj += `/0001-${stringArrayCnpj.slice(8,11).join("")}`//O ultimo numero da erro
            }
            cnpj.value = stringFormatadaCnpj
        })

var cod = document.getElementById('codigo')
        cod.addEventListener('input', ()=>{
            limparValor = cod.value.replace(/\D/g, "").substring(0,13)

            var stringArrayCod = limparValor.split("")

            var stringFormatadaCod = ""

            if(stringArrayCod.length > 0){
                stringFormatadaCod += `${stringArrayCod.slice(0,2).join("")}`
            }
            if(stringArrayCod.length > 2){
                stringFormatadaCod += `_${stringArrayCod.slice(2,4).join("")}`
            }
            if(stringArrayCod.length > 4){
                stringFormatadaCod += `//${stringArrayCod.slice(4,7).join("")}`
            }
            if(stringArrayCod.length > 7){
                stringFormatadaCod += `-${stringArrayCod.slice(7,10).join("")}`
            }
            
            if(stringArrayCod.length >= 10){
                stringFormatadaCod += `.9.${stringArrayCod.slice(10,13).join("")}`
            }
            cod.value = stringFormatadaCod
        })