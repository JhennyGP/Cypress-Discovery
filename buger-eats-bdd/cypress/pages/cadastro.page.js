import Base from './_base.page.js'
import { EL_HOME } from './components/burgereats.elements.js'

export class Home extends Base {
    static acessar_site() {
        cy.visit('/')
    }
    
    static validar_home(){
        super.validateElementText(EL_HOME.TXT_TITULO, 'Seja um parceiro entregador pela Buger Eats')
        super.validateElementText(EL_HOME.TXT_BODY, 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
        super.verifyIfElementExists(EL_HOME.BTN_CADASTRAR)
    }
}