"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.markupOptions = exports.allMarkupOptions = exports.aTReducerMarkupOptions = exports.aTFilterMarkupOptions = exports.primitiveMarkupOptions = exports.Cache = exports.operatorInfos = exports.aggregationTallyReducerDescriptions = exports.aggregationTallyFilterDescriptions = exports.typeSystem = void 0;
var types_1 = require("./types");
var utils_1 = require("./utils");
exports.typeSystem = (_a = {},
    _a[types_1.Type.Array] = (_b = {},
        _b[types_1.ArrayOperatorName.Count] = [types_1.OperatorCode.ArrayCount, types_1.OutputType.Integer],
        _b[types_1.ArrayOperatorName.Filter] = [types_1.OperatorCode.ArrayFilter, types_1.OutputType.Same],
        _b[types_1.ArrayOperatorName.Flatten] = [types_1.OperatorCode.ArrayFlatten, types_1.OutputType.Array],
        _b[types_1.ArrayOperatorName.GetArray] = [types_1.OperatorCode.ArrayGetArray, types_1.OutputType.Array],
        _b[types_1.ArrayOperatorName.GetBoolean] = [types_1.OperatorCode.ArrayGetBoolean, types_1.OutputType.Boolean],
        _b[types_1.ArrayOperatorName.GetBytes] = [types_1.OperatorCode.ArrayGetBytes, types_1.OutputType.Bytes],
        _b[types_1.ArrayOperatorName.GetFloat] = [types_1.OperatorCode.ArrayGetFloat, types_1.OutputType.Float],
        _b[types_1.ArrayOperatorName.GetInteger] = [types_1.OperatorCode.ArrayGetInteger, types_1.OutputType.Integer],
        _b[types_1.ArrayOperatorName.GetMap] = [types_1.OperatorCode.ArrayGetMap, types_1.OutputType.Map],
        _b[types_1.ArrayOperatorName.GetString] = [types_1.OperatorCode.ArrayGetString, types_1.OutputType.String],
        _b[types_1.ArrayOperatorName.Map] = [types_1.OperatorCode.ArrayMap, types_1.OutputType.ArrayMap],
        _b[types_1.ArrayOperatorName.Reduce] = [types_1.OperatorCode.ArrayReduce, types_1.OutputType.Inner],
        _b[types_1.ArrayOperatorName.Some] = [types_1.OperatorCode.ArraySome, types_1.OutputType.FilterOutput],
        _b[types_1.ArrayOperatorName.Sort] = [types_1.OperatorCode.ArraySort, types_1.OutputType.Same],
        _b[types_1.ArrayOperatorName.Take] = [types_1.OperatorCode.ArrayTake, types_1.OutputType.Array],
        _b),
    _a[types_1.Type.Boolean] = (_c = {},
        _c[types_1.BooleanOperatorName.AsString] = [types_1.OperatorCode.BooleanAsString, types_1.OutputType.String],
        _c[types_1.BooleanOperatorName.Match] = [types_1.OperatorCode.BooleanMatch, types_1.OutputType.MatchOutput],
        _c[types_1.BooleanOperatorName.Negate] = [types_1.OperatorCode.BooleanNegate, types_1.OutputType.Boolean],
        _c),
    _a[types_1.Type.Bytes] = (_d = {},
        _d[types_1.BytesOperatorName.AsString] = [types_1.OperatorCode.BytesAsString, types_1.OutputType.String],
        _d[types_1.BytesOperatorName.Hash] = [types_1.OperatorCode.BytesHash, types_1.OutputType.Bytes],
        _d),
    _a[types_1.Type.Integer] = (_e = {},
        _e[types_1.IntegerOperatorName.Absolute] = [types_1.OperatorCode.IntegerAbsolute, types_1.OutputType.Integer],
        _e[types_1.IntegerOperatorName.AsFloat] = [types_1.OperatorCode.IntegerAsFloat, types_1.OutputType.Float],
        _e[types_1.IntegerOperatorName.AsString] = [types_1.OperatorCode.IntegerAsString, types_1.OutputType.String],
        _e[types_1.IntegerOperatorName.GreaterThan] = [types_1.OperatorCode.IntegerGreaterThan, types_1.OutputType.Boolean],
        _e[types_1.IntegerOperatorName.LessThan] = [types_1.OperatorCode.IntegerLessThan, types_1.OutputType.Boolean],
        _e[types_1.IntegerOperatorName.Match] = [types_1.OperatorCode.IntegerMatch, types_1.OutputType.MatchOutput],
        _e[types_1.IntegerOperatorName.Modulo] = [types_1.OperatorCode.IntegerModulo, types_1.OutputType.Integer],
        _e[types_1.IntegerOperatorName.Multiply] = [types_1.OperatorCode.IntegerMultiply, types_1.OutputType.Integer],
        _e[types_1.IntegerOperatorName.Negate] = [types_1.OperatorCode.IntegerNegate, types_1.OutputType.Integer],
        _e[types_1.IntegerOperatorName.Power] = [types_1.OperatorCode.IntegerPower, types_1.OutputType.Integer],
        _e[types_1.IntegerOperatorName.Reciprocal] = [types_1.OperatorCode.IntegerReciprocal, types_1.OutputType.Float],
        _e[types_1.IntegerOperatorName.Sum] = [types_1.OperatorCode.IntegerSum, types_1.OutputType.Integer],
        _e),
    _a[types_1.Type.Float] = (_f = {},
        _f[types_1.FloatOperatorName.Absolute] = [types_1.OperatorCode.FloatAbsolute, types_1.OutputType.Float],
        _f[types_1.FloatOperatorName.AsString] = [types_1.OperatorCode.FloatAsString, types_1.OutputType.String],
        _f[types_1.FloatOperatorName.Ceiling] = [types_1.OperatorCode.FloatCeiling, types_1.OutputType.Integer],
        _f[types_1.FloatOperatorName.GreaterThan] = [types_1.OperatorCode.FloatGraterThan, types_1.OutputType.Boolean],
        _f[types_1.FloatOperatorName.Floor] = [types_1.OperatorCode.FloatFloor, types_1.OutputType.Integer],
        _f[types_1.FloatOperatorName.LessThan] = [types_1.OperatorCode.FloatLessThan, types_1.OutputType.Boolean],
        _f[types_1.FloatOperatorName.Modulo] = [types_1.OperatorCode.FloatModulo, types_1.OutputType.Float],
        _f[types_1.FloatOperatorName.Multiply] = [types_1.OperatorCode.FloatMultiply, types_1.OutputType.Float],
        _f[types_1.FloatOperatorName.Negate] = [types_1.OperatorCode.FloatNegate, types_1.OutputType.Float],
        _f[types_1.FloatOperatorName.Power] = [types_1.OperatorCode.FloatPower, types_1.OutputType.Float],
        _f[types_1.FloatOperatorName.Reciprocal] = [types_1.OperatorCode.FloatReciprocal, types_1.OutputType.Float],
        _f[types_1.FloatOperatorName.Round] = [types_1.OperatorCode.FloatRound, types_1.OutputType.Integer],
        _f[types_1.FloatOperatorName.Sum] = [types_1.OperatorCode.Floatsum, types_1.OutputType.Float],
        _f[types_1.FloatOperatorName.Truncate] = [types_1.OperatorCode.FloatTruncate, types_1.OutputType.Integer],
        _f),
    _a[types_1.Type.Map] = (_g = {},
        _g[types_1.MapOperatorName.Entries] = [types_1.OperatorCode.MapEntries, types_1.OutputType.Bytes],
        _g[types_1.MapOperatorName.GetArray] = [types_1.OperatorCode.MapGetArray, types_1.OutputType.Array],
        _g[types_1.MapOperatorName.GetBoolean] = [types_1.OperatorCode.MapGetBoolean, types_1.OutputType.Boolean],
        _g[types_1.MapOperatorName.GetBytes] = [types_1.OperatorCode.MapGetBytes, types_1.OutputType.Bytes],
        _g[types_1.MapOperatorName.GetFloat] = [types_1.OperatorCode.MapGetFloat, types_1.OutputType.Float],
        _g[types_1.MapOperatorName.GetInteger] = [types_1.OperatorCode.MapGetInteger, types_1.OutputType.Integer],
        _g[types_1.MapOperatorName.GetMap] = [types_1.OperatorCode.MapGetMap, types_1.OutputType.Map],
        _g[types_1.MapOperatorName.GetString] = [types_1.OperatorCode.MapGetString, types_1.OutputType.String],
        _g[types_1.MapOperatorName.Keys] = [types_1.OperatorCode.MapKeys, types_1.OutputType.ArrayString],
        _g[types_1.MapOperatorName.valuesArray] = [types_1.OperatorCode.MapValuesArray, types_1.OutputType.ArrayArray],
        _g[types_1.MapOperatorName.valuesBoolean] = [types_1.OperatorCode.MapValuesBoolean, types_1.OutputType.ArrayBoolean],
        _g[types_1.MapOperatorName.valuesBytes] = [types_1.OperatorCode.MapValuesBytes, types_1.OutputType.ArrayBytes],
        _g[types_1.MapOperatorName.valuesFloat] = [types_1.OperatorCode.MapValuesFloat, types_1.OutputType.ArrayFloat],
        _g[types_1.MapOperatorName.valuesInteger] = [types_1.OperatorCode.MapValuesInteger, types_1.OutputType.ArrayInteger],
        _g[types_1.MapOperatorName.valuesMap] = [types_1.OperatorCode.MapValuesMap, types_1.OutputType.ArrayMap],
        _g[types_1.MapOperatorName.valuesString] = [types_1.OperatorCode.MapValuesString, types_1.OutputType.ArrayString],
        _g),
    _a[types_1.Type.String] = (_h = {},
        _h[types_1.StringOperatorName.AsBoolean] = [types_1.OperatorCode.StringAsBoolean, types_1.OutputType.Boolean],
        _h[types_1.StringOperatorName.AsBytes] = [types_1.OperatorCode.StringAsBytes, types_1.OutputType.Bytes],
        _h[types_1.StringOperatorName.AsFloat] = [types_1.OperatorCode.StringAsFloat, types_1.OutputType.Float],
        _h[types_1.StringOperatorName.AsInteger] = [types_1.OperatorCode.StringAsInteger, types_1.OutputType.Integer],
        _h[types_1.StringOperatorName.Length] = [types_1.OperatorCode.StringLength, types_1.OutputType.Integer],
        _h[types_1.StringOperatorName.Match] = [types_1.OperatorCode.StringMatch, types_1.OutputType.MatchOutput],
        _h[types_1.StringOperatorName.ParseJsonArray] = [types_1.OperatorCode.StringParseJsonArray, types_1.OutputType.Array],
        _h[types_1.StringOperatorName.ParseJsonMap] = [types_1.OperatorCode.StringParseJsonMap, types_1.OutputType.Map],
        _h[types_1.StringOperatorName.ParseXml] = [types_1.OperatorCode.StringParseXML, types_1.OutputType.Map],
        _h[types_1.StringOperatorName.ToLowerCase] = [types_1.OperatorCode.StringToLowerCase, types_1.OutputType.String],
        _h[types_1.StringOperatorName.ToUpperCase] = [types_1.OperatorCode.StringToUpperCase, types_1.OutputType.String],
        _h),
    _a);
