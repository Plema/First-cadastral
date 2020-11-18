
ymaps.ready(function () {
    var myMap = new ymaps.Map('map-marshrut', {
        center: [55.713846, 37.721843],
        zoom: 9,
        // Добавим кнопку для построения маршрутов на карту.
        controls: ['routeButtonControl']
    });

    var control = myMap.controls.get('routeButtonControl');

    // Зададим координаты пункта отправления с помощью геолокации.
    control.routePanel.geolocate('from');
    
    // Откроем панель для построения маршрутов.
    control.state.set('expanded', true);
});


ymaps.ready(function () {
    var myMap2 = new ymaps.Map('big-map', {
            center: [55.713846, 37.721843],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        })
    
        myPlacemark = new ymaps.Placemark([55.713989, 37.718659], {
        //   balloonContent: 'пр-кт Волгоградский д. 43 корп. 3',
        //   hintContent: 'пр-кт Волгоградский д. 43 корп. 3',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/myIcon.png',
            iconImageSize: [60, 65],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
        myMap2.geoObjects
            .add(myPlacemark);
    });
