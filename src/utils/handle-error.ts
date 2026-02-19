import { AxiosError } from 'axios';

export const handleApiError = (error: unknown): string => {
    if(error instanceof AxiosError) {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        switch (status) {
            case 400:
                return `Datos inválidos: ${message || 'Revisa la información proporcionada.'}`;
            case 401:
                return 'No autorizado: Verifica tus credenciales.';
            case 403:
                return 'Prohibido: No tienes permiso para acceder a este recurso.';
            case 404:
                return 'No encontrado: El recurso solicitado no existe.';
            case 500:
                return 'Error del servidor: Intenta nuevamente más tarde.';
            default: 
                return `Error desconocido: ${message || 'Ocurrió un error inesperado.'}`;
        }
    }

     return 'Error de conexión desconocido.';
};