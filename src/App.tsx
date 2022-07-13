import React from 'react';
import { page, Pages, pages } from './api';
import './App.css';
import logo from './assets/logo.svg';
import Button from './generic/Button';
import HeroSection from './sections/HeroSection';
import NewsletterSection from './sections/NewsletterSection';
import TestimonialSection from './sections/TestimonialSection';

const getLinks = (ps: Pages) => ps
    .filter(p => p.url !== '/')
    .map(p => ({
        ...p, name: p.url.slice(1).split('/')
    }));

const getMainPage = (ps: Pages) => ps
    .find(p => p.url === '/')!; // assume there is a homepage

function App() {
    const mainPage = getMainPage(pages);
    const navItems = getLinks(pages);

    return (<>
        <header className="header">
            <a href={mainPage.url}>
                <img src={logo} alt="Breally logo"></img>
            </a>
            <nav className="navigation">
                {navItems.map(navItem => {
                    return <a href={navItem.url} className="nav-link">{navItem.name}</a>;
                })}
            </nav>
            <Button>Contact us</Button>
        </header>
        <main className="main">
            {page.sections.map(section => {
                if (section.type === 'hero') {
                    return <HeroSection {...section}></HeroSection>;
                }
                if (section.type === 'testimonial') {
                    return <TestimonialSection {...section}></TestimonialSection>;
                }
                if (section.type === 'newsletter') {
                    return <NewsletterSection></NewsletterSection>;
                }
                return null;
            })}
        </main>
    </>);
}

export default App;
