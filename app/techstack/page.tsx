import { stackData } from "@/app/techstack/lib/data";
import TechContainer from "@/app/techstack/ui/TechContainer";

const page: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-20">
            <div className="text-5xl font-bold">Introducing my Tech stack</div>
            <div className="grid grid-cols-2 gap-y-3">
                {stackData.map((item:any, index:number) => (
                    <TechContainer
                        key={index}
                        name={item.name}
                        link={item.link}
                        disc={item.disc}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;
