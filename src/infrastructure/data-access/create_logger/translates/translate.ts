
import { PaginateResult } from "mongoose";
import { of, groupBy, map, mergeMap, reduce, toArray } from "rxjs";
import { LoggerModel } from "../../../../domain/model/logger";

class CreateLoggerTranslate {
  async loggerByGroup(data: Array<LoggerModel>) {
    let payload: Array<{
      dateTime: string,
      activities: Array<any>
    }> = []
    of(...data).pipe(
      groupBy((p: any) => p.day.split('T')[0]),
      mergeMap(group$ =>
        group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
      ),
      map(arr => ({ dateTime: arr[0], activities: arr.slice(1) })),
      toArray()
    ).subscribe(p => {
      payload = p.sort(function (a, b) {
        return a.dateTime.localeCompare(b.dateTime)
      });
    });
    return payload;
  }
}
export default CreateLoggerTranslate;