function counter() {
    return {
        Count: 0,

        increment() {
            if (this.Count < 10) {
                this.Count++;
            }
        },
        decrement() {
            if (this.Count > 0) {
                this.Count--;
            }
        },
        reset() {
            this.Count = 0;
        },
        max() {
            this.Count = 10;
        },
    };
}
