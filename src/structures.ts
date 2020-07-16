import {
  TypeSystem,
  Type,
  BooleanOperatorName,
  OperatorCode,
  OutputType,
  IntegerOperatorName,
  FloatOperatorName,
  StringOperatorName,
  ArrayOperatorName,
  MapOperatorName,
  BytesOperatorName,
  OperatorInfos,
  MirArgumentType,
  CacheItem,
  CacheRef,
  AggregationTallyFilter,
  AggregationTallyReducer,
  AggregationTallyFilterDescriptions,
  AggregationTallyReducerDescriptions,
} from './types'
import { getEnumNames } from './utils'

export const typeSystem: TypeSystem = {
  [Type.Array]: {
    [ArrayOperatorName.Count]: [OperatorCode.ArrayCount, OutputType.Integer],
    [ArrayOperatorName.Filter]: [OperatorCode.ArrayFilter, OutputType.Same],
    [ArrayOperatorName.Flatten]: [OperatorCode.ArrayFlatten, OutputType.Array],
    [ArrayOperatorName.GetArray]: [OperatorCode.ArrayGetArray, OutputType.Array],
    [ArrayOperatorName.GetBoolean]: [OperatorCode.ArrayGetBoolean, OutputType.Boolean],
    [ArrayOperatorName.GetBytes]: [OperatorCode.ArrayGetBytes, OutputType.Bytes],
    [ArrayOperatorName.GetFloat]: [OperatorCode.ArrayGetFloat, OutputType.Float],
    [ArrayOperatorName.GetInteger]: [OperatorCode.ArrayGetInteger, OutputType.Integer],
    [ArrayOperatorName.GetMap]: [OperatorCode.ArrayGetMap, OutputType.Map],
    [ArrayOperatorName.GetString]: [OperatorCode.ArrayGetString, OutputType.String],
    [ArrayOperatorName.Map]: [OperatorCode.ArrayMap, OutputType.ArrayMap],
    [ArrayOperatorName.Reduce]: [OperatorCode.ArrayReduce, OutputType.Inner],
    [ArrayOperatorName.Some]: [OperatorCode.ArraySome, OutputType.FilterOutput],
    [ArrayOperatorName.Sort]: [OperatorCode.ArraySort, OutputType.Same],
    [ArrayOperatorName.Take]: [OperatorCode.ArrayTake, OutputType.Array],
  },
  [Type.Boolean]: {
    [BooleanOperatorName.AsString]: [OperatorCode.BooleanAsString, OutputType.String],
    [BooleanOperatorName.Match]: [OperatorCode.BooleanMatch, OutputType.MatchOutput],
    [BooleanOperatorName.Negate]: [OperatorCode.BooleanNegate, OutputType.Boolean],
  },
  [Type.Bytes]: {
    [BytesOperatorName.AsString]: [OperatorCode.BytesAsString, OutputType.String],
    [BytesOperatorName.Hash]: [OperatorCode.BytesHash, OutputType.Bytes],
  },
  [Type.Integer]: {
    [IntegerOperatorName.Absolute]: [OperatorCode.IntegerAbsolute, OutputType.Integer],
    [IntegerOperatorName.AsFloat]: [OperatorCode.IntegerAsFloat, OutputType.Float],
    [IntegerOperatorName.AsString]: [OperatorCode.IntegerAsString, OutputType.String],
    [IntegerOperatorName.GreaterThan]: [OperatorCode.IntegerGreaterThan, OutputType.Boolean],
    [IntegerOperatorName.LessThan]: [OperatorCode.IntegerLessThan, OutputType.Boolean],
    [IntegerOperatorName.Match]: [OperatorCode.IntegerMatch, OutputType.MatchOutput],
    [IntegerOperatorName.Modulo]: [OperatorCode.IntegerModulo, OutputType.Integer],
    [IntegerOperatorName.Multiply]: [OperatorCode.IntegerMultiply, OutputType.Integer],
    [IntegerOperatorName.Negate]: [OperatorCode.IntegerNegate, OutputType.Integer],
    [IntegerOperatorName.Power]: [OperatorCode.IntegerPower, OutputType.Integer],
    [IntegerOperatorName.Reciprocal]: [OperatorCode.IntegerReciprocal, OutputType.Float],
    [IntegerOperatorName.Sum]: [OperatorCode.IntegerSum, OutputType.Integer],
  },
  [Type.Float]: {
    [FloatOperatorName.Absolute]: [OperatorCode.FloatAbsolute, OutputType.Float],
    [FloatOperatorName.AsString]: [OperatorCode.FloatAsString, OutputType.String],
    [FloatOperatorName.Ceiling]: [OperatorCode.FloatCeiling, OutputType.Integer],
    [FloatOperatorName.GreaterThan]: [OperatorCode.FloatGraterThan, OutputType.Boolean],
    [FloatOperatorName.Floor]: [OperatorCode.FloatFloor, OutputType.Integer],
    [FloatOperatorName.LessThan]: [OperatorCode.FloatLessThan, OutputType.Boolean],
    [FloatOperatorName.Modulo]: [OperatorCode.FloatModulo, OutputType.Float],
    [FloatOperatorName.Multiply]: [OperatorCode.FloatMultiply, OutputType.Float],
    [FloatOperatorName.Negate]: [OperatorCode.FloatNegate, OutputType.Float],
    [FloatOperatorName.Power]: [OperatorCode.FloatPower, OutputType.Float],
    [FloatOperatorName.Reciprocal]: [OperatorCode.FloatReciprocal, OutputType.Float],
    [FloatOperatorName.Round]: [OperatorCode.FloatRound, OutputType.Integer],
    [FloatOperatorName.Sum]: [OperatorCode.Floatsum, OutputType.Float],
    [FloatOperatorName.Truncate]: [OperatorCode.FloatTruncate, OutputType.Integer],
  },
  [Type.Map]: {
    [MapOperatorName.Entries]: [OperatorCode.MapEntries, OutputType.Bytes],
    [MapOperatorName.GetArray]: [OperatorCode.MapGetArray, OutputType.Array],
    [MapOperatorName.GetBoolean]: [OperatorCode.MapGetBoolean, OutputType.Boolean],
    [MapOperatorName.GetBytes]: [OperatorCode.MapGetBytes, OutputType.Bytes],
    [MapOperatorName.GetFloat]: [OperatorCode.MapGetFloat, OutputType.Float],
    [MapOperatorName.GetInteger]: [OperatorCode.MapGetInteger, OutputType.Integer],
    [MapOperatorName.GetMap]: [OperatorCode.MapGetMap, OutputType.Map],
    [MapOperatorName.GetString]: [OperatorCode.MapGetString, OutputType.String],
    [MapOperatorName.Keys]: [OperatorCode.MapKeys, OutputType.ArrayString],
    [MapOperatorName.valuesArray]: [OperatorCode.MapValuesArray, OutputType.ArrayArray],
    [MapOperatorName.valuesBoolean]: [OperatorCode.MapValuesBoolean, OutputType.ArrayBoolean],
    [MapOperatorName.valuesBytes]: [OperatorCode.MapValuesBytes, OutputType.ArrayBytes],
    [MapOperatorName.valuesFloat]: [OperatorCode.MapValuesFloat, OutputType.ArrayFloat],
    [MapOperatorName.valuesInteger]: [OperatorCode.MapValuesInteger, OutputType.ArrayInteger],
    [MapOperatorName.valuesMap]: [OperatorCode.MapValuesMap, OutputType.ArrayMap],
    [MapOperatorName.valuesString]: [OperatorCode.MapValuesString, OutputType.ArrayString],
  },
  [Type.String]: {
    [StringOperatorName.AsBoolean]: [OperatorCode.StringAsBoolean, OutputType.Boolean],
    [StringOperatorName.AsBytes]: [OperatorCode.StringAsBytes, OutputType.Bytes],
    [StringOperatorName.AsFloat]: [OperatorCode.StringAsFloat, OutputType.Float],
    [StringOperatorName.AsInteger]: [OperatorCode.StringAsInteger, OutputType.Integer],
    [StringOperatorName.Length]: [OperatorCode.StringLength, OutputType.Integer],
    [StringOperatorName.Match]: [OperatorCode.StringMatch, OutputType.MatchOutput],
    [StringOperatorName.ParseJsonArray]: [OperatorCode.StringParseJsonArray, OutputType.Array],
    [StringOperatorName.ParseJsonMap]: [OperatorCode.StringParseJsonMap, OutputType.Map],
    [StringOperatorName.ParseXml]: [OperatorCode.StringParseXML, OutputType.Map],
    [StringOperatorName.ToLowerCase]: [OperatorCode.StringToLowerCase, OutputType.String],
    [StringOperatorName.ToUpperCase]: [OperatorCode.StringToUpperCase, OutputType.String],
  },
}

