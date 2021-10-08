export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.doUpdateQuality(this.items[i]);
        }

        return this.items;
    }

    private doUpdateQuality(item: Item) {
        if (item.name == 'Aged Brie') {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
            item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                }
            }
        } else {
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1
                        }
                    }
                }
                item.sellIn = item.sellIn - 1;
                if (item.sellIn < 0) {
                    item.quality = 0
                }
            } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
                // Nothing to do!
            } else {
                if (item.quality > 0) {
                    item.quality = item.quality - 1
                }
                item.sellIn = item.sellIn - 1;
                if (item.sellIn < 0) {
                    if (item.quality > 0) {
                        item.quality = item.quality - 1
                    }
                }
            }
        }
    }
}
