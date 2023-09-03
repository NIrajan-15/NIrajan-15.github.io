import dxc from '../Images/dxc.png';
import ulm from '../Images/ulm.png';
import lsbdc from '../Images/lsbdc.png';

const  ExperienceData = () =>
{
    const experiences = [
        {
          companyLogo: dxc,
          companyName: 'DXC Technology',
          jobTitle: 'Software Engineering Intern',
          dateWorked: 'Jun 2023 – Present',
          location: 'New Orleans, LA',
        },
        {
          companyLogo: lsbdc,
          companyName: 'IBM Technology LED Grant',
          jobTitle: 'Software Developer',
          dateWorked: 'Aug 2021 – Aug 2023',
          location: 'Monroe, LA',
        },
        {
          companyLogo: dxc,
          companyName: 'DXC Technology',
          jobTitle: 'Technical Intern',
          dateWorked: 'Jun 2022 - Aug 2022',
          location: 'New Orleans, LA',
        },
        {
          companyLogo: ulm,
          companyName: 'University of Louisiana Monroe',
          jobTitle: 'Undergraduate Teaching Assistant',
          dateWorked: 'Feb 2022 - Nov 2022',
          location: 'Monroe, LA',
        },
        // Add more experiences here
       ];
      return experiences;

}
export default ExperienceData;