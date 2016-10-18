require 'money'

describe Money do

  subject(:money) {described_class.new(10000)}
  let(:add_amount) {described_class.new(20000)}
  let(:minus_amount) {described_class.new(5000)}

  it 'has a value in pence' do
    expect(money.pence).to eq(10000)
  end

  it 'has a string formatted value in pounds' do
    expect(money.to_s).to eq("£100.00")
  end

  it 'can can add two money values together' do
    result = money + add_amount
    expect(result.pence).to eq(30000)
  end

  it 'can can minus two money values' do
    result = money - minus_amount
    expect(result.pence).to eq(5000)
  end

end
