import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4">
      <section className="flex flex-1 flex-row justify-center items-center ">
        <div className="flex flex-col gap-4">
          <div className="text-blue-600 text-3xl font-medium">HELLO!</div>
          <div className="text-blue-600 text-6xl font-bold"> <span className=" text-white">Im</span> Wassim <br />Djobbi</div>
          <div className="text-4xl font-medium">Web Developer</div>
          <div className="flex flex-row gap-2">
            <button className="bg-blue-600 text-black p-3 rounded-3xl font-bold hover:text-blue-600 hover:bg-black hover:border-blue-600 hover:border-2">Work with me</button>
            <button className="bg-white rounded-3xl font-bold text-black p-3 px-5 border-2 border-black hover:text-white hover:bg-black hover:border-white">My Work</button>
          </div>
        </div>
        <div className="bg-black">
        <Image src="/mychar2.png" width={500} height={500} alt="Next.js logo" />
        </div>
      </section>
      <section className="flex flex-row justify-center items-center">
        <div><Image src="/mychar2.png" width={500} height={500} alt="Next.js logo"/></div>
        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-4xl">About Me</div>
          <div>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
          <div className="text-white"><strong>Name:</strong> Djobbi Wassim</div>
          <div><strong>Birth Date: </strong>2003/06/21</div>
          <div><strong>Adress: </strong>Tunis,Ariana,Tadhamen 18 January</div>
          <div><strong>Email: </strong>Djobbiwassim5@gmail.com</div>
          <div><strong>Phone: +214 56 566 889</strong></div>
          <div></div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-7">
        <div className="text-5xl font-bold">TechStack</div>
        <div className=" text-gray-400">this is My stack</div>
        <div className="inline-grid grid-cols-4 gap-8">
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/react.png" width={50} height={50} alt="WebDesign"/>
            <div>ReactJs</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/express.png" width={50} height={50} alt="WebDesign"/>
            <div>ExpressJs</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/next.png" width={50} height={100} alt="WebDesign"/>
            <div>NextJs</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/mongodb.png" width={50} height={50} alt="WebDesign"/>
            <div>MongoDb</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/node.png" width={50} height={50} alt="WebDesign"/>
            <div>Node</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/tailwind.png" width={50} height={50} alt="WebDesign"/>
            <div>Tailwind</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/bootstrap.png" width={50} height={50} alt="WebDesign"/>
            <div>Bootstrap</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/git.png" width={50} height={50} alt="WebDesign"/>
            <div>Git</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/github.png" width={50} height={50} alt="WebDesign"/>
            <div>GitHub</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/typescript.png" width={50} height={50} alt="WebDesign"/>
            <div>Typescript</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/figma.png" width={50} height={50} alt="WebDesign"/>
            <div>Figma</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-zinc-900 w-32 h-32 gap-4 cursor-pointer rounded-lg border-blue-600 hover:border-2">
            <Image src="/vercel.png" width={50} height={50} alt="WebDesign"/>
            <div>React Native</div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-7 mt-40">
        <div className="text-5xl font-bold">My Skills</div>
        <div className=" text-gray-400">My Skills are</div>
        <div className="inline-grid grid-cols-1 gap-8">
          <div className="flex flex-col justify-center items-center gap-4 w-80">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-4/5"></div>
            </div>
            <div>FrontEnd developement</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-4/5"></div>
            </div>
            <div>Backend Developemnt</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-4/12"></div>
            </div>
            <div>Mobile developement</div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-32 gap-7">
        <div className="text-5xl font-bold">Blogs</div>
        <div className=" text-gray-400">enjoy reading my tech-related blogs</div>
        <div className="flex flex-row justify-center gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-start items-center bg-zinc-900 w-80 gap-4 cursor-pointer rounded-lg">
            <Image src="/blog.png" className="rounded-t-lg" width={320} height={100} alt="WebDesign"/>
            <div className="px-3">React 19 brings a wave of new features, transforming how developers handle state, errors, and asynchronous tasks. These updates empower developers, making their workflows smoother and applications faster.</div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-start items-center bg-zinc-900 w-80 gap-4 cursor-pointer rounded-lg">
            <Image src="/blog.png" className="rounded-t-lg" width={320} height={100} alt="WebDesign"/>
            <div className="px-3">React 19 brings a wave of new features, transforming how developers handle state, errors, and asynchronous tasks. These updates empower developers, making their workflows smoother and applications faster.</div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-start items-center bg-zinc-900 w-80 gap-4 cursor-pointer rounded-lg">
            <Image src="/blog.png" className="rounded-t-lg" width={320} height={100} alt="WebDesign"/>
            <div className="px-3">React 19 brings a wave of new features, transforming how developers handle state, errors, and asynchronous tasks. These updates empower developers, making their workflows smoother and applications faster.</div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
