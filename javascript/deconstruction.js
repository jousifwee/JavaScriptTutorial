// deconstruction.js

// Destrukturierung
function getName({ name }) {
  return name;
}

// Objekt-Merge
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

module.exports = { getName, mergeObjects };