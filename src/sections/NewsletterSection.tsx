import { ChangeEventHandler, useState } from 'react';
import Button from '../generic/Button';
import Input from '../generic/Input';
import './Section.css';
import './NewsletterSection.css';
import { subscribeToNewsletter } from '../api';

export default function TestimonialSection() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState<{ status: 'error' | 'success', message: string }>({ status: 'error', message: '' });

    const onInputChange: ChangeEventHandler<HTMLInputElement> = ev => {
        const value = ev.target.value;
        const emailValid = /^(.+)@(.+)$/.test(value);
        
        if (!emailValid || !value) {
            setFeedback({
                status: 'error',
                message: "Please enter valid email"
            });
        } else {
            setFeedback({
                status: 'success',
                message: ''
            });
        }

        setEmail(value);
    };

    const onSubmit = () => {
        subscribeToNewsletter(email)
            .then(r => {
                if (r.status !== 200) {
                    setFeedback({
                        status: 'error',
                        message: r.body.message
                    });
                } else {
                    setFeedback({
                        status: 'success',
                        message: r.body.message
                    });
                }
                setEmail('');
            });
    }

    return (
        <section className='section'>
            <div className='newsletter'>
                <p className='signup-message'>Sign up for testimonial</p>
                <div className='newsletter-input'>
                    <Input 
                        value={email}
                        onChange={onInputChange}
                        className='newsletter-email' 
                        label="newsletter email" 
                        type="email" 
                        placeholder='Type your email' />
                    <Button onClick={onSubmit} disabled={feedback.status === 'error'}>Submit</Button>
                </div>
                <p className={`subscription-response ${feedback.status}`}>{feedback.message}</p>
            </div>
        </section>
    );
}