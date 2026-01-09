import Bar from "./Components/Bar"

function App() {


  return (
    <>
      <Bar />

      <header className="w-full h-58.25 bg-[#EA63FF] mt-29">
        <div className="flex items-center justify-between p-3">

          <div>
            <h1 className="text-3xl font-poppins font-bold text-white">SOMOS UNA FUNDACION</h1>
            <h3 className=" text-white" >SIN FINES DE LUCRO</h3>
          </div>

          <img src="/img/logoMGAS.png" alt="logo" />

        </div>

      </header>
    </>
  )
}

export default App
