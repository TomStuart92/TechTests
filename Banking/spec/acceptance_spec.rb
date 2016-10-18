require 'account'
describe 'Acceptance Test' do
  subject(:account) { Account.new }

  let(:statement) do
    "date || credit || debit || balance\n"+
    "2012-01-10 || £1000.00 || || £0.00\n"+
    "2012-01-13 || £2000.00 || || £1000.00\n"+
    "2012-01-14 || || £-500.00 || £3000.00\n"
  end

  it 'should correctly track multiple transactions' do
    account.deposit('10-01-2012', 1000)
    account.deposit('13-01-2012', 2000)
    account.withdraw('14-01-2012', 500)
    expect(account.print_statement).to eq(statement)
  end
end
