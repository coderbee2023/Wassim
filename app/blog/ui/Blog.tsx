import Image from "next/image"
type blog={
    id:string;
    name: string;
    disc: string;
    smalldisc: string;
    imgUrl: string;
}
const Blog : React.FC<blog> = ({ id,name, disc, smalldisc, imgUrl }) => {
  return (
    <div className="flex flex-col h-[450px] hover:bg-zinc-700 cursor-pointer rounded-lg transition duration-300 ease-in-out hover:filter hover:grayscale" key={id}>
        <div className="bg-white rounded-t-lg">
          <Image 
          src={imgUrl} 
          alt={name} 
          layout="responsive" 
          width={250} 
          height={250} 
          objectFit="cover" 
          className="rounded-t-lg "
        />
        </div>
        <div className="text-2xl font-bold px-3">{name}</div>
        <div className="text-md font-thin px-3">{smalldisc}</div>
    </div>
  )
}
export default Blog;