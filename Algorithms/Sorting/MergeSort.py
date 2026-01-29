def merge_sort(arr):
    # Base case
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2

    # Divide
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    # Conquer (merge)
    return merge(left, right)


def merge(left, right):
    merged = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    # Add remaining elements
    merged.extend(left[i:])
    merged.extend(right[j:])

    return merged

arr = [8, 3, 5, 2, 9, 1]
sorted_arr = merge_sort(arr)
print(sorted_arr)
