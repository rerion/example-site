import './Section.css';
import './TestimonialSection.css';
import quotMark from '../assets/quotation-mark.svg';

export type TestimonialSectionProps = {
    text: string;
    author: string;
}

export default function TestimonialSection({ text, author }: TestimonialSectionProps) {
    return (
        <section className='section testimonial'>
            <div>
                <img src={quotMark} alt="Quotation mark" />
                <p className='testimonial-text'>{text}</p>
                <p className='testimonial-author'>{author}</p>
            </div>
        </section>
    );
}