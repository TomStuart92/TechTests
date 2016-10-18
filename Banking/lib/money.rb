# understands how to record transaction statements

class Money
  def initialize(value)
    @pence = value
    @currency = "GBP"
  end

  def pence
    @pence
  end

  def to_s
     "£"+sprintf( "%0.02f", @pence/100)
  end

  def +(other)
    Money.new(self.pence + other.pence)
  end

  def -(other)
    Money.new(self.pence - other.pence)
  end
end
