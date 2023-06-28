"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "healthCheckRoutes", {
    enumerable: true,
    get: function() {
        return healthCheckRoutes;
    }
});
const _HealthCheckController = require("../controllers/HealthCheckController");
const _apiHandler = require("../middlewares/apiHandler");
const _express = require("express");
const healthCheckRoutes = (0, _express.Router)();
healthCheckRoutes.route("/").get((0, _apiHandler.apiHandler)(_HealthCheckController.HealthCheckController.get));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaGVhbHRoQ2hlY2tSb3V0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhbHRoQ2hlY2tDb250cm9sbGVyIH0gZnJvbSAnQC9jb250cm9sbGVycy9IZWFsdGhDaGVja0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgYXBpSGFuZGxlciB9IGZyb20gJ0AvbWlkZGxld2FyZXMvYXBpSGFuZGxlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcblxuY29uc3QgaGVhbHRoQ2hlY2tSb3V0ZXM6IFJvdXRlciA9IFJvdXRlcigpO1xuXG5oZWFsdGhDaGVja1JvdXRlcy5yb3V0ZSgnLycpLmdldChhcGlIYW5kbGVyKEhlYWx0aENoZWNrQ29udHJvbGxlci5nZXQpKTtcblxuZXhwb3J0IHsgaGVhbHRoQ2hlY2tSb3V0ZXMgfTtcbiJdLCJuYW1lcyI6WyJoZWFsdGhDaGVja1JvdXRlcyIsIlJvdXRlciIsInJvdXRlIiwiZ2V0IiwiYXBpSGFuZGxlciIsIkhlYWx0aENoZWNrQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFRU0E7OztlQUFBQTs7O3VDQVI2Qjs0QkFDWDt5QkFDSjtBQUV2QixNQUFNQSxvQkFBNEJDLElBQUFBLGVBQU07QUFFeENELGtCQUFrQkUsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQ0MsSUFBQUEsc0JBQVUsRUFBQ0MsNENBQXFCLENBQUNGLEdBQUcifQ==