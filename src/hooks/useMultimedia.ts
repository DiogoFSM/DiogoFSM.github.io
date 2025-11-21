import {translate} from '@docusaurus/Translate';

export default function useMultimedia() {

    return [
        {
            name: translate({
                id: "multimedia.main-page",
                message: "Edição de Cenários"
            }),
            image: 'multimedia/main-menu.png'
        },
        {
            name: translate({
                id: "multimedia.stats1",
                message: "Estatísticas - Áreas de Ocupação do Solo"
            }),
            image: 'multimedia/stats.png'
        },
        {
            name: translate({
                id: "multimedia.stats2",
                message: "Estatísticas - Transformações"
            }),
            image: 'multimedia/stats2.png'
        },
        {
            name: translate({
                id: "multimedia.transformations",
                message: "Edição de Transformações"
            }),
            image: 'multimedia/transformations.png'
        },
        {
            name: translate({
                id: "multimedia.addPolygon",
                message: "Adicição de Polígono à POSP"
            }),
            image: 'multimedia/add_polygon_to_POSP.mp4'
        },
        {
            name: translate({
                id: "multimedia.applyFilters",
                message: "Aplicação de Filtros"
            }),
            image: 'multimedia/apply filters.mp4'
        },
        {
            name: translate({
                id: "multimedia.polygonTransformation",
                message: "Definir Transformação de um Polígono"
            }),
            image: 'multimedia/set polygon transformation.mp4'
        }
    ];
}