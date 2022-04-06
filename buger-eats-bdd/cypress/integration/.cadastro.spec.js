describe('Cadastro', ()=> {
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,1080)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Jhenny',
            cpf: '48212316777',
            email: 'jhenny@gc.com',
            whatsapp: '1199123456789',
            endereco: {
                cep: '04534011',
                endereco: 'Rua Joaquim Floriano',
                num: '1000',
                compl: '14',
                bairro: 'Itaim Bibi',
                uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.num)
        cy.get('input[name="address-details"]').type(entregador.endereco.compl)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.endereco)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        cy.get('input[accept^="image"]').attachFile('/images/'+ entregador.cnh)

    })
});