"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
var cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Change to not allow requests from all sources
// Documentation: https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());
const port = process.env.PORT;
const bicycle_base = "https://data.cityofchicago.org/resource/u6pd-qa9d.json?person_type=BICYCLE&$limit=100";
const fatal_base = "https://data.cityofchicago.org/resource/u6pd-qa9d.json?injury_classification=FATAL&person_type=BICYCLE&$limit=100";
function ensure(argument, message = "This value was promised to be there.") {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }
    return argument;
}
function fillBicyclistData(instance) {
    let bicycle = {
        crash_record_id: instance.crash_record_id,
        crash_date: instance.crash_date,
        person_id: instance.person_id,
        safety_equipment: instance.safety_equipment,
        ejection: instance.ejection,
        injury_classification: instance.injury_classification,
        driver_action: instance.driver_action,
        driver_vision: instance.driver_vision,
        physical_condition: instance.physical_condition,
        pedpedal_action: instance.pedpedal_action,
        pedpedal_visibility: instance.pedpedal_visibility,
        pedpedal_location: instance.pedpedal_location,
        bac_result: instance.bac_result,
    };
    return bicycle;
}
function fillCrashData(bicycle, data) {
    return Object.assign(bicycle, {
        traffic_control_device: data.traffic_control_device,
        device_condition: data.device_condition,
        weather_condition: data.weather_condition,
        lighting_condition: data.lighting_condition,
        first_crash_type: data.first_crash_type,
        trafficway_type: data.trafficway_type,
        alignment: data.alignment,
        roadway_surface_cond: data.roadway_surface_cond,
        road_defect: data.road_defect,
        crash_type: data.crash_type,
        intersection_related_i: data.intersection_related_i,
        damage: data.damage,
        prim_contributory_cause: data.prim_contributory_cause,
        sec_contributory_cause: data.sec_contributory_cause,
        street_no: data.street_no,
        street_direction: data.street_direction,
        street_name: data.street_name,
        most_severe_injury: data.most_severe_injury,
        injuries_total: data.injuries_total,
        injuries_fatal: data.injuries_fatal,
        injuries_non_incapacitating: data.injuries_non_incapacitating,
        injuries_reported_not_evident: data.injuries_reported_not_evident,
        injuries_no_indication: data.injuries_no_indication,
        latitude: data.latitude,
        longitude: data.longitude,
    });
}
function getCrashes(crashIDs, currentBicyclists) {
    let crashResults = [];
    axios_1.default
        .get(`https://data.cityofchicago.org/resource/85ca-t3if.json?$where=crash_record_id in(${crashIDs})`)
        .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            // The ensure method is checking if currentBicyclists is empty.
            const found = ensure(currentBicyclists.find((element) => element.crash_record_id === response.data[i].crash_record_id));
            crashResults.push(fillCrashData(found, response.data[i]));
            // crashResults.push(new Crash(response.data));
            console.log(crashResults);
        }
        // res.json(crashResults);
    })
        .catch((error) => {
        console.log(error.data);
    });
    console.log(crashResults);
    return crashResults;
}
app.get("/", (req, res) => {
    let currentBicyclists = [];
    let crashIDs = [];
    let crashResults = [];
    axios_1.default
        .get(bicycle_base)
        .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            currentBicyclists.push(fillBicyclistData(response.data[i]));
            // currentBicyclists.push(new Bicyclist(response.data));
            crashIDs.push(`'${response.data[i].crash_record_id}'`);
        }
        axios_1.default
            .get(`https://data.cityofchicago.org/resource/85ca-t3if.json?$where=crash_record_id in(${crashIDs})`)
            .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                // The ensure method is checking if currentBicyclists is empty.
                const found = ensure(currentBicyclists.find((element) => element.crash_record_id === response.data[i].crash_record_id));
                crashResults.push(fillCrashData(found, response.data[i]));
                // crashResults.push(new Crash(response.data));
                console.log(crashResults);
            }
            res.json(crashResults);
        })
            .catch((error) => {
            console.log(error.data);
        });
    })
        .catch((error) => {
        res.send(error);
    });
});
// app.get("/fatalities", (req: Request, res: Response) => {
//   axios.get(fatal_base).then((response) => {
//   });
// });
app.listen(port, () => {
    console.log(`⚡️[server]: Server is now running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map