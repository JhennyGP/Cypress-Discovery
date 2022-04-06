Feature: Visitar site Burger-Eats

    Como usuário
    Desejo acessar o site Burger-Eats
    Para usufruir da aplicação

    Scenario: Validar página principal
        When o usuário acessar a aplicação pela URL
        Then deverá ser redirecionado à tela principal
