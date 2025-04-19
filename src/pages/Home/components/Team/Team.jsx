import React from 'react';

// ASSETS
import './Team.scss';
import ImgTeam1 from '../../../../assets/home/team-card1.svg'
import ImgTeam2 from '../../../../assets/home/team-card2.svg'
import ImgTeam3 from '../../../../assets/home/team-card3.svg'
import ImgTeam4 from '../../../../assets/home/team-card4.svg'
import ImgTeam5 from '../../../../assets/home/team-card5.svg'
import ImgTeam6 from '../../../../assets/home/team-card6.svg'
import logoLinkedin from '../../../../assets/home/logo-linkedin.svg'

const Team = () => {
    const teamMembersData = [
        {
            name: 'John Smith',
            cargo: 'CEO and Founder',
            img: ImgTeam1,
            description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        },
        {
            name: 'Jane Doe',
            cargo: 'Director of Operations',
            img: ImgTeam2,
            description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        },
        {
            name: 'Michael Brown',
            cargo: 'Senior SEO Specialist',
            img: ImgTeam3,
            description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        },
        {
            name: 'Emily Johnson',
            cargo: 'PPC Manager',
            img: ImgTeam4,
            description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        },
        {
            name: 'Brian Willians',
            cargo: 'Social Media Specialist',
            img: ImgTeam5,
            description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        },
        {
            name: 'Sarah Kim',
            cargo: 'Content Creator',
            img: ImgTeam6,
            description: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        },
    ]
	return (
		<>
			<div className="container title-content d-flex al-center">
                <h3>Team</h3>
                <p>
                    Meet the skilled and experienced team behind our <br/>
                    successful digital marketing strategies
                </p>
            </div>
            <div className='container team-cards d-grid al-center'>
            {teamMembersData.map((teamMember, index) => (
                <div className="card-team" key={index}>
                    <div className='card-title d-flex jc-space-between'>
                        <div className='d-flex jc-flex-end'>
                            <img className='team-member-img' src={teamMember.img} alt={`Team Member ${index + 1}`} />
                            <div className='d-flex flex-column jc-flex-end card-title-name'>
                                <h3>{teamMember.name}</h3>
                                <p>{teamMember.cargo}</p>
                            </div>
                        </div>
                        <div className='logo-linkedin d-flex jc-end al-start'> 
                            <a href="https://linkedin.com.br" target='_blank'>
                                <img className='logo-img' src={logoLinkedin} alt="LinkedIn Logo" />
                            </a>
                        </div>
                    </div>
                    <div className='card-text'>
                        <p>
                            {teamMember.description}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </>
		
	);
};

export default Team;