var descriptions = {
    getKey: function (inputType, outputType) {
        if (inputType === void 0) { inputType = 'inputType'; }
        if (outputType === void 0) { outputType = 'outputType'; }
        return function (key) {
            if (key === void 0) { key = 'key'; }
            return "Access to the \u201C" + key + "\u201D key of the input " + inputType + ", and manage the value as " + outputType;
        };
    },
    mapValues: function (type) {
        if (type === void 0) { type = 'type'; }
        return "Obtain a list with the values of the input Map, and manage the value as an Array of " + type;
    },
    cast: function (inputType, outputType) {
        if (inputType === void 0) { inputType = 'inputType'; }
        if (outputType === void 0) { outputType = 'outputType'; }
        return "Cast the " + inputType + " input into " + outputType;
    },
};
exports.aggregationTallyFilterDescriptions = (_j = {},
    _j[types_1.AggregationTallyFilter.deviationAbsolute] = function (number) {
        if (number === void 0) { number = 'number'; }
        return "Discard any result that is more than " + number + " times the absolute deviation times away from the average. Long story short: remove outliers";
    },
    _j[types_1.AggregationTallyFilter.deviationRelative] = function (number) {
        if (number === void 0) { number = 'number'; }
        return "Discard any result that is more than " + number + " times the relative deviation times away from the average. Long story short: remove outliers";
    },
    _j[types_1.AggregationTallyFilter.deviationStandard] = function () {
        return 'Discard any result that is more than ${number} times the standard deviation times away from the average. Long story short: remove outliers';
    },
    _j[types_1.AggregationTallyFilter.mode] = function () {
        return 'Discard any result that is different from the mode. Long story short: remove outliers';
    },
    _j);
