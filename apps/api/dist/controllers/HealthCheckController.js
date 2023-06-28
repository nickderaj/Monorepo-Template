"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HealthCheckController", {
    enumerable: true,
    get: function() {
        return HealthCheckController;
    }
});
const _ApiTypes = require("../types/ApiTypes");
const _util = require("util");
class HealthCheckController {
    static async get() {
        _util.Logger.info("HealthCheckController.get()");
        return {
            statusCode: _ApiTypes.StatusEnum.OK,
            data: {
                message: "OK"
            }
        };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9IZWFsdGhDaGVja0NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdHVzRW51bSB9IGZyb20gJ0AvdHlwZXMvQXBpVHlwZXMnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAndXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBIZWFsdGhDaGVja0NvbnRyb2xsZXIge1xuICBzdGF0aWMgYXN5bmMgZ2V0KCkge1xuICAgIExvZ2dlci5pbmZvKCdIZWFsdGhDaGVja0NvbnRyb2xsZXIuZ2V0KCknKTtcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlOiBTdGF0dXNFbnVtLk9LLCBkYXRhOiB7IG1lc3NhZ2U6ICdPSycgfSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhbHRoQ2hlY2tDb250cm9sbGVyIiwiZ2V0IiwiTG9nZ2VyIiwiaW5mbyIsInN0YXR1c0NvZGUiLCJTdGF0dXNFbnVtIiwiT0siLCJkYXRhIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFHYUE7OztlQUFBQTs7OzBCQUhjO3NCQUNKO0FBRWhCLE1BQU1BO0lBQ1gsYUFBYUMsTUFBTTtRQUNqQkMsWUFBTSxDQUFDQyxJQUFJLENBQUM7UUFDWixPQUFPO1lBQUVDLFlBQVlDLG9CQUFVLENBQUNDLEVBQUU7WUFBRUMsTUFBTTtnQkFBRUMsU0FBUztZQUFLO1FBQUU7SUFDOUQ7QUFDRiJ9