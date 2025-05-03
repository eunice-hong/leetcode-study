/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function maxProfit(prices: number[]): number {
    // Initialize minimum price to a very large value and max profit to 0
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
      if (price < minPrice) {
            // Update minPrice if the current price is lower than any seen before
            minPrice = price;
        } else {
            // Calculate the profit if selling at the current price after buying at minPrice
            // Update maxProfit if this profit is greater than the previous maxProfit
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }
    // Return the maximum profit found
    return maxProfit;
}