const descriptions = {
  getKey: (inputType: string = 'inputType', outputType: string = 'outputType') => (
    key: String = 'key'
  ) =>
    `Access to the “${key}” key of the input ${inputType}, and manage the value as ${outputType}`,
  mapValues: (type: string = 'type') =>
    `Obtain a list with the values of the input Map, and manage the value as an Array of ${type}`,
  cast: (inputType: string = 'inputType', outputType: string = 'outputType') =>
    `Cast the ${inputType} input into ${outputType}`,
}

export const aggregationTallyFilterDescriptions: AggregationTallyFilterDescriptions = {
  [AggregationTallyFilter.deviationAbsolute]: (number: string = 'number') =>
    `Discard any result that is more than ${number} times the absolute deviation times away from the average. Long story short: remove outliers`,
  [AggregationTallyFilter.deviationRelative]: (number: string = 'number') =>
    `Discard any result that is more than ${number} times the relative deviation times away from the average. Long story short: remove outliers`,
  [AggregationTallyFilter.deviationStandard]: () =>
    'Discard any result that is more than ${number} times the standard deviation times away from the average. Long story short: remove outliers',
  [AggregationTallyFilter.mode]: () =>
    'Discard any result that is different from the mode. Long story short: remove outliers',
}

export const aggregationTallyReducerDescriptions: AggregationTallyReducerDescriptions = {
  [AggregationTallyReducer.mode]: () => 'Compute the mode of the values',
  [AggregationTallyReducer.averageMean]: () => 'Compute the average mean of the values',
  [AggregationTallyReducer.averageMeanWeighted]: () =>
    'Compute the average mean weighted with weight ${w} of the values',
  [AggregationTallyReducer.averageMedian]: () => 'Compute the average median of the values',
  [AggregationTallyReducer.averageMedianWeighted]: () =>
    'Compute the average median weighted with weight ${w} of the values',
}

