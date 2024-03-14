"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partValidation = void 0;
const zod_1 = require("zod");
const createPcPartZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        Model: zod_1.z.string().min(1, { message: 'Model is required' }),
        InputSensitivity: zod_1.z.string(),
        FrequencyResponse: zod_1.z.string(),
        Price: zod_1.z
            .number()
            .min(0, { message: 'Price must be a non-negative number' }),
        Brand: zod_1.z.string().min(1, { message: 'Brand is required' }),
        Type: zod_1.z.string(),
        SystemRequirements: zod_1.z.string(),
        Details: zod_1.z.string().min(1, { message: 'Details are required' }),
        Category: zod_1.z.string().min(1, { message: 'Category is required' }),
        ProductId: zod_1.z
            .number()
            .int()
            .positive({ message: 'ProductId must be a positive integer' }),
        img1: zod_1.z.string(),
        img2: zod_1.z.string(),
        AvgRatings: zod_1.z
            .number()
            .min(0)
            .max(5, { message: 'Average Ratings must be between 0 and 5' }),
        Status: zod_1.z.string(),
        Reviews: zod_1.z.array(zod_1.z.string()),
    }),
});
exports.partValidation = {
    createPcPartZodSchema,
};
