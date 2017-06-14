# pageA.js

``` javascript
import { split } from "lodash-es";

console.log(split("1,2,3,4,5", /,/, 3));
```

# pageB.js

``` javascript
import { split } from "lodash-es";

console.log(split("5,4,3,2,1", /,/, 3));
```

# webpack.config.js

``` javascript
var path = require("path");
var webpack = require("../../");
module.exports = [
	{
		name: "one-entry",
		entry: {
			pageA: "./pageA",
		},
		output: {
			path: path.join(__dirname, "js"),
			filename: "[name]_one.js"
		},
		plugins: [
			new webpack.optimize.ModuleConcatenationPlugin()
		],
		stats: {
			maxModules: Infinity,
			exclude: () => false
		}
	},
	{
		name: "two-entries",
		entry: {
			pageA: "./pageA",
			pageB: "./pageB",
		},
		output: {
			path: path.join(__dirname, "js"),
			filename: "[name]_two.js"
		},
		plugins: [
			new webpack.optimize.ModuleConcatenationPlugin()
		],
		stats: {
			maxModules: Infinity,
			exclude: () => false
		}
	}
];
```

# Info

## Uncompressed

```
Hash: 6205aa1afc7fcbdfd9ab18d8185ea8125484bc5c
Version: webpack 3.0.0-rc.1
Child one-entry:
    Hash: 6205aa1afc7fcbdfd9ab
           Asset    Size  Chunks                    Chunk Names
    pageA_one.js  664 kB       0  [emitted]  [big]  pageA
    Entrypoint pageA [big] = pageA_one.js
    chunk    {0} pageA_one.js (pageA) 624 kB [entry] [rendered]
        > pageA [] 
        [0] (webpack)/node_modules/lodash-es/_root.js 298 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_root.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-30
            harmony import ./_root.js [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 9:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 7:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 3:0-30
        [1] (webpack)/node_modules/lodash-es/isBuffer.js 1.11 kB {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 124:0-52
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 6:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 7:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 17:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 4:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 16:0-52
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 7:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 9:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 16:0-37
        [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 763 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
        [3] (webpack)/node_modules/lodash-es/stubFalse.js 278 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./stubFalse.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 2:0-39
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 254:0-54
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 3:0-39
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 26:0-54
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 26:0-39
        [4] (webpack)/buildin/harmony-module.js 596 bytes {0} [built]
            cjs require module [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-44
            cjs require module [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-44
            cjs require module [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-44
        [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 171 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_freeGlobal.js [0] (webpack)/node_modules/lodash-es/_root.js 1:0-42
            harmony import ./_freeGlobal.js [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-42
        [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1.05 kB {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_cloneBuffer.js [7] ./pageA.js + 635 modules 6:0-44
            harmony import ./_cloneBuffer.js [7] ./pageA.js + 635 modules 2:0-44
        [7] ./pageA.js + 635 modules 619 kB {0} [built]
            [no exports]
        [8] (webpack)/buildin/global.js 509 bytes {0} [built]
            cjs require global [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 1:0-36
Child two-entries:
    Hash: 18d8185ea8125484bc5c
           Asset    Size  Chunks                    Chunk Names
    pageB_two.js  724 kB       0  [emitted]  [big]  pageB
    pageA_two.js  724 kB       1  [emitted]  [big]  pageA
    Entrypoint pageA [big] = pageA_two.js
    Entrypoint pageB [big] = pageB_two.js
    chunk    {0} pageB_two.js (pageB) 624 kB [entry] [rendered]
        > pageB [10] ./pageB.js 
        [0] (webpack)/node_modules/lodash-es/_root.js 298 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_root.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-30
            harmony import ./_root.js [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-30
        [1] (webpack)/node_modules/lodash-es/isBuffer.js 1.11 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 124:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 17:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 4:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-37
        [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 763 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
        [3] (webpack)/node_modules/lodash-es/stubFalse.js 278 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./stubFalse.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 2:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 254:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-39
        [4] (webpack)/buildin/harmony-module.js 596 bytes {0} {1} [built]
            cjs require module [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-44
            cjs require module [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-44
            cjs require module [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-44
        [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 171 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_freeGlobal.js [0] (webpack)/node_modules/lodash-es/_root.js 1:0-42
            harmony import ./_freeGlobal.js [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-42
        [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1.05 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-44
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-44
        [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 619 kB {1} {0} [built]
            [exports: add, after, ary, assign, assignIn, assignInWith, assignWith, at, attempt, before, bind, bindAll, bindKey, camelCase, capitalize, castArray, ceil, chain, chunk, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, commit, compact, concat, cond, conforms, conformsTo, constant, countBy, create, curry, curryRight, debounce, deburr, defaultTo, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, divide, drop, dropRight, dropRightWhile, dropWhile, each, eachRight, endsWith, entries, entriesIn, eq, escape, escapeRegExp, every, extend, extendWith, fill, filter, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, floor, flow, flowRight, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, fromPairs, functions, functionsIn, get, groupBy, gt, gte, has, hasIn, head, identity, inRange, includes, indexOf, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invoke, invokeMap, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, iteratee, join, kebabCase, keyBy, keys, keysIn, last, lastIndexOf, lodash, lowerCase, lowerFirst, lt, lte, map, mapKeys, mapValues, matches, matchesProperty, max, maxBy, mean, meanBy, memoize, merge, mergeWith, method, methodOf, min, minBy, mixin, multiply, negate, next, noop, now, nth, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, pad, padEnd, padStart, parseInt, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, random, range, rangeRight, rearg, reduce, reduceRight, reject, remove, repeat, replace, rest, result, reverse, round, sample, sampleSize, set, setWith, shuffle, size, slice, snakeCase, some, sortBy, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, split, spread, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, tail, take, takeRight, takeRightWhile, takeWhile, tap, template, templateSettings, throttle, thru, times, toArray, toFinite, toInteger, toIterator, toJSON, toLength, toLower, toNumber, toPairs, toPairsIn, toPath, toPlainObject, toSafeInteger, toString, toUpper, transform, trim, trimEnd, trimStart, truncate, unary, unescape, union, unionBy, unionWith, uniq, uniqBy, uniqWith, uniqueId, unset, unzip, unzipWith, update, updateWith, upperCase, upperFirst, value, valueOf, values, valuesIn, without, words, wrap, wrapperAt, wrapperChain, wrapperCommit, wrapperLodash, wrapperNext, wrapperPlant, wrapperReverse, wrapperToIterator, wrapperValue, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, zipWith, default]
            [only some exports used: split]
            harmony import lodash-es [9] ./pageA.js 1:0-34
            harmony import lodash-es [10] ./pageB.js 1:0-34
        [8] (webpack)/buildin/global.js 509 bytes {0} {1} [built]
            cjs require global [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 1:0-36
       [10] ./pageB.js 80 bytes {0} [built]
            [no exports]
    chunk    {1} pageA_two.js (pageA) 624 kB [entry] [rendered]
        > pageA [9] ./pageA.js 
        [0] (webpack)/node_modules/lodash-es/_root.js 298 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_root.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-30
            harmony import ./_root.js [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-30
        [1] (webpack)/node_modules/lodash-es/isBuffer.js 1.11 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 124:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 17:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 4:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-37
        [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 763 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
        [3] (webpack)/node_modules/lodash-es/stubFalse.js 278 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./stubFalse.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 2:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 254:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-39
        [4] (webpack)/buildin/harmony-module.js 596 bytes {0} {1} [built]
            cjs require module [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-44
            cjs require module [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-44
            cjs require module [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-44
        [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 171 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_freeGlobal.js [0] (webpack)/node_modules/lodash-es/_root.js 1:0-42
            harmony import ./_freeGlobal.js [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-42
        [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1.05 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-44
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-44
        [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 619 kB {1} {0} [built]
            [exports: add, after, ary, assign, assignIn, assignInWith, assignWith, at, attempt, before, bind, bindAll, bindKey, camelCase, capitalize, castArray, ceil, chain, chunk, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, commit, compact, concat, cond, conforms, conformsTo, constant, countBy, create, curry, curryRight, debounce, deburr, defaultTo, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, divide, drop, dropRight, dropRightWhile, dropWhile, each, eachRight, endsWith, entries, entriesIn, eq, escape, escapeRegExp, every, extend, extendWith, fill, filter, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, floor, flow, flowRight, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, fromPairs, functions, functionsIn, get, groupBy, gt, gte, has, hasIn, head, identity, inRange, includes, indexOf, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invoke, invokeMap, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, iteratee, join, kebabCase, keyBy, keys, keysIn, last, lastIndexOf, lodash, lowerCase, lowerFirst, lt, lte, map, mapKeys, mapValues, matches, matchesProperty, max, maxBy, mean, meanBy, memoize, merge, mergeWith, method, methodOf, min, minBy, mixin, multiply, negate, next, noop, now, nth, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, pad, padEnd, padStart, parseInt, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, random, range, rangeRight, rearg, reduce, reduceRight, reject, remove, repeat, replace, rest, result, reverse, round, sample, sampleSize, set, setWith, shuffle, size, slice, snakeCase, some, sortBy, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, split, spread, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, tail, take, takeRight, takeRightWhile, takeWhile, tap, template, templateSettings, throttle, thru, times, toArray, toFinite, toInteger, toIterator, toJSON, toLength, toLower, toNumber, toPairs, toPairsIn, toPath, toPlainObject, toSafeInteger, toString, toUpper, transform, trim, trimEnd, trimStart, truncate, unary, unescape, union, unionBy, unionWith, uniq, uniqBy, uniqWith, uniqueId, unset, unzip, unzipWith, update, updateWith, upperCase, upperFirst, value, valueOf, values, valuesIn, without, words, wrap, wrapperAt, wrapperChain, wrapperCommit, wrapperLodash, wrapperNext, wrapperPlant, wrapperReverse, wrapperToIterator, wrapperValue, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, zipWith, default]
            [only some exports used: split]
            harmony import lodash-es [9] ./pageA.js 1:0-34
            harmony import lodash-es [10] ./pageB.js 1:0-34
        [8] (webpack)/buildin/global.js 509 bytes {0} {1} [built]
            cjs require global [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 1:0-36
        [9] ./pageA.js 80 bytes {1} [built]
            [no exports]
```

