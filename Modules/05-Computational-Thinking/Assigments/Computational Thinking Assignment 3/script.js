function generation(num, gender) {
  if (num === 0) {
    return "me!";
  } else if (num === -3) {
    return gender === "m" ? "great grandfather" : "great grandmother";
  } else if (num === -2) {
    return gender === "m" ? "grandfather" : "grandmother";
  } else if (num === -1) {
    return gender === "m" ? "father" : "mother";
  } else if (num === 1) {
    return gender === "m" ? "son" : "daughter";
  } else if (num === 2) {
    return gender === "m" ? "grandson" : "granddaughter";
  } else if (num === 3) {
    return gender === "m" ? "great grandson" : "great granddaughter";
  } else {
    return "Invalid input";
  }
}
