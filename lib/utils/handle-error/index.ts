import { toast } from 'sonner';


export class AppError extends Error {
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, AppError.prototype);
    }

    toastMessage(): void {
        toast.error(this.message, {
            classNames: {
                title: 'text-red-500',
                icon: 'text-red-500',
            },
        });
    }
}

export function HandleError(error: unknown) {
    if (error instanceof AppError) {
        toast.error(error.message);
        return;
    }

    if (error instanceof Error) {
        toast.error(error.message, {
            classNames: {
                title: 'text-red-500',
                icon: 'text-red-500',
            },
        });
        return;
    }

    toast.error('خطایی رخ داده است', {
        classNames: {
            title: 'text-red-500',
            icon: 'text-red-500',
        },
    });
}