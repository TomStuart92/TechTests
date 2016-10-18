# understands how to transact with money
require_relative 'money'
require_relative 'statement'
require 'date'

class Account

  def initialize(money_class = Money, statement_object=Statement.new)
    @statement = statement_object
    @money_class = money_class
    @current_balance = money_class.new(0)
  end

  def deposit(date, amount)
    transaction = validate_transaction(date,amount)
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

  def validate_transaction(date, amount)
    parsed_date = validate_date(date)
    raise "Can only transact integer amounts" unless amount.is_a? Integer
    return {date: parsed_date, amount: money_class.new(amount), balance: current_balance}
  end

  def validate_date(date)
    begin
      Date.parse(date)
    rescue
      raise "Please check format of Date"
    end
  end
end
