import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const ListCollectionRef = collection(db, "Lists");
class ListDataService {
  addLists = (newList) => {
    return addDoc(ListCollectionRef, newList);
  };

  updateList = (id, updatedList) => {
    const ListDoc = doc(db, "Lists", id);
    return updateDoc(ListDoc, updatedList);
  };

  deleteList = (id) => {
    const ListDoc = doc(db, "Lists", id);
    return deleteDoc(ListDoc);
  };

  getAllLists = () => {
    return getDocs(ListCollectionRef);
  };

  getList = (id) => {
    const ListDoc = doc(db, "Lists", id);
    return getDoc(ListDoc);
  };
}

export default new ListDataService();