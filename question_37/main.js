//Large-Shirt:
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Make a \"".concat(size, "\" size T-shirt with message (").concat(text, ") print on it!"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "coding");
