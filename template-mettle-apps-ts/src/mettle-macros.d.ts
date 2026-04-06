declare function $signal<T>(value: T): import('mettle').Signal<T>;
declare function $signal<T = undefined>(): import('mettle').Signal<T | undefined>;
