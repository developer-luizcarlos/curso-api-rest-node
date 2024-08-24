"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
router.get("/teste", function (req, res) {
    res.status(http_status_codes_1.StatusCodes.ACCEPTED);
    res.send("ok");
});
exports.default = router;
