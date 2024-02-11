'use client'

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import submitForm from '../api/forms/submitForm';

interface FormValues {
    name: string;
    picture: File;
    price: number;
    type: string;
}

const CollectionBody: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        submitForm(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Paint Name:</label>
                <input type="text" id="name" {...register('name', {required: true})} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <input type="text" id="type" {...register('type', {required: true})} />
                {errors.type && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="picture">Picture:</label>
                <input type="file" id="picture" {...register('picture', {required: true})} />
                {errors.picture && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" step="0.01" {...register('price', {required: true})} />
                {errors.price && <span>This field is required</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CollectionBody;
