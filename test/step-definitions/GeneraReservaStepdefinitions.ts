import { Given, When, Then } from "@cucumber/cucumber";
import { Actor, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate, Switch } from "@serenity-js/web";
import { DatosLoggin } from "../../main/tasks/DatosLoggin.ts";
import { Welcome } from "../../main/questions/welcome.ts";
import { IccLogginPage } from "../../main/ui/IccLogginPage.ts";


   Given('{actor} se encuentra en la web de intelligence call center',{timeout: 5 * 5000}, async (actor: Actor) => {
        await actor.attemptsTo(
            Navigate.to("http://webtest19-8081.web.palaceqa.local/webpalace/logon/wfrmlogin.aspx")
        )
       });
    
       When('ingresa usuario {string}', {timeout: 5 * 5000}, async (usuario: string) => {
            await actorInTheSpotlight().attemptsTo(
                DatosLoggin.esUsuario(usuario)
            )
         
       });
       When('ingresa contraseña {string}', {timeout: 5 * 5000}, async (contraseña: string) => {
             await actorInTheSpotlight().attemptsTo(
                DatosLoggin.esContra(contraseña)
        )
     
         });
        When('cesar hace clic en iniciar sesion',{timeout: 5 * 5000}, async () => {
            await actorInTheSpotlight().attemptsTo(
                DatosLoggin.destino()

            )

                });
    
        Then('debe visualizar  mensaje {string}',{timeout: 10* 5000}, async (bienvenido: string) =>{
            await actorInTheSpotlight().attemptsTo(
                //Switch.to(IccLogginPage.iframeIcc()),
               // Welcome.esBienvenido(bienvenido)
               DatosLoggin.openMenureserva(),
               DatosLoggin.despliegaOpcionesReserva(),
               DatosLoggin.clicReservaICC(),
               Switch.to(IccLogginPage.iframeIcc())
               //DatosLoggin.iframeAfiliacion()
               

            )
                });

        
        /*Then('debe seleccionar el modulo de reservaciones',{timeout: 10* 5000}, async () => {
                await actorInTheSpotlight().attemptsTo(//form[@action = "./default.aspx"
                    Switch.to(IccLogginPage.salidaIframe()),
                    Switch.to(IccLogginPage.switchReserva())
                    
                )
                       });
                    
        Then('ingresar a la pantalla principal para llenar los datos', function () {
                         // Write code here that turns the phrase above into concrete actions
                         return 'pending';
                       });*/