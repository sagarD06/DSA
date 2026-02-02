def FractionalKnapsack(items_wt, prices, capacity):
    n = len(items_wt)
    items = [(prices[i], items_wt[i], prices[i]/items_wt[i]) for i in range(n)]

    for i in range(n):
        for j in range(i+1,n):
            if(items[i][2] < items[j][2]):
                items[i],items[j] = items[j], items[i]

    profit = 0.0
    for price,wt,perKgPrice in items:
        if(wt <= capacity):
            profit += price
            capacity -= wt
        else:
            profit += perKgPrice * capacity
    return profit

items_wt = [7,3,4,5]
prices = [24,21,12,10]
capacity = 20
totalProfit = FractionalKnapsack(items_wt,prices,capacity)
print("Total prfit earned is: ", totalProfit)
