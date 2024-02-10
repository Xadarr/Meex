'use client'

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import submitForm from '../api/forms/submitForm';

interface FormValues {
    paintName: string;
    picture: File;
    price: number;
}

const CollectionBody: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        submitForm(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="paintName">Paint Name:</label>
                <input type="text" id="paintName" {...register('paintName', { required: true })} />
                {errors.paintName && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="picture">Picture:</label>
                <input type="file" id="picture" {...register('picture', { required: true })} />
                {errors.picture && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" step="0.01" {...register('price', { required: true })} />
                {errors.price && <span>This field is required</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CollectionBody;
