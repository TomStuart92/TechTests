# understands how to record transaction statements

class Money
  def initialize(value)
    @value = value
    @currency = "GBP"
  end

  def value
    @value
  end

  def to_s
     "£"+sprintf( "%0.02f", @value)
  end

# protected
  def +(other)
    return Money.new(self.value + other.value)
  end

  def -(other)
    return Money.new(self.value - other.value)
  end
end
