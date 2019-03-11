module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const newItem = {...item}
    ++newItem.enhancement
    return newItem
  } else {
    const newItem = {...item}
    return newItem
  }
}

function fail(item) {
  if (item.enhancement <  15) {
    const newItem = {...item}
    newItem.durability = newItem.durability-5
    return newItem
  } else {
    if (item.enhancement > 16) {
      newItem = {...item}
      newItem.enhancement = newItem.enhancement-1
      newItem.durability = newItem.durability-10
      return newItem
    } else {
      newItem = {...item}
      newItem.durability = newItem.durability-10
      return newItem
    }
  }
 }

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
