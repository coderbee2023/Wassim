import Image from "next/image";

type TechProps = {
    name: string;
    link: string;
    disc: string;
    imgUrl: string;
};

const TechContainer: React.FC<TechProps> = ({ name, link, disc, imgUrl }) => {
    return (
        <a href={link}>
            <div className="cursor-pointer flex flex-row w-4/5 border-2 border-white p-3">
                <div className="p-1 w-1/3 border-r-2 border-white">
                    <Image src={imgUrl} height={700} width={700} alt="" />
                </div>
                <div className="w-2/3 p-2">
                    <div className="text-xl font-bold">{name}</div>
                    <div className="text-sm">{disc}</div>
                </div>
            </div>
        </a>
    );
};

export default TechContainer;
