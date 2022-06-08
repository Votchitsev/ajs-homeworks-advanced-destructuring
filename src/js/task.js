export default function getSpecialProperty(character) {
  const result = [];

  character.special.forEach((attack) => {
    const {
      id, name, icon, description = 'Описание не доступно',
    } = attack;
    result.push([id, name, icon, description]);
  });
  return result;
}
