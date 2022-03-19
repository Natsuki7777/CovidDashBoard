import { db } from '@/firebase/init';
import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

// date: Date にするとpropsとして渡せなくなる(JSONserializableなものしか渡せない)
export interface Data {
  date: string;
  value: number;
}

export interface DataList {
  positiveCaseList: Data[];
  severeCaseList: Data[];
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
  const positiveCaseList: Data[] = [];
  const severeCaseList: Data[] = [];
  const deathCaseList: Data[] = [];

  const positiveCaseCollection = collection(db, 'positiveCase');
  const severeCaseCollection = collection(db, 'severeCase');
  const deathCaseCollection = collection(db, 'deathCase');

  // デフォルトではdocumentIDの昇順
  const severeCaseQuery = query(severeCaseCollection);
  const positiveCaseQuery = query(positiveCaseCollection);
  const deathCaseQuery = query(deathCaseCollection);

  const positiveCaseSnapshot: QuerySnapshot<DocumentData> = await getDocs(positiveCaseQuery);
  positiveCaseSnapshot.forEach((doc) => {
    positiveCaseList.push(DataFromDoc(doc, pref));
  });
  const severeCaseSnapshot: QuerySnapshot<DocumentData> = await getDocs(severeCaseQuery);
  severeCaseSnapshot.forEach((doc) => {
    severeCaseList.push(DataFromDoc(doc, pref));
  });
  const deathCaseSnapshot: QuerySnapshot<DocumentData> = await getDocs(deathCaseQuery);
  deathCaseSnapshot.forEach((doc) => {
    deathCaseList.push(DataFromDoc(doc, pref));
  });

  // 死亡者数は累計なので、一日当たりに換算する
  let lastValue: number = 0;
  deathCaseList.forEach((data: Data) => {
    const currentValue = data.value;
    data.value = currentValue - lastValue;
    lastValue = currentValue;
  });

  return {
    positiveCaseList: positiveCaseList,
    severeCaseList: severeCaseList,
    deathCaseList: deathCaseList,
  };
};
