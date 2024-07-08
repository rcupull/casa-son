import { RequestHandler as ExpressRequestHandler } from "express";

export type AnyRecord = Record<string, any>;
export type UnknownRecord = Record<string, unknown>;

export interface RequestHandler<
  P = AnyRecord,
  ResBody = any,
  ReqBody = any,
  ReqQuery = AnyRecord,
  Locals extends Record<string, any> = Record<string, any>
> extends ExpressRequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> {}

export type QueryHandle<Args extends AnyRecord | void = void, R = void> = (
  args: Args
) => Promise<R>;

export interface Image {
  src: string;
  width: number;
  height: number;
  href?: string;
}
