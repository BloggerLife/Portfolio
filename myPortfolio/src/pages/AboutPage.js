import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is MacArnold. I'm a full stack developer with experience in ReactJS, Express JS, Node JS, MySQL, MongoDB, and Bootsrap.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas). All my ideas are directly linked to either my career or passion in Art&Design</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS. I'm always fascinated by trending technologies and how they work, so I can claim that I am a tech savvy:)</p>

            <p>My latest project, WeSay Blog, is a blogging site for any audience. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with MongoDB, Express JS, ReactJS and Node JS.</p>

            <p>When I'm not learning something new on Web Development chances are I'm creating some Blog Posts. You can find those <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>

            <p>Other than Web Development, I'm doing a BSc in Psychology. I am always fascinated about how humans operate, as social beigns.This has helped me a lot for my Blog site and life in general.</p>
            </Content>
        </div>
    ); 

}

export default AboutPage;