exports.aggregationTallyReducerDescriptions = (_k = {},
    _k[types_1.AggregationTallyReducer.mode] = function () { return 'Compute the mode of the values'; },
    _k[types_1.AggregationTallyReducer.averageMean] = function () { return 'Compute the average mean of the values'; },
    _k[types_1.AggregationTallyReducer.averageMeanWeighted] = function () {
        return 'Compute the average mean weighted with weight ${w} of the values';
    },
    _k[types_1.AggregationTallyReducer.averageMedian] = function () { return 'Compute the average median of the values'; },
    _k[types_1.AggregationTallyReducer.averageMedianWeighted] = function () {
        return 'Compute the average median weighted with weight ${w} of the values';
    },
    _k);
// FIXME(#21): update match operators information
exports.operatorInfos = (_l = {},
    _l[types_1.OperatorCode.ArrayCount] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Count,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () { return 'Count the number of elements in the input Array'; },
    },
    _l[types_1.OperatorCode.ArrayFilter] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Filter,
        arguments: [
            {
                name: 'function',
                optional: false,
                type: types_1.MirArgumentType.FilterFunction,
            },
        ],
        outputType: types_1.OutputType.Same,
        description: function (filter) {
            if (filter === void 0) { filter = 'filter'; }
            return "Discard the items in the inpuyt array that doesn't match the " + filter + " function";
        },
    },
    _l[types_1.OperatorCode.ArrayFlatten] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Flatten,
        arguments: [
            {
                name: 'depth',
                optional: true,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Inner,
        description: function (depth) {
            if (depth === void 0) { depth = 'depth'; }
            return "Remove " + depth + " level of nesting of the input Array.";
        },
    },
    _l[types_1.OperatorCode.ArrayGetArray] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.GetArray,
        arguments: [
            {
                name: 'index',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Array,
        description: descriptions.getKey('Array', 'Array'),
    },
    _l[types_1.OperatorCode.ArrayGetBoolean] = {
        type: types_1.Type.Boolean,
        name: types_1.ArrayOperatorName.GetBoolean,
        arguments: [
            {
                name: 'index',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: descriptions.getKey('Array', 'Boolean'),
    },
    _l[types_1.OperatorCode.ArrayGetBytes] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.GetBytes,
        arguments: [
            {
                name: 'index',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Bytes,
        description: descriptions.getKey('Array', 'Bytes'),
    },
    _l[types_1.OperatorCode.ArrayGetInteger] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.GetInteger,
        arguments: [
            {
                name: 'index',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Integer,
        description: descriptions.getKey('Array', 'Integer'),
    },
    _l[types_1.OperatorCode.ArrayGetFloat] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.GetFloat,
        arguments: [
            {
                name: 'index',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: descriptions.getKey('Array', 'Float'),
    },
    _l[types_1.OperatorCode.ArrayGetMap] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.GetMap,
        arguments: [
            {
                name: 'index',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Map,
        description: descriptions.getKey('Array', 'Map'),
    },
    _l[types_1.OperatorCode.ArrayGetString] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.GetString,
        arguments: [
            {
                name: 'index',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.String,
        description: descriptions.getKey('Array', 'String'),
    },
    _l[types_1.OperatorCode.ArrayMap] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Map,
        arguments: [
            {
                name: 'script',
                optional: false,
                type: types_1.MirArgumentType.Subscript,
            },
        ],
        outputType: types_1.OutputType.SubscriptOutput,
        description: function (subscript) {
            return "Apply the " + subscript + " script on all the elements of the input Array";
        },
    },
    _l[types_1.OperatorCode.ArrayReduce] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Reduce,
        arguments: [
            {
                name: 'function',
                optional: false,
                type: types_1.MirArgumentType.ReducerFunction,
            },
        ],
        outputType: types_1.OutputType.Inner,
        description: function (outputType, reducer) {
            if (outputType === void 0) { outputType = 'outputType'; }
            if (reducer === void 0) { reducer = 'reducer'; }
            return "Reduce all the items in the input Array into a single item of type " + outputType + " by applying the " + reducer + " reducer function";
        },
    },
    _l[types_1.OperatorCode.ArraySome] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Some,
        arguments: [
            {
                name: 'function',
                optional: false,
                type: types_1.MirArgumentType.FilterFunction,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: function (filter) {
            if (filter === void 0) { filter = 'filter'; }
            return "Tell whether at least one of the items in the input Array passes the condition defined by the " + filter + " filter function";
        },
    },
    _l[types_1.OperatorCode.ArraySort] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Sort,
        arguments: [
            {
                name: 'mapFunction',
                optional: false,
                type: types_1.MirArgumentType.Subscript,
            },
            {
                name: 'ascending',
                optional: false,
                type: types_1.MirArgumentType.Boolean,
            },
        ],
        outputType: types_1.OutputType.Same,
        description: function (order) {
            if (order === void 0) { order = 'order'; }
            return "Sort the input Array in " + order + " order";
        },
    },
    _l[types_1.OperatorCode.ArrayTake] = {
        type: types_1.Type.Array,
        name: types_1.ArrayOperatorName.Take,
        arguments: [
            { name: 'min', optional: true, type: types_1.MirArgumentType.Integer },
            {
                name: 'max',
                optional: true,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Array,
        description: function (min, max) {
            return "Take the elements from the input Array between positions " + min + " and " + max + ", and discard all the rest";
        },
    },
    _l[types_1.OperatorCode.BooleanAsString] = {
        type: types_1.Type.Boolean,
        name: types_1.BooleanOperatorName.AsString,
        arguments: [],
        outputType: types_1.OutputType.String,
        description: function () { return descriptions.cast('Boolean', 'String'); },
    },
    _l[types_1.OperatorCode.BooleanMatch] = {
        type: types_1.Type.Boolean,
        name: types_1.BooleanOperatorName.Match,
        arguments: [
            {
                name: 'categories',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
            {
                name: 'default',
                optional: false,
                type: types_1.MirArgumentType.Boolean,
            },
        ],
        outputType: types_1.OutputType.MatchOutput,
        description: function (subscript) {
            if (subscript === void 0) { subscript = 'subscript'; }
            return "Match the Boolean input with \"" + subscript + "\" and return the value asociated with it. Similar than a switch statement";
        },
    },
    _l[types_1.OperatorCode.BooleanNegate] = {
        type: types_1.Type.Boolean,
        name: types_1.BooleanOperatorName.Negate,
        arguments: [],
        outputType: types_1.OutputType.Boolean,
        description: function () {
            return 'Negate the input Boolean (make it True if it was False, or make it False if it was True)';
        },
    },
    _l[types_1.OperatorCode.BytesAsString] = {
        type: types_1.Type.Bytes,
        name: types_1.BytesOperatorName.AsString,
        arguments: [],
        outputType: types_1.OutputType.String,
        description: function () { return descriptions.cast('Bytes', 'String'); },
    },
    _l[types_1.OperatorCode.BytesHash] = {
        type: types_1.Type.Bytes,
        name: types_1.BytesOperatorName.Hash,
        arguments: [],
        outputType: types_1.OutputType.Bytes,
        description: function () { return 'Compute the hash of the input Bytes'; },
    },
    _l[types_1.OperatorCode.IntegerAbsolute] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.Absolute,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () { return 'Calculate the absolute value of the input Integer'; },
    },
    _l[types_1.OperatorCode.IntegerAsFloat] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.AsFloat,
        arguments: [],
        outputType: types_1.OutputType.Float,
        description: function () { return descriptions.cast('Integer', 'Float'); },
    },
    _l[types_1.OperatorCode.IntegerAsString] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.AsString,
        arguments: [
            {
                name: 'base',
                optional: true,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.String,
        description: function () { return descriptions.cast('Integer', 'String'); },
    },
    _l[types_1.OperatorCode.IntegerGreaterThan] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.GreaterThan,
        arguments: [
            {
                name: 'value',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: function (argument) {
            if (argument === void 0) { argument = 'argument'; }
            return "Check if the input Integer is greater than " + argument + " (output will be Boolean)";
        },
    },
    _l[types_1.OperatorCode.IntegerLessThan] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.LessThan,
        arguments: [
            {
                name: 'value',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: function (argument) {
            if (argument === void 0) { argument = 'argument'; }
            return "Check if the input Integer is greater than " + argument + " (output will be Boolean)";
        },
    },
    _l[types_1.OperatorCode.IntegerMatch] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.Match,
        arguments: [],
        outputType: types_1.OutputType.MatchOutput,
        description: function (subscript) {
            if (subscript === void 0) { subscript = 'subscript'; }
            return "Match the Integer input with " + subscript + " and return the value asociated with it. Similar than a switch statement";
        },
    },
    _l[types_1.OperatorCode.IntegerModulo] = {
        type: types_1.Type.Integer,
        name: 'modulo',
        arguments: [
            {
                name: 'modulus',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Integer,
        description: function (argument) {
            if (argument === void 0) { argument = 'argument'; }
            return "Calculate the integer division of the input integer by " + argument;
        },
    },
    _l[types_1.OperatorCode.IntegerMultiply] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.Multiply,
        arguments: [
            {
                name: 'factor',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Integer,
        description: function (factor) {
            if (factor === void 0) { factor = 'factor'; }
            return "Multiply the input Integer by " + factor;
        },
    },
    _l[types_1.OperatorCode.IntegerNegate] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.Negate,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () { return "Calculate the negative of the input Integer"; },
    },
    _l[types_1.OperatorCode.IntegerPower] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.Power,
        arguments: [
            {
                name: 'exponent',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Integer,
        description: function (exponent) {
            if (exponent === void 0) { exponent = 'exponent'; }
            return "Calculate the input Integer raised to the power of " + exponent;
        },
    },
    _l[types_1.OperatorCode.IntegerReciprocal] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.Reciprocal,
        arguments: [],
        outputType: types_1.OutputType.Float,
        description: function () {
            return 'Calculate the multiplicative inverse (1/x) of the input Integer, and manage the result as Float.';
        },
    },
    _l[types_1.OperatorCode.IntegerSum] = {
        type: types_1.Type.Integer,
        name: types_1.IntegerOperatorName.Sum,
        arguments: [
            {
                name: 'addend',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.Integer,
        description: function (addend) {
            if (addend === void 0) { addend = 'addend'; }
            return "Sum " + addend + " to the input Integer";
        },
    },
    _l[types_1.OperatorCode.FloatAbsolute] = {
        type: types_1.Type.Float,
        name: types_1.IntegerOperatorName.Absolute,
        arguments: [],
        outputType: types_1.OutputType.Float,
        description: function () {
            return 'Compute the absolute value of the input Float, and manage the result as Float.';
        },
    },
    _l[types_1.OperatorCode.FloatAsString] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.AsString,
        arguments: [
            {
                name: 'decimals',
                optional: false,
                type: types_1.MirArgumentType.Integer,
            },
        ],
        outputType: types_1.OutputType.String,
        description: function () { return descriptions.cast('Float', 'String'); },
    },
    _l[types_1.OperatorCode.FloatCeiling] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Ceiling,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () { return 'Compute the the least Integer greater than or equal the input Float'; },
    },
    _l[types_1.OperatorCode.FloatGraterThan] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.GreaterThan,
        arguments: [
            {
                name: 'value',
                optional: false,
                type: types_1.MirArgumentType.Float,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: function (value) {
            if (value === void 0) { value = 'value'; }
            return "Compare if the input Float is greater than " + value + ", and manage the value as Boolean.";
        },
    },
    _l[types_1.OperatorCode.FloatFloor] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Floor,
        arguments: [],
        outputType: types_1.OutputType.Float,
        description: function () {
            return 'Compute the greatest integer less or equal the input Float, and manage the result as Integer';
        },
    },
    _l[types_1.OperatorCode.FloatLessThan] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.LessThan,
        arguments: [
            {
                name: 'value',
                optional: false,
                type: types_1.MirArgumentType.Float,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: function (argument) {
            if (argument === void 0) { argument = 'argument'; }
            return "Compare if the input Float is less than " + argument + ", and manage the value as Boolean";
        },
    },
    _l[types_1.OperatorCode.FloatModulo] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Modulo,
        arguments: [
            {
                name: 'modulus',
                optional: false,
                type: types_1.MirArgumentType.Float,
            },
        ],
        outputType: types_1.OutputType.Float,
        description: function (argument) {
            if (argument === void 0) { argument = 'argument'; }
            return "Compute the division by the input Float and " + argument + ". Then manage the result as Float";
        },
    },
    _l[types_1.OperatorCode.FloatMultiply] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Multiply,
        arguments: [
            {
                name: 'factor',
                optional: false,
                type: types_1.MirArgumentType.Float,
            },
        ],
        outputType: types_1.OutputType.Float,
        description: function (argument) {
            if (argument === void 0) { argument = 'argument'; }
            return "Compute the product by the input Float and " + argument + ". Then manage the result as Integer";
        },
    },
    _l[types_1.OperatorCode.FloatNegate] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Negate,
        arguments: [],
        outputType: types_1.OutputType.Float,
        description: function () { return "Compute the negative of the input Integer, and manage the result as Float"; },
    },
    _l[types_1.OperatorCode.FloatPower] = {
        type: types_1.Type.Float,
        name: 'power',
        arguments: [
            {
                name: types_1.FloatOperatorName.Power,
                optional: false,
                type: types_1.MirArgumentType.Float,
            },
        ],
        outputType: types_1.OutputType.Float,
        description: function (exponent) {
            if (exponent === void 0) { exponent = 'exponent'; }
            return "Compute the input Float raised to the power of " + exponent + ". Then, handle the result as Float.";
        },
    },
    _l[types_1.OperatorCode.FloatReciprocal] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Reciprocal,
        arguments: [],
        outputType: types_1.OutputType.Float,
        description: function () {
            return 'Compute the multiplicative inverse of the input Float and manage the result as Float';
        },
    },
    _l[types_1.OperatorCode.FloatRound] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Round,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () { return 'Round integer part from the Float input, and manage the result as Integer'; },
    },
    _l[types_1.OperatorCode.Floatsum] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Sum,
        arguments: [
            {
                name: 'addend',
                optional: false,
                type: types_1.MirArgumentType.Float,
            },
        ],
        outputType: types_1.OutputType.Float,
        description: function (addend) {
            if (addend === void 0) { addend = 'addend'; }
            return "Compute the addition between the input Float and " + addend + ". Then handle the result as Float.";
        },
    },
    _l[types_1.OperatorCode.FloatTruncate] = {
        type: types_1.Type.Float,
        name: types_1.FloatOperatorName.Truncate,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () { return 'Take integer part from the Float input, and manage the result as Integer.'; },
    },
    _l[types_1.OperatorCode.MapEntries] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.Entries,
        arguments: [],
        outputType: types_1.OutputType.Array,
        description: function () {
            return "Obtain a list of key-value tuples from the input Map, and manage the value as Array.";
        },
    },
    _l[types_1.OperatorCode.MapGetArray] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.GetArray,
        arguments: [
            {
                name: 'key',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
        ],
        outputType: types_1.OutputType.Array,
        description: descriptions.getKey('Map', 'Array'),
    },
    _l[types_1.OperatorCode.MapGetBoolean] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.GetBoolean,
        arguments: [
            {
                name: 'key',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
        ],
        outputType: types_1.OutputType.Boolean,
        description: descriptions.getKey('Map', 'Boolean'),
    },
    _l[types_1.OperatorCode.MapGetBytes] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.GetBytes,
        arguments: [
            {
                name: 'key',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
        ],
        outputType: types_1.OutputType.Bytes,
        description: descriptions.getKey('Map', 'Bytes'),
    },
    _l[types_1.OperatorCode.MapGetInteger] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.GetInteger,
        arguments: [
            {
                name: 'key',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
        ],
        outputType: types_1.OutputType.Integer,
        description: descriptions.getKey('Map', 'Integer'),
    },
    _l[types_1.OperatorCode.MapGetFloat] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.GetFloat,
        arguments: [
            {
                name: 'key',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
        ],
        outputType: types_1.OutputType.Float,
        description: descriptions.getKey('Map', 'Float'),
    },
    _l[types_1.OperatorCode.MapGetMap] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.GetMap,
        arguments: [
            {
                name: 'key',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
        ],
        outputType: types_1.OutputType.Map,
        description: descriptions.getKey('Map', 'Map'),
    },
    _l[types_1.OperatorCode.MapGetString] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.GetString,
        arguments: [
            {
                name: 'key',
                optional: false,
                type: types_1.MirArgumentType.String,
            },
        ],
        outputType: types_1.OutputType.String,
        description: descriptions.getKey('Map', 'String'),
    },
    _l[types_1.OperatorCode.MapKeys] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.Keys,
        arguments: [],
        outputType: types_1.OutputType.ArrayString,
        description: function () {
            return 'Obtain a list with the keys names of the input Map, and manage the value as Array of String.';
        },
    },
    _l[types_1.OperatorCode.MapValuesArray] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.valuesArray,
        arguments: [],
        outputType: types_1.OutputType.ArrayArray,
        description: function () { return descriptions.mapValues('Array'); },
    },
    _l[types_1.OperatorCode.MapValuesBoolean] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.valuesBoolean,
        arguments: [],
        outputType: types_1.OutputType.ArrayBoolean,
        description: function () { return descriptions.mapValues('Boolean'); },
    },
    _l[types_1.OperatorCode.MapValuesBytes] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.valuesBytes,
        arguments: [],
        outputType: types_1.OutputType.ArrayBytes,
        description: function () { return descriptions.mapValues('Bytes'); },
    },
    _l[types_1.OperatorCode.MapValuesInteger] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.valuesInteger,
        arguments: [],
        outputType: types_1.OutputType.ArrayInteger,
        description: function () { return descriptions.mapValues('Integer'); },
    },
    _l[types_1.OperatorCode.MapValuesFloat] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.valuesFloat,
        arguments: [],
        outputType: types_1.OutputType.ArrayFloat,
        description: function () { return descriptions.mapValues('Float'); },
    },
    _l[types_1.OperatorCode.MapValuesMap] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.valuesMap,
        arguments: [],
        outputType: types_1.OutputType.ArrayMap,
        description: function () { return descriptions.mapValues('Map'); },
    },
    _l[types_1.OperatorCode.MapValuesString] = {
        type: types_1.Type.Map,
        name: types_1.MapOperatorName.valuesString,
        arguments: [],
        outputType: types_1.OutputType.ArrayString,
        description: function () { return descriptions.mapValues('String'); },
    },
    _l[types_1.OperatorCode.StringAsBoolean] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.AsBoolean,
        arguments: [],
        outputType: types_1.OutputType.Boolean,
        description: function () { return descriptions.cast('String', 'Boolean'); },
    },
    _l[types_1.OperatorCode.StringAsBytes] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.AsBytes,
        arguments: [],
        outputType: types_1.OutputType.Bytes,
        description: function () { return descriptions.cast('String', 'Bytes'); },
    },
    _l[types_1.OperatorCode.StringAsFloat] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.AsFloat,
        arguments: [],
        outputType: types_1.OutputType.Float,
        description: function () { return descriptions.cast('String', 'Float'); },
    },
    _l[types_1.OperatorCode.StringAsInteger] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.AsInteger,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () { return descriptions.cast('String', 'Integer'); },
    },
    _l[types_1.OperatorCode.StringLength] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.Length,
        arguments: [],
        outputType: types_1.OutputType.Integer,
        description: function () {
            return 'Count the number of elements of the input String, and mannage the values as Integer.';
        },
    },
    _l[types_1.OperatorCode.StringMatch] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.Match,
        arguments: [],
        outputType: types_1.OutputType.MatchOutput,
        description: function (subscript) {
            if (subscript === void 0) { subscript = 'subscript'; }
            return "Match the String input with " + subscript + " and return the value asociated with it. Similar than a switch statement";
        },
    },
    _l[types_1.OperatorCode.StringParseJsonArray] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.ParseJsonArray,
        arguments: [],
        outputType: types_1.OutputType.Array,
        description: function () { return 'Interpretate the input String as a JSON-encoded Array structure.'; },
    },
    _l[types_1.OperatorCode.StringParseJsonMap] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.ParseJsonMap,
        arguments: [],
        outputType: types_1.OutputType.Map,
        description: function () { return 'Interpretate the input String as a JSON-encoded Map structure.'; },
    },
    _l[types_1.OperatorCode.StringParseXML] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.ParseXml,
        arguments: [],
        outputType: types_1.OutputType.Map,
        description: function () { return 'Interpretate the input String as a XML-encoded Map structure.'; },
    },
    _l[types_1.OperatorCode.StringToLowerCase] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.ToLowerCase,
        arguments: [],
        outputType: types_1.OutputType.String,
        description: function () { return 'Convert to lowercase the input String, and manage the value as String'; },
    },
    _l[types_1.OperatorCode.StringToUpperCase] = {
        type: types_1.Type.String,
        name: types_1.StringOperatorName.ToUpperCase,
        arguments: [],
        outputType: types_1.OutputType.String,
        description: function () { return 'Convert to uppercase the input String, and manage the value as String'; },
    },
    _l);
