import faker, { fake } from 'faker'

export class Factory {

    static cadastro(type) {
        switch (type) {
            case 'valid':
                return {
                    "nome": faker.name.firstName(),
                    "cpf": '48212316777',
                    "email": faker.internet.email(),
                    "endereco":'Rua Joaquim Floriano',
                    "cep": '04534011',
                    "num": '1000',
                    "compl": '14',
                    "bairro": 'Itaim Bibi',
                    "uf": 'São Paulo/SP',
                    "whatsapp": faker.phone.phoneNumber(),
                    "metodo_entrega": 'Moto',
                    "cnh": 'cnh-digital.jpg'
                }
            case 'invalid':
                return {
                    "firstName": "Jennifer",
                    "lastName": "Compasso",
                    "email": "jennifer@compasso.com.br",
                    "address": "Av Sen Teotonio Vilela",
                    "city": "Sao Paulo",
                    "state": "SP",
                    "zipCode": "01233001",
                    "phoneNumber": "5511991011010",
                    "ssn": "123456789",
                    "userName": "Jennifer.Compasso",
                    "password": "teste",
                    "repeatedPassword": "teste"
                }
            default:
                return {
                    notfound: "The type was not found, please verify!"
                }
        }
    }
}