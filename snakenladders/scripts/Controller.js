import {Squares} from './Squares.js'
import {Dice} from './Dice.js'
import {Player} from './Player.js'

const p1 = new Player();
const p2 = new Player();
const dice = new Dice();
const squares = new Squares();

const log = console.log;

log("---------begin----------------");
    log("Turn " + 0 + ", Player 1: " + p1.getPosition()
    + ", Player 2: " + p2.getPosition());


let x = 1
do{
    log("----------------------------");
    let d = dice.throw();
    if(x&2 != 0){
        log("Turno: " + x + ", Player 1: lanzo " + d);
            p1.move(d);
        if(p1.getPosition() < 100){
            if(squares.getSquare(p1.getPosition()) < 0){
                p1.move(squares.getSquare(p1.getPosition()));
                log("Lo siento caiste serpiente, Nueva Posición: " + p1.getPosition());
            }
            else if(squares.getSquare(p1.getPosition()) > 0){
                p1.move(squares.getSquare(p1.getPosition()));
                log("Bien! caiste escalera, Nueva Posición: " + p1.getPosition());
            }
            else{log("Nueva Posición " + p1.getPosition());}
        }
        else{log("Posicion 100 Has ganado");}
    }
    else{
        log("Turno: " + x + ", Player 2: lanzo " + d);
            p2.move(d);
        if(p2.getPosition() < 100){
            if(squares.getSquare(p2.getPosition()) < 0){
                p2.move(squares.getSquare(p2.getPosition()));
                log("Lo siento caiste serpiente, Nueva Posición: " + p2.getPosition());
            }
            else if(squares.getSquare(p2.getPosition()) > 0){
                p2.move(squares.getSquare(p2.getPosition()));
                log("Bien! caiste escalera, Nueva Posición: " + p2.getPosition());
            }
            else{log("Nueva Posición " + p2.getPosition());}
        }
        else{log("Posicion 100 Has ganado");}
    }
    x+=1;

}while(p1.getPosition() < 100)
    
