import {GildedRose, Item} from '../app/gilded-rose';

export function goldenMaster() {
    const items = [
        new Item("+5 Dexterity Vest", 10, 20), //
        new Item("Aged Brie", 2, 0), //
        new Item("Elixir of the Mongoose", 5, 7), //
        new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        // this conjured item does not work properly yet
        new Item("Conjured Mana Cake", 3, 6)];

    const gildedRose = new GildedRose(items);
    let days: number = 2;
    let consoleLog: string = '';
    for (let i = 0; i < days; i++) {
        consoleLog += "-------- day " + i + " --------" + '\n';
        consoleLog += "name, sellIn, quality" + '\n';
        items.forEach(element => {
            consoleLog += element.name + ' ' + element.sellIn + ' ' + element.quality + '\n';
        });
        consoleLog += '\n';
        gildedRose.updateQuality();
    }
    return consoleLog;
}

console.log(goldenMaster());
