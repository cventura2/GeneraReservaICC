import { Task } from "@serenity-js/core";
import { Click, Enter, Press } from "@serenity-js/web";
import { IccLogginData } from "../../main/ui/IccLogginData.ts";



export class DatosLoggin{
    public static esUsuario = (usuario: string) =>
        Task.where(`#actor ingresa usuario ${usuario} en cuadro de texto usuario`,
            Enter.theValue(usuario).into(IccLogginData.usuarioInput()),
            Press.the('Tab')
        )

    public static esContra = (contraseña: string) =>
        Task.where (`#actor ingresa  contraseña ${contraseña} en el cuadro de contraseña`,
            Enter.theValue(contraseña).into(IccLogginData.contraInput()),
            Press.the('Tab')
        )

    public static clicLoggin = () =>
        Task.where(`#actor hace clic en loggin para ingresar a icc`,
            Click.on(IccLogginData.clicLoggin())

        )
    
    public static openMenureserva = () =>
        Task.where(`#actor hace clic en el modulo de reservaciones`,
            Click.on(IccLogginData.clicGridReservaciones())
            )

    public static despliegaOpcionesReserva = () =>
        Task.where(`#actor hace clic en el modulo de reservaciones`,
            Click.on(IccLogginData.clicModuloReserva())
                    )
            
    public static clicReservaICC = () =>
        Task.where(`#actor hace clic y despliega el el modulo para ingresar datos de reservaciones`,
             Click.on(IccLogginData.clicIngresoIcc())
                                )
}


export class DatosReserva {
    public static esMembresia = (membresia: string) =>
        Task.where(`#actor ingresa membresia ${membresia} en set member`,
            Enter.theValue(membresia).into(IccLogginData.membresiaInput())
)

}