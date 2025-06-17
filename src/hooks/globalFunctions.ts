import apiClient from "@/utils/apiClient";
import { create } from "zustand";

interface itemChildrenNews {
  description: string;
  photo_id: string;
}

interface itemGetNews {
  main_title: string;
  main_photo_id: string;
  main_description: string;
  _id: string;
  content?: itemChildrenNews[];
}

interface objactParams {
  [key: string]: string ;
}

interface GlobalFunctions {
  getItems: (
    url: string,
    params?: objactParams,
    // headers?: any,

    setData?: (data: itemGetNews[] | itemGetNews) => void,
  ) => void | Promise<void>;
}

const globalFunctions = create<GlobalFunctions>(() => ({
  getItems: async (url, params, setData) => {
    const res = await apiClient.get(url, { params });
    if (setData) setData(res.data);
    // return res.data;
  },
}));

export default globalFunctions;
