<template>
    <div style="height: 2000px">
        <h1>
            {{welcome}}
        </h1>
        <div class="ui calendar">
            <div class="ui input left icon">
                <i class="calendar icon"></i>
                <input type="text" placeholder="时间插件">
            </div>
        </div>
    </div>

</template>

<script>
    import {CalendarSetting} from '../common/index.js'

    export default {
        name: 'index-view',
        data () {
            return {
                welcome: "Welcome to Vue Common！"
            }
        },
        mounted(){
            $('div.calendar').calendar({
                    type: 'date',
                    ampm: false,
                    initialDate: new Date(),
                    text: CalendarSetting.Text,
                    formatter: CalendarSetting.Formatter,
                    onChange: (date, text) => {
                        console.log(date)
                        return true
                    }
                }
            )
        }
    }
</script>