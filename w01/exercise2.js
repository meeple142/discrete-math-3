function gcd(m, n) {
    let count = 0;

    if (m === 0 || n === 0) {
        return {
            m: -1,
            count: -1
        };
    }

    while (n !== 0) {
        let remainder = m % n;
        m = n;
        n = remainder;

        count++;
    }    

    return {
        m: m,
        count: count
    };
}

console.log(`gcd(0, 23): ${gcd(0, 23).m}. Loop count: ${gcd(0, 23).count}`);
console.log(`gcd(1000, 439: ${gcd(1000, 439).m}. Loop count: ${gcd(1000, 439).count}`);
console.log(`gcd(439, 1000): ${gcd(439, 1000).m}. Loop count: ${gcd(439, 1000).count}`);
console.log(`gcd(743, 83): ${gcd(743, 83).m}. Loop count: ${gcd(743, 83).count}`);
console.log(`gcd(83, 743): ${gcd(83, 743).m}. Loop count: ${gcd(83, 743).count}`);
