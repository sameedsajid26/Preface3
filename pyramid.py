def pyramid(height,spaces):
    if height == 0:
        return
    else:
        for n_spaces in range(1,height):
            print(' ',end = '')

        for n_hashes in range(1,spaces*2):
            print('#',end='')

        print()
        return pyramid(height-1,spaces+1)

def reverse_pyramid(height,spaces):
    if height == 0:
        return
    else:
        for n_spaces in range(1,spaces):
            print(' ',end = '')

        for n_hashes in range(1,height*2):
            print('-',end='')

        print()
        return reverse_pyramid(height-1,spaces+1)

# reverse_pyramid(6,1)
pyramid(6,1)
reverse_pyramid(6,1)