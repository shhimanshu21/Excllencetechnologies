var data = [{ id: "A", name: "John" }, { id: "B", name: "Bobby" }, { id: "C", name: "Peter" }],
    ids = ["C", "A", "B"],
    order = {};

ids.forEach(function (a, i) { order[a] = i; });

data.sort(function (a, b) {
    return order[a.id] - order[b.id];
});

console.log(data);