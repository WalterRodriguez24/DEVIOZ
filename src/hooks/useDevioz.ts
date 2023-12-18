import { deviozAPI } from "../api/deviozAPI";
import { isAxiosError, AxiosError } from "axios";
import { DataI } from "../interfaces/data";

interface ResponseI {
  response?: string;
  data?: DataI;
  ok: boolean;
}

const useDevioz = () => {
  const handleGetData = async (): Promise<ResponseI> => {
    try {
      const response = await deviozAPI.get<DataI>("/sections");

      if (response.status !== 200) {
        throw new Error("Error al momento de traer los datos");
      }

      console.log(response.data);
      const data = response.data;
      return { data: data, ok: true };
    } catch (error) {
      return handleManagmentError((error as AxiosError) || (error as Error));
    }
  };

  const handleManagmentError = (error: AxiosError | Error) => {
    if (isAxiosError(error)) {
      return { response: error.response?.data, ok: false };
    }

    if (error instanceof Error) {
      return { response: error.message, ok: false };
    } else {
      return { response: "Error de inicio de sesión", ok: false };
    }
  };

  return {
    handleGetData,
  };
};

export default useDevioz;
