import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Home } from '../../pages/home.page.js'

beforeEach(() => {

  Given(`que esteja na página principal`, () => {
    return Home.acessar_site()
  });
  
  Then(`clique no botão para cadastro`, () => {
    return Home.acessar_cadastrar();
  });
  
  Then(`deve ser redirecionado à tela de cadastro`, () => {
    return true;
  });
  
});

When(`preencher os dados do tipo {string}`, (args1) => {
  return Cadastro.preencher_cadastro_type()
});

Then(`deverá ser exibido a mensagem {string}`, (args1) => {
  console.log(args1);
  return true;
});
