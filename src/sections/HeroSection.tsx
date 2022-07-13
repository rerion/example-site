import "./HeroSection.css";
import './Section.css';

export type HeroSectionProps = {
    text: string;
    img: string;
}

export default function HeroSection({ text, img }: HeroSectionProps) {
    return (
        <section className="section">
            <div className="hero">
                <p className="text-rect">{text}</p>
                <div className="image-rect" style={{ backgroundImage: `url(${img})` }}></div>
            </div>
        </section>
    );
}