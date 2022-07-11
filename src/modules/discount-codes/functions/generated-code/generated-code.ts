import * as cryptojs from 'crypto-js';

export class Generated {
    static codeDiscount() {
        const min = 1;
        const max = 99999999
        const ramdom = Math.random() * (min - max);
        let hashCopy = `${ramdom}/${new Date()}`;
        return cryptojs.MD5(hashCopy).toString();
    };
};