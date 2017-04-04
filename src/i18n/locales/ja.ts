import { Locale } from "../locale"

export class ja implements Locale {
    atX0SecondsPastTheMinuteGt20(): string { return null; }
    atX0MinutesPastTheHourGt20(): string { return null; }
    commaMonthX0ThroughMonthX1(): string { return null; }
    commaYearX0ThroughYearX1(): string { return null; }

    use24HourTimeFormatByDefault() { return false; }

    anErrorOccuredWhenGeneratingTheExpressionD() {
        return "式の記述を生成中にエラーが発生しました。 cron式構文を確認してください。";
    };
    everyMinute() {
        return "毎分";
    };
    everyHour() {
        return "毎時";
    };
    atSpace() {
        return "に ";
    };
    everyMinutebetweenX0AndX1() {
        return "毎秒 %s〜%s";
    };
    at() {
        return "に";
    };
    spaceAnd() {
        return " と";
    };
    everysecond() {
        return "毎秒";
    };
    everyX0Seconds() {
        return "%s 秒毎";
    };
    secondsX0ThroughX1PastTheMinute() {
        return "毎分 %s〜%s";
    };
    atX0SecondsPastTheMinute() {
        return "毎分 %s 秒";
    };
    everyX0Minutes() {
        return "%s 分毎";
    };
    minutesX0ThroughX1PastTheHour() {
        return "毎時 %s〜%s 分";
    };
    atX0MinutesPastTheHour() {
        return "毎時 %s 分";
    };
    everyX0Hours() {
        return "%s 時間毎";
    };
    betweenX0AndX1() {
        return "%s〜%s";
    };
    atX0() {
        return "%s に";
    };
    commaEveryDay() {
        return ", 毎日";
    };
    commaEveryX0daysOfTheWeek() {
        return ", 毎週 %s 日毎";
    };
    commaX0ThroughX1() {
        return ", %s〜%s";
    };
    first() {
        return "第1";
    };
    second() {
        return "第2";
    };
    third() {
        return "第3";
    };
    forth() {
        return "第4";
    };
    fifth() {
        return "第5";
    };
    commaOnThe() {
        return ", に ";
    };
    spaceX0OfTheMonth() {
        return " 月の %s";
    };
    commaOnTheLastX0OfTheMonth() {
        return ", 月の最後の %s";
    };
    commaOnlyOnX0() {
        return ", %s のみ";
    };
    commaEveryX0Months() {
        return ", %s ヶ月毎";
    };
    commaOnlyInX0() {
        return ", %s のみ";
    };
    commaOnTheLastDayOfTheMonth() {
        return ", 月の最終日";
    };
    commaOnTheLastWeekdayOfTheMonth() {
        return ", 各月の最後の平日";
    };
    firstWeekday() {
        return "最初の平日";
    };
    weekdayNearestDayX0() {
        return "%s に最も近い平日";
    };
    commaOnTheX0OfTheMonth() {
        return ", 今月の %s";
    };
    commaEveryX0Days() {
        return ", %s 日毎";
    };
    commaBetweenDayX0AndX1OfTheMonth() {
        return ", 月の %s〜%s";
    };
    commaOnDayX0OfTheMonth() {
        return ", 月の %s 日";
    };
    spaceAndSpace() {
        return " と ";
    };
    commaEveryMinute() {
        return ", 毎秒";
    };
    commaEveryHour() {
        return ", 毎時";
    };
    commaEveryX0Years() {
        return ", %s 年毎";
    };
    commaStartingX0() {
        return ", 開始 %s";
    };
    daysOfTheWeek() {
        return ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"];
    }
    monthsOfTheYear() {
        return ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    }
}