var Cache = /** @class */ (function () {
    function Cache() {
        this.counter = 0;
        this.cache = {};
    }
    Cache.prototype.getLastIndex = function () {
        return this.counter + 1;
    };
    Cache.prototype.get = function (cacheId) {
        return this.cache[cacheId];
    };
    Cache.prototype.insert = function (item) {
        this.cache[++this.counter] = item;
        return { id: this.counter };
    };
    Cache.prototype.set = function (id, item) {
        this.cache[id] = item;
    };
    return Cache;
}());
exports.Cache = Cache;
function generateOption(label, outputType) {
    return {
        hierarchicalType: 'operatorOption',
        label: label,
        markupType: 'option',
        outputType: outputType,
    };
}
exports.primitiveMarkupOptions = {
    array: Object.entries(exports.typeSystem.Array).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
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
    ].map(function (x) {
        return generateOption(x.label, x.outputType);
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
    ].map(function (x) {
        return generateOption(x.label, x.outputType);
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
    ].map(function (x) {
        return generateOption(x.label, x.outputType);
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
    ].map(function (x) {
        return generateOption(x.label, x.outputType);
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
    ].map(function (x) {
        return generateOption(x.label, x.outputType);
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
    ].map(function (x) {
        return generateOption(x.label, x.outputType);
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
    ].map(function (x) {
        return generateOption(x.label, x.outputType);
    }),
    boolean: Object.entries(exports.typeSystem.Boolean).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
    }),
    bytes: Object.entries(exports.typeSystem.Bytes).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
    }),
    filterOutput: Object.entries(exports.typeSystem.Array).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
    }),
    float: Object.entries(exports.typeSystem.Float).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
    }),
    matchOutput: null,
    reducerOutput: null,
    string: Object.entries(exports.typeSystem.String).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
    }),
    subscriptOutput: null,
    map: Object.entries(exports.typeSystem.Map).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
    }),
    integer: Object.entries(exports.typeSystem.Integer).map(function (x) {
        return generateOption(types_1.OperatorCode[x[1][0]], x[1][1]);
    }),
};
exports.aTFilterMarkupOptions = function () {
    return utils_1.getEnumNames(types_1.AggregationTallyFilter).map(function (filter) {
        return generateOption(filter, types_1.OutputType.FilterOutput);
    });
};
exports.aTReducerMarkupOptions = function () {
    return utils_1.getEnumNames(types_1.AggregationTallyReducer).map(function (filter) {
        return generateOption(filter, types_1.OutputType.FilterOutput);
    });
};
exports.allMarkupOptions = utils_1.removeRepeatedOptions(__spread(exports.primitiveMarkupOptions.array, exports.primitiveMarkupOptions.arrayBoolean, exports.primitiveMarkupOptions.arrayArray, exports.primitiveMarkupOptions.arrayBytes, exports.primitiveMarkupOptions.arrayFloat, exports.primitiveMarkupOptions.arrayInteger, exports.primitiveMarkupOptions.arrayMap, exports.primitiveMarkupOptions.arrayString, exports.primitiveMarkupOptions.boolean, exports.primitiveMarkupOptions.bytes, exports.primitiveMarkupOptions.filterOutput, exports.primitiveMarkupOptions.float, exports.primitiveMarkupOptions.string, exports.primitiveMarkupOptions.map, exports.primitiveMarkupOptions.integer));
exports.markupOptions = (_m = {},
    _m[types_1.OutputType.Array] = __spread(exports.primitiveMarkupOptions.array),
    _m[types_1.OutputType.ArrayArray] = __spread(exports.primitiveMarkupOptions.arrayArray),
    _m[types_1.OutputType.ArrayBoolean] = __spread(exports.primitiveMarkupOptions.arrayBoolean),
    _m[types_1.OutputType.ArrayBytes] = __spread(exports.primitiveMarkupOptions.arrayBytes),
    _m[types_1.OutputType.ArrayFloat] = __spread(exports.primitiveMarkupOptions.arrayFloat),
    _m[types_1.OutputType.ArrayInteger] = __spread(exports.primitiveMarkupOptions.arrayInteger),
    _m[types_1.OutputType.ArrayMap] = __spread(exports.primitiveMarkupOptions.arrayMap),
    _m[types_1.OutputType.ArrayString] = __spread(exports.primitiveMarkupOptions.arrayString),
    _m[types_1.OutputType.Boolean] = __spread(exports.primitiveMarkupOptions.boolean, exports.primitiveMarkupOptions.string),
    _m[types_1.OutputType.Bytes] = __spread(exports.primitiveMarkupOptions.bytes, exports.primitiveMarkupOptions.string),
    _m[types_1.OutputType.FilterOutput] = __spread(exports.primitiveMarkupOptions.filterOutput),
    _m[types_1.OutputType.Float] = __spread(exports.primitiveMarkupOptions.float, exports.primitiveMarkupOptions.string),
    _m[types_1.OutputType.Integer] = __spread(exports.primitiveMarkupOptions.integer, exports.primitiveMarkupOptions.float, exports.primitiveMarkupOptions.string),
    _m[types_1.OutputType.Map] = __spread(exports.primitiveMarkupOptions.map),
    _m[types_1.OutputType.MatchOutput] = exports.allMarkupOptions,
    _m[types_1.OutputType.ReducerOutput] = exports.allMarkupOptions,
    _m[types_1.OutputType.String] = __spread(exports.primitiveMarkupOptions.string),
    _m[types_1.OutputType.SubscriptOutput] = exports.allMarkupOptions,
    _m);
