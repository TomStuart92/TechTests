require_relative 'item'

class GildedRose

  def initialize(items)
    @items = items
  end

  def update_quality
    updated_items = seperate_items.each do |key, value|
      value.each do |item|
        rate = get_rate(item)
        update_item(item, rate)
      end
    end
    @items = updated_items.values.flatten
  end

  private

  def seperate_items
    @items.group_by(&:name)
  end

  def update_item(item, rate)
    item.sell_in -= rate[:sell_in]
    item.quality -= rate[:quality]
  end

  def get_rate(item)
    item.name


    return {sell_in: 0, quality: 0 } if item.sell_in <= 0
    return {sell_in: 1, quality: 0 } if item.quality >= 50
    rates = {"Aged Brie" => {sell_in: 1, quality: -1 },
     "Sulfuras, Hand of Ragnaros" => {sell_in: 0, quality: 0 },
     "Backstage passes to a TAFKAL80ETC concert" => {sell_in: 1, quality: -(1 + (10/item.sell_in)) }}
    other = {sell_in: 1, quality: 1 }
    rates(item).include?(item.name) ? rates[item.name] : other
  end

end
