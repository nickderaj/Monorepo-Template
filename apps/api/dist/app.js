"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _cors = /*#__PURE__*/ _interop_require_default(require("cors"));
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _morgan = /*#__PURE__*/ _interop_require_default(require("morgan"));
const _healthCheckRoutes = require("./routes/healthCheckRoutes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use("/", _healthCheckRoutes.healthCheckRoutes);
const _default = app;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgZXhwcmVzcywgeyBFeHByZXNzIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgeyBoZWFsdGhDaGVja1JvdXRlcyB9IGZyb20gJy4vcm91dGVzL2hlYWx0aENoZWNrUm91dGVzJztcblxuY29uc3QgYXBwOiBFeHByZXNzID0gZXhwcmVzcygpO1xuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuXG5hcHAudXNlKCcvJywgaGVhbHRoQ2hlY2tSb3V0ZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXSwibmFtZXMiOlsiYXBwIiwiZXhwcmVzcyIsInVzZSIsIm1vcmdhbiIsImpzb24iLCJjb3JzIiwiaGVhbHRoQ2hlY2tSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUFBOzs7NkRBWmlCO2dFQUNnQjsrREFDZDttQ0FDZTs7Ozs7O0FBRWxDLE1BQU1BLE1BQWVDLElBQUFBLGdCQUFPO0FBQzVCRCxJQUFJRSxHQUFHLENBQUNDLElBQUFBLGVBQU0sRUFBQztBQUNmSCxJQUFJRSxHQUFHLENBQUNELGdCQUFPLENBQUNHLElBQUk7QUFDcEJKLElBQUlFLEdBQUcsQ0FBQ0csSUFBQUEsYUFBSTtBQUVaTCxJQUFJRSxHQUFHLENBQUMsS0FBS0ksb0NBQWlCO01BRTlCLFdBQWVOIn0=