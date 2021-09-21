import { UPDATE_COLLECTIONS } from "./types.js";

export const updateCollections = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
