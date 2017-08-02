const CurrencyFormatter = {
    format: (val, placeholder, multiple) => {
        if (val == 0) {
            return '0.00'
        }
        if (val) {
            const _money = parseFloat(val.toString().replace(/,/g, '')) / (multiple || 100)
            if (!isNaN(_money)) {
                return parseFloat(_money.toFixed(2)).toLocaleString(undefined, {minimumFractionDigits: 2})
            }
        }
        return val || (placeholder || '')
    },
    read: (val) => {
        if (val) {
            return ((val.toString().replace(/,/g, '')) * 100).toFixed(0)
        }
        return undefined
    }
}

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (obj) => {
    return typeof obj
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj
}

const padStart = (value, length, char) => {
    value = value + ''
    const len = length - value.length

    if (len <= 0) {
        return value
    } else {
        return new Array(len + 1).join(char) + value
    }
}

const DateFormatter = {
    format: (val, format) => {
        let _date = val
        const splitArr = format.split(/(yyyy|MM|dd|HH|mm|ss)+/)

        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
            _date = new Date(val)
        }

        return splitArr.map((item) => {
            if (item === 'yyyy') {
                const year = _date.getFullYear()
                return isNaN(year) ? '____' : year
            }
            if (item === 'MM') {
                const month = padStart(_date.getMonth() + 1, 2, 0)
                return isNaN(month) ? '__' : month
            }
            if (item === 'dd') {
                const date = padStart(_date.getDate(), 2, 0)
                return isNaN(date) ? '__' : date
            }
            if (item === 'HH') {
                const hours = padStart(_date.getHours(), 2, 0)
                return isNaN(hours) ? '__' : hours
            }
            if (item === 'mm') {
                const minutes = padStart(_date.getMinutes(), 2, 0)
                return isNaN(minutes) ? '__' : minutes
            }
            if (item === 'ss') {
                const seconds = padStart(_date.getSeconds(), 2, 0)
                return isNaN(seconds) ? '__' : seconds
            }

            return item
        }).join('')
    },
    read: (val) => {
        if (val) {
            return new Date(Date.parse(val.toString().replace(/-/g, '')))
        }
        return undefined
    }
}

export {CurrencyFormatter, DateFormatter}