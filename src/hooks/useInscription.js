import { useState } from "react";
import { registerInscription } from "../services/inscription.service";

export function useInscription() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    open: false,
    success: false,
    code: "",
    message: ""
  });

  const submit = async (data) => {
    setLoading(true);
    try {
      const response = await registerInscription(data);
      setResult({
        open: true,
        success: response.success,
        code: response.code,
        message: response.message
      });
      return response;
    } catch (error) {
      setResult({
        open: true,
        success: false,
        code: "SERVER_ERROR",
        message:
          "No fue posible comunicarse con el servidor."
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const closeResult = () => {
    setResult(prev => ({
      ...prev,
      open: false
    }));
  };

  return {
    loading,
    result,
    submit,
    closeResult
  };
}