const CalendarSetting = {
    Text: {
        // days: ['日', '一', '二', '三', '四', '五', '六'],
        // months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthsShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        // today: '今天',
        // now: '现在',
    }, Formatter: {
        dayHeader: (date, settings) => {
            if (!date) return ''
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            return year + '-' + (month < 10 ? '0' + month : month)
        },
        date: (date, settings) => {
            if (!date) return ''
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
        },
        time: (date, settings, forCalendar) => {
            if (!date) return ''
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()
            return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
        }
    }
}

export default CalendarSetting