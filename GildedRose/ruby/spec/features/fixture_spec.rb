golden_master = File.read("./spec/features/golden_master.txt")
golden_master_lines = golden_master.split("\n")

`ruby ./spec/features/test_fixture.rb`
current_output = File.read("./spec/features/current_run.txt")
current_output_lines = current_output.split("\n")

lines_to_compare = [golden_master_lines.count, current_output_lines.count].max

describe 'Golden Master for GildedRose' do
  lines_to_compare.times do |line_num|
    it "match line #{line_num}: #{current_output_lines[line_num]} should equal #{golden_master_lines[line_num]}" do
      expect(current_output_lines[line_num]).to eq golden_master_lines[line_num]
    end
  end
end
