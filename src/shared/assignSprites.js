export const assignSprites = (modules) => {
  return modules.map((module) => {
    const img = new Image(length, length);
    img.src = module.default;
    return img;
  });
};
