
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model AssessmentsReport
 * 
 */
export type AssessmentsReport = $Result.DefaultSelection<Prisma.$AssessmentsReportPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model CompanyContractSize
 * 
 */
export type CompanyContractSize = $Result.DefaultSelection<Prisma.$CompanyContractSizePayload>
/**
 * Model ContractSize
 * 
 */
export type ContractSize = $Result.DefaultSelection<Prisma.$ContractSizePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  PLANNING: 'PLANNING',
  IN_PROGRESS: 'IN_PROGRESS',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessmentsReport`: Exposes CRUD operations for the **AssessmentsReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentsReports
    * const assessmentsReports = await prisma.assessmentsReport.findMany()
    * ```
    */
  get assessmentsReport(): Prisma.AssessmentsReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyContractSize`: Exposes CRUD operations for the **CompanyContractSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyContractSizes
    * const companyContractSizes = await prisma.companyContractSize.findMany()
    * ```
    */
  get companyContractSize(): Prisma.CompanyContractSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractSize`: Exposes CRUD operations for the **ContractSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractSizes
    * const contractSizes = await prisma.contractSize.findMany()
    * ```
    */
  get contractSize(): Prisma.ContractSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Company: 'Company',
    AssessmentsReport: 'AssessmentsReport',
    Address: 'Address',
    Trade: 'Trade',
    CompanyContractSize: 'CompanyContractSize',
    ContractSize: 'ContractSize',
    Project: 'Project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "assessmentsReport" | "address" | "trade" | "companyContractSize" | "contractSize" | "project"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      AssessmentsReport: {
        payload: Prisma.$AssessmentsReportPayload<ExtArgs>
        fields: Prisma.AssessmentsReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentsReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentsReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>
          }
          findFirst: {
            args: Prisma.AssessmentsReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentsReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>
          }
          findMany: {
            args: Prisma.AssessmentsReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>[]
          }
          create: {
            args: Prisma.AssessmentsReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>
          }
          createMany: {
            args: Prisma.AssessmentsReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentsReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>[]
          }
          delete: {
            args: Prisma.AssessmentsReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>
          }
          update: {
            args: Prisma.AssessmentsReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentsReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentsReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentsReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentsReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsReportPayload>
          }
          aggregate: {
            args: Prisma.AssessmentsReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentsReport>
          }
          groupBy: {
            args: Prisma.AssessmentsReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentsReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentsReportCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentsReportCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      CompanyContractSize: {
        payload: Prisma.$CompanyContractSizePayload<ExtArgs>
        fields: Prisma.CompanyContractSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyContractSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyContractSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>
          }
          findFirst: {
            args: Prisma.CompanyContractSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyContractSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>
          }
          findMany: {
            args: Prisma.CompanyContractSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>[]
          }
          create: {
            args: Prisma.CompanyContractSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>
          }
          createMany: {
            args: Prisma.CompanyContractSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyContractSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>[]
          }
          delete: {
            args: Prisma.CompanyContractSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>
          }
          update: {
            args: Prisma.CompanyContractSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>
          }
          deleteMany: {
            args: Prisma.CompanyContractSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyContractSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyContractSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>[]
          }
          upsert: {
            args: Prisma.CompanyContractSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyContractSizePayload>
          }
          aggregate: {
            args: Prisma.CompanyContractSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyContractSize>
          }
          groupBy: {
            args: Prisma.CompanyContractSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyContractSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyContractSizeCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyContractSizeCountAggregateOutputType> | number
          }
        }
      }
      ContractSize: {
        payload: Prisma.$ContractSizePayload<ExtArgs>
        fields: Prisma.ContractSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>
          }
          findFirst: {
            args: Prisma.ContractSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>
          }
          findMany: {
            args: Prisma.ContractSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>[]
          }
          create: {
            args: Prisma.ContractSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>
          }
          createMany: {
            args: Prisma.ContractSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>[]
          }
          delete: {
            args: Prisma.ContractSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>
          }
          update: {
            args: Prisma.ContractSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>
          }
          deleteMany: {
            args: Prisma.ContractSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>[]
          }
          upsert: {
            args: Prisma.ContractSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractSizePayload>
          }
          aggregate: {
            args: Prisma.ContractSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractSize>
          }
          groupBy: {
            args: Prisma.ContractSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractSizeCountArgs<ExtArgs>
            result: $Utils.Optional<ContractSizeCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    company?: CompanyOmit
    assessmentsReport?: AssessmentsReportOmit
    address?: AddressOmit
    trade?: TradeOmit
    companyContractSize?: CompanyContractSizeOmit
    contractSize?: ContractSizeOmit
    project?: ProjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    trades: number
    companyContractSize: number
    projects: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | CompanyCountOutputTypeCountTradesArgs
    companyContractSize?: boolean | CompanyCountOutputTypeCountCompanyContractSizeArgs
    projects?: boolean | CompanyCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompanyContractSizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyContractSizeWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ContractSizeCountOutputType
   */

  export type ContractSizeCountOutputType = {
    minSizes: number
    maxSizes: number
  }

  export type ContractSizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minSizes?: boolean | ContractSizeCountOutputTypeCountMinSizesArgs
    maxSizes?: boolean | ContractSizeCountOutputTypeCountMaxSizesArgs
  }

  // Custom InputTypes
  /**
   * ContractSizeCountOutputType without action
   */
  export type ContractSizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSizeCountOutputType
     */
    select?: ContractSizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractSizeCountOutputType without action
   */
  export type ContractSizeCountOutputTypeCountMinSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyContractSizeWhereInput
  }

  /**
   * ContractSizeCountOutputType without action
   */
  export type ContractSizeCountOutputTypeCountMaxSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyContractSizeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "name", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    unionPercent: number | null
    ratingLevel: number | null
  }

  export type CompanySumAggregateOutputType = {
    unionPercent: number | null
    ratingLevel: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    slug: string | null
    companyName: string | null
    displayName: string | null
    claimCompanyEmailDomain: string | null
    unionPercent: number | null
    status: string | null
    ratingLevel: number | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    companyName: string | null
    displayName: string | null
    claimCompanyEmailDomain: string | null
    unionPercent: number | null
    status: string | null
    ratingLevel: number | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    slug: number
    companyName: number
    displayName: number
    claimCompanyEmailDomain: number
    unionPercent: number
    status: number
    ratingLevel: number
    dbeStatuses: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    unionPercent?: true
    ratingLevel?: true
  }

  export type CompanySumAggregateInputType = {
    unionPercent?: true
    ratingLevel?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    slug?: true
    companyName?: true
    displayName?: true
    claimCompanyEmailDomain?: true
    unionPercent?: true
    status?: true
    ratingLevel?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    slug?: true
    companyName?: true
    displayName?: true
    claimCompanyEmailDomain?: true
    unionPercent?: true
    status?: true
    ratingLevel?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    slug?: true
    companyName?: true
    displayName?: true
    claimCompanyEmailDomain?: true
    unionPercent?: true
    status?: true
    ratingLevel?: true
    dbeStatuses?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonValue
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    companyName?: boolean
    displayName?: boolean
    claimCompanyEmailDomain?: boolean
    unionPercent?: boolean
    status?: boolean
    ratingLevel?: boolean
    dbeStatuses?: boolean
    assessmentsReport?: boolean | Company$assessmentsReportArgs<ExtArgs>
    address?: boolean | Company$addressArgs<ExtArgs>
    trades?: boolean | Company$tradesArgs<ExtArgs>
    companyContractSize?: boolean | Company$companyContractSizeArgs<ExtArgs>
    projects?: boolean | Company$projectsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    companyName?: boolean
    displayName?: boolean
    claimCompanyEmailDomain?: boolean
    unionPercent?: boolean
    status?: boolean
    ratingLevel?: boolean
    dbeStatuses?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    companyName?: boolean
    displayName?: boolean
    claimCompanyEmailDomain?: boolean
    unionPercent?: boolean
    status?: boolean
    ratingLevel?: boolean
    dbeStatuses?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    slug?: boolean
    companyName?: boolean
    displayName?: boolean
    claimCompanyEmailDomain?: boolean
    unionPercent?: boolean
    status?: boolean
    ratingLevel?: boolean
    dbeStatuses?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "companyName" | "displayName" | "claimCompanyEmailDomain" | "unionPercent" | "status" | "ratingLevel" | "dbeStatuses", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessmentsReport?: boolean | Company$assessmentsReportArgs<ExtArgs>
    address?: boolean | Company$addressArgs<ExtArgs>
    trades?: boolean | Company$tradesArgs<ExtArgs>
    companyContractSize?: boolean | Company$companyContractSizeArgs<ExtArgs>
    projects?: boolean | Company$projectsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      assessmentsReport: Prisma.$AssessmentsReportPayload<ExtArgs> | null
      address: Prisma.$AddressPayload<ExtArgs> | null
      trades: Prisma.$TradePayload<ExtArgs>[]
      companyContractSize: Prisma.$CompanyContractSizePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      companyName: string
      displayName: string
      claimCompanyEmailDomain: string
      unionPercent: number
      status: string
      ratingLevel: number
      dbeStatuses: Prisma.JsonValue
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessmentsReport<T extends Company$assessmentsReportArgs<ExtArgs> = {}>(args?: Subset<T, Company$assessmentsReportArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    address<T extends Company$addressArgs<ExtArgs> = {}>(args?: Subset<T, Company$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trades<T extends Company$tradesArgs<ExtArgs> = {}>(args?: Subset<T, Company$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companyContractSize<T extends Company$companyContractSizeArgs<ExtArgs> = {}>(args?: Subset<T, Company$companyContractSizeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Company$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Company$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly slug: FieldRef<"Company", 'String'>
    readonly companyName: FieldRef<"Company", 'String'>
    readonly displayName: FieldRef<"Company", 'String'>
    readonly claimCompanyEmailDomain: FieldRef<"Company", 'String'>
    readonly unionPercent: FieldRef<"Company", 'Int'>
    readonly status: FieldRef<"Company", 'String'>
    readonly ratingLevel: FieldRef<"Company", 'Int'>
    readonly dbeStatuses: FieldRef<"Company", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.assessmentsReport
   */
  export type Company$assessmentsReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    where?: AssessmentsReportWhereInput
  }

  /**
   * Company.address
   */
  export type Company$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Company.trades
   */
  export type Company$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Company.companyContractSize
   */
  export type Company$companyContractSizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    where?: CompanyContractSizeWhereInput
    orderBy?: CompanyContractSizeOrderByWithRelationInput | CompanyContractSizeOrderByWithRelationInput[]
    cursor?: CompanyContractSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyContractSizeScalarFieldEnum | CompanyContractSizeScalarFieldEnum[]
  }

  /**
   * Company.projects
   */
  export type Company$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentsReport
   */

  export type AggregateAssessmentsReport = {
    _count: AssessmentsReportCountAggregateOutputType | null
    _avg: AssessmentsReportAvgAggregateOutputType | null
    _sum: AssessmentsReportSumAggregateOutputType | null
    _min: AssessmentsReportMinAggregateOutputType | null
    _max: AssessmentsReportMaxAggregateOutputType | null
  }

  export type AssessmentsReportAvgAggregateOutputType = {
    id: number | null
    companyCompletePercentage: number | null
    safetyCompletePercentage: number | null
    financeCompletePercentage: number | null
  }

  export type AssessmentsReportSumAggregateOutputType = {
    id: number | null
    companyCompletePercentage: number | null
    safetyCompletePercentage: number | null
    financeCompletePercentage: number | null
  }

  export type AssessmentsReportMinAggregateOutputType = {
    id: number | null
    companyId: string | null
    companyCompletePercentage: number | null
    safetyCompletePercentage: number | null
    financeCompletePercentage: number | null
    canHaveBadge: boolean | null
  }

  export type AssessmentsReportMaxAggregateOutputType = {
    id: number | null
    companyId: string | null
    companyCompletePercentage: number | null
    safetyCompletePercentage: number | null
    financeCompletePercentage: number | null
    canHaveBadge: boolean | null
  }

  export type AssessmentsReportCountAggregateOutputType = {
    id: number
    companyId: number
    companyCompletePercentage: number
    safetyCompletePercentage: number
    financeCompletePercentage: number
    canHaveBadge: number
    _all: number
  }


  export type AssessmentsReportAvgAggregateInputType = {
    id?: true
    companyCompletePercentage?: true
    safetyCompletePercentage?: true
    financeCompletePercentage?: true
  }

  export type AssessmentsReportSumAggregateInputType = {
    id?: true
    companyCompletePercentage?: true
    safetyCompletePercentage?: true
    financeCompletePercentage?: true
  }

  export type AssessmentsReportMinAggregateInputType = {
    id?: true
    companyId?: true
    companyCompletePercentage?: true
    safetyCompletePercentage?: true
    financeCompletePercentage?: true
    canHaveBadge?: true
  }

  export type AssessmentsReportMaxAggregateInputType = {
    id?: true
    companyId?: true
    companyCompletePercentage?: true
    safetyCompletePercentage?: true
    financeCompletePercentage?: true
    canHaveBadge?: true
  }

  export type AssessmentsReportCountAggregateInputType = {
    id?: true
    companyId?: true
    companyCompletePercentage?: true
    safetyCompletePercentage?: true
    financeCompletePercentage?: true
    canHaveBadge?: true
    _all?: true
  }

  export type AssessmentsReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentsReport to aggregate.
     */
    where?: AssessmentsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentsReports to fetch.
     */
    orderBy?: AssessmentsReportOrderByWithRelationInput | AssessmentsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentsReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentsReports
    **/
    _count?: true | AssessmentsReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentsReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentsReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentsReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentsReportMaxAggregateInputType
  }

  export type GetAssessmentsReportAggregateType<T extends AssessmentsReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentsReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentsReport[P]>
      : GetScalarType<T[P], AggregateAssessmentsReport[P]>
  }




  export type AssessmentsReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentsReportWhereInput
    orderBy?: AssessmentsReportOrderByWithAggregationInput | AssessmentsReportOrderByWithAggregationInput[]
    by: AssessmentsReportScalarFieldEnum[] | AssessmentsReportScalarFieldEnum
    having?: AssessmentsReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentsReportCountAggregateInputType | true
    _avg?: AssessmentsReportAvgAggregateInputType
    _sum?: AssessmentsReportSumAggregateInputType
    _min?: AssessmentsReportMinAggregateInputType
    _max?: AssessmentsReportMaxAggregateInputType
  }

  export type AssessmentsReportGroupByOutputType = {
    id: number
    companyId: string
    companyCompletePercentage: number
    safetyCompletePercentage: number
    financeCompletePercentage: number
    canHaveBadge: boolean
    _count: AssessmentsReportCountAggregateOutputType | null
    _avg: AssessmentsReportAvgAggregateOutputType | null
    _sum: AssessmentsReportSumAggregateOutputType | null
    _min: AssessmentsReportMinAggregateOutputType | null
    _max: AssessmentsReportMaxAggregateOutputType | null
  }

  type GetAssessmentsReportGroupByPayload<T extends AssessmentsReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentsReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentsReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentsReportGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentsReportGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentsReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    companyCompletePercentage?: boolean
    safetyCompletePercentage?: boolean
    financeCompletePercentage?: boolean
    canHaveBadge?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentsReport"]>

  export type AssessmentsReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    companyCompletePercentage?: boolean
    safetyCompletePercentage?: boolean
    financeCompletePercentage?: boolean
    canHaveBadge?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentsReport"]>

  export type AssessmentsReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    companyCompletePercentage?: boolean
    safetyCompletePercentage?: boolean
    financeCompletePercentage?: boolean
    canHaveBadge?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentsReport"]>

  export type AssessmentsReportSelectScalar = {
    id?: boolean
    companyId?: boolean
    companyCompletePercentage?: boolean
    safetyCompletePercentage?: boolean
    financeCompletePercentage?: boolean
    canHaveBadge?: boolean
  }

  export type AssessmentsReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "companyCompletePercentage" | "safetyCompletePercentage" | "financeCompletePercentage" | "canHaveBadge", ExtArgs["result"]["assessmentsReport"]>
  export type AssessmentsReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AssessmentsReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AssessmentsReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $AssessmentsReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentsReport"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: string
      companyCompletePercentage: number
      safetyCompletePercentage: number
      financeCompletePercentage: number
      canHaveBadge: boolean
    }, ExtArgs["result"]["assessmentsReport"]>
    composites: {}
  }

  type AssessmentsReportGetPayload<S extends boolean | null | undefined | AssessmentsReportDefaultArgs> = $Result.GetResult<Prisma.$AssessmentsReportPayload, S>

  type AssessmentsReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentsReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentsReportCountAggregateInputType | true
    }

  export interface AssessmentsReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentsReport'], meta: { name: 'AssessmentsReport' } }
    /**
     * Find zero or one AssessmentsReport that matches the filter.
     * @param {AssessmentsReportFindUniqueArgs} args - Arguments to find a AssessmentsReport
     * @example
     * // Get one AssessmentsReport
     * const assessmentsReport = await prisma.assessmentsReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentsReportFindUniqueArgs>(args: SelectSubset<T, AssessmentsReportFindUniqueArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssessmentsReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentsReportFindUniqueOrThrowArgs} args - Arguments to find a AssessmentsReport
     * @example
     * // Get one AssessmentsReport
     * const assessmentsReport = await prisma.assessmentsReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentsReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentsReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentsReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsReportFindFirstArgs} args - Arguments to find a AssessmentsReport
     * @example
     * // Get one AssessmentsReport
     * const assessmentsReport = await prisma.assessmentsReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentsReportFindFirstArgs>(args?: SelectSubset<T, AssessmentsReportFindFirstArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentsReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsReportFindFirstOrThrowArgs} args - Arguments to find a AssessmentsReport
     * @example
     * // Get one AssessmentsReport
     * const assessmentsReport = await prisma.assessmentsReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentsReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentsReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssessmentsReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentsReports
     * const assessmentsReports = await prisma.assessmentsReport.findMany()
     * 
     * // Get first 10 AssessmentsReports
     * const assessmentsReports = await prisma.assessmentsReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentsReportWithIdOnly = await prisma.assessmentsReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentsReportFindManyArgs>(args?: SelectSubset<T, AssessmentsReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssessmentsReport.
     * @param {AssessmentsReportCreateArgs} args - Arguments to create a AssessmentsReport.
     * @example
     * // Create one AssessmentsReport
     * const AssessmentsReport = await prisma.assessmentsReport.create({
     *   data: {
     *     // ... data to create a AssessmentsReport
     *   }
     * })
     * 
     */
    create<T extends AssessmentsReportCreateArgs>(args: SelectSubset<T, AssessmentsReportCreateArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssessmentsReports.
     * @param {AssessmentsReportCreateManyArgs} args - Arguments to create many AssessmentsReports.
     * @example
     * // Create many AssessmentsReports
     * const assessmentsReport = await prisma.assessmentsReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentsReportCreateManyArgs>(args?: SelectSubset<T, AssessmentsReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentsReports and returns the data saved in the database.
     * @param {AssessmentsReportCreateManyAndReturnArgs} args - Arguments to create many AssessmentsReports.
     * @example
     * // Create many AssessmentsReports
     * const assessmentsReport = await prisma.assessmentsReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentsReports and only return the `id`
     * const assessmentsReportWithIdOnly = await prisma.assessmentsReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentsReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentsReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssessmentsReport.
     * @param {AssessmentsReportDeleteArgs} args - Arguments to delete one AssessmentsReport.
     * @example
     * // Delete one AssessmentsReport
     * const AssessmentsReport = await prisma.assessmentsReport.delete({
     *   where: {
     *     // ... filter to delete one AssessmentsReport
     *   }
     * })
     * 
     */
    delete<T extends AssessmentsReportDeleteArgs>(args: SelectSubset<T, AssessmentsReportDeleteArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssessmentsReport.
     * @param {AssessmentsReportUpdateArgs} args - Arguments to update one AssessmentsReport.
     * @example
     * // Update one AssessmentsReport
     * const assessmentsReport = await prisma.assessmentsReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentsReportUpdateArgs>(args: SelectSubset<T, AssessmentsReportUpdateArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssessmentsReports.
     * @param {AssessmentsReportDeleteManyArgs} args - Arguments to filter AssessmentsReports to delete.
     * @example
     * // Delete a few AssessmentsReports
     * const { count } = await prisma.assessmentsReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentsReportDeleteManyArgs>(args?: SelectSubset<T, AssessmentsReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentsReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentsReports
     * const assessmentsReport = await prisma.assessmentsReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentsReportUpdateManyArgs>(args: SelectSubset<T, AssessmentsReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentsReports and returns the data updated in the database.
     * @param {AssessmentsReportUpdateManyAndReturnArgs} args - Arguments to update many AssessmentsReports.
     * @example
     * // Update many AssessmentsReports
     * const assessmentsReport = await prisma.assessmentsReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssessmentsReports and only return the `id`
     * const assessmentsReportWithIdOnly = await prisma.assessmentsReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentsReportUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentsReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssessmentsReport.
     * @param {AssessmentsReportUpsertArgs} args - Arguments to update or create a AssessmentsReport.
     * @example
     * // Update or create a AssessmentsReport
     * const assessmentsReport = await prisma.assessmentsReport.upsert({
     *   create: {
     *     // ... data to create a AssessmentsReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentsReport we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentsReportUpsertArgs>(args: SelectSubset<T, AssessmentsReportUpsertArgs<ExtArgs>>): Prisma__AssessmentsReportClient<$Result.GetResult<Prisma.$AssessmentsReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssessmentsReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsReportCountArgs} args - Arguments to filter AssessmentsReports to count.
     * @example
     * // Count the number of AssessmentsReports
     * const count = await prisma.assessmentsReport.count({
     *   where: {
     *     // ... the filter for the AssessmentsReports we want to count
     *   }
     * })
    **/
    count<T extends AssessmentsReportCountArgs>(
      args?: Subset<T, AssessmentsReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentsReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentsReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentsReportAggregateArgs>(args: Subset<T, AssessmentsReportAggregateArgs>): Prisma.PrismaPromise<GetAssessmentsReportAggregateType<T>>

    /**
     * Group by AssessmentsReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentsReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentsReportGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentsReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentsReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentsReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentsReport model
   */
  readonly fields: AssessmentsReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentsReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentsReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentsReport model
   */
  interface AssessmentsReportFieldRefs {
    readonly id: FieldRef<"AssessmentsReport", 'Int'>
    readonly companyId: FieldRef<"AssessmentsReport", 'String'>
    readonly companyCompletePercentage: FieldRef<"AssessmentsReport", 'Int'>
    readonly safetyCompletePercentage: FieldRef<"AssessmentsReport", 'Int'>
    readonly financeCompletePercentage: FieldRef<"AssessmentsReport", 'Int'>
    readonly canHaveBadge: FieldRef<"AssessmentsReport", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentsReport findUnique
   */
  export type AssessmentsReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentsReport to fetch.
     */
    where: AssessmentsReportWhereUniqueInput
  }

  /**
   * AssessmentsReport findUniqueOrThrow
   */
  export type AssessmentsReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentsReport to fetch.
     */
    where: AssessmentsReportWhereUniqueInput
  }

  /**
   * AssessmentsReport findFirst
   */
  export type AssessmentsReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentsReport to fetch.
     */
    where?: AssessmentsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentsReports to fetch.
     */
    orderBy?: AssessmentsReportOrderByWithRelationInput | AssessmentsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentsReports.
     */
    cursor?: AssessmentsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentsReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentsReports.
     */
    distinct?: AssessmentsReportScalarFieldEnum | AssessmentsReportScalarFieldEnum[]
  }

  /**
   * AssessmentsReport findFirstOrThrow
   */
  export type AssessmentsReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentsReport to fetch.
     */
    where?: AssessmentsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentsReports to fetch.
     */
    orderBy?: AssessmentsReportOrderByWithRelationInput | AssessmentsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentsReports.
     */
    cursor?: AssessmentsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentsReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentsReports.
     */
    distinct?: AssessmentsReportScalarFieldEnum | AssessmentsReportScalarFieldEnum[]
  }

  /**
   * AssessmentsReport findMany
   */
  export type AssessmentsReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentsReports to fetch.
     */
    where?: AssessmentsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentsReports to fetch.
     */
    orderBy?: AssessmentsReportOrderByWithRelationInput | AssessmentsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentsReports.
     */
    cursor?: AssessmentsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentsReports.
     */
    skip?: number
    distinct?: AssessmentsReportScalarFieldEnum | AssessmentsReportScalarFieldEnum[]
  }

  /**
   * AssessmentsReport create
   */
  export type AssessmentsReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentsReport.
     */
    data: XOR<AssessmentsReportCreateInput, AssessmentsReportUncheckedCreateInput>
  }

  /**
   * AssessmentsReport createMany
   */
  export type AssessmentsReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentsReports.
     */
    data: AssessmentsReportCreateManyInput | AssessmentsReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentsReport createManyAndReturn
   */
  export type AssessmentsReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * The data used to create many AssessmentsReports.
     */
    data: AssessmentsReportCreateManyInput | AssessmentsReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentsReport update
   */
  export type AssessmentsReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentsReport.
     */
    data: XOR<AssessmentsReportUpdateInput, AssessmentsReportUncheckedUpdateInput>
    /**
     * Choose, which AssessmentsReport to update.
     */
    where: AssessmentsReportWhereUniqueInput
  }

  /**
   * AssessmentsReport updateMany
   */
  export type AssessmentsReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentsReports.
     */
    data: XOR<AssessmentsReportUpdateManyMutationInput, AssessmentsReportUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentsReports to update
     */
    where?: AssessmentsReportWhereInput
    /**
     * Limit how many AssessmentsReports to update.
     */
    limit?: number
  }

  /**
   * AssessmentsReport updateManyAndReturn
   */
  export type AssessmentsReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * The data used to update AssessmentsReports.
     */
    data: XOR<AssessmentsReportUpdateManyMutationInput, AssessmentsReportUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentsReports to update
     */
    where?: AssessmentsReportWhereInput
    /**
     * Limit how many AssessmentsReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentsReport upsert
   */
  export type AssessmentsReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentsReport to update in case it exists.
     */
    where: AssessmentsReportWhereUniqueInput
    /**
     * In case the AssessmentsReport found by the `where` argument doesn't exist, create a new AssessmentsReport with this data.
     */
    create: XOR<AssessmentsReportCreateInput, AssessmentsReportUncheckedCreateInput>
    /**
     * In case the AssessmentsReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentsReportUpdateInput, AssessmentsReportUncheckedUpdateInput>
  }

  /**
   * AssessmentsReport delete
   */
  export type AssessmentsReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
    /**
     * Filter which AssessmentsReport to delete.
     */
    where: AssessmentsReportWhereUniqueInput
  }

  /**
   * AssessmentsReport deleteMany
   */
  export type AssessmentsReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentsReports to delete
     */
    where?: AssessmentsReportWhereInput
    /**
     * Limit how many AssessmentsReports to delete.
     */
    limit?: number
  }

  /**
   * AssessmentsReport without action
   */
  export type AssessmentsReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentsReport
     */
    select?: AssessmentsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentsReport
     */
    omit?: AssessmentsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsReportInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    companyId: string | null
    street1: string | null
    street2: string | null
    city: string | null
    stateName: string | null
    stateCode: string | null
    postalCode: string | null
    countryCode: string | null
    latitude: string | null
    longitude: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    companyId: string | null
    street1: string | null
    street2: string | null
    city: string | null
    stateName: string | null
    stateCode: string | null
    postalCode: string | null
    countryCode: string | null
    latitude: string | null
    longitude: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    companyId: number
    street1: number
    street2: number
    city: number
    stateName: number
    stateCode: number
    postalCode: number
    countryCode: number
    latitude: number
    longitude: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    companyId?: true
    street1?: true
    street2?: true
    city?: true
    stateName?: true
    stateCode?: true
    postalCode?: true
    countryCode?: true
    latitude?: true
    longitude?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    companyId?: true
    street1?: true
    street2?: true
    city?: true
    stateName?: true
    stateCode?: true
    postalCode?: true
    countryCode?: true
    latitude?: true
    longitude?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    companyId?: true
    street1?: true
    street2?: true
    city?: true
    stateName?: true
    stateCode?: true
    postalCode?: true
    countryCode?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    companyId: string
    street1: string
    street2: string | null
    city: string
    stateName: string
    stateCode: string
    postalCode: string
    countryCode: string
    latitude: string
    longitude: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    stateName?: boolean
    stateCode?: boolean
    postalCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    stateName?: boolean
    stateCode?: boolean
    postalCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    stateName?: boolean
    stateCode?: boolean
    postalCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    companyId?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    stateName?: boolean
    stateCode?: boolean
    postalCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "street1" | "street2" | "city" | "stateName" | "stateCode" | "postalCode" | "countryCode" | "latitude" | "longitude", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: string
      street1: string
      street2: string | null
      city: string
      stateName: string
      stateCode: string
      postalCode: string
      countryCode: string
      latitude: string
      longitude: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly companyId: FieldRef<"Address", 'String'>
    readonly street1: FieldRef<"Address", 'String'>
    readonly street2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly stateName: FieldRef<"Address", 'String'>
    readonly stateCode: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly countryCode: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'String'>
    readonly longitude: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    id: number | null
    tradeId: number | null
    level: number | null
    category: number | null
    parent: number | null
  }

  export type TradeSumAggregateOutputType = {
    id: number | null
    tradeId: number | null
    level: number | null
    category: number | null
    parent: number | null
  }

  export type TradeMinAggregateOutputType = {
    id: number | null
    companyId: string | null
    tradeId: number | null
    number: string | null
    title: string | null
    level: number | null
    category: number | null
    archived: boolean | null
    parent: number | null
    tradeNumberSlug: string | null
  }

  export type TradeMaxAggregateOutputType = {
    id: number | null
    companyId: string | null
    tradeId: number | null
    number: string | null
    title: string | null
    level: number | null
    category: number | null
    archived: boolean | null
    parent: number | null
    tradeNumberSlug: string | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    companyId: number
    tradeId: number
    number: number
    title: number
    level: number
    category: number
    archived: number
    parent: number
    tradeNumberSlug: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    id?: true
    tradeId?: true
    level?: true
    category?: true
    parent?: true
  }

  export type TradeSumAggregateInputType = {
    id?: true
    tradeId?: true
    level?: true
    category?: true
    parent?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    companyId?: true
    tradeId?: true
    number?: true
    title?: true
    level?: true
    category?: true
    archived?: true
    parent?: true
    tradeNumberSlug?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    companyId?: true
    tradeId?: true
    number?: true
    title?: true
    level?: true
    category?: true
    archived?: true
    parent?: true
    tradeNumberSlug?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    companyId?: true
    tradeId?: true
    number?: true
    title?: true
    level?: true
    category?: true
    archived?: true
    parent?: true
    tradeNumberSlug?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: number
    companyId: string
    tradeId: number
    number: string
    title: string
    level: number
    category: number
    archived: boolean
    parent: number | null
    tradeNumberSlug: string
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    tradeId?: boolean
    number?: boolean
    title?: boolean
    level?: boolean
    category?: boolean
    archived?: boolean
    parent?: boolean
    tradeNumberSlug?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    tradeId?: boolean
    number?: boolean
    title?: boolean
    level?: boolean
    category?: boolean
    archived?: boolean
    parent?: boolean
    tradeNumberSlug?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    tradeId?: boolean
    number?: boolean
    title?: boolean
    level?: boolean
    category?: boolean
    archived?: boolean
    parent?: boolean
    tradeNumberSlug?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    companyId?: boolean
    tradeId?: boolean
    number?: boolean
    title?: boolean
    level?: boolean
    category?: boolean
    archived?: boolean
    parent?: boolean
    tradeNumberSlug?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "tradeId" | "number" | "title" | "level" | "category" | "archived" | "parent" | "tradeNumberSlug", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: string
      tradeId: number
      number: string
      title: string
      level: number
      category: number
      archived: boolean
      parent: number | null
      tradeNumberSlug: string
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'Int'>
    readonly companyId: FieldRef<"Trade", 'String'>
    readonly tradeId: FieldRef<"Trade", 'Int'>
    readonly number: FieldRef<"Trade", 'String'>
    readonly title: FieldRef<"Trade", 'String'>
    readonly level: FieldRef<"Trade", 'Int'>
    readonly category: FieldRef<"Trade", 'Int'>
    readonly archived: FieldRef<"Trade", 'Boolean'>
    readonly parent: FieldRef<"Trade", 'Int'>
    readonly tradeNumberSlug: FieldRef<"Trade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model CompanyContractSize
   */

  export type AggregateCompanyContractSize = {
    _count: CompanyContractSizeCountAggregateOutputType | null
    _avg: CompanyContractSizeAvgAggregateOutputType | null
    _sum: CompanyContractSizeSumAggregateOutputType | null
    _min: CompanyContractSizeMinAggregateOutputType | null
    _max: CompanyContractSizeMaxAggregateOutputType | null
  }

  export type CompanyContractSizeAvgAggregateOutputType = {
    id: number | null
    minContractSizeId: number | null
    maxContractSizeId: number | null
  }

  export type CompanyContractSizeSumAggregateOutputType = {
    id: number | null
    minContractSizeId: number | null
    maxContractSizeId: number | null
  }

  export type CompanyContractSizeMinAggregateOutputType = {
    id: number | null
    companyId: string | null
    minContractSizeId: number | null
    maxContractSizeId: number | null
  }

  export type CompanyContractSizeMaxAggregateOutputType = {
    id: number | null
    companyId: string | null
    minContractSizeId: number | null
    maxContractSizeId: number | null
  }

  export type CompanyContractSizeCountAggregateOutputType = {
    id: number
    companyId: number
    minContractSizeId: number
    maxContractSizeId: number
    _all: number
  }


  export type CompanyContractSizeAvgAggregateInputType = {
    id?: true
    minContractSizeId?: true
    maxContractSizeId?: true
  }

  export type CompanyContractSizeSumAggregateInputType = {
    id?: true
    minContractSizeId?: true
    maxContractSizeId?: true
  }

  export type CompanyContractSizeMinAggregateInputType = {
    id?: true
    companyId?: true
    minContractSizeId?: true
    maxContractSizeId?: true
  }

  export type CompanyContractSizeMaxAggregateInputType = {
    id?: true
    companyId?: true
    minContractSizeId?: true
    maxContractSizeId?: true
  }

  export type CompanyContractSizeCountAggregateInputType = {
    id?: true
    companyId?: true
    minContractSizeId?: true
    maxContractSizeId?: true
    _all?: true
  }

  export type CompanyContractSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyContractSize to aggregate.
     */
    where?: CompanyContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyContractSizes to fetch.
     */
    orderBy?: CompanyContractSizeOrderByWithRelationInput | CompanyContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyContractSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyContractSizes
    **/
    _count?: true | CompanyContractSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyContractSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyContractSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyContractSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyContractSizeMaxAggregateInputType
  }

  export type GetCompanyContractSizeAggregateType<T extends CompanyContractSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyContractSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyContractSize[P]>
      : GetScalarType<T[P], AggregateCompanyContractSize[P]>
  }




  export type CompanyContractSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyContractSizeWhereInput
    orderBy?: CompanyContractSizeOrderByWithAggregationInput | CompanyContractSizeOrderByWithAggregationInput[]
    by: CompanyContractSizeScalarFieldEnum[] | CompanyContractSizeScalarFieldEnum
    having?: CompanyContractSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyContractSizeCountAggregateInputType | true
    _avg?: CompanyContractSizeAvgAggregateInputType
    _sum?: CompanyContractSizeSumAggregateInputType
    _min?: CompanyContractSizeMinAggregateInputType
    _max?: CompanyContractSizeMaxAggregateInputType
  }

  export type CompanyContractSizeGroupByOutputType = {
    id: number
    companyId: string
    minContractSizeId: number
    maxContractSizeId: number
    _count: CompanyContractSizeCountAggregateOutputType | null
    _avg: CompanyContractSizeAvgAggregateOutputType | null
    _sum: CompanyContractSizeSumAggregateOutputType | null
    _min: CompanyContractSizeMinAggregateOutputType | null
    _max: CompanyContractSizeMaxAggregateOutputType | null
  }

  type GetCompanyContractSizeGroupByPayload<T extends CompanyContractSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyContractSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyContractSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyContractSizeGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyContractSizeGroupByOutputType[P]>
        }
      >
    >


  export type CompanyContractSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    minContractSizeId?: boolean
    maxContractSizeId?: boolean
    minContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    maxContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyContractSize"]>

  export type CompanyContractSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    minContractSizeId?: boolean
    maxContractSizeId?: boolean
    minContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    maxContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyContractSize"]>

  export type CompanyContractSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    minContractSizeId?: boolean
    maxContractSizeId?: boolean
    minContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    maxContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyContractSize"]>

  export type CompanyContractSizeSelectScalar = {
    id?: boolean
    companyId?: boolean
    minContractSizeId?: boolean
    maxContractSizeId?: boolean
  }

  export type CompanyContractSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "minContractSizeId" | "maxContractSizeId", ExtArgs["result"]["companyContractSize"]>
  export type CompanyContractSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    maxContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyContractSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    maxContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyContractSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    maxContractSize?: boolean | ContractSizeDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyContractSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyContractSize"
    objects: {
      minContractSize: Prisma.$ContractSizePayload<ExtArgs>
      maxContractSize: Prisma.$ContractSizePayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: string
      minContractSizeId: number
      maxContractSizeId: number
    }, ExtArgs["result"]["companyContractSize"]>
    composites: {}
  }

  type CompanyContractSizeGetPayload<S extends boolean | null | undefined | CompanyContractSizeDefaultArgs> = $Result.GetResult<Prisma.$CompanyContractSizePayload, S>

  type CompanyContractSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyContractSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyContractSizeCountAggregateInputType | true
    }

  export interface CompanyContractSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyContractSize'], meta: { name: 'CompanyContractSize' } }
    /**
     * Find zero or one CompanyContractSize that matches the filter.
     * @param {CompanyContractSizeFindUniqueArgs} args - Arguments to find a CompanyContractSize
     * @example
     * // Get one CompanyContractSize
     * const companyContractSize = await prisma.companyContractSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyContractSizeFindUniqueArgs>(args: SelectSubset<T, CompanyContractSizeFindUniqueArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyContractSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyContractSizeFindUniqueOrThrowArgs} args - Arguments to find a CompanyContractSize
     * @example
     * // Get one CompanyContractSize
     * const companyContractSize = await prisma.companyContractSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyContractSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyContractSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyContractSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyContractSizeFindFirstArgs} args - Arguments to find a CompanyContractSize
     * @example
     * // Get one CompanyContractSize
     * const companyContractSize = await prisma.companyContractSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyContractSizeFindFirstArgs>(args?: SelectSubset<T, CompanyContractSizeFindFirstArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyContractSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyContractSizeFindFirstOrThrowArgs} args - Arguments to find a CompanyContractSize
     * @example
     * // Get one CompanyContractSize
     * const companyContractSize = await prisma.companyContractSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyContractSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyContractSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyContractSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyContractSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyContractSizes
     * const companyContractSizes = await prisma.companyContractSize.findMany()
     * 
     * // Get first 10 CompanyContractSizes
     * const companyContractSizes = await prisma.companyContractSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyContractSizeWithIdOnly = await prisma.companyContractSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyContractSizeFindManyArgs>(args?: SelectSubset<T, CompanyContractSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyContractSize.
     * @param {CompanyContractSizeCreateArgs} args - Arguments to create a CompanyContractSize.
     * @example
     * // Create one CompanyContractSize
     * const CompanyContractSize = await prisma.companyContractSize.create({
     *   data: {
     *     // ... data to create a CompanyContractSize
     *   }
     * })
     * 
     */
    create<T extends CompanyContractSizeCreateArgs>(args: SelectSubset<T, CompanyContractSizeCreateArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyContractSizes.
     * @param {CompanyContractSizeCreateManyArgs} args - Arguments to create many CompanyContractSizes.
     * @example
     * // Create many CompanyContractSizes
     * const companyContractSize = await prisma.companyContractSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyContractSizeCreateManyArgs>(args?: SelectSubset<T, CompanyContractSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyContractSizes and returns the data saved in the database.
     * @param {CompanyContractSizeCreateManyAndReturnArgs} args - Arguments to create many CompanyContractSizes.
     * @example
     * // Create many CompanyContractSizes
     * const companyContractSize = await prisma.companyContractSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyContractSizes and only return the `id`
     * const companyContractSizeWithIdOnly = await prisma.companyContractSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyContractSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyContractSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyContractSize.
     * @param {CompanyContractSizeDeleteArgs} args - Arguments to delete one CompanyContractSize.
     * @example
     * // Delete one CompanyContractSize
     * const CompanyContractSize = await prisma.companyContractSize.delete({
     *   where: {
     *     // ... filter to delete one CompanyContractSize
     *   }
     * })
     * 
     */
    delete<T extends CompanyContractSizeDeleteArgs>(args: SelectSubset<T, CompanyContractSizeDeleteArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyContractSize.
     * @param {CompanyContractSizeUpdateArgs} args - Arguments to update one CompanyContractSize.
     * @example
     * // Update one CompanyContractSize
     * const companyContractSize = await prisma.companyContractSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyContractSizeUpdateArgs>(args: SelectSubset<T, CompanyContractSizeUpdateArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyContractSizes.
     * @param {CompanyContractSizeDeleteManyArgs} args - Arguments to filter CompanyContractSizes to delete.
     * @example
     * // Delete a few CompanyContractSizes
     * const { count } = await prisma.companyContractSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyContractSizeDeleteManyArgs>(args?: SelectSubset<T, CompanyContractSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyContractSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyContractSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyContractSizes
     * const companyContractSize = await prisma.companyContractSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyContractSizeUpdateManyArgs>(args: SelectSubset<T, CompanyContractSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyContractSizes and returns the data updated in the database.
     * @param {CompanyContractSizeUpdateManyAndReturnArgs} args - Arguments to update many CompanyContractSizes.
     * @example
     * // Update many CompanyContractSizes
     * const companyContractSize = await prisma.companyContractSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyContractSizes and only return the `id`
     * const companyContractSizeWithIdOnly = await prisma.companyContractSize.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyContractSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyContractSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyContractSize.
     * @param {CompanyContractSizeUpsertArgs} args - Arguments to update or create a CompanyContractSize.
     * @example
     * // Update or create a CompanyContractSize
     * const companyContractSize = await prisma.companyContractSize.upsert({
     *   create: {
     *     // ... data to create a CompanyContractSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyContractSize we want to update
     *   }
     * })
     */
    upsert<T extends CompanyContractSizeUpsertArgs>(args: SelectSubset<T, CompanyContractSizeUpsertArgs<ExtArgs>>): Prisma__CompanyContractSizeClient<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyContractSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyContractSizeCountArgs} args - Arguments to filter CompanyContractSizes to count.
     * @example
     * // Count the number of CompanyContractSizes
     * const count = await prisma.companyContractSize.count({
     *   where: {
     *     // ... the filter for the CompanyContractSizes we want to count
     *   }
     * })
    **/
    count<T extends CompanyContractSizeCountArgs>(
      args?: Subset<T, CompanyContractSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyContractSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyContractSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyContractSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyContractSizeAggregateArgs>(args: Subset<T, CompanyContractSizeAggregateArgs>): Prisma.PrismaPromise<GetCompanyContractSizeAggregateType<T>>

    /**
     * Group by CompanyContractSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyContractSizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyContractSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyContractSizeGroupByArgs['orderBy'] }
        : { orderBy?: CompanyContractSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyContractSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyContractSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyContractSize model
   */
  readonly fields: CompanyContractSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyContractSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyContractSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    minContractSize<T extends ContractSizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractSizeDefaultArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    maxContractSize<T extends ContractSizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractSizeDefaultArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyContractSize model
   */
  interface CompanyContractSizeFieldRefs {
    readonly id: FieldRef<"CompanyContractSize", 'Int'>
    readonly companyId: FieldRef<"CompanyContractSize", 'String'>
    readonly minContractSizeId: FieldRef<"CompanyContractSize", 'Int'>
    readonly maxContractSizeId: FieldRef<"CompanyContractSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompanyContractSize findUnique
   */
  export type CompanyContractSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyContractSize to fetch.
     */
    where: CompanyContractSizeWhereUniqueInput
  }

  /**
   * CompanyContractSize findUniqueOrThrow
   */
  export type CompanyContractSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyContractSize to fetch.
     */
    where: CompanyContractSizeWhereUniqueInput
  }

  /**
   * CompanyContractSize findFirst
   */
  export type CompanyContractSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyContractSize to fetch.
     */
    where?: CompanyContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyContractSizes to fetch.
     */
    orderBy?: CompanyContractSizeOrderByWithRelationInput | CompanyContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyContractSizes.
     */
    cursor?: CompanyContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyContractSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyContractSizes.
     */
    distinct?: CompanyContractSizeScalarFieldEnum | CompanyContractSizeScalarFieldEnum[]
  }

  /**
   * CompanyContractSize findFirstOrThrow
   */
  export type CompanyContractSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyContractSize to fetch.
     */
    where?: CompanyContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyContractSizes to fetch.
     */
    orderBy?: CompanyContractSizeOrderByWithRelationInput | CompanyContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyContractSizes.
     */
    cursor?: CompanyContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyContractSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyContractSizes.
     */
    distinct?: CompanyContractSizeScalarFieldEnum | CompanyContractSizeScalarFieldEnum[]
  }

  /**
   * CompanyContractSize findMany
   */
  export type CompanyContractSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which CompanyContractSizes to fetch.
     */
    where?: CompanyContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyContractSizes to fetch.
     */
    orderBy?: CompanyContractSizeOrderByWithRelationInput | CompanyContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyContractSizes.
     */
    cursor?: CompanyContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyContractSizes.
     */
    skip?: number
    distinct?: CompanyContractSizeScalarFieldEnum | CompanyContractSizeScalarFieldEnum[]
  }

  /**
   * CompanyContractSize create
   */
  export type CompanyContractSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyContractSize.
     */
    data: XOR<CompanyContractSizeCreateInput, CompanyContractSizeUncheckedCreateInput>
  }

  /**
   * CompanyContractSize createMany
   */
  export type CompanyContractSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyContractSizes.
     */
    data: CompanyContractSizeCreateManyInput | CompanyContractSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyContractSize createManyAndReturn
   */
  export type CompanyContractSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyContractSizes.
     */
    data: CompanyContractSizeCreateManyInput | CompanyContractSizeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyContractSize update
   */
  export type CompanyContractSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyContractSize.
     */
    data: XOR<CompanyContractSizeUpdateInput, CompanyContractSizeUncheckedUpdateInput>
    /**
     * Choose, which CompanyContractSize to update.
     */
    where: CompanyContractSizeWhereUniqueInput
  }

  /**
   * CompanyContractSize updateMany
   */
  export type CompanyContractSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyContractSizes.
     */
    data: XOR<CompanyContractSizeUpdateManyMutationInput, CompanyContractSizeUncheckedUpdateManyInput>
    /**
     * Filter which CompanyContractSizes to update
     */
    where?: CompanyContractSizeWhereInput
    /**
     * Limit how many CompanyContractSizes to update.
     */
    limit?: number
  }

  /**
   * CompanyContractSize updateManyAndReturn
   */
  export type CompanyContractSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * The data used to update CompanyContractSizes.
     */
    data: XOR<CompanyContractSizeUpdateManyMutationInput, CompanyContractSizeUncheckedUpdateManyInput>
    /**
     * Filter which CompanyContractSizes to update
     */
    where?: CompanyContractSizeWhereInput
    /**
     * Limit how many CompanyContractSizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyContractSize upsert
   */
  export type CompanyContractSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyContractSize to update in case it exists.
     */
    where: CompanyContractSizeWhereUniqueInput
    /**
     * In case the CompanyContractSize found by the `where` argument doesn't exist, create a new CompanyContractSize with this data.
     */
    create: XOR<CompanyContractSizeCreateInput, CompanyContractSizeUncheckedCreateInput>
    /**
     * In case the CompanyContractSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyContractSizeUpdateInput, CompanyContractSizeUncheckedUpdateInput>
  }

  /**
   * CompanyContractSize delete
   */
  export type CompanyContractSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    /**
     * Filter which CompanyContractSize to delete.
     */
    where: CompanyContractSizeWhereUniqueInput
  }

  /**
   * CompanyContractSize deleteMany
   */
  export type CompanyContractSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyContractSizes to delete
     */
    where?: CompanyContractSizeWhereInput
    /**
     * Limit how many CompanyContractSizes to delete.
     */
    limit?: number
  }

  /**
   * CompanyContractSize without action
   */
  export type CompanyContractSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
  }


  /**
   * Model ContractSize
   */

  export type AggregateContractSize = {
    _count: ContractSizeCountAggregateOutputType | null
    _avg: ContractSizeAvgAggregateOutputType | null
    _sum: ContractSizeSumAggregateOutputType | null
    _min: ContractSizeMinAggregateOutputType | null
    _max: ContractSizeMaxAggregateOutputType | null
  }

  export type ContractSizeAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ContractSizeSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ContractSizeMinAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    labelSlug: string | null
    amount: number | null
  }

  export type ContractSizeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    labelSlug: string | null
    amount: number | null
  }

  export type ContractSizeCountAggregateOutputType = {
    id: number
    name: number
    label: number
    labelSlug: number
    amount: number
    _all: number
  }


  export type ContractSizeAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ContractSizeSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ContractSizeMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    labelSlug?: true
    amount?: true
  }

  export type ContractSizeMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    labelSlug?: true
    amount?: true
  }

  export type ContractSizeCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    labelSlug?: true
    amount?: true
    _all?: true
  }

  export type ContractSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractSize to aggregate.
     */
    where?: ContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractSizes to fetch.
     */
    orderBy?: ContractSizeOrderByWithRelationInput | ContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractSizes
    **/
    _count?: true | ContractSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractSizeMaxAggregateInputType
  }

  export type GetContractSizeAggregateType<T extends ContractSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateContractSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractSize[P]>
      : GetScalarType<T[P], AggregateContractSize[P]>
  }




  export type ContractSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractSizeWhereInput
    orderBy?: ContractSizeOrderByWithAggregationInput | ContractSizeOrderByWithAggregationInput[]
    by: ContractSizeScalarFieldEnum[] | ContractSizeScalarFieldEnum
    having?: ContractSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractSizeCountAggregateInputType | true
    _avg?: ContractSizeAvgAggregateInputType
    _sum?: ContractSizeSumAggregateInputType
    _min?: ContractSizeMinAggregateInputType
    _max?: ContractSizeMaxAggregateInputType
  }

  export type ContractSizeGroupByOutputType = {
    id: number
    name: string
    label: string
    labelSlug: string
    amount: number
    _count: ContractSizeCountAggregateOutputType | null
    _avg: ContractSizeAvgAggregateOutputType | null
    _sum: ContractSizeSumAggregateOutputType | null
    _min: ContractSizeMinAggregateOutputType | null
    _max: ContractSizeMaxAggregateOutputType | null
  }

  type GetContractSizeGroupByPayload<T extends ContractSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractSizeGroupByOutputType[P]>
            : GetScalarType<T[P], ContractSizeGroupByOutputType[P]>
        }
      >
    >


  export type ContractSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    labelSlug?: boolean
    amount?: boolean
    minSizes?: boolean | ContractSize$minSizesArgs<ExtArgs>
    maxSizes?: boolean | ContractSize$maxSizesArgs<ExtArgs>
    _count?: boolean | ContractSizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractSize"]>

  export type ContractSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    labelSlug?: boolean
    amount?: boolean
  }, ExtArgs["result"]["contractSize"]>

  export type ContractSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    labelSlug?: boolean
    amount?: boolean
  }, ExtArgs["result"]["contractSize"]>

  export type ContractSizeSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    labelSlug?: boolean
    amount?: boolean
  }

  export type ContractSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label" | "labelSlug" | "amount", ExtArgs["result"]["contractSize"]>
  export type ContractSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minSizes?: boolean | ContractSize$minSizesArgs<ExtArgs>
    maxSizes?: boolean | ContractSize$maxSizesArgs<ExtArgs>
    _count?: boolean | ContractSizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContractSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContractSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractSize"
    objects: {
      minSizes: Prisma.$CompanyContractSizePayload<ExtArgs>[]
      maxSizes: Prisma.$CompanyContractSizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      label: string
      labelSlug: string
      amount: number
    }, ExtArgs["result"]["contractSize"]>
    composites: {}
  }

  type ContractSizeGetPayload<S extends boolean | null | undefined | ContractSizeDefaultArgs> = $Result.GetResult<Prisma.$ContractSizePayload, S>

  type ContractSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractSizeCountAggregateInputType | true
    }

  export interface ContractSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractSize'], meta: { name: 'ContractSize' } }
    /**
     * Find zero or one ContractSize that matches the filter.
     * @param {ContractSizeFindUniqueArgs} args - Arguments to find a ContractSize
     * @example
     * // Get one ContractSize
     * const contractSize = await prisma.contractSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractSizeFindUniqueArgs>(args: SelectSubset<T, ContractSizeFindUniqueArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractSizeFindUniqueOrThrowArgs} args - Arguments to find a ContractSize
     * @example
     * // Get one ContractSize
     * const contractSize = await prisma.contractSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractSizeFindFirstArgs} args - Arguments to find a ContractSize
     * @example
     * // Get one ContractSize
     * const contractSize = await prisma.contractSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractSizeFindFirstArgs>(args?: SelectSubset<T, ContractSizeFindFirstArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractSizeFindFirstOrThrowArgs} args - Arguments to find a ContractSize
     * @example
     * // Get one ContractSize
     * const contractSize = await prisma.contractSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractSizes
     * const contractSizes = await prisma.contractSize.findMany()
     * 
     * // Get first 10 ContractSizes
     * const contractSizes = await prisma.contractSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractSizeWithIdOnly = await prisma.contractSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractSizeFindManyArgs>(args?: SelectSubset<T, ContractSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractSize.
     * @param {ContractSizeCreateArgs} args - Arguments to create a ContractSize.
     * @example
     * // Create one ContractSize
     * const ContractSize = await prisma.contractSize.create({
     *   data: {
     *     // ... data to create a ContractSize
     *   }
     * })
     * 
     */
    create<T extends ContractSizeCreateArgs>(args: SelectSubset<T, ContractSizeCreateArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractSizes.
     * @param {ContractSizeCreateManyArgs} args - Arguments to create many ContractSizes.
     * @example
     * // Create many ContractSizes
     * const contractSize = await prisma.contractSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractSizeCreateManyArgs>(args?: SelectSubset<T, ContractSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractSizes and returns the data saved in the database.
     * @param {ContractSizeCreateManyAndReturnArgs} args - Arguments to create many ContractSizes.
     * @example
     * // Create many ContractSizes
     * const contractSize = await prisma.contractSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractSizes and only return the `id`
     * const contractSizeWithIdOnly = await prisma.contractSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractSize.
     * @param {ContractSizeDeleteArgs} args - Arguments to delete one ContractSize.
     * @example
     * // Delete one ContractSize
     * const ContractSize = await prisma.contractSize.delete({
     *   where: {
     *     // ... filter to delete one ContractSize
     *   }
     * })
     * 
     */
    delete<T extends ContractSizeDeleteArgs>(args: SelectSubset<T, ContractSizeDeleteArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractSize.
     * @param {ContractSizeUpdateArgs} args - Arguments to update one ContractSize.
     * @example
     * // Update one ContractSize
     * const contractSize = await prisma.contractSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractSizeUpdateArgs>(args: SelectSubset<T, ContractSizeUpdateArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractSizes.
     * @param {ContractSizeDeleteManyArgs} args - Arguments to filter ContractSizes to delete.
     * @example
     * // Delete a few ContractSizes
     * const { count } = await prisma.contractSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractSizeDeleteManyArgs>(args?: SelectSubset<T, ContractSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractSizes
     * const contractSize = await prisma.contractSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractSizeUpdateManyArgs>(args: SelectSubset<T, ContractSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractSizes and returns the data updated in the database.
     * @param {ContractSizeUpdateManyAndReturnArgs} args - Arguments to update many ContractSizes.
     * @example
     * // Update many ContractSizes
     * const contractSize = await prisma.contractSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractSizes and only return the `id`
     * const contractSizeWithIdOnly = await prisma.contractSize.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractSize.
     * @param {ContractSizeUpsertArgs} args - Arguments to update or create a ContractSize.
     * @example
     * // Update or create a ContractSize
     * const contractSize = await prisma.contractSize.upsert({
     *   create: {
     *     // ... data to create a ContractSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractSize we want to update
     *   }
     * })
     */
    upsert<T extends ContractSizeUpsertArgs>(args: SelectSubset<T, ContractSizeUpsertArgs<ExtArgs>>): Prisma__ContractSizeClient<$Result.GetResult<Prisma.$ContractSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractSizeCountArgs} args - Arguments to filter ContractSizes to count.
     * @example
     * // Count the number of ContractSizes
     * const count = await prisma.contractSize.count({
     *   where: {
     *     // ... the filter for the ContractSizes we want to count
     *   }
     * })
    **/
    count<T extends ContractSizeCountArgs>(
      args?: Subset<T, ContractSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractSizeAggregateArgs>(args: Subset<T, ContractSizeAggregateArgs>): Prisma.PrismaPromise<GetContractSizeAggregateType<T>>

    /**
     * Group by ContractSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractSizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractSizeGroupByArgs['orderBy'] }
        : { orderBy?: ContractSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractSize model
   */
  readonly fields: ContractSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    minSizes<T extends ContractSize$minSizesArgs<ExtArgs> = {}>(args?: Subset<T, ContractSize$minSizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maxSizes<T extends ContractSize$maxSizesArgs<ExtArgs> = {}>(args?: Subset<T, ContractSize$maxSizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyContractSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContractSize model
   */
  interface ContractSizeFieldRefs {
    readonly id: FieldRef<"ContractSize", 'Int'>
    readonly name: FieldRef<"ContractSize", 'String'>
    readonly label: FieldRef<"ContractSize", 'String'>
    readonly labelSlug: FieldRef<"ContractSize", 'String'>
    readonly amount: FieldRef<"ContractSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContractSize findUnique
   */
  export type ContractSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which ContractSize to fetch.
     */
    where: ContractSizeWhereUniqueInput
  }

  /**
   * ContractSize findUniqueOrThrow
   */
  export type ContractSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which ContractSize to fetch.
     */
    where: ContractSizeWhereUniqueInput
  }

  /**
   * ContractSize findFirst
   */
  export type ContractSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which ContractSize to fetch.
     */
    where?: ContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractSizes to fetch.
     */
    orderBy?: ContractSizeOrderByWithRelationInput | ContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractSizes.
     */
    cursor?: ContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractSizes.
     */
    distinct?: ContractSizeScalarFieldEnum | ContractSizeScalarFieldEnum[]
  }

  /**
   * ContractSize findFirstOrThrow
   */
  export type ContractSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which ContractSize to fetch.
     */
    where?: ContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractSizes to fetch.
     */
    orderBy?: ContractSizeOrderByWithRelationInput | ContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractSizes.
     */
    cursor?: ContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractSizes.
     */
    distinct?: ContractSizeScalarFieldEnum | ContractSizeScalarFieldEnum[]
  }

  /**
   * ContractSize findMany
   */
  export type ContractSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * Filter, which ContractSizes to fetch.
     */
    where?: ContractSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractSizes to fetch.
     */
    orderBy?: ContractSizeOrderByWithRelationInput | ContractSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractSizes.
     */
    cursor?: ContractSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractSizes.
     */
    skip?: number
    distinct?: ContractSizeScalarFieldEnum | ContractSizeScalarFieldEnum[]
  }

  /**
   * ContractSize create
   */
  export type ContractSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractSize.
     */
    data: XOR<ContractSizeCreateInput, ContractSizeUncheckedCreateInput>
  }

  /**
   * ContractSize createMany
   */
  export type ContractSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractSizes.
     */
    data: ContractSizeCreateManyInput | ContractSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractSize createManyAndReturn
   */
  export type ContractSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * The data used to create many ContractSizes.
     */
    data: ContractSizeCreateManyInput | ContractSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractSize update
   */
  export type ContractSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractSize.
     */
    data: XOR<ContractSizeUpdateInput, ContractSizeUncheckedUpdateInput>
    /**
     * Choose, which ContractSize to update.
     */
    where: ContractSizeWhereUniqueInput
  }

  /**
   * ContractSize updateMany
   */
  export type ContractSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractSizes.
     */
    data: XOR<ContractSizeUpdateManyMutationInput, ContractSizeUncheckedUpdateManyInput>
    /**
     * Filter which ContractSizes to update
     */
    where?: ContractSizeWhereInput
    /**
     * Limit how many ContractSizes to update.
     */
    limit?: number
  }

  /**
   * ContractSize updateManyAndReturn
   */
  export type ContractSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * The data used to update ContractSizes.
     */
    data: XOR<ContractSizeUpdateManyMutationInput, ContractSizeUncheckedUpdateManyInput>
    /**
     * Filter which ContractSizes to update
     */
    where?: ContractSizeWhereInput
    /**
     * Limit how many ContractSizes to update.
     */
    limit?: number
  }

  /**
   * ContractSize upsert
   */
  export type ContractSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractSize to update in case it exists.
     */
    where: ContractSizeWhereUniqueInput
    /**
     * In case the ContractSize found by the `where` argument doesn't exist, create a new ContractSize with this data.
     */
    create: XOR<ContractSizeCreateInput, ContractSizeUncheckedCreateInput>
    /**
     * In case the ContractSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractSizeUpdateInput, ContractSizeUncheckedUpdateInput>
  }

  /**
   * ContractSize delete
   */
  export type ContractSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
    /**
     * Filter which ContractSize to delete.
     */
    where: ContractSizeWhereUniqueInput
  }

  /**
   * ContractSize deleteMany
   */
  export type ContractSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractSizes to delete
     */
    where?: ContractSizeWhereInput
    /**
     * Limit how many ContractSizes to delete.
     */
    limit?: number
  }

  /**
   * ContractSize.minSizes
   */
  export type ContractSize$minSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    where?: CompanyContractSizeWhereInput
    orderBy?: CompanyContractSizeOrderByWithRelationInput | CompanyContractSizeOrderByWithRelationInput[]
    cursor?: CompanyContractSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyContractSizeScalarFieldEnum | CompanyContractSizeScalarFieldEnum[]
  }

  /**
   * ContractSize.maxSizes
   */
  export type ContractSize$maxSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyContractSize
     */
    select?: CompanyContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyContractSize
     */
    omit?: CompanyContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyContractSizeInclude<ExtArgs> | null
    where?: CompanyContractSizeWhereInput
    orderBy?: CompanyContractSizeOrderByWithRelationInput | CompanyContractSizeOrderByWithRelationInput[]
    cursor?: CompanyContractSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyContractSizeScalarFieldEnum | CompanyContractSizeScalarFieldEnum[]
  }

  /**
   * ContractSize without action
   */
  export type ContractSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractSize
     */
    select?: ContractSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractSize
     */
    omit?: ContractSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractSizeInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.ProjectStatus | null
    companyId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.ProjectStatus | null
    companyId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    status: number
    companyId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    companyId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    companyId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    companyId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    startDate: Date
    endDate: Date | null
    status: $Enums.ProjectStatus
    companyId: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    companyId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "status" | "companyId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      startDate: Date
      endDate: Date | null
      status: $Enums.ProjectStatus
      companyId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly companyId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    companyName: 'companyName',
    displayName: 'displayName',
    claimCompanyEmailDomain: 'claimCompanyEmailDomain',
    unionPercent: 'unionPercent',
    status: 'status',
    ratingLevel: 'ratingLevel',
    dbeStatuses: 'dbeStatuses'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const AssessmentsReportScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    companyCompletePercentage: 'companyCompletePercentage',
    safetyCompletePercentage: 'safetyCompletePercentage',
    financeCompletePercentage: 'financeCompletePercentage',
    canHaveBadge: 'canHaveBadge'
  };

  export type AssessmentsReportScalarFieldEnum = (typeof AssessmentsReportScalarFieldEnum)[keyof typeof AssessmentsReportScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    street1: 'street1',
    street2: 'street2',
    city: 'city',
    stateName: 'stateName',
    stateCode: 'stateCode',
    postalCode: 'postalCode',
    countryCode: 'countryCode',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    tradeId: 'tradeId',
    number: 'number',
    title: 'title',
    level: 'level',
    category: 'category',
    archived: 'archived',
    parent: 'parent',
    tradeNumberSlug: 'tradeNumberSlug'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const CompanyContractSizeScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    minContractSizeId: 'minContractSizeId',
    maxContractSizeId: 'maxContractSizeId'
  };

  export type CompanyContractSizeScalarFieldEnum = (typeof CompanyContractSizeScalarFieldEnum)[keyof typeof CompanyContractSizeScalarFieldEnum]


  export const ContractSizeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    labelSlug: 'labelSlug',
    amount: 'amount'
  };

  export type ContractSizeScalarFieldEnum = (typeof ContractSizeScalarFieldEnum)[keyof typeof ContractSizeScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    companyId: 'companyId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    companyName?: StringFilter<"Company"> | string
    displayName?: StringFilter<"Company"> | string
    claimCompanyEmailDomain?: StringFilter<"Company"> | string
    unionPercent?: IntFilter<"Company"> | number
    status?: StringFilter<"Company"> | string
    ratingLevel?: IntFilter<"Company"> | number
    dbeStatuses?: JsonFilter<"Company">
    assessmentsReport?: XOR<AssessmentsReportNullableScalarRelationFilter, AssessmentsReportWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    trades?: TradeListRelationFilter
    companyContractSize?: CompanyContractSizeListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    claimCompanyEmailDomain?: SortOrder
    unionPercent?: SortOrder
    status?: SortOrder
    ratingLevel?: SortOrder
    dbeStatuses?: SortOrder
    assessmentsReport?: AssessmentsReportOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    trades?: TradeOrderByRelationAggregateInput
    companyContractSize?: CompanyContractSizeOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    slug?: StringFilter<"Company"> | string
    companyName?: StringFilter<"Company"> | string
    displayName?: StringFilter<"Company"> | string
    claimCompanyEmailDomain?: StringFilter<"Company"> | string
    unionPercent?: IntFilter<"Company"> | number
    status?: StringFilter<"Company"> | string
    ratingLevel?: IntFilter<"Company"> | number
    dbeStatuses?: JsonFilter<"Company">
    assessmentsReport?: XOR<AssessmentsReportNullableScalarRelationFilter, AssessmentsReportWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    trades?: TradeListRelationFilter
    companyContractSize?: CompanyContractSizeListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    claimCompanyEmailDomain?: SortOrder
    unionPercent?: SortOrder
    status?: SortOrder
    ratingLevel?: SortOrder
    dbeStatuses?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    slug?: StringWithAggregatesFilter<"Company"> | string
    companyName?: StringWithAggregatesFilter<"Company"> | string
    displayName?: StringWithAggregatesFilter<"Company"> | string
    claimCompanyEmailDomain?: StringWithAggregatesFilter<"Company"> | string
    unionPercent?: IntWithAggregatesFilter<"Company"> | number
    status?: StringWithAggregatesFilter<"Company"> | string
    ratingLevel?: IntWithAggregatesFilter<"Company"> | number
    dbeStatuses?: JsonWithAggregatesFilter<"Company">
  }

  export type AssessmentsReportWhereInput = {
    AND?: AssessmentsReportWhereInput | AssessmentsReportWhereInput[]
    OR?: AssessmentsReportWhereInput[]
    NOT?: AssessmentsReportWhereInput | AssessmentsReportWhereInput[]
    id?: IntFilter<"AssessmentsReport"> | number
    companyId?: StringFilter<"AssessmentsReport"> | string
    companyCompletePercentage?: IntFilter<"AssessmentsReport"> | number
    safetyCompletePercentage?: IntFilter<"AssessmentsReport"> | number
    financeCompletePercentage?: IntFilter<"AssessmentsReport"> | number
    canHaveBadge?: BoolFilter<"AssessmentsReport"> | boolean
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type AssessmentsReportOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    companyCompletePercentage?: SortOrder
    safetyCompletePercentage?: SortOrder
    financeCompletePercentage?: SortOrder
    canHaveBadge?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type AssessmentsReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    companyId?: string
    AND?: AssessmentsReportWhereInput | AssessmentsReportWhereInput[]
    OR?: AssessmentsReportWhereInput[]
    NOT?: AssessmentsReportWhereInput | AssessmentsReportWhereInput[]
    companyCompletePercentage?: IntFilter<"AssessmentsReport"> | number
    safetyCompletePercentage?: IntFilter<"AssessmentsReport"> | number
    financeCompletePercentage?: IntFilter<"AssessmentsReport"> | number
    canHaveBadge?: BoolFilter<"AssessmentsReport"> | boolean
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "companyId">

  export type AssessmentsReportOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    companyCompletePercentage?: SortOrder
    safetyCompletePercentage?: SortOrder
    financeCompletePercentage?: SortOrder
    canHaveBadge?: SortOrder
    _count?: AssessmentsReportCountOrderByAggregateInput
    _avg?: AssessmentsReportAvgOrderByAggregateInput
    _max?: AssessmentsReportMaxOrderByAggregateInput
    _min?: AssessmentsReportMinOrderByAggregateInput
    _sum?: AssessmentsReportSumOrderByAggregateInput
  }

  export type AssessmentsReportScalarWhereWithAggregatesInput = {
    AND?: AssessmentsReportScalarWhereWithAggregatesInput | AssessmentsReportScalarWhereWithAggregatesInput[]
    OR?: AssessmentsReportScalarWhereWithAggregatesInput[]
    NOT?: AssessmentsReportScalarWhereWithAggregatesInput | AssessmentsReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssessmentsReport"> | number
    companyId?: StringWithAggregatesFilter<"AssessmentsReport"> | string
    companyCompletePercentage?: IntWithAggregatesFilter<"AssessmentsReport"> | number
    safetyCompletePercentage?: IntWithAggregatesFilter<"AssessmentsReport"> | number
    financeCompletePercentage?: IntWithAggregatesFilter<"AssessmentsReport"> | number
    canHaveBadge?: BoolWithAggregatesFilter<"AssessmentsReport"> | boolean
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    companyId?: StringFilter<"Address"> | string
    street1?: StringFilter<"Address"> | string
    street2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    stateName?: StringFilter<"Address"> | string
    stateCode?: StringFilter<"Address"> | string
    postalCode?: StringFilter<"Address"> | string
    countryCode?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    street1?: SortOrder
    street2?: SortOrderInput | SortOrder
    city?: SortOrder
    stateName?: SortOrder
    stateCode?: SortOrder
    postalCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    companyId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street1?: StringFilter<"Address"> | string
    street2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    stateName?: StringFilter<"Address"> | string
    stateCode?: StringFilter<"Address"> | string
    postalCode?: StringFilter<"Address"> | string
    countryCode?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "companyId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    street1?: SortOrder
    street2?: SortOrderInput | SortOrder
    city?: SortOrder
    stateName?: SortOrder
    stateCode?: SortOrder
    postalCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    companyId?: StringWithAggregatesFilter<"Address"> | string
    street1?: StringWithAggregatesFilter<"Address"> | string
    street2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    stateName?: StringWithAggregatesFilter<"Address"> | string
    stateCode?: StringWithAggregatesFilter<"Address"> | string
    postalCode?: StringWithAggregatesFilter<"Address"> | string
    countryCode?: StringWithAggregatesFilter<"Address"> | string
    latitude?: StringWithAggregatesFilter<"Address"> | string
    longitude?: StringWithAggregatesFilter<"Address"> | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: IntFilter<"Trade"> | number
    companyId?: StringFilter<"Trade"> | string
    tradeId?: IntFilter<"Trade"> | number
    number?: StringFilter<"Trade"> | string
    title?: StringFilter<"Trade"> | string
    level?: IntFilter<"Trade"> | number
    category?: IntFilter<"Trade"> | number
    archived?: BoolFilter<"Trade"> | boolean
    parent?: IntNullableFilter<"Trade"> | number | null
    tradeNumberSlug?: StringFilter<"Trade"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    tradeId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    level?: SortOrder
    category?: SortOrder
    archived?: SortOrder
    parent?: SortOrderInput | SortOrder
    tradeNumberSlug?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    companyId?: StringFilter<"Trade"> | string
    tradeId?: IntFilter<"Trade"> | number
    number?: StringFilter<"Trade"> | string
    title?: StringFilter<"Trade"> | string
    level?: IntFilter<"Trade"> | number
    category?: IntFilter<"Trade"> | number
    archived?: BoolFilter<"Trade"> | boolean
    parent?: IntNullableFilter<"Trade"> | number | null
    tradeNumberSlug?: StringFilter<"Trade"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    tradeId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    level?: SortOrder
    category?: SortOrder
    archived?: SortOrder
    parent?: SortOrderInput | SortOrder
    tradeNumberSlug?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trade"> | number
    companyId?: StringWithAggregatesFilter<"Trade"> | string
    tradeId?: IntWithAggregatesFilter<"Trade"> | number
    number?: StringWithAggregatesFilter<"Trade"> | string
    title?: StringWithAggregatesFilter<"Trade"> | string
    level?: IntWithAggregatesFilter<"Trade"> | number
    category?: IntWithAggregatesFilter<"Trade"> | number
    archived?: BoolWithAggregatesFilter<"Trade"> | boolean
    parent?: IntNullableWithAggregatesFilter<"Trade"> | number | null
    tradeNumberSlug?: StringWithAggregatesFilter<"Trade"> | string
  }

  export type CompanyContractSizeWhereInput = {
    AND?: CompanyContractSizeWhereInput | CompanyContractSizeWhereInput[]
    OR?: CompanyContractSizeWhereInput[]
    NOT?: CompanyContractSizeWhereInput | CompanyContractSizeWhereInput[]
    id?: IntFilter<"CompanyContractSize"> | number
    companyId?: StringFilter<"CompanyContractSize"> | string
    minContractSizeId?: IntFilter<"CompanyContractSize"> | number
    maxContractSizeId?: IntFilter<"CompanyContractSize"> | number
    minContractSize?: XOR<ContractSizeScalarRelationFilter, ContractSizeWhereInput>
    maxContractSize?: XOR<ContractSizeScalarRelationFilter, ContractSizeWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyContractSizeOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    minContractSizeId?: SortOrder
    maxContractSizeId?: SortOrder
    minContractSize?: ContractSizeOrderByWithRelationInput
    maxContractSize?: ContractSizeOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyContractSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyContractSizeWhereInput | CompanyContractSizeWhereInput[]
    OR?: CompanyContractSizeWhereInput[]
    NOT?: CompanyContractSizeWhereInput | CompanyContractSizeWhereInput[]
    companyId?: StringFilter<"CompanyContractSize"> | string
    minContractSizeId?: IntFilter<"CompanyContractSize"> | number
    maxContractSizeId?: IntFilter<"CompanyContractSize"> | number
    minContractSize?: XOR<ContractSizeScalarRelationFilter, ContractSizeWhereInput>
    maxContractSize?: XOR<ContractSizeScalarRelationFilter, ContractSizeWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CompanyContractSizeOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    minContractSizeId?: SortOrder
    maxContractSizeId?: SortOrder
    _count?: CompanyContractSizeCountOrderByAggregateInput
    _avg?: CompanyContractSizeAvgOrderByAggregateInput
    _max?: CompanyContractSizeMaxOrderByAggregateInput
    _min?: CompanyContractSizeMinOrderByAggregateInput
    _sum?: CompanyContractSizeSumOrderByAggregateInput
  }

  export type CompanyContractSizeScalarWhereWithAggregatesInput = {
    AND?: CompanyContractSizeScalarWhereWithAggregatesInput | CompanyContractSizeScalarWhereWithAggregatesInput[]
    OR?: CompanyContractSizeScalarWhereWithAggregatesInput[]
    NOT?: CompanyContractSizeScalarWhereWithAggregatesInput | CompanyContractSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyContractSize"> | number
    companyId?: StringWithAggregatesFilter<"CompanyContractSize"> | string
    minContractSizeId?: IntWithAggregatesFilter<"CompanyContractSize"> | number
    maxContractSizeId?: IntWithAggregatesFilter<"CompanyContractSize"> | number
  }

  export type ContractSizeWhereInput = {
    AND?: ContractSizeWhereInput | ContractSizeWhereInput[]
    OR?: ContractSizeWhereInput[]
    NOT?: ContractSizeWhereInput | ContractSizeWhereInput[]
    id?: IntFilter<"ContractSize"> | number
    name?: StringFilter<"ContractSize"> | string
    label?: StringFilter<"ContractSize"> | string
    labelSlug?: StringFilter<"ContractSize"> | string
    amount?: IntFilter<"ContractSize"> | number
    minSizes?: CompanyContractSizeListRelationFilter
    maxSizes?: CompanyContractSizeListRelationFilter
  }

  export type ContractSizeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    labelSlug?: SortOrder
    amount?: SortOrder
    minSizes?: CompanyContractSizeOrderByRelationAggregateInput
    maxSizes?: CompanyContractSizeOrderByRelationAggregateInput
  }

  export type ContractSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractSizeWhereInput | ContractSizeWhereInput[]
    OR?: ContractSizeWhereInput[]
    NOT?: ContractSizeWhereInput | ContractSizeWhereInput[]
    name?: StringFilter<"ContractSize"> | string
    label?: StringFilter<"ContractSize"> | string
    labelSlug?: StringFilter<"ContractSize"> | string
    amount?: IntFilter<"ContractSize"> | number
    minSizes?: CompanyContractSizeListRelationFilter
    maxSizes?: CompanyContractSizeListRelationFilter
  }, "id">

  export type ContractSizeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    labelSlug?: SortOrder
    amount?: SortOrder
    _count?: ContractSizeCountOrderByAggregateInput
    _avg?: ContractSizeAvgOrderByAggregateInput
    _max?: ContractSizeMaxOrderByAggregateInput
    _min?: ContractSizeMinOrderByAggregateInput
    _sum?: ContractSizeSumOrderByAggregateInput
  }

  export type ContractSizeScalarWhereWithAggregatesInput = {
    AND?: ContractSizeScalarWhereWithAggregatesInput | ContractSizeScalarWhereWithAggregatesInput[]
    OR?: ContractSizeScalarWhereWithAggregatesInput[]
    NOT?: ContractSizeScalarWhereWithAggregatesInput | ContractSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContractSize"> | number
    name?: StringWithAggregatesFilter<"ContractSize"> | string
    label?: StringWithAggregatesFilter<"ContractSize"> | string
    labelSlug?: StringWithAggregatesFilter<"ContractSize"> | string
    amount?: IntWithAggregatesFilter<"ContractSize"> | number
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    companyId?: StringFilter<"Project"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    companyId?: StringFilter<"Project"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    companyId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    companyId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportCreateNestedOneWithoutCompanyInput
    address?: AddressCreateNestedOneWithoutCompanyInput
    trades?: TradeCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeCreateNestedManyWithoutCompanyInput
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedCreateNestedOneWithoutCompanyInput
    address?: AddressUncheckedCreateNestedOneWithoutCompanyInput
    trades?: TradeUncheckedCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeUncheckedCreateNestedManyWithoutCompanyInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUpdateOneWithoutCompanyNestedInput
    address?: AddressUpdateOneWithoutCompanyNestedInput
    trades?: TradeUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedUpdateOneWithoutCompanyNestedInput
    address?: AddressUncheckedUpdateOneWithoutCompanyNestedInput
    trades?: TradeUncheckedUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUncheckedUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
  }

  export type AssessmentsReportCreateInput = {
    companyCompletePercentage: number
    safetyCompletePercentage: number
    financeCompletePercentage: number
    canHaveBadge: boolean
    company: CompanyCreateNestedOneWithoutAssessmentsReportInput
  }

  export type AssessmentsReportUncheckedCreateInput = {
    id?: number
    companyId: string
    companyCompletePercentage: number
    safetyCompletePercentage: number
    financeCompletePercentage: number
    canHaveBadge: boolean
  }

  export type AssessmentsReportUpdateInput = {
    companyCompletePercentage?: IntFieldUpdateOperationsInput | number
    safetyCompletePercentage?: IntFieldUpdateOperationsInput | number
    financeCompletePercentage?: IntFieldUpdateOperationsInput | number
    canHaveBadge?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutAssessmentsReportNestedInput
  }

  export type AssessmentsReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    companyCompletePercentage?: IntFieldUpdateOperationsInput | number
    safetyCompletePercentage?: IntFieldUpdateOperationsInput | number
    financeCompletePercentage?: IntFieldUpdateOperationsInput | number
    canHaveBadge?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssessmentsReportCreateManyInput = {
    id?: number
    companyId: string
    companyCompletePercentage: number
    safetyCompletePercentage: number
    financeCompletePercentage: number
    canHaveBadge: boolean
  }

  export type AssessmentsReportUpdateManyMutationInput = {
    companyCompletePercentage?: IntFieldUpdateOperationsInput | number
    safetyCompletePercentage?: IntFieldUpdateOperationsInput | number
    financeCompletePercentage?: IntFieldUpdateOperationsInput | number
    canHaveBadge?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssessmentsReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    companyCompletePercentage?: IntFieldUpdateOperationsInput | number
    safetyCompletePercentage?: IntFieldUpdateOperationsInput | number
    financeCompletePercentage?: IntFieldUpdateOperationsInput | number
    canHaveBadge?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressCreateInput = {
    street1: string
    street2?: string | null
    city: string
    stateName: string
    stateCode: string
    postalCode: string
    countryCode: string
    latitude: string
    longitude: string
    company: CompanyCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    companyId: string
    street1: string
    street2?: string | null
    city: string
    stateName: string
    stateCode: string
    postalCode: string
    countryCode: string
    latitude: string
    longitude: string
  }

  export type AddressUpdateInput = {
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    stateName?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    stateName?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateManyInput = {
    id?: number
    companyId: string
    street1: string
    street2?: string | null
    city: string
    stateName: string
    stateCode: string
    postalCode: string
    countryCode: string
    latitude: string
    longitude: string
  }

  export type AddressUpdateManyMutationInput = {
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    stateName?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    stateName?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type TradeCreateInput = {
    tradeId: number
    number: string
    title: string
    level: number
    category: number
    archived: boolean
    parent?: number | null
    tradeNumberSlug: string
    company: CompanyCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateInput = {
    id?: number
    companyId: string
    tradeId: number
    number: string
    title: string
    level: number
    category: number
    archived: boolean
    parent?: number | null
    tradeNumberSlug: string
  }

  export type TradeUpdateInput = {
    tradeId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tradeNumberSlug?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    tradeId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tradeNumberSlug?: StringFieldUpdateOperationsInput | string
  }

  export type TradeCreateManyInput = {
    id?: number
    companyId: string
    tradeId: number
    number: string
    title: string
    level: number
    category: number
    archived: boolean
    parent?: number | null
    tradeNumberSlug: string
  }

  export type TradeUpdateManyMutationInput = {
    tradeId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tradeNumberSlug?: StringFieldUpdateOperationsInput | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    tradeId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tradeNumberSlug?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyContractSizeCreateInput = {
    minContractSize: ContractSizeCreateNestedOneWithoutMinSizesInput
    maxContractSize: ContractSizeCreateNestedOneWithoutMaxSizesInput
    company: CompanyCreateNestedOneWithoutCompanyContractSizeInput
  }

  export type CompanyContractSizeUncheckedCreateInput = {
    id?: number
    companyId: string
    minContractSizeId: number
    maxContractSizeId: number
  }

  export type CompanyContractSizeUpdateInput = {
    minContractSize?: ContractSizeUpdateOneRequiredWithoutMinSizesNestedInput
    maxContractSize?: ContractSizeUpdateOneRequiredWithoutMaxSizesNestedInput
    company?: CompanyUpdateOneRequiredWithoutCompanyContractSizeNestedInput
  }

  export type CompanyContractSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    minContractSizeId?: IntFieldUpdateOperationsInput | number
    maxContractSizeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyContractSizeCreateManyInput = {
    id?: number
    companyId: string
    minContractSizeId: number
    maxContractSizeId: number
  }

  export type CompanyContractSizeUpdateManyMutationInput = {

  }

  export type CompanyContractSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    minContractSizeId?: IntFieldUpdateOperationsInput | number
    maxContractSizeId?: IntFieldUpdateOperationsInput | number
  }

  export type ContractSizeCreateInput = {
    name: string
    label: string
    labelSlug: string
    amount: number
    minSizes?: CompanyContractSizeCreateNestedManyWithoutMinContractSizeInput
    maxSizes?: CompanyContractSizeCreateNestedManyWithoutMaxContractSizeInput
  }

  export type ContractSizeUncheckedCreateInput = {
    id?: number
    name: string
    label: string
    labelSlug: string
    amount: number
    minSizes?: CompanyContractSizeUncheckedCreateNestedManyWithoutMinContractSizeInput
    maxSizes?: CompanyContractSizeUncheckedCreateNestedManyWithoutMaxContractSizeInput
  }

  export type ContractSizeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    minSizes?: CompanyContractSizeUpdateManyWithoutMinContractSizeNestedInput
    maxSizes?: CompanyContractSizeUpdateManyWithoutMaxContractSizeNestedInput
  }

  export type ContractSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    minSizes?: CompanyContractSizeUncheckedUpdateManyWithoutMinContractSizeNestedInput
    maxSizes?: CompanyContractSizeUncheckedUpdateManyWithoutMaxContractSizeNestedInput
  }

  export type ContractSizeCreateManyInput = {
    id?: number
    name: string
    label: string
    labelSlug: string
    amount: number
  }

  export type ContractSizeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ContractSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.ProjectStatus
    company: CompanyCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.ProjectStatus
    companyId: string
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    company?: CompanyUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.ProjectStatus
    companyId: string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AssessmentsReportNullableScalarRelationFilter = {
    is?: AssessmentsReportWhereInput | null
    isNot?: AssessmentsReportWhereInput | null
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type CompanyContractSizeListRelationFilter = {
    every?: CompanyContractSizeWhereInput
    some?: CompanyContractSizeWhereInput
    none?: CompanyContractSizeWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyContractSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    claimCompanyEmailDomain?: SortOrder
    unionPercent?: SortOrder
    status?: SortOrder
    ratingLevel?: SortOrder
    dbeStatuses?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    unionPercent?: SortOrder
    ratingLevel?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    claimCompanyEmailDomain?: SortOrder
    unionPercent?: SortOrder
    status?: SortOrder
    ratingLevel?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    claimCompanyEmailDomain?: SortOrder
    unionPercent?: SortOrder
    status?: SortOrder
    ratingLevel?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    unionPercent?: SortOrder
    ratingLevel?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type AssessmentsReportCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    companyCompletePercentage?: SortOrder
    safetyCompletePercentage?: SortOrder
    financeCompletePercentage?: SortOrder
    canHaveBadge?: SortOrder
  }

  export type AssessmentsReportAvgOrderByAggregateInput = {
    id?: SortOrder
    companyCompletePercentage?: SortOrder
    safetyCompletePercentage?: SortOrder
    financeCompletePercentage?: SortOrder
  }

  export type AssessmentsReportMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    companyCompletePercentage?: SortOrder
    safetyCompletePercentage?: SortOrder
    financeCompletePercentage?: SortOrder
    canHaveBadge?: SortOrder
  }

  export type AssessmentsReportMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    companyCompletePercentage?: SortOrder
    safetyCompletePercentage?: SortOrder
    financeCompletePercentage?: SortOrder
    canHaveBadge?: SortOrder
  }

  export type AssessmentsReportSumOrderByAggregateInput = {
    id?: SortOrder
    companyCompletePercentage?: SortOrder
    safetyCompletePercentage?: SortOrder
    financeCompletePercentage?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    stateName?: SortOrder
    stateCode?: SortOrder
    postalCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    stateName?: SortOrder
    stateCode?: SortOrder
    postalCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    stateName?: SortOrder
    stateCode?: SortOrder
    postalCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    tradeId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    level?: SortOrder
    category?: SortOrder
    archived?: SortOrder
    parent?: SortOrder
    tradeNumberSlug?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    level?: SortOrder
    category?: SortOrder
    parent?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    tradeId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    level?: SortOrder
    category?: SortOrder
    archived?: SortOrder
    parent?: SortOrder
    tradeNumberSlug?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    tradeId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    level?: SortOrder
    category?: SortOrder
    archived?: SortOrder
    parent?: SortOrder
    tradeNumberSlug?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    level?: SortOrder
    category?: SortOrder
    parent?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ContractSizeScalarRelationFilter = {
    is?: ContractSizeWhereInput
    isNot?: ContractSizeWhereInput
  }

  export type CompanyContractSizeCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    minContractSizeId?: SortOrder
    maxContractSizeId?: SortOrder
  }

  export type CompanyContractSizeAvgOrderByAggregateInput = {
    id?: SortOrder
    minContractSizeId?: SortOrder
    maxContractSizeId?: SortOrder
  }

  export type CompanyContractSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    minContractSizeId?: SortOrder
    maxContractSizeId?: SortOrder
  }

  export type CompanyContractSizeMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    minContractSizeId?: SortOrder
    maxContractSizeId?: SortOrder
  }

  export type CompanyContractSizeSumOrderByAggregateInput = {
    id?: SortOrder
    minContractSizeId?: SortOrder
    maxContractSizeId?: SortOrder
  }

  export type ContractSizeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    labelSlug?: SortOrder
    amount?: SortOrder
  }

  export type ContractSizeAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type ContractSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    labelSlug?: SortOrder
    amount?: SortOrder
  }

  export type ContractSizeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    labelSlug?: SortOrder
    amount?: SortOrder
  }

  export type ContractSizeSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentsReportCreateNestedOneWithoutCompanyInput = {
    create?: XOR<AssessmentsReportCreateWithoutCompanyInput, AssessmentsReportUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AssessmentsReportCreateOrConnectWithoutCompanyInput
    connect?: AssessmentsReportWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutCompanyInput = {
    create?: XOR<AddressCreateWithoutCompanyInput, AddressUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCompanyInput
    connect?: AddressWhereUniqueInput
  }

  export type TradeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TradeCreateWithoutCompanyInput, TradeUncheckedCreateWithoutCompanyInput> | TradeCreateWithoutCompanyInput[] | TradeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutCompanyInput | TradeCreateOrConnectWithoutCompanyInput[]
    createMany?: TradeCreateManyCompanyInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type CompanyContractSizeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyContractSizeCreateWithoutCompanyInput, CompanyContractSizeUncheckedCreateWithoutCompanyInput> | CompanyContractSizeCreateWithoutCompanyInput[] | CompanyContractSizeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutCompanyInput | CompanyContractSizeCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyContractSizeCreateManyCompanyInputEnvelope
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type AssessmentsReportUncheckedCreateNestedOneWithoutCompanyInput = {
    create?: XOR<AssessmentsReportCreateWithoutCompanyInput, AssessmentsReportUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AssessmentsReportCreateOrConnectWithoutCompanyInput
    connect?: AssessmentsReportWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutCompanyInput = {
    create?: XOR<AddressCreateWithoutCompanyInput, AddressUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCompanyInput
    connect?: AddressWhereUniqueInput
  }

  export type TradeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TradeCreateWithoutCompanyInput, TradeUncheckedCreateWithoutCompanyInput> | TradeCreateWithoutCompanyInput[] | TradeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutCompanyInput | TradeCreateOrConnectWithoutCompanyInput[]
    createMany?: TradeCreateManyCompanyInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type CompanyContractSizeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyContractSizeCreateWithoutCompanyInput, CompanyContractSizeUncheckedCreateWithoutCompanyInput> | CompanyContractSizeCreateWithoutCompanyInput[] | CompanyContractSizeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutCompanyInput | CompanyContractSizeCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyContractSizeCreateManyCompanyInputEnvelope
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type AssessmentsReportUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<AssessmentsReportCreateWithoutCompanyInput, AssessmentsReportUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AssessmentsReportCreateOrConnectWithoutCompanyInput
    upsert?: AssessmentsReportUpsertWithoutCompanyInput
    disconnect?: AssessmentsReportWhereInput | boolean
    delete?: AssessmentsReportWhereInput | boolean
    connect?: AssessmentsReportWhereUniqueInput
    update?: XOR<XOR<AssessmentsReportUpdateToOneWithWhereWithoutCompanyInput, AssessmentsReportUpdateWithoutCompanyInput>, AssessmentsReportUncheckedUpdateWithoutCompanyInput>
  }

  export type AddressUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<AddressCreateWithoutCompanyInput, AddressUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCompanyInput
    upsert?: AddressUpsertWithoutCompanyInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutCompanyInput, AddressUpdateWithoutCompanyInput>, AddressUncheckedUpdateWithoutCompanyInput>
  }

  export type TradeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TradeCreateWithoutCompanyInput, TradeUncheckedCreateWithoutCompanyInput> | TradeCreateWithoutCompanyInput[] | TradeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutCompanyInput | TradeCreateOrConnectWithoutCompanyInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutCompanyInput | TradeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TradeCreateManyCompanyInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutCompanyInput | TradeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutCompanyInput | TradeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type CompanyContractSizeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyContractSizeCreateWithoutCompanyInput, CompanyContractSizeUncheckedCreateWithoutCompanyInput> | CompanyContractSizeCreateWithoutCompanyInput[] | CompanyContractSizeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutCompanyInput | CompanyContractSizeCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyContractSizeUpsertWithWhereUniqueWithoutCompanyInput | CompanyContractSizeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyContractSizeCreateManyCompanyInputEnvelope
    set?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    disconnect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    delete?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    update?: CompanyContractSizeUpdateWithWhereUniqueWithoutCompanyInput | CompanyContractSizeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyContractSizeUpdateManyWithWhereWithoutCompanyInput | CompanyContractSizeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type AssessmentsReportUncheckedUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<AssessmentsReportCreateWithoutCompanyInput, AssessmentsReportUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AssessmentsReportCreateOrConnectWithoutCompanyInput
    upsert?: AssessmentsReportUpsertWithoutCompanyInput
    disconnect?: AssessmentsReportWhereInput | boolean
    delete?: AssessmentsReportWhereInput | boolean
    connect?: AssessmentsReportWhereUniqueInput
    update?: XOR<XOR<AssessmentsReportUpdateToOneWithWhereWithoutCompanyInput, AssessmentsReportUpdateWithoutCompanyInput>, AssessmentsReportUncheckedUpdateWithoutCompanyInput>
  }

  export type AddressUncheckedUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<AddressCreateWithoutCompanyInput, AddressUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCompanyInput
    upsert?: AddressUpsertWithoutCompanyInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutCompanyInput, AddressUpdateWithoutCompanyInput>, AddressUncheckedUpdateWithoutCompanyInput>
  }

  export type TradeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TradeCreateWithoutCompanyInput, TradeUncheckedCreateWithoutCompanyInput> | TradeCreateWithoutCompanyInput[] | TradeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutCompanyInput | TradeCreateOrConnectWithoutCompanyInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutCompanyInput | TradeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TradeCreateManyCompanyInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutCompanyInput | TradeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutCompanyInput | TradeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type CompanyContractSizeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyContractSizeCreateWithoutCompanyInput, CompanyContractSizeUncheckedCreateWithoutCompanyInput> | CompanyContractSizeCreateWithoutCompanyInput[] | CompanyContractSizeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutCompanyInput | CompanyContractSizeCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyContractSizeUpsertWithWhereUniqueWithoutCompanyInput | CompanyContractSizeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyContractSizeCreateManyCompanyInputEnvelope
    set?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    disconnect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    delete?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    update?: CompanyContractSizeUpdateWithWhereUniqueWithoutCompanyInput | CompanyContractSizeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyContractSizeUpdateManyWithWhereWithoutCompanyInput | CompanyContractSizeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutAssessmentsReportInput = {
    create?: XOR<CompanyCreateWithoutAssessmentsReportInput, CompanyUncheckedCreateWithoutAssessmentsReportInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAssessmentsReportInput
    connect?: CompanyWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutAssessmentsReportNestedInput = {
    create?: XOR<CompanyCreateWithoutAssessmentsReportInput, CompanyUncheckedCreateWithoutAssessmentsReportInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAssessmentsReportInput
    upsert?: CompanyUpsertWithoutAssessmentsReportInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutAssessmentsReportInput, CompanyUpdateWithoutAssessmentsReportInput>, CompanyUncheckedUpdateWithoutAssessmentsReportInput>
  }

  export type CompanyCreateNestedOneWithoutAddressInput = {
    create?: XOR<CompanyCreateWithoutAddressInput, CompanyUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAddressInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<CompanyCreateWithoutAddressInput, CompanyUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAddressInput
    upsert?: CompanyUpsertWithoutAddressInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutAddressInput, CompanyUpdateWithoutAddressInput>, CompanyUncheckedUpdateWithoutAddressInput>
  }

  export type CompanyCreateNestedOneWithoutTradesInput = {
    create?: XOR<CompanyCreateWithoutTradesInput, CompanyUncheckedCreateWithoutTradesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTradesInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<CompanyCreateWithoutTradesInput, CompanyUncheckedCreateWithoutTradesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTradesInput
    upsert?: CompanyUpsertWithoutTradesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTradesInput, CompanyUpdateWithoutTradesInput>, CompanyUncheckedUpdateWithoutTradesInput>
  }

  export type ContractSizeCreateNestedOneWithoutMinSizesInput = {
    create?: XOR<ContractSizeCreateWithoutMinSizesInput, ContractSizeUncheckedCreateWithoutMinSizesInput>
    connectOrCreate?: ContractSizeCreateOrConnectWithoutMinSizesInput
    connect?: ContractSizeWhereUniqueInput
  }

  export type ContractSizeCreateNestedOneWithoutMaxSizesInput = {
    create?: XOR<ContractSizeCreateWithoutMaxSizesInput, ContractSizeUncheckedCreateWithoutMaxSizesInput>
    connectOrCreate?: ContractSizeCreateOrConnectWithoutMaxSizesInput
    connect?: ContractSizeWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutCompanyContractSizeInput = {
    create?: XOR<CompanyCreateWithoutCompanyContractSizeInput, CompanyUncheckedCreateWithoutCompanyContractSizeInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyContractSizeInput
    connect?: CompanyWhereUniqueInput
  }

  export type ContractSizeUpdateOneRequiredWithoutMinSizesNestedInput = {
    create?: XOR<ContractSizeCreateWithoutMinSizesInput, ContractSizeUncheckedCreateWithoutMinSizesInput>
    connectOrCreate?: ContractSizeCreateOrConnectWithoutMinSizesInput
    upsert?: ContractSizeUpsertWithoutMinSizesInput
    connect?: ContractSizeWhereUniqueInput
    update?: XOR<XOR<ContractSizeUpdateToOneWithWhereWithoutMinSizesInput, ContractSizeUpdateWithoutMinSizesInput>, ContractSizeUncheckedUpdateWithoutMinSizesInput>
  }

  export type ContractSizeUpdateOneRequiredWithoutMaxSizesNestedInput = {
    create?: XOR<ContractSizeCreateWithoutMaxSizesInput, ContractSizeUncheckedCreateWithoutMaxSizesInput>
    connectOrCreate?: ContractSizeCreateOrConnectWithoutMaxSizesInput
    upsert?: ContractSizeUpsertWithoutMaxSizesInput
    connect?: ContractSizeWhereUniqueInput
    update?: XOR<XOR<ContractSizeUpdateToOneWithWhereWithoutMaxSizesInput, ContractSizeUpdateWithoutMaxSizesInput>, ContractSizeUncheckedUpdateWithoutMaxSizesInput>
  }

  export type CompanyUpdateOneRequiredWithoutCompanyContractSizeNestedInput = {
    create?: XOR<CompanyCreateWithoutCompanyContractSizeInput, CompanyUncheckedCreateWithoutCompanyContractSizeInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyContractSizeInput
    upsert?: CompanyUpsertWithoutCompanyContractSizeInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCompanyContractSizeInput, CompanyUpdateWithoutCompanyContractSizeInput>, CompanyUncheckedUpdateWithoutCompanyContractSizeInput>
  }

  export type CompanyContractSizeCreateNestedManyWithoutMinContractSizeInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMinContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput> | CompanyContractSizeCreateWithoutMinContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMinContractSizeInputEnvelope
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
  }

  export type CompanyContractSizeCreateNestedManyWithoutMaxContractSizeInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput> | CompanyContractSizeCreateWithoutMaxContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMaxContractSizeInputEnvelope
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
  }

  export type CompanyContractSizeUncheckedCreateNestedManyWithoutMinContractSizeInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMinContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput> | CompanyContractSizeCreateWithoutMinContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMinContractSizeInputEnvelope
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
  }

  export type CompanyContractSizeUncheckedCreateNestedManyWithoutMaxContractSizeInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput> | CompanyContractSizeCreateWithoutMaxContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMaxContractSizeInputEnvelope
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
  }

  export type CompanyContractSizeUpdateManyWithoutMinContractSizeNestedInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMinContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput> | CompanyContractSizeCreateWithoutMinContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput[]
    upsert?: CompanyContractSizeUpsertWithWhereUniqueWithoutMinContractSizeInput | CompanyContractSizeUpsertWithWhereUniqueWithoutMinContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMinContractSizeInputEnvelope
    set?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    disconnect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    delete?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    update?: CompanyContractSizeUpdateWithWhereUniqueWithoutMinContractSizeInput | CompanyContractSizeUpdateWithWhereUniqueWithoutMinContractSizeInput[]
    updateMany?: CompanyContractSizeUpdateManyWithWhereWithoutMinContractSizeInput | CompanyContractSizeUpdateManyWithWhereWithoutMinContractSizeInput[]
    deleteMany?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
  }

  export type CompanyContractSizeUpdateManyWithoutMaxContractSizeNestedInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput> | CompanyContractSizeCreateWithoutMaxContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput[]
    upsert?: CompanyContractSizeUpsertWithWhereUniqueWithoutMaxContractSizeInput | CompanyContractSizeUpsertWithWhereUniqueWithoutMaxContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMaxContractSizeInputEnvelope
    set?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    disconnect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    delete?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    update?: CompanyContractSizeUpdateWithWhereUniqueWithoutMaxContractSizeInput | CompanyContractSizeUpdateWithWhereUniqueWithoutMaxContractSizeInput[]
    updateMany?: CompanyContractSizeUpdateManyWithWhereWithoutMaxContractSizeInput | CompanyContractSizeUpdateManyWithWhereWithoutMaxContractSizeInput[]
    deleteMany?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
  }

  export type CompanyContractSizeUncheckedUpdateManyWithoutMinContractSizeNestedInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMinContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput> | CompanyContractSizeCreateWithoutMinContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput[]
    upsert?: CompanyContractSizeUpsertWithWhereUniqueWithoutMinContractSizeInput | CompanyContractSizeUpsertWithWhereUniqueWithoutMinContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMinContractSizeInputEnvelope
    set?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    disconnect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    delete?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    update?: CompanyContractSizeUpdateWithWhereUniqueWithoutMinContractSizeInput | CompanyContractSizeUpdateWithWhereUniqueWithoutMinContractSizeInput[]
    updateMany?: CompanyContractSizeUpdateManyWithWhereWithoutMinContractSizeInput | CompanyContractSizeUpdateManyWithWhereWithoutMinContractSizeInput[]
    deleteMany?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
  }

  export type CompanyContractSizeUncheckedUpdateManyWithoutMaxContractSizeNestedInput = {
    create?: XOR<CompanyContractSizeCreateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput> | CompanyContractSizeCreateWithoutMaxContractSizeInput[] | CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput[]
    connectOrCreate?: CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput | CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput[]
    upsert?: CompanyContractSizeUpsertWithWhereUniqueWithoutMaxContractSizeInput | CompanyContractSizeUpsertWithWhereUniqueWithoutMaxContractSizeInput[]
    createMany?: CompanyContractSizeCreateManyMaxContractSizeInputEnvelope
    set?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    disconnect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    delete?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    connect?: CompanyContractSizeWhereUniqueInput | CompanyContractSizeWhereUniqueInput[]
    update?: CompanyContractSizeUpdateWithWhereUniqueWithoutMaxContractSizeInput | CompanyContractSizeUpdateWithWhereUniqueWithoutMaxContractSizeInput[]
    updateMany?: CompanyContractSizeUpdateManyWithWhereWithoutMaxContractSizeInput | CompanyContractSizeUpdateManyWithWhereWithoutMaxContractSizeInput[]
    deleteMany?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type CompanyUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    upsert?: CompanyUpsertWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProjectsInput, CompanyUpdateWithoutProjectsInput>, CompanyUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type AssessmentsReportCreateWithoutCompanyInput = {
    companyCompletePercentage: number
    safetyCompletePercentage: number
    financeCompletePercentage: number
    canHaveBadge: boolean
  }

  export type AssessmentsReportUncheckedCreateWithoutCompanyInput = {
    id?: number
    companyCompletePercentage: number
    safetyCompletePercentage: number
    financeCompletePercentage: number
    canHaveBadge: boolean
  }

  export type AssessmentsReportCreateOrConnectWithoutCompanyInput = {
    where: AssessmentsReportWhereUniqueInput
    create: XOR<AssessmentsReportCreateWithoutCompanyInput, AssessmentsReportUncheckedCreateWithoutCompanyInput>
  }

  export type AddressCreateWithoutCompanyInput = {
    street1: string
    street2?: string | null
    city: string
    stateName: string
    stateCode: string
    postalCode: string
    countryCode: string
    latitude: string
    longitude: string
  }

  export type AddressUncheckedCreateWithoutCompanyInput = {
    id?: number
    street1: string
    street2?: string | null
    city: string
    stateName: string
    stateCode: string
    postalCode: string
    countryCode: string
    latitude: string
    longitude: string
  }

  export type AddressCreateOrConnectWithoutCompanyInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCompanyInput, AddressUncheckedCreateWithoutCompanyInput>
  }

  export type TradeCreateWithoutCompanyInput = {
    tradeId: number
    number: string
    title: string
    level: number
    category: number
    archived: boolean
    parent?: number | null
    tradeNumberSlug: string
  }

  export type TradeUncheckedCreateWithoutCompanyInput = {
    id?: number
    tradeId: number
    number: string
    title: string
    level: number
    category: number
    archived: boolean
    parent?: number | null
    tradeNumberSlug: string
  }

  export type TradeCreateOrConnectWithoutCompanyInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutCompanyInput, TradeUncheckedCreateWithoutCompanyInput>
  }

  export type TradeCreateManyCompanyInputEnvelope = {
    data: TradeCreateManyCompanyInput | TradeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyContractSizeCreateWithoutCompanyInput = {
    minContractSize: ContractSizeCreateNestedOneWithoutMinSizesInput
    maxContractSize: ContractSizeCreateNestedOneWithoutMaxSizesInput
  }

  export type CompanyContractSizeUncheckedCreateWithoutCompanyInput = {
    id?: number
    minContractSizeId: number
    maxContractSizeId: number
  }

  export type CompanyContractSizeCreateOrConnectWithoutCompanyInput = {
    where: CompanyContractSizeWhereUniqueInput
    create: XOR<CompanyContractSizeCreateWithoutCompanyInput, CompanyContractSizeUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyContractSizeCreateManyCompanyInputEnvelope = {
    data: CompanyContractSizeCreateManyCompanyInput | CompanyContractSizeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCompanyInput = {
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.ProjectStatus
  }

  export type ProjectUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.ProjectStatus
  }

  export type ProjectCreateOrConnectWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectCreateManyCompanyInputEnvelope = {
    data: ProjectCreateManyCompanyInput | ProjectCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentsReportUpsertWithoutCompanyInput = {
    update: XOR<AssessmentsReportUpdateWithoutCompanyInput, AssessmentsReportUncheckedUpdateWithoutCompanyInput>
    create: XOR<AssessmentsReportCreateWithoutCompanyInput, AssessmentsReportUncheckedCreateWithoutCompanyInput>
    where?: AssessmentsReportWhereInput
  }

  export type AssessmentsReportUpdateToOneWithWhereWithoutCompanyInput = {
    where?: AssessmentsReportWhereInput
    data: XOR<AssessmentsReportUpdateWithoutCompanyInput, AssessmentsReportUncheckedUpdateWithoutCompanyInput>
  }

  export type AssessmentsReportUpdateWithoutCompanyInput = {
    companyCompletePercentage?: IntFieldUpdateOperationsInput | number
    safetyCompletePercentage?: IntFieldUpdateOperationsInput | number
    financeCompletePercentage?: IntFieldUpdateOperationsInput | number
    canHaveBadge?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssessmentsReportUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyCompletePercentage?: IntFieldUpdateOperationsInput | number
    safetyCompletePercentage?: IntFieldUpdateOperationsInput | number
    financeCompletePercentage?: IntFieldUpdateOperationsInput | number
    canHaveBadge?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUpsertWithoutCompanyInput = {
    update: XOR<AddressUpdateWithoutCompanyInput, AddressUncheckedUpdateWithoutCompanyInput>
    create: XOR<AddressCreateWithoutCompanyInput, AddressUncheckedCreateWithoutCompanyInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutCompanyInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutCompanyInput, AddressUncheckedUpdateWithoutCompanyInput>
  }

  export type AddressUpdateWithoutCompanyInput = {
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    stateName?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    stateName?: StringFieldUpdateOperationsInput | string
    stateCode?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type TradeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutCompanyInput, TradeUncheckedUpdateWithoutCompanyInput>
    create: XOR<TradeCreateWithoutCompanyInput, TradeUncheckedCreateWithoutCompanyInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutCompanyInput, TradeUncheckedUpdateWithoutCompanyInput>
  }

  export type TradeUpdateManyWithWhereWithoutCompanyInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    id?: IntFilter<"Trade"> | number
    companyId?: StringFilter<"Trade"> | string
    tradeId?: IntFilter<"Trade"> | number
    number?: StringFilter<"Trade"> | string
    title?: StringFilter<"Trade"> | string
    level?: IntFilter<"Trade"> | number
    category?: IntFilter<"Trade"> | number
    archived?: BoolFilter<"Trade"> | boolean
    parent?: IntNullableFilter<"Trade"> | number | null
    tradeNumberSlug?: StringFilter<"Trade"> | string
  }

  export type CompanyContractSizeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyContractSizeWhereUniqueInput
    update: XOR<CompanyContractSizeUpdateWithoutCompanyInput, CompanyContractSizeUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyContractSizeCreateWithoutCompanyInput, CompanyContractSizeUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyContractSizeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyContractSizeWhereUniqueInput
    data: XOR<CompanyContractSizeUpdateWithoutCompanyInput, CompanyContractSizeUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyContractSizeUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyContractSizeScalarWhereInput
    data: XOR<CompanyContractSizeUpdateManyMutationInput, CompanyContractSizeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyContractSizeScalarWhereInput = {
    AND?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
    OR?: CompanyContractSizeScalarWhereInput[]
    NOT?: CompanyContractSizeScalarWhereInput | CompanyContractSizeScalarWhereInput[]
    id?: IntFilter<"CompanyContractSize"> | number
    companyId?: StringFilter<"CompanyContractSize"> | string
    minContractSizeId?: IntFilter<"CompanyContractSize"> | number
    maxContractSizeId?: IntFilter<"CompanyContractSize"> | number
  }

  export type ProjectUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCompanyInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    companyId?: StringFilter<"Project"> | string
  }

  export type CompanyCreateWithoutAssessmentsReportInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    address?: AddressCreateNestedOneWithoutCompanyInput
    trades?: TradeCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeCreateNestedManyWithoutCompanyInput
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAssessmentsReportInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    address?: AddressUncheckedCreateNestedOneWithoutCompanyInput
    trades?: TradeUncheckedCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeUncheckedCreateNestedManyWithoutCompanyInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAssessmentsReportInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAssessmentsReportInput, CompanyUncheckedCreateWithoutAssessmentsReportInput>
  }

  export type CompanyUpsertWithoutAssessmentsReportInput = {
    update: XOR<CompanyUpdateWithoutAssessmentsReportInput, CompanyUncheckedUpdateWithoutAssessmentsReportInput>
    create: XOR<CompanyCreateWithoutAssessmentsReportInput, CompanyUncheckedCreateWithoutAssessmentsReportInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutAssessmentsReportInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutAssessmentsReportInput, CompanyUncheckedUpdateWithoutAssessmentsReportInput>
  }

  export type CompanyUpdateWithoutAssessmentsReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    address?: AddressUpdateOneWithoutCompanyNestedInput
    trades?: TradeUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAssessmentsReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    address?: AddressUncheckedUpdateOneWithoutCompanyNestedInput
    trades?: TradeUncheckedUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUncheckedUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutAddressInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportCreateNestedOneWithoutCompanyInput
    trades?: TradeCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeCreateNestedManyWithoutCompanyInput
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAddressInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedCreateNestedOneWithoutCompanyInput
    trades?: TradeUncheckedCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeUncheckedCreateNestedManyWithoutCompanyInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAddressInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAddressInput, CompanyUncheckedCreateWithoutAddressInput>
  }

  export type CompanyUpsertWithoutAddressInput = {
    update: XOR<CompanyUpdateWithoutAddressInput, CompanyUncheckedUpdateWithoutAddressInput>
    create: XOR<CompanyCreateWithoutAddressInput, CompanyUncheckedCreateWithoutAddressInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutAddressInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutAddressInput, CompanyUncheckedUpdateWithoutAddressInput>
  }

  export type CompanyUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUpdateOneWithoutCompanyNestedInput
    trades?: TradeUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedUpdateOneWithoutCompanyNestedInput
    trades?: TradeUncheckedUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUncheckedUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutTradesInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportCreateNestedOneWithoutCompanyInput
    address?: AddressCreateNestedOneWithoutCompanyInput
    companyContractSize?: CompanyContractSizeCreateNestedManyWithoutCompanyInput
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTradesInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedCreateNestedOneWithoutCompanyInput
    address?: AddressUncheckedCreateNestedOneWithoutCompanyInput
    companyContractSize?: CompanyContractSizeUncheckedCreateNestedManyWithoutCompanyInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTradesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTradesInput, CompanyUncheckedCreateWithoutTradesInput>
  }

  export type CompanyUpsertWithoutTradesInput = {
    update: XOR<CompanyUpdateWithoutTradesInput, CompanyUncheckedUpdateWithoutTradesInput>
    create: XOR<CompanyCreateWithoutTradesInput, CompanyUncheckedCreateWithoutTradesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTradesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTradesInput, CompanyUncheckedUpdateWithoutTradesInput>
  }

  export type CompanyUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUpdateOneWithoutCompanyNestedInput
    address?: AddressUpdateOneWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedUpdateOneWithoutCompanyNestedInput
    address?: AddressUncheckedUpdateOneWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUncheckedUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ContractSizeCreateWithoutMinSizesInput = {
    name: string
    label: string
    labelSlug: string
    amount: number
    maxSizes?: CompanyContractSizeCreateNestedManyWithoutMaxContractSizeInput
  }

  export type ContractSizeUncheckedCreateWithoutMinSizesInput = {
    id?: number
    name: string
    label: string
    labelSlug: string
    amount: number
    maxSizes?: CompanyContractSizeUncheckedCreateNestedManyWithoutMaxContractSizeInput
  }

  export type ContractSizeCreateOrConnectWithoutMinSizesInput = {
    where: ContractSizeWhereUniqueInput
    create: XOR<ContractSizeCreateWithoutMinSizesInput, ContractSizeUncheckedCreateWithoutMinSizesInput>
  }

  export type ContractSizeCreateWithoutMaxSizesInput = {
    name: string
    label: string
    labelSlug: string
    amount: number
    minSizes?: CompanyContractSizeCreateNestedManyWithoutMinContractSizeInput
  }

  export type ContractSizeUncheckedCreateWithoutMaxSizesInput = {
    id?: number
    name: string
    label: string
    labelSlug: string
    amount: number
    minSizes?: CompanyContractSizeUncheckedCreateNestedManyWithoutMinContractSizeInput
  }

  export type ContractSizeCreateOrConnectWithoutMaxSizesInput = {
    where: ContractSizeWhereUniqueInput
    create: XOR<ContractSizeCreateWithoutMaxSizesInput, ContractSizeUncheckedCreateWithoutMaxSizesInput>
  }

  export type CompanyCreateWithoutCompanyContractSizeInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportCreateNestedOneWithoutCompanyInput
    address?: AddressCreateNestedOneWithoutCompanyInput
    trades?: TradeCreateNestedManyWithoutCompanyInput
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCompanyContractSizeInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedCreateNestedOneWithoutCompanyInput
    address?: AddressUncheckedCreateNestedOneWithoutCompanyInput
    trades?: TradeUncheckedCreateNestedManyWithoutCompanyInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCompanyContractSizeInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCompanyContractSizeInput, CompanyUncheckedCreateWithoutCompanyContractSizeInput>
  }

  export type ContractSizeUpsertWithoutMinSizesInput = {
    update: XOR<ContractSizeUpdateWithoutMinSizesInput, ContractSizeUncheckedUpdateWithoutMinSizesInput>
    create: XOR<ContractSizeCreateWithoutMinSizesInput, ContractSizeUncheckedCreateWithoutMinSizesInput>
    where?: ContractSizeWhereInput
  }

  export type ContractSizeUpdateToOneWithWhereWithoutMinSizesInput = {
    where?: ContractSizeWhereInput
    data: XOR<ContractSizeUpdateWithoutMinSizesInput, ContractSizeUncheckedUpdateWithoutMinSizesInput>
  }

  export type ContractSizeUpdateWithoutMinSizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    maxSizes?: CompanyContractSizeUpdateManyWithoutMaxContractSizeNestedInput
  }

  export type ContractSizeUncheckedUpdateWithoutMinSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    maxSizes?: CompanyContractSizeUncheckedUpdateManyWithoutMaxContractSizeNestedInput
  }

  export type ContractSizeUpsertWithoutMaxSizesInput = {
    update: XOR<ContractSizeUpdateWithoutMaxSizesInput, ContractSizeUncheckedUpdateWithoutMaxSizesInput>
    create: XOR<ContractSizeCreateWithoutMaxSizesInput, ContractSizeUncheckedCreateWithoutMaxSizesInput>
    where?: ContractSizeWhereInput
  }

  export type ContractSizeUpdateToOneWithWhereWithoutMaxSizesInput = {
    where?: ContractSizeWhereInput
    data: XOR<ContractSizeUpdateWithoutMaxSizesInput, ContractSizeUncheckedUpdateWithoutMaxSizesInput>
  }

  export type ContractSizeUpdateWithoutMaxSizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    minSizes?: CompanyContractSizeUpdateManyWithoutMinContractSizeNestedInput
  }

  export type ContractSizeUncheckedUpdateWithoutMaxSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    labelSlug?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    minSizes?: CompanyContractSizeUncheckedUpdateManyWithoutMinContractSizeNestedInput
  }

  export type CompanyUpsertWithoutCompanyContractSizeInput = {
    update: XOR<CompanyUpdateWithoutCompanyContractSizeInput, CompanyUncheckedUpdateWithoutCompanyContractSizeInput>
    create: XOR<CompanyCreateWithoutCompanyContractSizeInput, CompanyUncheckedCreateWithoutCompanyContractSizeInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCompanyContractSizeInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCompanyContractSizeInput, CompanyUncheckedUpdateWithoutCompanyContractSizeInput>
  }

  export type CompanyUpdateWithoutCompanyContractSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUpdateOneWithoutCompanyNestedInput
    address?: AddressUpdateOneWithoutCompanyNestedInput
    trades?: TradeUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCompanyContractSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedUpdateOneWithoutCompanyNestedInput
    address?: AddressUncheckedUpdateOneWithoutCompanyNestedInput
    trades?: TradeUncheckedUpdateManyWithoutCompanyNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyContractSizeCreateWithoutMinContractSizeInput = {
    maxContractSize: ContractSizeCreateNestedOneWithoutMaxSizesInput
    company: CompanyCreateNestedOneWithoutCompanyContractSizeInput
  }

  export type CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput = {
    id?: number
    companyId: string
    maxContractSizeId: number
  }

  export type CompanyContractSizeCreateOrConnectWithoutMinContractSizeInput = {
    where: CompanyContractSizeWhereUniqueInput
    create: XOR<CompanyContractSizeCreateWithoutMinContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput>
  }

  export type CompanyContractSizeCreateManyMinContractSizeInputEnvelope = {
    data: CompanyContractSizeCreateManyMinContractSizeInput | CompanyContractSizeCreateManyMinContractSizeInput[]
    skipDuplicates?: boolean
  }

  export type CompanyContractSizeCreateWithoutMaxContractSizeInput = {
    minContractSize: ContractSizeCreateNestedOneWithoutMinSizesInput
    company: CompanyCreateNestedOneWithoutCompanyContractSizeInput
  }

  export type CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput = {
    id?: number
    companyId: string
    minContractSizeId: number
  }

  export type CompanyContractSizeCreateOrConnectWithoutMaxContractSizeInput = {
    where: CompanyContractSizeWhereUniqueInput
    create: XOR<CompanyContractSizeCreateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput>
  }

  export type CompanyContractSizeCreateManyMaxContractSizeInputEnvelope = {
    data: CompanyContractSizeCreateManyMaxContractSizeInput | CompanyContractSizeCreateManyMaxContractSizeInput[]
    skipDuplicates?: boolean
  }

  export type CompanyContractSizeUpsertWithWhereUniqueWithoutMinContractSizeInput = {
    where: CompanyContractSizeWhereUniqueInput
    update: XOR<CompanyContractSizeUpdateWithoutMinContractSizeInput, CompanyContractSizeUncheckedUpdateWithoutMinContractSizeInput>
    create: XOR<CompanyContractSizeCreateWithoutMinContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMinContractSizeInput>
  }

  export type CompanyContractSizeUpdateWithWhereUniqueWithoutMinContractSizeInput = {
    where: CompanyContractSizeWhereUniqueInput
    data: XOR<CompanyContractSizeUpdateWithoutMinContractSizeInput, CompanyContractSizeUncheckedUpdateWithoutMinContractSizeInput>
  }

  export type CompanyContractSizeUpdateManyWithWhereWithoutMinContractSizeInput = {
    where: CompanyContractSizeScalarWhereInput
    data: XOR<CompanyContractSizeUpdateManyMutationInput, CompanyContractSizeUncheckedUpdateManyWithoutMinContractSizeInput>
  }

  export type CompanyContractSizeUpsertWithWhereUniqueWithoutMaxContractSizeInput = {
    where: CompanyContractSizeWhereUniqueInput
    update: XOR<CompanyContractSizeUpdateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedUpdateWithoutMaxContractSizeInput>
    create: XOR<CompanyContractSizeCreateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedCreateWithoutMaxContractSizeInput>
  }

  export type CompanyContractSizeUpdateWithWhereUniqueWithoutMaxContractSizeInput = {
    where: CompanyContractSizeWhereUniqueInput
    data: XOR<CompanyContractSizeUpdateWithoutMaxContractSizeInput, CompanyContractSizeUncheckedUpdateWithoutMaxContractSizeInput>
  }

  export type CompanyContractSizeUpdateManyWithWhereWithoutMaxContractSizeInput = {
    where: CompanyContractSizeScalarWhereInput
    data: XOR<CompanyContractSizeUpdateManyMutationInput, CompanyContractSizeUncheckedUpdateManyWithoutMaxContractSizeInput>
  }

  export type CompanyCreateWithoutProjectsInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportCreateNestedOneWithoutCompanyInput
    address?: AddressCreateNestedOneWithoutCompanyInput
    trades?: TradeCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutProjectsInput = {
    id?: string
    slug: string
    companyName: string
    displayName: string
    claimCompanyEmailDomain: string
    unionPercent: number
    status: string
    ratingLevel: number
    dbeStatuses: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedCreateNestedOneWithoutCompanyInput
    address?: AddressUncheckedCreateNestedOneWithoutCompanyInput
    trades?: TradeUncheckedCreateNestedManyWithoutCompanyInput
    companyContractSize?: CompanyContractSizeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutProjectsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
  }

  export type CompanyUpsertWithoutProjectsInput = {
    update: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
  }

  export type CompanyUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUpdateOneWithoutCompanyNestedInput
    address?: AddressUpdateOneWithoutCompanyNestedInput
    trades?: TradeUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    claimCompanyEmailDomain?: StringFieldUpdateOperationsInput | string
    unionPercent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ratingLevel?: IntFieldUpdateOperationsInput | number
    dbeStatuses?: JsonNullValueInput | InputJsonValue
    assessmentsReport?: AssessmentsReportUncheckedUpdateOneWithoutCompanyNestedInput
    address?: AddressUncheckedUpdateOneWithoutCompanyNestedInput
    trades?: TradeUncheckedUpdateManyWithoutCompanyNestedInput
    companyContractSize?: CompanyContractSizeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type TradeCreateManyCompanyInput = {
    id?: number
    tradeId: number
    number: string
    title: string
    level: number
    category: number
    archived: boolean
    parent?: number | null
    tradeNumberSlug: string
  }

  export type CompanyContractSizeCreateManyCompanyInput = {
    id?: number
    minContractSizeId: number
    maxContractSizeId: number
  }

  export type ProjectCreateManyCompanyInput = {
    id?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.ProjectStatus
  }

  export type TradeUpdateWithoutCompanyInput = {
    tradeId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tradeNumberSlug?: StringFieldUpdateOperationsInput | string
  }

  export type TradeUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tradeId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tradeNumberSlug?: StringFieldUpdateOperationsInput | string
  }

  export type TradeUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tradeId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tradeNumberSlug?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyContractSizeUpdateWithoutCompanyInput = {
    minContractSize?: ContractSizeUpdateOneRequiredWithoutMinSizesNestedInput
    maxContractSize?: ContractSizeUpdateOneRequiredWithoutMaxSizesNestedInput
  }

  export type CompanyContractSizeUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    minContractSizeId?: IntFieldUpdateOperationsInput | number
    maxContractSizeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyContractSizeUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    minContractSizeId?: IntFieldUpdateOperationsInput | number
    maxContractSizeId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type ProjectUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type CompanyContractSizeCreateManyMinContractSizeInput = {
    id?: number
    companyId: string
    maxContractSizeId: number
  }

  export type CompanyContractSizeCreateManyMaxContractSizeInput = {
    id?: number
    companyId: string
    minContractSizeId: number
  }

  export type CompanyContractSizeUpdateWithoutMinContractSizeInput = {
    maxContractSize?: ContractSizeUpdateOneRequiredWithoutMaxSizesNestedInput
    company?: CompanyUpdateOneRequiredWithoutCompanyContractSizeNestedInput
  }

  export type CompanyContractSizeUncheckedUpdateWithoutMinContractSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    maxContractSizeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyContractSizeUncheckedUpdateManyWithoutMinContractSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    maxContractSizeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyContractSizeUpdateWithoutMaxContractSizeInput = {
    minContractSize?: ContractSizeUpdateOneRequiredWithoutMinSizesNestedInput
    company?: CompanyUpdateOneRequiredWithoutCompanyContractSizeNestedInput
  }

  export type CompanyContractSizeUncheckedUpdateWithoutMaxContractSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    minContractSizeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyContractSizeUncheckedUpdateManyWithoutMaxContractSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: StringFieldUpdateOperationsInput | string
    minContractSizeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}