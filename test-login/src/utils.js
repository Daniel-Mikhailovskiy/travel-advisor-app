import React from 'react';

function login(email, password) {
    const delay =(0,7 +Math.random() * 2) * 1000;
    return new Promise ((resolve, reject) => {
        setTimeout( function() {
            if(password === '12345' && !!email) {
                resolve()
            } else {
                reject( new Error('Invalid password or email'))
            }
        }, delay)
    })
}

export default login;