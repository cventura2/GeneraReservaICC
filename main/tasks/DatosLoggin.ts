import { Task } from "@serenity-js/core"
import { Click, Enter, Press } from "@serenity-js/web"
import { IccLogginPage } from "../../main/ui/IccLogginPage.ts"




export class DatosLoggin {
    public static esUsuario = (usuario: string) =>
        Task.where(`#actor ingresa usuario ${usuario} en el cuadro de texto`,
            Enter.theValue(usuario).into(IccLogginPage.usuarioInput()),         
            Press.the('Tab')
        )
        public static esContra = (contraseña: string) =>
        Task.where(`#actor ingresa contraseña ${contraseña} en el cuadro de texto`,
            Enter.theValue(contraseña).into(IccLogginPage.contraInput())
        )
        public static destino = () =>
        Task.where(`#actor hace clic en el campo loggin`,
            Click.on(IccLogginPage.clicInicioSesion())
        )

        public static openMenureserva = () =>
            Task.where(`#actor hace clic en el modulo de reservaciones`,
                Click.on(IccLogginPage.clicGridReservaciones())
            )

        public static despliegaOpcionesReserva = () =>
            Task.where(`#actor hace clic en el modulo de reservaciones`,
                    Click.on(IccLogginPage.clicModuloReserva())
                )

        public static clicReservaICC = () =>
            Task.where(`#actor hace clic y despliega el el modulo para ingresar datos de reservaciones`,
                        Click.on(IccLogginPage.clicIngresoIcc())
                    )
        
        public static iframeAfiliacion = () =>
                Task.where(`#actor ingresa visualiza el modulo para ingresar el numero de afiliacion`,
                            Click.on(IccLogginPage.ingresaAfiliacion())
                        )
}
