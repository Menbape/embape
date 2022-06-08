// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010100000101010100000000000000000000000000000001010000000100000000000000000000000101010001000000010101010000000000000101010100000000000000010000000000010101000000000000000001010000000001000000010000010000010000000000000001010100000101000000000000000001010000000000010101000000010100010000010101010000010000010100010100000100010001000100000100000000000001000100000000000001010000000101000000000100000000000100000001000000010001010100010001000000010000010101000101010000010101010102020100010000000101000000`, img`
2 2 2 2 2 2 . . 2 2 2 2 . . . . 
. . . . . . . . . . . 2 2 . . . 
2 . . . . . . . . . . . 2 2 2 . 
2 . . . 2 2 2 2 . . . . . . 2 2 
2 2 . . . . . . . 2 . . . . . 2 
2 2 . . . . . . . . 2 2 . . . . 
2 . . . 2 . . 2 . . 2 . . . . . 
. . 2 2 2 . . 2 2 . . . . . . . 
. 2 2 . . . . . 2 2 2 . . . 2 2 
. 2 . . 2 2 2 2 . . 2 . . 2 2 . 
2 2 . . 2 . 2 . 2 . 2 . . 2 . . 
. . . . 2 . 2 . . . . . . 2 2 . 
. . 2 2 . . . . 2 . . . . . 2 . 
. . 2 . . . 2 . 2 2 2 . 2 . 2 . 
. . 2 . . 2 2 2 . 2 2 2 . . 2 2 
2 2 2 . . 2 . 2 . . . 2 2 . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.chestOpen], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
