export interface IBicyclist {
  crash_record_id: string;
  crash_date: string;
  person_id: string;
  safety_equipment: string;
  ejection: string;
  injury_classification: string;
  driver_action: string;
  driver_vision: string;
  physical_condition: string;
  pedpedal_action: string;
  pedpedal_visibility: string;
  pedpedal_location: string;
  bac_result: string;
}

export class Bicyclist implements IBicyclist {
  constructor(bicyclist: IBicyclist) {
    this.crash_record_id = bicyclist.crash_record_id;
    this.crash_date = bicyclist.crash_date;
    this.person_id = bicyclist.person_id;
    this.safety_equipment = bicyclist.safety_equipment;
    this.ejection = bicyclist.ejection;
    this.injury_classification = bicyclist.injury_classification;
    this.driver_action = bicyclist.driver_action;
    this.driver_vision = bicyclist.driver_vision;
    this.physical_condition = bicyclist.physical_condition;
    this.pedpedal_action = bicyclist.pedpedal_action;
    this.pedpedal_visibility = bicyclist.pedpedal_visibility;
    this.pedpedal_location = bicyclist.pedpedal_location;
    this.bac_result = bicyclist.bac_result;
  }
  crash_record_id: string;
  crash_date: string;
  person_id: string;
  safety_equipment: string;
  ejection: string;
  injury_classification: string;
  driver_action: string;
  driver_vision: string;
  physical_condition: string;
  pedpedal_action: string;
  pedpedal_visibility: string;
  pedpedal_location: string;
  bac_result: string;
}

export interface ICrash extends IBicyclist {
  traffic_control_device: string;
  device_condition: string;
  weather_condition: string;
  lighting_condition: string;
  first_crash_type: string;
  trafficway_type: string;
  alignment: string;
  roadway_surface_cond: string;
  road_defect: string;
  crash_type: string;
  intersection_related_i: string;
  damage: string;
  prim_contributory_cause: string;
  sec_contributory_cause: string;
  street_no: string;
  street_direction: string;
  street_name: string;
  most_severe_injury: string;
  injuries_total: string;
  injuries_fatal: string;
  injuries_non_incapacitating: string;
  injuries_reported_not_evident: string;
  injuries_no_indication: string;
  latitude: string;
  longitude: string;
}

export class Crash implements ICrash {
  constructor(crash: ICrash) {
    this.crash_record_id = crash.crash_record_id;
    this.crash_date = crash.crash_date;
    this.person_id = crash.person_id;
    this.safety_equipment = crash.safety_equipment;
    this.ejection = crash.ejection;
    this.injury_classification = crash.injury_classification;
    this.driver_action = crash.driver_action;
    this.driver_vision = crash.driver_vision;
    this.physical_condition = crash.physical_condition;
    this.pedpedal_action = crash.pedpedal_action;
    this.pedpedal_visibility = crash.pedpedal_visibility;
    this.pedpedal_location = crash.pedpedal_location;
    this.bac_result = crash.bac_result;
    this.traffic_control_device = crash.traffic_control_device;
    this.device_condition = crash.device_condition;
    this.weather_condition = crash.weather_condition;
    this.lighting_condition = crash.lighting_condition;
    this.first_crash_type = crash.first_crash_type;
    this.trafficway_type = crash.trafficway_type;
    this.alignment = crash.alignment;
    this.roadway_surface_cond = crash.roadway_surface_cond;
    this.road_defect = crash.road_defect;
    this.crash_type = crash.crash_type;
    this.intersection_related_i = crash.intersection_related_i;
    this.damage = crash.damage;
    this.prim_contributory_cause = crash.prim_contributory_cause;
    this.sec_contributory_cause = crash.sec_contributory_cause;
    this.street_no = crash.street_no;
    this.street_direction = crash.street_direction;
    this.street_name = crash.street_name;
    this.most_severe_injury = crash.most_severe_injury;
    this.injuries_total = crash.injuries_total;
    this.injuries_fatal = crash.injuries_fatal;
    this.injuries_non_incapacitating = crash.injuries_non_incapacitating;
    this.injuries_reported_not_evident = crash.injuries_reported_not_evident;
    this.injuries_no_indication = crash.injuries_no_indication;
    this.latitude = crash.latitude;
    this.longitude = crash.longitude;
  }
  crash_record_id: string;
  crash_date: string;
  person_id: string;
  safety_equipment: string;
  ejection: string;
  injury_classification: string;
  driver_action: string;
  driver_vision: string;
  physical_condition: string;
  pedpedal_action: string;
  pedpedal_visibility: string;
  pedpedal_location: string;
  bac_result: string;
  traffic_control_device: string;
  device_condition: string;
  weather_condition: string;
  lighting_condition: string;
  first_crash_type: string;
  trafficway_type: string;
  alignment: string;
  roadway_surface_cond: string;
  road_defect: string;
  crash_type: string;
  intersection_related_i: string;
  damage: string;
  prim_contributory_cause: string;
  sec_contributory_cause: string;
  street_no: string;
  street_direction: string;
  street_name: string;
  most_severe_injury: string;
  injuries_total: string;
  injuries_fatal: string;
  injuries_non_incapacitating: string;
  injuries_reported_not_evident: string;
  injuries_no_indication: string;
  latitude: string;
  longitude: string;
}
