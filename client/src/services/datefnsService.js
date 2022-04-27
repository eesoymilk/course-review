import { format, utcToZonedTime } from "date-fns-tz";

const timeZone = "Asia/Taipei";

export default class ReviewService {
  static utcToTaipeiTime(utcDate) {
    return utcToZonedTime(utcDate, timeZone);
  }

  static formatTime(time, patt) {
    return format(time, patt);
  }

  static toTaipeiTimeFormat(utcDate, patt) {
    return format(utcToZonedTime(utcDate, timeZone), patt);
  }
}
