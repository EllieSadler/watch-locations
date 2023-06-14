1. create faker getLastLocation API 
- should include the following fields 
-- address {street, city, state}
-- executionTime

2. create function to make API call
- define timestamp
- add item to results array w/ only timestamp
- await api call
- find item in results w/ timestamp and add address and executionTime fields

3. have button to run API call function

4. display a list of memoized results 
- sort results from newest to oldest 
-- `results.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);`
- should display "Loading..." if the item exists in list but `!result.executionTime`