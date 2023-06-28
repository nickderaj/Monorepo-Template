"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "apiHandler", {
    enumerable: true,
    get: function() {
        return apiHandler;
    }
});
const apiHandler = (api)=>async (req, res)=>{
        try {
            const { statusCode, data } = await api(req, res);
            return res.status(statusCode).json(data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return res.status(500).json({
                error: String(error),
                timeStamp: new Date().toISOString()
            });
        }
    };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9hcGlIYW5kbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0VudW0gfSBmcm9tICdAL3R5cGVzL0FwaVR5cGVzJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmludGVyZmFjZSBJQXBpIHtcbiAgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8eyBzdGF0dXNDb2RlOiBTdGF0dXNFbnVtOyBkYXRhOiBvYmplY3QgfT47XG59XG5cbmV4cG9ydCBjb25zdCBhcGlIYW5kbGVyID0gKGFwaTogSUFwaSkgPT4gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSwgZGF0YSB9ID0gYXdhaXQgYXBpKHJlcSwgcmVzKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhzdGF0dXNDb2RlKS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFN0cmluZyhlcnJvciksIHRpbWVTdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImFwaUhhbmRsZXIiLCJhcGkiLCJyZXEiLCJyZXMiLCJzdGF0dXNDb2RlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJTdHJpbmciLCJ0aW1lU3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLGFBQWEsQ0FBQ0MsTUFBYyxPQUFPQyxLQUFjQztRQUM1RCxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1KLElBQUlDLEtBQUtDO1lBQzVDLE9BQU9BLElBQUlHLE1BQU0sQ0FBQ0YsWUFBWUcsSUFBSSxDQUFDRjtRQUNyQyxFQUFFLE9BQU9HLE9BQU87WUFDZCxzQ0FBc0M7WUFDdENDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZCxPQUFPTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPRSxPQUFPRjtnQkFBUUcsV0FBVyxJQUFJQyxPQUFPQyxXQUFXO1lBQUc7UUFDMUY7SUFDRiJ9