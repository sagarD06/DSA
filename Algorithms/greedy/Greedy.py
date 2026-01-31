#Question is to find the maximum sum possible and minimum sum possible
#sort the arr **
#For max sum we are using two pointers from ends
#For min sum we are using adjacent elements 
def greedy(arr):
    arr.sort()
    i = 0
    j = len(arr) -1
    max_sum = min_sum = 0
    for i in range(len(arr)//2):
        max_sum += abs(arr[i] - arr[j])
        j-=1
        min_sum += abs(arr[2*i] - arr[2*i+1]) #adjacent elements will be one even and one odd
    print(max_sum, min_sum)

arr= [30,25,5,8,10,12,15,2] #[2,5,8,10,12,15,25,30]
greedy(arr)

def min_coin(total):
    coins = [1,2,5,10,20,50,100,500,1000] # if given in question hten the sort the money arr
    count=0
    n = len(coins)-1
    while total >= 0 and n>= 0:
        if(coins[n] <= total):
            total -= coins[n]
            print(coins[n],total)
            count +=1
        else:
            n-=1
    print(count)

min_coin(1024) #500,500,20,2,2