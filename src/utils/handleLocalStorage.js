const ITEM_LS = 'todos'
function storeToLocalStorage (...input) {
  const result = {
    error: ''
  }
  try {
    const FIRST_VALUE = '[]'
    const data = input
    // https://blog.logrocket.com/localstorage-javascript-complete-guide/
    if (typeof (Storage) === 'undefined') {
      throw new Error('browser anda tidak support localStorage')
    }
    if (localStorage.getItem(ITEM_LS) === null) {
      localStorage.setItem(ITEM_LS, FIRST_VALUE)
    }
    const parsingData = JSON.parse(localStorage.getItem(ITEM_LS))
    const storeData = {
      title: data[0],
      description: data[1]
    }
    parsingData.push(storeData)
    const stringifyStoreData = JSON.stringify(parsingData)
    localStorage.setItem(ITEM_LS, stringifyStoreData)
  } catch (error) {
    result.error = error.message
  }
  return result
}

function fetchLocalStorage () {
  const dataLocalStorage = JSON.parse(localStorage.getItem(ITEM_LS))
  return dataLocalStorage
}

export { storeToLocalStorage, fetchLocalStorage }
