const Login=({login,arry})=>{
    return(
        <>
        <div className="pb-5">
        <img src="src\assets\img\8029531c433b7d0e2bf48ca6429ef325.jpg" className="size-9 rounded-full ml-7"></img>
        <h1 className="font-bold text-3xl">{login}</h1></div>
        {/* <div >{arry.map((data)=>(data+" "))}</div>
        <div >{arry.filter(data=>data==='html')}</div> */}
        </>
    )
}
export default Login;