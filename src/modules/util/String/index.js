String.prototype.capitalize = function() {
    if (this.isEmpty())
        return this

    return this[0].toUpperCase() + this.substring(1).toLowerCase()
}

String.prototype.isEmpty = function () {
    return this.length == 0
}

export default StringUtil