## Minimized (uglify-js, no zip)

```
Hash: 6205aa1afc7fcbdfd9ab18d8185ea8125484bc5c
Version: webpack 3.0.0-rc.1
Child one-entry:
    Hash: 6205aa1afc7fcbdfd9ab
           Asset   Size  Chunks             Chunk Names
    pageA_one.js  90 kB       0  [emitted]  pageA
    Entrypoint pageA = pageA_one.js
    chunk    {0} pageA_one.js (pageA) 624 kB [entry] [rendered]
        > pageA [] 
        [0] (webpack)/node_modules/lodash-es/_root.js 298 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_root.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-30
            harmony import ./_root.js [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 9:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 7:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 2:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 1:0-30
            harmony import ./_root.js [7] ./pageA.js + 635 modules 3:0-30
        [1] (webpack)/node_modules/lodash-es/isBuffer.js 1.11 kB {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 124:0-52
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 6:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 7:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 17:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 4:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 16:0-52
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 7:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 9:0-37
            harmony import ./isBuffer.js [7] ./pageA.js + 635 modules 16:0-37
        [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 763 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
            harmony import ./_nodeUtil.js [7] ./pageA.js + 635 modules 3:0-38
        [3] (webpack)/node_modules/lodash-es/stubFalse.js 278 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./stubFalse.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 2:0-39
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 254:0-54
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 3:0-39
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 26:0-54
            harmony import ./stubFalse.js [7] ./pageA.js + 635 modules 26:0-39
        [4] (webpack)/buildin/harmony-module.js 596 bytes {0} [built]
            cjs require module [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-44
            cjs require module [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-44
            cjs require module [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-44
        [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 171 bytes {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_freeGlobal.js [0] (webpack)/node_modules/lodash-es/_root.js 1:0-42
            harmony import ./_freeGlobal.js [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-42
        [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1.05 kB {0} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_cloneBuffer.js [7] ./pageA.js + 635 modules 6:0-44
            harmony import ./_cloneBuffer.js [7] ./pageA.js + 635 modules 2:0-44
        [7] ./pageA.js + 635 modules 619 kB {0} [built]
            [no exports]
        [8] (webpack)/buildin/global.js 509 bytes {0} [built]
            cjs require global [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 1:0-36
Child two-entries:
    Hash: 18d8185ea8125484bc5c
           Asset     Size  Chunks             Chunk Names
    pageB_two.js  99.9 kB       0  [emitted]  pageB
    pageA_two.js  99.9 kB       1  [emitted]  pageA
    Entrypoint pageA = pageA_two.js
    Entrypoint pageB = pageB_two.js
    chunk    {0} pageB_two.js (pageB) 624 kB [entry] [rendered]
        > pageB [10] ./pageB.js 
        [0] (webpack)/node_modules/lodash-es/_root.js 298 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_root.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-30
            harmony import ./_root.js [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-30
        [1] (webpack)/node_modules/lodash-es/isBuffer.js 1.11 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 124:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 17:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 4:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-37
        [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 763 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
        [3] (webpack)/node_modules/lodash-es/stubFalse.js 278 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./stubFalse.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 2:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 254:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-39
        [4] (webpack)/buildin/harmony-module.js 596 bytes {0} {1} [built]
            cjs require module [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-44
            cjs require module [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-44
            cjs require module [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-44
        [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 171 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_freeGlobal.js [0] (webpack)/node_modules/lodash-es/_root.js 1:0-42
            harmony import ./_freeGlobal.js [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-42
        [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1.05 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-44
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-44
        [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 619 kB {1} {0} [built]
            [exports: add, after, ary, assign, assignIn, assignInWith, assignWith, at, attempt, before, bind, bindAll, bindKey, camelCase, capitalize, castArray, ceil, chain, chunk, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, commit, compact, concat, cond, conforms, conformsTo, constant, countBy, create, curry, curryRight, debounce, deburr, defaultTo, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, divide, drop, dropRight, dropRightWhile, dropWhile, each, eachRight, endsWith, entries, entriesIn, eq, escape, escapeRegExp, every, extend, extendWith, fill, filter, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, floor, flow, flowRight, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, fromPairs, functions, functionsIn, get, groupBy, gt, gte, has, hasIn, head, identity, inRange, includes, indexOf, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invoke, invokeMap, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, iteratee, join, kebabCase, keyBy, keys, keysIn, last, lastIndexOf, lodash, lowerCase, lowerFirst, lt, lte, map, mapKeys, mapValues, matches, matchesProperty, max, maxBy, mean, meanBy, memoize, merge, mergeWith, method, methodOf, min, minBy, mixin, multiply, negate, next, noop, now, nth, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, pad, padEnd, padStart, parseInt, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, random, range, rangeRight, rearg, reduce, reduceRight, reject, remove, repeat, replace, rest, result, reverse, round, sample, sampleSize, set, setWith, shuffle, size, slice, snakeCase, some, sortBy, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, split, spread, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, tail, take, takeRight, takeRightWhile, takeWhile, tap, template, templateSettings, throttle, thru, times, toArray, toFinite, toInteger, toIterator, toJSON, toLength, toLower, toNumber, toPairs, toPairsIn, toPath, toPlainObject, toSafeInteger, toString, toUpper, transform, trim, trimEnd, trimStart, truncate, unary, unescape, union, unionBy, unionWith, uniq, uniqBy, uniqWith, uniqueId, unset, unzip, unzipWith, update, updateWith, upperCase, upperFirst, value, valueOf, values, valuesIn, without, words, wrap, wrapperAt, wrapperChain, wrapperCommit, wrapperLodash, wrapperNext, wrapperPlant, wrapperReverse, wrapperToIterator, wrapperValue, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, zipWith, default]
            [only some exports used: split]
            harmony import lodash-es [9] ./pageA.js 1:0-34
            harmony import lodash-es [10] ./pageB.js 1:0-34
        [8] (webpack)/buildin/global.js 509 bytes {0} {1} [built]
            cjs require global [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 1:0-36
       [10] ./pageB.js 80 bytes {0} [built]
            [no exports]
    chunk    {1} pageA_two.js (pageA) 624 kB [entry] [rendered]
        > pageA [9] ./pageA.js 
        [0] (webpack)/node_modules/lodash-es/_root.js 298 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_root.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-30
            harmony import ./_root.js [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 1:0-30
            harmony import ./_root.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-30
        [1] (webpack)/node_modules/lodash-es/isBuffer.js 1.11 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 124:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 17:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 4:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-52
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 7:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 9:0-37
            harmony import ./isBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 16:0-37
        [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 763 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
            harmony import ./_nodeUtil.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-38
        [3] (webpack)/node_modules/lodash-es/stubFalse.js 278 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./stubFalse.js [1] (webpack)/node_modules/lodash-es/isBuffer.js 2:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 254:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 3:0-39
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-54
            harmony import ./stubFalse.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 26:0-39
        [4] (webpack)/buildin/harmony-module.js 596 bytes {0} {1} [built]
            cjs require module [1] (webpack)/node_modules/lodash-es/isBuffer.js 1:0-44
            cjs require module [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-44
            cjs require module [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1:0-44
        [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 171 bytes {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_freeGlobal.js [0] (webpack)/node_modules/lodash-es/_root.js 1:0-42
            harmony import ./_freeGlobal.js [2] (webpack)/node_modules/lodash-es/_nodeUtil.js 1:0-42
        [6] (webpack)/node_modules/lodash-es/_cloneBuffer.js 1.05 kB {0} {1} [built]
            [exports: default]
            [only some exports used: default]
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 6:0-44
            harmony import ./_cloneBuffer.js [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 2:0-44
        [7] (webpack)/node_modules/lodash-es/lodash.js + 634 modules 619 kB {1} {0} [built]
            [exports: add, after, ary, assign, assignIn, assignInWith, assignWith, at, attempt, before, bind, bindAll, bindKey, camelCase, capitalize, castArray, ceil, chain, chunk, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, commit, compact, concat, cond, conforms, conformsTo, constant, countBy, create, curry, curryRight, debounce, deburr, defaultTo, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, divide, drop, dropRight, dropRightWhile, dropWhile, each, eachRight, endsWith, entries, entriesIn, eq, escape, escapeRegExp, every, extend, extendWith, fill, filter, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, floor, flow, flowRight, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, fromPairs, functions, functionsIn, get, groupBy, gt, gte, has, hasIn, head, identity, inRange, includes, indexOf, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invoke, invokeMap, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, iteratee, join, kebabCase, keyBy, keys, keysIn, last, lastIndexOf, lodash, lowerCase, lowerFirst, lt, lte, map, mapKeys, mapValues, matches, matchesProperty, max, maxBy, mean, meanBy, memoize, merge, mergeWith, method, methodOf, min, minBy, mixin, multiply, negate, next, noop, now, nth, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, pad, padEnd, padStart, parseInt, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, random, range, rangeRight, rearg, reduce, reduceRight, reject, remove, repeat, replace, rest, result, reverse, round, sample, sampleSize, set, setWith, shuffle, size, slice, snakeCase, some, sortBy, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, split, spread, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, tail, take, takeRight, takeRightWhile, takeWhile, tap, template, templateSettings, throttle, thru, times, toArray, toFinite, toInteger, toIterator, toJSON, toLength, toLower, toNumber, toPairs, toPairsIn, toPath, toPlainObject, toSafeInteger, toString, toUpper, transform, trim, trimEnd, trimStart, truncate, unary, unescape, union, unionBy, unionWith, uniq, uniqBy, uniqWith, uniqueId, unset, unzip, unzipWith, update, updateWith, upperCase, upperFirst, value, valueOf, values, valuesIn, without, words, wrap, wrapperAt, wrapperChain, wrapperCommit, wrapperLodash, wrapperNext, wrapperPlant, wrapperReverse, wrapperToIterator, wrapperValue, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, zipWith, default]
            [only some exports used: split]
            harmony import lodash-es [9] ./pageA.js 1:0-34
            harmony import lodash-es [10] ./pageB.js 1:0-34
        [8] (webpack)/buildin/global.js 509 bytes {0} {1} [built]
            cjs require global [5] (webpack)/node_modules/lodash-es/_freeGlobal.js 1:0-36
        [9] ./pageA.js 80 bytes {1} [built]
            [no exports]
```
