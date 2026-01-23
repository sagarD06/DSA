# TC: O(n2) SC: O(1)
def BubbleSort(arr):
    n = len(arr)
    
    for i in range(n-1):
        for j in range(n-1-i):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]

# TC: O(n) SC: O(n)
def BubbleSortRecursion(arr,n):
    # Base case
    if n == 1:
        return
    
    for i in range(n-1):
        if arr[i] > arr[i+1]:
            arr[i],arr[i+1] = arr[i+1],arr[i]
    
    BubbleSortRecursion(arr, n-1)

lst = [10,45,12,50,30,25,5]
# BubbleSort(lst)
BubbleSortRecursion(lst, len(lst))
print(lst)
