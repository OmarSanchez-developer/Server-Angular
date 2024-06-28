"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _user_1 = require("../controllers/ user");
const router = (0, express_1.Router)();
router.post('/', _user_1.newUser);
router.post('/login', _user_1.loginUser);
exports.default = router;
