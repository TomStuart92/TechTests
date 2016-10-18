# understands how to keep track of transaction value

class Money
  def initialize(value = 0)
   raise "Please Provide Integer Value" unless value.is_a? Integer
   @value = value
  end

  def to_s
    "£"+sprintf( "%0.02f", value)
  end

  def formatted
    value < 0 ? "|| #{self}" : "#{self} ||"
  end

  def +(other)
    raise "Can only add Instance of Money Class" unless other.is_a? Money
    return Money.new(value + other.get_value)
  end

  protected

  def get_value
    value
  end

  private

  attr_reader :value
end
