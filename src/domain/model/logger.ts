export interface LoggerModel {
  userId: string,
  userName: string,
  accountId?: string,
  accountName?: string,
  day?: string,
  hour?: string;
  userAction?: string;
  description: string;
}