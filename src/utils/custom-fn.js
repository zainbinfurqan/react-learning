export const CustomFn = {
    mapAr: () => {
        Array.prototype.mapee = function (callback) {
            const arr = []
            for (let index = 0; index < this.length; index++) {
                arr.push(callback(this[index], index, this))
            }
            return arr;
        }
    }
}