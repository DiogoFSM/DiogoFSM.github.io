import Translate from "@docusaurus/Translate";
import styles from "./presentation.module.css"
import React from "react";

export const Presentation = () => {

    return (
        <div className={styles.mainPresentation}>
            <span className={styles.text}>
               <Translate id="presentation.1">
                    O LAND IT é um sistema de apoio à decisão espacial, em formato de web app, que tem como principal objetivo auxiliar as entidades gestoras das OIGP a planear e executar um reordenamento do território. Com este reordenamento será possível melhorar a eficiência e eficácia da gestão do território, bem como tornar a paisagem mais resiliente a grandes incêndios florestais, como o caso do município de Mação.
               </Translate>
               <br />
               <Translate id="presentation.2">
                    Este sistema permite aos seus utilizadores desenvolverem cenários de reordenamento do território, bem como definir as operações a aplicar durante a transformação. Além disso, os utilizadores podem partilhar cenários entre si e analisá-los e compará-los estatisticamente, de forma a escolher a melhor solução para o território.
               </Translate>
            </span>
            <img className={styles.image} src={"images/fire.jpg"} alt={"LAND IT"}/>
        </div>
    )
}