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
class HealthCheckController {
    static async get() {
        return {
            statusCode: _ApiTypes.StatusEnum.OK,
            data: {
                message: "OK"
            }
        };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9IZWFsdGhDaGVja0NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdHVzRW51bSB9IGZyb20gJ0AvdHlwZXMvQXBpVHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgSGVhbHRoQ2hlY2tDb250cm9sbGVyIHtcbiAgc3RhdGljIGFzeW5jIGdldCgpIHtcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlOiBTdGF0dXNFbnVtLk9LLCBkYXRhOiB7IG1lc3NhZ2U6ICdPSycgfSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhbHRoQ2hlY2tDb250cm9sbGVyIiwiZ2V0Iiwic3RhdHVzQ29kZSIsIlN0YXR1c0VudW0iLCJPSyIsImRhdGEiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7MEJBRmM7QUFFcEIsTUFBTUE7SUFDWCxhQUFhQyxNQUFNO1FBQ2pCLE9BQU87WUFBRUMsWUFBWUMsb0JBQVUsQ0FBQ0MsRUFBRTtZQUFFQyxNQUFNO2dCQUFFQyxTQUFTO1lBQUs7UUFBRTtJQUM5RDtBQUNGIn0=