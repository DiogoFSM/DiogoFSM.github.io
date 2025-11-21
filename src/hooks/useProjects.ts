
import { translate } from "@docusaurus/Translate";
import {Status} from "../Definitions";

export default function useProjects() {

    return [
        {
            status: Status.CONCLUDED,
            date: translate({
                id: "projects.1.date",
                message: "Dezembro 2023"
            }),
            author: "Márcia Matias",
            icon: "pepicons-pop:checkmark-circle-filled",
            color: 'var(--primary-color)',
            title: translate({
                id: "projects.1.title",
                message: "Tese de Mestrado: Sistema de Apoio à Decisão para as Áreas Integradas de Gestão da Paisagem"
            }),
            link: "https://run.unl.pt/handle/10362/163563",
            description: translate({
                id: "projects.1.description",
                message: "Esta tese de mestrado foi a tese que deu origem ao LAND IT. As funcionalidades principais que existem no LAND IT foram desenvolvidas durante este tema, tais como, análise e comparação de cenários, partilha de cenários e criação e edição de geometrias nos cenários. O caso de uso utilizado para o seu desenvolvimento foi o concelho de Mação e as suas nove AIGP."
            }),
        },
        {
            status: Status.CONCLUDED,
            date: translate({
                id: "projects.2.date",
                message: "Janeiro 2025"
            }),
            icon: "pepicons-pop:checkmark-circle-filled",
            color: 'var(--primary-color)',
            title: translate({
                id: "projects.2.title",
                message: "Tese de Mestrado: Modelos de Sustentabilidade Económica para Ocupações do Solo no Território Rural"
            }),
            author: "Lucas Almeida, Maria Catarina Pereira, Mariana Godinho, Margarida Pinto, Nuno Baptista",
            link: "https://run.unl.pt/handle/10362/181590",
            description: translate({
                id: "projects.2.description",
                message: "Esta tese foca-se no pós reordenamento do território onde o seu objetivo é o desenvolvimento de modelos económicos para calcular os lucros e gastos que as ocupações do solo terão nos anos seguintes à transformação. Nesta tese foram abordados os seguintes usos do solo: pinheiro-bravo, eucalipto, sobreiro e olivais. Além disso foi realizada uma análise de viabilidade de instalação de painéis solares no concelho de Mação."
            }),
        },
        {
            status: Status.CONCLUDED,
            date: translate({
                id: "projects.3.date",
                message: "Junho 2025"
            }),
            icon: 'pepicons-pop:checkmark-circle-filled',
            color: 'var(--primary-color)',
            title: translate({
                id: "projects.3.title",
                message: "Artigo na AGILE: LAND IT: Um Sistema de Apoio à Decisão para Otimizar Estratégias de Planeamento do Território"
            }),
            author: "Márcia B. Matias, Cristina D. Henriques, Carlos Viegas Damásio, Fernando Birra, João Moura Pires",
            description: translate({
                id: "projects.3.description",
                message: "Portugal tem enfrentado grandes incêndios florestais, o que levou à criação das AIGP, que visam tornar a paisagem mais resiliente. Para otimizar este processo foi criado o LAND IT, um sistema de apoio à decisão que facilita a criação e gestão de propostas de desenho territoriais. Permite não só a comparação de cenários como evita o aparecimento de erros de input. O municipio de Mação foi um caso de estudo deste projeto e demonstrou resultados muito positivos."
            }),
            link: 'https://agile-giss.copernicus.org/articles/6/39/2025/'
        },
        {
            status: Status.CONCLUDED,
            date: translate({
                id: "projects.4.date",
                message: "Junho 2025"
            }),
            icon: 'pepicons-pop:checkmark-circle-filled',
            color: 'var(--primary-color)',
            title: translate({
                id: "projects.4.title",
                message: "Tese de Mestrado: Ferramentas Inteligentes para Edição de Propostas de Uso do Território"
            }),
            author: "Francisco Freire",
            description: translate({
                id: "projects.4.description",
                message: "O objetivo deste tema é acrescentar ferramentas de edição ao LAND IT, nomeadamente ferramentas para edição de geometrias, ferramentas de verificação topológica e ferramentas inteligentes que auxiliem o utilizador no processo de criação das OIGP, como, por exemplo, um sistemas de filtros."
            }),
            link: 'https://drive.google.com/open?id=1hn60KutOxTpWiLOk1xnhBUHa0BQUTXBC&usp=drive_fs'
        },
        {
            status: Status.ONGOING,
            date: translate({
                id: "projects.5.date",
                message: "Em curso"
            }),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: translate({
                id: "projects.5.title",
                message: "Tese de Mestrado: LAND IT - Edição Assistida e Colaborativa do Reordenamento do Território"
            }),
            author: "Pedro Grilo",
            description: translate({
                id: "projects.5.description",
                message: "Atualmente o LAND IT contém funcionalidades de colaboração muito rudimentares, como a utilização e temporizadores para realizar requests. O objetivo desta tese é indenticar e melhorar todos os casos de uso em que é essencial existirem atualizações em tempo real. Além disso, neste tema será também abordada a edição colaborativa no mapa, de modo a permitir que vários utilizadores desenhem geometrias num mesmo cenário ao mesmo tempo."
            }),
        },
        {
            status: Status.ONGOING,
            date: translate({
                id: "projects.6.date",
                message: "Em curso"
            }),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: translate({
                id: "projects.6.title",
                message: "Tese de Mestrado: LAND IT - Análise e Visualização de Cenários"
            }),
            author: "Carolina Salazar",
            description: translate({
                id: "projects.6.description",
                message: "O LAND IT contém alguns dashboards com dados estatísticos, feitos no início do projeto. Atualmente, alguns destes gráficos encontram-se desatualizados e outros temas nem são abordados pelas estatísticas. Assim sendo, o objetivo desta tese é melhorar os dashboards existentes e propor novos."
            }),
        },
        {
            status: Status.ONGOING,
            date: translate({
                id: "projects.7.date",
                message: "Em curso"
            }),
            icon: 'pepicons-pop:arrows-spin-circle-filled',
            color: '#607D8B',
            title: translate({
                id: "projects.7.title",
                message: "Tese de Mestrado: LAND IT - Desenvolvimento de um Sistema de Extensões"
            }),
            author: "Diogo Moreira",
            description: translate({
                id: "projects.7.description",
                message: "Sendo o LAND IT uma plataforma em crescimento e que tenta sempre acompanhar o processo de desenvolvimento das AIGP são sempre necessárias novas funcionalidades. Para facilitar esta constante integração, o objetivo deste tema é criar um sistema de extensões para que seja possível adicionar novas funcionalidades de forma modular e sem alterar o código base do sistema."
            }),
        }
    ];
}