const MILISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 60;

export class TimeSpan {
  public static fromSeconds(seconds: number): number {
    return seconds * MILISECONDS_IN_SECOND;
  }

  public static fromMinutes(minutes: number): number {
    return TimeSpan.fromSeconds(minutes * SECONDS_IN_MINUTE);
  }

  public static fromHours(hours: number): number {
    return TimeSpan.fromMinutes(hours * MINUTES_IN_HOUR);
  }

  public static fromDays(days: number): number {
    return TimeSpan.fromHours(days * HOURS_IN_DAY);
  }
}
