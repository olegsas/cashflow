/*function calculateCashDelta(nowTimeDay){
    var nowData = new Date();
    nowData.setTime(nowTimeDay*1000*60*60*24);
    var nowTransactionA = db.transactions.find({"Date": nowData}).toArray();
    return nowTransactionA[0].Type;// for the debugging

}*/

function calculateCashFlow(startTimeDay, nowTimeDay){
// we calculate the cashflow from the startTimeDay to the nowTimeDay
    // we can use byr, byn, usd
    var Byn = 0;
    var Byr = 0;
    var Usd = 0;
    var cycleTimeDay = startTimeDay;// we calculate it for the first day at start, and then we 
    //will calculate it from the secind day to the end
    var cashDeltaA = [];// cashDeltaA[0] = Byr, cashDeltaA[1] = Byn, cashDeltaA[2] = Usd;
    cashDeltaA = calculateCashDelta(cycleTimeDay);// we calculate cash delta for the certain day
    // and store it in the array [0] = Byr, [1] = Byn, [2] = Usd
        Byr = Byr + cashDeltaA[0];
        Byn = Byn + cashDeltaA[1];
        Usd = Usd + cashDeltaA[2];
        writeCashFlow(cycleTimeDay, Byr, Byn, Usd);
    /*for(var cycleTimeDay = startTimeDay; cycleTimeDay<=nowTimeDay; cycleTimeDay++){
        readTransactions(cycleTimeDay);//returns an array of objects[{},{},{}]
        applyTransactions();
    }*/
    
    // in Byr, Byn and Usd we have the actual balance for this day
        
}

function readTransactions(nowTimeDay){// it may be many transactions in one day
    var nowData = new Date();
    nowData.setTime(nowTimeDay*1000*60*60*24);
    var nowTransactionA = db.transactions.find({"Date": nowData}).toArray();
    print("nowTransactionA = "+nowTransactionA);
}

function applyTransactions(/**/){// we apply the transactions

}

