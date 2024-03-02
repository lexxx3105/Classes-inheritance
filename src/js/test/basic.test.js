import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

describe.each([
  ['Bowerman', Bowerman, 25, 25],
  ['Swordsman', Swordsman, 40, 10],
  ['Magician', Magician, 10, 40],
  ['Undead', Undead, 25, 25],
  ['Zombie', Zombie, 40, 10],
  ['Daemon', Daemon, 10, 40],
])(
  'should create class %s',
  (className, Class, attack, deffence) => {
    test('выдает ошибку при передаче пустого значения', () => {
      const error = () => new Class();
      expect(error).toThrow('Ошибка: Параметр name не задан!');
    });

    test('выдает ошибку при передаче значения меньше 2', () => {
      const error = () => new Class('1');
      expect(error).toThrow(
        'Ошибка: Параметр name должен содержать от 2 до 10 символов!',
      );
    });

    test('выдает ошибку при передаче значения, превышающего 10', () => {
      const error = () => new Class('12345678910');
      expect(error).toThrow(
        'Ошибка: Параметр name должен содержать от 2 до 10 символов!',
      );
    });

    test('should have correct properties', () => {
      const player = new Class('player');

      expect(player).toEqual({
        name: 'player',
        type: className,
        health: 100,
        level: 1,
        attack,
        deffence,
      });
    });
  },
);