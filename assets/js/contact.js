ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map-marshrut', {
            center: [55.713989, 37.718659],
            zoom: 1
        }, {
            searchControlProvider: 'yandex#search'
        });


    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
        var posPerson1 = result.geoObjects.position[0];
        var posPerson2 = result.geoObjects.position[1];

        var pointA = [posPerson2, posPerson1],
            pointB = [55.713989, 37.718659],
        multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
                pointA,
                pointB
            ],
            params: {
                //Тип маршрутизации - пешеходная маршрутизация.
                routingMode: 'pedestrian'
            }
        }, {
            boundsAutoApply: true
        });
        // var changePointsButton = new ymaps.control.Button({
        //     data: {content: "Поменять местами точки А и В"},
        //     options: {selectOnClick: true}
        // });
    
        // // Объявляем обработчики для кнопки.
        // changePointsButton.events.add('select', function () {
        //     multiRoute.model.setReferencePoints([pointB, pointA]);
        // });
    
        // changePointsButton.events.add('deselect', function () {
        //     multiRoute.model.setReferencePoints([pointA, pointB]);
        // });
    
        // // Создаем карту с добавленной на нее кнопкой.
        // var myMap = new ymaps.Map('map', {
        //     center: [55.713989, 37.718659],
        //     zoom: 12,
        //     controls: [changePointsButton]
        // }, {
        //     buttonMaxWidth: 300
        // });
    
        myMap.geoObjects.add(multiRoute);

    });

}
