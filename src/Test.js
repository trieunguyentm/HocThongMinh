import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function MyPage() {

    useEffect(() => {
        console.log("error2:", errorsForm2)
    })

    // Đối với Form 2
    const { register: registerForm2, handleSubmit: handleSubmitForm2, formState: { errors: errorsForm2 } } = useForm();

    const onSubmitForm2 = (data) => {
        console.log('Form 2 data:', data);
    };

    return (
        <div>
            <form onSubmit={handleSubmitForm2(onSubmitForm2)}>
                <div className='xyz'>
                    <input {...registerForm2('email', { required: "Bắt buộc" })} placeholder="Email" />
                    {errorsForm2.email && <p>This field is required.</p>}
                    <Button type='submit'>
                        submit
                    </Button>
                    <input type='text'></input>
                </div>

            </form>
        </div>
    );
}

export default MyPage;
