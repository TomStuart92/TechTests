## Banking TechTest

This is a solution to the [Second Makers Academy TechTest.](https://github.com/makersacademy/course/blob/master/individual_challenges/database_server.md)

```
Before your interview, write a program that runs a server that is accessible on http://localhost:4000/.
When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory.
When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey.
During your [mock] interview, you will pair on saving the data to a file.
```

## Instructions

- Clone Repository to your local machine.
- Run `Bundle Install`
- Run `irb -r './lib/account.rb'` to interact with the program.
- Run `Rspec spec` to access the test suite.

## Usage

After loading the file into IRB, the program can be interacted with as follows:

```
irb -r './lib/account.rb'
2.2.4 :001 > account = Account.new
 => #<Account:0x007fd11bb01938 @statement=#<Statement:0x007fd11bb01910 @account_history=[]>, @money_class=Money, @current_balance=#<Money:0x007fd11bb01898 @value=0>>
2.2.4 :002 > puts account.print_statement
date || credit || debit || balance
 => nil
2.2.4 :003 > account.deposit("10-08-2012",1000)
 => [{:date=>#<Date: 2012-08-10 ((2456150j,0s,0n),+0s,2299161j)>, :amount=>#<Money:0x007fd11baf11f0 @value=1000>, :balance=>#<Money:0x007fd11bb01898 @value=0>}]
2.2.4 :004 > puts account.print_statement
date || credit || debit || balance
2012-08-10 || £1000.00 || || £0.00
 => nil
2.2.4 :005 > account.withdraw("11-08-2012",100)
 => [{:date=>#<Date: 2012-08-10 ((2456150j,0s,0n),+0s,2299161j)>, :amount=>#<Money:0x007fd11baf11f0 @value=1000>, :balance=>#<Money:0x007fd11bb01898 @value=0>}, {:date=>#<Date: 2012-08-11 ((2456151j,0s,0n),+0s,2299161j)>, :amount=>#<Money:0x007fd11badba80 @value=-100>, :balance=>#<Money:0x007fd11baf11a0 @value=1000>}]
2.2.4 :006 > puts account.print_statement
date || credit || debit || balance
2012-08-10 || £1000.00 || || £0.00
2012-08-11 || || £-100.00 || £1000.00
 => nil
```

## Design Notes

The program is built around three core classes:

- The Money class which can track value through financial transactions. Employed to match best practice when dealing with currency and to avoid issues with floating point arithmetic.
- The Statement class which is responsible for recording financial transactions.
- The Account class which is responsible for delegating to the other two classes.

Classes dependencies are injected, and public interfaces minimised to keep them loosely coupled.

Program is fully tested (100% coverage) using RSpec. 
