import getSpecialProperty from '../task';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const expectedResult = [
  [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'],
  [9, 'Нокаутирующий удар', 'http://...', 'Описание не доступно'],
];

test('test getSpecialProperty', () => {
  expect(getSpecialProperty(character)).toStrictEqual(expectedResult);
});
