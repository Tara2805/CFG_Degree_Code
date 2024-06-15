#EXAMPLE 1 - try / except
denominator = int(input("Please enter a number to divide by: "))
try:
    division_result = 100 / denominator
    print(division_result)

except ZeroDivisionError:
    print("You cannot divide by 0, please try gain")

#EXAMPLE 2 -- raise exception
 number = int(input('Enter a number in the range 5-10: '))

 try:
     if number < 5 or number > 10:
         raise Exception

    division_result = 100 / number
     print(division_result)
     print("Well Done")

 except:
     print("Your number is NOT in the requested range")

#USER DEFINED EXCEPTIONS
class ValueIsBelowHundredError(ValueError):
    #Raised when value is below 100*/

def check_value(value):
   #/*Function to check if value is below 100.*/
    if value < 100:
        raise ValueIsBelowHundredError("Value is below 100")
    else:
        print("Value is valid.")

#Example usage:
try:
    check_value(1000)
except ValueIsBelowHundredError as e:
    print("Caught custom exception:", e)

#DEBUGGING
def debugging_n_breakpoints():
    my_list = []
    for i in range(10):
        new_i = 10 + i

        # import pdb
        # pdb.set_trace()

        print('new value is: ', i)
        my_list.append((new_i))
    return my_list

debugging_n_breakpoints()

#LONG EXAMPLE
def name_validated(name_string):
    if ',' not in name_string:
        raise ValueError("incorrect input: missing ',' to sepreate name and surname")
    
    name, surname = name_string.split(',')

    if not len(name) or not len(surname): 
         raise ValueError("incorrect input: missing name or surname ")

def age_validated(age): 
    if age < 0 : 
        raise ValueError("only positive number allowed")
    
    assert 12 < age <= 19
    return True



def teenager_club_registration_program() :
    isSuccessful = False 
    try: 
        name= input('Enter name separate by comma: ')
        name_validated(name)

        age = int(input('Enter age: '))
        age_validated(age)

    except  ValueError as exc:
         print("Invalid input: %s" % exc)

    except AssertionError as exc: 
         print("The age is not within the teen category")

    else: 
         with open("registraton_file.txt", 'a+') as file:
            file.write("New member name: {} and age {} . \n".format(name, age))
            isSuccessful = True
    finally:   
        if isSuccessful:
            print('registraton done!!!') 
        else:
            print('registraton NOT done!!!')  


teenager_club_registration_program()

# def readFile(file_name):
#     print('COMPLETE THIS')

# readFile('registraton_file.txt')
