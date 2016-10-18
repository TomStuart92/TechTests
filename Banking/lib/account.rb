require_relative 'money'
require_relative 'statement'
require 'date'

# Understands how to transact with money
class Account
  def initialize(money_class = Money, statement_object = Statement.new)
    @statement = statement_object
    @money_class = money_class
    @current_balance = money_class.new(0)
  end

  def deposit(date, amount)
    transaction = validate_transaction(date, amount)
    @current_balance += transaction[:amount]
    statement.record(transaction)
  end

  def withdraw(date, amount)
    transaction = validate_transaction(date, -amount)
    @current_balance += transaction[:amount]
    statement.record(transaction)
  end

  def print_statement
    statement.to_s
  end

  private

  attr_reader :statement, :current_balance, :money_class

  def validate_transaction(date, amt)
    parsed = validate_date(date)
    raise 'Can only transact integer amounts' unless amt.is_a? Integer
    { date: parsed, amount: money_class.new(amt), balance: current_balance }
  end

  def validate_date(date)
    Date.parse(date)
  rescue
    raise 'Please check format of Date'
  end
end
