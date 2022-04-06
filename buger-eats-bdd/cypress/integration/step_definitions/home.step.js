import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Home } from '../../pages/home.page.js'

When(`o usuário acessar a aplicação pela URL`, () => {
	return Home.acessar_site()
});

Then(`deverá ser redirecionado à tela principal`, () => {
	return Home.validar_home()
});