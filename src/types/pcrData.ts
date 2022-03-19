import { db } from '@/firebase/init';
import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

export const pcrType = {
  medicalInstitution: '医療機関',
  infectiousDiseases: '国立感染症研究所',
  publicHealth: '地方衛生研究所・保健所',
  universities: '大学等',
  quarantineStation: '検疫所',
  selfFunded: '民間検査会社（主に自費検査）',
  administrative: '民間検査会社（主に行政検査）',
};

export interface PcrData {
  date: string;
  total: number;
  medicalInstitution: number;
  infectiousDiseases: number;
  publicHealth: number;
  universities: number;
  quarantineStation: number;
  selfFunded: number;
  administrative: number;
}

export const pcrDataFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const data: PcrData = {
    date: doc.id,
    total: doc.data()['計'],
    medicalInstitution: doc.data()[pcrType.medicalInstitution],
    infectiousDiseases: doc.data()[pcrType.infectiousDiseases],
    publicHealth: doc.data()[pcrType.publicHealth],
    universities: doc.data()[pcrType.universities],
    quarantineStation: doc.data()[pcrType.quarantineStation],
    selfFunded: doc.data()[pcrType.selfFunded],
    administrative: doc.data()[pcrType.administrative],
  };
  return data;
};

export const fetchPcrData = async (): Promise<PcrData[]> => {
  const pcrDataList: PcrData[] = [];
  const pcrDataCollection = collection(db, 'pcrCaseInstitution');
  const pcrDataQuery = query(pcrDataCollection);
  const pcrDataSnapshot: QuerySnapshot<DocumentData> = await getDocs(pcrDataQuery);
  pcrDataSnapshot.forEach((doc) => {
    pcrDataList.push(pcrDataFromDoc(doc));
  });
  return pcrDataList;
};
