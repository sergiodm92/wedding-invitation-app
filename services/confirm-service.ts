import { confirmData } from '@/types/confirmAttendance';
import axios from 'axios';

export const confirmAttendance = async (data: confirmData) => {
  try {
    const res = await axios.post("/api/confirm-attendance", data);

    if (res.status === 201) {
      return true;
    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
      } else {
        throw { message: "No response from server" };
      }
    } else {
      throw { message: "Network Error" };
    }
  }
};
