// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
    }
}

export class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(newSize) {
        let maxWidth = this.screenSize.width - this.position.x;
        let maxHeight = this.screenSize.height - this.position.y;
        this.size.width = Math.min(Math.max(newSize.width, 1), maxWidth);
        this.size.height = Math.min(Math.max(newSize.height, 1), maxHeight);
    }

    move(newPosition) {
        let maxX = this.screenSize.width - this.size.width;
        let maxY = this.screenSize.height - this.size.height;
        this.position.x = Math.max(Math.min(newPosition.x, maxX), 0);
        this.position.y = Math.max(Math.min(newPosition.y, maxY), 0);
    }
}

export function changeWindow(window) {
    let newSize = new Size(400, 300);
    let newPosition = new Position(100, 150);
    window.resize(newSize);
    window.move(newPosition);
    return window;
}
