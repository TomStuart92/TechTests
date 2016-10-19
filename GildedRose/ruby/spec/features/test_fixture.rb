#!/usr/bin/ruby -w
require './lib/gilded_rose'
items = [
  Item.new(name="+5 Dexterity Vest", sell_in=10, quality=20),
  Item.new(name="Aged Brie", sell_in=2, quality=0),
  Item.new(name="Elixir of the Mongoose", sell_in=5, quality=7),
  Item.new(name="Sulfuras, Hand of Ragnaros", sell_in=0, quality=80),
  Item.new(name="Sulfuras, Hand of Ragnaros", sell_in=-1, quality=80),
  Item.new(name="Backstage passes to a TAFKAL80ETC concert", sell_in=15, quality=20),
  Item.new(name="Backstage passes to a TAFKAL80ETC concert", sell_in=10, quality=49),
  Item.new(name="Backstage passes to a TAFKAL80ETC concert", sell_in=5, quality=49),
  Item.new(name="Conjured Mana Cake", sell_in=3, quality=6)]

days = 100


gilded_rose = GildedRose.new items

string = ""

(0...days).each do |day|
  string << "-------- day #{day} --------\n"
  string << "name, sellIn, quality\n"
  items.each do |item|
    string << item.to_s
  end
  string << "\n"
  gilded_rose.update_quality
end

File.open('./spec/features/current_run.txt', 'w') { |file| file.write(string) }
