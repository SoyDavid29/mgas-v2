const TopMenu: React.FC = () => {
    return (

        <div className="flex w-full h-auto bg-white">

            <div className="py-5 px-2.5 flex flex-col items-center justify-center gap-4.25 w-[143.25px] h-20.25" >
                <h3 className="font-poppins font-medium text-{15px]">PRESIDENTA</h3>
                <button className="w-16.25 h-5.25 border-2 border-[#FFA6F6] text-[12px] text-center rounded-lg">Más info</button>
            </div>

            <div className="py-5 px-2.5 flex flex-col items-center justify-center gap-4.25 bg-[#C728DF] rounded-sm w-[143.25px] h-20.25" >
                <h3 className="font-poppins font-medium text-{15px] text-white">DONACIONES</h3>
                <button className="w-16.25 h-5.25 border-2 border-[#FFA6F6] text-[12px] text-white text-center rounded-sm">Más info</button>
            </div>

            <div className="py-5 px-2.5 flex flex-col items-center justify-center gap-4.25 w-[143.25px] h-20.25" >
                <h3 className="font-poppins font-medium text-{15px]">CONTACTO</h3>
                <button className="w-16.25 h-5.25 border-2 border-[#FFA6F6] text-[12px] text-center rounded-sm">Más info</button>
            </div>

        </div>
    );
}

export default TopMenu; 