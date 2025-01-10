export default function Fonts() {
    return (
        <div className="text-7xl flex flex-col w-full justify-center items-center gap-2 h-screen">
            <div className="font-serif">This is a serif font.</div>
            <div className="font-oswald">This is Oswald.</div>
            <div className="font-openSans">This is Open Sans.</div>
            <div className="font-workSans">This is Work Sans.</div>
            <div className="font-oswald font-oswaldBold">Bold Oswald</div>
            <div className="font-openSans font-openSansLight">
                Light Open Sans
            </div>
            <div className="font-workSans font-workSansHairline">
                Hairline Work Sans
            </div>
            <div className="font-georgia">This is Georgia.</div>
        </div>
    );
}
