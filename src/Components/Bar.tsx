import MenuBtn from "./MenuBtn";

const Bar: React.FC = () => {
    
    return(
       <div className="w-full h-auto pt-8 flex justify-between items-center fixed top-0">
        <img className="w-5/12 h-auto ml-4 mt-2" src="/img/logo.png" alt="logo fundacionMgas" />
        <MenuBtn/>
       </div>
    );

}

export default Bar;