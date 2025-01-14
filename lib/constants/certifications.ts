import { CertificationType } from '../types';
import TexasBoardOfProfessionalEngineersLogo from '@/assets/images/texas_board_of_professional_engineers_logo.jpg';

export const certifications: CertificationType[] = [
    {
        title: 'Engineer in Training (EIT)',
        credential: 'Credential ID: 81675',
        credentialWebsite: 'https://pels.texas.gov/roster/eitsearch.html',
        credentialImage: TexasBoardOfProfessionalEngineersLogo,
    },
    // {
    //     title: 'AWS Certified Cloud Practitioner',
    //     credentialWebsite:
    //         'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    // },
    // {
    //     title: 'AWS Certified AI Practitioner',
    //     credentialWebsite:
    //         'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
    // },
    // {
    //     title: 'AWS Certified Developer – Associate',
    //     credentialWebsite:
    //         'https://aws.amazon.com/certification/certified-developer-associate/',
    // },
];
