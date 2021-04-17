import patientsData from "../data/patients";
import { NonSensitivePatientData, PatientInfo } from "../types";

const getPatientData = (): PatientInfo[] => {
  return patientsData;
};

const nonSensitivePatientData = (): NonSensitivePatientData[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getPatientData,
  nonSensitivePatientData,
};
