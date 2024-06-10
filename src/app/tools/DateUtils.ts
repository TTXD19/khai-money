export default class DateUtils {

    public static formatDate(date: Date): string {
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        const year = date.getFullYear();

        if (day.length < 2) {
            day = `0${day}`;
        }
        if (month.length < 2) {
            month = `0${month}`;
        }

        return `${year}/${month}/${day}`;
    }
}