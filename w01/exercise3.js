function getDiscriminant(a, b, c) {
    return (b * b) - (4 * a * c);
}

function retrieveRoots(a, b, single=false, discriminant=0) {
    if (!single && discriminant === 0) {
        return {
            one: -1,
            two: -1
        };
    }

    if (single) {
        return {
            one: -b / (2 * a),
            two: -1
        };
    } else {
        return {
            one: (-b + Math.sqrt(discriminant)) / (2 * a),
            two: (-b - Math.sqrt(discriminant)) / (2 * a)
        }
    }
}

function findRoots(a, b, c) {
    let discriminant = getDiscriminant(a, b, c);

    if (discriminant < 0) {
        return {
            one: -1,
            two: -1
        };
    } else if (discriminant === 0) {
        return retrieveRoots(a, b, true);
    } else {
        return retrieveRoots(a, b, false, discriminant);
    }
}

console.log('-1 means NOT FOUND');

let zeroRoots = findRoots(1, -3, 4);
console.log(`Real Roots - Zero real root: ${zeroRoots.one.toString()}. Second root: ${zeroRoots.two.toString()}`);

let oneRoot = findRoots(-4, 12, -9);
console.log(`Real Roots - One real root: ${oneRoot.one.toString()}. Second root: ${oneRoot.two.toString()}`);

let twoRoots = findRoots(2, -11, 5);
console.log(`Real Roots - Two real roots: First root: ${twoRoots.one.toString()}. Second root: ${twoRoots.two.toString()}`);
