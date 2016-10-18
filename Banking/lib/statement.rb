# understands how to record transactions

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
      output << "#{transaction[:date]} || #{transaction[:amount].formatted} || #{transaction[:balance]}\n"
    end
    return output
  end

  private
  attr_reader :account_history

end
