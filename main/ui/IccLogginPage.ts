import { By, PageElement } from '@serenity-js/web';

export const IccLogginPage = {
    usuarioInput: () =>
        PageElement.located(By.xpath("//*[@id='TxtUsuario']")).describedAs('campo usuario'),
    
    contraInput: () =>
        PageElement.located(By.xpath("//*[@id='TxtPassword']")).describedAs('campo contraseña'),

    clicInicioSesion: () =>
        PageElement.located(By.xpath("//*[@id='BtnAceptar']")).describedAs('ingresar al sistema de icc'),

    bienvenidoIccLabel: () =>
    PageElement.located(By.xpath("//*[@id='LblTituloPagina']")).describedAs('bienvenido icc'),

    iframeIcc:() =>
        PageElement.located(By.xpath("/html/body/form/div[3]/div[3]/div/div[2]/iframe")),

       // PageElement.located(By.xpath("//*[@id='LblTituloPagina']")).describedAs('bienvenido icc'),

        

    /*resultadoObtenidoLabel: () =>
        PageElement.located(By.xpath("//span[@class='ryNqvb']")).describedAs('palabra traducida'),

    seleccionarIdioma: () =>
        PageElement.located(By.xpath("//button[@id='i16']")).describedAs('label la palabra traducida'),*/
    
}