import Image from 'next/image';

const PythonIcon = ({
    size,
    className,
}: {
    size: number;
    className: string;
}) => {
    return (
        <Image
            width={size}
            height={size}
            draggable={false}
            src={
                'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'
            }
            alt={'python-logo'}
            quality={100}
        />
    );
};

export default PythonIcon;
