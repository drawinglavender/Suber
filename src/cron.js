"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var supabase_js_1 = require("@supabase/supabase-js");
require("dotenv/config");
var cron_1 = require("cron");
var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (!supabaseUrl)
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
var supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
if (!supabaseServiceKey)
    throw new Error('Missing env.SUPABASE_SERVICE_KEY');
var db = (0, supabase_js_1.createClient)(supabaseUrl, supabaseServiceKey);
var callApiWithFakeData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var timeOptions, locationOptions, data, error, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                timeOptions = [10, 15, 20, 25, 30];
                locationOptions = [
                    'Arbutus Ridge',
                    'Downtown',
                    'Dunbar-Southlands',
                    'Fairview',
                    'Grandview-Woodland',
                    'Hastings-Sunrise',
                    'Kensington-Cedar Cottage',
                    'Kerrisdale',
                    'Killarney',
                    'Kitsilano',
                    'Marpole',
                    'Mount Pleasant',
                    'Oakridge',
                    'Renfrew-Collingwood',
                    'Riley Park',
                    'Shaughnessy',
                    'South Cambie',
                    'Strathcona',
                    'Sunset',
                    'Victoria-Fraserview',
                    'West End',
                    'West Point Grey'
                ];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                data = {
                    userID: faker_1.faker.string.uuid(),
                    userName: null,
                    userImage: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWDVyNGtKbHBkZVYwYmt0YjIzdTZpNXFHT0QifQ?width=160',
                    seats: Math.floor(Math.random() * 10) + 1,
                    leaveTime: new Date().getTime() +
                        timeOptions[Math.floor(Math.random() * timeOptions.length)] * 1000 * 60,
                    location: locationOptions[Math.floor(Math.random() * locationOptions.length)]
                };
                return [4 /*yield*/, db.from('listings').insert(data)];
            case 2:
                error = (_a.sent()).error;
                if (error) {
                    console.error(error);
                }
                console.log(new Date(), 'OK', data);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error calling API:', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, new cron_1.CronJob('*/5 * * * *', callApiWithFakeData, null, true)];
}); }); })();
