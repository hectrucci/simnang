const Sprites = {
    C: [0b01111111, 0b01000000, 0b01000000, 0b01000000, 0b01000000, 0b01000000, 0b01111111],
    E: [0b01111111, 0b01000000, 0b01000000, 0b01111111, 0b01000000, 0b01000000, 0b01111111],
    H: [0b01000001, 0b01000001, 0b01000001, 0b01111111, 0b01000001, 0b01000001, 0b01000001],
    O: [0b01111111, 0b01000001, 0b01000001, 0b01000001, 0b01000001, 0b01000001, 0b01111111],
    R: [0b01111111, 0b01000001, 0b01000001, 0b01111111, 0b01000100, 0b01000010, 0b01000001],
    T: [0b01111111, 0b00001000, 0b00001000, 0b00001000, 0b00001000, 0b00001000, 0b00001000],
    LINE: [0b11111111],
};

export const initialSprites = [
    {
        x: 7,
        y: 10,
        sprite: Sprites.H,
    },
    {
        x: 15,
        y: 10,
        sprite: Sprites.E,
    },
    {
        x: 23,
        y: 10,
        sprite: Sprites.C,
    },
    {
        x: 31,
        y: 10,
        sprite: Sprites.T,
    },
    {
        x: 39,
        y: 10,
        sprite: Sprites.O,
    },
    {
        x: 47,
        y: 10,
        sprite: Sprites.R,
    },
    {
        x: 7,
        y: 18,
        sprite: Sprites.LINE,
    },
    {
        x: 15,
        y: 18,
        sprite: Sprites.LINE,
    },
    {
        x: 23,
        y: 18,
        sprite: Sprites.LINE,
    },
    {
        x: 31,
        y: 18,
        sprite: Sprites.LINE,
    },
    {
        x: 39,
        y: 18,
        sprite: Sprites.LINE,
    },
    {
        x: 47,
        y: 18,
        sprite: Sprites.LINE,
    },
    {
        x: 48,
        y: 18,
        sprite: Sprites.LINE,
    },
    {
        x: 7,
        y: 8,
        sprite: Sprites.LINE,
    },
    {
        x: 15,
        y: 8,
        sprite: Sprites.LINE,
    },
    {
        x: 23,
        y: 8,
        sprite: Sprites.LINE,
    },
    {
        x: 31,
        y: 8,
        sprite: Sprites.LINE,
    },
    {
        x: 39,
        y: 8,
        sprite: Sprites.LINE,
    },
    {
        x: 47,
        y: 8,
        sprite: Sprites.LINE,
    },
    {
        x: 48,
        y: 8,
        sprite: Sprites.LINE,
    },
];

export default Sprites;
