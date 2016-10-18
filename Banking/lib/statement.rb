# Understands how to record transactions
class Statement
  def initialize
    @account_history = []
  end

  def record(transaction)
    account_history << transaction
  end

  def to_s
    output = "date || credit || debit || balance\n"
    account_history.each do |transaction|
      output << "#{transaction[:date]} ||"
      output << " #{transaction[:amount].formatted} ||"
      output << " #{transaction[:balance]}\n"
    end
    output
  end

  private

  attr_reader :account_history
end
