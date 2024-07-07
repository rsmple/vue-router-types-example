
declare type Split<Value extends string, Divider extends string> =
  Value extends `${ infer Start }${ Divider }${ infer End }`
  ? [...Split<Start, Divider>, ...Split<End, Divider>]
  : Value extends '' ? [] : [Value]
