Feature: Genera Reserva

    Scenario: Ingresar al sistema de Intelligence Call Center
        Given Cesar se encuentra en la web de intelligence call center
        When ingresa usuario "cventura" 
        And  ingresa contraseña "4"
        And da clic en campo loggin
        Then se debe visualizar la pantalla principal para generar la reserva se visualiza el combo set member 
        And ingresar membresia "4030394"
