export interface PatientInfo {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export interface DiagnonsesData {
  code: string;
  name: string;
  latin?: string;
}

export type NonSensitivePatientData = Omit<PatientInfo, "ssn">;
