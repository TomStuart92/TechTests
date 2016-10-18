# Understands how to keep track of transaction value
class Money
  def initialize(value = 0)
    raise 'Please Use Integer Value' unless value.is_a? Integer
    @value = value
  end

  def to_s
    '£' + format('%0.02f', value)
  end

  def formatted
    value < 0 ? "|| #{self}" : "#{self} ||"
  end

  def +(other)
    raise 'Please add Money instance' unless other.is_a? Money
    Money.new(value + other.compare_value)
  end

  protected

  def compare_value
    value
  end

  private

  attr_reader :value
end
