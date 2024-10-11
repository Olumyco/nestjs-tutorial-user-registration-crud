

import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { TransformInterceptor } from "./interceptors/transform.interceptor";
import { TransactionInterceptor } from "./interceptors/transaction.interceptor";
import { ValidationPipe } from "@nestjs/common";

export const appProvider = [
    {
        provide: APP_INTERCEPTOR, 
        useClass: TransformInterceptor
    },
    {
        provide: APP_INTERCEPTOR, 
        useClass: TransactionInterceptor
    },
    {
        provide: APP_PIPE,
        useValue: new ValidationPipe({
            whitelist: true,
            transform: true,
            transformOptions: { enableImplicitConversion: true }
        })
    }
];