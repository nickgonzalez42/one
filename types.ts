export interface Bicyclist {
  crash_record_id: string;
  crash_date: Date;
  person_id: number;
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

export interface Crash extends Bicyclist {
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
  street_no: number;
  street_direction: string;
  street_name: string;
  most_severe_injury: string;
  injuries_total: number;
  injuries_fatal: number;
  injuries_non_incapacitating: number;
  injuries_reported_not_evident: number;
  injuries_no_indication: number;
  latitude: number;
  longitude: number;
}
