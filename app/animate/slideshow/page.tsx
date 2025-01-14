import SlideShow from '@/components/animate/SlideShow';
import MySQLIcon from '@/components/icons/MySQL';

const Page = () => {
    return (
        <div className="text-7xl flex flex-col w-full justify-center items-center gap-2 h-screen">
            <div className="border-2 border-red-500 p-8 w-96">
                <SlideShow duration={32}>
                    <div className="text-nowrap">Hello World</div>
                    <h3 className="text-nowrap">Next Slide</h3>
                    <p className="text-nowrap">Another One</p>
                    Just Kidding <MySQLIcon size={32} />
                    <div className="text-nowrap">Hello World</div>
                    <h3 className="text-nowrap">Next Slide</h3>
                    <p className="text-nowrap">Another One</p>
                    Just Kidding <MySQLIcon size={32} />
                    <div className="text-nowrap">Hello World</div>
                    <h3 className="text-nowrap">Next Slide</h3>
                    <p className="text-nowrap">Another One</p>
                    Just Kidding <MySQLIcon size={32} />
                    <div className="text-nowrap">Hello World</div>
                    <h3 className="text-nowrap">Next Slide</h3>
                    <p className="text-nowrap">Another One</p>
                    Just Kidding <MySQLIcon size={32} />
                    <div className="text-nowrap">Hello World</div>
                    <h3 className="text-nowrap">Next Slide</h3>
                    <p className="text-nowrap">Another One</p>
                    Just Kidding <MySQLIcon size={32} />
                </SlideShow>
            </div>
        </div>
    );
};

export default Page;
