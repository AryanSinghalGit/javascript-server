function diamond(n: number): void {
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
    for (let i: number = n; i > 0; i--) {
        let str: string = '';
        for (let k: number = 0; k < n - i; k++) {
            str = str + ' ';
        }
        for (let j: number = 0; j < i; j++) {
            str = str + '* ';
        }
        console.log(str);
    }
}
export default diamond;