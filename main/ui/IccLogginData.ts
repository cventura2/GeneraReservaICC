import { By, PageElement } from "@serenity-js/web";


export const IccLogginData = {
    usuarioInput: () =>
        PageElement.located(By.xpath("//*[@id='TxtUsuario']")).describedAs('campo usuario'),

    contraInput: () =>
        PageElement.located(By.xpath("//*[@id='TxtPassword']")).describedAs('campo contraseña'),

    clicLoggin: () =>
        PageElement.located(By.xpath("//*[@id='BtnAceptar']")).describedAs('clic ingresoa  icc'),
    
    clicGridReservaciones: () =>
        PageElement.located(By.xpath("//*[@id='WebPalaceMenu_ctl02_PnlTitle']")).describedAs('clic menu reservaciones'),

    clicModuloReserva: () =>
        PageElement.located(By.xpath("//*[@id='WebPalaceMenuctl02UWTvwMenu_3']/img "))
                    .describedAs('despliega las opciones del modulo de reserva'),


    clicIngresoIcc: () =>
        PageElement.located(By.xpath("//div[@id='WebPalaceMenuctl02UWTvwMenu_3_19']/span[2]"))
                    .describedAs('Ingreso para llenar datos para la reservacion'),

    iframeIcc:() =>
        PageElement.located(By.xpath("/html/body/form/div[3]/div[3]/div/div[2]/iframe"))
                    .describedAs('set member'),
    

    membresiaInput: () =>
        PageElement.located(By.xpath("//*[@id='TxtApplication']")).describedAs('Ingreso de membresia')
}
