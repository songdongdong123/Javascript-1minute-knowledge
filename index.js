const getRandom = function({nums=0,max=0,min=0}) {
  if (nums) {
    let temp = []
    let falg = true
    while(falg){
      let x = Math.floor(Math.random()*(max-min+1) + min)
      if((temp.indexOf(x)) === -1) {
        temp.push(x)
      }
      if (temp.length===nums) {
        falg = false
      }
    }
    return temp.sort((a,b) => {
      return a - b
    })
  } else {
    return
  }
}

export {
  getRandom
}