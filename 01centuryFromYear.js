function solution(year){

    let centuryCount=0;
    while(year>0)
    {
        year = year - 100;
        centuryCount = centuryCount + 1;
    }
    return centuryCount;

}


console.log(solution(1705))
