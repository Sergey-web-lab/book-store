const items = [
  {
    "id": 1,
    "title": "Тигровый, чёрный, золотой",
    "author": "Елена Михалкова",
    "genre": "detective",
    "image": "https://2.downloader.disk.yandex.ru/preview/a3047aa290dc75c092994a4ac05624f87524d04531f3e4d49db45d91e55565f7/inf/_ZDZnx3qC3PM4OgGkwVNsymTaXnQuYnPY3VzAsrZylh-qYlc6pOOxpXNE2DHXpMIwMrZzoVsEqvOg8imLshBNg%3D%3D?uid=166138279&filename=detective-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 700,
    "description": "item 1 descr"
  },
  {
    "id": 2,
    "title": "Собачка Соня на даче",
    "author": "Андрей Усачев",
    "genre": "fairy tale",
    "image": "https://3.downloader.disk.yandex.ru/preview/5ad7c5243f5dc3ce6cab7fe30a968353de9144d14483c40b72e20b12eb601152/inf/1iBdpPaeihthivyh9UEtVCmTaXnQuYnPY3VzAsrZylgUY4M7v-WG9qcViM4i7bSvYhuvwhN3X959MXclUEIMxw%3D%3D?uid=166138279&filename=fairy-tales-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 300,
    "description": "item 2 descr"
  },
  {
    "id": 3,
    "title": "Лисья тень",
    "author": "Джули Кагава",
    "genre": "fantasy",
    "image": "https://3.downloader.disk.yandex.ru/preview/4780829c1126c811981b10b50dfb215a8dd8ac8fc0be64527ec4711aa49b21da/inf/tpLesCxUkdP2KK0kaaCWjykh6tmaqk8RPdTiJyVQX07xWvZFZD6_blylBFIumjJEGhD0HJ1kF2QMHbifNLGE_Q%3D%3D?uid=166138279&filename=fantasy-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 600,
    "description": "item 3 descr"
  },
  {
    "id": 4,
    "title": "Самая белая ночь",
    "author": "Ася Лавринович",
    "genre": "romance",
    "image": "https://1.downloader.disk.yandex.ru/preview/65f4df9f26ddfeac1c006acd77566f2889f1e1656dfae5e88ca0e8827b7b16b4/inf/4aw0MRdIxZIMYgVF_T3dpj7O3S0kKA5yBeMSl78Jnb5rybu8rNXDRsbuVWdIzPQpgKJvDThM9NxA2aVx_KX1hQ%3D%3D?uid=166138279&filename=love-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 500,
    "description": "item 4 descr"
  },
  {
    "id": 5,
    "title": "Загадочное исчезновение",
    "author": "Амброз Бирс",
    "genre": "horror",
    "image": "https://1.downloader.disk.yandex.ru/preview/fa4c02f9ac44f7c8e162b93a41585a650208b21d9e80fcb210239ab3cbdf8768/inf/Ljk4Vh9UY9KywkSxmDRRtb1F0hnCBZvUocCWaZrWfgeNUW8aY2iMHVN76tLgfvX6ERhDgTnKRiVHC7j7astdlQ%3D%3D?uid=166138279&filename=horror-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 700,
    "description": "item 5 descr"
  },
  {
    "id": 6,
    "title": "Обитель",
    "author": "Максим Сонин",
    "genre": "detective",
    "image": "https://2.downloader.disk.yandex.ru/preview/caf26a05699a2b85b2e34aca76986f8a07906372a71b79c5bf82aeb3d352c1cf/inf/hCyHijbpMS4TI8JSNDChNSmTaXnQuYnPY3VzAsrZylgju6UEwCAq311RO7sI0ws7txkSWM559AcwsU6JoA7o4A%3D%3D?uid=166138279&filename=detective-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 400,
    "description": "item 6 descr"
  },
  {
    "id": 7,
    "title": "Красная шапочка",
    "author": "Беатрис Поттер",
    "genre": "fairy tale",
    "image": "https://3.downloader.disk.yandex.ru/preview/15f7f68024262e0ab4e27439c5f30c7e676241c5524751b8207e6c92b0aa3ad0/inf/xJDInH2LpeYtce3L1Xwg0ikh6tmaqk8RPdTiJyVQX05jTkQrIOa6mUwc0m4yLxy6WaSbvahBQNEiFttQnlmoSA%3D%3D?uid=166138279&filename=fairy-tales-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 300,
    "description": "item 7 descr"
  },
  {
    "id": 8,
    "title": "Доминум Эквилибрис (2 книга)",
    "author": "Полина Граф",
    "genre": "fantasy",
    "image": "https://1.downloader.disk.yandex.ru/preview/ab31d51bc727daaed6ee32e78126727d531b40086b9ea58d0ab9e5e25f3d24f5/inf/2Iuq0eSlXETF1MtXkS2NJCmTaXnQuYnPY3VzAsrZyljwFsXmSXBxuoIGB2HsCu-6fzaDlyxNxgYe1MfcnLEaGg%3D%3D?uid=166138279&filename=fantasy-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 200,
    "description": "item 8 descr"
  },
  {
    "id": 9,
    "title": "Тысяча поцелуев",
    "author": "Тилли Коул",
    "genre": "romance",
    "image": "https://3.downloader.disk.yandex.ru/preview/f012469b2263de67f13d14e4a63fced9d49dd720cdf8a57d8ccc83ca6d066b6b/inf/SMCZNgC0ASlr08dVbT6P4ikh6tmaqk8RPdTiJyVQX04IkZhLSR4-6izIeGP-MBVKO0lXLEKB1_iUXcVskwmdUg%3D%3D?uid=166138279&filename=love-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 400,
    "description": "item 9 descr"
  },
  {
    "id": 10,
    "title": "Five Nights at Freddy's - Ужасы Фазбера. В бассейн!",
    "author": "Скотт Коутон, Элли Купер",
    "genre": "horror",
    "image": "https://2.downloader.disk.yandex.ru/preview/ec38e2a6c3fb3c2de4dc583098650aad43471ca31f92a6c097beea341d03c160/inf/hadCQRiHOIRkw75oSy0zFz7O3S0kKA5yBeMSl78Jnb7PJ6p4Smdkbfffj9egIfEhs06kGbe30Ufo_GOE5wZGwA%3D%3D?uid=166138279&filename=horror-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 700,
    "description": "item 10 descr"
  },
  {
    "id": 11,
    "title": "Человек, который умер дважды",
    "author": "Ричард Осман",
    "genre": "detective",
    "image": "https://1.downloader.disk.yandex.ru/preview/49da1654a6cf0a0eabaf8bb5d5850c93b3288c5ae112f8738717209aefbb0139/inf/t97OWG4UmdrfK1DaPVYS54GxELfWMeyIzv1PeznVQ5Ej-zQwe2pX2Hb4lcNcm6uLDCVfIRYyAnQ22Tzar6agzg%3D%3D?uid=166138279&filename=detective-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 800,
    "description": "item 11 descr"
  },
  {
    "id": 12,
    "title": "Волшебник изумрудного города",
    "author": "Александр Волков",
    "genre": "fairy tale",
    "image": "https://2.downloader.disk.yandex.ru/preview/6a15e5833aaa9dce4ec1908f8e933d53565cfee9ecb1e414145de84b5da6cf77/inf/ukxMc6vxQ1AZh2uwF77-CCmTaXnQuYnPY3VzAsrZylhrvRdc994Kr3KxEUiKkMnv90v_yrMw0FYXyadxDykelQ%3D%3D?uid=166138279&filename=fairy-tales-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 900,
    "description": "item 12 descr"
  },
  {
    "id": 13,
    "title": "Зов Ктулху",
    "author": "Говард Филлипс Лавкрафт",
    "genre": "horror",
    "image": "https://2.downloader.disk.yandex.ru/preview/382d318c6e0d60860a2c0167bfb17656515451fd2dd44acacad3e3f410b3b75c/inf/DoBSQZRv1fQB-k4Y-6WnpT7RyhPrhE1k3nLDrJ2PaBbMD-kwjl7ouMbzsPX75WeEgAKpG6ayo5OkdzGBad_KIg%3D%3D?uid=166138279&filename=horror-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 600,
    "description": "item 13 descr"
  },
  {
    "id": 14,
    "title": "Из моего окна",
    "author": "Ариана Годой",
    "genre": "romance",
    "image": "https://1.downloader.disk.yandex.ru/preview/3eb873cf68425a790afcba71a2b048173ca94ad61b2b2b3d06795a2180db1ac2/inf/R6pcFBNaC-xORk0V3WzQXxTPF3z4GLc6FgBJrsUBdZvJ6cIOrczV8nKOnnia--a4qq4JedA3HOsFfpTZBmuUaw%3D%3D?uid=166138279&filename=love-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 400,
    "description": "item 14 descr"
  },
  {
    "id": 15,
    "title": "Самая хитрая рыба",
    "author": "Елена Михалкова",
    "genre": "detective",
    "image": "https://2.downloader.disk.yandex.ru/preview/1a92034b02278ef9138ea2ec42cc4d3b21b520f8faf0f85b2f41222fb00c033d/inf/XE9zvGevy9ndLMHcrV0yvr1F0hnCBZvUocCWaZrWfgfPxEM6pgMSGMo0vQ2k8nI4AqmErx4aJNT8O_R7pbg2oQ%3D%3D?uid=166138279&filename=detective-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 500,
    "description": "item 15 descr"
  },
  {
    "id": 16,
    "title": "Русалочка",
    "author": "Том Андерсон",
    "genre": "fairy tale",
    "image": "https://3.downloader.disk.yandex.ru/preview/efaa9f519c1212826da24649210e6544d8f1115fdc96d2a5c9c5fa6da3cfa048/inf/GZwlI8OPXbqXEaMOw_rt9imTaXnQuYnPY3VzAsrZyljgfQ1JS3IJXpJqAjS9rtPDef4zh4eknPkdKpFkBVNoYA%3D%3D?uid=166138279&filename=fairy-tales-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 300,
    "description": "item 16 descr"
  },
  {
    "id": 17,
    "title": "Стеллар Трибут",
    "author": "Роман Прокофьев",
    "genre": "fantasy",
    "image": "https://2.downloader.disk.yandex.ru/preview/68b07c89d4b51aa06cc9990face351485946b5c319b7a09c69915fb16e418c4d/inf/gWIiteJ3qYXp_N_WVpSqJRTPF3z4GLc6FgBJrsUBdZvcuDvCng0P9qlgyk3jXLuIzzvyPB90RJLhhJxaE4Vyzw%3D%3D?uid=166138279&filename=fantasy-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 400,
    "description": "item 17 descr"
  },
  {
    "id": 18,
    "title": "Гретель и её бесы",
    "author": "Герман и Тамара Рыльские",
    "genre": "horror",
    "image": "https://3.downloader.disk.yandex.ru/preview/35f65f0e3399706439e5ab2752fcd7d289418c36daa10d6da9d39588796f2996/inf/XAaR72P1xQ2TFf1G5oafbj7O3S0kKA5yBeMSl78Jnb4Fh-Bx8hBBOtf7dNsF0j3g5qjamBcqTL8rEUDQlKwsOQ%3D%3D?uid=166138279&filename=horror-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 700,
    "description": "item 18 descr"
  },
  {
    "id": 19,
    "title": "Мы над океаном",
    "author": "Янина Логвин",
    "genre": "romance",
    "image": "https://1.downloader.disk.yandex.ru/preview/0b500e3b9b268f0a5daa82ce32b8dbc910a5c49e9867d8e85ca6caffd6526a12/inf/w2J2_0RkkCi-K7Tl2u__DSmTaXnQuYnPY3VzAsrZylg3GYjJisiRVcrWsU5kBonmDm4J38mhn3SJEUuylB8Xsw%3D%3D?uid=166138279&filename=love-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 700,
    "description": "item 19 descr"
  },
  {
    "id": 20,
    "title": "Звёздная кровь (1 книга)",
    "author": "Роман Прокофьев",
    "genre": "fantasy",
    "image": "https://1.downloader.disk.yandex.ru/preview/8b3ea24622ff67a41c858ee68bc591f5eb492431669e449f70187eeb0f1d7db7/inf/_1VJsMiXIOdObzYwSu3BjZi4qV5MKdw6vcHdAfuLdXdC3fw_sdNmX6arZ4C116tNmIerNEakfPMKKvbmvBNzYw%3D%3D?uid=166138279&filename=fantasy-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1898x933",
    "price": 900,
    "description": "item 20 descr"
  },
  {
    "id": 21,
    "title": "Колесницы судьбы",
    "author": "Анна и Сергей Литвиновы",
    "genre": "detective",
    "image": "https://3.downloader.disk.yandex.ru/preview/9769b8a6ad9d3b6fbc19ef68e9d57d3dcd7339442b6cbfd444b5234ecc1d1194/inf/dYP6YfLGj2s--6rp-IZyM1ZNURtmY8Zs0gCBPCBYGTNrdVSbSEwDbSnef1YvZEjM583m8k2vEJwiLbQ023K2MQ%3D%3D?uid=166138279&filename=detective-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 700,
    "description": "item 21 descr"
  },
  {
    "id": 22,
    "title": "Алиса в стране чудес",
    "author": "Льюис Кэррол",
    "genre": "fairy tale",
    "image": "https://4.downloader.disk.yandex.ru/preview/60e3634d24741b9086d24339c78a36de8050269d21959568089f10facc03a139/inf/xHOSJqRMJ43IoRd5pJ-zDFZNURtmY8Zs0gCBPCBYGTMWcjb05gH2mYVuflQDSCDuAfLqHLy7Jb7-4_pGWaqCxA%3D%3D?uid=166138279&filename=fairy-tales-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 300,
    "description": "item 22 descr"
  },
  {
    "id": 23,
    "title": "Сергей Лукьяненко",
    "author": "Прыжок",
    "genre": "fantasy",
    "image": "https://3.downloader.disk.yandex.ru/preview/b1db8a98c570bafff2a919105d05067044e92ffe5de5c1dfd4d68abac00c6700/inf/ve6VlhdoSEIyNwL3aBd6cI4Kz3sfcDiZjPnA5c4LjNWbEBlx2cuP93RRQG56-WGEeZantoW9NWFs7QUSLIVMBg%3D%3D?uid=166138279&filename=fantasy-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 600,
    "description": "item 23 descr"
  },
  {
    "id": 24,
    "title": "Кафе \"Берлин\"",
    "author": "Татьяна М.А.",
    "genre": "romance",
    "image": "https://2.downloader.disk.yandex.ru/preview/536b5e1f14e4a43484a346b660d1e0c8cb7599426880c904f9ff4c7b7145d659/inf/bAjubKysrIeBWJvZ-PazwL3Fel4rRfsc8RqQNGSHxQbHjqzIfCIjB2aA8xf8uhwpeOVKNa71tZ20vlT-b_KKUw%3D%3D?uid=166138279&filename=love-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 500,
    "description": "item 24 descr"
  },
  {
    "id": 25,
    "title": "Татьяна Мастрюкова",
    "author": "Болотница",
    "genre": "horror",
    "image": "https://2.downloader.disk.yandex.ru/preview/5ef59d368d312d77226ab93247adfceb34e984d6881328e7116da50bbbb3a5ad/inf/YjL72qfXGsxsI7bOu1Ryo73Fel4rRfsc8RqQNGSHxQZi8jhM4zQM46Eobzv2bLK-bej0AlBoEG8gLk63rwWFdA%3D%3D?uid=166138279&filename=horror-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 700,
    "description": "item 25 descr"
  },
  {
    "id": 26,
    "title": "Судьба по книге перемен",
    "author": "Татьяна Устинова",
    "genre": "detective",
    "image": "https://1.downloader.disk.yandex.ru/preview/b418910b4c95943bbd1465dcf1f28319343c1cbdaf2004d204194bcd7eca22c8/inf/peRn3POeoHjJ-oFMpmqIllZNURtmY8Zs0gCBPCBYGTOt36Ugf-Lzox6eiCRFLjpUijN5ibJR_YUlx9qv4Pw6oQ%3D%3D?uid=166138279&filename=detective-6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 400,
    "description": "item 26 descr"
  },
  {
    "id": 27,
    "title": "Печенье счастья",
    "author": "Черстин Лундберг Хан",
    "genre": "fairy tale",
    "image": "https://2.downloader.disk.yandex.ru/preview/b61c0c087c9df9ddb2bf20c3b4385662537aff54d02f132749d67568a6ff81b3/inf/PYbv-F5y4m5uJHym-w5a4ikxx7Qq38YfQDQgya0rRYGfliQDHmSiMqEldwKvkBK6MmCgyjR3U63RbIle4-OnnQ%3D%3D?uid=166138279&filename=fairy-tales-6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 300,
    "description": "item 27 descr"
  },
  {
    "id": 28,
    "title": "Платформа",
    "author": "Роджер Леви",
    "genre": "fantasy",
    "image": "https://2.downloader.disk.yandex.ru/preview/3304c02544312d5af0a75e154105566fbb20cfef89c09b5794788f9dbe3551aa/inf/cS_SPvQ3oNcj0_7_KuZWdo4Kz3sfcDiZjPnA5c4LjNW_Y8TdmVOwlPwgWqmdvq2yWpOrlTfNFDCYlxZaefrUXA%3D%3D?uid=166138279&filename=fantasy-6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 200,
    "description": "item 28 descr"
  },
  {
    "id": 29,
    "title": "Незапертая дверь",
    "author": "Мария Метлицкая",
    "genre": "romance",
    "image": "https://1.downloader.disk.yandex.ru/preview/b8a188fd06325070a0c2ae7f9d8f1c8c84f4a923a9a48a3752a402df1511e044/inf/NGtLSvittCd_UUsgyVcEFikxx7Qq38YfQDQgya0rRYHlswx5dFtZY8rHxgri8V3cYgP4HfWGhJ2WNYXrkFkEdw%3D%3D?uid=166138279&filename=love-6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 400,
    "description": "item 29 descr"
  },
  {
    "id": 30,
    "title": "Люди зимы",
    "author": "Дженнифер Макмахон",
    "genre": "horror",
    "image": "https://2.downloader.disk.yandex.ru/preview/7ff27abdfef8ad0bf3354fe8abf5b598dd6ef4162c13647cab15cf8be5f1a2ae/inf/0LcvJVvU_X1YhzypHR0rqb3Fel4rRfsc8RqQNGSHxQY8lSaVBCASo-qFQD4xJun7wW4XDHSAWZReSdolQBRlXg%3D%3D?uid=166138279&filename=horror-6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 700,
    "description": "item 30 descr"
  },
  {
    "id": 31,
    "title": "Чёрные кувшинки",
    "author": "Мишель Бюсси",
    "genre": "detective",
    "image": "https://1.downloader.disk.yandex.ru/preview/e69fa31d947f1897f0927cd9441cc81a66fd4eb655802cf8d4ae486af0453b44/inf/EbOxqdteYv-CAIegOA2FN4J0o5DDObi2yy2NI8NveM5F5vS14ggR_zR8Lhkqo788rLc2YS6Xp3e0bpE69FLxDw%3D%3D?uid=166138279&filename=detective-7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 800,
    "description": "item 31 descr"
  },
  {
    "id": 32,
    "title": "Рожденственский поросёнок",
    "author": "Дж. К. Роулинг",
    "genre": "fairy tale",
    "image": "https://2.downloader.disk.yandex.ru/preview/1cd17efa31311ba86fdcb6809fa7acc77f80b26028f1a3646f92e5428bddd760/inf/DZ-GNlzWIM0UDl8H716ee44Kz3sfcDiZjPnA5c4LjNUurzC05Z26N8--9BHeD6hRZJp_esC5aJp7IUPzNW65Tw%3D%3D?uid=166138279&filename=fairy-tales-7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 900,
    "description": "item 32 descr"
  },
  {
    "id": 33,
    "title": "Добро пожаловать в Гиблые Холмы",
    "author": "Виктор Кабицкий",
    "genre": "horror",
    "image": "https://2.downloader.disk.yandex.ru/preview/ba706404e87b9a5e431a930636679458da7235de30b7d35140e2f59379bdcb5b/inf/bGczC4QNvvP4xhqRIM2gEQ-wMT3Nm-IReEUT1WH50F9w2Zd1m0gVPYBHYAQYbiZ-d_3FXuITOl3CUBODz0DRIQ%3D%3D?uid=166138279&filename=horror-7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 600,
    "description": "item 33 descr"
  },
  {
    "id": 34,
    "title": "Невеста на уикенд",
    "author": "Юлия Цыплёнкова",
    "genre": "romance",
    "image": "https://3.downloader.disk.yandex.ru/preview/bf229d8b35965e6bfa564ad08e595d1bf0e8211ab516cbeebdf5df5f29f2e46c/inf/dBur_l4WQDtvjTfwJZQzDVZNURtmY8Zs0gCBPCBYGTNQpyqLUoTv3YXifxJmf3LWKvr210U7JkeB8LFqca6AOA%3D%3D?uid=166138279&filename=love-7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 400,
    "description": "item 34 descr"
  },
  {
    "id": 35,
    "title": "Швейцарский счёт",
    "author": "Елена Саулите",
    "genre": "detective",
    "image": "https://3.downloader.disk.yandex.ru/preview/bd21c3f590a0283e4ef3647e546443b7f609a8179a09c2f3754828929f792ec2/inf/8VgF-3rnRe5bwvlSXEwLHl0mHSE3_XhxOPbzGYdPc8D04uWATWkSorVT1WsceR9yecBm6Hi4oWeiSsZkeiplNA%3D%3D?uid=166138279&filename=detective-8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 500,
    "description": "item 35 descr"
  },
  {
    "id": 36,
    "title": "Сумеречный сказ",
    "author": "Кайса Локин",
    "genre": "fairy tale",
    "image": "https://1.downloader.disk.yandex.ru/preview/eec585dedebfbb141609756530d2cc5b9f8e84c33612c8eedb0e3e4ef0d19564/inf/9ElnoxqeIBUuEGA0FMzwPY4Kz3sfcDiZjPnA5c4LjNULDiIiKHrh-42PHjzpVNw4qhw_IjpT15sNLSDN5Z3Kpg%3D%3D?uid=166138279&filename=fairy-tales-8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 300,
    "description": "item 36 descr"
  },
  {
    "id": 37,
    "title": "Порог",
    "author": "Сергей Лукьяненко",
    "genre": "fantasy",
    "image": "https://1.downloader.disk.yandex.ru/preview/98527fb300492f36b9db1214bda237756fea15a9d48657ab1a5ae95194e153cf/inf/W-DjcwjCsbQNo06j_lkmKI4Kz3sfcDiZjPnA5c4LjNUcK_j5DrlgeGnluO0TFaMCctvdaC3u4TdP4fFKKk-wLA%3D%3D?uid=166138279&filename=fantasy-7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 400,
    "description": "item 37 descr"
  },
  {
    "id": 38,
    "title": "Носферату",
    "author": "Джо Хилл",
    "genre": "horror",
    "image": "https://3.downloader.disk.yandex.ru/preview/df4dfa2f60663a0c30a68da8dab7f1cb46bf2751e8958791bd6b901242dbc60c/inf/u4GFTCuFh-r5VD8gCgDGLL3Fel4rRfsc8RqQNGSHxQYGbfiOAHZsChkRw7EskretK0cqvd5zsIa1bnoGRtD6cA%3D%3D?uid=166138279&filename=horror-8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 700,
    "description": "item 38 descr"
  },
  {
    "id": 39,
    "title": "Избушка для двоих",
    "author": "Елена Рейн",
    "genre": "romance",
    "image": "https://4.downloader.disk.yandex.ru/preview/bcc5b40d546363e2fc304c8d731267f9118cdaffed37743baf31c31cb38f00dd/inf/nelFFKRBrI5DnBzy6fXs8tI7pnc2FGIQ4ThHBT8Enqc2ZNp03aVTFisBORon_Bs6YduaEks_qcf9xdc_LPlQKQ%3D%3D?uid=166138279&filename=love-8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 700,
    "description": "item 39 descr"
  },
  {
    "id": 40,
    "title": "Стеллар Эфемер",
    "author": "Роман Прокофьев",
    "genre": "fantasy",
    "image": "https://2.downloader.disk.yandex.ru/preview/c8db8fe166e1c9864876781570e220c26fd348328458a505df2cc4e1a0f0dec9/inf/5pjhkkTDanwPDahtE1TauKKPwbv5mI8Baq6SHD17_dcxRuiEo6w00IpxmVAdV3kjzp9cexpYyxyW_ztnsxeB8Q%3D%3D?uid=166138279&filename=fantasy-8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=166138279&tknv=v2&size=1007x892",
    "price": 900,
    "description": "item 40 descr"
  }
];

const categories = [
  {
    "id": 1,
    "title": "All",
    "description": "All category descr"
  },
  {
    "id": 2,
    "title": "Fantasy",
    "description": "Fantasy category descr"
  },
  {
    "id": 3,
    "title": "Romance",
    "description": "Romance category descr"
  },
  {
    "id": 4,
    "title": "Fairy tale",
    "description": "Fairy tale category descr"
  },
  {
    "id": 5,
    "title": "Horror",
    "description": "Horror category descr"
  },
  {
    "id": 6,
    "title": "Detective",
    "description": "Detective category descr"
  }
];