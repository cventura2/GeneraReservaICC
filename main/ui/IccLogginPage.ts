import { By, PageElement } from '@serenity-js/web';

export const IccLogginPage = {
    usuarioInput: () =>
        PageElement.located(By.xpath("//*[@id='TxtUsuario']")).describedAs('campo usuario'),

    contraInput: () =>
        PageElement.located(By.xpath("//*[@id='TxtPassword']")).describedAs('campo contraseña'),

    clicInicioSesion: () =>
        PageElement.located(By.xpath("//*[@id='BtnAceptar']")).describedAs('ingresar al sistema de icc'),

    iframeIcc:() =>
        PageElement.located(By.xpath("/html/body/form/div[3]/div[3]/div/div[2]/iframe")).describedAs('validacion bienvenido'),

    bienvenidoIccLabel: () =>
        PageElement.located(By.xpath("//*[@id='LblTituloPagina']")).describedAs('bienvenido icc'),

    salidaIframe:() =>
        PageElement.located(By.xpath("//form[@action = './default.aspx']")).describedAs('salida del Iframe'),


    switchReserva:() =>
        PageElement.located(By.xpath("//form[@action = './default.aspx']")).describedAs('Ingreso al iframe de reserva') ,

    
    clicGridReservaciones: () =>
        PageElement.located(By.xpath("//*[@id='WebPalaceMenu_ctl02_PnlTitle']")).describedAs('clic menu reservaciones'),

    clicModuloReserva: () =>
        PageElement.located(By.xpath("//*[@id='WebPalaceMenuctl02UWTvwMenu_3']/img ")).describedAs('despliega las opciones dle modulo de reserva'),


    clicIngresoIcc: () =>
        PageElement.located(By.xpath("//div[@id='WebPalaceMenuctl02UWTvwMenu_3_19']/span[2]")).describedAs('Ingreso para llenar datos para la reservacion'),

    ingresaAfiliacion: () =>
        PageElement.located(By.xpath("/html/body/div[2]")).describedAs('ingreso numero de aplicacion'),
        







}