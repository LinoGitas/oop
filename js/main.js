'use strict';

// OOP -object oriented programming ( objektinis programavimas )

// class - pagrindinis dalykas (receptas)
// oject - class'es gaminys (pyragas)

// params:
// resolution
// ratio
// color
// remote: true/false
// type flat / CRT

// metodai: kagalima su juo daryti?
// ijungti / isjungti
// pakeisti kanala
// keisti garsa

class Tv { 
    constructor(name, resolution, ratio, color, remote, type ) {
        this.name = name;
        this.resolution = resolution;
        this.ratio = ratio;
        this.color = color;
        this.hasRemote = remote;
        this.type = type;
        this.turnedOn = false;
        this.channel = '';
        this.volume = 0;
    }

    turnOn( params ) {
        this.turnedOn = true;

        console.log(this.name + ' has neen turn on.');
    }

    turnOff( params ) {
        this.turnedOn = false;
        console.log(this.name + ' has neen turn off.');
    }
}

const silelis = new Tv('silelis', [4000, 3000], [4, 3], 'black', false, 'CRT');
console.log( silelis );

const lg = new Tv('lg',[8000, 6000], [4, 3], 'silver', true, 'flat');
console.log( lg );

silelis.turnOn();
silelis.turnOff();

lg.turnOn();
lg.turnOff();