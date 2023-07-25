function getPerimeter(letter, num) {
  const circlePerimeter = 6.28 * num;

  const squarePerimeter = 4 * num;

  return (
    (letter === "c") * circlePerimeter + (letter === "s") * squarePerimeter
  );
}
