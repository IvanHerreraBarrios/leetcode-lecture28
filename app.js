//859 buddy strings

var buddyStrings = function(s, goal) {
    const freqs = frequencies(s)
    if(!equalFreqs(freqs, frequencies(goal))) return false

    //count number of differences
    let diffs = 0
    for(let i=0; i < s.length; i++){
        if(s[i] !== goal[i]) diffs ++
    }

    if(diffs === 2) return true
    if(diffs > 2) return false

    //check for duplicates that we can swap (example 3)
    for(let key in freqs){
        if(freqs[key] >= 2) return true
    }

    return false
};

function frequencies(str){
    const freqs = {}
    for(let i=0; i < str.length; i++){
        const c = str[i]
        freqs[c] = freqs[c] ? freqs[c] + 1: 1
    }
    return freqs
}

function equalFreqs(object1, object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if(keys1.length !== keys2.length) return false

    for(let key of keys1){
        if(object1[key] !== object2[key]) return false
    }

    return true
}

//414 third maximum

var thirdMax = function(nums) {
    let max =  -Infinity
    let secondMax =  -Infinity
    let thirdMax =  -Infinity

    for(let i=0; i < nums.length; i++){
        const num = nums[i]

        if(num !== max && num !== secondMax){
            if(num >= max){
                thirdMax = secondMax
                secondMax = max
                max = num
            } else if(num > secondMax){
                thirdMax = secondMax
                secondMax = num
            } else if(num > thirdMax){
                thirdMax = num
            }
        }
    }

    if(thirdMax !== -Infinity) return thirdMax
    
    return max
};


//solution 2

var thirdMax = function(nums) {
    
    let sorted = nums.sort((a,b) => b - a) ;
    sorted = [...new Set(sorted)] ;
    return sorted[2] !== undefined ? sorted[2] : sorted[0] ;
};