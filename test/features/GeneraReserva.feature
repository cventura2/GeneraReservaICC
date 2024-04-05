Feature: Genera Reserva

    Scenario: Ingresar al sistema de Intelligence Call Center
        Given Cesar se encuentra en la web de intelligence call center
        When ingresa usuario "cventura" 
        And  ingresa contraseña "4"
        And  cesar hace clic en iniciar sesion
        Then debe visualizar  mensaje "Bienvenido !"
        And debe seleccionar el modulo de reservaciones
        And ingresar a la pantalla principal para llenar los datos