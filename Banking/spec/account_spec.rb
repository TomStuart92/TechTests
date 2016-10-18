require 'account'
describe Account do
  let(:money_class) { double :money_class, new: money }
  let(:money) { double :money, to_s: '£0.00', :+ => new_balance }
  let(:new_balance) { double :money, to_s: '£100.00' }

  let(:statement) { double :statement, record: nil, to_s: nil }

  subject(:account) { described_class.new(money_class, statement) }

  describe 'Edge Cases' do
    it 'wont transact unless amount is integer' do
      error = 'Can only transact integer amounts'
      expect { account.deposit('2016-10-17', '100') }.to raise_error(error)
    end
    it 'wont transact unless date is parseable' do
      error = 'Please check format of Date'
      expect { account.deposit('Date', 100) }.to raise_error(error)
    end
  end

  describe 'Deposits' do
    it 'creates new money instance to add two values' do
      account.deposit('2016-10-17', 100)
      expect(money_class).to have_received(:new).with(100)
    end

    it 'defers to money instance to add two values' do
      account.deposit('2016-10-17', 100)
      expect(money).to have_received(:+)
    end
  end

  describe 'Withdrawals' do
    it 'creates new money instance to add two values' do
      account.withdraw('2016-10-17', 100)
      expect(money_class).to have_received(:new).with(-100)
    end

    it 'defers to money instance to add two values' do
      account.withdraw('2016-10-17', 100)
      expect(money).to have_received(:+)
    end
  end

  describe 'Statement Records' do
    before do
      allow(Date).to receive(:parse).and_return('2016-10-17')
    end
    it 'delegates recording transactions' do
      account.deposit('2016-10-17', 100)
      expect(statement).to have_received(:record)
    end

    it 'parses date string' do
      account.deposit('2016-10-17', 100)
      expect(Date).to have_received(:parse).with('2016-10-17')
    end

    it 'delegates returning statement' do
      account.deposit('2016-10-17', 100)
      account.print_statement
      expect(statement).to have_received(:to_s)
    end
  end
end
