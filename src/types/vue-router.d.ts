import 'vue-router'

declare module 'vue-router' {
  VueRouter

  interface RouteMeta extends RouteMetaCustom {
    noAuth?: boolean
  }

  declare interface RouterLinkProps extends RouterLinkProps {
    to: RouteLocationCurrent
    replace?: boolean
  }

  declare interface NavigationGuard {
    (from: RouteLocationCurrentMatched, to: RouteLocationCurrentMatched, next: import('vue-router').NavigationGuardNext): import('vue-router').NavigationGuardReturn | Promise<import('vue-router').NavigationGuardReturn>
  }

  interface TypesConfig {
    $route: RouteLocationCurrentMatched & {
      redirectedFrom: RouteLocationCurrentMatched | undefined,
    }

    $router: RouterWithParams
  }

  function useRouter(): RouterWithParams

  function useRoute<T extends RouteLocationCurrent['name']>(): GetRouteMatchedByName<T> & {
    redirectedFrom: RouteLocationCurrentMatched | undefined,
  }
}

type ForParams<List, Result = NonNullable<unknown>> = List extends [infer Current, ...infer Tail]
  ? Current extends `:${ infer Param }?`
  ? ForParams<Tail, {
    [Key in Param | keyof Result]: Key extends keyof Result
    ? Result[Key]
    : Param extends `${ string }Id` ? number | string | undefined : string | undefined
  }>
  : Current extends `:${ infer Param }`
  ? ForParams<Tail, {
    [Key in Param | keyof Result]: Key extends keyof Result
    ? Result[Key]
    : Param extends `${ string }Id` ? number | string : string
  }>
  : ForParams<Tail, Result>
  : Result

type GetQueryType<Head> = Head['meta'] extends object
  ? Head['meta']['defaultQueryParams'] extends object
  ? {[Key in keyof Head['meta']['defaultQueryParams']]: string | number}
  : NonNullable<unknown>
  : NonNullable<unknown>

type GetMetaType<Head> = Head['meta'] extends object
  ? {
    [Key in keyof RouteMetaCustom]: Key extends keyof Head['meta']
    ? Head['meta'][Key]
    : RouteMetaCustom[Key]
  }
  : RouteMetaCustom

type GetRoute<FullPath, Head> = FullPath extends `${ string }:${ string }` ? {
  params: ForParams<Split<FullPath, '/'>>
  name: Head['name']
  hash?: string
  query?: GetQueryType<Head>
  meta?: GetMetaType<Head>
} : {
  name: Head['name']
  hash?: string
  query?: GetQueryType<Head>
  meta?: GetMetaType<Head>
}

type ProccessRoutes<T, Path extends string = ''> =
  T extends [infer Head, ...infer Tail]
  ? Head extends import('vue-router').RouteRecordRaw
  ? Head['name'] extends string
  ? [
    GetRoute<`${ Path }/${ Head['path'] }`, Head>,
    ...ProccessRoutes<Head['children'], `${ Path }/${ Head['path'] }`>,
    ...ProccessRoutes<Tail, Path>
  ]
  : [
    ...ProccessRoutes<Head['children'], `${ Path }/${ Head['path'] }`>,
    ...ProccessRoutes<Tail, Path>,
  ]
  : ProccessRoutes<Tail, Path>
  : []

type GetRoutesMatched<T> = T extends [infer Head, ...infer Tail]
  ? [
    {
      [Key in keyof Head | keyof import('vue-router').RouteLocationMatched]-?: Key extends keyof Head
      ? NonNullable<Head[Key]>
      : import('vue-router').RouteLocationMatched[Key]
    },
    ...GetRoutesMatched<Tail>
  ]
  : []

type RoutesProccessed = ProccessRoutes<typeof import('@/router/index').routes>
type RoutesProccessedMatched = GetRoutesMatched<RoutesProccessed>

declare type RouteLocationCurrent = RoutesProccessed[number]
declare type RouteLocationCurrentMatched = RoutesProccessedMatched[number]

type GetRouteByName<Name extends RouteLocationCurrent['name'], List = RoutesProccessed, Result = NonNullable<unknown>> = List extends [infer Head, ...infer Tail]
  ? Head['name'] extends Name
  ? GetRouteByName<Name, Tail, {
    [Key in keyof Head | keyof Result]: Key extends keyof Head
    ? Key extends keyof Result
    ? Key extends 'params' | 'query' | 'meta'
    ? {
      [Param in keyof Head[Key] | keyof Result[Key]]: Param extends keyof Head[Key]
      ? Param extends keyof Result[Key]
      ? Head[Key][Param] | Result[Key][Param]
      : Head[Key][Param]
      : Result[Key][Param]
    }
    : Head[Key] | Result[Key]
    : Head[Key]
    : Result[Key]
  }>
  : GetRouteByName<Name, Tail, Result>
  : Result

declare type GetRouteMatchedByName<Name extends RouteLocationCurrent['name']> = GetRouteByName<Name, RoutesProccessedMatched>
declare type GetRouteByName<Name extends RouteLocationCurrent['name']> = GetRouteByName<Name, RoutesProccessed>

type GetRoutesWithParams<Current> = Current extends [infer Head, ...infer Tail]
  ? Head['params'] extends object
  ? [Head, ...GetRoutesWithParams<Tail>]
  : GetRoutesWithParams<Tail>
  : []

type RoutesWithParams = GetRoutesWithParams<RoutesProccessed>

type Params = RoutesWithParams[number]['params']

type NamelessRoute = {
  query?: import('vue-router').LocationQueryRaw
  hash?: string
}

type RouterWithParams = {
  push(to: RouteLocationCurrent | NamelessRoute): ReturnType<import('vue-router').Router['push']>

  replace(to: RouteLocationCurrent | NamelessRoute): ReturnType<import('vue-router').Router['replace']>

  resolve<T extends string | RouteLocationCurrent>(to: T, currentLocation?: RouteLocationCurrentMatched): T extends {name: infer Name} ? GetRouteMatchedByName<Name> : RouteLocationCurrentMatched

  back(): ReturnType<import('vue-router').Router['back']>
}

interface RouteMetaCustom {
  defaultQueryParams?: LocationQueryRaw
}