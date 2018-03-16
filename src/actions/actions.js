
export const INCREASE = 'INCREASE';

export const addAction =(type,text)=>{
  return {
    type:type,
    text
  }
}

/**
 * 计数器 + text
 * @param text
 * @returns {{type: string, text: *}}
 * @constructor
 */
export let IncreaseAction = (text) => {
  return {
    type:INCREASE,
    text
  }
}