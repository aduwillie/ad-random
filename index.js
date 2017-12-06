const uuid = require('node-uuid');
const crypto = require('crypto');

const random = (min, max, inclusive) => {
    const difference = inclusive ? (max - min + 1) : (max - min);
    return Math.floor(Math.random() * difference + min);
}

const randomHex = (length) => {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
}

const randomBase64 = (length) => {
    return crypto.randomBytes(Math.ceil(length *  3 / 4))
        .toString('base64')
        .slice(0, length)
        .replace(/\+/g, '0')
        .replace(/\//g, '0');
}

module.exports = {
    random,
    uuid,
    randomHex,
    randomBase64,
}
