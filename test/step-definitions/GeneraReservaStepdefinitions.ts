import { Actor, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate, Switch } from "@serenity-js/web";
import { Given, When, Then } from "@cucumber/cucumber";
import { DatosLoggin, DatosReserva } from "../../main/tasks/DatosLoggin.ts";
import { IccLogginData } from "../../main/ui/IccLogginData.ts";

    Given('{actor} se encuentra en la web de intelligence call center',{timeout: 5 * 5000}, async (actor: Actor) => {
        await actor.attemptsTo(
            Navigate.to("http://webtest19-8081.web.palaceqa.local/webpalace/logon/wfrmlogin.aspx")
        )

      });
    
    When('ingresa usuario {string}',{timeout: 5 * 5000}, async (usuario: string) => {
        await actorInTheSpotlight().attemptsTo(DatosLoggin.esUsuario(usuario)) 

      });
    
    When('ingresa contraseña {string}',{timeout: 7 * 5000}, async (contraseña: string) => {
        await actorInTheSpotlight().attemptsTo(DatosLoggin.esContra(contraseña))
      });

    When('da clic en campo loggin',{timeout: 5 * 5000}, async () => {
        await actorInTheSpotlight().attemptsTo(
            DatosLoggin.clicLoggin()
        )
           });


    Then('se debe visualizar la pantalla principal para generar la reserva se visualiza el combo set member',{timeout: 10 * 5000}, async () => {
        await actorInTheSpotlight().attemptsTo(
            DatosLoggin.openMenureserva(),
            DatosLoggin.despliegaOpcionesReserva(),
            DatosLoggin.clicReservaICC(),
            Switch.to(IccLogginData.iframeIcc()),
        )
              });
           
    Then('ingresar membresia {string}',{timeout: 10 * 5000}, async (membresia: string) => {
        await actorInTheSpotlight().attemptsTo(
            DatosReserva.esMembresia(membresia)
        )

              });


    



           
    
