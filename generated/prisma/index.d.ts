
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
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model SkilltreeNode
 * 
 */
export type SkilltreeNode = $Result.DefaultSelection<Prisma.$SkilltreeNodePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model SkillForest
 * 
 */
export type SkillForest = $Result.DefaultSelection<Prisma.$SkillForestPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Leaderboard
 * 
 */
export type Leaderboard = $Result.DefaultSelection<Prisma.$LeaderboardPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>

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
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skilltreeNode`: Exposes CRUD operations for the **SkilltreeNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkilltreeNodes
    * const skilltreeNodes = await prisma.skilltreeNode.findMany()
    * ```
    */
  get skilltreeNode(): Prisma.SkilltreeNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillForest`: Exposes CRUD operations for the **SkillForest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillForests
    * const skillForests = await prisma.skillForest.findMany()
    * ```
    */
  get skillForest(): Prisma.SkillForestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboard`: Exposes CRUD operations for the **Leaderboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaderboards
    * const leaderboards = await prisma.leaderboard.findMany()
    * ```
    */
  get leaderboard(): Prisma.LeaderboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
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
    Community: 'Community',
    SkilltreeNode: 'SkilltreeNode',
    Post: 'Post',
    SkillForest: 'SkillForest',
    Experience: 'Experience',
    Leaderboard: 'Leaderboard',
    Feedback: 'Feedback',
    Event: 'Event'
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
      modelProps: "user" | "community" | "skilltreeNode" | "post" | "skillForest" | "experience" | "leaderboard" | "feedback" | "event"
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
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      SkilltreeNode: {
        payload: Prisma.$SkilltreeNodePayload<ExtArgs>
        fields: Prisma.SkilltreeNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkilltreeNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkilltreeNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>
          }
          findFirst: {
            args: Prisma.SkilltreeNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkilltreeNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>
          }
          findMany: {
            args: Prisma.SkilltreeNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>[]
          }
          create: {
            args: Prisma.SkilltreeNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>
          }
          createMany: {
            args: Prisma.SkilltreeNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkilltreeNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>[]
          }
          delete: {
            args: Prisma.SkilltreeNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>
          }
          update: {
            args: Prisma.SkilltreeNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>
          }
          deleteMany: {
            args: Prisma.SkilltreeNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkilltreeNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkilltreeNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>[]
          }
          upsert: {
            args: Prisma.SkilltreeNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkilltreeNodePayload>
          }
          aggregate: {
            args: Prisma.SkilltreeNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkilltreeNode>
          }
          groupBy: {
            args: Prisma.SkilltreeNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkilltreeNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkilltreeNodeCountArgs<ExtArgs>
            result: $Utils.Optional<SkilltreeNodeCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      SkillForest: {
        payload: Prisma.$SkillForestPayload<ExtArgs>
        fields: Prisma.SkillForestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillForestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillForestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>
          }
          findFirst: {
            args: Prisma.SkillForestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillForestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>
          }
          findMany: {
            args: Prisma.SkillForestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>[]
          }
          create: {
            args: Prisma.SkillForestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>
          }
          createMany: {
            args: Prisma.SkillForestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillForestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>[]
          }
          delete: {
            args: Prisma.SkillForestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>
          }
          update: {
            args: Prisma.SkillForestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>
          }
          deleteMany: {
            args: Prisma.SkillForestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillForestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillForestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>[]
          }
          upsert: {
            args: Prisma.SkillForestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillForestPayload>
          }
          aggregate: {
            args: Prisma.SkillForestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillForest>
          }
          groupBy: {
            args: Prisma.SkillForestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillForestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillForestCountArgs<ExtArgs>
            result: $Utils.Optional<SkillForestCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Leaderboard: {
        payload: Prisma.$LeaderboardPayload<ExtArgs>
        fields: Prisma.LeaderboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          findFirst: {
            args: Prisma.LeaderboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          findMany: {
            args: Prisma.LeaderboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          create: {
            args: Prisma.LeaderboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          createMany: {
            args: Prisma.LeaderboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          delete: {
            args: Prisma.LeaderboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          update: {
            args: Prisma.LeaderboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          deleteMany: {
            args: Prisma.LeaderboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          upsert: {
            args: Prisma.LeaderboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboard>
          }
          groupBy: {
            args: Prisma.LeaderboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderboardCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
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
    community?: CommunityOmit
    skilltreeNode?: SkilltreeNodeOmit
    post?: PostOmit
    skillForest?: SkillForestOmit
    experience?: ExperienceOmit
    leaderboard?: LeaderboardOmit
    feedback?: FeedbackOmit
    event?: EventOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdCommunities: number
    adminOfCommunities: number
    verifiedInCommunities: number
    posts: number
    skillForests: number
    followedSkillForests: number
    experiences: number
    leaderboardEntries: number
    feedback: number
    events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCommunities?: boolean | UserCountOutputTypeCountCreatedCommunitiesArgs
    adminOfCommunities?: boolean | UserCountOutputTypeCountAdminOfCommunitiesArgs
    verifiedInCommunities?: boolean | UserCountOutputTypeCountVerifiedInCommunitiesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    skillForests?: boolean | UserCountOutputTypeCountSkillForestsArgs
    followedSkillForests?: boolean | UserCountOutputTypeCountFollowedSkillForestsArgs
    experiences?: boolean | UserCountOutputTypeCountExperiencesArgs
    leaderboardEntries?: boolean | UserCountOutputTypeCountLeaderboardEntriesArgs
    feedback?: boolean | UserCountOutputTypeCountFeedbackArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminOfCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedInCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillForestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillForestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedSkillForestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillForestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    admins: number
    users: number
    skillTreeNodes: number
    posts: number
    skillForests: number
    experiences: number
    leaderboards: number
    events: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | CommunityCountOutputTypeCountAdminsArgs
    users?: boolean | CommunityCountOutputTypeCountUsersArgs
    skillTreeNodes?: boolean | CommunityCountOutputTypeCountSkillTreeNodesArgs
    posts?: boolean | CommunityCountOutputTypeCountPostsArgs
    skillForests?: boolean | CommunityCountOutputTypeCountSkillForestsArgs
    experiences?: boolean | CommunityCountOutputTypeCountExperiencesArgs
    leaderboards?: boolean | CommunityCountOutputTypeCountLeaderboardsArgs
    events?: boolean | CommunityCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountSkillTreeNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkilltreeNodeWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountSkillForestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillForestWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountLeaderboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    feedback: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | PostCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type SkillForestCountOutputType
   */

  export type SkillForestCountOutputType = {
    communities: number
    followers: number
  }

  export type SkillForestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | SkillForestCountOutputTypeCountCommunitiesArgs
    followers?: boolean | SkillForestCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes
  /**
   * SkillForestCountOutputType without action
   */
  export type SkillForestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForestCountOutputType
     */
    select?: SkillForestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillForestCountOutputType without action
   */
  export type SkillForestCountOutputTypeCountCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }

  /**
   * SkillForestCountOutputType without action
   */
  export type SkillForestCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ExperienceCountOutputType
   */

  export type ExperienceCountOutputType = {
    skillTreeNodes: number
    leaderboards: number
    events: number
  }

  export type ExperienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTreeNodes?: boolean | ExperienceCountOutputTypeCountSkillTreeNodesArgs
    leaderboards?: boolean | ExperienceCountOutputTypeCountLeaderboardsArgs
    events?: boolean | ExperienceCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceCountOutputType
     */
    select?: ExperienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountSkillTreeNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkilltreeNodeWhereInput
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountLeaderboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardWhereInput
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type LeaderboardCountOutputType
   */

  export type LeaderboardCountOutputType = {
    users: number
    experiences: number
  }

  export type LeaderboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | LeaderboardCountOutputTypeCountUsersArgs
    experiences?: boolean | LeaderboardCountOutputTypeCountExperiencesArgs
  }

  // Custom InputTypes
  /**
   * LeaderboardCountOutputType without action
   */
  export type LeaderboardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardCountOutputType
     */
    select?: LeaderboardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaderboardCountOutputType without action
   */
  export type LeaderboardCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * LeaderboardCountOutputType without action
   */
  export type LeaderboardCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    hash: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdCommunities?: boolean | User$createdCommunitiesArgs<ExtArgs>
    adminOfCommunities?: boolean | User$adminOfCommunitiesArgs<ExtArgs>
    verifiedInCommunities?: boolean | User$verifiedInCommunitiesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    skillForests?: boolean | User$skillForestsArgs<ExtArgs>
    followedSkillForests?: boolean | User$followedSkillForestsArgs<ExtArgs>
    experiences?: boolean | User$experiencesArgs<ExtArgs>
    leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>
    feedback?: boolean | User$feedbackArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCommunities?: boolean | User$createdCommunitiesArgs<ExtArgs>
    adminOfCommunities?: boolean | User$adminOfCommunitiesArgs<ExtArgs>
    verifiedInCommunities?: boolean | User$verifiedInCommunitiesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    skillForests?: boolean | User$skillForestsArgs<ExtArgs>
    followedSkillForests?: boolean | User$followedSkillForestsArgs<ExtArgs>
    experiences?: boolean | User$experiencesArgs<ExtArgs>
    leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>
    feedback?: boolean | User$feedbackArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdCommunities: Prisma.$CommunityPayload<ExtArgs>[]
      adminOfCommunities: Prisma.$CommunityPayload<ExtArgs>[]
      verifiedInCommunities: Prisma.$CommunityPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      skillForests: Prisma.$SkillForestPayload<ExtArgs>[]
      followedSkillForests: Prisma.$SkillForestPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
      leaderboardEntries: Prisma.$LeaderboardPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hash: string | null
      createdAt: Date
      updatedAt: Date
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
    createdCommunities<T extends User$createdCommunitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCommunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminOfCommunities<T extends User$adminOfCommunitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$adminOfCommunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifiedInCommunities<T extends User$verifiedInCommunitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedInCommunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillForests<T extends User$skillForestsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillForestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followedSkillForests<T extends User$followedSkillForestsArgs<ExtArgs> = {}>(args?: Subset<T, User$followedSkillForestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends User$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboardEntries<T extends User$leaderboardEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$leaderboardEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends User$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.createdCommunities
   */
  export type User$createdCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * User.adminOfCommunities
   */
  export type User$adminOfCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * User.verifiedInCommunities
   */
  export type User$verifiedInCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.skillForests
   */
  export type User$skillForestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    where?: SkillForestWhereInput
    orderBy?: SkillForestOrderByWithRelationInput | SkillForestOrderByWithRelationInput[]
    cursor?: SkillForestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillForestScalarFieldEnum | SkillForestScalarFieldEnum[]
  }

  /**
   * User.followedSkillForests
   */
  export type User$followedSkillForestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    where?: SkillForestWhereInput
    orderBy?: SkillForestOrderByWithRelationInput | SkillForestOrderByWithRelationInput[]
    cursor?: SkillForestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillForestScalarFieldEnum | SkillForestScalarFieldEnum[]
  }

  /**
   * User.experiences
   */
  export type User$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * User.leaderboardEntries
   */
  export type User$leaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    where?: LeaderboardWhereInput
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    cursor?: LeaderboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * User.feedback
   */
  export type User$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    communityExperience: number | null
  }

  export type CommunitySumAggregateOutputType = {
    communityExperience: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    communityExperience: number | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    communityExperience: number | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    name: number
    skill: number
    icon: number
    tags: number
    description: number
    communityExperience: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    communityExperience?: true
  }

  export type CommunitySumAggregateInputType = {
    communityExperience?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    communityExperience?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    communityExperience?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    name?: true
    skill?: true
    icon?: true
    tags?: true
    description?: true
    communityExperience?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: string
    name: string
    skill: string[]
    icon: string | null
    tags: string[]
    description: string | null
    communityExperience: number | null
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skill?: boolean
    icon?: boolean
    tags?: boolean
    description?: boolean
    communityExperience?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    admins?: boolean | Community$adminsArgs<ExtArgs>
    users?: boolean | Community$usersArgs<ExtArgs>
    skillTreeNodes?: boolean | Community$skillTreeNodesArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    skillForests?: boolean | Community$skillForestsArgs<ExtArgs>
    experiences?: boolean | Community$experiencesArgs<ExtArgs>
    leaderboards?: boolean | Community$leaderboardsArgs<ExtArgs>
    events?: boolean | Community$eventsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skill?: boolean
    icon?: boolean
    tags?: boolean
    description?: boolean
    communityExperience?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skill?: boolean
    icon?: boolean
    tags?: boolean
    description?: boolean
    communityExperience?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    name?: boolean
    skill?: boolean
    icon?: boolean
    tags?: boolean
    description?: boolean
    communityExperience?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "skill" | "icon" | "tags" | "description" | "communityExperience" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    admins?: boolean | Community$adminsArgs<ExtArgs>
    users?: boolean | Community$usersArgs<ExtArgs>
    skillTreeNodes?: boolean | Community$skillTreeNodesArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    skillForests?: boolean | Community$skillForestsArgs<ExtArgs>
    experiences?: boolean | Community$experiencesArgs<ExtArgs>
    leaderboards?: boolean | Community$leaderboardsArgs<ExtArgs>
    events?: boolean | Community$eventsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      admins: Prisma.$UserPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      skillTreeNodes: Prisma.$SkilltreeNodePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      skillForests: Prisma.$SkillForestPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
      leaderboards: Prisma.$LeaderboardPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      skill: string[]
      icon: string | null
      tags: string[]
      description: string | null
      communityExperience: number | null
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admins<T extends Community$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Community$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Community$usersArgs<ExtArgs> = {}>(args?: Subset<T, Community$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillTreeNodes<T extends Community$skillTreeNodesArgs<ExtArgs> = {}>(args?: Subset<T, Community$skillTreeNodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Community$postsArgs<ExtArgs> = {}>(args?: Subset<T, Community$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillForests<T extends Community$skillForestsArgs<ExtArgs> = {}>(args?: Subset<T, Community$skillForestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends Community$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, Community$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboards<T extends Community$leaderboardsArgs<ExtArgs> = {}>(args?: Subset<T, Community$leaderboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Community$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Community$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'String'>
    readonly name: FieldRef<"Community", 'String'>
    readonly skill: FieldRef<"Community", 'String[]'>
    readonly icon: FieldRef<"Community", 'String'>
    readonly tags: FieldRef<"Community", 'String[]'>
    readonly description: FieldRef<"Community", 'String'>
    readonly communityExperience: FieldRef<"Community", 'Int'>
    readonly creatorId: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.admins
   */
  export type Community$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Community.users
   */
  export type Community$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Community.skillTreeNodes
   */
  export type Community$skillTreeNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    where?: SkilltreeNodeWhereInput
    orderBy?: SkilltreeNodeOrderByWithRelationInput | SkilltreeNodeOrderByWithRelationInput[]
    cursor?: SkilltreeNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkilltreeNodeScalarFieldEnum | SkilltreeNodeScalarFieldEnum[]
  }

  /**
   * Community.posts
   */
  export type Community$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Community.skillForests
   */
  export type Community$skillForestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    where?: SkillForestWhereInput
    orderBy?: SkillForestOrderByWithRelationInput | SkillForestOrderByWithRelationInput[]
    cursor?: SkillForestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillForestScalarFieldEnum | SkillForestScalarFieldEnum[]
  }

  /**
   * Community.experiences
   */
  export type Community$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Community.leaderboards
   */
  export type Community$leaderboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    where?: LeaderboardWhereInput
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    cursor?: LeaderboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Community.events
   */
  export type Community$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model SkilltreeNode
   */

  export type AggregateSkilltreeNode = {
    _count: SkilltreeNodeCountAggregateOutputType | null
    _min: SkilltreeNodeMinAggregateOutputType | null
    _max: SkilltreeNodeMaxAggregateOutputType | null
  }

  export type SkilltreeNodeMinAggregateOutputType = {
    id: string | null
    name: string | null
    communityId: string | null
    experienceId: string | null
    nextId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkilltreeNodeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    communityId: string | null
    experienceId: string | null
    nextId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkilltreeNodeCountAggregateOutputType = {
    id: number
    name: number
    communityId: number
    experienceId: number
    nextId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkilltreeNodeMinAggregateInputType = {
    id?: true
    name?: true
    communityId?: true
    experienceId?: true
    nextId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkilltreeNodeMaxAggregateInputType = {
    id?: true
    name?: true
    communityId?: true
    experienceId?: true
    nextId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkilltreeNodeCountAggregateInputType = {
    id?: true
    name?: true
    communityId?: true
    experienceId?: true
    nextId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkilltreeNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkilltreeNode to aggregate.
     */
    where?: SkilltreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkilltreeNodes to fetch.
     */
    orderBy?: SkilltreeNodeOrderByWithRelationInput | SkilltreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkilltreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkilltreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkilltreeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkilltreeNodes
    **/
    _count?: true | SkilltreeNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkilltreeNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkilltreeNodeMaxAggregateInputType
  }

  export type GetSkilltreeNodeAggregateType<T extends SkilltreeNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateSkilltreeNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkilltreeNode[P]>
      : GetScalarType<T[P], AggregateSkilltreeNode[P]>
  }




  export type SkilltreeNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkilltreeNodeWhereInput
    orderBy?: SkilltreeNodeOrderByWithAggregationInput | SkilltreeNodeOrderByWithAggregationInput[]
    by: SkilltreeNodeScalarFieldEnum[] | SkilltreeNodeScalarFieldEnum
    having?: SkilltreeNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkilltreeNodeCountAggregateInputType | true
    _min?: SkilltreeNodeMinAggregateInputType
    _max?: SkilltreeNodeMaxAggregateInputType
  }

  export type SkilltreeNodeGroupByOutputType = {
    id: string
    name: string
    communityId: string
    experienceId: string
    nextId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SkilltreeNodeCountAggregateOutputType | null
    _min: SkilltreeNodeMinAggregateOutputType | null
    _max: SkilltreeNodeMaxAggregateOutputType | null
  }

  type GetSkilltreeNodeGroupByPayload<T extends SkilltreeNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkilltreeNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkilltreeNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkilltreeNodeGroupByOutputType[P]>
            : GetScalarType<T[P], SkilltreeNodeGroupByOutputType[P]>
        }
      >
    >


  export type SkilltreeNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    communityId?: boolean
    experienceId?: boolean
    nextId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    next?: boolean | SkilltreeNode$nextArgs<ExtArgs>
    previous?: boolean | SkilltreeNode$previousArgs<ExtArgs>
  }, ExtArgs["result"]["skilltreeNode"]>

  export type SkilltreeNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    communityId?: boolean
    experienceId?: boolean
    nextId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    next?: boolean | SkilltreeNode$nextArgs<ExtArgs>
  }, ExtArgs["result"]["skilltreeNode"]>

  export type SkilltreeNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    communityId?: boolean
    experienceId?: boolean
    nextId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    next?: boolean | SkilltreeNode$nextArgs<ExtArgs>
  }, ExtArgs["result"]["skilltreeNode"]>

  export type SkilltreeNodeSelectScalar = {
    id?: boolean
    name?: boolean
    communityId?: boolean
    experienceId?: boolean
    nextId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkilltreeNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "communityId" | "experienceId" | "nextId" | "createdAt" | "updatedAt", ExtArgs["result"]["skilltreeNode"]>
  export type SkilltreeNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    next?: boolean | SkilltreeNode$nextArgs<ExtArgs>
    previous?: boolean | SkilltreeNode$previousArgs<ExtArgs>
  }
  export type SkilltreeNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    next?: boolean | SkilltreeNode$nextArgs<ExtArgs>
  }
  export type SkilltreeNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    next?: boolean | SkilltreeNode$nextArgs<ExtArgs>
  }

  export type $SkilltreeNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkilltreeNode"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      experience: Prisma.$ExperiencePayload<ExtArgs>
      next: Prisma.$SkilltreeNodePayload<ExtArgs> | null
      previous: Prisma.$SkilltreeNodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      communityId: string
      experienceId: string
      nextId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skilltreeNode"]>
    composites: {}
  }

  type SkilltreeNodeGetPayload<S extends boolean | null | undefined | SkilltreeNodeDefaultArgs> = $Result.GetResult<Prisma.$SkilltreeNodePayload, S>

  type SkilltreeNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkilltreeNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkilltreeNodeCountAggregateInputType | true
    }

  export interface SkilltreeNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkilltreeNode'], meta: { name: 'SkilltreeNode' } }
    /**
     * Find zero or one SkilltreeNode that matches the filter.
     * @param {SkilltreeNodeFindUniqueArgs} args - Arguments to find a SkilltreeNode
     * @example
     * // Get one SkilltreeNode
     * const skilltreeNode = await prisma.skilltreeNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkilltreeNodeFindUniqueArgs>(args: SelectSubset<T, SkilltreeNodeFindUniqueArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkilltreeNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkilltreeNodeFindUniqueOrThrowArgs} args - Arguments to find a SkilltreeNode
     * @example
     * // Get one SkilltreeNode
     * const skilltreeNode = await prisma.skilltreeNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkilltreeNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, SkilltreeNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkilltreeNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkilltreeNodeFindFirstArgs} args - Arguments to find a SkilltreeNode
     * @example
     * // Get one SkilltreeNode
     * const skilltreeNode = await prisma.skilltreeNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkilltreeNodeFindFirstArgs>(args?: SelectSubset<T, SkilltreeNodeFindFirstArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkilltreeNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkilltreeNodeFindFirstOrThrowArgs} args - Arguments to find a SkilltreeNode
     * @example
     * // Get one SkilltreeNode
     * const skilltreeNode = await prisma.skilltreeNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkilltreeNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, SkilltreeNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkilltreeNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkilltreeNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkilltreeNodes
     * const skilltreeNodes = await prisma.skilltreeNode.findMany()
     * 
     * // Get first 10 SkilltreeNodes
     * const skilltreeNodes = await prisma.skilltreeNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skilltreeNodeWithIdOnly = await prisma.skilltreeNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkilltreeNodeFindManyArgs>(args?: SelectSubset<T, SkilltreeNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkilltreeNode.
     * @param {SkilltreeNodeCreateArgs} args - Arguments to create a SkilltreeNode.
     * @example
     * // Create one SkilltreeNode
     * const SkilltreeNode = await prisma.skilltreeNode.create({
     *   data: {
     *     // ... data to create a SkilltreeNode
     *   }
     * })
     * 
     */
    create<T extends SkilltreeNodeCreateArgs>(args: SelectSubset<T, SkilltreeNodeCreateArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkilltreeNodes.
     * @param {SkilltreeNodeCreateManyArgs} args - Arguments to create many SkilltreeNodes.
     * @example
     * // Create many SkilltreeNodes
     * const skilltreeNode = await prisma.skilltreeNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkilltreeNodeCreateManyArgs>(args?: SelectSubset<T, SkilltreeNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkilltreeNodes and returns the data saved in the database.
     * @param {SkilltreeNodeCreateManyAndReturnArgs} args - Arguments to create many SkilltreeNodes.
     * @example
     * // Create many SkilltreeNodes
     * const skilltreeNode = await prisma.skilltreeNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkilltreeNodes and only return the `id`
     * const skilltreeNodeWithIdOnly = await prisma.skilltreeNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkilltreeNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, SkilltreeNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkilltreeNode.
     * @param {SkilltreeNodeDeleteArgs} args - Arguments to delete one SkilltreeNode.
     * @example
     * // Delete one SkilltreeNode
     * const SkilltreeNode = await prisma.skilltreeNode.delete({
     *   where: {
     *     // ... filter to delete one SkilltreeNode
     *   }
     * })
     * 
     */
    delete<T extends SkilltreeNodeDeleteArgs>(args: SelectSubset<T, SkilltreeNodeDeleteArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkilltreeNode.
     * @param {SkilltreeNodeUpdateArgs} args - Arguments to update one SkilltreeNode.
     * @example
     * // Update one SkilltreeNode
     * const skilltreeNode = await prisma.skilltreeNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkilltreeNodeUpdateArgs>(args: SelectSubset<T, SkilltreeNodeUpdateArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkilltreeNodes.
     * @param {SkilltreeNodeDeleteManyArgs} args - Arguments to filter SkilltreeNodes to delete.
     * @example
     * // Delete a few SkilltreeNodes
     * const { count } = await prisma.skilltreeNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkilltreeNodeDeleteManyArgs>(args?: SelectSubset<T, SkilltreeNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkilltreeNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkilltreeNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkilltreeNodes
     * const skilltreeNode = await prisma.skilltreeNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkilltreeNodeUpdateManyArgs>(args: SelectSubset<T, SkilltreeNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkilltreeNodes and returns the data updated in the database.
     * @param {SkilltreeNodeUpdateManyAndReturnArgs} args - Arguments to update many SkilltreeNodes.
     * @example
     * // Update many SkilltreeNodes
     * const skilltreeNode = await prisma.skilltreeNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkilltreeNodes and only return the `id`
     * const skilltreeNodeWithIdOnly = await prisma.skilltreeNode.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkilltreeNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, SkilltreeNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkilltreeNode.
     * @param {SkilltreeNodeUpsertArgs} args - Arguments to update or create a SkilltreeNode.
     * @example
     * // Update or create a SkilltreeNode
     * const skilltreeNode = await prisma.skilltreeNode.upsert({
     *   create: {
     *     // ... data to create a SkilltreeNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkilltreeNode we want to update
     *   }
     * })
     */
    upsert<T extends SkilltreeNodeUpsertArgs>(args: SelectSubset<T, SkilltreeNodeUpsertArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkilltreeNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkilltreeNodeCountArgs} args - Arguments to filter SkilltreeNodes to count.
     * @example
     * // Count the number of SkilltreeNodes
     * const count = await prisma.skilltreeNode.count({
     *   where: {
     *     // ... the filter for the SkilltreeNodes we want to count
     *   }
     * })
    **/
    count<T extends SkilltreeNodeCountArgs>(
      args?: Subset<T, SkilltreeNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkilltreeNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkilltreeNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkilltreeNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkilltreeNodeAggregateArgs>(args: Subset<T, SkilltreeNodeAggregateArgs>): Prisma.PrismaPromise<GetSkilltreeNodeAggregateType<T>>

    /**
     * Group by SkilltreeNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkilltreeNodeGroupByArgs} args - Group by arguments.
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
      T extends SkilltreeNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkilltreeNodeGroupByArgs['orderBy'] }
        : { orderBy?: SkilltreeNodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkilltreeNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkilltreeNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkilltreeNode model
   */
  readonly fields: SkilltreeNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkilltreeNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkilltreeNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    experience<T extends ExperienceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceDefaultArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    next<T extends SkilltreeNode$nextArgs<ExtArgs> = {}>(args?: Subset<T, SkilltreeNode$nextArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    previous<T extends SkilltreeNode$previousArgs<ExtArgs> = {}>(args?: Subset<T, SkilltreeNode$previousArgs<ExtArgs>>): Prisma__SkilltreeNodeClient<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SkilltreeNode model
   */
  interface SkilltreeNodeFieldRefs {
    readonly id: FieldRef<"SkilltreeNode", 'String'>
    readonly name: FieldRef<"SkilltreeNode", 'String'>
    readonly communityId: FieldRef<"SkilltreeNode", 'String'>
    readonly experienceId: FieldRef<"SkilltreeNode", 'String'>
    readonly nextId: FieldRef<"SkilltreeNode", 'String'>
    readonly createdAt: FieldRef<"SkilltreeNode", 'DateTime'>
    readonly updatedAt: FieldRef<"SkilltreeNode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkilltreeNode findUnique
   */
  export type SkilltreeNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which SkilltreeNode to fetch.
     */
    where: SkilltreeNodeWhereUniqueInput
  }

  /**
   * SkilltreeNode findUniqueOrThrow
   */
  export type SkilltreeNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which SkilltreeNode to fetch.
     */
    where: SkilltreeNodeWhereUniqueInput
  }

  /**
   * SkilltreeNode findFirst
   */
  export type SkilltreeNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which SkilltreeNode to fetch.
     */
    where?: SkilltreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkilltreeNodes to fetch.
     */
    orderBy?: SkilltreeNodeOrderByWithRelationInput | SkilltreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkilltreeNodes.
     */
    cursor?: SkilltreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkilltreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkilltreeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkilltreeNodes.
     */
    distinct?: SkilltreeNodeScalarFieldEnum | SkilltreeNodeScalarFieldEnum[]
  }

  /**
   * SkilltreeNode findFirstOrThrow
   */
  export type SkilltreeNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which SkilltreeNode to fetch.
     */
    where?: SkilltreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkilltreeNodes to fetch.
     */
    orderBy?: SkilltreeNodeOrderByWithRelationInput | SkilltreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkilltreeNodes.
     */
    cursor?: SkilltreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkilltreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkilltreeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkilltreeNodes.
     */
    distinct?: SkilltreeNodeScalarFieldEnum | SkilltreeNodeScalarFieldEnum[]
  }

  /**
   * SkilltreeNode findMany
   */
  export type SkilltreeNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which SkilltreeNodes to fetch.
     */
    where?: SkilltreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkilltreeNodes to fetch.
     */
    orderBy?: SkilltreeNodeOrderByWithRelationInput | SkilltreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkilltreeNodes.
     */
    cursor?: SkilltreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkilltreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkilltreeNodes.
     */
    skip?: number
    distinct?: SkilltreeNodeScalarFieldEnum | SkilltreeNodeScalarFieldEnum[]
  }

  /**
   * SkilltreeNode create
   */
  export type SkilltreeNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a SkilltreeNode.
     */
    data: XOR<SkilltreeNodeCreateInput, SkilltreeNodeUncheckedCreateInput>
  }

  /**
   * SkilltreeNode createMany
   */
  export type SkilltreeNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkilltreeNodes.
     */
    data: SkilltreeNodeCreateManyInput | SkilltreeNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkilltreeNode createManyAndReturn
   */
  export type SkilltreeNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * The data used to create many SkilltreeNodes.
     */
    data: SkilltreeNodeCreateManyInput | SkilltreeNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkilltreeNode update
   */
  export type SkilltreeNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a SkilltreeNode.
     */
    data: XOR<SkilltreeNodeUpdateInput, SkilltreeNodeUncheckedUpdateInput>
    /**
     * Choose, which SkilltreeNode to update.
     */
    where: SkilltreeNodeWhereUniqueInput
  }

  /**
   * SkilltreeNode updateMany
   */
  export type SkilltreeNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkilltreeNodes.
     */
    data: XOR<SkilltreeNodeUpdateManyMutationInput, SkilltreeNodeUncheckedUpdateManyInput>
    /**
     * Filter which SkilltreeNodes to update
     */
    where?: SkilltreeNodeWhereInput
    /**
     * Limit how many SkilltreeNodes to update.
     */
    limit?: number
  }

  /**
   * SkilltreeNode updateManyAndReturn
   */
  export type SkilltreeNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * The data used to update SkilltreeNodes.
     */
    data: XOR<SkilltreeNodeUpdateManyMutationInput, SkilltreeNodeUncheckedUpdateManyInput>
    /**
     * Filter which SkilltreeNodes to update
     */
    where?: SkilltreeNodeWhereInput
    /**
     * Limit how many SkilltreeNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkilltreeNode upsert
   */
  export type SkilltreeNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the SkilltreeNode to update in case it exists.
     */
    where: SkilltreeNodeWhereUniqueInput
    /**
     * In case the SkilltreeNode found by the `where` argument doesn't exist, create a new SkilltreeNode with this data.
     */
    create: XOR<SkilltreeNodeCreateInput, SkilltreeNodeUncheckedCreateInput>
    /**
     * In case the SkilltreeNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkilltreeNodeUpdateInput, SkilltreeNodeUncheckedUpdateInput>
  }

  /**
   * SkilltreeNode delete
   */
  export type SkilltreeNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    /**
     * Filter which SkilltreeNode to delete.
     */
    where: SkilltreeNodeWhereUniqueInput
  }

  /**
   * SkilltreeNode deleteMany
   */
  export type SkilltreeNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkilltreeNodes to delete
     */
    where?: SkilltreeNodeWhereInput
    /**
     * Limit how many SkilltreeNodes to delete.
     */
    limit?: number
  }

  /**
   * SkilltreeNode.next
   */
  export type SkilltreeNode$nextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    where?: SkilltreeNodeWhereInput
  }

  /**
   * SkilltreeNode.previous
   */
  export type SkilltreeNode$previousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    where?: SkilltreeNodeWhereInput
  }

  /**
   * SkilltreeNode without action
   */
  export type SkilltreeNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    text: string | null
    attachment: string | null
    communityId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    text: string | null
    attachment: string | null
    communityId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    text: number
    attachment: number
    communityId: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    text?: true
    attachment?: true
    communityId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    text?: true
    attachment?: true
    communityId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    text?: true
    attachment?: true
    communityId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    text: string
    attachment: string | null
    communityId: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    attachment?: boolean
    communityId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    feedback?: boolean | Post$feedbackArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    attachment?: boolean
    communityId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    attachment?: boolean
    communityId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    text?: boolean
    attachment?: boolean
    communityId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "attachment" | "communityId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    feedback?: boolean | Post$feedbackArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      attachment: string | null
      communityId: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feedback<T extends Post$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Post$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly text: FieldRef<"Post", 'String'>
    readonly attachment: FieldRef<"Post", 'String'>
    readonly communityId: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.feedback
   */
  export type Post$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model SkillForest
   */

  export type AggregateSkillForest = {
    _count: SkillForestCountAggregateOutputType | null
    _min: SkillForestMinAggregateOutputType | null
    _max: SkillForestMaxAggregateOutputType | null
  }

  export type SkillForestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillForestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillForestCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillForestMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillForestMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillForestCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillForestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillForest to aggregate.
     */
    where?: SkillForestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillForests to fetch.
     */
    orderBy?: SkillForestOrderByWithRelationInput | SkillForestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillForestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillForests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillForests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillForests
    **/
    _count?: true | SkillForestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillForestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillForestMaxAggregateInputType
  }

  export type GetSkillForestAggregateType<T extends SkillForestAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillForest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillForest[P]>
      : GetScalarType<T[P], AggregateSkillForest[P]>
  }




  export type SkillForestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillForestWhereInput
    orderBy?: SkillForestOrderByWithAggregationInput | SkillForestOrderByWithAggregationInput[]
    by: SkillForestScalarFieldEnum[] | SkillForestScalarFieldEnum
    having?: SkillForestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillForestCountAggregateInputType | true
    _min?: SkillForestMinAggregateInputType
    _max?: SkillForestMaxAggregateInputType
  }

  export type SkillForestGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SkillForestCountAggregateOutputType | null
    _min: SkillForestMinAggregateOutputType | null
    _max: SkillForestMaxAggregateOutputType | null
  }

  type GetSkillForestGroupByPayload<T extends SkillForestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillForestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillForestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillForestGroupByOutputType[P]>
            : GetScalarType<T[P], SkillForestGroupByOutputType[P]>
        }
      >
    >


  export type SkillForestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    communities?: boolean | SkillForest$communitiesArgs<ExtArgs>
    followers?: boolean | SkillForest$followersArgs<ExtArgs>
    _count?: boolean | SkillForestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillForest"]>

  export type SkillForestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillForest"]>

  export type SkillForestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillForest"]>

  export type SkillForestSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillForestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["skillForest"]>
  export type SkillForestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    communities?: boolean | SkillForest$communitiesArgs<ExtArgs>
    followers?: boolean | SkillForest$followersArgs<ExtArgs>
    _count?: boolean | SkillForestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillForestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillForestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillForestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillForest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      communities: Prisma.$CommunityPayload<ExtArgs>[]
      followers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skillForest"]>
    composites: {}
  }

  type SkillForestGetPayload<S extends boolean | null | undefined | SkillForestDefaultArgs> = $Result.GetResult<Prisma.$SkillForestPayload, S>

  type SkillForestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillForestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillForestCountAggregateInputType | true
    }

  export interface SkillForestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillForest'], meta: { name: 'SkillForest' } }
    /**
     * Find zero or one SkillForest that matches the filter.
     * @param {SkillForestFindUniqueArgs} args - Arguments to find a SkillForest
     * @example
     * // Get one SkillForest
     * const skillForest = await prisma.skillForest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillForestFindUniqueArgs>(args: SelectSubset<T, SkillForestFindUniqueArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillForest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillForestFindUniqueOrThrowArgs} args - Arguments to find a SkillForest
     * @example
     * // Get one SkillForest
     * const skillForest = await prisma.skillForest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillForestFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillForestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillForest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillForestFindFirstArgs} args - Arguments to find a SkillForest
     * @example
     * // Get one SkillForest
     * const skillForest = await prisma.skillForest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillForestFindFirstArgs>(args?: SelectSubset<T, SkillForestFindFirstArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillForest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillForestFindFirstOrThrowArgs} args - Arguments to find a SkillForest
     * @example
     * // Get one SkillForest
     * const skillForest = await prisma.skillForest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillForestFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillForestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillForests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillForestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillForests
     * const skillForests = await prisma.skillForest.findMany()
     * 
     * // Get first 10 SkillForests
     * const skillForests = await prisma.skillForest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillForestWithIdOnly = await prisma.skillForest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillForestFindManyArgs>(args?: SelectSubset<T, SkillForestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillForest.
     * @param {SkillForestCreateArgs} args - Arguments to create a SkillForest.
     * @example
     * // Create one SkillForest
     * const SkillForest = await prisma.skillForest.create({
     *   data: {
     *     // ... data to create a SkillForest
     *   }
     * })
     * 
     */
    create<T extends SkillForestCreateArgs>(args: SelectSubset<T, SkillForestCreateArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillForests.
     * @param {SkillForestCreateManyArgs} args - Arguments to create many SkillForests.
     * @example
     * // Create many SkillForests
     * const skillForest = await prisma.skillForest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillForestCreateManyArgs>(args?: SelectSubset<T, SkillForestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillForests and returns the data saved in the database.
     * @param {SkillForestCreateManyAndReturnArgs} args - Arguments to create many SkillForests.
     * @example
     * // Create many SkillForests
     * const skillForest = await prisma.skillForest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillForests and only return the `id`
     * const skillForestWithIdOnly = await prisma.skillForest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillForestCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillForestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillForest.
     * @param {SkillForestDeleteArgs} args - Arguments to delete one SkillForest.
     * @example
     * // Delete one SkillForest
     * const SkillForest = await prisma.skillForest.delete({
     *   where: {
     *     // ... filter to delete one SkillForest
     *   }
     * })
     * 
     */
    delete<T extends SkillForestDeleteArgs>(args: SelectSubset<T, SkillForestDeleteArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillForest.
     * @param {SkillForestUpdateArgs} args - Arguments to update one SkillForest.
     * @example
     * // Update one SkillForest
     * const skillForest = await prisma.skillForest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillForestUpdateArgs>(args: SelectSubset<T, SkillForestUpdateArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillForests.
     * @param {SkillForestDeleteManyArgs} args - Arguments to filter SkillForests to delete.
     * @example
     * // Delete a few SkillForests
     * const { count } = await prisma.skillForest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillForestDeleteManyArgs>(args?: SelectSubset<T, SkillForestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillForests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillForestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillForests
     * const skillForest = await prisma.skillForest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillForestUpdateManyArgs>(args: SelectSubset<T, SkillForestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillForests and returns the data updated in the database.
     * @param {SkillForestUpdateManyAndReturnArgs} args - Arguments to update many SkillForests.
     * @example
     * // Update many SkillForests
     * const skillForest = await prisma.skillForest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillForests and only return the `id`
     * const skillForestWithIdOnly = await prisma.skillForest.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillForestUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillForestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillForest.
     * @param {SkillForestUpsertArgs} args - Arguments to update or create a SkillForest.
     * @example
     * // Update or create a SkillForest
     * const skillForest = await prisma.skillForest.upsert({
     *   create: {
     *     // ... data to create a SkillForest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillForest we want to update
     *   }
     * })
     */
    upsert<T extends SkillForestUpsertArgs>(args: SelectSubset<T, SkillForestUpsertArgs<ExtArgs>>): Prisma__SkillForestClient<$Result.GetResult<Prisma.$SkillForestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillForests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillForestCountArgs} args - Arguments to filter SkillForests to count.
     * @example
     * // Count the number of SkillForests
     * const count = await prisma.skillForest.count({
     *   where: {
     *     // ... the filter for the SkillForests we want to count
     *   }
     * })
    **/
    count<T extends SkillForestCountArgs>(
      args?: Subset<T, SkillForestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillForestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillForest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillForestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillForestAggregateArgs>(args: Subset<T, SkillForestAggregateArgs>): Prisma.PrismaPromise<GetSkillForestAggregateType<T>>

    /**
     * Group by SkillForest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillForestGroupByArgs} args - Group by arguments.
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
      T extends SkillForestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillForestGroupByArgs['orderBy'] }
        : { orderBy?: SkillForestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillForestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillForestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillForest model
   */
  readonly fields: SkillForestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillForest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillForestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    communities<T extends SkillForest$communitiesArgs<ExtArgs> = {}>(args?: Subset<T, SkillForest$communitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends SkillForest$followersArgs<ExtArgs> = {}>(args?: Subset<T, SkillForest$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SkillForest model
   */
  interface SkillForestFieldRefs {
    readonly id: FieldRef<"SkillForest", 'String'>
    readonly userId: FieldRef<"SkillForest", 'String'>
    readonly createdAt: FieldRef<"SkillForest", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillForest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillForest findUnique
   */
  export type SkillForestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * Filter, which SkillForest to fetch.
     */
    where: SkillForestWhereUniqueInput
  }

  /**
   * SkillForest findUniqueOrThrow
   */
  export type SkillForestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * Filter, which SkillForest to fetch.
     */
    where: SkillForestWhereUniqueInput
  }

  /**
   * SkillForest findFirst
   */
  export type SkillForestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * Filter, which SkillForest to fetch.
     */
    where?: SkillForestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillForests to fetch.
     */
    orderBy?: SkillForestOrderByWithRelationInput | SkillForestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillForests.
     */
    cursor?: SkillForestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillForests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillForests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillForests.
     */
    distinct?: SkillForestScalarFieldEnum | SkillForestScalarFieldEnum[]
  }

  /**
   * SkillForest findFirstOrThrow
   */
  export type SkillForestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * Filter, which SkillForest to fetch.
     */
    where?: SkillForestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillForests to fetch.
     */
    orderBy?: SkillForestOrderByWithRelationInput | SkillForestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillForests.
     */
    cursor?: SkillForestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillForests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillForests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillForests.
     */
    distinct?: SkillForestScalarFieldEnum | SkillForestScalarFieldEnum[]
  }

  /**
   * SkillForest findMany
   */
  export type SkillForestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * Filter, which SkillForests to fetch.
     */
    where?: SkillForestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillForests to fetch.
     */
    orderBy?: SkillForestOrderByWithRelationInput | SkillForestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillForests.
     */
    cursor?: SkillForestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillForests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillForests.
     */
    skip?: number
    distinct?: SkillForestScalarFieldEnum | SkillForestScalarFieldEnum[]
  }

  /**
   * SkillForest create
   */
  export type SkillForestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillForest.
     */
    data: XOR<SkillForestCreateInput, SkillForestUncheckedCreateInput>
  }

  /**
   * SkillForest createMany
   */
  export type SkillForestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillForests.
     */
    data: SkillForestCreateManyInput | SkillForestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillForest createManyAndReturn
   */
  export type SkillForestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * The data used to create many SkillForests.
     */
    data: SkillForestCreateManyInput | SkillForestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillForest update
   */
  export type SkillForestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillForest.
     */
    data: XOR<SkillForestUpdateInput, SkillForestUncheckedUpdateInput>
    /**
     * Choose, which SkillForest to update.
     */
    where: SkillForestWhereUniqueInput
  }

  /**
   * SkillForest updateMany
   */
  export type SkillForestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillForests.
     */
    data: XOR<SkillForestUpdateManyMutationInput, SkillForestUncheckedUpdateManyInput>
    /**
     * Filter which SkillForests to update
     */
    where?: SkillForestWhereInput
    /**
     * Limit how many SkillForests to update.
     */
    limit?: number
  }

  /**
   * SkillForest updateManyAndReturn
   */
  export type SkillForestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * The data used to update SkillForests.
     */
    data: XOR<SkillForestUpdateManyMutationInput, SkillForestUncheckedUpdateManyInput>
    /**
     * Filter which SkillForests to update
     */
    where?: SkillForestWhereInput
    /**
     * Limit how many SkillForests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillForest upsert
   */
  export type SkillForestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillForest to update in case it exists.
     */
    where: SkillForestWhereUniqueInput
    /**
     * In case the SkillForest found by the `where` argument doesn't exist, create a new SkillForest with this data.
     */
    create: XOR<SkillForestCreateInput, SkillForestUncheckedCreateInput>
    /**
     * In case the SkillForest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillForestUpdateInput, SkillForestUncheckedUpdateInput>
  }

  /**
   * SkillForest delete
   */
  export type SkillForestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
    /**
     * Filter which SkillForest to delete.
     */
    where: SkillForestWhereUniqueInput
  }

  /**
   * SkillForest deleteMany
   */
  export type SkillForestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillForests to delete
     */
    where?: SkillForestWhereInput
    /**
     * Limit how many SkillForests to delete.
     */
    limit?: number
  }

  /**
   * SkillForest.communities
   */
  export type SkillForest$communitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * SkillForest.followers
   */
  export type SkillForest$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * SkillForest without action
   */
  export type SkillForestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillForest
     */
    select?: SkillForestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillForest
     */
    omit?: SkillForestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillForestInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    amount: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    amount: number | null
    communityId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    communityId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    amount: number
    communityId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    amount?: true
  }

  export type ExperienceSumAggregateInputType = {
    amount?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    amount?: true
    communityId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    amount?: true
    communityId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    amount?: true
    communityId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    amount: number
    communityId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    communityId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTreeNodes?: boolean | Experience$skillTreeNodesArgs<ExtArgs>
    leaderboards?: boolean | Experience$leaderboardsArgs<ExtArgs>
    events?: boolean | Experience$eventsArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    communityId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    communityId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    amount?: boolean
    communityId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "communityId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTreeNodes?: boolean | Experience$skillTreeNodesArgs<ExtArgs>
    leaderboards?: boolean | Experience$leaderboardsArgs<ExtArgs>
    events?: boolean | Experience$eventsArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      skillTreeNodes: Prisma.$SkilltreeNodePayload<ExtArgs>[]
      leaderboards: Prisma.$LeaderboardPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      communityId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skillTreeNodes<T extends Experience$skillTreeNodesArgs<ExtArgs> = {}>(args?: Subset<T, Experience$skillTreeNodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkilltreeNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboards<T extends Experience$leaderboardsArgs<ExtArgs> = {}>(args?: Subset<T, Experience$leaderboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Experience$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Experience$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly amount: FieldRef<"Experience", 'Int'>
    readonly communityId: FieldRef<"Experience", 'String'>
    readonly userId: FieldRef<"Experience", 'String'>
    readonly createdAt: FieldRef<"Experience", 'DateTime'>
    readonly updatedAt: FieldRef<"Experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience.skillTreeNodes
   */
  export type Experience$skillTreeNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkilltreeNode
     */
    select?: SkilltreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkilltreeNode
     */
    omit?: SkilltreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkilltreeNodeInclude<ExtArgs> | null
    where?: SkilltreeNodeWhereInput
    orderBy?: SkilltreeNodeOrderByWithRelationInput | SkilltreeNodeOrderByWithRelationInput[]
    cursor?: SkilltreeNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkilltreeNodeScalarFieldEnum | SkilltreeNodeScalarFieldEnum[]
  }

  /**
   * Experience.leaderboards
   */
  export type Experience$leaderboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    where?: LeaderboardWhereInput
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    cursor?: LeaderboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Experience.events
   */
  export type Experience$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Leaderboard
   */

  export type AggregateLeaderboard = {
    _count: LeaderboardCountAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  export type LeaderboardMinAggregateOutputType = {
    id: string | null
    communityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaderboardMaxAggregateOutputType = {
    id: string | null
    communityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaderboardCountAggregateOutputType = {
    id: number
    communityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaderboardMinAggregateInputType = {
    id?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaderboardMaxAggregateInputType = {
    id?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaderboardCountAggregateInputType = {
    id?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaderboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaderboard to aggregate.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaderboards
    **/
    _count?: true | LeaderboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardMaxAggregateInputType
  }

  export type GetLeaderboardAggregateType<T extends LeaderboardAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboard[P]>
      : GetScalarType<T[P], AggregateLeaderboard[P]>
  }




  export type LeaderboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardWhereInput
    orderBy?: LeaderboardOrderByWithAggregationInput | LeaderboardOrderByWithAggregationInput[]
    by: LeaderboardScalarFieldEnum[] | LeaderboardScalarFieldEnum
    having?: LeaderboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardCountAggregateInputType | true
    _min?: LeaderboardMinAggregateInputType
    _max?: LeaderboardMaxAggregateInputType
  }

  export type LeaderboardGroupByOutputType = {
    id: string
    communityId: string
    createdAt: Date
    updatedAt: Date
    _count: LeaderboardCountAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  type GetLeaderboardGroupByPayload<T extends LeaderboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
        }
      >
    >


  export type LeaderboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    users?: boolean | Leaderboard$usersArgs<ExtArgs>
    experiences?: boolean | Leaderboard$experiencesArgs<ExtArgs>
    _count?: boolean | LeaderboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectScalar = {
    id?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaderboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "communityId" | "createdAt" | "updatedAt", ExtArgs["result"]["leaderboard"]>
  export type LeaderboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    users?: boolean | Leaderboard$usersArgs<ExtArgs>
    experiences?: boolean | Leaderboard$experiencesArgs<ExtArgs>
    _count?: boolean | LeaderboardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaderboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type LeaderboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }

  export type $LeaderboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leaderboard"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      communityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaderboard"]>
    composites: {}
  }

  type LeaderboardGetPayload<S extends boolean | null | undefined | LeaderboardDefaultArgs> = $Result.GetResult<Prisma.$LeaderboardPayload, S>

  type LeaderboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardCountAggregateInputType | true
    }

  export interface LeaderboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leaderboard'], meta: { name: 'Leaderboard' } }
    /**
     * Find zero or one Leaderboard that matches the filter.
     * @param {LeaderboardFindUniqueArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardFindUniqueArgs>(args: SelectSubset<T, LeaderboardFindUniqueArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leaderboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardFindUniqueOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindFirstArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardFindFirstArgs>(args?: SelectSubset<T, LeaderboardFindFirstArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindFirstOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaderboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany()
     * 
     * // Get first 10 Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderboardFindManyArgs>(args?: SelectSubset<T, LeaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leaderboard.
     * @param {LeaderboardCreateArgs} args - Arguments to create a Leaderboard.
     * @example
     * // Create one Leaderboard
     * const Leaderboard = await prisma.leaderboard.create({
     *   data: {
     *     // ... data to create a Leaderboard
     *   }
     * })
     * 
     */
    create<T extends LeaderboardCreateArgs>(args: SelectSubset<T, LeaderboardCreateArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaderboards.
     * @param {LeaderboardCreateManyArgs} args - Arguments to create many Leaderboards.
     * @example
     * // Create many Leaderboards
     * const leaderboard = await prisma.leaderboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderboardCreateManyArgs>(args?: SelectSubset<T, LeaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaderboards and returns the data saved in the database.
     * @param {LeaderboardCreateManyAndReturnArgs} args - Arguments to create many Leaderboards.
     * @example
     * // Create many Leaderboards
     * const leaderboard = await prisma.leaderboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaderboards and only return the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderboardCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leaderboard.
     * @param {LeaderboardDeleteArgs} args - Arguments to delete one Leaderboard.
     * @example
     * // Delete one Leaderboard
     * const Leaderboard = await prisma.leaderboard.delete({
     *   where: {
     *     // ... filter to delete one Leaderboard
     *   }
     * })
     * 
     */
    delete<T extends LeaderboardDeleteArgs>(args: SelectSubset<T, LeaderboardDeleteArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leaderboard.
     * @param {LeaderboardUpdateArgs} args - Arguments to update one Leaderboard.
     * @example
     * // Update one Leaderboard
     * const leaderboard = await prisma.leaderboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderboardUpdateArgs>(args: SelectSubset<T, LeaderboardUpdateArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaderboards.
     * @param {LeaderboardDeleteManyArgs} args - Arguments to filter Leaderboards to delete.
     * @example
     * // Delete a few Leaderboards
     * const { count } = await prisma.leaderboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderboardDeleteManyArgs>(args?: SelectSubset<T, LeaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaderboards
     * const leaderboard = await prisma.leaderboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderboardUpdateManyArgs>(args: SelectSubset<T, LeaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboards and returns the data updated in the database.
     * @param {LeaderboardUpdateManyAndReturnArgs} args - Arguments to update many Leaderboards.
     * @example
     * // Update many Leaderboards
     * const leaderboard = await prisma.leaderboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaderboards and only return the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaderboardUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leaderboard.
     * @param {LeaderboardUpsertArgs} args - Arguments to update or create a Leaderboard.
     * @example
     * // Update or create a Leaderboard
     * const leaderboard = await prisma.leaderboard.upsert({
     *   create: {
     *     // ... data to create a Leaderboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaderboard we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardUpsertArgs>(args: SelectSubset<T, LeaderboardUpsertArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardCountArgs} args - Arguments to filter Leaderboards to count.
     * @example
     * // Count the number of Leaderboards
     * const count = await prisma.leaderboard.count({
     *   where: {
     *     // ... the filter for the Leaderboards we want to count
     *   }
     * })
    **/
    count<T extends LeaderboardCountArgs>(
      args?: Subset<T, LeaderboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaderboardAggregateArgs>(args: Subset<T, LeaderboardAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardAggregateType<T>>

    /**
     * Group by Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardGroupByArgs} args - Group by arguments.
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
      T extends LeaderboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leaderboard model
   */
  readonly fields: LeaderboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leaderboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Leaderboard$usersArgs<ExtArgs> = {}>(args?: Subset<T, Leaderboard$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends Leaderboard$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, Leaderboard$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Leaderboard model
   */
  interface LeaderboardFieldRefs {
    readonly id: FieldRef<"Leaderboard", 'String'>
    readonly communityId: FieldRef<"Leaderboard", 'String'>
    readonly createdAt: FieldRef<"Leaderboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Leaderboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leaderboard findUnique
   */
  export type LeaderboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard findUniqueOrThrow
   */
  export type LeaderboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard findFirst
   */
  export type LeaderboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard findFirstOrThrow
   */
  export type LeaderboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard findMany
   */
  export type LeaderboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboards to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard create
   */
  export type LeaderboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Leaderboard.
     */
    data: XOR<LeaderboardCreateInput, LeaderboardUncheckedCreateInput>
  }

  /**
   * Leaderboard createMany
   */
  export type LeaderboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaderboards.
     */
    data: LeaderboardCreateManyInput | LeaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaderboard createManyAndReturn
   */
  export type LeaderboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data used to create many Leaderboards.
     */
    data: LeaderboardCreateManyInput | LeaderboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaderboard update
   */
  export type LeaderboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Leaderboard.
     */
    data: XOR<LeaderboardUpdateInput, LeaderboardUncheckedUpdateInput>
    /**
     * Choose, which Leaderboard to update.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard updateMany
   */
  export type LeaderboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaderboards.
     */
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which Leaderboards to update
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to update.
     */
    limit?: number
  }

  /**
   * Leaderboard updateManyAndReturn
   */
  export type LeaderboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data used to update Leaderboards.
     */
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which Leaderboards to update
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaderboard upsert
   */
  export type LeaderboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Leaderboard to update in case it exists.
     */
    where: LeaderboardWhereUniqueInput
    /**
     * In case the Leaderboard found by the `where` argument doesn't exist, create a new Leaderboard with this data.
     */
    create: XOR<LeaderboardCreateInput, LeaderboardUncheckedCreateInput>
    /**
     * In case the Leaderboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderboardUpdateInput, LeaderboardUncheckedUpdateInput>
  }

  /**
   * Leaderboard delete
   */
  export type LeaderboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter which Leaderboard to delete.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard deleteMany
   */
  export type LeaderboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaderboards to delete
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to delete.
     */
    limit?: number
  }

  /**
   * Leaderboard.users
   */
  export type Leaderboard$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Leaderboard.experiences
   */
  export type Leaderboard$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Leaderboard without action
   */
  export type LeaderboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    userId: string
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly userId: FieldRef<"Feedback", 'String'>
    readonly postId: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
    readonly updatedAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    experiencePayout: number | null
  }

  export type EventSumAggregateOutputType = {
    experiencePayout: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    rankedStatus: boolean | null
    experiencePayout: number | null
    communityId: string | null
    userId: string | null
    experienceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rankedStatus: boolean | null
    experiencePayout: number | null
    communityId: string | null
    userId: string | null
    experienceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    rankedStatus: number
    experiencePayout: number
    communityId: number
    userId: number
    experienceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    experiencePayout?: true
  }

  export type EventSumAggregateInputType = {
    experiencePayout?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    rankedStatus?: true
    experiencePayout?: true
    communityId?: true
    userId?: true
    experienceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    rankedStatus?: true
    experiencePayout?: true
    communityId?: true
    userId?: true
    experienceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    rankedStatus?: true
    experiencePayout?: true
    communityId?: true
    userId?: true
    experienceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    rankedStatus: boolean | null
    experiencePayout: number | null
    communityId: string
    userId: string
    experienceId: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rankedStatus?: boolean
    experiencePayout?: boolean
    communityId?: boolean
    userId?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rankedStatus?: boolean
    experiencePayout?: boolean
    communityId?: boolean
    userId?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rankedStatus?: boolean
    experiencePayout?: boolean
    communityId?: boolean
    userId?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    rankedStatus?: boolean
    experiencePayout?: boolean
    communityId?: boolean
    userId?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rankedStatus" | "experiencePayout" | "communityId" | "userId" | "experienceId" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      experience: Prisma.$ExperiencePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rankedStatus: boolean | null
      experiencePayout: number | null
      communityId: string
      userId: string
      experienceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    experience<T extends ExperienceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceDefaultArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly rankedStatus: FieldRef<"Event", 'Boolean'>
    readonly experiencePayout: FieldRef<"Event", 'Int'>
    readonly communityId: FieldRef<"Event", 'String'>
    readonly userId: FieldRef<"Event", 'String'>
    readonly experienceId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
    email: 'email',
    hash: 'hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    skill: 'skill',
    icon: 'icon',
    tags: 'tags',
    description: 'description',
    communityExperience: 'communityExperience',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const SkilltreeNodeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    communityId: 'communityId',
    experienceId: 'experienceId',
    nextId: 'nextId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkilltreeNodeScalarFieldEnum = (typeof SkilltreeNodeScalarFieldEnum)[keyof typeof SkilltreeNodeScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    text: 'text',
    attachment: 'attachment',
    communityId: 'communityId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SkillForestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillForestScalarFieldEnum = (typeof SkillForestScalarFieldEnum)[keyof typeof SkillForestScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    communityId: 'communityId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const LeaderboardScalarFieldEnum: {
    id: 'id',
    communityId: 'communityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaderboardScalarFieldEnum = (typeof LeaderboardScalarFieldEnum)[keyof typeof LeaderboardScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rankedStatus: 'rankedStatus',
    experiencePayout: 'experiencePayout',
    communityId: 'communityId',
    userId: 'userId',
    experienceId: 'experienceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCommunities?: CommunityListRelationFilter
    adminOfCommunities?: CommunityListRelationFilter
    verifiedInCommunities?: CommunityListRelationFilter
    posts?: PostListRelationFilter
    skillForests?: SkillForestListRelationFilter
    followedSkillForests?: SkillForestListRelationFilter
    experiences?: ExperienceListRelationFilter
    leaderboardEntries?: LeaderboardListRelationFilter
    feedback?: FeedbackListRelationFilter
    events?: EventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdCommunities?: CommunityOrderByRelationAggregateInput
    adminOfCommunities?: CommunityOrderByRelationAggregateInput
    verifiedInCommunities?: CommunityOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    skillForests?: SkillForestOrderByRelationAggregateInput
    followedSkillForests?: SkillForestOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
    leaderboardEntries?: LeaderboardOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCommunities?: CommunityListRelationFilter
    adminOfCommunities?: CommunityListRelationFilter
    verifiedInCommunities?: CommunityListRelationFilter
    posts?: PostListRelationFilter
    skillForests?: SkillForestListRelationFilter
    followedSkillForests?: SkillForestListRelationFilter
    experiences?: ExperienceListRelationFilter
    leaderboardEntries?: LeaderboardListRelationFilter
    feedback?: FeedbackListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    skill?: StringNullableListFilter<"Community">
    icon?: StringNullableFilter<"Community"> | string | null
    tags?: StringNullableListFilter<"Community">
    description?: StringNullableFilter<"Community"> | string | null
    communityExperience?: IntNullableFilter<"Community"> | number | null
    creatorId?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    admins?: UserListRelationFilter
    users?: UserListRelationFilter
    skillTreeNodes?: SkilltreeNodeListRelationFilter
    posts?: PostListRelationFilter
    skillForests?: SkillForestListRelationFilter
    experiences?: ExperienceListRelationFilter
    leaderboards?: LeaderboardListRelationFilter
    events?: EventListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    skill?: SortOrder
    icon?: SortOrderInput | SortOrder
    tags?: SortOrder
    description?: SortOrderInput | SortOrder
    communityExperience?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    admins?: UserOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    skillTreeNodes?: SkilltreeNodeOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    skillForests?: SkillForestOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
    leaderboards?: LeaderboardOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    name?: StringFilter<"Community"> | string
    skill?: StringNullableListFilter<"Community">
    icon?: StringNullableFilter<"Community"> | string | null
    tags?: StringNullableListFilter<"Community">
    description?: StringNullableFilter<"Community"> | string | null
    communityExperience?: IntNullableFilter<"Community"> | number | null
    creatorId?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    admins?: UserListRelationFilter
    users?: UserListRelationFilter
    skillTreeNodes?: SkilltreeNodeListRelationFilter
    posts?: PostListRelationFilter
    skillForests?: SkillForestListRelationFilter
    experiences?: ExperienceListRelationFilter
    leaderboards?: LeaderboardListRelationFilter
    events?: EventListRelationFilter
  }, "id">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    skill?: SortOrder
    icon?: SortOrderInput | SortOrder
    tags?: SortOrder
    description?: SortOrderInput | SortOrder
    communityExperience?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Community"> | string
    name?: StringWithAggregatesFilter<"Community"> | string
    skill?: StringNullableListFilter<"Community">
    icon?: StringNullableWithAggregatesFilter<"Community"> | string | null
    tags?: StringNullableListFilter<"Community">
    description?: StringNullableWithAggregatesFilter<"Community"> | string | null
    communityExperience?: IntNullableWithAggregatesFilter<"Community"> | number | null
    creatorId?: StringWithAggregatesFilter<"Community"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type SkilltreeNodeWhereInput = {
    AND?: SkilltreeNodeWhereInput | SkilltreeNodeWhereInput[]
    OR?: SkilltreeNodeWhereInput[]
    NOT?: SkilltreeNodeWhereInput | SkilltreeNodeWhereInput[]
    id?: StringFilter<"SkilltreeNode"> | string
    name?: StringFilter<"SkilltreeNode"> | string
    communityId?: StringFilter<"SkilltreeNode"> | string
    experienceId?: StringFilter<"SkilltreeNode"> | string
    nextId?: StringNullableFilter<"SkilltreeNode"> | string | null
    createdAt?: DateTimeFilter<"SkilltreeNode"> | Date | string
    updatedAt?: DateTimeFilter<"SkilltreeNode"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    experience?: XOR<ExperienceScalarRelationFilter, ExperienceWhereInput>
    next?: XOR<SkilltreeNodeNullableScalarRelationFilter, SkilltreeNodeWhereInput> | null
    previous?: XOR<SkilltreeNodeNullableScalarRelationFilter, SkilltreeNodeWhereInput> | null
  }

  export type SkilltreeNodeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    experienceId?: SortOrder
    nextId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    experience?: ExperienceOrderByWithRelationInput
    next?: SkilltreeNodeOrderByWithRelationInput
    previous?: SkilltreeNodeOrderByWithRelationInput
  }

  export type SkilltreeNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nextId?: string
    AND?: SkilltreeNodeWhereInput | SkilltreeNodeWhereInput[]
    OR?: SkilltreeNodeWhereInput[]
    NOT?: SkilltreeNodeWhereInput | SkilltreeNodeWhereInput[]
    name?: StringFilter<"SkilltreeNode"> | string
    communityId?: StringFilter<"SkilltreeNode"> | string
    experienceId?: StringFilter<"SkilltreeNode"> | string
    createdAt?: DateTimeFilter<"SkilltreeNode"> | Date | string
    updatedAt?: DateTimeFilter<"SkilltreeNode"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    experience?: XOR<ExperienceScalarRelationFilter, ExperienceWhereInput>
    next?: XOR<SkilltreeNodeNullableScalarRelationFilter, SkilltreeNodeWhereInput> | null
    previous?: XOR<SkilltreeNodeNullableScalarRelationFilter, SkilltreeNodeWhereInput> | null
  }, "id" | "nextId">

  export type SkilltreeNodeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    experienceId?: SortOrder
    nextId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkilltreeNodeCountOrderByAggregateInput
    _max?: SkilltreeNodeMaxOrderByAggregateInput
    _min?: SkilltreeNodeMinOrderByAggregateInput
  }

  export type SkilltreeNodeScalarWhereWithAggregatesInput = {
    AND?: SkilltreeNodeScalarWhereWithAggregatesInput | SkilltreeNodeScalarWhereWithAggregatesInput[]
    OR?: SkilltreeNodeScalarWhereWithAggregatesInput[]
    NOT?: SkilltreeNodeScalarWhereWithAggregatesInput | SkilltreeNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkilltreeNode"> | string
    name?: StringWithAggregatesFilter<"SkilltreeNode"> | string
    communityId?: StringWithAggregatesFilter<"SkilltreeNode"> | string
    experienceId?: StringWithAggregatesFilter<"SkilltreeNode"> | string
    nextId?: StringNullableWithAggregatesFilter<"SkilltreeNode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SkilltreeNode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkilltreeNode"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    attachment?: StringNullableFilter<"Post"> | string | null
    communityId?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    feedback?: FeedbackListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    attachment?: SortOrderInput | SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    feedback?: FeedbackOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    text?: StringFilter<"Post"> | string
    attachment?: StringNullableFilter<"Post"> | string | null
    communityId?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    feedback?: FeedbackListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    attachment?: SortOrderInput | SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    text?: StringWithAggregatesFilter<"Post"> | string
    attachment?: StringNullableWithAggregatesFilter<"Post"> | string | null
    communityId?: StringWithAggregatesFilter<"Post"> | string
    authorId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type SkillForestWhereInput = {
    AND?: SkillForestWhereInput | SkillForestWhereInput[]
    OR?: SkillForestWhereInput[]
    NOT?: SkillForestWhereInput | SkillForestWhereInput[]
    id?: StringFilter<"SkillForest"> | string
    userId?: StringFilter<"SkillForest"> | string
    createdAt?: DateTimeFilter<"SkillForest"> | Date | string
    updatedAt?: DateTimeFilter<"SkillForest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    communities?: CommunityListRelationFilter
    followers?: UserListRelationFilter
  }

  export type SkillForestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    communities?: CommunityOrderByRelationAggregateInput
    followers?: UserOrderByRelationAggregateInput
  }

  export type SkillForestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillForestWhereInput | SkillForestWhereInput[]
    OR?: SkillForestWhereInput[]
    NOT?: SkillForestWhereInput | SkillForestWhereInput[]
    userId?: StringFilter<"SkillForest"> | string
    createdAt?: DateTimeFilter<"SkillForest"> | Date | string
    updatedAt?: DateTimeFilter<"SkillForest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    communities?: CommunityListRelationFilter
    followers?: UserListRelationFilter
  }, "id">

  export type SkillForestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillForestCountOrderByAggregateInput
    _max?: SkillForestMaxOrderByAggregateInput
    _min?: SkillForestMinOrderByAggregateInput
  }

  export type SkillForestScalarWhereWithAggregatesInput = {
    AND?: SkillForestScalarWhereWithAggregatesInput | SkillForestScalarWhereWithAggregatesInput[]
    OR?: SkillForestScalarWhereWithAggregatesInput[]
    NOT?: SkillForestScalarWhereWithAggregatesInput | SkillForestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillForest"> | string
    userId?: StringWithAggregatesFilter<"SkillForest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SkillForest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillForest"> | Date | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    amount?: IntFilter<"Experience"> | number
    communityId?: StringFilter<"Experience"> | string
    userId?: StringFilter<"Experience"> | string
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skillTreeNodes?: SkilltreeNodeListRelationFilter
    leaderboards?: LeaderboardListRelationFilter
    events?: EventListRelationFilter
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    skillTreeNodes?: SkilltreeNodeOrderByRelationAggregateInput
    leaderboards?: LeaderboardOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    amount?: IntFilter<"Experience"> | number
    communityId?: StringFilter<"Experience"> | string
    userId?: StringFilter<"Experience"> | string
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skillTreeNodes?: SkilltreeNodeListRelationFilter
    leaderboards?: LeaderboardListRelationFilter
    events?: EventListRelationFilter
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    amount?: IntWithAggregatesFilter<"Experience"> | number
    communityId?: StringWithAggregatesFilter<"Experience"> | string
    userId?: StringWithAggregatesFilter<"Experience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
  }

  export type LeaderboardWhereInput = {
    AND?: LeaderboardWhereInput | LeaderboardWhereInput[]
    OR?: LeaderboardWhereInput[]
    NOT?: LeaderboardWhereInput | LeaderboardWhereInput[]
    id?: StringFilter<"Leaderboard"> | string
    communityId?: StringFilter<"Leaderboard"> | string
    createdAt?: DateTimeFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeFilter<"Leaderboard"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    users?: UserListRelationFilter
    experiences?: ExperienceListRelationFilter
  }

  export type LeaderboardOrderByWithRelationInput = {
    id?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
  }

  export type LeaderboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaderboardWhereInput | LeaderboardWhereInput[]
    OR?: LeaderboardWhereInput[]
    NOT?: LeaderboardWhereInput | LeaderboardWhereInput[]
    communityId?: StringFilter<"Leaderboard"> | string
    createdAt?: DateTimeFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeFilter<"Leaderboard"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    users?: UserListRelationFilter
    experiences?: ExperienceListRelationFilter
  }, "id">

  export type LeaderboardOrderByWithAggregationInput = {
    id?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaderboardCountOrderByAggregateInput
    _max?: LeaderboardMaxOrderByAggregateInput
    _min?: LeaderboardMinOrderByAggregateInput
  }

  export type LeaderboardScalarWhereWithAggregatesInput = {
    AND?: LeaderboardScalarWhereWithAggregatesInput | LeaderboardScalarWhereWithAggregatesInput[]
    OR?: LeaderboardScalarWhereWithAggregatesInput[]
    NOT?: LeaderboardScalarWhereWithAggregatesInput | LeaderboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leaderboard"> | string
    communityId?: StringWithAggregatesFilter<"Leaderboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leaderboard"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    postId?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: StringFilter<"Feedback"> | string
    postId?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    userId?: StringWithAggregatesFilter<"Feedback"> | string
    postId?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    rankedStatus?: BoolNullableFilter<"Event"> | boolean | null
    experiencePayout?: IntNullableFilter<"Event"> | number | null
    communityId?: StringFilter<"Event"> | string
    userId?: StringFilter<"Event"> | string
    experienceId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    experience?: XOR<ExperienceScalarRelationFilter, ExperienceWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rankedStatus?: SortOrderInput | SortOrder
    experiencePayout?: SortOrderInput | SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    experience?: ExperienceOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    rankedStatus?: BoolNullableFilter<"Event"> | boolean | null
    experiencePayout?: IntNullableFilter<"Event"> | number | null
    communityId?: StringFilter<"Event"> | string
    userId?: StringFilter<"Event"> | string
    experienceId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    experience?: XOR<ExperienceScalarRelationFilter, ExperienceWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rankedStatus?: SortOrderInput | SortOrder
    experiencePayout?: SortOrderInput | SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    rankedStatus?: BoolNullableWithAggregatesFilter<"Event"> | boolean | null
    experiencePayout?: IntNullableWithAggregatesFilter<"Event"> | number | null
    communityId?: StringWithAggregatesFilter<"Event"> | string
    userId?: StringWithAggregatesFilter<"Event"> | string
    experienceId?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkilltreeNodeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutSkillTreeNodesInput
    experience: ExperienceCreateNestedOneWithoutSkillTreeNodesInput
    next?: SkilltreeNodeCreateNestedOneWithoutPreviousInput
    previous?: SkilltreeNodeCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeUncheckedCreateInput = {
    id?: string
    name: string
    communityId: string
    experienceId: string
    nextId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    previous?: SkilltreeNodeUncheckedCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    experience?: ExperienceUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    next?: SkilltreeNodeUpdateOneWithoutPreviousNestedInput
    previous?: SkilltreeNodeUpdateOneWithoutNextNestedInput
  }

  export type SkilltreeNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previous?: SkilltreeNodeUncheckedUpdateOneWithoutNextNestedInput
  }

  export type SkilltreeNodeCreateManyInput = {
    id?: string
    name: string
    communityId: string
    experienceId: string
    nextId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkilltreeNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkilltreeNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    text: string
    attachment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    feedback?: FeedbackCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    text: string
    attachment?: string | null
    communityId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    feedback?: FeedbackUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    text: string
    attachment?: string | null
    communityId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillForestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillForestsInput
    communities?: CommunityCreateNestedManyWithoutSkillForestsInput
    followers?: UserCreateNestedManyWithoutFollowedSkillForestsInput
  }

  export type SkillForestUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutSkillForestsInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowedSkillForestsInput
  }

  export type SkillForestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillForestsNestedInput
    communities?: CommunityUpdateManyWithoutSkillForestsNestedInput
    followers?: UserUpdateManyWithoutFollowedSkillForestsNestedInput
  }

  export type SkillForestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutSkillForestsNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowedSkillForestsNestedInput
  }

  export type SkillForestCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillForestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillForestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutExperiencesInput
    user: UserCreateNestedOneWithoutExperiencesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardCreateNestedManyWithoutExperiencesInput
    events?: EventCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    amount: number
    communityId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutExperiencesInput
    events?: EventUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutExperiencesNestedInput
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutExperiencesNestedInput
    events?: EventUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutExperiencesNestedInput
    events?: EventUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceCreateManyInput = {
    id?: string
    amount: number
    communityId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutLeaderboardsInput
    users?: UserCreateNestedManyWithoutLeaderboardEntriesInput
    experiences?: ExperienceCreateNestedManyWithoutLeaderboardsInput
  }

  export type LeaderboardUncheckedCreateInput = {
    id?: string
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutLeaderboardEntriesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutLeaderboardsInput
  }

  export type LeaderboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutLeaderboardsNestedInput
    users?: UserUpdateManyWithoutLeaderboardEntriesNestedInput
    experiences?: ExperienceUpdateManyWithoutLeaderboardsNestedInput
  }

  export type LeaderboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutLeaderboardEntriesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutLeaderboardsNestedInput
  }

  export type LeaderboardCreateManyInput = {
    id?: string
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbackInput
    post: PostCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbackNestedInput
    post?: PostUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    userId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutEventsInput
    user: UserCreateNestedOneWithoutEventsInput
    experience: ExperienceCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    communityId: string
    userId: string
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutEventsNestedInput
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    experience?: ExperienceUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    communityId: string
    userId: string
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SkillForestListRelationFilter = {
    every?: SkillForestWhereInput
    some?: SkillForestWhereInput
    none?: SkillForestWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type LeaderboardListRelationFilter = {
    every?: LeaderboardWhereInput
    some?: LeaderboardWhereInput
    none?: LeaderboardWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillForestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaderboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SkilltreeNodeListRelationFilter = {
    every?: SkilltreeNodeWhereInput
    some?: SkilltreeNodeWhereInput
    none?: SkilltreeNodeWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkilltreeNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    skill?: SortOrder
    icon?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    communityExperience?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    communityExperience?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    communityExperience?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    communityExperience?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    communityExperience?: SortOrder
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

  export type CommunityScalarRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type ExperienceScalarRelationFilter = {
    is?: ExperienceWhereInput
    isNot?: ExperienceWhereInput
  }

  export type SkilltreeNodeNullableScalarRelationFilter = {
    is?: SkilltreeNodeWhereInput | null
    isNot?: SkilltreeNodeWhereInput | null
  }

  export type SkilltreeNodeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    experienceId?: SortOrder
    nextId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkilltreeNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    experienceId?: SortOrder
    nextId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkilltreeNodeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    communityId?: SortOrder
    experienceId?: SortOrder
    nextId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    attachment?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    attachment?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    attachment?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillForestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillForestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillForestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type LeaderboardCountOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardMaxOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardMinOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rankedStatus?: SortOrder
    experiencePayout?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    experiencePayout?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rankedStatus?: SortOrder
    experiencePayout?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rankedStatus?: SortOrder
    experiencePayout?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    experiencePayout?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CommunityCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CommunityCreateWithoutCreatorInput, CommunityUncheckedCreateWithoutCreatorInput> | CommunityCreateWithoutCreatorInput[] | CommunityUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatorInput | CommunityCreateOrConnectWithoutCreatorInput[]
    createMany?: CommunityCreateManyCreatorInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutAdminsInput = {
    create?: XOR<CommunityCreateWithoutAdminsInput, CommunityUncheckedCreateWithoutAdminsInput> | CommunityCreateWithoutAdminsInput[] | CommunityUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminsInput | CommunityCreateOrConnectWithoutAdminsInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SkillForestCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillForestCreateWithoutUserInput, SkillForestUncheckedCreateWithoutUserInput> | SkillForestCreateWithoutUserInput[] | SkillForestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutUserInput | SkillForestCreateOrConnectWithoutUserInput[]
    createMany?: SkillForestCreateManyUserInputEnvelope
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
  }

  export type SkillForestCreateNestedManyWithoutFollowersInput = {
    create?: XOR<SkillForestCreateWithoutFollowersInput, SkillForestUncheckedCreateWithoutFollowersInput> | SkillForestCreateWithoutFollowersInput[] | SkillForestUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutFollowersInput | SkillForestCreateOrConnectWithoutFollowersInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type LeaderboardCreateNestedManyWithoutUsersInput = {
    create?: XOR<LeaderboardCreateWithoutUsersInput, LeaderboardUncheckedCreateWithoutUsersInput> | LeaderboardCreateWithoutUsersInput[] | LeaderboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutUsersInput | LeaderboardCreateOrConnectWithoutUsersInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CommunityCreateWithoutCreatorInput, CommunityUncheckedCreateWithoutCreatorInput> | CommunityCreateWithoutCreatorInput[] | CommunityUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatorInput | CommunityCreateOrConnectWithoutCreatorInput[]
    createMany?: CommunityCreateManyCreatorInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: XOR<CommunityCreateWithoutAdminsInput, CommunityUncheckedCreateWithoutAdminsInput> | CommunityCreateWithoutAdminsInput[] | CommunityUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminsInput | CommunityCreateOrConnectWithoutAdminsInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SkillForestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillForestCreateWithoutUserInput, SkillForestUncheckedCreateWithoutUserInput> | SkillForestCreateWithoutUserInput[] | SkillForestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutUserInput | SkillForestCreateOrConnectWithoutUserInput[]
    createMany?: SkillForestCreateManyUserInputEnvelope
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
  }

  export type SkillForestUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<SkillForestCreateWithoutFollowersInput, SkillForestUncheckedCreateWithoutFollowersInput> | SkillForestCreateWithoutFollowersInput[] | SkillForestUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutFollowersInput | SkillForestCreateOrConnectWithoutFollowersInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type LeaderboardUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<LeaderboardCreateWithoutUsersInput, LeaderboardUncheckedCreateWithoutUsersInput> | LeaderboardCreateWithoutUsersInput[] | LeaderboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutUsersInput | LeaderboardCreateOrConnectWithoutUsersInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommunityUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatorInput, CommunityUncheckedCreateWithoutCreatorInput> | CommunityCreateWithoutCreatorInput[] | CommunityUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatorInput | CommunityCreateOrConnectWithoutCreatorInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatorInput | CommunityUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CommunityCreateManyCreatorInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatorInput | CommunityUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatorInput | CommunityUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<CommunityCreateWithoutAdminsInput, CommunityUncheckedCreateWithoutAdminsInput> | CommunityCreateWithoutAdminsInput[] | CommunityUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminsInput | CommunityCreateOrConnectWithoutAdminsInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutAdminsInput | CommunityUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutAdminsInput | CommunityUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutAdminsInput | CommunityUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutUsersInput | CommunityUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutUsersInput | CommunityUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutUsersInput | CommunityUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SkillForestUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillForestCreateWithoutUserInput, SkillForestUncheckedCreateWithoutUserInput> | SkillForestCreateWithoutUserInput[] | SkillForestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutUserInput | SkillForestCreateOrConnectWithoutUserInput[]
    upsert?: SkillForestUpsertWithWhereUniqueWithoutUserInput | SkillForestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillForestCreateManyUserInputEnvelope
    set?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    disconnect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    delete?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    update?: SkillForestUpdateWithWhereUniqueWithoutUserInput | SkillForestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillForestUpdateManyWithWhereWithoutUserInput | SkillForestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
  }

  export type SkillForestUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<SkillForestCreateWithoutFollowersInput, SkillForestUncheckedCreateWithoutFollowersInput> | SkillForestCreateWithoutFollowersInput[] | SkillForestUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutFollowersInput | SkillForestCreateOrConnectWithoutFollowersInput[]
    upsert?: SkillForestUpsertWithWhereUniqueWithoutFollowersInput | SkillForestUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    disconnect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    delete?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    update?: SkillForestUpdateWithWhereUniqueWithoutFollowersInput | SkillForestUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: SkillForestUpdateManyWithWhereWithoutFollowersInput | SkillForestUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type LeaderboardUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LeaderboardCreateWithoutUsersInput, LeaderboardUncheckedCreateWithoutUsersInput> | LeaderboardCreateWithoutUsersInput[] | LeaderboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutUsersInput | LeaderboardCreateOrConnectWithoutUsersInput[]
    upsert?: LeaderboardUpsertWithWhereUniqueWithoutUsersInput | LeaderboardUpsertWithWhereUniqueWithoutUsersInput[]
    set?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    disconnect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    delete?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    update?: LeaderboardUpdateWithWhereUniqueWithoutUsersInput | LeaderboardUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LeaderboardUpdateManyWithWhereWithoutUsersInput | LeaderboardUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatorInput, CommunityUncheckedCreateWithoutCreatorInput> | CommunityCreateWithoutCreatorInput[] | CommunityUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatorInput | CommunityCreateOrConnectWithoutCreatorInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatorInput | CommunityUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CommunityCreateManyCreatorInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatorInput | CommunityUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatorInput | CommunityUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<CommunityCreateWithoutAdminsInput, CommunityUncheckedCreateWithoutAdminsInput> | CommunityCreateWithoutAdminsInput[] | CommunityUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminsInput | CommunityCreateOrConnectWithoutAdminsInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutAdminsInput | CommunityUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutAdminsInput | CommunityUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutAdminsInput | CommunityUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutUsersInput | CommunityUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutUsersInput | CommunityUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutUsersInput | CommunityUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SkillForestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillForestCreateWithoutUserInput, SkillForestUncheckedCreateWithoutUserInput> | SkillForestCreateWithoutUserInput[] | SkillForestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutUserInput | SkillForestCreateOrConnectWithoutUserInput[]
    upsert?: SkillForestUpsertWithWhereUniqueWithoutUserInput | SkillForestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillForestCreateManyUserInputEnvelope
    set?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    disconnect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    delete?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    update?: SkillForestUpdateWithWhereUniqueWithoutUserInput | SkillForestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillForestUpdateManyWithWhereWithoutUserInput | SkillForestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
  }

  export type SkillForestUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<SkillForestCreateWithoutFollowersInput, SkillForestUncheckedCreateWithoutFollowersInput> | SkillForestCreateWithoutFollowersInput[] | SkillForestUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutFollowersInput | SkillForestCreateOrConnectWithoutFollowersInput[]
    upsert?: SkillForestUpsertWithWhereUniqueWithoutFollowersInput | SkillForestUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    disconnect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    delete?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    update?: SkillForestUpdateWithWhereUniqueWithoutFollowersInput | SkillForestUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: SkillForestUpdateManyWithWhereWithoutFollowersInput | SkillForestUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type LeaderboardUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LeaderboardCreateWithoutUsersInput, LeaderboardUncheckedCreateWithoutUsersInput> | LeaderboardCreateWithoutUsersInput[] | LeaderboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutUsersInput | LeaderboardCreateOrConnectWithoutUsersInput[]
    upsert?: LeaderboardUpsertWithWhereUniqueWithoutUsersInput | LeaderboardUpsertWithWhereUniqueWithoutUsersInput[]
    set?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    disconnect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    delete?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    update?: LeaderboardUpdateWithWhereUniqueWithoutUsersInput | LeaderboardUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LeaderboardUpdateManyWithWhereWithoutUsersInput | LeaderboardUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CommunityCreateskillInput = {
    set: string[]
  }

  export type CommunityCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCreatedCommunitiesInput = {
    create?: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutAdminOfCommunitiesInput = {
    create?: XOR<UserCreateWithoutAdminOfCommunitiesInput, UserUncheckedCreateWithoutAdminOfCommunitiesInput> | UserCreateWithoutAdminOfCommunitiesInput[] | UserUncheckedCreateWithoutAdminOfCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAdminOfCommunitiesInput | UserCreateOrConnectWithoutAdminOfCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutVerifiedInCommunitiesInput = {
    create?: XOR<UserCreateWithoutVerifiedInCommunitiesInput, UserUncheckedCreateWithoutVerifiedInCommunitiesInput> | UserCreateWithoutVerifiedInCommunitiesInput[] | UserUncheckedCreateWithoutVerifiedInCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInCommunitiesInput | UserCreateOrConnectWithoutVerifiedInCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SkilltreeNodeCreateNestedManyWithoutCommunityInput = {
    create?: XOR<SkilltreeNodeCreateWithoutCommunityInput, SkilltreeNodeUncheckedCreateWithoutCommunityInput> | SkilltreeNodeCreateWithoutCommunityInput[] | SkilltreeNodeUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutCommunityInput | SkilltreeNodeCreateOrConnectWithoutCommunityInput[]
    createMany?: SkilltreeNodeCreateManyCommunityInputEnvelope
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SkillForestCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<SkillForestCreateWithoutCommunitiesInput, SkillForestUncheckedCreateWithoutCommunitiesInput> | SkillForestCreateWithoutCommunitiesInput[] | SkillForestUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutCommunitiesInput | SkillForestCreateOrConnectWithoutCommunitiesInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ExperienceCreateWithoutCommunityInput, ExperienceUncheckedCreateWithoutCommunityInput> | ExperienceCreateWithoutCommunityInput[] | ExperienceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCommunityInput | ExperienceCreateOrConnectWithoutCommunityInput[]
    createMany?: ExperienceCreateManyCommunityInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type LeaderboardCreateNestedManyWithoutCommunityInput = {
    create?: XOR<LeaderboardCreateWithoutCommunityInput, LeaderboardUncheckedCreateWithoutCommunityInput> | LeaderboardCreateWithoutCommunityInput[] | LeaderboardUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutCommunityInput | LeaderboardCreateOrConnectWithoutCommunityInput[]
    createMany?: LeaderboardCreateManyCommunityInputEnvelope
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutCommunityInput = {
    create?: XOR<EventCreateWithoutCommunityInput, EventUncheckedCreateWithoutCommunityInput> | EventCreateWithoutCommunityInput[] | EventUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCommunityInput | EventCreateOrConnectWithoutCommunityInput[]
    createMany?: EventCreateManyCommunityInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput = {
    create?: XOR<UserCreateWithoutAdminOfCommunitiesInput, UserUncheckedCreateWithoutAdminOfCommunitiesInput> | UserCreateWithoutAdminOfCommunitiesInput[] | UserUncheckedCreateWithoutAdminOfCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAdminOfCommunitiesInput | UserCreateOrConnectWithoutAdminOfCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput = {
    create?: XOR<UserCreateWithoutVerifiedInCommunitiesInput, UserUncheckedCreateWithoutVerifiedInCommunitiesInput> | UserCreateWithoutVerifiedInCommunitiesInput[] | UserUncheckedCreateWithoutVerifiedInCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInCommunitiesInput | UserCreateOrConnectWithoutVerifiedInCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<SkilltreeNodeCreateWithoutCommunityInput, SkilltreeNodeUncheckedCreateWithoutCommunityInput> | SkilltreeNodeCreateWithoutCommunityInput[] | SkilltreeNodeUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutCommunityInput | SkilltreeNodeCreateOrConnectWithoutCommunityInput[]
    createMany?: SkilltreeNodeCreateManyCommunityInputEnvelope
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<SkillForestCreateWithoutCommunitiesInput, SkillForestUncheckedCreateWithoutCommunitiesInput> | SkillForestCreateWithoutCommunitiesInput[] | SkillForestUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutCommunitiesInput | SkillForestCreateOrConnectWithoutCommunitiesInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ExperienceCreateWithoutCommunityInput, ExperienceUncheckedCreateWithoutCommunityInput> | ExperienceCreateWithoutCommunityInput[] | ExperienceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCommunityInput | ExperienceCreateOrConnectWithoutCommunityInput[]
    createMany?: ExperienceCreateManyCommunityInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type LeaderboardUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<LeaderboardCreateWithoutCommunityInput, LeaderboardUncheckedCreateWithoutCommunityInput> | LeaderboardCreateWithoutCommunityInput[] | LeaderboardUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutCommunityInput | LeaderboardCreateOrConnectWithoutCommunityInput[]
    createMany?: LeaderboardCreateManyCommunityInputEnvelope
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<EventCreateWithoutCommunityInput, EventUncheckedCreateWithoutCommunityInput> | EventCreateWithoutCommunityInput[] | EventUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCommunityInput | EventCreateOrConnectWithoutCommunityInput[]
    createMany?: EventCreateManyCommunityInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type CommunityUpdateskillInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CommunityUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCommunitiesInput
    upsert?: UserUpsertWithoutCreatedCommunitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCommunitiesInput, UserUpdateWithoutCreatedCommunitiesInput>, UserUncheckedUpdateWithoutCreatedCommunitiesInput>
  }

  export type UserUpdateManyWithoutAdminOfCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutAdminOfCommunitiesInput, UserUncheckedCreateWithoutAdminOfCommunitiesInput> | UserCreateWithoutAdminOfCommunitiesInput[] | UserUncheckedCreateWithoutAdminOfCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAdminOfCommunitiesInput | UserCreateOrConnectWithoutAdminOfCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAdminOfCommunitiesInput | UserUpsertWithWhereUniqueWithoutAdminOfCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAdminOfCommunitiesInput | UserUpdateWithWhereUniqueWithoutAdminOfCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAdminOfCommunitiesInput | UserUpdateManyWithWhereWithoutAdminOfCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutVerifiedInCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedInCommunitiesInput, UserUncheckedCreateWithoutVerifiedInCommunitiesInput> | UserCreateWithoutVerifiedInCommunitiesInput[] | UserUncheckedCreateWithoutVerifiedInCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInCommunitiesInput | UserCreateOrConnectWithoutVerifiedInCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVerifiedInCommunitiesInput | UserUpsertWithWhereUniqueWithoutVerifiedInCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVerifiedInCommunitiesInput | UserUpdateWithWhereUniqueWithoutVerifiedInCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVerifiedInCommunitiesInput | UserUpdateManyWithWhereWithoutVerifiedInCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SkilltreeNodeUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<SkilltreeNodeCreateWithoutCommunityInput, SkilltreeNodeUncheckedCreateWithoutCommunityInput> | SkilltreeNodeCreateWithoutCommunityInput[] | SkilltreeNodeUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutCommunityInput | SkilltreeNodeCreateOrConnectWithoutCommunityInput[]
    upsert?: SkilltreeNodeUpsertWithWhereUniqueWithoutCommunityInput | SkilltreeNodeUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: SkilltreeNodeCreateManyCommunityInputEnvelope
    set?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    disconnect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    delete?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    update?: SkilltreeNodeUpdateWithWhereUniqueWithoutCommunityInput | SkilltreeNodeUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: SkilltreeNodeUpdateManyWithWhereWithoutCommunityInput | SkilltreeNodeUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: SkilltreeNodeScalarWhereInput | SkilltreeNodeScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SkillForestUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<SkillForestCreateWithoutCommunitiesInput, SkillForestUncheckedCreateWithoutCommunitiesInput> | SkillForestCreateWithoutCommunitiesInput[] | SkillForestUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutCommunitiesInput | SkillForestCreateOrConnectWithoutCommunitiesInput[]
    upsert?: SkillForestUpsertWithWhereUniqueWithoutCommunitiesInput | SkillForestUpsertWithWhereUniqueWithoutCommunitiesInput[]
    set?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    disconnect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    delete?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    update?: SkillForestUpdateWithWhereUniqueWithoutCommunitiesInput | SkillForestUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: SkillForestUpdateManyWithWhereWithoutCommunitiesInput | SkillForestUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ExperienceCreateWithoutCommunityInput, ExperienceUncheckedCreateWithoutCommunityInput> | ExperienceCreateWithoutCommunityInput[] | ExperienceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCommunityInput | ExperienceCreateOrConnectWithoutCommunityInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCommunityInput | ExperienceUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ExperienceCreateManyCommunityInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCommunityInput | ExperienceUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCommunityInput | ExperienceUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type LeaderboardUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<LeaderboardCreateWithoutCommunityInput, LeaderboardUncheckedCreateWithoutCommunityInput> | LeaderboardCreateWithoutCommunityInput[] | LeaderboardUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutCommunityInput | LeaderboardCreateOrConnectWithoutCommunityInput[]
    upsert?: LeaderboardUpsertWithWhereUniqueWithoutCommunityInput | LeaderboardUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: LeaderboardCreateManyCommunityInputEnvelope
    set?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    disconnect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    delete?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    update?: LeaderboardUpdateWithWhereUniqueWithoutCommunityInput | LeaderboardUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: LeaderboardUpdateManyWithWhereWithoutCommunityInput | LeaderboardUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
  }

  export type EventUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<EventCreateWithoutCommunityInput, EventUncheckedCreateWithoutCommunityInput> | EventCreateWithoutCommunityInput[] | EventUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCommunityInput | EventCreateOrConnectWithoutCommunityInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCommunityInput | EventUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: EventCreateManyCommunityInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCommunityInput | EventUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCommunityInput | EventUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutAdminOfCommunitiesInput, UserUncheckedCreateWithoutAdminOfCommunitiesInput> | UserCreateWithoutAdminOfCommunitiesInput[] | UserUncheckedCreateWithoutAdminOfCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAdminOfCommunitiesInput | UserCreateOrConnectWithoutAdminOfCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAdminOfCommunitiesInput | UserUpsertWithWhereUniqueWithoutAdminOfCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAdminOfCommunitiesInput | UserUpdateWithWhereUniqueWithoutAdminOfCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAdminOfCommunitiesInput | UserUpdateManyWithWhereWithoutAdminOfCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedInCommunitiesInput, UserUncheckedCreateWithoutVerifiedInCommunitiesInput> | UserCreateWithoutVerifiedInCommunitiesInput[] | UserUncheckedCreateWithoutVerifiedInCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInCommunitiesInput | UserCreateOrConnectWithoutVerifiedInCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVerifiedInCommunitiesInput | UserUpsertWithWhereUniqueWithoutVerifiedInCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVerifiedInCommunitiesInput | UserUpdateWithWhereUniqueWithoutVerifiedInCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVerifiedInCommunitiesInput | UserUpdateManyWithWhereWithoutVerifiedInCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<SkilltreeNodeCreateWithoutCommunityInput, SkilltreeNodeUncheckedCreateWithoutCommunityInput> | SkilltreeNodeCreateWithoutCommunityInput[] | SkilltreeNodeUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutCommunityInput | SkilltreeNodeCreateOrConnectWithoutCommunityInput[]
    upsert?: SkilltreeNodeUpsertWithWhereUniqueWithoutCommunityInput | SkilltreeNodeUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: SkilltreeNodeCreateManyCommunityInputEnvelope
    set?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    disconnect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    delete?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    update?: SkilltreeNodeUpdateWithWhereUniqueWithoutCommunityInput | SkilltreeNodeUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: SkilltreeNodeUpdateManyWithWhereWithoutCommunityInput | SkilltreeNodeUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: SkilltreeNodeScalarWhereInput | SkilltreeNodeScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<SkillForestCreateWithoutCommunitiesInput, SkillForestUncheckedCreateWithoutCommunitiesInput> | SkillForestCreateWithoutCommunitiesInput[] | SkillForestUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: SkillForestCreateOrConnectWithoutCommunitiesInput | SkillForestCreateOrConnectWithoutCommunitiesInput[]
    upsert?: SkillForestUpsertWithWhereUniqueWithoutCommunitiesInput | SkillForestUpsertWithWhereUniqueWithoutCommunitiesInput[]
    set?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    disconnect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    delete?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    connect?: SkillForestWhereUniqueInput | SkillForestWhereUniqueInput[]
    update?: SkillForestUpdateWithWhereUniqueWithoutCommunitiesInput | SkillForestUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: SkillForestUpdateManyWithWhereWithoutCommunitiesInput | SkillForestUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ExperienceCreateWithoutCommunityInput, ExperienceUncheckedCreateWithoutCommunityInput> | ExperienceCreateWithoutCommunityInput[] | ExperienceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCommunityInput | ExperienceCreateOrConnectWithoutCommunityInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCommunityInput | ExperienceUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ExperienceCreateManyCommunityInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCommunityInput | ExperienceUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCommunityInput | ExperienceUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<LeaderboardCreateWithoutCommunityInput, LeaderboardUncheckedCreateWithoutCommunityInput> | LeaderboardCreateWithoutCommunityInput[] | LeaderboardUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutCommunityInput | LeaderboardCreateOrConnectWithoutCommunityInput[]
    upsert?: LeaderboardUpsertWithWhereUniqueWithoutCommunityInput | LeaderboardUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: LeaderboardCreateManyCommunityInputEnvelope
    set?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    disconnect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    delete?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    update?: LeaderboardUpdateWithWhereUniqueWithoutCommunityInput | LeaderboardUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: LeaderboardUpdateManyWithWhereWithoutCommunityInput | LeaderboardUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<EventCreateWithoutCommunityInput, EventUncheckedCreateWithoutCommunityInput> | EventCreateWithoutCommunityInput[] | EventUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCommunityInput | EventCreateOrConnectWithoutCommunityInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCommunityInput | EventUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: EventCreateManyCommunityInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCommunityInput | EventUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCommunityInput | EventUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutSkillTreeNodesInput = {
    create?: XOR<CommunityCreateWithoutSkillTreeNodesInput, CommunityUncheckedCreateWithoutSkillTreeNodesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutSkillTreeNodesInput
    connect?: CommunityWhereUniqueInput
  }

  export type ExperienceCreateNestedOneWithoutSkillTreeNodesInput = {
    create?: XOR<ExperienceCreateWithoutSkillTreeNodesInput, ExperienceUncheckedCreateWithoutSkillTreeNodesInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutSkillTreeNodesInput
    connect?: ExperienceWhereUniqueInput
  }

  export type SkilltreeNodeCreateNestedOneWithoutPreviousInput = {
    create?: XOR<SkilltreeNodeCreateWithoutPreviousInput, SkilltreeNodeUncheckedCreateWithoutPreviousInput>
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutPreviousInput
    connect?: SkilltreeNodeWhereUniqueInput
  }

  export type SkilltreeNodeCreateNestedOneWithoutNextInput = {
    create?: XOR<SkilltreeNodeCreateWithoutNextInput, SkilltreeNodeUncheckedCreateWithoutNextInput>
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutNextInput
    connect?: SkilltreeNodeWhereUniqueInput
  }

  export type SkilltreeNodeUncheckedCreateNestedOneWithoutNextInput = {
    create?: XOR<SkilltreeNodeCreateWithoutNextInput, SkilltreeNodeUncheckedCreateWithoutNextInput>
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutNextInput
    connect?: SkilltreeNodeWhereUniqueInput
  }

  export type CommunityUpdateOneRequiredWithoutSkillTreeNodesNestedInput = {
    create?: XOR<CommunityCreateWithoutSkillTreeNodesInput, CommunityUncheckedCreateWithoutSkillTreeNodesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutSkillTreeNodesInput
    upsert?: CommunityUpsertWithoutSkillTreeNodesInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutSkillTreeNodesInput, CommunityUpdateWithoutSkillTreeNodesInput>, CommunityUncheckedUpdateWithoutSkillTreeNodesInput>
  }

  export type ExperienceUpdateOneRequiredWithoutSkillTreeNodesNestedInput = {
    create?: XOR<ExperienceCreateWithoutSkillTreeNodesInput, ExperienceUncheckedCreateWithoutSkillTreeNodesInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutSkillTreeNodesInput
    upsert?: ExperienceUpsertWithoutSkillTreeNodesInput
    connect?: ExperienceWhereUniqueInput
    update?: XOR<XOR<ExperienceUpdateToOneWithWhereWithoutSkillTreeNodesInput, ExperienceUpdateWithoutSkillTreeNodesInput>, ExperienceUncheckedUpdateWithoutSkillTreeNodesInput>
  }

  export type SkilltreeNodeUpdateOneWithoutPreviousNestedInput = {
    create?: XOR<SkilltreeNodeCreateWithoutPreviousInput, SkilltreeNodeUncheckedCreateWithoutPreviousInput>
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutPreviousInput
    upsert?: SkilltreeNodeUpsertWithoutPreviousInput
    disconnect?: SkilltreeNodeWhereInput | boolean
    delete?: SkilltreeNodeWhereInput | boolean
    connect?: SkilltreeNodeWhereUniqueInput
    update?: XOR<XOR<SkilltreeNodeUpdateToOneWithWhereWithoutPreviousInput, SkilltreeNodeUpdateWithoutPreviousInput>, SkilltreeNodeUncheckedUpdateWithoutPreviousInput>
  }

  export type SkilltreeNodeUpdateOneWithoutNextNestedInput = {
    create?: XOR<SkilltreeNodeCreateWithoutNextInput, SkilltreeNodeUncheckedCreateWithoutNextInput>
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutNextInput
    upsert?: SkilltreeNodeUpsertWithoutNextInput
    disconnect?: SkilltreeNodeWhereInput | boolean
    delete?: SkilltreeNodeWhereInput | boolean
    connect?: SkilltreeNodeWhereUniqueInput
    update?: XOR<XOR<SkilltreeNodeUpdateToOneWithWhereWithoutNextInput, SkilltreeNodeUpdateWithoutNextInput>, SkilltreeNodeUncheckedUpdateWithoutNextInput>
  }

  export type SkilltreeNodeUncheckedUpdateOneWithoutNextNestedInput = {
    create?: XOR<SkilltreeNodeCreateWithoutNextInput, SkilltreeNodeUncheckedCreateWithoutNextInput>
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutNextInput
    upsert?: SkilltreeNodeUpsertWithoutNextInput
    disconnect?: SkilltreeNodeWhereInput | boolean
    delete?: SkilltreeNodeWhereInput | boolean
    connect?: SkilltreeNodeWhereUniqueInput
    update?: XOR<XOR<SkilltreeNodeUpdateToOneWithWhereWithoutNextInput, SkilltreeNodeUpdateWithoutNextInput>, SkilltreeNodeUncheckedUpdateWithoutNextInput>
  }

  export type CommunityCreateNestedOneWithoutPostsInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type FeedbackCreateNestedManyWithoutPostInput = {
    create?: XOR<FeedbackCreateWithoutPostInput, FeedbackUncheckedCreateWithoutPostInput> | FeedbackCreateWithoutPostInput[] | FeedbackUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPostInput | FeedbackCreateOrConnectWithoutPostInput[]
    createMany?: FeedbackCreateManyPostInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<FeedbackCreateWithoutPostInput, FeedbackUncheckedCreateWithoutPostInput> | FeedbackCreateWithoutPostInput[] | FeedbackUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPostInput | FeedbackCreateOrConnectWithoutPostInput[]
    createMany?: FeedbackCreateManyPostInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type CommunityUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    upsert?: CommunityUpsertWithoutPostsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutPostsInput, CommunityUpdateWithoutPostsInput>, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type FeedbackUpdateManyWithoutPostNestedInput = {
    create?: XOR<FeedbackCreateWithoutPostInput, FeedbackUncheckedCreateWithoutPostInput> | FeedbackCreateWithoutPostInput[] | FeedbackUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPostInput | FeedbackCreateOrConnectWithoutPostInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutPostInput | FeedbackUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FeedbackCreateManyPostInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutPostInput | FeedbackUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutPostInput | FeedbackUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<FeedbackCreateWithoutPostInput, FeedbackUncheckedCreateWithoutPostInput> | FeedbackCreateWithoutPostInput[] | FeedbackUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPostInput | FeedbackCreateOrConnectWithoutPostInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutPostInput | FeedbackUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FeedbackCreateManyPostInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutPostInput | FeedbackUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutPostInput | FeedbackUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillForestsInput = {
    create?: XOR<UserCreateWithoutSkillForestsInput, UserUncheckedCreateWithoutSkillForestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillForestsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedManyWithoutSkillForestsInput = {
    create?: XOR<CommunityCreateWithoutSkillForestsInput, CommunityUncheckedCreateWithoutSkillForestsInput> | CommunityCreateWithoutSkillForestsInput[] | CommunityUncheckedCreateWithoutSkillForestsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutSkillForestsInput | CommunityCreateOrConnectWithoutSkillForestsInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowedSkillForestsInput = {
    create?: XOR<UserCreateWithoutFollowedSkillForestsInput, UserUncheckedCreateWithoutFollowedSkillForestsInput> | UserCreateWithoutFollowedSkillForestsInput[] | UserUncheckedCreateWithoutFollowedSkillForestsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedSkillForestsInput | UserCreateOrConnectWithoutFollowedSkillForestsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutSkillForestsInput = {
    create?: XOR<CommunityCreateWithoutSkillForestsInput, CommunityUncheckedCreateWithoutSkillForestsInput> | CommunityCreateWithoutSkillForestsInput[] | CommunityUncheckedCreateWithoutSkillForestsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutSkillForestsInput | CommunityCreateOrConnectWithoutSkillForestsInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowedSkillForestsInput = {
    create?: XOR<UserCreateWithoutFollowedSkillForestsInput, UserUncheckedCreateWithoutFollowedSkillForestsInput> | UserCreateWithoutFollowedSkillForestsInput[] | UserUncheckedCreateWithoutFollowedSkillForestsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedSkillForestsInput | UserCreateOrConnectWithoutFollowedSkillForestsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSkillForestsNestedInput = {
    create?: XOR<UserCreateWithoutSkillForestsInput, UserUncheckedCreateWithoutSkillForestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillForestsInput
    upsert?: UserUpsertWithoutSkillForestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillForestsInput, UserUpdateWithoutSkillForestsInput>, UserUncheckedUpdateWithoutSkillForestsInput>
  }

  export type CommunityUpdateManyWithoutSkillForestsNestedInput = {
    create?: XOR<CommunityCreateWithoutSkillForestsInput, CommunityUncheckedCreateWithoutSkillForestsInput> | CommunityCreateWithoutSkillForestsInput[] | CommunityUncheckedCreateWithoutSkillForestsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutSkillForestsInput | CommunityCreateOrConnectWithoutSkillForestsInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutSkillForestsInput | CommunityUpsertWithWhereUniqueWithoutSkillForestsInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutSkillForestsInput | CommunityUpdateWithWhereUniqueWithoutSkillForestsInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutSkillForestsInput | CommunityUpdateManyWithWhereWithoutSkillForestsInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowedSkillForestsNestedInput = {
    create?: XOR<UserCreateWithoutFollowedSkillForestsInput, UserUncheckedCreateWithoutFollowedSkillForestsInput> | UserCreateWithoutFollowedSkillForestsInput[] | UserUncheckedCreateWithoutFollowedSkillForestsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedSkillForestsInput | UserCreateOrConnectWithoutFollowedSkillForestsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedSkillForestsInput | UserUpsertWithWhereUniqueWithoutFollowedSkillForestsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedSkillForestsInput | UserUpdateWithWhereUniqueWithoutFollowedSkillForestsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedSkillForestsInput | UserUpdateManyWithWhereWithoutFollowedSkillForestsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutSkillForestsNestedInput = {
    create?: XOR<CommunityCreateWithoutSkillForestsInput, CommunityUncheckedCreateWithoutSkillForestsInput> | CommunityCreateWithoutSkillForestsInput[] | CommunityUncheckedCreateWithoutSkillForestsInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutSkillForestsInput | CommunityCreateOrConnectWithoutSkillForestsInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutSkillForestsInput | CommunityUpsertWithWhereUniqueWithoutSkillForestsInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutSkillForestsInput | CommunityUpdateWithWhereUniqueWithoutSkillForestsInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutSkillForestsInput | CommunityUpdateManyWithWhereWithoutSkillForestsInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowedSkillForestsNestedInput = {
    create?: XOR<UserCreateWithoutFollowedSkillForestsInput, UserUncheckedCreateWithoutFollowedSkillForestsInput> | UserCreateWithoutFollowedSkillForestsInput[] | UserUncheckedCreateWithoutFollowedSkillForestsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedSkillForestsInput | UserCreateOrConnectWithoutFollowedSkillForestsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedSkillForestsInput | UserUpsertWithWhereUniqueWithoutFollowedSkillForestsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedSkillForestsInput | UserUpdateWithWhereUniqueWithoutFollowedSkillForestsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedSkillForestsInput | UserUpdateManyWithWhereWithoutFollowedSkillForestsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<CommunityCreateWithoutExperiencesInput, CommunityUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutExperiencesInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    connect?: UserWhereUniqueInput
  }

  export type SkilltreeNodeCreateNestedManyWithoutExperienceInput = {
    create?: XOR<SkilltreeNodeCreateWithoutExperienceInput, SkilltreeNodeUncheckedCreateWithoutExperienceInput> | SkilltreeNodeCreateWithoutExperienceInput[] | SkilltreeNodeUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutExperienceInput | SkilltreeNodeCreateOrConnectWithoutExperienceInput[]
    createMany?: SkilltreeNodeCreateManyExperienceInputEnvelope
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
  }

  export type LeaderboardCreateNestedManyWithoutExperiencesInput = {
    create?: XOR<LeaderboardCreateWithoutExperiencesInput, LeaderboardUncheckedCreateWithoutExperiencesInput> | LeaderboardCreateWithoutExperiencesInput[] | LeaderboardUncheckedCreateWithoutExperiencesInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutExperiencesInput | LeaderboardCreateOrConnectWithoutExperiencesInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutExperienceInput = {
    create?: XOR<EventCreateWithoutExperienceInput, EventUncheckedCreateWithoutExperienceInput> | EventCreateWithoutExperienceInput[] | EventUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: EventCreateOrConnectWithoutExperienceInput | EventCreateOrConnectWithoutExperienceInput[]
    createMany?: EventCreateManyExperienceInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type SkilltreeNodeUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<SkilltreeNodeCreateWithoutExperienceInput, SkilltreeNodeUncheckedCreateWithoutExperienceInput> | SkilltreeNodeCreateWithoutExperienceInput[] | SkilltreeNodeUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutExperienceInput | SkilltreeNodeCreateOrConnectWithoutExperienceInput[]
    createMany?: SkilltreeNodeCreateManyExperienceInputEnvelope
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
  }

  export type LeaderboardUncheckedCreateNestedManyWithoutExperiencesInput = {
    create?: XOR<LeaderboardCreateWithoutExperiencesInput, LeaderboardUncheckedCreateWithoutExperiencesInput> | LeaderboardCreateWithoutExperiencesInput[] | LeaderboardUncheckedCreateWithoutExperiencesInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutExperiencesInput | LeaderboardCreateOrConnectWithoutExperiencesInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<EventCreateWithoutExperienceInput, EventUncheckedCreateWithoutExperienceInput> | EventCreateWithoutExperienceInput[] | EventUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: EventCreateOrConnectWithoutExperienceInput | EventCreateOrConnectWithoutExperienceInput[]
    createMany?: EventCreateManyExperienceInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommunityUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<CommunityCreateWithoutExperiencesInput, CommunityUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutExperiencesInput
    upsert?: CommunityUpsertWithoutExperiencesInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutExperiencesInput, CommunityUpdateWithoutExperiencesInput>, CommunityUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    upsert?: UserUpsertWithoutExperiencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExperiencesInput, UserUpdateWithoutExperiencesInput>, UserUncheckedUpdateWithoutExperiencesInput>
  }

  export type SkilltreeNodeUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<SkilltreeNodeCreateWithoutExperienceInput, SkilltreeNodeUncheckedCreateWithoutExperienceInput> | SkilltreeNodeCreateWithoutExperienceInput[] | SkilltreeNodeUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutExperienceInput | SkilltreeNodeCreateOrConnectWithoutExperienceInput[]
    upsert?: SkilltreeNodeUpsertWithWhereUniqueWithoutExperienceInput | SkilltreeNodeUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: SkilltreeNodeCreateManyExperienceInputEnvelope
    set?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    disconnect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    delete?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    update?: SkilltreeNodeUpdateWithWhereUniqueWithoutExperienceInput | SkilltreeNodeUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: SkilltreeNodeUpdateManyWithWhereWithoutExperienceInput | SkilltreeNodeUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: SkilltreeNodeScalarWhereInput | SkilltreeNodeScalarWhereInput[]
  }

  export type LeaderboardUpdateManyWithoutExperiencesNestedInput = {
    create?: XOR<LeaderboardCreateWithoutExperiencesInput, LeaderboardUncheckedCreateWithoutExperiencesInput> | LeaderboardCreateWithoutExperiencesInput[] | LeaderboardUncheckedCreateWithoutExperiencesInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutExperiencesInput | LeaderboardCreateOrConnectWithoutExperiencesInput[]
    upsert?: LeaderboardUpsertWithWhereUniqueWithoutExperiencesInput | LeaderboardUpsertWithWhereUniqueWithoutExperiencesInput[]
    set?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    disconnect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    delete?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    update?: LeaderboardUpdateWithWhereUniqueWithoutExperiencesInput | LeaderboardUpdateWithWhereUniqueWithoutExperiencesInput[]
    updateMany?: LeaderboardUpdateManyWithWhereWithoutExperiencesInput | LeaderboardUpdateManyWithWhereWithoutExperiencesInput[]
    deleteMany?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
  }

  export type EventUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<EventCreateWithoutExperienceInput, EventUncheckedCreateWithoutExperienceInput> | EventCreateWithoutExperienceInput[] | EventUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: EventCreateOrConnectWithoutExperienceInput | EventCreateOrConnectWithoutExperienceInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutExperienceInput | EventUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: EventCreateManyExperienceInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutExperienceInput | EventUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: EventUpdateManyWithWhereWithoutExperienceInput | EventUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SkilltreeNodeUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<SkilltreeNodeCreateWithoutExperienceInput, SkilltreeNodeUncheckedCreateWithoutExperienceInput> | SkilltreeNodeCreateWithoutExperienceInput[] | SkilltreeNodeUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: SkilltreeNodeCreateOrConnectWithoutExperienceInput | SkilltreeNodeCreateOrConnectWithoutExperienceInput[]
    upsert?: SkilltreeNodeUpsertWithWhereUniqueWithoutExperienceInput | SkilltreeNodeUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: SkilltreeNodeCreateManyExperienceInputEnvelope
    set?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    disconnect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    delete?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    connect?: SkilltreeNodeWhereUniqueInput | SkilltreeNodeWhereUniqueInput[]
    update?: SkilltreeNodeUpdateWithWhereUniqueWithoutExperienceInput | SkilltreeNodeUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: SkilltreeNodeUpdateManyWithWhereWithoutExperienceInput | SkilltreeNodeUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: SkilltreeNodeScalarWhereInput | SkilltreeNodeScalarWhereInput[]
  }

  export type LeaderboardUncheckedUpdateManyWithoutExperiencesNestedInput = {
    create?: XOR<LeaderboardCreateWithoutExperiencesInput, LeaderboardUncheckedCreateWithoutExperiencesInput> | LeaderboardCreateWithoutExperiencesInput[] | LeaderboardUncheckedCreateWithoutExperiencesInput[]
    connectOrCreate?: LeaderboardCreateOrConnectWithoutExperiencesInput | LeaderboardCreateOrConnectWithoutExperiencesInput[]
    upsert?: LeaderboardUpsertWithWhereUniqueWithoutExperiencesInput | LeaderboardUpsertWithWhereUniqueWithoutExperiencesInput[]
    set?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    disconnect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    delete?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    connect?: LeaderboardWhereUniqueInput | LeaderboardWhereUniqueInput[]
    update?: LeaderboardUpdateWithWhereUniqueWithoutExperiencesInput | LeaderboardUpdateWithWhereUniqueWithoutExperiencesInput[]
    updateMany?: LeaderboardUpdateManyWithWhereWithoutExperiencesInput | LeaderboardUpdateManyWithWhereWithoutExperiencesInput[]
    deleteMany?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<EventCreateWithoutExperienceInput, EventUncheckedCreateWithoutExperienceInput> | EventCreateWithoutExperienceInput[] | EventUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: EventCreateOrConnectWithoutExperienceInput | EventCreateOrConnectWithoutExperienceInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutExperienceInput | EventUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: EventCreateManyExperienceInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutExperienceInput | EventUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: EventUpdateManyWithWhereWithoutExperienceInput | EventUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutLeaderboardsInput = {
    create?: XOR<CommunityCreateWithoutLeaderboardsInput, CommunityUncheckedCreateWithoutLeaderboardsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutLeaderboardsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutLeaderboardEntriesInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput> | UserCreateWithoutLeaderboardEntriesInput[] | UserUncheckedCreateWithoutLeaderboardEntriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput | UserCreateOrConnectWithoutLeaderboardEntriesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutLeaderboardsInput = {
    create?: XOR<ExperienceCreateWithoutLeaderboardsInput, ExperienceUncheckedCreateWithoutLeaderboardsInput> | ExperienceCreateWithoutLeaderboardsInput[] | ExperienceUncheckedCreateWithoutLeaderboardsInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutLeaderboardsInput | ExperienceCreateOrConnectWithoutLeaderboardsInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLeaderboardEntriesInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput> | UserCreateWithoutLeaderboardEntriesInput[] | UserUncheckedCreateWithoutLeaderboardEntriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput | UserCreateOrConnectWithoutLeaderboardEntriesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutLeaderboardsInput = {
    create?: XOR<ExperienceCreateWithoutLeaderboardsInput, ExperienceUncheckedCreateWithoutLeaderboardsInput> | ExperienceCreateWithoutLeaderboardsInput[] | ExperienceUncheckedCreateWithoutLeaderboardsInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutLeaderboardsInput | ExperienceCreateOrConnectWithoutLeaderboardsInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type CommunityUpdateOneRequiredWithoutLeaderboardsNestedInput = {
    create?: XOR<CommunityCreateWithoutLeaderboardsInput, CommunityUncheckedCreateWithoutLeaderboardsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutLeaderboardsInput
    upsert?: CommunityUpsertWithoutLeaderboardsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutLeaderboardsInput, CommunityUpdateWithoutLeaderboardsInput>, CommunityUncheckedUpdateWithoutLeaderboardsInput>
  }

  export type UserUpdateManyWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput> | UserCreateWithoutLeaderboardEntriesInput[] | UserUncheckedCreateWithoutLeaderboardEntriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput | UserCreateOrConnectWithoutLeaderboardEntriesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLeaderboardEntriesInput | UserUpsertWithWhereUniqueWithoutLeaderboardEntriesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLeaderboardEntriesInput | UserUpdateWithWhereUniqueWithoutLeaderboardEntriesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLeaderboardEntriesInput | UserUpdateManyWithWhereWithoutLeaderboardEntriesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutLeaderboardsNestedInput = {
    create?: XOR<ExperienceCreateWithoutLeaderboardsInput, ExperienceUncheckedCreateWithoutLeaderboardsInput> | ExperienceCreateWithoutLeaderboardsInput[] | ExperienceUncheckedCreateWithoutLeaderboardsInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutLeaderboardsInput | ExperienceCreateOrConnectWithoutLeaderboardsInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutLeaderboardsInput | ExperienceUpsertWithWhereUniqueWithoutLeaderboardsInput[]
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutLeaderboardsInput | ExperienceUpdateWithWhereUniqueWithoutLeaderboardsInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutLeaderboardsInput | ExperienceUpdateManyWithWhereWithoutLeaderboardsInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput> | UserCreateWithoutLeaderboardEntriesInput[] | UserUncheckedCreateWithoutLeaderboardEntriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput | UserCreateOrConnectWithoutLeaderboardEntriesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLeaderboardEntriesInput | UserUpsertWithWhereUniqueWithoutLeaderboardEntriesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLeaderboardEntriesInput | UserUpdateWithWhereUniqueWithoutLeaderboardEntriesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLeaderboardEntriesInput | UserUpdateManyWithWhereWithoutLeaderboardEntriesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutLeaderboardsNestedInput = {
    create?: XOR<ExperienceCreateWithoutLeaderboardsInput, ExperienceUncheckedCreateWithoutLeaderboardsInput> | ExperienceCreateWithoutLeaderboardsInput[] | ExperienceUncheckedCreateWithoutLeaderboardsInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutLeaderboardsInput | ExperienceCreateOrConnectWithoutLeaderboardsInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutLeaderboardsInput | ExperienceUpsertWithWhereUniqueWithoutLeaderboardsInput[]
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutLeaderboardsInput | ExperienceUpdateWithWhereUniqueWithoutLeaderboardsInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutLeaderboardsInput | ExperienceUpdateManyWithWhereWithoutLeaderboardsInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<PostCreateWithoutFeedbackInput, PostUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: PostCreateOrConnectWithoutFeedbackInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    upsert?: UserUpsertWithoutFeedbackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackInput, UserUpdateWithoutFeedbackInput>, UserUncheckedUpdateWithoutFeedbackInput>
  }

  export type PostUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<PostCreateWithoutFeedbackInput, PostUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: PostCreateOrConnectWithoutFeedbackInput
    upsert?: PostUpsertWithoutFeedbackInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutFeedbackInput, PostUpdateWithoutFeedbackInput>, PostUncheckedUpdateWithoutFeedbackInput>
  }

  export type CommunityCreateNestedOneWithoutEventsInput = {
    create?: XOR<CommunityCreateWithoutEventsInput, CommunityUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutEventsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type ExperienceCreateNestedOneWithoutEventsInput = {
    create?: XOR<ExperienceCreateWithoutEventsInput, ExperienceUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutEventsInput
    connect?: ExperienceWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CommunityUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CommunityCreateWithoutEventsInput, CommunityUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutEventsInput
    upsert?: CommunityUpsertWithoutEventsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutEventsInput, CommunityUpdateWithoutEventsInput>, CommunityUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type ExperienceUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ExperienceCreateWithoutEventsInput, ExperienceUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutEventsInput
    upsert?: ExperienceUpsertWithoutEventsInput
    connect?: ExperienceWhereUniqueInput
    update?: XOR<XOR<ExperienceUpdateToOneWithWhereWithoutEventsInput, ExperienceUpdateWithoutEventsInput>, ExperienceUncheckedUpdateWithoutEventsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CommunityCreateWithoutCreatorInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutCreatorInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCreatorInput, CommunityUncheckedCreateWithoutCreatorInput>
  }

  export type CommunityCreateManyCreatorInputEnvelope = {
    data: CommunityCreateManyCreatorInput | CommunityCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutAdminsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutAdminsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutAdminsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutAdminsInput, CommunityUncheckedCreateWithoutAdminsInput>
  }

  export type CommunityCreateWithoutUsersInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutUsersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    text: string
    attachment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    feedback?: FeedbackCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    text: string
    attachment?: string | null
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type SkillForestCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutSkillForestsInput
    followers?: UserCreateNestedManyWithoutFollowedSkillForestsInput
  }

  export type SkillForestUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutSkillForestsInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowedSkillForestsInput
  }

  export type SkillForestCreateOrConnectWithoutUserInput = {
    where: SkillForestWhereUniqueInput
    create: XOR<SkillForestCreateWithoutUserInput, SkillForestUncheckedCreateWithoutUserInput>
  }

  export type SkillForestCreateManyUserInputEnvelope = {
    data: SkillForestCreateManyUserInput | SkillForestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillForestCreateWithoutFollowersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillForestsInput
    communities?: CommunityCreateNestedManyWithoutSkillForestsInput
  }

  export type SkillForestUncheckedCreateWithoutFollowersInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutSkillForestsInput
  }

  export type SkillForestCreateOrConnectWithoutFollowersInput = {
    where: SkillForestWhereUniqueInput
    create: XOR<SkillForestCreateWithoutFollowersInput, SkillForestUncheckedCreateWithoutFollowersInput>
  }

  export type ExperienceCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutExperiencesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardCreateNestedManyWithoutExperiencesInput
    events?: EventCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutExperiencesInput
    events?: EventUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceCreateOrConnectWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceCreateManyUserInputEnvelope = {
    data: ExperienceCreateManyUserInput | ExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaderboardCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutLeaderboardsInput
    experiences?: ExperienceCreateNestedManyWithoutLeaderboardsInput
  }

  export type LeaderboardUncheckedCreateWithoutUsersInput = {
    id?: string
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: ExperienceUncheckedCreateNestedManyWithoutLeaderboardsInput
  }

  export type LeaderboardCreateOrConnectWithoutUsersInput = {
    where: LeaderboardWhereUniqueInput
    create: XOR<LeaderboardCreateWithoutUsersInput, LeaderboardUncheckedCreateWithoutUsersInput>
  }

  export type FeedbackCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutUserInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutEventsInput
    experience: ExperienceCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    communityId: string
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutCreatorInput, CommunityUncheckedUpdateWithoutCreatorInput>
    create: XOR<CommunityCreateWithoutCreatorInput, CommunityUncheckedCreateWithoutCreatorInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutCreatorInput, CommunityUncheckedUpdateWithoutCreatorInput>
  }

  export type CommunityUpdateManyWithWhereWithoutCreatorInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    skill?: StringNullableListFilter<"Community">
    icon?: StringNullableFilter<"Community"> | string | null
    tags?: StringNullableListFilter<"Community">
    description?: StringNullableFilter<"Community"> | string | null
    communityExperience?: IntNullableFilter<"Community"> | number | null
    creatorId?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
  }

  export type CommunityUpsertWithWhereUniqueWithoutAdminsInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutAdminsInput, CommunityUncheckedUpdateWithoutAdminsInput>
    create: XOR<CommunityCreateWithoutAdminsInput, CommunityUncheckedCreateWithoutAdminsInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutAdminsInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutAdminsInput, CommunityUncheckedUpdateWithoutAdminsInput>
  }

  export type CommunityUpdateManyWithWhereWithoutAdminsInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutAdminsInput>
  }

  export type CommunityUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutUsersInput, CommunityUncheckedUpdateWithoutUsersInput>
    create: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutUsersInput, CommunityUncheckedUpdateWithoutUsersInput>
  }

  export type CommunityUpdateManyWithWhereWithoutUsersInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutUsersInput>
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    attachment?: StringNullableFilter<"Post"> | string | null
    communityId?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type SkillForestUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillForestWhereUniqueInput
    update: XOR<SkillForestUpdateWithoutUserInput, SkillForestUncheckedUpdateWithoutUserInput>
    create: XOR<SkillForestCreateWithoutUserInput, SkillForestUncheckedCreateWithoutUserInput>
  }

  export type SkillForestUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillForestWhereUniqueInput
    data: XOR<SkillForestUpdateWithoutUserInput, SkillForestUncheckedUpdateWithoutUserInput>
  }

  export type SkillForestUpdateManyWithWhereWithoutUserInput = {
    where: SkillForestScalarWhereInput
    data: XOR<SkillForestUpdateManyMutationInput, SkillForestUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillForestScalarWhereInput = {
    AND?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
    OR?: SkillForestScalarWhereInput[]
    NOT?: SkillForestScalarWhereInput | SkillForestScalarWhereInput[]
    id?: StringFilter<"SkillForest"> | string
    userId?: StringFilter<"SkillForest"> | string
    createdAt?: DateTimeFilter<"SkillForest"> | Date | string
    updatedAt?: DateTimeFilter<"SkillForest"> | Date | string
  }

  export type SkillForestUpsertWithWhereUniqueWithoutFollowersInput = {
    where: SkillForestWhereUniqueInput
    update: XOR<SkillForestUpdateWithoutFollowersInput, SkillForestUncheckedUpdateWithoutFollowersInput>
    create: XOR<SkillForestCreateWithoutFollowersInput, SkillForestUncheckedCreateWithoutFollowersInput>
  }

  export type SkillForestUpdateWithWhereUniqueWithoutFollowersInput = {
    where: SkillForestWhereUniqueInput
    data: XOR<SkillForestUpdateWithoutFollowersInput, SkillForestUncheckedUpdateWithoutFollowersInput>
  }

  export type SkillForestUpdateManyWithWhereWithoutFollowersInput = {
    where: SkillForestScalarWhereInput
    data: XOR<SkillForestUpdateManyMutationInput, SkillForestUncheckedUpdateManyWithoutFollowersInput>
  }

  export type ExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    amount?: IntFilter<"Experience"> | number
    communityId?: StringFilter<"Experience"> | string
    userId?: StringFilter<"Experience"> | string
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
  }

  export type LeaderboardUpsertWithWhereUniqueWithoutUsersInput = {
    where: LeaderboardWhereUniqueInput
    update: XOR<LeaderboardUpdateWithoutUsersInput, LeaderboardUncheckedUpdateWithoutUsersInput>
    create: XOR<LeaderboardCreateWithoutUsersInput, LeaderboardUncheckedCreateWithoutUsersInput>
  }

  export type LeaderboardUpdateWithWhereUniqueWithoutUsersInput = {
    where: LeaderboardWhereUniqueInput
    data: XOR<LeaderboardUpdateWithoutUsersInput, LeaderboardUncheckedUpdateWithoutUsersInput>
  }

  export type LeaderboardUpdateManyWithWhereWithoutUsersInput = {
    where: LeaderboardScalarWhereInput
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyWithoutUsersInput>
  }

  export type LeaderboardScalarWhereInput = {
    AND?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
    OR?: LeaderboardScalarWhereInput[]
    NOT?: LeaderboardScalarWhereInput | LeaderboardScalarWhereInput[]
    id?: StringFilter<"Leaderboard"> | string
    communityId?: StringFilter<"Leaderboard"> | string
    createdAt?: DateTimeFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeFilter<"Leaderboard"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    postId?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    rankedStatus?: BoolNullableFilter<"Event"> | boolean | null
    experiencePayout?: IntNullableFilter<"Event"> | number | null
    communityId?: StringFilter<"Event"> | string
    userId?: StringFilter<"Event"> | string
    experienceId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type UserCreateWithoutCreatedCommunitiesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCommunitiesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
  }

  export type UserCreateWithoutAdminOfCommunitiesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminOfCommunitiesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminOfCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminOfCommunitiesInput, UserUncheckedCreateWithoutAdminOfCommunitiesInput>
  }

  export type UserCreateWithoutVerifiedInCommunitiesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerifiedInCommunitiesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerifiedInCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedInCommunitiesInput, UserUncheckedCreateWithoutVerifiedInCommunitiesInput>
  }

  export type SkilltreeNodeCreateWithoutCommunityInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experience: ExperienceCreateNestedOneWithoutSkillTreeNodesInput
    next?: SkilltreeNodeCreateNestedOneWithoutPreviousInput
    previous?: SkilltreeNodeCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeUncheckedCreateWithoutCommunityInput = {
    id?: string
    name: string
    experienceId: string
    nextId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    previous?: SkilltreeNodeUncheckedCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeCreateOrConnectWithoutCommunityInput = {
    where: SkilltreeNodeWhereUniqueInput
    create: XOR<SkilltreeNodeCreateWithoutCommunityInput, SkilltreeNodeUncheckedCreateWithoutCommunityInput>
  }

  export type SkilltreeNodeCreateManyCommunityInputEnvelope = {
    data: SkilltreeNodeCreateManyCommunityInput | SkilltreeNodeCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCommunityInput = {
    id?: string
    text: string
    attachment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    feedback?: FeedbackCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommunityInput = {
    id?: string
    text: string
    attachment?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommunityInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostCreateManyCommunityInputEnvelope = {
    data: PostCreateManyCommunityInput | PostCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type SkillForestCreateWithoutCommunitiesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillForestsInput
    followers?: UserCreateNestedManyWithoutFollowedSkillForestsInput
  }

  export type SkillForestUncheckedCreateWithoutCommunitiesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    followers?: UserUncheckedCreateNestedManyWithoutFollowedSkillForestsInput
  }

  export type SkillForestCreateOrConnectWithoutCommunitiesInput = {
    where: SkillForestWhereUniqueInput
    create: XOR<SkillForestCreateWithoutCommunitiesInput, SkillForestUncheckedCreateWithoutCommunitiesInput>
  }

  export type ExperienceCreateWithoutCommunityInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutExperiencesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardCreateNestedManyWithoutExperiencesInput
    events?: EventCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateWithoutCommunityInput = {
    id?: string
    amount: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutExperiencesInput
    events?: EventUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceCreateOrConnectWithoutCommunityInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutCommunityInput, ExperienceUncheckedCreateWithoutCommunityInput>
  }

  export type ExperienceCreateManyCommunityInputEnvelope = {
    data: ExperienceCreateManyCommunityInput | ExperienceCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type LeaderboardCreateWithoutCommunityInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutLeaderboardEntriesInput
    experiences?: ExperienceCreateNestedManyWithoutLeaderboardsInput
  }

  export type LeaderboardUncheckedCreateWithoutCommunityInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutLeaderboardEntriesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutLeaderboardsInput
  }

  export type LeaderboardCreateOrConnectWithoutCommunityInput = {
    where: LeaderboardWhereUniqueInput
    create: XOR<LeaderboardCreateWithoutCommunityInput, LeaderboardUncheckedCreateWithoutCommunityInput>
  }

  export type LeaderboardCreateManyCommunityInputEnvelope = {
    data: LeaderboardCreateManyCommunityInput | LeaderboardCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutCommunityInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    experience: ExperienceCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutCommunityInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    userId: string
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutCommunityInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCommunityInput, EventUncheckedCreateWithoutCommunityInput>
  }

  export type EventCreateManyCommunityInputEnvelope = {
    data: EventCreateManyCommunityInput | EventCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedCommunitiesInput = {
    update: XOR<UserUpdateWithoutCreatedCommunitiesInput, UserUncheckedUpdateWithoutCreatedCommunitiesInput>
    create: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCommunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCommunitiesInput, UserUncheckedUpdateWithoutCreatedCommunitiesInput>
  }

  export type UserUpdateWithoutCreatedCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutAdminOfCommunitiesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAdminOfCommunitiesInput, UserUncheckedUpdateWithoutAdminOfCommunitiesInput>
    create: XOR<UserCreateWithoutAdminOfCommunitiesInput, UserUncheckedCreateWithoutAdminOfCommunitiesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAdminOfCommunitiesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAdminOfCommunitiesInput, UserUncheckedUpdateWithoutAdminOfCommunitiesInput>
  }

  export type UserUpdateManyWithWhereWithoutAdminOfCommunitiesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAdminOfCommunitiesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutVerifiedInCommunitiesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutVerifiedInCommunitiesInput, UserUncheckedUpdateWithoutVerifiedInCommunitiesInput>
    create: XOR<UserCreateWithoutVerifiedInCommunitiesInput, UserUncheckedCreateWithoutVerifiedInCommunitiesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutVerifiedInCommunitiesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutVerifiedInCommunitiesInput, UserUncheckedUpdateWithoutVerifiedInCommunitiesInput>
  }

  export type UserUpdateManyWithWhereWithoutVerifiedInCommunitiesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutVerifiedInCommunitiesInput>
  }

  export type SkilltreeNodeUpsertWithWhereUniqueWithoutCommunityInput = {
    where: SkilltreeNodeWhereUniqueInput
    update: XOR<SkilltreeNodeUpdateWithoutCommunityInput, SkilltreeNodeUncheckedUpdateWithoutCommunityInput>
    create: XOR<SkilltreeNodeCreateWithoutCommunityInput, SkilltreeNodeUncheckedCreateWithoutCommunityInput>
  }

  export type SkilltreeNodeUpdateWithWhereUniqueWithoutCommunityInput = {
    where: SkilltreeNodeWhereUniqueInput
    data: XOR<SkilltreeNodeUpdateWithoutCommunityInput, SkilltreeNodeUncheckedUpdateWithoutCommunityInput>
  }

  export type SkilltreeNodeUpdateManyWithWhereWithoutCommunityInput = {
    where: SkilltreeNodeScalarWhereInput
    data: XOR<SkilltreeNodeUpdateManyMutationInput, SkilltreeNodeUncheckedUpdateManyWithoutCommunityInput>
  }

  export type SkilltreeNodeScalarWhereInput = {
    AND?: SkilltreeNodeScalarWhereInput | SkilltreeNodeScalarWhereInput[]
    OR?: SkilltreeNodeScalarWhereInput[]
    NOT?: SkilltreeNodeScalarWhereInput | SkilltreeNodeScalarWhereInput[]
    id?: StringFilter<"SkilltreeNode"> | string
    name?: StringFilter<"SkilltreeNode"> | string
    communityId?: StringFilter<"SkilltreeNode"> | string
    experienceId?: StringFilter<"SkilltreeNode"> | string
    nextId?: StringNullableFilter<"SkilltreeNode"> | string | null
    createdAt?: DateTimeFilter<"SkilltreeNode"> | Date | string
    updatedAt?: DateTimeFilter<"SkilltreeNode"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
  }

  export type PostUpdateManyWithWhereWithoutCommunityInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCommunityInput>
  }

  export type SkillForestUpsertWithWhereUniqueWithoutCommunitiesInput = {
    where: SkillForestWhereUniqueInput
    update: XOR<SkillForestUpdateWithoutCommunitiesInput, SkillForestUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<SkillForestCreateWithoutCommunitiesInput, SkillForestUncheckedCreateWithoutCommunitiesInput>
  }

  export type SkillForestUpdateWithWhereUniqueWithoutCommunitiesInput = {
    where: SkillForestWhereUniqueInput
    data: XOR<SkillForestUpdateWithoutCommunitiesInput, SkillForestUncheckedUpdateWithoutCommunitiesInput>
  }

  export type SkillForestUpdateManyWithWhereWithoutCommunitiesInput = {
    where: SkillForestScalarWhereInput
    data: XOR<SkillForestUpdateManyMutationInput, SkillForestUncheckedUpdateManyWithoutCommunitiesInput>
  }

  export type ExperienceUpsertWithWhereUniqueWithoutCommunityInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutCommunityInput, ExperienceUncheckedUpdateWithoutCommunityInput>
    create: XOR<ExperienceCreateWithoutCommunityInput, ExperienceUncheckedCreateWithoutCommunityInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutCommunityInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutCommunityInput, ExperienceUncheckedUpdateWithoutCommunityInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutCommunityInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutCommunityInput>
  }

  export type LeaderboardUpsertWithWhereUniqueWithoutCommunityInput = {
    where: LeaderboardWhereUniqueInput
    update: XOR<LeaderboardUpdateWithoutCommunityInput, LeaderboardUncheckedUpdateWithoutCommunityInput>
    create: XOR<LeaderboardCreateWithoutCommunityInput, LeaderboardUncheckedCreateWithoutCommunityInput>
  }

  export type LeaderboardUpdateWithWhereUniqueWithoutCommunityInput = {
    where: LeaderboardWhereUniqueInput
    data: XOR<LeaderboardUpdateWithoutCommunityInput, LeaderboardUncheckedUpdateWithoutCommunityInput>
  }

  export type LeaderboardUpdateManyWithWhereWithoutCommunityInput = {
    where: LeaderboardScalarWhereInput
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyWithoutCommunityInput>
  }

  export type EventUpsertWithWhereUniqueWithoutCommunityInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCommunityInput, EventUncheckedUpdateWithoutCommunityInput>
    create: XOR<EventCreateWithoutCommunityInput, EventUncheckedCreateWithoutCommunityInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCommunityInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCommunityInput, EventUncheckedUpdateWithoutCommunityInput>
  }

  export type EventUpdateManyWithWhereWithoutCommunityInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunityCreateWithoutSkillTreeNodesInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutSkillTreeNodesInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutSkillTreeNodesInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutSkillTreeNodesInput, CommunityUncheckedCreateWithoutSkillTreeNodesInput>
  }

  export type ExperienceCreateWithoutSkillTreeNodesInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutExperiencesInput
    user: UserCreateNestedOneWithoutExperiencesInput
    leaderboards?: LeaderboardCreateNestedManyWithoutExperiencesInput
    events?: EventCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateWithoutSkillTreeNodesInput = {
    id?: string
    amount: number
    communityId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutExperiencesInput
    events?: EventUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceCreateOrConnectWithoutSkillTreeNodesInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutSkillTreeNodesInput, ExperienceUncheckedCreateWithoutSkillTreeNodesInput>
  }

  export type SkilltreeNodeCreateWithoutPreviousInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutSkillTreeNodesInput
    experience: ExperienceCreateNestedOneWithoutSkillTreeNodesInput
    next?: SkilltreeNodeCreateNestedOneWithoutPreviousInput
  }

  export type SkilltreeNodeUncheckedCreateWithoutPreviousInput = {
    id?: string
    name: string
    communityId: string
    experienceId: string
    nextId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkilltreeNodeCreateOrConnectWithoutPreviousInput = {
    where: SkilltreeNodeWhereUniqueInput
    create: XOR<SkilltreeNodeCreateWithoutPreviousInput, SkilltreeNodeUncheckedCreateWithoutPreviousInput>
  }

  export type SkilltreeNodeCreateWithoutNextInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutSkillTreeNodesInput
    experience: ExperienceCreateNestedOneWithoutSkillTreeNodesInput
    previous?: SkilltreeNodeCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeUncheckedCreateWithoutNextInput = {
    id?: string
    name: string
    communityId: string
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    previous?: SkilltreeNodeUncheckedCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeCreateOrConnectWithoutNextInput = {
    where: SkilltreeNodeWhereUniqueInput
    create: XOR<SkilltreeNodeCreateWithoutNextInput, SkilltreeNodeUncheckedCreateWithoutNextInput>
  }

  export type CommunityUpsertWithoutSkillTreeNodesInput = {
    update: XOR<CommunityUpdateWithoutSkillTreeNodesInput, CommunityUncheckedUpdateWithoutSkillTreeNodesInput>
    create: XOR<CommunityCreateWithoutSkillTreeNodesInput, CommunityUncheckedCreateWithoutSkillTreeNodesInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutSkillTreeNodesInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutSkillTreeNodesInput, CommunityUncheckedUpdateWithoutSkillTreeNodesInput>
  }

  export type CommunityUpdateWithoutSkillTreeNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutSkillTreeNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type ExperienceUpsertWithoutSkillTreeNodesInput = {
    update: XOR<ExperienceUpdateWithoutSkillTreeNodesInput, ExperienceUncheckedUpdateWithoutSkillTreeNodesInput>
    create: XOR<ExperienceCreateWithoutSkillTreeNodesInput, ExperienceUncheckedCreateWithoutSkillTreeNodesInput>
    where?: ExperienceWhereInput
  }

  export type ExperienceUpdateToOneWithWhereWithoutSkillTreeNodesInput = {
    where?: ExperienceWhereInput
    data: XOR<ExperienceUpdateWithoutSkillTreeNodesInput, ExperienceUncheckedUpdateWithoutSkillTreeNodesInput>
  }

  export type ExperienceUpdateWithoutSkillTreeNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutExperiencesNestedInput
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutExperiencesNestedInput
    events?: EventUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateWithoutSkillTreeNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutExperiencesNestedInput
    events?: EventUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type SkilltreeNodeUpsertWithoutPreviousInput = {
    update: XOR<SkilltreeNodeUpdateWithoutPreviousInput, SkilltreeNodeUncheckedUpdateWithoutPreviousInput>
    create: XOR<SkilltreeNodeCreateWithoutPreviousInput, SkilltreeNodeUncheckedCreateWithoutPreviousInput>
    where?: SkilltreeNodeWhereInput
  }

  export type SkilltreeNodeUpdateToOneWithWhereWithoutPreviousInput = {
    where?: SkilltreeNodeWhereInput
    data: XOR<SkilltreeNodeUpdateWithoutPreviousInput, SkilltreeNodeUncheckedUpdateWithoutPreviousInput>
  }

  export type SkilltreeNodeUpdateWithoutPreviousInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    experience?: ExperienceUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    next?: SkilltreeNodeUpdateOneWithoutPreviousNestedInput
  }

  export type SkilltreeNodeUncheckedUpdateWithoutPreviousInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkilltreeNodeUpsertWithoutNextInput = {
    update: XOR<SkilltreeNodeUpdateWithoutNextInput, SkilltreeNodeUncheckedUpdateWithoutNextInput>
    create: XOR<SkilltreeNodeCreateWithoutNextInput, SkilltreeNodeUncheckedCreateWithoutNextInput>
    where?: SkilltreeNodeWhereInput
  }

  export type SkilltreeNodeUpdateToOneWithWhereWithoutNextInput = {
    where?: SkilltreeNodeWhereInput
    data: XOR<SkilltreeNodeUpdateWithoutNextInput, SkilltreeNodeUncheckedUpdateWithoutNextInput>
  }

  export type SkilltreeNodeUpdateWithoutNextInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    experience?: ExperienceUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    previous?: SkilltreeNodeUpdateOneWithoutNextNestedInput
  }

  export type SkilltreeNodeUncheckedUpdateWithoutNextInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previous?: SkilltreeNodeUncheckedUpdateOneWithoutNextNestedInput
  }

  export type CommunityCreateWithoutPostsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutPostsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type FeedbackCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutPostInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutPostInput, FeedbackUncheckedCreateWithoutPostInput>
  }

  export type FeedbackCreateManyPostInputEnvelope = {
    data: FeedbackCreateManyPostInput | FeedbackCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithoutPostsInput = {
    update: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutPostsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type CommunityUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeedbackUpsertWithWhereUniqueWithoutPostInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutPostInput, FeedbackUncheckedUpdateWithoutPostInput>
    create: XOR<FeedbackCreateWithoutPostInput, FeedbackUncheckedCreateWithoutPostInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutPostInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutPostInput, FeedbackUncheckedUpdateWithoutPostInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutPostInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutSkillForestsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillForestsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillForestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillForestsInput, UserUncheckedCreateWithoutSkillForestsInput>
  }

  export type CommunityCreateWithoutSkillForestsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutSkillForestsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutSkillForestsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutSkillForestsInput, CommunityUncheckedCreateWithoutSkillForestsInput>
  }

  export type UserCreateWithoutFollowedSkillForestsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowedSkillForestsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowedSkillForestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedSkillForestsInput, UserUncheckedCreateWithoutFollowedSkillForestsInput>
  }

  export type UserUpsertWithoutSkillForestsInput = {
    update: XOR<UserUpdateWithoutSkillForestsInput, UserUncheckedUpdateWithoutSkillForestsInput>
    create: XOR<UserCreateWithoutSkillForestsInput, UserUncheckedCreateWithoutSkillForestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillForestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillForestsInput, UserUncheckedUpdateWithoutSkillForestsInput>
  }

  export type UserUpdateWithoutSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithWhereUniqueWithoutSkillForestsInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutSkillForestsInput, CommunityUncheckedUpdateWithoutSkillForestsInput>
    create: XOR<CommunityCreateWithoutSkillForestsInput, CommunityUncheckedCreateWithoutSkillForestsInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutSkillForestsInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutSkillForestsInput, CommunityUncheckedUpdateWithoutSkillForestsInput>
  }

  export type CommunityUpdateManyWithWhereWithoutSkillForestsInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutSkillForestsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutFollowedSkillForestsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowedSkillForestsInput, UserUncheckedUpdateWithoutFollowedSkillForestsInput>
    create: XOR<UserCreateWithoutFollowedSkillForestsInput, UserUncheckedCreateWithoutFollowedSkillForestsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowedSkillForestsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowedSkillForestsInput, UserUncheckedUpdateWithoutFollowedSkillForestsInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowedSkillForestsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowedSkillForestsInput>
  }

  export type CommunityCreateWithoutExperiencesInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutExperiencesInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutExperiencesInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutExperiencesInput, CommunityUncheckedCreateWithoutExperiencesInput>
  }

  export type UserCreateWithoutExperiencesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExperiencesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExperiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
  }

  export type SkilltreeNodeCreateWithoutExperienceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutSkillTreeNodesInput
    next?: SkilltreeNodeCreateNestedOneWithoutPreviousInput
    previous?: SkilltreeNodeCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeUncheckedCreateWithoutExperienceInput = {
    id?: string
    name: string
    communityId: string
    nextId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    previous?: SkilltreeNodeUncheckedCreateNestedOneWithoutNextInput
  }

  export type SkilltreeNodeCreateOrConnectWithoutExperienceInput = {
    where: SkilltreeNodeWhereUniqueInput
    create: XOR<SkilltreeNodeCreateWithoutExperienceInput, SkilltreeNodeUncheckedCreateWithoutExperienceInput>
  }

  export type SkilltreeNodeCreateManyExperienceInputEnvelope = {
    data: SkilltreeNodeCreateManyExperienceInput | SkilltreeNodeCreateManyExperienceInput[]
    skipDuplicates?: boolean
  }

  export type LeaderboardCreateWithoutExperiencesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutLeaderboardsInput
    users?: UserCreateNestedManyWithoutLeaderboardEntriesInput
  }

  export type LeaderboardUncheckedCreateWithoutExperiencesInput = {
    id?: string
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutLeaderboardEntriesInput
  }

  export type LeaderboardCreateOrConnectWithoutExperiencesInput = {
    where: LeaderboardWhereUniqueInput
    create: XOR<LeaderboardCreateWithoutExperiencesInput, LeaderboardUncheckedCreateWithoutExperiencesInput>
  }

  export type EventCreateWithoutExperienceInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutEventsInput
    user: UserCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutExperienceInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    communityId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutExperienceInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutExperienceInput, EventUncheckedCreateWithoutExperienceInput>
  }

  export type EventCreateManyExperienceInputEnvelope = {
    data: EventCreateManyExperienceInput | EventCreateManyExperienceInput[]
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithoutExperiencesInput = {
    update: XOR<CommunityUpdateWithoutExperiencesInput, CommunityUncheckedUpdateWithoutExperiencesInput>
    create: XOR<CommunityCreateWithoutExperiencesInput, CommunityUncheckedCreateWithoutExperiencesInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutExperiencesInput, CommunityUncheckedUpdateWithoutExperiencesInput>
  }

  export type CommunityUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithoutExperiencesInput = {
    update: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkilltreeNodeUpsertWithWhereUniqueWithoutExperienceInput = {
    where: SkilltreeNodeWhereUniqueInput
    update: XOR<SkilltreeNodeUpdateWithoutExperienceInput, SkilltreeNodeUncheckedUpdateWithoutExperienceInput>
    create: XOR<SkilltreeNodeCreateWithoutExperienceInput, SkilltreeNodeUncheckedCreateWithoutExperienceInput>
  }

  export type SkilltreeNodeUpdateWithWhereUniqueWithoutExperienceInput = {
    where: SkilltreeNodeWhereUniqueInput
    data: XOR<SkilltreeNodeUpdateWithoutExperienceInput, SkilltreeNodeUncheckedUpdateWithoutExperienceInput>
  }

  export type SkilltreeNodeUpdateManyWithWhereWithoutExperienceInput = {
    where: SkilltreeNodeScalarWhereInput
    data: XOR<SkilltreeNodeUpdateManyMutationInput, SkilltreeNodeUncheckedUpdateManyWithoutExperienceInput>
  }

  export type LeaderboardUpsertWithWhereUniqueWithoutExperiencesInput = {
    where: LeaderboardWhereUniqueInput
    update: XOR<LeaderboardUpdateWithoutExperiencesInput, LeaderboardUncheckedUpdateWithoutExperiencesInput>
    create: XOR<LeaderboardCreateWithoutExperiencesInput, LeaderboardUncheckedCreateWithoutExperiencesInput>
  }

  export type LeaderboardUpdateWithWhereUniqueWithoutExperiencesInput = {
    where: LeaderboardWhereUniqueInput
    data: XOR<LeaderboardUpdateWithoutExperiencesInput, LeaderboardUncheckedUpdateWithoutExperiencesInput>
  }

  export type LeaderboardUpdateManyWithWhereWithoutExperiencesInput = {
    where: LeaderboardScalarWhereInput
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyWithoutExperiencesInput>
  }

  export type EventUpsertWithWhereUniqueWithoutExperienceInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutExperienceInput, EventUncheckedUpdateWithoutExperienceInput>
    create: XOR<EventCreateWithoutExperienceInput, EventUncheckedCreateWithoutExperienceInput>
  }

  export type EventUpdateWithWhereUniqueWithoutExperienceInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutExperienceInput, EventUncheckedUpdateWithoutExperienceInput>
  }

  export type EventUpdateManyWithWhereWithoutExperienceInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutExperienceInput>
  }

  export type CommunityCreateWithoutLeaderboardsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    events?: EventCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutLeaderboardsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutLeaderboardsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutLeaderboardsInput, CommunityUncheckedCreateWithoutLeaderboardsInput>
  }

  export type UserCreateWithoutLeaderboardEntriesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaderboardEntriesInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaderboardEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
  }

  export type ExperienceCreateWithoutLeaderboardsInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutExperiencesInput
    user: UserCreateNestedOneWithoutExperiencesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutExperienceInput
    events?: EventCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateWithoutLeaderboardsInput = {
    id?: string
    amount: number
    communityId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutExperienceInput
    events?: EventUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceCreateOrConnectWithoutLeaderboardsInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutLeaderboardsInput, ExperienceUncheckedCreateWithoutLeaderboardsInput>
  }

  export type CommunityUpsertWithoutLeaderboardsInput = {
    update: XOR<CommunityUpdateWithoutLeaderboardsInput, CommunityUncheckedUpdateWithoutLeaderboardsInput>
    create: XOR<CommunityCreateWithoutLeaderboardsInput, CommunityUncheckedCreateWithoutLeaderboardsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutLeaderboardsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutLeaderboardsInput, CommunityUncheckedUpdateWithoutLeaderboardsInput>
  }

  export type CommunityUpdateWithoutLeaderboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutLeaderboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutLeaderboardEntriesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLeaderboardEntriesInput, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
    create: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLeaderboardEntriesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLeaderboardEntriesInput, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type UserUpdateManyWithWhereWithoutLeaderboardEntriesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLeaderboardEntriesInput>
  }

  export type ExperienceUpsertWithWhereUniqueWithoutLeaderboardsInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutLeaderboardsInput, ExperienceUncheckedUpdateWithoutLeaderboardsInput>
    create: XOR<ExperienceCreateWithoutLeaderboardsInput, ExperienceUncheckedCreateWithoutLeaderboardsInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutLeaderboardsInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutLeaderboardsInput, ExperienceUncheckedUpdateWithoutLeaderboardsInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutLeaderboardsInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutLeaderboardsInput>
  }

  export type UserCreateWithoutFeedbackInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
  }

  export type PostCreateWithoutFeedbackInput = {
    id?: string
    text: string
    attachment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutFeedbackInput = {
    id?: string
    text: string
    attachment?: string | null
    communityId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutFeedbackInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutFeedbackInput, PostUncheckedCreateWithoutFeedbackInput>
  }

  export type UserUpsertWithoutFeedbackInput = {
    update: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
  }

  export type UserUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutFeedbackInput = {
    update: XOR<PostUpdateWithoutFeedbackInput, PostUncheckedUpdateWithoutFeedbackInput>
    create: XOR<PostCreateWithoutFeedbackInput, PostUncheckedCreateWithoutFeedbackInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutFeedbackInput, PostUncheckedUpdateWithoutFeedbackInput>
  }

  export type PostUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateWithoutEventsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCommunitiesInput
    admins?: UserCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: UserUncheckedCreateNestedManyWithoutAdminOfCommunitiesInput
    users?: UserUncheckedCreateNestedManyWithoutVerifiedInCommunitiesInput
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutCommunitiesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutCommunityInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutEventsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutEventsInput, CommunityUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityCreateNestedManyWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardCreateNestedManyWithoutUsersInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    hash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatorInput
    adminOfCommunities?: CommunityUncheckedCreateNestedManyWithoutAdminsInput
    verifiedInCommunities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skillForests?: SkillForestUncheckedCreateNestedManyWithoutUserInput
    followedSkillForests?: SkillForestUncheckedCreateNestedManyWithoutFollowersInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardUncheckedCreateNestedManyWithoutUsersInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type ExperienceCreateWithoutEventsInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutExperiencesInput
    user: UserCreateNestedOneWithoutExperiencesInput
    skillTreeNodes?: SkilltreeNodeCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardCreateNestedManyWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateWithoutEventsInput = {
    id?: string
    amount: number
    communityId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedCreateNestedManyWithoutExperienceInput
    leaderboards?: LeaderboardUncheckedCreateNestedManyWithoutExperiencesInput
  }

  export type ExperienceCreateOrConnectWithoutEventsInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutEventsInput, ExperienceUncheckedCreateWithoutEventsInput>
  }

  export type CommunityUpsertWithoutEventsInput = {
    update: XOR<CommunityUpdateWithoutEventsInput, CommunityUncheckedUpdateWithoutEventsInput>
    create: XOR<CommunityCreateWithoutEventsInput, CommunityUncheckedCreateWithoutEventsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutEventsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutEventsInput, CommunityUncheckedUpdateWithoutEventsInput>
  }

  export type CommunityUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExperienceUpsertWithoutEventsInput = {
    update: XOR<ExperienceUpdateWithoutEventsInput, ExperienceUncheckedUpdateWithoutEventsInput>
    create: XOR<ExperienceCreateWithoutEventsInput, ExperienceUncheckedCreateWithoutEventsInput>
    where?: ExperienceWhereInput
  }

  export type ExperienceUpdateToOneWithWhereWithoutEventsInput = {
    where?: ExperienceWhereInput
    data: XOR<ExperienceUpdateWithoutEventsInput, ExperienceUncheckedUpdateWithoutEventsInput>
  }

  export type ExperienceUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutExperiencesNestedInput
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutExperiencesNestedInput
  }

  export type ExperienceUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutExperiencesNestedInput
  }

  export type CommunityCreateManyCreatorInput = {
    id?: string
    name: string
    skill?: CommunityCreateskillInput | string[]
    icon?: string | null
    tags?: CommunityCreatetagsInput | string[]
    description?: string | null
    communityExperience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    text: string
    attachment?: string | null
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillForestCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceCreateManyUserInput = {
    id?: string
    amount: number
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyUserInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    communityId: string
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutCommunitiesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    feedback?: FeedbackUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillForestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutSkillForestsNestedInput
    followers?: UserUpdateManyWithoutFollowedSkillForestsNestedInput
  }

  export type SkillForestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutSkillForestsNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowedSkillForestsNestedInput
  }

  export type SkillForestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillForestUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillForestsNestedInput
    communities?: CommunityUpdateManyWithoutSkillForestsNestedInput
  }

  export type SkillForestUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutSkillForestsNestedInput
  }

  export type SkillForestUncheckedUpdateManyWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutExperiencesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutExperiencesNestedInput
    events?: EventUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutExperiencesNestedInput
    events?: EventUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutLeaderboardsNestedInput
    experiences?: ExperienceUpdateManyWithoutLeaderboardsNestedInput
  }

  export type LeaderboardUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: ExperienceUncheckedUpdateManyWithoutLeaderboardsNestedInput
  }

  export type LeaderboardUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutEventsNestedInput
    experience?: ExperienceUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkilltreeNodeCreateManyCommunityInput = {
    id?: string
    name: string
    experienceId: string
    nextId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyCommunityInput = {
    id?: string
    text: string
    attachment?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceCreateManyCommunityInput = {
    id?: string
    amount: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardCreateManyCommunityInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyCommunityInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    userId: string
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutAdminOfCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminOfCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAdminOfCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutVerifiedInCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedInCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutVerifiedInCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkilltreeNodeUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    next?: SkilltreeNodeUpdateOneWithoutPreviousNestedInput
    previous?: SkilltreeNodeUpdateOneWithoutNextNestedInput
  }

  export type SkilltreeNodeUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previous?: SkilltreeNodeUncheckedUpdateOneWithoutNextNestedInput
  }

  export type SkilltreeNodeUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    feedback?: FeedbackUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillForestUpdateWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillForestsNestedInput
    followers?: UserUpdateManyWithoutFollowedSkillForestsNestedInput
  }

  export type SkillForestUncheckedUpdateWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: UserUncheckedUpdateManyWithoutFollowedSkillForestsNestedInput
  }

  export type SkillForestUncheckedUpdateManyWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutExperiencesNestedInput
    events?: EventUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutExperienceNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutExperiencesNestedInput
    events?: EventUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutLeaderboardEntriesNestedInput
    experiences?: ExperienceUpdateManyWithoutLeaderboardsNestedInput
  }

  export type LeaderboardUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutLeaderboardEntriesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutLeaderboardsNestedInput
  }

  export type LeaderboardUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    experience?: ExperienceUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUpdateWithoutSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCommunitiesNestedInput
    admins?: UserUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    experiences?: ExperienceUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUpdateManyWithoutCommunityNestedInput
    events?: EventUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: UserUncheckedUpdateManyWithoutAdminOfCommunitiesNestedInput
    users?: UserUncheckedUpdateManyWithoutVerifiedInCommunitiesNestedInput
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutCommunityNestedInput
    leaderboards?: LeaderboardUncheckedUpdateManyWithoutCommunityNestedInput
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill?: CommunityUpdateskillInput | string[]
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CommunityUpdatetagsInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    communityExperience?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFollowedSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowedSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardUncheckedUpdateManyWithoutUsersNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowedSkillForestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkilltreeNodeCreateManyExperienceInput = {
    id?: string
    name: string
    communityId: string
    nextId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyExperienceInput = {
    id?: string
    name: string
    rankedStatus?: boolean | null
    experiencePayout?: number | null
    communityId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkilltreeNodeUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutSkillTreeNodesNestedInput
    next?: SkilltreeNodeUpdateOneWithoutPreviousNestedInput
    previous?: SkilltreeNodeUpdateOneWithoutNextNestedInput
  }

  export type SkilltreeNodeUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previous?: SkilltreeNodeUncheckedUpdateOneWithoutNextNestedInput
  }

  export type SkilltreeNodeUncheckedUpdateManyWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutLeaderboardsNestedInput
    users?: UserUpdateManyWithoutLeaderboardEntriesNestedInput
  }

  export type LeaderboardUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutLeaderboardEntriesNestedInput
  }

  export type LeaderboardUncheckedUpdateManyWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutEventsNestedInput
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rankedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    experiencePayout?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUpdateManyWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatorNestedInput
    adminOfCommunities?: CommunityUncheckedUpdateManyWithoutAdminsNestedInput
    verifiedInCommunities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    skillForests?: SkillForestUncheckedUpdateManyWithoutUserNestedInput
    followedSkillForests?: SkillForestUncheckedUpdateManyWithoutFollowersNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUpdateWithoutLeaderboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutExperiencesNestedInput
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput
    skillTreeNodes?: SkilltreeNodeUpdateManyWithoutExperienceNestedInput
    events?: EventUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateWithoutLeaderboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTreeNodes?: SkilltreeNodeUncheckedUpdateManyWithoutExperienceNestedInput
    events?: EventUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateManyWithoutLeaderboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    communityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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