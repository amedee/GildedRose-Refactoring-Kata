import {GildedRose, Item} from '../app/gilded-rose';
import {goldenMaster} from "./golden-master-text-test";

function doUpdateQuality(name: string, sellIn: number, quality: number) {
    const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
    return JSON.stringify(items[0]);
}

describe('Gilded Rose', () => {

    it('should update quality', () =>
        expect(doUpdateQuality).toVerifyAllCombinations(
            [
                'foo'
            ],
            [-1],
            [0]
        ));

    it('should be verified with golden master', () =>
        expect(goldenMaster()).toMatchSnapshot());
});
