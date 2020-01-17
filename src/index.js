// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
    return property;
};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        enumerable: false,

        set: (element) => {property = element},
        get: () => {return property},
    });
    return property;
};

const createProtoMagicObject = () => {
    function F() {};
    F.prototype = F.__proto__;
    return F;
};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

console.log(createProtoMagicObject());
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;