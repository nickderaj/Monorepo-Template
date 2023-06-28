"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const port = Number(process.env.API_PORT || 8080);
_app.default.listen(port, "0.0.0.0", ()=>{
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}!`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcblxuY29uc3QgcG9ydCA9IE51bWJlcihwcm9jZXNzLmVudi5BUElfUE9SVCB8fCA4MDgwKTtcbmFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnLCAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fSFgKTtcbn0pO1xuIl0sIm5hbWVzIjpbInBvcnQiLCJOdW1iZXIiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1BPUlQiLCJhcHAiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OzREQUFnQjs7Ozs7O0FBRWhCLE1BQU1BLE9BQU9DLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxJQUFJO0FBQzVDQyxZQUFHLENBQUNDLE1BQU0sQ0FBQ04sTUFBTSxXQUFXO0lBQzFCLHNDQUFzQztJQUN0Q08sUUFBUUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLEVBQUVSLEtBQUssQ0FBQyxDQUFDO0FBQ2pEIn0=