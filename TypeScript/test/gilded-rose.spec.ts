import {GildedRose, Item} from '../app/gilded-rose';
import {goldenMaster} from "./golden-master-text-test";

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(JSON.stringify(items[0])).toMatchSnapshot();
    });

    it('should be verified with golden master', () =>
        expect(goldenMaster()).toMatchSnapshot());
});
