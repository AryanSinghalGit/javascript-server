function equilateral(n: number): void {
    for (let i: number = 0; i < n; i++) {
        let str: string = '';
        for (let k: number = 0; k < n - i - 1; k++) {
            str = str + ' ';
        }
        for (let j: number = 0; j <= i; j++) {

            str = str + '* ';
        }
        console.log(str);
    }
}
export default equilateral;