"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const pet = {
    name: "Rubik",
    species: "Cat",
    adopted: true,
    age: 3
};
app.get('/', (req, res) => {
    res.json({});
});
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});
