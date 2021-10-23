

declare type Request_URL = string;
declare type Request_Method = "GET" | "POST" | "PUT" | "OPTIONS" | "DELETE";
declare type Request_Params = { [key: string]: string };
declare type Request_Header = { [key: string]: string };
declare type Request_Body = BodyInit;

export interface RequestOption {
  URL: Request_URL;
  Method: Request_Method;
  Params: Request_Params;
  header: Request_Header;
  Body: Request_Body;
  Timeout: number;
}
