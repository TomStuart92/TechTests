# understands how to aggregate money
require 'money'
class Account

  def initialize(money_class = Money)
    @money_class = money_class
    @current_balance = @money_class.new(0)
  end

  def current_balance
    @current_balance.to_s
  end

  def deposit(amount)
    @current_balance += @money_class.new(amount)
  end

  def withdraw(amount)
    @current_balance -= @money_class.new(amount)
  end

end
