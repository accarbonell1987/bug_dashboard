const saveInLocalStorage = (item) => {
  let data = {
    userName: item,
    isLoggedIn: true,
  }
  localStorage.setItem('bugsApp', JSON.stringify(data))
}

const getInLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item))
}

const removeInLocalStorage = (item) => {
  localStorage.removeItem(item)
}

export { saveInLocalStorage, getInLocalStorage, removeInLocalStorage }