// FIXME(#21): update match operators information
export const operatorInfos: OperatorInfos = {
  [OperatorCode.ArrayCount]: {
    type: Type.Array,
    name: ArrayOperatorName.Count,
    arguments: [],
    outputType: OutputType.Integer,
    description: () => 'Count the number of elements in the input Array',
  },
  [OperatorCode.ArrayFilter]: {
    type: Type.Array,
    name: ArrayOperatorName.Filter,
    arguments: [
      {
        name: 'function',
        optional: false,
        type: MirArgumentType.FilterFunction,
      },
    ],
    outputType: OutputType.Same,
    description: (filter: string = 'filter') =>
      `Discard the items in the inpuyt array that doesn't match the ${filter} function`,
  },
  [OperatorCode.ArrayFlatten]: {
    type: Type.Array,
    name: ArrayOperatorName.Flatten,
    arguments: [
      {
        name: 'depth',
        optional: true,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Inner,
    description: (depth: string = 'depth') =>
      `Remove ${depth} level of nesting of the input Array.`,
  },
  [OperatorCode.ArrayGetArray]: {
    type: Type.Array,
    name: ArrayOperatorName.GetArray,
    arguments: [
      {
        name: 'index',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Array,
    description: descriptions.getKey('Array', 'Array'),
  },
  [OperatorCode.ArrayGetBoolean]: {
    type: Type.Boolean,
    name: ArrayOperatorName.GetBoolean,
    arguments: [
      {
        name: 'index',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Boolean,
    description: descriptions.getKey('Array', 'Boolean'),
  },
  [OperatorCode.ArrayGetBytes]: {
    type: Type.Array,
    name: ArrayOperatorName.GetBytes,
    arguments: [
      {
        name: 'index',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Bytes,
    description: descriptions.getKey('Array', 'Bytes'),
  },
  [OperatorCode.ArrayGetInteger]: {
    type: Type.Array,
    name: ArrayOperatorName.GetInteger,
    arguments: [
      {
        name: 'index',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Integer,
    description: descriptions.getKey('Array', 'Integer'),
  },
  [OperatorCode.ArrayGetFloat]: {
    type: Type.Array,
    name: ArrayOperatorName.GetFloat,
    arguments: [
      {
        name: 'index',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Boolean,
    description: descriptions.getKey('Array', 'Float'),
  },
  [OperatorCode.ArrayGetMap]: {
    type: Type.Array,
    name: ArrayOperatorName.GetMap,
    arguments: [
      {
        name: 'index',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Map,
    description: descriptions.getKey('Array', 'Map'),
  },
  [OperatorCode.ArrayGetString]: {
    type: Type.Array,
    name: ArrayOperatorName.GetString,
    arguments: [
      {
        name: 'index',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.String,
    description: descriptions.getKey('Array', 'String'),
  },
  [OperatorCode.ArrayMap]: {
    type: Type.Array,
    name: ArrayOperatorName.Map,
    arguments: [
      {
        name: 'script',
        optional: false,
        type: MirArgumentType.Subscript,
      },
    ],
    outputType: OutputType.SubscriptOutput,
    description: (subscript) =>
      `Apply the ${subscript} script on all the elements of the input Array`,
  },
  [OperatorCode.ArrayReduce]: {
    type: Type.Array,
    name: ArrayOperatorName.Reduce,
    arguments: [
      {
        name: 'function',
        optional: false,
        type: MirArgumentType.ReducerFunction,
      },
    ],
    outputType: OutputType.Inner,
    description: (outputType: string = 'outputType', reducer: string = 'reducer') =>
      `Reduce all the items in the input Array into a single item of type ${outputType} by applying the ${reducer} reducer function`,
  },
  [OperatorCode.ArraySome]: {
    type: Type.Array,
    name: ArrayOperatorName.Some,
    arguments: [
      {
        name: 'function',
        optional: false,
        type: MirArgumentType.FilterFunction,
      },
    ],
    outputType: OutputType.Boolean,
    description: (filter: string = 'filter') =>
      `Tell whether at least one of the items in the input Array passes the condition defined by the ${filter} filter function`,
  },
  [OperatorCode.ArraySort]: {
    type: Type.Array,
    name: ArrayOperatorName.Sort,
    arguments: [
      {
        name: 'mapFunction',
        optional: false,
        type: MirArgumentType.Subscript,
      },
      {
        name: 'ascending',
        optional: false,
        type: MirArgumentType.Boolean,
      },
    ],
    outputType: OutputType.Same,
    description: (order: string = 'order') => `Sort the input Array in ${order} order`,
  },
  [OperatorCode.ArrayTake]: {
    type: Type.Array,
    name: ArrayOperatorName.Take,
    arguments: [
      { name: 'min', optional: true, type: MirArgumentType.Integer },
      {
        name: 'max',
        optional: true,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Array,
    description: (min, max) =>
      `Take the elements from the input Array between positions ${min} and ${max}, and discard all the rest`,
  },
  [OperatorCode.BooleanAsString]: {
    type: Type.Boolean,
    name: BooleanOperatorName.AsString,
    arguments: [],
    outputType: OutputType.String,
    description: () => descriptions.cast('Boolean', 'String'),
  },
  [OperatorCode.BooleanMatch]: {
    type: Type.Boolean,
    name: BooleanOperatorName.Match,
    arguments: [
      {
        name: 'categories',
        optional: false,
        type: MirArgumentType.Map,
      },
      {
        name: 'default',
        optional: false,
        type: MirArgumentType.Boolean,
      },
    ],
    outputType: OutputType.MatchOutput,
    description: (subscript: string = 'subscript') =>
      `Match the Boolean input with "${subscript}" and return the value asociated with it. Similar than a switch statement`,
  },
  [OperatorCode.BooleanNegate]: {
    type: Type.Boolean,
    name: BooleanOperatorName.Negate,
    arguments: [],
    outputType: OutputType.Boolean,
    description: () =>
      'Negate the input Boolean (make it True if it was False, or make it False if it was True)',
  },
  [OperatorCode.BytesAsString]: {
    type: Type.Bytes,
    name: BytesOperatorName.AsString,
    arguments: [],
    outputType: OutputType.String,
    description: () => descriptions.cast('Bytes', 'String'),
  },
  [OperatorCode.BytesHash]: {
    type: Type.Bytes,
    name: BytesOperatorName.Hash,
    arguments: [],
    outputType: OutputType.Bytes,
    description: () => 'Compute the hash of the input Bytes',
  },
  [OperatorCode.IntegerAbsolute]: {
    type: Type.Integer,
    name: IntegerOperatorName.Absolute,
    arguments: [],
    outputType: OutputType.Integer,
    description: () => 'Calculate the absolute value of the input Integer',
  },
  [OperatorCode.IntegerAsFloat]: {
    type: Type.Integer,
    name: IntegerOperatorName.AsFloat,
    arguments: [],
    outputType: OutputType.Float,
    description: () => descriptions.cast('Integer', 'Float'),
  },
  [OperatorCode.IntegerAsString]: {
    type: Type.Integer,
    name: IntegerOperatorName.AsString,
    arguments: [
      {
        name: 'base',
        optional: true,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.String,
    description: () => descriptions.cast('Integer', 'String'),
  },
  [OperatorCode.IntegerGreaterThan]: {
    type: Type.Integer,
    name: IntegerOperatorName.GreaterThan,
    arguments: [
      {
        name: 'value',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Boolean,
    description: (argument: string = 'argument') =>
      `Check if the input Integer is greater than ${argument} (output will be Boolean)`,
  },
  [OperatorCode.IntegerLessThan]: {
    type: Type.Integer,
    name: IntegerOperatorName.LessThan,
    arguments: [
      {
        name: 'value',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Boolean,
    description: (argument: string = 'argument') =>
      `Check if the input Integer is greater than ${argument} (output will be Boolean)`,
  },
  [OperatorCode.IntegerMatch]: {
    type: Type.Integer,
    name: IntegerOperatorName.Match,
    arguments: [
      {
        name: 'categories',
        optional: false,
        type: MirArgumentType.Map,
      },
      {
        name: 'default',
        optional: false,
        type: MirArgumentType.Boolean,
      },
    ],
    outputType: OutputType.MatchOutput,
    description: (subscript: string = 'subscript') =>
      `Match the Integer input with ${subscript} and return the value asociated with it. Similar than a switch statement`,
  },
  [OperatorCode.IntegerModulo]: {
    type: Type.Integer,
    name: 'modulo',
    arguments: [
      {
        name: 'modulus',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Integer,
    description: (argument: string = 'argument') =>
      `Calculate the integer division of the input integer by ${argument}`,
  },
  [OperatorCode.IntegerMultiply]: {
    type: Type.Integer,
    name: IntegerOperatorName.Multiply,
    arguments: [
      {
        name: 'factor',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Integer,
    description: (factor: string = 'factor') => `Multiply the input Integer by ${factor}`,
  },
  [OperatorCode.IntegerNegate]: {
    type: Type.Integer,
    name: IntegerOperatorName.Negate,
    arguments: [],
    outputType: OutputType.Integer,
    description: () => `Calculate the negative of the input Integer`,
  },
  [OperatorCode.IntegerPower]: {
    type: Type.Integer,
    name: IntegerOperatorName.Power,
    arguments: [
      {
        name: 'exponent',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Integer,
    description: (exponent: string = 'exponent') =>
      `Calculate the input Integer raised to the power of ${exponent}`,
  },
  [OperatorCode.IntegerReciprocal]: {
    type: Type.Integer,
    name: IntegerOperatorName.Reciprocal,
    arguments: [],
    outputType: OutputType.Float,
    description: () =>
      'Calculate the multiplicative inverse (1/x) of the input Integer, and manage the result as Float.',
  },
  [OperatorCode.IntegerSum]: {
    type: Type.Integer,
    name: IntegerOperatorName.Sum,
    arguments: [
      {
        name: 'addend',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.Integer,
    description: (addend: string = 'addend') => `Sum ${addend} to the input Integer`,
  },
  [OperatorCode.FloatAbsolute]: {
    type: Type.Float,
    name: IntegerOperatorName.Absolute,
    arguments: [],
    outputType: OutputType.Float,
    description: () =>
      'Compute the absolute value of the input Float, and manage the result as Float.',
  },
  [OperatorCode.FloatAsString]: {
    type: Type.Float,
    name: FloatOperatorName.AsString,
    arguments: [
      {
        name: 'decimals',
        optional: false,
        type: MirArgumentType.Integer,
      },
    ],
    outputType: OutputType.String,
    description: () => descriptions.cast('Float', 'String'),
  },
  [OperatorCode.FloatCeiling]: {
    type: Type.Float,
    name: FloatOperatorName.Ceiling,
    arguments: [],
    outputType: OutputType.Integer,
    description: () => 'Compute the the least Integer greater than or equal the input Float',
  },
  [OperatorCode.FloatGraterThan]: {
    type: Type.Float,
    name: FloatOperatorName.GreaterThan,
    arguments: [
      {
        name: 'value',
        optional: false,
        type: MirArgumentType.Float,
      },
    ],
    outputType: OutputType.Boolean,
    description: (value: string = 'value') =>
      `Compare if the input Float is greater than ${value}, and manage the value as Boolean.`,
  },
  [OperatorCode.FloatFloor]: {
    type: Type.Float,
    name: FloatOperatorName.Floor,
    arguments: [],
    outputType: OutputType.Float,
    description: () =>
      'Compute the greatest integer less or equal the input Float, and manage the result as Integer',
  },
  [OperatorCode.FloatLessThan]: {
    type: Type.Float,
    name: FloatOperatorName.LessThan,
    arguments: [
      {
        name: 'value',
        optional: false,
        type: MirArgumentType.Float,
      },
    ],
    outputType: OutputType.Boolean,
    description: (argument: string = 'argument') =>
      `Compare if the input Float is less than ${argument}, and manage the value as Boolean`,
  },
  [OperatorCode.FloatModulo]: {
    type: Type.Float,
    name: FloatOperatorName.Modulo,
    arguments: [
      {
        name: 'modulus',
        optional: false,
        type: MirArgumentType.Float,
      },
    ],
    outputType: OutputType.Float,
    description: (argument: string = 'argument') =>
      `Compute the division by the input Float and ${argument}. Then manage the result as Float`,
  },
  [OperatorCode.FloatMultiply]: {
    type: Type.Float,
    name: FloatOperatorName.Multiply,
    arguments: [
      {
        name: 'factor',
        optional: false,
        type: MirArgumentType.Float,
      },
    ],
    outputType: OutputType.Float,
    description: (argument: string = 'argument') =>
      `Compute the product by the input Float and ${argument}. Then manage the result as Integer`,
  },
  [OperatorCode.FloatNegate]: {
    type: Type.Float,
    name: FloatOperatorName.Negate,
    arguments: [],
    outputType: OutputType.Float,
    description: () => `Compute the negative of the input Integer, and manage the result as Float`,
  },
  [OperatorCode.FloatPower]: {
    type: Type.Float,
    name: 'power',
    arguments: [
      {
        name: FloatOperatorName.Power,
        optional: false,
        type: MirArgumentType.Float,
      },
    ],
    outputType: OutputType.Float,
    description: (exponent: string = 'exponent') =>
      `Compute the input Float raised to the power of ${exponent}. Then, handle the result as Float.`,
  },
  [OperatorCode.FloatReciprocal]: {
    type: Type.Float,
    name: FloatOperatorName.Reciprocal,
    arguments: [],
    outputType: OutputType.Float,
    description: () =>
      'Compute the multiplicative inverse of the input Float and manage the result as Float',
  },
  [OperatorCode.FloatRound]: {
    type: Type.Float,
    name: FloatOperatorName.Round,
    arguments: [],
    outputType: OutputType.Integer,
    description: () => 'Round integer part from the Float input, and manage the result as Integer',
  },
  [OperatorCode.Floatsum]: {
    type: Type.Float,
    name: FloatOperatorName.Sum,
    arguments: [
      {
        name: 'addend',
        optional: false,
        type: MirArgumentType.Float,
      },
    ],
    outputType: OutputType.Float,
    description: (addend: string = 'addend') =>
      `Compute the addition between the input Float and ${addend}. Then handle the result as Float.`,
  },
  [OperatorCode.FloatTruncate]: {
    type: Type.Float,
    name: FloatOperatorName.Truncate,
    arguments: [],
    outputType: OutputType.Integer,
    description: () => 'Take integer part from the Float input, and manage the result as Integer.',
  },
  [OperatorCode.MapEntries]: {
    type: Type.Map,
    name: MapOperatorName.Entries,
    arguments: [],
    outputType: OutputType.Array,
    description: () =>
      `Obtain a list of key-value tuples from the input Map, and manage the value as Array.`,
  },
  [OperatorCode.MapGetArray]: {
    type: Type.Map,
    name: MapOperatorName.GetArray,
    arguments: [
      {
        name: 'key',
        optional: false,
        type: MirArgumentType.String,
      },
    ],
    outputType: OutputType.Array,
    description: descriptions.getKey('Map', 'Array'),
  },
  [OperatorCode.MapGetBoolean]: {
    type: Type.Map,
    name: MapOperatorName.GetBoolean,
    arguments: [
      {
        name: 'key',
        optional: false,
        type: MirArgumentType.String,
      },
    ],
    outputType: OutputType.Boolean,
    description: descriptions.getKey('Map', 'Boolean'),
  },
  [OperatorCode.MapGetBytes]: {
    type: Type.Map,
    name: MapOperatorName.GetBytes,
    arguments: [
      {
        name: 'key',
        optional: false,
        type: MirArgumentType.String,
      },
    ],
    outputType: OutputType.Bytes,
    description: descriptions.getKey('Map', 'Bytes'),
  },
  [OperatorCode.MapGetInteger]: {
    type: Type.Map,
    name: MapOperatorName.GetInteger,
    arguments: [
      {
        name: 'key',
        optional: false,
        type: MirArgumentType.String,
      },
    ],
    outputType: OutputType.Integer,
    description: descriptions.getKey('Map', 'Integer'),
  },
  [OperatorCode.MapGetFloat]: {
    type: Type.Map,
    name: MapOperatorName.GetFloat,
    arguments: [
      {
        name: 'key',
        optional: false,
        type: MirArgumentType.String,
      },
    ],
    outputType: OutputType.Float,
    description: descriptions.getKey('Map', 'Float'),
  },
  [OperatorCode.MapGetMap]: {
    type: Type.Map,
    name: MapOperatorName.GetMap,
    arguments: [
      {
        name: 'key',
        optional: false,
        type: MirArgumentType.String,
      },
    ],
    outputType: OutputType.Map,
    description: descriptions.getKey('Map', 'Map'),
  },
  [OperatorCode.MapGetString]: {
    type: Type.Map,
    name: MapOperatorName.GetString,
    arguments: [
      {
        name: 'key',
        optional: false,
        type: MirArgumentType.String,
      },
    ],
    outputType: OutputType.String,
    description: descriptions.getKey('Map', 'String'),
  },
  [OperatorCode.MapKeys]: {
    type: Type.Map,
    name: MapOperatorName.Keys,
    arguments: [],
    outputType: OutputType.ArrayString,
    description: () =>
      'Obtain a list with the keys names of the input Map, and manage the value as Array of String.',
  },
  [OperatorCode.MapValuesArray]: {
    type: Type.Map,
    name: MapOperatorName.valuesArray,
    arguments: [],
    outputType: OutputType.ArrayArray,
    description: () => descriptions.mapValues('Array'),
  },
  [OperatorCode.MapValuesBoolean]: {
    type: Type.Map,
    name: MapOperatorName.valuesBoolean,
    arguments: [],
    outputType: OutputType.ArrayBoolean,
    description: () => descriptions.mapValues('Boolean'),
  },
  [OperatorCode.MapValuesBytes]: {
    type: Type.Map,
    name: MapOperatorName.valuesBytes,
    arguments: [],
    outputType: OutputType.ArrayBytes,
    description: () => descriptions.mapValues('Bytes'),
  },
  [OperatorCode.MapValuesInteger]: {
    type: Type.Map,
    name: MapOperatorName.valuesInteger,
    arguments: [],
    outputType: OutputType.ArrayInteger,
    description: () => descriptions.mapValues('Integer'),
  },
  [OperatorCode.MapValuesFloat]: {
    type: Type.Map,
    name: MapOperatorName.valuesFloat,
    arguments: [],
    outputType: OutputType.ArrayFloat,
    description: () => descriptions.mapValues('Float'),
  },
  [OperatorCode.MapValuesMap]: {
    type: Type.Map,
    name: MapOperatorName.valuesMap,
    arguments: [],
    outputType: OutputType.ArrayMap,
    description: () => descriptions.mapValues('Map'),
  },
  [OperatorCode.MapValuesString]: {
    type: Type.Map,
    name: MapOperatorName.valuesString,
    arguments: [],
    outputType: OutputType.ArrayString,
    description: () => descriptions.mapValues('String'),
  },
  [OperatorCode.StringAsBoolean]: {
    type: Type.String,
    name: StringOperatorName.AsBoolean,
    arguments: [],
    outputType: OutputType.Boolean,
    description: () => descriptions.cast('String', 'Boolean'),
  },
  [OperatorCode.StringAsBytes]: {
    type: Type.String,
    name: StringOperatorName.AsBytes,
    arguments: [],
    outputType: OutputType.Bytes,
    description: () => descriptions.cast('String', 'Bytes'),
  },
  [OperatorCode.StringAsFloat]: {
    type: Type.String,
    name: StringOperatorName.AsFloat,
    arguments: [],
    outputType: OutputType.Float,
    description: () => descriptions.cast('String', 'Float'),
  },
  [OperatorCode.StringAsInteger]: {
    type: Type.String,
    name: StringOperatorName.AsInteger,
    arguments: [],
    outputType: OutputType.Integer,
    description: () => descriptions.cast('String', 'Integer'),
  },
  [OperatorCode.StringLength]: {
    type: Type.String,
    name: StringOperatorName.Length,
    arguments: [],
    outputType: OutputType.Integer,
    description: () =>
      'Count the number of elements of the input String, and mannage the values as Integer.',
  },
  [OperatorCode.StringMatch]: {
    type: Type.String,
    name: StringOperatorName.Match,
    arguments: [
      {
        name: 'categories',
        optional: false,
        type: MirArgumentType.Map,
      },
      {
        name: 'default',
        optional: false,
        type: MirArgumentType.Boolean,
      },
    ],
    outputType: OutputType.MatchOutput,
    description: (subscript: string = 'subscript') =>
      `Match the String input with ${subscript} and return the value asociated with it. Similar than a switch statement`,
  },
  [OperatorCode.StringParseJsonArray]: {
    type: Type.String,
    name: StringOperatorName.ParseJsonArray,
    arguments: [],
    outputType: OutputType.Array,
    description: () => 'Interpretate the input String as a JSON-encoded Array structure.',
  },
  [OperatorCode.StringParseJsonMap]: {
    type: Type.String,
    name: StringOperatorName.ParseJsonMap,
    arguments: [],
    outputType: OutputType.Map,
    description: () => 'Interpretate the input String as a JSON-encoded Map structure.',
  },
  [OperatorCode.StringParseXML]: {
    type: Type.String,
    name: StringOperatorName.ParseXml,
    arguments: [],
    outputType: OutputType.Map,
    description: () => 'Interpretate the input String as a XML-encoded Map structure.',
  },
  [OperatorCode.StringToLowerCase]: {
    type: Type.String,
    name: StringOperatorName.ToLowerCase,
    arguments: [],
    outputType: OutputType.String,
    description: () => 'Convert to lowercase the input String, and manage the value as String',
  },
  [OperatorCode.StringToUpperCase]: {
    type: Type.String,
    name: StringOperatorName.ToUpperCase,
    arguments: [],
    outputType: OutputType.String,
    description: () => 'Convert to uppercase the input String, and manage the value as String',
  },
}

export class Cache {
  private counter: number = 0

  private cache: {
    [key: number]: CacheItem
  }

  constructor() {
    this.cache = {}
  }

  getLastIndex() {
    return this.counter + 1
  }

  get(cacheId: number): CacheItem {
    return this.cache[cacheId]
  }

  insert(item: CacheItem): CacheRef {
    this.cache[++this.counter] = item
    return { id: this.counter }
  }

  set(id: number, item: CacheItem) {
    this.cache[id] = item
  }
}

function generateOption(label: string, outputType: OutputType) {
  return {
    hierarchicalType: 'operatorOption',
    label,
    markupType: 'option',
    outputType,
  }
}

export const primitiveMarkupOptions = {
  array: Object.entries(typeSystem.Array).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
  arrayBoolean: [
    { label: 'ArrayCount', outputType: 'integer' },
    { label: 'ArrayFilter', outputType: 'arrayBoolean' },
    { label: 'ArrayFlatten', outputType: 'arrayBoolean' },
    { label: 'ArrayGetArray', outputType: 'arrayBoolean' },
    { label: 'ArrayGetBoolean', outputType: 'boolean' },
    { label: 'ArrayGetBytes', outputType: 'bytes' },
    { label: 'ArrayGetString', outputType: 'string' },
    { label: 'ArrayMap', outputType: 'arrayMap' },
    { label: 'ArrayReduce', outputType: 'boolean' },
    { label: 'ArraySome', outputType: 'arrayBoolean' },
    { label: 'ArraySort', outputType: 'arrayBoolean' },
    { label: 'ArrayTake', outputType: 'arrayBoolean' },
  ].map((x) => {
    return generateOption(x.label, x.outputType as OutputType)
  }),
  arrayArray: [
    { label: 'ArrayCount', outputType: 'integer' },
    { label: 'ArrayFilter', outputType: 'arrayArray' },
    { label: 'ArrayFlatten', outputType: 'arrayArray' },
    { label: 'ArrayGetArray', outputType: 'arrayArray' },
    { label: 'ArrayGetBoolean', outputType: 'boolean' },
    { label: 'ArrayGetBytes', outputType: 'bytes' },
    { label: 'ArrayGetString', outputType: 'string' },
    { label: 'ArrayMap', outputType: 'arrayMap' },
    { label: 'ArrayReduce', outputType: '' },
    { label: 'ArraySome', outputType: 'arrayArray' },
    { label: 'ArraySort', outputType: 'arrayArray' },
    { label: 'ArrayTake', outputType: 'arrayArray' },
  ].map((x) => {
    return generateOption(x.label, x.outputType as OutputType)
  }),
  arrayBytes: [
    { label: 'ArrayCount', outputType: 'integer' },
    { label: 'ArrayFilter', outputType: 'arrayBytes' },
    { label: 'ArrayFlatten', outputType: 'arrayBytes' },
    { label: 'ArrayGetArray', outputType: 'arrayBytes' },
    { label: 'ArrayGetBoolean', outputType: 'boolean' },
    { label: 'ArrayGetBytes', outputType: 'bytes' },
    { label: 'ArrayGetString', outputType: 'string' },
    { label: 'ArrayMap', outputType: 'arrayMap' },
    { label: 'ArrayReduce', outputType: 'bytes' },
    { label: 'ArraySome', outputType: 'arrayBytes' },
    { label: 'ArraySort', outputType: 'arrayBytes' },
    { label: 'ArrayTake', outputType: 'arrayBytes' },
  ].map((x) => {
    return generateOption(x.label, x.outputType as OutputType)
  }),
  arrayFloat: [
    { label: 'ArrayCount', outputType: 'integer' },
    { label: 'ArrayFilter', outputType: 'arrayFloat' },
    { label: 'ArrayFlatten', outputType: 'arrayFloat' },
    { label: 'ArrayGetArray', outputType: 'arrayFloat' },
    { label: 'ArrayGetBoolean', outputType: 'boolean' },
    { label: 'ArrayGetBytes', outputType: 'bytes' },
    { label: 'ArrayGetString', outputType: 'string' },
    { label: 'ArrayMap', outputType: 'arrayMap' },
    { label: 'ArrayReduce', outputType: 'float' },
    { label: 'ArraySome', outputType: 'arrayFloat' },
    { label: 'ArraySort', outputType: 'arrayFloat' },
    { label: 'ArrayTake', outputType: 'arrayFloat' },
  ].map((x) => {
    return generateOption(x.label, x.outputType as OutputType)
  }),
  arrayInteger: [
    { label: 'ArrayCount', outputType: 'integer' },
    { label: 'ArrayFilter', outputType: 'arrayInteger' },
    { label: 'ArrayFlatten', outputType: 'arrayInteger' },
    { label: 'ArrayGetArray', outputType: 'arrayInteger' },
    { label: 'ArrayGetBoolean', outputType: 'boolean' },
    { label: 'ArrayGetBytes', outputType: 'bytes' },
    { label: 'ArrayGetString', outputType: 'string' },
    { label: 'ArrayMap', outputType: 'arrayMap' },
    { label: 'ArrayReduce', outputType: 'integer' },
    { label: 'ArraySome', outputType: 'arrayInteger' },
    { label: 'ArraySort', outputType: 'arrayInteger' },
    { label: 'ArrayTake', outputType: 'arrayInteger' },
  ].map((x) => {
    return generateOption(x.label, x.outputType as OutputType)
  }),
  arrayMap: [
    { label: 'ArrayCount', outputType: 'integer' },
    { label: 'ArrayFilter', outputType: 'arrayMap' },
    { label: 'ArrayFlatten', outputType: 'arrayMap' },
    { label: 'ArrayGetArray', outputType: 'arrayMap' },
    { label: 'ArrayGetBoolean', outputType: 'boolean' },
    { label: 'ArrayGetBytes', outputType: 'bytes' },
    { label: 'ArrayGetString', outputType: 'string' },
    { label: 'ArrayMap', outputType: 'arrayMap' },
    { label: 'ArrayReduce', outputType: 'map' },
    { label: 'ArraySome', outputType: 'arrayMap' },
    { label: 'ArraySort', outputType: 'arrayMap' },
    { label: 'ArrayTake', outputType: 'arrayMap' },
  ].map((x) => {
    return generateOption(x.label, x.outputType as OutputType)
  }),

  arrayString: [
    { label: 'ArrayCount', outputType: 'integer' },
    { label: 'ArrayFilter', outputType: 'arrayString' },
    { label: 'ArrayFlatten', outputType: 'arrayString' },
    { label: 'ArrayGetArray', outputType: 'arrayString' },
    { label: 'ArrayGetBoolean', outputType: 'boolean' },
    { label: 'ArrayGetBytes', outputType: 'bytes' },
    { label: 'ArrayGetString', outputType: 'string' },
    { label: 'ArrayMap', outputType: 'arrayMap' },
    { label: 'ArrayReduce', outputType: 'string' },
    { label: 'ArraySome', outputType: 'arrayString' },
    { label: 'ArraySort', outputType: 'arrayString' },
    { label: 'ArrayTake', outputType: 'arrayString' },
  ].map((x) => {
    return generateOption(x.label, x.outputType as OutputType)
  }),
  boolean: Object.entries(typeSystem.Boolean).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
  bytes: Object.entries(typeSystem.Bytes).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
  filterOutput: Object.entries(typeSystem.Array).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
  float: Object.entries(typeSystem.Float).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
  matchOutput: null,
  reducerOutput: null,
  string: Object.entries(typeSystem.String).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
  subscriptOutput: null,
  map: Object.entries(typeSystem.Map).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
  integer: Object.entries(typeSystem.Integer).map((x) => {
    return generateOption(OperatorCode[x[1][0]], x[1][1])
  }),
}

export const aTFilterMarkupOptions = () =>
  getEnumNames(AggregationTallyFilter).map((filter) =>
    generateOption(filter, OutputType.FilterOutput)
  )

export const aTReducerMarkupOptions = () =>
  getEnumNames(AggregationTallyReducer).map((filter) =>
    generateOption(filter, OutputType.FilterOutput)
  )

export const allMarkupOptions = removeRepeatedOptions([
  ...primitiveMarkupOptions.array,
  ...primitiveMarkupOptions.arrayBoolean,
  ...primitiveMarkupOptions.arrayArray,
  ...primitiveMarkupOptions.arrayBytes,
  ...primitiveMarkupOptions.arrayFloat,
  ...primitiveMarkupOptions.arrayInteger,
  ...primitiveMarkupOptions.arrayMap,
  ...primitiveMarkupOptions.arrayString,
  ...primitiveMarkupOptions.boolean,
  ...primitiveMarkupOptions.bytes,
  ...primitiveMarkupOptions.filterOutput,
  ...primitiveMarkupOptions.float,
  // ...primitiveMarkupOptions.matchOutput,
  // ...primitiveMarkupOptions.reducerOutput,
  ...primitiveMarkupOptions.string,
  // ...primitiveMarkupOptions.subscriptOutput,
  ...primitiveMarkupOptions.map,
  ...primitiveMarkupOptions.integer,
])

export const markupOptions: { [key: string]: Array<any> } = {
  [OutputType.Array]: [...primitiveMarkupOptions.array],
  [OutputType.ArrayArray]: [...primitiveMarkupOptions.arrayArray],
  [OutputType.ArrayBoolean]: [...primitiveMarkupOptions.arrayBoolean],
  [OutputType.ArrayBytes]: [...primitiveMarkupOptions.arrayBytes],
  [OutputType.ArrayFloat]: [...primitiveMarkupOptions.arrayFloat],
  [OutputType.ArrayInteger]: [...primitiveMarkupOptions.arrayInteger],
  [OutputType.ArrayMap]: [...primitiveMarkupOptions.arrayMap],
  [OutputType.ArrayString]: [...primitiveMarkupOptions.arrayString],
  [OutputType.Boolean]: [...primitiveMarkupOptions.boolean, ...primitiveMarkupOptions.string],
  [OutputType.Bytes]: [...primitiveMarkupOptions.bytes, ...primitiveMarkupOptions.string],
  [OutputType.FilterOutput]: [...primitiveMarkupOptions.filterOutput],
  [OutputType.Float]: [...primitiveMarkupOptions.float, ...primitiveMarkupOptions.string],
  [OutputType.Integer]: [
    ...primitiveMarkupOptions.integer,
    ...primitiveMarkupOptions.float,
    ...primitiveMarkupOptions.string,
  ],
  [OutputType.Map]: [...primitiveMarkupOptions.map],
  [OutputType.MatchOutput]: allMarkupOptions,
  [OutputType.ReducerOutput]: allMarkupOptions,
  [OutputType.String]: [...primitiveMarkupOptions.string],
  [OutputType.SubscriptOutput]: allMarkupOptions,
}

export function removeRepeatedOptions(array: Array<{ label: string }>) {
  return array.filter(
    (item: { label: string }, index: number, self: Array<{ label: string }>) =>
      index === self.findIndex((t) => t.label === item.label)
  )
}
