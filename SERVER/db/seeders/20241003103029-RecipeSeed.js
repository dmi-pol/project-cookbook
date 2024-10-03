'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
        title: 'Спагетти Карбонара',
        img: 'https://s1.eda.ru/StaticContent/Photos/150525210126/150601174518/p_O.jpg',
        servings: 2,
        readyInMinutes: 30,
        instructions: '1. Отварить пасту.\n2. Приготовить соус из яиц и сыра.\n3. Добавить бекон и смешать с пастой.',
        userId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Курица Альфредо',
        img: 'https://s1.eda.ru/StaticContent/Photos/120131085657/140623183600/p_O.jpg',
        servings: 4,
        readyInMinutes: 25,
        instructions: '1. Приготовить курицу на сковороде.\n2. Сделать сливочный соус с сыром пармезан.\n3. Смешать с пастой и курицей.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Салат Цезарь',
        img: 'https://img.iamcook.ru/2022/upl/recipes/cat/u-b302ccd6c26a6ea9d364582d6a3048d1.JPG',
        servings: 3,
        readyInMinutes: 15,
        instructions: '1. Порезать салат и обжарить курицу.\n2. Приготовить соус Цезарь.\n3. Смешать салат, курицу и заправку.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Пицца Маргарита',
        img: 'https://eda.ru/images/RecipePhoto/390x390/picca-margarita-s-dvumja-sirami_16677_photo_1790.jpg',
        servings: 4,
        readyInMinutes: 20,
        instructions: '1. Приготовить тесто для пиццы.\n2. Добавить томатный соус и моцареллу.\n3. Выпекать в духовке до готовности.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Бефстроганов',
        img: 'https://куриноецарство.рф/storage/recipe/2022/08/22/f8ecf4cf9042055c01a3ec0b1c55c3691576fd0a.jpeg',
        servings: 4,
        readyInMinutes: 40,
        instructions: '1. Нарезать говядину.\n2. Приготовить соус из сметаны и грибов.\n3. Добавить говядину и тушить до готовности.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Суп Том Ям',
        img: 'https://images.gastronom.ru/sbEl4UJGsNoRSUq4Pw_zgCQYuxd1zxR9Ao4bAmoGnRU/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzRlYmEzOTkyLThhYTctNGQxNC05NWVmLTk1ZDVhNGY1NTY5Ny5qcGc.webp',
        servings: 2,
        readyInMinutes: 35,
        instructions: '1. Приготовить бульон.\n2. Добавить креветки, грибы и специи.\n3. Варить до готовности и подавать горячим.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Пад Тай',
        img: 'https://s1.eda.ru/StaticContent/Photos/110804134510/131114001352/p_O.jpg',
        servings: 3,
        readyInMinutes: 30,
        instructions: '1. Замочить рисовую лапшу.\n2. Приготовить соус.\n3. Обжарить лапшу с соусом и добавить яйца и креветки.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Французский луковый суп',
        img: 'https://example.com/images/frenchonion.jpg',
        servings: 2,
        readyInMinutes: 50,
        instructions: '1. Обжарить лук до золотистого цвета.\n2. Добавить бульон и варить на медленном огне.\n3. Подавать с багетом и сыром.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Суши ролл',
        img: 'https://images.gastronom.ru/ZGaxEdY7-giFn-qgOzXRUlod3ym0UfkG686cMEqwAsM/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzExNDUzODdjLWY3OGEtNGVjYy1hYjcyLTMwMWEzNGU1OGNmMC5qcGc.webp',
        servings: 4,
        readyInMinutes: 45,
        instructions: '1. Приготовить рис для суши.\n2. Выложить на нори с начинкой.\n3. Свернуть и нарезать на кусочки.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Яблочный пирог',
        img: 'https://souspark.ru/wp-content/uploads/2023/08/Screenshot_17-18.jpg',
        servings: 4,
        readyInMinutes: 60,
        instructions: '1. Приготовить тесто.\n2. Начинить яблочной начинкой.\n3. Выпекать в духовке до готовности.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  }
};
