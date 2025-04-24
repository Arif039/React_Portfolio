import arrowImage from '../images/arrow.png';
import supplyImage from '../images/supplychain.png';
import votingImage from '../images/voting.jpg';
import todoImage from '../images/todo.jpg';

export default function Projects () {

    return (

        <div className='w-5/6 m-auto'>

            <h1>This Is Project Page</h1>

            <div className='text-center flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>Projects</h1>
                <h3 className='text-[#697484] text-sm md:w-5/7 m-auto md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam neque sequi minus expedita perferendis enim delectus, asperiores accusantium magni. Praesentium animi, cupiditate sed maiores saepe nobis hic quod minima voluptates!</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={supplyImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize SupplyChain</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a supply chain stem from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button  className='relative overflow-hidden group flex flex-row gap-2 border-1 rounded-lg ml-4 mb-4 w-3/7 md:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-2 border-violet-600 hover:scale-105 transition-transform duration-300' onclick="window.open('https://www.example.com', '_blank');">Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

               
                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={votingImage} alt="voting" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize Voting</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a voting system is the from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button className='relative overflow-hidden group flex flex-row gap-2 border-1 rounded-lg ml-4 mb-4 w-3/7 md:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-2 border-violet-600 hover:scale-105 transition-transform duration-300'>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={todoImage} alt="todo" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize ToDo</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>A decentralized to-do app aims to remove reliance on a central server for storing and managing your tasks. Instead, data is typically distributed across a network of computers. </h3>
                    <button className='relative overflow-hidden group flex flex-row gap-2 border-1 rounded-lg ml-4 mb-4 w-3/7 md:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-2 border-violet-600 hover:scale-105 transition-transform duration-300'>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={supplyImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize SupplyChain</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a supply chain stem from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button className='relative overflow-hidden group flex flex-row gap-2 border-1 rounded-lg ml-4 mb-4 w-3/7 md:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-2 border-violet-600 hover:scale-105 transition-transform duration-300'>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={supplyImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize SupplyChain</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a supply chain stem from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button className='relative overflow-hidden group flex flex-row gap-2 border-1 rounded-lg ml-4 mb-4 w-3/7 md:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-2 border-violet-600 hover:scale-105 transition-transform duration-300'>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>

                <div className='flex flex-col gap-4 border-1 border-gray-300  rounded-md shadow-md'>
                    <img src={supplyImage} alt="supplychain" className='h-90 bg-fixed'/>
                    <h2 className='text-[#697484] px-4'>Decentralize SupplyChain</h2>
                    <h3 className='text-sm  text-[#697484] px-4'>The core benefits of decentralization in a supply chain stem from distributing control and data across multiple participants rather than relying on a central authority.</h3>
                    <button className='relative overflow-hidden group flex flex-row gap-2 border-1 rounded-lg ml-4 mb-4 w-3/7 md:w-2/7 text-sm  cursor-pointer text-violet-600 font-bold px-2 py-2 border-violet-600 hover:scale-105 transition-transform duration-300'>Case Study <img src={arrowImage} alt="arrowImage" className='transition-transform duration-300 ease-in-out group-hover:translate-x-3'/> </button>
                </div>
               

                

            </div>

            <div>
                <button>More projects</button>
            </div>

           
            
        </div>
    )
}