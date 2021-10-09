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
        this.items.forEach(item => this.updateState(item));
        return this.items;
    }

    private updateState(item: Item) {
        switch (item.name) {
            case 'Aged Brie':
                item.sellIn -= 1;
                if (item.sellIn < 0) {
                    item.quality += 2;
                } else {
                    item.quality += 1;
                }
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                item.sellIn -= 1;
                if (item.sellIn < 0) {
                    item.quality = 0;
                } else if (item.sellIn < 5) {
                    item.quality += 3;
                } else if (item.sellIn < 10) {
                    item.quality += 2;
                } else {
                    item.quality += 1;
                }
                break;
            case 'Sulfuras, Hand of Ragnaros': // Nothing to do!
                break;
            default:
                item.sellIn -= 1;
                if (item.sellIn < 0) {
                    item.quality += -2;
                } else {
                    item.quality += -1;
                }
                break;
        }
        this.checkQualityRange(item);
    }

    private checkQualityRange(item: Item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = Math.max(Math.min(item.quality, 50), 0);
        }
    }
}
