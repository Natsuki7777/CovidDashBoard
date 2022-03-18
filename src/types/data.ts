import { db } from '@/firebase/init';
import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

// date: Date にするとpropsとして渡せなくなる(JSONserializableなものしか渡せない)
export interface Data {
  date: string;
  value: number;
}

export interface DataList {
  severeCaseList: Data[];
  positiveCaseList: Data[];
  deathCaseList: Data[];
}

export const DataFromDoc = (doc: QueryDocumentSnapshot<DocumentData>, pref: string) => {
  const data: Data = {
    date: doc.id,
    value: doc.data()[pref],
  };
  return data;
};

export const fetchPrefData = async (pref: string): Promise<DataList> => {
  const severeCaseList: Data[] = [];
  const positiveCaseList: Data[] = [];
  const deathCaseList: Data[] = [];

  const severeCaseCollection = collection(db, 'severeCase');
  const positiveCaseCollection = collection(db, 'positiveCase');
  const deathCaseCollection = collection(db, 'deathCase');

  // デフォルトではdocumentIDの昇順
  const severeCaseQuery = query(severeCaseCollection);
  const positiveCaseQuery = query(positiveCaseCollection);
  const deathCaseQuery = query(deathCaseCollection);

  const severeCaseSnapshot: QuerySnapshot<DocumentData> = await getDocs(severeCaseQuery);
  severeCaseSnapshot.forEach((doc) => {
    severeCaseList.push(DataFromDoc(doc, pref));
  });
  const positiveCaseSnapshot: QuerySnapshot<DocumentData> = await getDocs(positiveCaseQuery);
  positiveCaseSnapshot.forEach((doc) => {
    positiveCaseList.push(DataFromDoc(doc, pref));
  });
  const deathCaseSnapshot: QuerySnapshot<DocumentData> = await getDocs(deathCaseQuery);
  deathCaseSnapshot.forEach((doc) => {
    deathCaseList.push(DataFromDoc(doc, pref));
  });
  return {
    severeCaseList: severeCaseList,
    positiveCaseList: positiveCaseList,
    deathCaseList: deathCaseList,
  };
};
