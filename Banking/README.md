## Banking TechTest

This is a solution to the [Second Makers Academy TechTest.](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)

```
Requirements

You should be able to interact with the your code via IRB. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see

date       || credit || debit   || balance
14/01/2012 ||        || 500.00  || 2500.00
13/01/2012 || 2000.00||         || 3000.00
10/01/2012 || 1000.00||         || 1000.00
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
