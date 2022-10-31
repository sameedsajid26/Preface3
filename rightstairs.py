
def lower_right(h):
    # n = int(input("Enter number of steps: "))

    for row in range(h,0,-1):
        print("#" * row)

def upper_right(h):
    # n = int(input("Enter number of steps: "))

    for row in range(1, h+1):
        for hash in range(row):
            print('#',end='')

        print()
        # print("#" * i)

choice = input("Which pyramid do you want to print (U/L): ")
height = int(input("Enter number of steps: "))

if choice.upper() == 'U':
    upper_right(height)
elif choice.upper() == 'L':
    lower_right(height)
