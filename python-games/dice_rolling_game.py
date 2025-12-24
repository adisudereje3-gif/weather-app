import random

while True:
    choice = input(f'Do you want to roll the dice? (y/n):').lower()
    if choice == 'y':
        dice1 = random.randint(1, 6)
        dice2 = random.randint(1, 6)
        print(f'you rolled {dice1} ,{dice2}')
    elif choice == 'n':
        print('Thanks for playing!')
        break
    else:
        print('Invalid input,please enter y or n.')
