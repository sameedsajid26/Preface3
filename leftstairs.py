
def upper_left(height):
    for row in range(1,height+1): #for every row

        for spaces in range(height-row): #for spaces
            print(' ',end='')

        for stars in range(1,row+1): #for stars
            print('*',end='')

        print()

def lower_left(height):
    for row in range(0,height):
        for spaces in range(0,row):
            print(" ",end='')

        for stars in range(0,height-row):
            print('*',end='')

        print()

choice = input("Which pyramid do you want to print (U/L): ")
height = int(input("How tall should be the pyramid: "))

if choice.upper() == 'U':
    upper_left(height)
elif choice.upper() == 'L':
    lower_left(height)




