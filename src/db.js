const items = [
  {
    "id": "1",
    "title": "Тигровый, чёрный, золотой",
    "author": "Елена Михалкова",
    "genre": "detective",
    "image": "https://2.downloader.disk.yandex.ru/preview/a3047aa290dc75c092994a4ac05624f87524d04531f3e4d49db45d91e55565f7/inf/_ZDZnx3qC3PM4OgGkwVNsymTaXnQuYnPY3VzAsrZylh-qYlc6pOOxpXNE2DHXpMIwMrZzoVsEqvOg8imLshBNg%3D%3D?uid=166138279&filename=detective-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "700",
    "description": "item 1 descr"
  },
  {
    "id": 2,
    "title": "Собачка Соня на даче",
    "author": "Андрей Усачев",
    "genre": "fairy tale",
    "image": "https://3.downloader.disk.yandex.ru/preview/5ad7c5243f5dc3ce6cab7fe30a968353de9144d14483c40b72e20b12eb601152/inf/1iBdpPaeihthivyh9UEtVCmTaXnQuYnPY3VzAsrZylgUY4M7v-WG9qcViM4i7bSvYhuvwhN3X959MXclUEIMxw%3D%3D?uid=166138279&filename=fairy-tales-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "300",
    "description": "item 2 descr"
  },
  {
    "id": 3,
    "title": "Лисья тень",
    "author": "Джули Кагава",
    "genre": "fantasy",
    "image": "https://3.downloader.disk.yandex.ru/preview/4780829c1126c811981b10b50dfb215a8dd8ac8fc0be64527ec4711aa49b21da/inf/tpLesCxUkdP2KK0kaaCWjykh6tmaqk8RPdTiJyVQX07xWvZFZD6_blylBFIumjJEGhD0HJ1kF2QMHbifNLGE_Q%3D%3D?uid=166138279&filename=fantasy-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "600",
    "description": "item 3 descr"
  },
  {
    "id": 4,
    "title": "Самая белая ночь",
    "author": "Ася Лавринович",
    "genre": "romance",
    "image": "https://1.downloader.disk.yandex.ru/preview/65f4df9f26ddfeac1c006acd77566f2889f1e1656dfae5e88ca0e8827b7b16b4/inf/4aw0MRdIxZIMYgVF_T3dpj7O3S0kKA5yBeMSl78Jnb5rybu8rNXDRsbuVWdIzPQpgKJvDThM9NxA2aVx_KX1hQ%3D%3D?uid=166138279&filename=love-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "500",
    "description": "item 4 descr"
  },
  {
    "id": 5,
    "title": "Загадочное исчезновение",
    "author": "Амброз Бирс",
    "genre": "horror",
    "image": "https://1.downloader.disk.yandex.ru/preview/fa4c02f9ac44f7c8e162b93a41585a650208b21d9e80fcb210239ab3cbdf8768/inf/Ljk4Vh9UY9KywkSxmDRRtb1F0hnCBZvUocCWaZrWfgeNUW8aY2iMHVN76tLgfvX6ERhDgTnKRiVHC7j7astdlQ%3D%3D?uid=166138279&filename=horror-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "700",
    "description": "item 5 descr"
  },
  {
    "id": 6,
    "title": "Обитель",
    "author": "Максим Сонин",
    "genre": "detective",
    "image": "https://2.downloader.disk.yandex.ru/preview/caf26a05699a2b85b2e34aca76986f8a07906372a71b79c5bf82aeb3d352c1cf/inf/hCyHijbpMS4TI8JSNDChNSmTaXnQuYnPY3VzAsrZylgju6UEwCAq311RO7sI0ws7txkSWM559AcwsU6JoA7o4A%3D%3D?uid=166138279&filename=detective-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "400",
    "description": "item 6 descr"
  },
  {
    "id": 7,
    "title": "Красная шапочка",
    "author": "Беатрис Поттер",
    "genre": "fairy tale",
    "image": "https://3.downloader.disk.yandex.ru/preview/15f7f68024262e0ab4e27439c5f30c7e676241c5524751b8207e6c92b0aa3ad0/inf/xJDInH2LpeYtce3L1Xwg0ikh6tmaqk8RPdTiJyVQX05jTkQrIOa6mUwc0m4yLxy6WaSbvahBQNEiFttQnlmoSA%3D%3D?uid=166138279&filename=fairy-tales-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "300",
    "description": "item 7 descr"
  },
  {
    "id": 8,
    "title": "Доминум Эквилибрис (2 книга)",
    "author": "Полина Граф",
    "genre": "fantasy",
    "image": "https://1.downloader.disk.yandex.ru/preview/ab31d51bc727daaed6ee32e78126727d531b40086b9ea58d0ab9e5e25f3d24f5/inf/2Iuq0eSlXETF1MtXkS2NJCmTaXnQuYnPY3VzAsrZyljwFsXmSXBxuoIGB2HsCu-6fzaDlyxNxgYe1MfcnLEaGg%3D%3D?uid=166138279&filename=fantasy-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "200",
    "description": "item 8 descr"
  },
  {
    "id": 9,
    "title": "Тысяча поцелуев",
    "author": "Тилли Коул",
    "genre": "romance",
    "image": "https://3.downloader.disk.yandex.ru/preview/f012469b2263de67f13d14e4a63fced9d49dd720cdf8a57d8ccc83ca6d066b6b/inf/SMCZNgC0ASlr08dVbT6P4ikh6tmaqk8RPdTiJyVQX04IkZhLSR4-6izIeGP-MBVKO0lXLEKB1_iUXcVskwmdUg%3D%3D?uid=166138279&filename=love-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "400",
    "description": "item 9 descr"
  },
  {
    "id": 10,
    "title": "Five Nights at Freddy's - Ужасы Фазбера. В бассейн!",
    "author": "Скотт Коутон, Элли Купер",
    "genre": "horror",
    "image": "https://2.downloader.disk.yandex.ru/preview/ec38e2a6c3fb3c2de4dc583098650aad43471ca31f92a6c097beea341d03c160/inf/hadCQRiHOIRkw75oSy0zFz7O3S0kKA5yBeMSl78Jnb7PJ6p4Smdkbfffj9egIfEhs06kGbe30Ufo_GOE5wZGwA%3D%3D?uid=166138279&filename=horror-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "700",
    "description": "item 10 descr"
  },
  {
    "id": 11,
    "title": "Человек, который умер дважды",
    "author": "Ричард Осман",
    "genre": "detective",
    "image": "https://1.downloader.disk.yandex.ru/preview/49da1654a6cf0a0eabaf8bb5d5850c93b3288c5ae112f8738717209aefbb0139/inf/t97OWG4UmdrfK1DaPVYS54GxELfWMeyIzv1PeznVQ5Ej-zQwe2pX2Hb4lcNcm6uLDCVfIRYyAnQ22Tzar6agzg%3D%3D?uid=166138279&filename=detective-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "800",
    "description": "item 11 descr"
  },
  {
    "id": 12,
    "title": "Волшебник изумрудного города",
    "author": "Александр Волков",
    "genre": "fairy tale",
    "image": "https://2.downloader.disk.yandex.ru/preview/6a15e5833aaa9dce4ec1908f8e933d53565cfee9ecb1e414145de84b5da6cf77/inf/ukxMc6vxQ1AZh2uwF77-CCmTaXnQuYnPY3VzAsrZylhrvRdc994Kr3KxEUiKkMnv90v_yrMw0FYXyadxDykelQ%3D%3D?uid=166138279&filename=fairy-tales-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "900",
    "description": "item 12 descr"
  },
  {
    "id": 13,
    "title": "Зов Ктулху",
    "author": "Говард Филлипс Лавкрафт",
    "genre": "horror",
    "image": "https://2.downloader.disk.yandex.ru/preview/382d318c6e0d60860a2c0167bfb17656515451fd2dd44acacad3e3f410b3b75c/inf/DoBSQZRv1fQB-k4Y-6WnpT7RyhPrhE1k3nLDrJ2PaBbMD-kwjl7ouMbzsPX75WeEgAKpG6ayo5OkdzGBad_KIg%3D%3D?uid=166138279&filename=horror-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "600",
    "description": "item 13 descr"
  },
  {
    "id": 14,
    "title": "Из моего окна",
    "author": "Ариана Годой",
    "genre": "romance",
    "image": "https://1.downloader.disk.yandex.ru/preview/3eb873cf68425a790afcba71a2b048173ca94ad61b2b2b3d06795a2180db1ac2/inf/R6pcFBNaC-xORk0V3WzQXxTPF3z4GLc6FgBJrsUBdZvJ6cIOrczV8nKOnnia--a4qq4JedA3HOsFfpTZBmuUaw%3D%3D?uid=166138279&filename=love-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "400",
    "description": "item 14 descr"
  },
  {
    "id": 15,
    "title": "Самая хитрая рыба",
    "author": "Елена Михалкова",
    "genre": "detective",
    "image": "https://2.downloader.disk.yandex.ru/preview/1a92034b02278ef9138ea2ec42cc4d3b21b520f8faf0f85b2f41222fb00c033d/inf/XE9zvGevy9ndLMHcrV0yvr1F0hnCBZvUocCWaZrWfgfPxEM6pgMSGMo0vQ2k8nI4AqmErx4aJNT8O_R7pbg2oQ%3D%3D?uid=166138279&filename=detective-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "500",
    "description": "item 15 descr"
  },
  {
    "id": 16,
    "title": "Русалочка",
    "author": "Том Андерсон",
    "genre": "fairy tale",
    "image": "https://3.downloader.disk.yandex.ru/preview/efaa9f519c1212826da24649210e6544d8f1115fdc96d2a5c9c5fa6da3cfa048/inf/GZwlI8OPXbqXEaMOw_rt9imTaXnQuYnPY3VzAsrZyljgfQ1JS3IJXpJqAjS9rtPDef4zh4eknPkdKpFkBVNoYA%3D%3D?uid=166138279&filename=fairy-tales-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "300",
    "description": "item 16 descr"
  },
  {
    "id": 17,
    "title": "Стеллар Трибут",
    "author": "Роман Прокофьев",
    "genre": "fantasy",
    "image": "https://2.downloader.disk.yandex.ru/preview/68b07c89d4b51aa06cc9990face351485946b5c319b7a09c69915fb16e418c4d/inf/gWIiteJ3qYXp_N_WVpSqJRTPF3z4GLc6FgBJrsUBdZvcuDvCng0P9qlgyk3jXLuIzzvyPB90RJLhhJxaE4Vyzw%3D%3D?uid=166138279&filename=fantasy-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "400",
    "description": "item 17 descr"
  },
  {
    "id": 18,
    "title": "Гретель и её бесы",
    "author": "Герман и Тамара Рыльские",
    "genre": "horror",
    "image": "https://3.downloader.disk.yandex.ru/preview/35f65f0e3399706439e5ab2752fcd7d289418c36daa10d6da9d39588796f2996/inf/XAaR72P1xQ2TFf1G5oafbj7O3S0kKA5yBeMSl78Jnb4Fh-Bx8hBBOtf7dNsF0j3g5qjamBcqTL8rEUDQlKwsOQ%3D%3D?uid=166138279&filename=horror-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "700",
    "description": "item 18 descr"
  },
  {
    "id": 19,
    "title": "Мы над океаном",
    "author": "Янина Логвин",
    "genre": "romance",
    "image": "https://1.downloader.disk.yandex.ru/preview/0b500e3b9b268f0a5daa82ce32b8dbc910a5c49e9867d8e85ca6caffd6526a12/inf/w2J2_0RkkCi-K7Tl2u__DSmTaXnQuYnPY3VzAsrZylg3GYjJisiRVcrWsU5kBonmDm4J38mhn3SJEUuylB8Xsw%3D%3D?uid=166138279&filename=love-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "700",
    "description": "item 19 descr"
  },
  {
    "id": 20,
    "title": "Звёздная кровь (1 книга)",
    "author": "Роман Прокофьев",
    "genre": "fantasy",
    "image": "https://1.downloader.disk.yandex.ru/preview/8b3ea24622ff67a41c858ee68bc591f5eb492431669e449f70187eeb0f1d7db7/inf/_1VJsMiXIOdObzYwSu3BjZi4qV5MKdw6vcHdAfuLdXdC3fw_sdNmX6arZ4C116tNmIerNEakfPMKKvbmvBNzYw%3D%3D?uid=166138279&filename=fantasy-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": "900",
    "description": "item 20 descr"
  }
];

const categories = [
  {
    "id": 1,
    "title": "Fantasy",
    "description": "Fantasy category descr"
  },
  {
    "id": 2,
    "title": "Romance",
    "description": "Romance category descr"
  },
  {
    "id": 3,
    "title": "Fairy tale",
    "description": "Fairy tale category descr"
  },
  {
    "id": 4,
    "title": "Horror",
    "description": "Horror category descr"
  },
  {
    "id": 5,
    "title": "Detective",
    "description": "Detective category descr"
  }
];