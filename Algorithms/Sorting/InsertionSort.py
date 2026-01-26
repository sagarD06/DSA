def InsertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while(j>=0 and key < arr[j]):
            arr[j+1] = arr[j]
            j = j-1
        arr[j+1] = key

def InsertionSortRecursion(arr, n=None):
    if(n is None):
        n = len(arr)
    
    # Base case
    if(n<=1):
        return
    
    InsertionSortRecursion(arr, n-1)

    key = arr[n-1]
    j = n-2

    while(j>=0 and key < arr[j]):
        arr[j+1] = arr[j]
        j = j-1
    arr[j+1] = key

lst = [10,45,12,50,30,25,5]
# InsertionSort(lst)
InsertionSortRecursion(lst)
print(lst)