# TC:O(n2) SC:O(1)
def selectionSort(arr):
    for i in range(len(arr)):
        for j in range(i,len(arr)):
            if(arr[j] < arr[i]):
                arr[i],arr[j] = arr[j],arr[i]

# TC:O(n) SC:O(n)
def selectionSortRecursion(start,arr):
    if start == len(arr)-1:
        return
    for j in range(start,len(arr)):
        if(arr[j] < arr[start]):
            arr[start],arr[j] = arr[j],arr[start]
    selectionSortRecursion(start+1, arr)

lst = [10,45,12,50,30,25,5]
# selectionSort(lst)
selectionSortRecursion(0,lst)
print(lst)