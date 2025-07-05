/*2. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24O
     Sort the array and find the min and max age1
     Find the median age(one middle item or two middle items divided by twom
     Find the average age(all items divided by number of itemsm
     Find the range of the ages(max minus minm
    Compare the value of (min - average) and (max - average), use abs() method*/
     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
     ages.sort((a,b) => a-b);
     const minAge = ages[0];
     const maxAge = ages[ages.length-1];
     let median;
     const mid = Math.floor(ages.length/2);
     if(ages.length%2===0){
        median = (ages[mid-1]+ages[mid])/2;
     }else{
        median = ages[mid];
     }
     const sum = ages.reduce((acc,curr)=> acc+curr,0);
     const average = sum/ages.length;
     const range = maxAge - minAge;
     const minDiff = Math.abs(minAge - average);
     const maxDiff = Math.abs(maxAge - average);
console.log(`Sorted Ages: ${ages}`);
console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);
console.log(`Median Age: ${median}`);
console.log(`Average Age: ${average}`);
console.log(`Range: ${range}`);
console.log(`Min - Avg: ${minDiff}`);
console.log(`Max - Avg: ${maxDiff}`);