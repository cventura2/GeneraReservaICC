import { Duration, Task, Wait } from "@serenity-js/core";
import { Ensure, equals} from "@serenity-js/assertions";
import { isVisible } from "@serenity-js/web";
import { IccLogginPage } from "../../main/ui/IccLogginPage.ts";



export class Welcome {
    public static esBienvenido = (bienvenido: string) =>
        Task.where(`#actor debe visualizar la palabra  ${bienvenido} en la pantalla`,
        Wait.upTo(Duration.ofSeconds(5)).until(IccLogginPage.bienvenidoIccLabel(),isVisible()),
            Ensure.that(IccLogginPage.bienvenidoIccLabel().text(), equals(bienvenido))
        )
}