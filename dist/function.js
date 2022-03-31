function add(x, y) {
    return x + y;
}
var result = add(1, 2);
function buildUserInfo(name, email) {
    if (name === void 0) { name = "-"; }
    if (email === void 0) { email = "-"; }
    return { name: name, email: email };
}
var nuser = buildUserInfo();
var add2 = function (a, b) { return a + b; };
function store(type) {
    if (type === "통조림") {
        return { a: "통조림" };
    }
    else if (type === "아이스크림") {
        return { b: "아이스크림" };
    }
    else {
        throw new Error("에러");
    }
}
var s = store("통조림");
s.a;
//# sourceMappingURL=function.js.map