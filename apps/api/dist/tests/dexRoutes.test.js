"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interop_require_default(require("../app"));
const _ApiTypes = require("../types/ApiTypes");
const _supertest = /*#__PURE__*/ _interop_require_default(require("supertest"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
describe("health check", ()=>{
    it("should return OK for the health check route", async ()=>{
        const response = await (0, _supertest.default)(_app.default).get("/");
        expect(response.status).toBe(_ApiTypes.StatusEnum.OK);
        expect(response.body).toEqual({
            message: "OK"
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9kZXhSb3V0ZXMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJ0AvYXBwJztcbmltcG9ydCB7IFN0YXR1c0VudW0gfSBmcm9tICdAL3R5cGVzL0FwaVR5cGVzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVydGVzdCc7XG5cbmRlc2NyaWJlKCdoZWFsdGggY2hlY2snLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcmV0dXJuIE9LIGZvciB0aGUgaGVhbHRoIGNoZWNrIHJvdXRlJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdChhcHApLmdldCgnLycpO1xuICAgIGV4cGVjdChyZXNwb25zZS5zdGF0dXMpLnRvQmUoU3RhdHVzRW51bS5PSyk7XG4gICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkpLnRvRXF1YWwoeyBtZXNzYWdlOiAnT0snIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJhcHAiLCJnZXQiLCJleHBlY3QiLCJzdGF0dXMiLCJ0b0JlIiwiU3RhdHVzRW51bSIsIk9LIiwiYm9keSIsInRvRXF1YWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7OzREQUFnQjswQkFDVztrRUFDUDs7Ozs7O0FBRXBCQSxTQUFTLGdCQUFnQjtJQUN2QkMsR0FBRywrQ0FBK0M7UUFDaEQsTUFBTUMsV0FBVyxNQUFNQyxJQUFBQSxrQkFBTyxFQUFDQyxZQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUN4Q0MsT0FBT0osU0FBU0ssTUFBTSxFQUFFQyxJQUFJLENBQUNDLG9CQUFVLENBQUNDLEVBQUU7UUFDMUNKLE9BQU9KLFNBQVNTLElBQUksRUFBRUMsT0FBTyxDQUFDO1lBQUVDLFNBQVM7UUFBSztJQUNoRDtBQUNGIn0=