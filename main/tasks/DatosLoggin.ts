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
}
