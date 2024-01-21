import { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation, check passwords match, etc.

        // Simulate AJAX request
        // Replace this with your actual AJAX request using a library like axios or fetch
        setTimeout(() => {
            console.log('Form submitted:', formData);
            // Reset form after successful submission
            setFormData({
                username: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
            });
        }, 500);
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='p-8 rounded shadow-md w-96'>
                <h2 className='text-2xl font-semibold mb-6'>Sign Up</h2>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div>
                        <label
                            htmlFor='username'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Username
                        </label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    {/* Phone Input */}
                    <div>
                        <label
                            htmlFor='phone'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Phone
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                        <label
                            htmlFor='confirmPassword'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
                    >
                        Sign Up
                    </button>
                </form>

                {/* Login Link */}
                <div className='mt-4 text-center'>
                    <span className='text-sm text-gray-600'>
                        Already have an account?
                    </span>{' '}
                    <a href='#' className='text-blue-500 hover:underline'>
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
