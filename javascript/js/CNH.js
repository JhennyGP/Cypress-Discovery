function verificarIdade(){
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    var idadeNum = parseInt(idade.value)
    if(idade.value.length == 0){
        alert("Idade é um campo obrigatório.")
        return
    }

    if(idadeNum >= 18){
        alert('Ok, você pode tirar sua CNH.')
    } else if (idadeNum > 4){
        alert('Você é menor de idade, sugiro andar de bike.')
    } else{
        alert('Você ainda é um nenê')
    }
}