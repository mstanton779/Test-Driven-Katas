const twoSum = (arr, value) => {
    if (arr.length < 2) {
        return []
    } else {
        let objMap = {}
        let answer
        arr.forEach((num, i) => {
            let difference = value - num
            console.log(objMap[difference])
            if (objMap[difference] !== undefined) {
                console.log('here')
                answer = [objMap[difference], i]
            } else {
                objMap[num] = i
            }
        })
        return answer || []
    }
}

module.exports = twoSum
