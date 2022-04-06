Feature: Fazer Cadastro
  Como usuario com acesso a aplicação
  Quero criar conta pra fazer entrega
        
        Background: Criar cadastro
            Given que esteja na página principal
            And clique no botão para cadastro
            Then deve ser redirecionado à tela de cadastro
         
         Scenario Outline: Cadastrar Dados
             When preencher os dados do tipo "<type>"
             Then deverá ser exibido a mensagem "<msg>"
             Examples:
             | type             | msg                                                                                                         |
             | sem cpf          | É necessário informar o CPF                                                                                 |
             | cpf invalido     | Oops! CPF inválido                                                                                          |
             | sem email        | É necessário informar o email                                                                               |
             | email invalido   | Inclua um "@" no endereco de email.                                                                         |
             | sem cep          | É necessário informar o CEP                                                                                 |
             | sem numero       | É necessário informar o numero                                                                              |
             | sem metodo       | Selecione o método de entrega                                                                               |
             | sem cnh          | Adicione uma foto da sua CNH                                                                                |
             | valido carro     | Ai sim! Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato. |
             | valido bicicleta | Ai sim! Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato. |
             | valido moto      | Ai sim! Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato. |