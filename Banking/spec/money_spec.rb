require 'money'

describe Money do
  subject(:money) { described_class.new(1000) }
  let(:add_amount) { described_class.new(2000) }
  let(:minus_amount) { described_class.new(-500) }

  describe 'displaying money value' do
    it 'has a value in pence' do
      expect(money.to_s).to eq('£1000.00')
    end

    it 'raises error if value is non integer' do
      expect { Money.new('Value') }.to raise_error('Please Use Integer Value')
    end

    it 'has a string formatted value in pounds for credits' do
      expect(money.formatted).to eq('£1000.00 ||')
    end

    it 'has a string formatted value in pounds for debits' do
      expect(minus_amount.formatted).to eq('|| £-500.00 ')
    end
  end

  describe 'addition of money instances' do
    it 'can add two money values together' do
      result = money + add_amount
      expect(result.to_s).to eq('£3000.00')
    end

    it 'can minus two money values' do
      result = money + minus_amount
      expect(result.to_s).to eq('£500.00')
    end

    it 'raises on other class addition' do
      expect { money + 200 }.to raise_error('Please add Money instance')
    end
  end
end
