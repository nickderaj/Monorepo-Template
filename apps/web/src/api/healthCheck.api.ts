import { StatusEnum } from '@/types/ApiTypes';
import { fetcher, handleError } from '@/utils/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080';

export const getHealthCheck = async (): Promise<{
  statusCode: StatusEnum;
  data: { message: string };
}> => {
  try {
    return await fetcher(`${API_URL}/`);
  } catch (error) {
    return handleError(error);
  }
};
