export default class Character {
    constructor(name) {
      this.setName(name);
      this.type = this.constructor.name;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.deffence = undefined;
    }
  
    setName(name) {
      if (!name) {
        throw new Error('Ошибка: Параметр name не задан!');
      }
  
      const trimedName = name.trim();
  
      if (trimedName.length === 1 || trimedName.length > 10) {
        throw new Error(
          'Ошибка: Параметр name должен содержать от 2 до 10 символов!',
        );
      }
  
      this.name = trimedName;
    }
  }