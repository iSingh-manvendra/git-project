class account:
    def __init__(self,AccHolderName, AccNo, AccType, AccBalance = 0):
        self.AccNo = AccNo
        self.AccType = AccType
        self.AccBalance = AccBalance
        self.AccHolderName = AccHolderName


    # To Deposit amount
    def deposit(self, amount):
        if(amount > 0):
            self.AccBalance += amount
            msg = f"\n{amount},deposited successfully, current balance: {self.AccBalance}"
            print(msg)
            log_to_file(msg)

    # To withdraw amount 
    def withdraw(self, amount):
        if(amount < self.AccBalance):
            self.AccBalance -= amount
            msg = f"\n{amount},withdraw successfully, current Balance: ,{self.AccBalance}"
            print(msg)
            log_to_file(msg)
        else:
            msg = "Insufficient balance"
            print(msg)
            log_to_file(msg)


    # Display Account details
    def dispAccountDetails(self):
        msg = (f"\n--------Account holder details---------\nAcocunt Holder name: {self.AccHolderName}\nAccount number: {self.AccNo}\nAccout type: {self.AccType}\nAccount Balance: {self.AccBalance}\nThank you for using our banking system")
        
        print(f"{msg}")
        log_to_file(msg)
        # here class end

# function for data log into file
def log_to_file(msg):
    file = open("projects/bank-statement.txt","a")
    file.write(f"{msg}")

# main program
AccHolderName = input("Enter Account Holder name:")
AccNo = int(input("Enter Account number: "))
AccType = input("Enter Account type: ")
log_to_file("\n\n--------New account holder----------\n")
log_to_file(AccHolderName)
log_to_file(AccNo)
log_to_file(AccType)
a = account(AccHolderName, AccNo, AccType)

while True:
    print("\nPress 1 for deposit:")
    print("Press 2 for withdraw:")
    print("Press 3 Account details")
    print("Press 4 for exit:")

    userChoice = int(input("Enter Your Choice:"))
    if userChoice == 1:
        amount = int(input("Enter amount:"))
        a.deposit(amount)
    elif userChoice == 2:
        amount = int(input("Enter amount:"))
        a.withdraw(amount)
    elif userChoice == 3:
        a.dispAccountDetails()
    elif userChoice == 4:
        print("Thankyou for using our banking system")
        break

