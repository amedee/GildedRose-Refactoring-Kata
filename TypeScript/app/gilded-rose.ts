import {CustomItemFactory} from "./items";

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
    itemFactory: CustomItemFactory;
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.itemFactory = new CustomItemFactory();
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            this.itemFactory.customiseItem(item).updateState();
            this.checkQualityRange(item);
        });
        return this.items;
    }

    private checkQualityRange(item: Item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = Math.max(Math.min(item.quality, 50), 0);
        }
    }
}
