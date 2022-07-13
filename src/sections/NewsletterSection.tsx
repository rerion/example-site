import Button from '../generic/Button';
import './Section.css';
import './NewsletterSection.css';
import Input from '../generic/Input';

export default function TestimonialSection() {
    return (
        <section className='section'>
            <div className='newsletter'>
                <p className='signup-message'>Sign up for testimonial</p>
                <div className='newsletter-input'>
                    <Input 
                        className='newsletter-email' 
                        label="newsletter email" 
                        type="email" 
                        placeholder='Type your email' />
                    <Button>Submit</Button>
                </div>
                <p className='subsription-response'>Thank you</p>
            </div>
        </section>
    );
}