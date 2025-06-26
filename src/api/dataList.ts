import apiClient from "../utils/apiClient";

export const dataList = {
  getDataList: async (url: string) => {
    try {
      const res = await apiClient.get(url);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
