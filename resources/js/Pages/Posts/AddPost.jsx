

import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';

const AddPost = () => {
    const { data, setData, post, processing, errors } = useForm({
        body: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/post/store', {
            onSuccess: () => setData({ body: '' }),
        });
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-md shadow-md mt-6">
            <Head title="Create Post" />
            <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-4">Body</label>
                    <textarea
                        id="body"
                        name="body"
                        rows="4"
                        onChange={(e) => setData('body', e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md ${processing && 'opacity-50'}`}
                >
                    {processing ? 'Submitting...' : 'Create Post'}
                </button>
            </form>
        </div>
    );
};

export default AddPost;
