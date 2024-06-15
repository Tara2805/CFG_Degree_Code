
def plus_two(num):
result = num + 2
return result

plus_two(5)
* result is 7
#This is a regular function, let’s convert it to an anonymous lambda function step by step.
#Simplify the function
def plus_two(num):
return num + 2

#2. Turn it into one line function
def plus_two(num): return num + 2

#3. Remove ‘def’, ‘name’ and ‘return’ keywords
num: num + 2
#4. Add the ‘lambda’ keyword and assign to a variable
plus_two = lambda num: num + 2

plus_two(5)
* result is 7

#.MAP
my_list = [2, 4, 6, 8]
print(my_list)

def add_five(number):
return number + 5

new_list_A = list(map(add_five, my_list))
print(new_list_A)

#WITH LAMBDAs
new_list_B = list(map(lambda x: x + 5, my_list))
print(new_list_B)

#.FILTER()
# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter out even numbers using lambda function
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

# Print the filtered even numbers
print("Even numbers:", even_numbers)


students = [
    {'name': "Jane", 'age': 43, 'specialisation': 'Software'},
    {'name': "Priya", 'age': 24, 'specialisation': 'Data'},
    {'name': "Diana", 'age': 18, 'specialisation': 'Data'}
]

# get info for a student called 'Priya' ( a search criteria can be anything:
# an ID, a name, name and surname together and many more)

# def get_info(student):
#     if student['name'] == 'Priya':
#         return True
#     else:
#         return False

result = list(filter(lambda student: student['name'] == 'Priya', students  ))

print (result)

#.REDUCE()
def maximum(x, y):
    return x if x > y else y

numbers1 = [12, 45, 23, 67, 9, 100, 34]

# max_number = reduce(maximum, numbers1)


max_number_lambda = reduce(lambda x,y: x if x > y else y , numbers1)


# print("The maximum number is:", max_number)
print("The maximum number is:", max_number_lambda)

def triple1(num):
    return num * 3
#or
triple2 = lambda num : num * 3

print(triple2(4))

