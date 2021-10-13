import {Item} from "./gilded-rose";

export interface CustomItem {
    updateState(): void;
}

export class AgedBrie implements CustomItem {
    private item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    updateState(): void {
        this.item.sellIn -= 1;
        if (this.item.sellIn < 0) {
            this.item.quality += 2;
        } else {
            this.item.quality += 1;
        }
    }
}

class BackstagePass implements CustomItem {
    private item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    updateState(): void {
        this.item.sellIn -= 1;
        if (this.item.sellIn < 0) {
            this.item.quality = 0;
        } else if (this.item.sellIn < 5) {
            this.item.quality += 3;
        } else if (this.item.sellIn < 10) {
            this.item.quality += 2;
        } else {
            this.item.quality += 1;
        }
    }
}

class Sulfuras implements CustomItem {
    private item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    updateState(): void {
        // Nothing to do!
    }
}

class StandardItem implements CustomItem {
    private item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    updateState(): void {
        this.item.sellIn -= 1;
        if (this.item.sellIn < 0) {
            this.item.quality += -2;
        } else {
            this.item.quality += -1;
        }
    }
}

export class CustomItemFactory {
    constructor() {
    }

    customiseItem(item: Item): CustomItem {
        switch (item.name) {
            case 'Aged Brie':
                return new AgedBrie(item);
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackstagePass(item);
            case 'Sulfuras, Hand of Ragnaros':
                return new Sulfuras(item);
            default:
                return new StandardItem(item);
        }
    }
}
