function extractIncreasingSubsequence(array) {

    let biggestCurrNumber = Number.MIN_SAFE_INTEGER;

    let result = array.reduce((acc, currElement) => {
        if (currElement >= biggestCurrNumber) {
            biggestCurrNumber = currElement;
            acc.push(biggestCurrNumber);
        }

        return acc;
    }, []);

    // array = array.filter(element => {
    //     if (element >= biggestCurrNumber) {
    //         biggestCurrNumber = element;
    //         return true;
    //     }
    // });

    //    array.forEach(element => {
    //        if(element >= biggestCurrNumber){
    //            biggestCurrNumber = element;
    //            result.push(biggestCurrNumber);
    //        }
    //     });

    //     let result = array.reduce((p,c,i) => i ? p[p.length-1] < c ? p.concat(c)
    //     : p
    // : [c] ,[]);
    console.log(result);
    return result;
}

extractIncreasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);