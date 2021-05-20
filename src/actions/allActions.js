let jijiAction = (data) => {
  return {
    type: 'ADD_JIJI_DATA',
    data
  }
}

let jumiaAction = (data) => {
  return {
    type: 'ADD_JUMIA_DATA',
    data
  }
}

let kongaAction = (data) => {
  return {
    type: 'ADD_KONGA_DATA',
    data
  }
}

let aliexpressAction = (data) => {
  return {
    type: 'ADD_AL_DATA',
    data
  }
}

let amazonAction = (data) => {
  return {
    type: 'ADD_AMAZON_DATA',
    data
  }
}
export {jijiAction, amazonAction, aliexpressAction, kongaAction, jumiaAction}