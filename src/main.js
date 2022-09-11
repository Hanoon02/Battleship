const Ship = (coordinates) => {
    var health = coordinates.length;
    const hit = (position) => {
        coordinates[coordinates.indexOf(position)] = -1;
        health--;
        return isSunk();
    };
    
    const isSunk = () => {
        if(health === 0) {
            return true;
        }
        return false;
    };
    
    return {
        hit,
        isSunk,
    };
};

const Gameboard = () => {
    const shipLengths = [2, 3, 3, 4, 5];
    
    const setCoordinates = () => {
        for(let i = 0; i < shipLengths.length; i++) {
            console.log("Ship " + i + " length: " + shipLengths[i]);
        }
    };

    return {
        setCoordinates,
    };
};

const Player = (name) => {
};